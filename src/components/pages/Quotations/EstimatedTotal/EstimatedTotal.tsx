import { useQuotationContext } from "@/contexts/QuotationContext/QuotationContext";
import useConvertedPrice from "@/hooks/Quotations/useConvertedPrice";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import SubmitQuote from "./SubmitQuote";

const EstimatedTotal = () => {
  const {
    selectedServices,
    applicationAmount,
    currency,
    timeline,
    setTimeline,
    uploadedImages,
  } = useQuotationContext();

  // calculate total
  let estimatedPrice = 0;
  selectedServices?.forEach((item) => {
    const price = item.serviceLavel?.defaultPrice;
    const estimatedTimes = item.serviceLavel?.estimatedTimes;
    const extraCost =
      estimatedTimes[item.selectedTimeIndex]?.extraAmountInDollar;
    const totalPrice = (price + extraCost) * applicationAmount;
    estimatedPrice += totalPrice;
  });

  // get the converted price
  const priceNode = useConvertedPrice({ dollar: estimatedPrice, currency });

  // Back functionality
  const handleBackward = () => {
    const currentActiveIndex = timeline.activeLabelIndex;
    setTimeline({
      activeLabelIndex: currentActiveIndex - 1,
      completeLabelIndex: timeline.completeLabelIndex,
    });
  };

  // forward functionality
  const handleForward = () => {
    const { activeLabelIndex, completeLabelIndex } = timeline;
    // TODO: Have to change the alert into some library message (like:toastify)
    // forward functionality
    /*
     * Return conditions:
     * if the user doesn't select any service and click to the ADD COMMENTS laebl return.
     * if the user doesn't upload any images and click to CONTACT INFORMATION label return.
     */
    if (!selectedServices && completeLabelIndex === 0) {
      return alert("please add a service first");
    }

    // alert user if the user doesn't select any time.
    if (timeline.activeLabelIndex === 2 && completeLabelIndex === 1) {
      alert("Default time selected");
    }

    if (!uploadedImages && completeLabelIndex === 2) {
      return alert("Please upload a sample image");
    }

    setTimeline({
      activeLabelIndex: activeLabelIndex + 1,
      completeLabelIndex:
        activeLabelIndex > completeLabelIndex
          ? completeLabelIndex + 1
          : completeLabelIndex,
    });
  };

  return (
    <div className="fixed md:w-4/6 right-0 flex flex-col md:flex-row w-full text-white py-6 px-12 bg-blue-800 text-center bottom-0">
      <div className="w-full md:w-3/6 flex items-center gap-3">
        <span className="text-lg lg:text-xl">Estimated total:</span>
        <span className="text-2xl md:text-3xl lg:text-4xl font-semibold flex items-center justify-center gap-[3px]">
          {priceNode}
        </span>
      </div>
      <div className="flex items-center justify-end gap-5 md:gap-10 w-full md:w-3/6 px-4">
        {/* backward action button */}
        {timeline.activeLabelIndex !== 1 && (
          <button
            onClick={handleBackward}
            className="lg:text-xl flex items-center justify-center gap-3"
          >
            <FaArrowLeftLong />{" "}
            <span className="hover:underline duration-300">Back</span>
          </button>
        )}

        {/* forward action button */}

        {timeline.activeLabelIndex === 4 ? (
          <SubmitQuote />
        ) : (
          <button
            onClick={handleForward}
            className="px-3 py-2 lg:text-xl bg-orange-500 hover:bg-orange-600 duration-300 rounded-md flex items-center justify-center gap-3"
          >
            <span>
              {timeline.activeLabelIndex === 1
                ? "ADD INFO"
                : timeline.activeLabelIndex === 2
                ? "UPLOAD IMAGES"
                : timeline.activeLabelIndex === 3 && "ADD CONTACT INFO"}
            </span>{" "}
            <FaArrowRightLong />
          </button>
        )}
      </div>
    </div>
  );
};

export default EstimatedTotal;
