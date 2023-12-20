import { Dispatch, FC, useState } from "react";
import { FaImage } from "react-icons/fa";

interface ThemeShortDescProps {
  dispatch: Dispatch<any>;
  Constant: any;
  state: any;
}

const ThemeShortDesc: FC<ThemeShortDescProps> = ({
  Constant,
  dispatch,
  state,
}) => {
  const [remainingCharacters, setRemainingCharacters] = useState(180);
  return (
    <div className="my-8 space-y-6">
      {/* theme image */}
      <div className="">
        <label
          htmlFor="themeImage"
          className="text-sky-950 font-semibold text-lg"
        >
          Theme Image Url
        </label>
        <div className="flex items-center gap-8">
          <input
            type="url"
            name="themeImage"
            id="themeImage"
            className="w-full border border-gray-300 rounded-lg p-2 bg-white text-black"
            placeholder="Copy the image url and paste here"
            onChange={(e) => {
              dispatch({ type: Constant.themeImage, payload: e.target.value });
            }}
          />
          <button
            className={`rounded border border-[#000] text-sky-950 bg-white text-lg`}
            // onClick={addImage}
          >
            <label className="rounded p-2 block" htmlFor="galleryModal">
              <FaImage title="Image"></FaImage>
            </label>
          </button>
        </div>
      </div>
      {/* title */}
      <div className="">
        <label htmlFor="title" className="text-sky-950 font-semibold text-lg">
          Title
        </label>
        <input
          type="text"
          name="title"
          id="title"
          className="w-full border border-gray-300 rounded-lg p-2 bg-white text-black"
          placeholder="Title"
          required
          onChange={(e) => {
            dispatch({ type: Constant.title, payload: e.target.value });
          }}
        />
      </div>
      {/* short description maximum 180 character  */}
      <div className="">
        <label
          htmlFor="shortDescription"
          className="text-sky-950 font-semibold text-lg"
        >
          Short Description
        </label>
        <textarea
          name="shortDescription"
          id="shortDescription"
          className="w-full border border-gray-300 rounded-lg p-2 bg-white text-black"
          required
          placeholder="Short Description"
          maxLength={180}
          // disabled={remainingCharacters <= 0}
          onChange={(e) => {
            dispatch({
              type: Constant.shortDescription,
              payload: e.target.value,
            });
            setRemainingCharacters(180 - e.target.value.length);
          }}
        />

        {/* remaining characters is showing here */}
        <div className="flex justify-end">
          <p className="text-sm">{remainingCharacters}/180</p>
        </div>
      </div>

      <div className="flex items-center justify-between gap-6">
        {/* tags */}
        <div className="flex-1">
          <div className="flex items-center gap-4">
            <label
              htmlFor="tags"
              className="text-sky-950 font-semibold text-lg"
            >
              Tags
            </label>
            <div className="flex items-center gap-1 flex-wrap">
              {
                // TODO : tags are not working
                state.tags.map((tag: any, i: number) => (
                  <p
                    className="text-xs bg-sky-950 text-white rounded py-px px-1 whitespace-nowrap"
                    key={`${tag}-${i}`}
                  >
                    {tag}
                  </p>
                ))
              }
            </div>
          </div>
          <input
            type="text"
            name="tags"
            id="tags"
            className="w-full border border-gray-300 rounded-lg p-2 bg-white text-black"
            placeholder="each tags is separated by comma ',' like 'tag1,tag2,tag3"
            onChange={(e) => {
              dispatch({
                type: Constant.tags,
                payload: e.target.value.split(","),
              });
            }}
          />
        </div>
        {/* category */}
        <div className="">
          <label
            htmlFor="category"
            className="text-sky-950 font-semibold text-lg"
          >
            Category
          </label>
          <input
            type="text"
            name="category"
            id="category"
            className="w-full border border-gray-300 rounded-lg p-2 bg-white text-black"
            placeholder="Category"
            onChange={(e) => {
              dispatch({ type: Constant.category, payload: e.target.value });
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default ThemeShortDesc;
