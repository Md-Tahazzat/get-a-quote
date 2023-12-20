import NotFoundImage from "@/assets/errorImage/404.png";
import { setMetaData } from "@/utility/updateTitle/updateTitle";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

export const metadata = setMetaData("Not Found");

const NotFound: FC = () => {
  return (
    <div className="w-screen">
      <Image
        src={NotFoundImage}
        alt="404 not-found"
        width={300}
        placeholder="blur"
        className="max-w-[300px] h-auto mx-auto"
      />
      <Link href="/" className="mt-5 mb-2 inline-block">
        <button className="btn btn-primary bg-blue-500">Back to Home</button>
      </Link>
    </div>
  );
};

export default NotFound;
