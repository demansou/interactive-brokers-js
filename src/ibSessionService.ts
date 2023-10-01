import { AxiosRequestConfig } from "axios";
import https from 'https';
import BaseService from "./baseService";
import * as IBTypes from 'IBTypes';

class IBSessionService extends BaseService {
    constructor(baseUrl: string) {
        super(baseUrl);
    }

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
}

export default IBSessionService;