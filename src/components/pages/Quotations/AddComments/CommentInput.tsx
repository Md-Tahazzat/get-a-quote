import { useQuotationContext } from "@/contexts/QuotationContext/QuotationContext";

const CommentInput = () => {
  const { additionalComments, setAdditionalComments } = useQuotationContext();

  const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const text = event.target?.value;
    setAdditionalComments(text);
  };
  return (
    <>
      <h3 className="text-xl font-semibold text-blue-800 mb-2 mt-20 md:mt-32">
        Is there anything you want to tell us about your application?
      </h3>
      <p className="text-blue-400 text-xs mb-1">ADDITIONAL INFORMATION</p>

      <textarea
        rows={5}
        placeholder="Please share any specific instructions for your application"
        onChange={handleInputChange}
        className="w-full rounded-md p-4 bg-blue-50"
      ></textarea>
    </>
  );
};

export default CommentInput;
