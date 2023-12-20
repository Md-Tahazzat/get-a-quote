"use client";

import {
  ConatcInfoAction,
  ContactInfo,
  CurrencyData,
  CurrencyInfo,
  SelectedServices,
  Timeline,
} from "@/types/types";
import { getExchangeRates } from "@/utility/quotations/quotationsFetch";
import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import {
  initialContactInfoData,
  initialContextValue,
  initialCurrency,
  initialExchangeRates,
  initialTimeline,
} from "./initialData";

const contactReducer = (state: ContactInfo, action: ConatcInfoAction) => {
  switch (action.type) {
    case "firstName":
      return { ...state, firstName: action.payload };
    case "lastName":
      return { ...state, lastName: action.payload };
    case "email":
      return { ...state, email: action.payload };
    default:
      return state;
  }
};

const QUOTATION_CONTEXT = createContext(initialContextValue);

const QuotationContextWrapper = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  // all state starts from here
  const [currency, setCurrency] = useState<CurrencyInfo>(initialCurrency);

  // add comments container's data states
  const [applicationAmount, setApplicationAmount] = useState(1);
  const [uploadedImages, setUploadedImages] = useState<string[] | null>(null);

  // ServiceContainer data states
  const [selectedServices, setSelectedServices] = useState<
    SelectedServices[] | null
  >(null);
  const [exchangeRates, setExchangeRates] =
    useState<CurrencyData[]>(initialExchangeRates);

  // timeline container data state
  const [timeline, setTimeline] = useState<Timeline>(initialTimeline);

  const [additionalComments, setAdditionalComments] = useState<null | string>(
    null
  );

  // ContactInfor container data state
  const [contactInfo, dispatchContactInfo] = useReducer(
    contactReducer,
    initialContactInfoData
  );

  // load exchangeRates data
  useEffect(() => {
    const existExchangeRates = localStorage.getItem("exchange-rates");
    if (!!existExchangeRates) {
      setExchangeRates(JSON.parse(existExchangeRates));
    } else {
      getExchangeRates().then((exchangeRates) =>
        setExchangeRates(exchangeRates)
      );
    }
  }, []);

  const contextValue = {
    currency,
    setCurrency,
    exchangeRates,
    selectedServices,
    setSelectedServices,
    timeline,
    setTimeline,
    applicationAmount,
    setApplicationAmount,
    uploadedImages,
    setUploadedImages,
    contactInfo,
    dispatchContactInfo,
    additionalComments,
    setAdditionalComments,
  };

  return (
    <QUOTATION_CONTEXT.Provider value={contextValue}>
      {children}
    </QUOTATION_CONTEXT.Provider>
  );
};

export default QuotationContextWrapper;

export const useQuotationContext = () => useContext(QUOTATION_CONTEXT);
