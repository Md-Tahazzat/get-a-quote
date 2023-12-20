import { useQuotationContext } from "@/contexts/QuotationContext/QuotationContext";
import { FaMinus, FaPlus } from "react-icons/fa";
import AddImageContainer from "./AddImageContainer";

const UploadImagesContainer = () => {
  const { setApplicationAmount, applicationAmount } = useQuotationContext();

  // increase functionality
  const handleIncrease = () => {
    setApplicationAmount(applicationAmount + 1);
  };

  // decrease functionality
  const handleDecrease = () => {
    if (applicationAmount === 1) {
      return alert("minimum 1 application required");
    }
    setApplicationAmount(applicationAmount - 1);
  };
  return (
    <>
      <p className="text-blue-400 mt-10 md:mt-14 text-xs mb-1">UPLOAD IMAGES</p>
      <h2 className="text-3xl font-semibold text-blue-800 mb-2">
        How many application do you need?
      </h2>

      <p className="text-blue-900 font-medium mb-8">
        We’ll apply the services you’ve selected to all images in this order.
      </p>

      {/* number of application */}
      <p className=" text-slate-700 mb-4">Number of Application</p>
      <div className="flex mb-12 items-center justify-center gap-10 bg-slate-100 w-44 py-1 rounded-md font-semibold text-xl">
        <button
          onClick={handleDecrease}
          className="p-2 text-sm bg-blue-500 hover:bg-blue-600 duration-200 text-white rounded-full"
        >
          <FaMinus />
        </button>
        <span className="text-slate-800">{applicationAmount}</span>
        <button
          onClick={handleIncrease}
          className="p-2 text-sm bg-blue-500 hover:bg-blue-600 duration-200 text-white rounded-full"
        >
          <FaPlus />
        </button>
      </div>

      {/* upload sample of the application */}
      <h2 className="text-3xl font-semibold text-blue-800 mb-2">
        Upload your images
      </h2>
      <p className="text-blue-900 font-medium mb-8">
        Seeing your images will help us make sure your quote is accurate. It
        also means we can get to work as soon as you approve your quote, so you
        get your final application back sooner.
      </p>

      {/* image upload container */}
      <div className="mb-32">
        <AddImageContainer />
        <p className="mt-2 text-slate-700">
          Acceptable file types: JPG (preferred), PSD, TIFF, PNG, NEF, RAW, CR2,
          DNG, PDF
        </p>
      </div>
    </>
  );
};

export default UploadImagesContainer;
