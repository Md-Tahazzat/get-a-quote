import { ImSpinner9 } from "react-icons/im";

const Loading = ({ className }: { className: string }) => {
  return (
    <div className={`${className} flex items-center justify-center`}>
      <ImSpinner9 className="animate-spin" />
    </div>
  );
};

export default Loading;
