import { CurrencyInfo } from "@/types/types";

interface PropsType {
  dollar: number;
  currency: CurrencyInfo;
}
const useConvertedPrice = ({ dollar, currency }: PropsType): JSX.Element => {
  let price = dollar * currency.forEachDollar;
  let priceArray = price.toString().split(".");
  if (priceArray.length > 1) {
    // take two numbers after decimal
    price = +price.toFixed(2); // convert into number by adding +
  }

  // now add the money symbol and fixed the position.
  let priceNode = (
    <>
      <span>
        {currency.symbolPosition === "before" ? currency.moneySymbol : ""}
      </span>
      <span>{price}</span>
      <span>
        {currency.symbolPosition === "after" ? currency.moneySymbol : ""}
      </span>
    </>
  );
  return priceNode;
};

export default useConvertedPrice;
