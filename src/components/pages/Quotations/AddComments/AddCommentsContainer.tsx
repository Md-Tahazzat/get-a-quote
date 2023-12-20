import { useQuotationContext } from "@/contexts/QuotationContext/QuotationContext";
import CommentInput from "./CommentInput";
import SelectedServiceContainer from "./SelectedServiceContainer";

const AddCommentsContainer = () => {
  const { selectedServices } = useQuotationContext();
  return (
    <>
      <p className="text-blue-400 mt-10 md:mt-14 text-xs mb-1">ADD COMMENTS</p>
      <h2 className="text-3xl font-semibold text-blue-800 mb-4">
        Additional Information
      </h2>

      <h2 className="text-xl font-semibold text-blue-800 mb-2">
        When do you need your application back?
      </h2>
      <p className="text-blue-900 font-medium mb-8">
        Save on your total price if you have time to wait, or choose a faster
        turnaround time if you’re on a tight deadline.
      </p>

      {/* timelist and price */}

      <div className="">
        {selectedServices?.map((service, index) => (
          <SelectedServiceContainer service={service} key={service.serviceId} />
        ))}
      </div>

      {/* custom comments */}
      <CommentInput />
    </>
  );
};

export default AddCommentsContainer;
