"use client";
import { useQuotationContext } from "@/contexts/QuotationContext/QuotationContext";
import React, { useRef } from "react";

const CurrencyUpdater = () => {
  const { setCurrency, exchangeRates } = useQuotationContext();
  const selectRef = useRef<HTMLSelectElement | null>(null);

  // set the selected options value to the state.
  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = selectRef?.current?.value;
    // const selectedDataName = el?.getAttribute("data-name");

    // TODO: have to simplify this functionality by using ref.
    exchangeRates.forEach((item) => {
      if (item.label === value) {
        setCurrency({
          countryName: value,
          forEachDollar: item.forEachDollar,
          moneySymbol: item.moneySymbol,
          symbolPosition: item.symbolPosition,
        });
      }
    });
  };
  return (
    <div className="flex items-center justify-end">
      <label>pick a currency</label>
      <select
        onChange={handleSelect}
        ref={selectRef}
        className="bg-blue-100 ml-1 py-2 px-6 rounded-md"
      >
        {exchangeRates.map((item) => (
          <option className="px-6 py-1" value={item.label} key={item.label}>
            {item.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CurrencyUpdater;
