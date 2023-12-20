import CommonPattern from "@/Shared/commonPattern/commonPattern";
import { title } from "process";
import React from "react";

const OurProcess = ({
      title,
  descripton,
}: {
      title: string;
  descripton?: string;
}) => {
  return (
    <div className="process-component animate-from-bottom">
      <div className="process-component-shape">
        <CommonPattern numOfDiv={2} className="common-pattern" />
      </div>
      <div className="process-component-content">
        <h5 className="split-heading justify-center">{title}</h5>
        <p className="animate-from-bottom">
          {descripton ||
            " Nec non, et sed semper suspendisse. Sapien, ridiculus  euismod varius faucibus feugiat et dignissim porta id.Facilisi neque nec id nunc massa. Nisl nibh faucibus nunc vel."}
        </p>
      </div>
    </div>
  );
};

export default OurProcess;
