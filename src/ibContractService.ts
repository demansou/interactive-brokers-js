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

    async searchBySymbolOrName(symbol: string, isName: boolean, securityType: string): Promise<IBTypes.SecuritySearchResult> {
        const searchTerms: IBTypes.SecuritySearchTerms = {
            symbol: symbol,
            name: isName,
            secType: securityType
        };
        return await this.post('/iserver/secdef/search', searchTerms);
    }

    async searchStrikes(conid: number, securityType: string, month: string, exchange: string | undefined): Promise<any> {
        throw Error('Not yet implemented!');
    }

    async getSecdefInfo(conid: number, securityType: string, month: string | undefined, exchange: string | undefined, strike: number | undefined, right: string | undefined): Promise<any> {
        throw Error('Not yet implemented!');
    }

    async getAlgoParams(conid: number, algos: string[], addDescription: 0 | 1, addParams: 0 | 1) : Promise<any> {
        throw Error('Not yet implemented!');
    }

    async postContractRules(conid: number, isBuy: boolean): Promise<any> {
        throw Error('Not yet implemented!');
    }

    async getInfoAndRules(conid: number, isBuy: boolean): Promise<any> {
        throw Error('Not yet implemented!');
    }
}

export default IBContractService;