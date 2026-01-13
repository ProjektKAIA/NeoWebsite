// Central company information constants
// All company-related information should be imported from here

export const COMPANY = {
  // Legal entity name
  name: "NEONEO HOLDINGS LTD",

  // Trading name / Brand
  tradingAs: "NeoNeo Bank",

  // Company registration
  companyNumber: "16121231",
  registeredIn: "England & Wales",
  incorporationDate: "5th December 2024",
  companyType: "Private Limited Company (Ltd)",

  // Registered office address
  address: {
    street: "20 Wenlock Road",
    city: "London",
    postcode: "N1 7GU",
    country: "United Kingdom",
  },

  // Contact information
  contact: {
    email: "hello@neoneobank.de",
    telegram: "@neoneobank",
    website: "neoneobank.com",
  },

  // Management
  management: {
    ceo: "Paul Kappel",
  },
} as const;

// Helper function to get full address as string
export const getFullAddress = (separator: string = ", "): string => {
  const { street, city, postcode, country } = COMPANY.address;
  return [street, city, postcode, country].join(separator);
};

// Copyright text generator
export const getCopyrightText = (year: number, allRightsText: string): string => {
  return `© ${year} ${COMPANY.name} trading as ${COMPANY.tradingAs}. ${allRightsText}`;
};
