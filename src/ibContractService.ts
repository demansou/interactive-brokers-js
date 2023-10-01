import { AxiosRequestConfig } from "axios";
import https from 'https';
import BaseService from "./baseService";
import * as IBTypes from 'IBTypes';

class IBContractService extends BaseService {
    constructor(baseUrl: string) {
        super(baseUrl);
    }

    async secdefByConid(conids: number[]): Promise<IBTypes.SecurityDefinition[]> {
        return await this.post('/trsrv/secdef', { conids: conids });
    }

    async getTradingScheduleForSymbol(assetClass: string, symbol: string, exchange: string, exchangeFilter: string): Promise<IBTypes.TradingScheduleForSymbol> {
        return await this.get(`/trsrv/secdef/schedule?assetClass=${assetClass}&symbol=${symbol}&exchange=${exchange}&exchangeFilter=${exchangeFilter}`);
    }

    async getSecurityFuturesBySymbol(symbols: string[]): Promise<IBTypes.SecurityFutures> {
        return await this.get(`/trsrv/futures?symbols=${symbols.join(',')}`);
    }

    async getSecurityStocksBySymbol(symbols: string[]): Promise<IBTypes.SecurityStocks> {
        return await this.get(`/trsrv/stocks?symbols=${symbols.join(',')}`);
    }

    async getContractDetails(conid: number): Promise<IBTypes.ContractDetails> {
        return await this.get(`/iserver/contract/${conid}/info`);
    }
}

export default IBContractService;