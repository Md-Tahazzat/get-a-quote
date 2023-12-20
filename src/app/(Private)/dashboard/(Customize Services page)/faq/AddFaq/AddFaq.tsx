import { useState } from "react";
import Swal from "sweetalert2";

interface AddModalProps {
  AddModalOpen: boolean;
  onClose: () => void;
  getHeroData: () => void
}

const AddFaq: React.FC<AddModalProps> = ({
  AddModalOpen,
  onClose,
  getHeroData,
}) => {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const [loading, setLoading] = useState(false);
  const handleSubmit = async () => {
    // (`${process.env.NEXT_PUBLIC_URL}/api/dashboard/users`)
    setLoading(true)
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_URL}/api/dashboard/faq`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            question,
            answer,
          }),
        }
      );

      const data = await res.json();
      getHeroData();
      onClose();
      setLoading(false)
      Swal.fire("WOW", "You have successfully added a new Qustion")
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div
      className={`fixed top-0 left-0 flex items-center justify-center w-full h-full bg-gray-800 bg-opacity-50 transition-all duration-300 ${AddModalOpen ? "block" : "hidden"
        }`}
    >
      <div className="bg-white transition-all duration-200 rounded-lg p-8 md:w-[50%] w-full">
        <h2 className="text-2xl font-bold mb-4">Add Faq</h2>
        <div className="mb-4">
          <label
            htmlFor="title"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Question
          </label>
          <input
            type="text"
            id="title"
            placeholder="Enter a question"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="subtitle"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Answer
          </label>
          <textarea

            id="subtitle"
            placeholder="Enter the Answer"
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            className="w-full border border-gray-300 min-h-[100px] rounded-md px-3 focus:outline-none focus:border-blue-500"
          />
        </div>

        <div className="flex justify-end">


          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
            onClick={handleSubmit}
          >

            {loading ? "Processing..." : "Submit"}
          </button>

          <button
            className="ml-2 bg-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-400 focus:outline-none focus:bg-gray-400"
            onClick={onClose}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddFaq;
