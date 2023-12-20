import { useQuotationContext } from "@/contexts/QuotationContext/QuotationContext";
import Image from "next/image";
import { useState } from "react";
import { useDropzone } from "react-dropzone";
import { FaFileImage, FaSpinner } from "react-icons/fa";

const AddImageContainer = () => {
  const { uploadedImages, setUploadedImages } = useQuotationContext();
  console.log(uploadedImages);
  const [uploading, setUploading] = useState(false);
  const handleDrop = (file: File[]) => {
    setUploading(true);
    const formData = new FormData();
    formData.append("image", file[0]);

    // TODO: have to update the api key with the company api key
    fetch(
      "https://api.imgbb.com/1/upload?key=18ddd86d254c9e3de081b003453ca635",
      {
        method: "POST",
        body: formData,
      }
    )
      .then((response) => response.json())
      .then((data) => {
        const url = data?.data?.url;
        if (url) {
          setUploading(false);

          // set the url to the uploadedImages
          if (uploadedImages === null) {
            setUploadedImages([url]);
          } else {
            setUploadedImages([...uploadedImages, url]);
          }
        }
      })
      .catch((error) => {
        setUploading(false);
        // TODO: Have to show the image fail message in the ui
        console.error("Error uploading image: ", error);
      });
  };
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop: handleDrop,
  });

  return (
    <div
      className={`relative w-full min-h-[320px] md:min-h-[400px]  bg-blue-100 rounded-md ${
        isDragActive && "bg-blue-300"
      }`}
      {...getRootProps()}
    >
      <div className="w-full h-full flex gap-4 p-4 md:p-6 rounded-md">
        {
          // /* render all the uploadedImages here */
          uploadedImages &&
            uploadedImages.map((imageUrl, index) => (
              <Image
                width={120}
                height={120}
                key={index}
                alt="sample img"
                src={imageUrl}
              />
            ))
        }
      </div>

      <input {...getInputProps()} />

      {/* placeholder loading for uploading time */}
      {uploading ? (
        <div className="absolute rounded-md flex items-center justify-center top-0 left-0 w-full h-full bg-blue-500/60">
          <FaSpinner className="animate-spin text-5xl" />
        </div>
      ) : (
        <div className="flex absolute w-full h-full top-0 left-0 flex-col items-center justify-center">
          <FaFileImage className="text-7xl" />
          <p className="text-base">Drop files here, paste or browse files</p>
        </div>
      )}
    </div>
  );
};

export default AddImageContainer;
