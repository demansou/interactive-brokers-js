import axios, { AxiosRequestConfig } from 'axios';
import https from 'https';
import * as IBTypes from 'IBTypes';

class InteractiveBrokersService {
    private baseUrl: string;

    constructor(baseUrl: string) {
        this.baseUrl = baseUrl;
    }

    // Session
    async tickle(): Promise<void> {
        const config: AxiosRequestConfig = {
            method: 'POST',
            url: `${this.baseUrl}/tickle`,
            headers: {
                'Accept': '*/*',
            },
            httpsAgent: new https.Agent({
                rejectUnauthorized: false,
            }),
        };
        await this.makeRequest(config);
    }

    async logout(): Promise<IBTypes.LogoutConfirmation> {
        const config: AxiosRequestConfig = {
            method: 'POST',
            url: `${this.baseUrl}/logout`,
            headers: {
                'Accept': 'application/json',
            },
            httpsAgent: new https.Agent({
                rejectUnauthorized: false,
            }),
        };
        return await this.makeRequest(config);
    }

    async ssoValidate(): Promise<IBTypes.SsoValidationInfo> {
        return await this.get('/sso/validate');
    }

    async getAuthenticationStatus(): Promise<IBTypes.AuthenticationStatus> {
        return await this.get('/iserver/auth/status');
    }

    async reauthenticate(): Promise<IBTypes.ReauthenticationStatus> {
        const config: AxiosRequestConfig = {
            method: 'POST',
            url: `${this.baseUrl}/iserver/reauthenticate`,
            headers: {
                'Accept': 'application/json',
            },
            httpsAgent: new https.Agent({
                rejectUnauthorized: false,
            }),
        };
        return await this.makeRequest(config);
    }

    // Contract

    async secdefByConid(conids: number[]): Promise<IBTypes.SecurityDefinition[]> {
        return await this.post('/trsrv/secdef', { conids: conids });
    }

    async getTradingScheduleForSymbol(assetClass: string, symbol: string, exchange: string, exchangeFilter: string): Promise<IBTypes.TradingScheduleForSymbol> {
        return await this.get(`/trsrv/secdef/schedule?assetClass=${assetClass}&symbol=${symbol}&exchange=${exchange}&exchangeFilter=${exchangeFilter}`);
    }

    async getBrokerageAccounts(): Promise<IBTypes.BrokerageAccounts> {
        return await this.get(`/iserver/accounts`);
    }

    async getMarketData(conIds: number[], since: number, fields: number[]): Promise<IBTypes.MarketDataAggregate> {
        return await this.get(`/iserver/marketdata/snapshot?conids=${conIds.join(',')}&since=${since}&fields=${fields.join(',')}`)
    }

    async getAccountSummary(accountId: string): Promise<IBTypes.AccountSummary> {
        return await this.get(`/portfolio/${accountId}/summary`);
    }

    async getPositionByContractId(accountId: string, conId: number): Promise<IBTypes.PositionByContractId> {
        return await this.get(`/portfolio/${accountId}/position/${conId}`);
    }

    async getSecurityFuturesBySymbol(symbols: string[]): Promise<IBTypes.SecurityFutures> {
        return await this.get(`/trsrv/futures?symbols=${symbols.join(',')}`);
    }

    async postPreviewOrder(accountId: string, order: IBTypes.Orders): Promise<IBTypes.WhatIfOrdersFeedback> {
        return await this.post(`/iserver/account/${accountId}/orders/whatif`, order);
    }

    async postOrder(accountId: string, order: IBTypes.Orders): Promise<IBTypes.OrdersFeedback> {
        return await this.post(`/iserver/account/${accountId}/orders`, order);
    }

    async postOrderReply(replyId: string, feedbackReply: IBTypes.OrdersFeedbackReply): Promise<IBTypes.OrderReplyResponse[]> {
        return await this.post(`/iserver/reply/${replyId}`, feedbackReply);
    }

    private async get<T>(path: string): Promise<T> {
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