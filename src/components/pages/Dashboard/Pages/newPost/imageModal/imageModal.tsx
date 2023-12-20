"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import GalleryCards from "@/components/pages/Dashboard/Pages/newPost/galleryCards/galleryCards";
import { Editor } from "@tiptap/react";
import { ImageUrl, Prisma } from "@prisma/client";

//* TypeScript - types & interfaces
interface ImageDetails {
  id: number;
  url: string;
}
interface SelectedImage {
  name: string;
  type: string;
  size: number;
  objectURL?: string;
}



const GalleryModal = ({ editor }: { editor?: Editor | null }) => {
  const [selectedImage, setSelectedImage] = useState<File>(); //!image object
  const [image, setImage] = useState<string>(""); //! handle image URL
  const [savedImages, setSavedImages] = useState<ImageUrl[]>([]);

  //* Upload Picture and Change again
  const handleImageChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const selectedFile = event.target.files?.[0];
    if (selectedFile) {
      //! set the file
      setSelectedImage(selectedFile);
    }

    event.target.value = ""; //! reset the input field
  };

  //? Confirm the Picture save on file system
  const handleConfirmPic = async () => {
    //todo make toast
    if (selectedImage) {
      const formData = new FormData();
      formData.set("file", selectedImage);

      const response = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();
      // console.log(data)
      setSavedImages((prev) => [ data,...prev]);
      // after confirming the picture do rest.....
      setImage("");
      setSelectedImage(undefined);
    }
  };

  //* Confirm the Picture
  const handleCancelPic = () => {
    // after confirming the picture do rest.....
    setSelectedImage(undefined);
  };

  const addImage = () => {
    if (!editor) {
      return null;
    }

    if (image) {
      editor.chain().focus().setImage({ src: image }).run();
    }
    setImage("");
  };

  useEffect(() => {
    const fetchSavedImages = async () => {
      const response = await fetch("/api/upload");
      const data = await response.json();
      // console.log(data)
      setSavedImages(data);
    };
    fetchSavedImages();
  }, []);
  console.log(savedImages)
  return (
    <>
      <div className="text-center absolute top-10 right-10">
        {/* Put this part before </body> tag */}
        <input
          type="checkbox"
          id="galleryModal" //todo change id for each modal dynamically
          className="modal-toggle"
        />
        <div className="modal modal-bottom sm:modal-middle">
          <div style={{ maxWidth: "1600px" }} className="modal-box p-0">
            {/*//! close modal */}
            <label
              htmlFor="galleryModal" //todo change id for each modal dynamically
              className="absolute top-2 right-2 z-30 cursor-pointer"
            >
              <svg
                className="swap-on fill-white"
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 512 512"
              >
                <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
              </svg>
            </label>
            {/*//! close modal */}

            <div className="card w-full">
              <div className="card-body p-4 md:p-8">
                {/* //!image url pase area for save on editor start */}
               {editor && <div className="form-control flex flex-row items-center flex-nowrap justify-between gap-x-4 mt-3">
                  <input
                    type="url"
                    placeholder="Paste URL here only for editor........"
                    value={image}
                    className="input input-bordered focus:outline-none flex-1 text-white"
                    onChange={(e) => setImage(e.target.value)}
                    onBlur={(e) => setImage(e.target.value)}
                  />
                  <button onClick={addImage} className="btn btn-success">
                    Add New
                  </button>
                </div>}
                {/* //!image url pase area for save on editor start */}

                <div className="mt-6">
                  {/* //! image upload start */}
                  <div className="flex flex-col justify-center items-center px-4">
                    {/* //!picture upload section - start */}
                    <label
                      htmlFor="image-upload"
                      className={`border-2 border-blue border-dashed rounded-xl w-full max-w-[360px]  flex flex-col items-center justify-between py-5 px-4 mb-6 space-y-6 ${
                        selectedImage ? "" : "cursor-pointer"
                      }`}
                    >
                      {selectedImage ? null : (
                        <p className="text-xl font-semibold text-white">
                          Choose an image
                        </p>
                      )}
                      {selectedImage ? (
                        <div className="h-full w-full bg-black rounded-full relative">
                          <Image
                            src={URL.createObjectURL(selectedImage)}
                            alt="image"
                            width={360}
                            height={200}
                            style={{ borderRadius: "2%" }}
                            className="bg-black object-contain"
                          />
                        </div>
                      ) : (
                        <Image
                          src="/media/upload-image-icon.png"
                          alt=""
                          height={64}
                          width={64}
                        />
                      )}
                      <input
                        type="file"
                        name="image-upload"
                        id="image-upload"
                        className="hidden"
                        onChange={handleImageChange}
                      />
                      {selectedImage ? null : (
                        <label
                          htmlFor="image-upload"
                          className="px-5 py-2 rounded-md bg-white text-black"
                        >
                          Upload
                        </label>
                      )}
                      {/* //!picture upload section - end */}
                    </label>
                    {selectedImage ? (
                      <div className="my-4">
                        <button
                          className="px-5 py-2 rounded-md bg-red-600 text-white mr-6"
                          onClick={handleCancelPic}
                        >
                          Cancel
                        </button>
                        <button
                          className="px-5 py-2 rounded-md bg-green-600 text-white"
                          onClick={handleConfirmPic}
                        >
                          Confirm
                        </button>
                      </div>
                    ) : null}
                  </div>
                  {/* //!picture upload container - end */}
                  {/*//! image upload end */}

                  {/* //!picture gallery section - start */}
                  <h2 className="text-white font-bold text-3xl font-serif border-b-2 border-yellow-400 inline-block pb-2 mb-8 text-center">
                    Gallery
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-8 md:gap-8">
                    {savedImages?.length > 0 ? (
                      savedImages.map((savedImage) => (
                        <GalleryCards key={savedImage.id} {...savedImage} />
                      ))
                    ) : (
                      <>
                        <h2 className="text-4xl text-warning font-bold text-center">
                          No image saved yet
                        </h2>
                      </>
                    )}
                  </div>
                </div>
                {/* //!picture gallery section - end */}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* //!picture gallery section - end */}
    </>
  );
};

export default GalleryModal;
