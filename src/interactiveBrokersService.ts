import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import https from 'https';
import { AccountSummary, AuthenticationStatus, BrokerageAccounts, MarketDataAggregate, Orders, OrdersFeedback, PositionByContractId, SecurityFutures, WhatIfOrdersFeedback } from 'ib-types';

class InteractiveBrokersService {
    private baseUrl: string;

    constructor(baseUrl: string) {
        this.baseUrl = baseUrl;
    }

    async getBrokerageAccounts(): Promise<BrokerageAccounts> {
        return await this.get(`/iserver/accounts`);
    }

    async getAuthenticationStatus(): Promise<AuthenticationStatus> {
        return await this.get('/iserver/auth/status');
    }

    async getMarketData(conIds: number[], since: number, fields: number[]): Promise<MarketDataAggregate> {
        return await this.get(`/iserver/marketdata/snapshot?conids=${conIds.join(',')}&since=${since}&fields=${fields.join(',')}`)
    }

    async getAccountSummary(accountId: string): Promise<AccountSummary> {
        return await this.get(`/portfolio/${accountId}/summary`);
    }

    async getPositionByContractId(accountId: string, conId: number): Promise<PositionByContractId> {
        return await this.get(`/portfolio/${accountId}/position/${conId}`);
    }

    async getSecurityFuturesBySymbol(symbols: string[]): Promise<SecurityFutures> {
        return await this.get(`/trsrv/futures?symbols=${symbols.join(',')}`);
    }

    async postPreviewOrder(accountId: string, order: Orders): Promise<WhatIfOrdersFeedback> {
        return await this.post(`/iserver/account/${accountId}/orders/whatif`, order);
    }

    async postOrder(accountId: string, order: Orders): Promise<OrdersFeedback> {
        return await this.post(`/iserver/account/${accountId}/orders`, order);
    }

    private async get<T>(path: string): Promise<T> {
        const config: AxiosRequestConfig = {
            method: 'GET',
            url: `${this.baseUrl}${path}`,
            headers: {
                'Accept': 'application/json'
            },
            httpsAgent: new https.Agent({
                rejectUnauthorized: false,
            }),
        }

        return await this.makeRequest<T>(config);
    }

    private async post<TRequestBody, TResponse>(path: string, requestBody: TRequestBody): Promise<TResponse> {
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

    private async makeRequest<T>(config: AxiosRequestConfig): Promise<T> {
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

export default InteractiveBrokersService;