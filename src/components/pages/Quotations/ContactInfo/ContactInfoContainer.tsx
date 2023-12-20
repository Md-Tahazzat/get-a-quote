import ContactForm from "./ContactForm";

const ContactInfoContainer = () => {
  return (
    <>
      <p className="text-blue-400 mt-10 md:mt-14 text-xs mb-1">
        CONTACT INFORMATION
      </p>
      <h2 className="text-3xl font-semibold text-blue-800 mb-2">
        Where should we send your quote?
      </h2>

      {/* contact form */}
      <ContactForm />
    </>
  );
};

export default ContactInfoContainer;
