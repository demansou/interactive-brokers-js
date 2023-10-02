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

    async getMarketDataSnapshotBeta(conIds: string[], fields: number[]): Promise<IBTypes.MarketDataAggregate> {
        return await this.get(`/md/snapshot?conids=${conIds.join(',')}&fields=${fields.join(',')}`);
    }

    async getMarketDataSnapshot(conIds: number[], since: number, fields: number[]): Promise<IBTypes.MarketDataAggregate> {
        return await this.get(`/iserver/marketdata/snapshot?conids=${conIds.join(',')}&since=${since}&fields=${fields.join(',')}`)
    }

    async marketDataCancel(conId: number): Promise<IBTypes.MarketDataCancelConfirmation> {
        return await this.get(`/iserver/marketata/${conId}/unsubscribe`);
    }

    async marketDataCancelAll(): Promise<IBTypes.MarketDataCancelConfirmation> {
        return await this.get('/iserver/marketdata/unsubscribeall');
    }
}

export default IBMarketDataService;