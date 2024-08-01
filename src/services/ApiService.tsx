import { Appartment } from "../models/Appartment";

class ApiService {
    private baseURL: string = 'http://ec2-51-20-79-245.eu-north-1.compute.amazonaws.com:8080/';

    private async get<T>(endpoint: string): Promise<T> {
        const response = await fetch(`${this.baseURL}${endpoint}`);

        if (!response.ok) {
            throw new Error(`Network response was not ok: ${response.statusText}`);
        }

        return response.json();
    }

    public async getYield(): Promise<Appartment[]> {
        return this.get<Appartment[]>('yield');
    }

    public async getRentals(): Promise<Appartment[]> {
        return this.get<Appartment[]>('yield');
    }
}
  
export default ApiService;