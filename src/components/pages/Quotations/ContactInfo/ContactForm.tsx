import { useQuotationContext } from "@/contexts/QuotationContext/QuotationContext";
import { ChangeEvent } from "react";

const ContactForm = () => {
  const { contactInfo, dispatchContactInfo } = useQuotationContext();
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const inputEl = event.target;
    const id = inputEl.getAttribute("id");
    if (id === null) return;
    dispatchContactInfo({ type: id, payload: inputEl.value });
  };
  return (
    <div className="mt-10 md:mt-20 ">
      <div className="md:flex w-full md:gap-5 md:mb-5">
        <div className="mb-5 md:mb-0">
          <label className="block mb-1 font-semibold " htmlFor="firstName">
            First Name
          </label>
          <input
            onChange={handleInputChange}
            className="w-full p-2 border border-slate-200 focus:border-slate-400 duration-200 rounded-md px-3 bg-blue-50"
            id="firstName"
            placeholder="Your first name"
            type="text"
          />
        </div>
        <div className="mb-5 md:mb-0">
          <label className="block mb-1 font-semibold " htmlFor="lastName">
            Last Name
          </label>
          <input
            onChange={handleInputChange}
            className="w-full p-2 border border-slate-200 focus:border-slate-400 duration-200 rounded-md px-3 bg-blue-50"
            id="lastName"
            placeholder="Your last name"
            type="text"
          />
        </div>
      </div>
      <div>
        <label className="block mb-1 font-semibold " htmlFor="firstName">
          Email
        </label>
        <input
          onChange={handleInputChange}
          className="w-full p-2 border border-slate-200 focus:border-slate-400 duration-200 rounded-md px-3 bg-blue-50"
          id="email"
          placeholder="Your email address"
          type="email"
          required
        />
      </div>
    </div>
  );
};

export default ContactForm;
