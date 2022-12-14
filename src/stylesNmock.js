
let hi ='45px'
export const colorStyles = {
  control: (styles) => ({ ...styles, backgroundColor: "white", height: hi }),
  option: (styles, { data, isDisabled, isFocused, isSelected }) => {
    return { ...styles, height: hi };
  },
  multiValue: (styles, { data }) => {
    return {
      ...styles,
      height: hi,
      color: "black",
    };
  },
  multiValueLabel: (styles, { data }) => {
    return {
      ...styles,
      height: hi,
      // color: "#fff",
    };
  },
  multiValueRemove: (styles, { data }) => {
    return {
      ...styles,
      color: "#fff",
      height: hi,
      cursor: "pointer",
      ":hover": {
        color: "#fff",
      },
    };
  },
};

export const Freelancers = [
  {
    isAvailable: false,
    DocNumber: 3276,
    AccountKey: "6107",
    DocumentDetails: "0505455699",
    geoLocation: {
      lan: 1211,
      lat:2222
    },
    
  },
  {
    isAvailable: false,
    DocNumber: 4530,
    AccountKey: "6900",
    DocumentDetails: "05066558764",
    geoLocation: {
      lan: 1211,
      lat:2222
    },
  },
  {
    isAvailable: false,
    DocNumber: 2312,
    AccountKey: "6207",
    DocumentDetails: "0506612313",
    geoLocation: {
      lan: 1211,
      lat:2222
    },
  },
  {
    isAvailable: false,
    DocNumber: 3320,
    AccountKey: "6707",
    DocumentDetails: "0506655632",
    geoLocation: {
      lan: 1211,
      lat:2222
    },
  },
  {
    isAvailable: false,
    DocNumber: 3530,
    AccountKey: "6531",
    Phone: "0501231231",
    geoLocation: {
      lan: 1211,
      lat:2222
    },
  },
  {
    isAvailable: false,
    DocNumber: 3230,
    AccountKey: "6051",
    Phone: "0506655698",
    geoLocation: {
      lan: 1211,
      lat:2222
    },
  },
  {
    isAvailable: false,
    DocNumber: 4230,
    AccountKey: "6031",
    Phone: "0509980680",
    geoLocation: {
      lan: 1211,
      lat:2222
    },
  },
  {
    isAvailable: false,
    DocNumber: 3230,
    AccountKey: "6031",
    Phone: "0509980680",
    geoLocation: {
      lan: 1211,
      lat:2222
    },
  },
  {
    isAvailable: false,
    DocNumber: 3254,
    AccountKey: "6051",

    Phone: "0506655699",
    geoLocation: {
      lan: 1211,
      lat:2222
    },
  },

  {
    isAvailable: false,
    DocNumber: 3342,
    AccountKey: "6107",
    Phone: "0506655699",
    geoLocation: {
      lan: 1211,
      lat:2222
    },
  },
];

export const castumersList = [
  { value: "6107", label: "??????" },
  { value: "6900", label: "??????????" },
  { value: "6031", label: "??????" },
  { value: "6051", label: "????" },
  { value: "6531", label: "??????" },
  { value: "6707", label: "???????? ??????" },
  { value: "6061", label: "?????? ??????????" },
  { value: "6207", label: "?????? ????????" },
];
export const devState = [
  { value: "6107", label: "????????????" },
  { value: "6207", label: "????????" },
];
export const mockSignersList = [
  {
    signerData: { value: "7001", label: "??????" },
    relatedAccounts: ["6107", "6900"],
  },
  {
    signerData: { value: "7002", label: "????????" },
    relatedAccounts: ["6031", "6051", "6531", "6707"],
  },

  { signerData: { value: "7003", label: "????????" }, relatedAccounts: ["6061"] },
  {
    signerData: { value: "7004", label: "?????? ??????????" },
    relatedAccounts: ["6207"],
  },
];
