import { Appartment } from "../models/Appartment";

class ApiService {
    private static baseURL = 'http://ec2-51-20-79-245.eu-north-1.compute.amazonaws.com:8080/';

    private static async get<T>(endpoint: string): Promise<T> {
        const response = await fetch(`${this.baseURL}${endpoint}`);

        if (!response.ok) {
            throw new Error(`Network response was not ok: ${response.statusText}`);
        }

        return response.json();
    }

    private static transformData(apiData: Map<number, Object[]>): Appartment[] {
        return Object.values(apiData).flatMap(purchaseStatsList =>
            purchaseStatsList.map(purchaseStats => {
                const { purchase, yieldRatio, cityStats } = purchaseStats;
                const { apartment, price, agencyFeePercentage, annualCondominiumFees, rented, procedureInProgress, monthlyLoan, propertyTax, managementTax } = purchase;

                return {
                    city: apartment.city,
                    postalCode: apartment.postalCode,
                    surfaceArea: apartment.surfaceArea,
                    dpe: apartment.dpe,
                    heating: apartment.heating,
                    parking: apartment.parking,
                    extraSpaces: apartment.extraSpaces?.map(extra => extra.toString()) || [],
                    conveniences: apartment.conveniences?.map(conv => conv.toString()) || [],
                    photoLinks: apartment.photoLinks || [],
                    score: apartment.score,
                    price: price,
                    agencyFeePercentage: agencyFeePercentage,
                    annualCondominiumFees: annualCondominiumFees,
                    rented: rented,
                    procedureInProgress: procedureInProgress,
                    monthlyLoan: monthlyLoan,
                    propertyTax: propertyTax,
                    managementTax: managementTax,
                    monthlyCost: monthlyLoan + (annualCondominiumFees / 12) + (propertyTax / 12) + managementTax,
                    yield: yieldRatio,
                    avgCityPrice: cityStats.avgPrice // Include the average city price
                };
            })
        );
    }

    public static async getYield(): Promise<Appartment[]> {
        const apiData = await this.get<Map<number, Object[]>>('yield');
        return this.transformData(apiData);
    }

    // public async getRentals(): Promise<Appartment[]> {
    //     return this.get<Appartment[]>('yield');
    // }


}
  
export default ApiService;