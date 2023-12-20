import { ImSpinner9 } from "react-icons/im";

const Loading = () => {
  return (
    <div className="w-screen h-screen flex items-center justify-center text-3xl">
      <ImSpinner9 className="animate-spin text-dashboard-primary" />
    </div>
  );
};

export default Loading;
