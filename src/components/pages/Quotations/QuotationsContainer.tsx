"use client";

import AddCommentsContainer from "@/components/pages/Quotations/AddComments/AddCommentsContainer";
import Timeline from "@/components/pages/Quotations/Timeline/Timeline";
import { useQuotationContext } from "@/contexts/QuotationContext/QuotationContext";
import ContactInfoContainer from "./ContactInfo/ContactInfoContainer";
import CurrencyUpdater from "./CurrencyUpdater";
import EstimatedTotal from "./EstimatedTotal/EstimatedTotal";
import ServiceContainer from "./Services/ServiceContainer";
import UploadImagesContainer from "./UploadImages/UploadImagesContainer";

const QuotationsContainer = () => {
  const { timeline } = useQuotationContext();
  return (
    <div className="flex flex-col md:flex-row items-start">
      <Timeline />

      {/* right container */}
      <div className="w-full min-h-screen md:pb-32 lg:w-4/6 px-4  md:px-6 pt-10 lg:px-20">
        {/* currency changing option */}
        <CurrencyUpdater />

        {
          /* Show All the services */
          timeline.activeLabelIndex === 1 && <ServiceContainer />
        }

        {
          /* show the add comments container */
          timeline.activeLabelIndex === 2 && <AddCommentsContainer />
        }

        {
          /* show the upload images container */
          timeline.activeLabelIndex === 3 && <UploadImagesContainer />
        }

        {
          /* show the Contact Information container */
          timeline.activeLabelIndex === 4 && <ContactInfoContainer />
        }

        {/* Estimated total container */}
        {/* TODO: Have to make another component for this. */}
        <EstimatedTotal />
      </div>

      {/* Details modal */}
    </div>
  );
};

export default QuotationsContainer;
