export interface Appartment {
    city: string;
    postalCode: number;
    surfaceArea: number;
    dpe: string;
    heating: string;
    parking: boolean;
    extraSpaces: string[];
    conveniences: string[];
    photoLinks: string[];
    score: number;
    price: number;
    agencyFeePercentage: number;
    annualCondominiumFees: number;
    rented: boolean;
    procedureInProgress: boolean;
    monthlyLoan: number;
    propertyTax: number;
    managementTax: number;
    monthlyCost: number;
    yield: number;
    avgCityPrice: number;
}