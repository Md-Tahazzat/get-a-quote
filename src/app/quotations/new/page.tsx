import QuotationsContainer from "@/components/pages/Quotations/QuotationsContainer";
import QuotationContextWrapper from "@/contexts/QuotationContext/QuotationContext";
import { setMetaData } from "@/utility/updateTitle/updateTitle";

export const metadata = setMetaData("New | Quotations");

const NewQuotationPage = async () => {
  return (
    <section className="bg-white w-full h-screen overflow-auto">
      <QuotationContextWrapper>
        <QuotationsContainer />
      </QuotationContextWrapper>
    </section>
  );
};

export default NewQuotationPage;
