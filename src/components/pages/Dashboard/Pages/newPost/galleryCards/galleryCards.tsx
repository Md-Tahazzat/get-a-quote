"use client";
import { ImageUrl } from "@prisma/client";
import Image from "next/image";
import React, { useState } from "react";

const GalleryCards: React.FC<ImageUrl> = ({ url }) => {
  
  // console.log("from glary card", { url, file });
  const [copied, setCopied] = useState<boolean>(false); //! copy to clipboard

  //? custom functions
  //* Copy URL
  const copyURL = (): void => {
    navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 3000);
  };

  return (
    <div className="p-5 md:p-6 rounded-xl border-2 border-gray-600 shadow-xl shadow-black">
      <div className="relative w-full h-60 lg:h-72 md:h-64 mb-6">
        <Image
          src={url!}
          fill={true}
          alt="programming-image"
          className="object-cover rounded-xl"
        />
      </div>
      <div className="flex justify-between gap-x-4">
        <input
          type="url"
          name="url"
          defaultValue={url}
          className="w-full bg-white p-2 rounded-md text-gray-500"
        />
        {copied ? (
          <div className="w-10 rounded-md relative cursor-pointer">
            <Image
              src="/media/checkmark.png"
              alt="checkmark-icon"
              fill={true}
              className="object-contain p-1"
            />
          </div>
        ) : (
          <div
            className="w-10 rounded-md relative cursor-pointer"
            onClick={copyURL}
          >
            <Image
              src="/media/copyyy.png"
              alt="copy-icon"
              fill={true}
              className="object-contain"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default GalleryCards;
