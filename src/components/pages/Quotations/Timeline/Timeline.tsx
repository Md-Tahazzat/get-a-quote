import { useQuotationContext } from "@/contexts/QuotationContext/QuotationContext";
import { MdDone } from "react-icons/md";
import "./Timeline.css";

const Timeline = () => {
  const { timeline, setTimeline, selectedServices, uploadedImages } =
    useQuotationContext();

  const handleActiveLabel = (index: number) => {
    const { activeLabelIndex, completeLabelIndex } = timeline;

    // return if user click the same label or skip the next label and click too far.
    if (activeLabelIndex === index || index - 2 > completeLabelIndex) return;

    // Backward functionality
    if (activeLabelIndex > index) {
      setTimeline({
        activeLabelIndex: index,
        completeLabelIndex: timeline.completeLabelIndex,
      });
      return;
    }

    // forward functionality
    /*
     * Return conditions:
     * if the user doesn't select any service and click to the ADD COMMENTS laebl return.
     * if the user doesn't upload any images and click to CONTACT INFORMATION label return.
     */
    if (index === 2 && !selectedServices && completeLabelIndex === 0) {
      return alert("please add a service first");
    }

    if (index === 3 && completeLabelIndex === 1) {
      alert("Default time selected");
    }

    if (index === 4 && !uploadedImages && completeLabelIndex === 2) {
      return alert("Please upload a sample image");
    }

    setTimeline({
      activeLabelIndex: index,
      completeLabelIndex:
        activeLabelIndex > completeLabelIndex
          ? completeLabelIndex + 1
          : completeLabelIndex,
    });
  };

  return (
    <div className="w-full md:w-2/6 md:sticky top-0 min-h-[100dvh] z-50  px-4 text-slate-600 bg-slate-100 font-semibold pt-10 md:px-6 lg:px-12">
      <h3 className="text-2xl font-semibold mb-2">Get your custom quote</h3>
      <p className="mb-10">
        Tell us what you need, and we’ll send your custom quote within 45
        minutes.
      </p>

      {/* services labels */}
      <ul id="service-label-ul" className="relative">
        <li
          onClick={() => handleActiveLabel(1)}
          className={`flex items-center gap-5 cursor-pointer hover:bg-slate-50 duration-200 rounded-full md:gap-10  justify-starts p-4 my-4 ${
            timeline.activeLabelIndex === 1 && "active-label"
          } `}
        >
          <span
            className={`w-8 h-8 flex items-center justify-center  rounded-full ${
              timeline.completeLabelIndex >= 1
                ? "bg-green-500 text-white"
                : timeline.activeLabelIndex === 1
                ? "bg-blue-500 text-white"
                : "bg-white text-slate-800"
            }`}
          >
            {timeline.completeLabelIndex >= 1 ? <MdDone /> : 1}
          </span>
          <div className="w-[100%-36px]">
            <p className="text-md">CHOOSE SERVICES</p>
            <p className="text-xs">What application do you want to try?</p>
          </div>
        </li>
        <li
          onClick={() => handleActiveLabel(2)}
          className={`flex items-center gap-5 cursor-pointer hover:bg-slate-50 duration-200 rounded-full md:gap-10  justify-starts p-4 my-4 ${
            timeline.activeLabelIndex === 2 && "active-label"
          } `}
        >
          <span
            className={`w-8 h-8 flex items-center justify-center  rounded-full ${
              timeline.completeLabelIndex >= 2
                ? "bg-green-500 text-white"
                : timeline.activeLabelIndex === 2
                ? "bg-blue-500 text-white"
                : "bg-white text-slate-800"
            }`}
          >
            {timeline.completeLabelIndex >= 2 ? <MdDone /> : 2}
          </span>
          <div className="w-[100%-36px]">
            <p className="text-md">ADD COMMENTS</p>
            <p className="text-xs">Add any comments or special instructions?</p>
          </div>
        </li>
        <li
          onClick={() => handleActiveLabel(3)}
          className={`flex items-center gap-5 cursor-pointer hover:bg-slate-50 duration-200 rounded-full md:gap-10  justify-starts p-4 my-4 ${
            timeline.activeLabelIndex === 3 && "active-label"
          } `}
        >
          <span
            className={`w-8 h-8 flex items-center justify-center  rounded-full ${
              timeline.completeLabelIndex >= 3
                ? "bg-green-500 text-white"
                : timeline.activeLabelIndex === 3
                ? "bg-blue-500 text-white"
                : "bg-white text-slate-800"
            }`}
          >
            {timeline.completeLabelIndex >= 3 ? <MdDone /> : 3}
          </span>
          <div className="w-[100%-36px]">
            <p className="text-md">UPLOAD IMAGES</p>
            <p className="text-xs">Upload your image files</p>
          </div>
        </li>
        <li
          onClick={() => handleActiveLabel(4)}
          className={`flex items-center gap-5 cursor-pointer hover:bg-slate-50 duration-200 rounded-full md:gap-10  justify-starts p-4 my-4 ${
            timeline.activeLabelIndex === 4 && "active-label"
          } `}
        >
          <span
            className={`w-8 h-8 flex items-center text-black justify-center rounded-full ${
              timeline.activeLabelIndex === 4
                ? "bg-blue-500 text-white"
                : "bg-white"
            }`}
          >
            4
          </span>
          <div className="w-[100%-36px]">
            <p className="text-md">CONTACT INFORMATION</p>
            <p className="text-xs">
              Let us know where to send your application
            </p>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Timeline;
