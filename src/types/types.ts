export interface BlogType {
  id: string;
  content: string;
  title: string;
  themeImage: string;
  shortDescription: string;
  tags: string[];
  category: string;
  published: boolean;
  createdAt: Date;
  updatedAt: Date;
  authorId: string;
  author: {
    id?: string;
    name?: string;
    email?: string;
    password?: string;
    role?: string;
    createdAt?: Date;
  };
}
export interface JobType {
  id: string;
  content: string;
  title: string;
  tags: string[];
  category: string;
  published: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface ProjectType {
  projectName: string;
  projectDescription: string;
  clientDescription: string;
  projectGoals: string;
  projectProblem: string;
  projectSolutions: string;
  projectFile: File | null | undefined;
  projectOverviewVideo?: string;
}

//   interface for FAQData
export interface FAQDataType {
  title: string;
  content: string;
}
export interface CareerBenefit {
  title: string;
}

import { Dispatch, SetStateAction } from "react";
// interface for Dashboard sibar links
import { IconType } from "react-icons";
export interface SideLinks {
  id: number;
  label: string;
  href: string;
  icon: IconType;
  submenu: { label: string; href: string }[];
}

// interface for TeamData
export interface TeamData {
  id?: string;
  image: string;
  name: string;
  designation: string;
  socialLinks: {
    icon: string;
    link: string;
  }[];
}

// interface for navSlider socialIcons
export interface SocialIcons {
  name: string;
  href: string;
  iconPath: string;
}

// interface for navLinks of navSlider
export interface NavLinksType {
  label: string;
  href: string;
}

export interface ServiceState {
  id?: string;
  name: string;
  badge: string;
  descriptions: string;
  price: string;
  duration: string;
  serviceTypes: {
    type: string;
    status: string;
  }[];
}

export type ServiceActionType =
  | { type: "name"; payload: string }
  | { type: "badge"; payload: string }
  | { type: "descriptions"; payload: string }
  | { type: "price"; payload: string }
  | { type: "duration"; payload: string }
  | {
      type: "type";
      payload: {
        value: string;
        id: string;
      };
    }
  | {
      type: "status";
      payload: {
        value: string;
        id: string;
      };
    }
  | { type: "addServiceType" }
  | { type: "reset" }
  | { type: "set"; payload: ServiceState };

// quotations page Types Starts from here.
export interface CurrencyInfo {
  countryName: string;
  forEachDollar: number;
  moneySymbol: string;
  symbolPosition: "before" | "after";
}
export interface CurrencyData {
  label: string;
  forEachDollar: number;
  moneySymbol: string;
  symbolPosition: "before" | "after";
}

export interface Currencies {
  name: string;
  moneySymbol: string;
  symbolPosition: "before" | "after";
}

export interface ServiceData {
  id: string;
  name: string;
  des: string;
  serviceLavel: ServiceLavel[];
}

export interface EstimatedTime {
  time: string;
  extraAmountInDollar: number;
}

export interface ServiceLavel {
  id: number | string;
  img: string;
  defaultPrice: number;
  estimatedTimes: EstimatedTime[];
}

export interface Timeline {
  activeLabelIndex: number;
  completeLabelIndex: number;
}

export interface ContactInfo {
  firstName: string;
  lastName: string;
  email: string;
}

// quotation QUOTATION_CONTEXT type starts from here.

export interface SelectedServices {
  serviceId: string | number;
  name: string;
  serviceLavel: ServiceLavel;
  selectedTimeIndex: number;
}

export type ConatcInfoAction = { type: string; payload: string };
export interface QUOTATION_CONTEXT_Type {
  currency: CurrencyInfo;
  setCurrency: Dispatch<SetStateAction<CurrencyInfo>>;
  exchangeRates: CurrencyData[];
  selectedService: SelectedServices[] | null;
  setSelectedService: Dispatch<SetStateAction<SelectedServices[] | null>>;
  setTimeline: Dispatch<SetStateAction<Timeline>>;
  timeline: Timeline;
  setApplicationAmount: Dispatch<SetStateAction<number>>;
  applicationAmount: number;
  uploadedImages: string[] | null;
  setUploadedImages: Dispatch<SetStateAction<string>>;
  contactInfo: ContactInfo;
  setContactInfo: Dispatch<SetStateAction<ContactInfo>>;
  additionalComments: string | null;
  setAdditionalComments: Dispatch<SetStateAction<string | null>>;
}
