import axios, { AxiosRequestConfig } from "axios";
import https from 'https';

class BaseService {
    protected baseUrl: string;

    constructor(baseUrl: string) {
        this.baseUrl = baseUrl;
    }
    
    protected async get<T>(path: string): Promise<T> {
        const config: AxiosRequestConfig = {
            method: 'GET',
            url: `${this.baseUrl}${path}`,
            headers: {
                'Accept': 'application/json',
            },
            httpsAgent: new https.Agent({
                rejectUnauthorized: false,
            }),
        }

        return await this.makeRequest<T>(config);
    }

    protected async post<TRequestBody, TResponse>(path: string, requestBody: TRequestBody): Promise<TResponse> {
        const config: AxiosRequestConfig = {
            method: 'POST',
            url: `${this.baseUrl}${path}`,
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            data: JSON.stringify(requestBody),
            httpsAgent: new https.Agent({
                rejectUnauthorized: false,
            }),
        }

        return await this.makeRequest<TResponse>(config);
    }

    protected async makeRequest<T>(config: AxiosRequestConfig): Promise<T> {
        try {
            console.log('Sending request:', config);
            const { data } = await axios.request<T>(config);
            console.log('Received response:', data);
            return data;
        } catch (err: any) {
            if (err.response && err.response.data && err.response.data.error) {
                console.error('An error occurred:', err.response.data.error);
            }
            else if (err.response && err.response.data) {
                console.error('An error occurred:', err.response.data);
            }
            else if (err.response) {
                console.error('An error occurred:', err.response);
            }
            else  {
                console.error('An error occurred:', err);
            }
            throw err;
        }
    }
}

export { BaseService };