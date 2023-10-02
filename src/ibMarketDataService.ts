import { AxiosRequestConfig } from "axios";
import https from 'https';
import BaseService from "./baseService";
import * as IBTypes from 'IBTypes';

class IBMarketDataService extends BaseService {
    constructor(baseUrl: string) {
        super(baseUrl);
    }

    async getMarketDataHistoryBeta(conid: number, period: IBTypes.MarketDataHistoryPeriod, bar: IBTypes.MarketDataHistoryBar, outsideRth: boolean): Promise<IBTypes.MarketDataHistory> {
        return await this.get(`/hmds/history?conid=${conid}&period=${period}&bar=${bar}&outsideRth=${outsideRth}`);
    }

    async getMarketData(conIds: number[], since: number, fields: number[]): Promise<IBTypes.MarketDataAggregate> {
        return await this.get(`/iserver/marketdata/snapshot?conids=${conIds.join(',')}&since=${since}&fields=${fields.join(',')}`)
    }
}

export default IBMarketDataService;