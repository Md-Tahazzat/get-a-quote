import { useQuotationContext } from "@/contexts/QuotationContext/QuotationContext";
import axios from "axios";
import { useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import Loading from "../../Loading/Loading";

const SubmitQuote = () => {
  const [loading, setLoading] = useState(false);
  const {
    applicationAmount,
    contactInfo,
    currency,
    exchangeRates,
    selectedServices,
    uploadedImages,
    additionalComments,
  } = useQuotationContext();

  // form submit handler.
  const handleSubmit = () => {
    if (!contactInfo.email) {
      return alert("please fill your contact information first.");
    }

    setLoading(true);
    const data = {
      selectedServices,
      applicationAmount,
      currency,
      contactInfo,
      additionalComments,
      uploadedImages,
      exchangeRates,
    };
    axios
      .post(`${process.env.NEXT_PUBLIC_URL}/api/send-email`, data)
      .then((res) => {
        setLoading(false);
        alert(
          "An email has been send to your accuont with details. We will contact you soon."
        );
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
      });
  };

  return (
    <button
      onClick={handleSubmit}
      className="px-3 py-2 lg:text-xl bg-orange-500 hover:bg-orange-600 duration-300 rounded-md flex items-center justify-center gap-3"
    >
      {loading ? (
        <Loading className="text-white px-6" />
      ) : (
        <span>SUBMIT QUOTE</span>
      )}
      <FaArrowRightLong />
    </button>
  );
};

export default SubmitQuote;
