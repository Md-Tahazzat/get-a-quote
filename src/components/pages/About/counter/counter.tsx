import CountUpWrapper from "@/components/Client/CountUp/countUp";
import React from "react";

const Counter = ({ title, number }: { title: string; number: number }) => {
  return (
    <div className="about-counter-item animate-from-bottom">
      <span className="counter">
        <CountUpWrapper number={number}>{number}</CountUpWrapper> +
      </span>
      <dfn>{title}</dfn>
    </div>
  );
};

export default Counter;
