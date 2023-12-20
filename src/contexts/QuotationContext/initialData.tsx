import {
  ConatcInfoAction,
  CurrencyData,
  CurrencyInfo,
  SelectedServices,
  Timeline,
} from "@/types/types";

// initial value of all states
export const initialCurrency: CurrencyInfo = {
  countryName: "USD",
  forEachDollar: 1,
  moneySymbol: "$",
  symbolPosition: "before",
};

export const initialExchangeRates: CurrencyData[] = [
  {
    label: "USD",
    forEachDollar: 1,
    moneySymbol: "$",
    symbolPosition: "before",
  },
];

export const initialTimeline = {
  activeLabelIndex: 1,
  completeLabelIndex: 0,
};

export const initialContactInfoData = {
  firstName: "",
  lastName: "",
  email: "",
};

// initial value of state context
export const initialContextValue = {
  currency: initialCurrency,
  setCurrency: (newCurrency: CurrencyInfo) => {},
  exchangeRates: initialExchangeRates,
  selectedServices: null as SelectedServices[] | null,
  setSelectedServices: (newService: SelectedServices[] | null) => {},
  setTimeline: (data: Timeline) => {},
  timeline: initialTimeline,
  applicationAmount: 1,
  setApplicationAmount: (num: number) => {},
  uploadedImages: null as string[] | null,
  setUploadedImages: (images: string[]) => {},
  additionalComments: null as string | null,
  setAdditionalComments: (comment: string) => {},
  contactInfo: initialContactInfoData,
  dispatchContactInfo: (action: ConatcInfoAction) => {},
};
