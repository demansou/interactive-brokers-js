import { BaseService } from "./baseService";
import * as IBTypes from 'IBTypes';

class IBPortfolioService extends BaseService {
    constructor(baseUrl: string) {
        super(baseUrl);
    }

    async getPositionByContractId(accountId: string, conId: number): Promise<IBTypes.PositionByContractId> {
        return await this.get(`/portfolio/${accountId}/position/${conId}`);
    }
}

export { IBPortfolioService };