import { currencies } from "@/data/CurrencyData";
import { CurrencyData } from "@/types/types";
import axios from "axios";

export const getExchangeRates = async (): Promise<CurrencyData[]> => {
  // TODO: have to take the api key from .env file.
  const res = await axios.get(
    `https://v6.exchangerate-api.com/v6/f1f508c96f953d17a1ff8715/latest/USD`
  );
  // loop through each item and get the currency exchange rate
  if (res.data?.conversion_rates) {
    let currencyInfoArray: CurrencyData[] = [
      {
        label: "USD",
        forEachDollar: 1,
        moneySymbol: "$",
        symbolPosition: "before",
      },
    ];

    for (let currency of currencies) {
      // check if the currency exist in the res.data.conversion_rates
      if (currency.name in res.data.conversion_rates) {
        let exchangeAmount = res.data.conversion_rates[currency.name];
        const newData: CurrencyData = {
          label: currency.name,
          forEachDollar: +exchangeAmount, // add (+) to convert into number
          moneySymbol: currency.moneySymbol,
          symbolPosition: currency.symbolPosition,
        };
        currencyInfoArray.push(newData);
      }
    }

    // TODO: update the new currency data to the database.
    localStorage.setItem("exchange-rates", JSON.stringify(currencyInfoArray));
    return currencyInfoArray;
  } else {
    // TODO: fetch the previous currency data from the database.
    return [
      {
        label: "USD",
        forEachDollar: 1,
        moneySymbol: "$",
        symbolPosition: "before",
      },
    ];
  }
};
