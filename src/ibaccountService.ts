import BaseService from "./baseService";
import * as IBTypes from 'IBTypes';

class IBAccountService extends BaseService {
    constructor(baseUrl: string) {
        super(baseUrl);
    }

    async getAccountSummary(accountId: string): Promise<IBTypes.AccountSummary> {
        return await this.get(`/portfolio/${accountId}/summary`);
    }

    async getBrokerageAccounts(): Promise<IBTypes.BrokerageAccounts> {
        return await this.get(`/iserver/accounts`);
    }
}

export default IBAccountService;