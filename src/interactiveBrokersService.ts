import * as IBTypes from 'IBTypes';
import { IBContractService } from './ibContractService';
import { IBSessionService } from './ibSessionService';
import { IBMarketDataService } from './ibMarketDataService';
import { IBAccountService } from './ibaccountService';
import { IBPortfolioService } from './ibPortfolioService';
import IBOrderService from './ibOrderService';

class InteractiveBrokersService {
    private contractService: IBContractService;
    private sessionService: IBSessionService;
    private marketDataService: IBMarketDataService;
    private accountService: IBAccountService;
    private portfolioService: IBPortfolioService;
    private orderService: IBOrderService;

    constructor(baseUrl: string) {
        this.contractService = new IBContractService(baseUrl);
        this.sessionService = new IBSessionService(baseUrl);
        this.marketDataService = new IBMarketDataService(baseUrl);
        this.accountService = new IBAccountService(baseUrl);
        this.portfolioService = new IBPortfolioService(baseUrl);
        this.orderService = new IBOrderService(baseUrl);
    }

    // Session
    async tickle(): Promise<void> {
        await this.sessionService.tickle();
    }

    async logout(): Promise<IBTypes.LogoutConfirmation> {
        return await this.sessionService.logout();
    }

    async ssoValidate(): Promise<IBTypes.SsoValidationInfo> {
        return await this.sessionService.ssoValidate();
    }

    async getAuthenticationStatus(): Promise<IBTypes.AuthenticationStatus> {
        return await this.sessionService.getAuthenticationStatus();
    }

    async reauthenticate(): Promise<IBTypes.ReauthenticationStatus> {
        return await this.sessionService.reauthenticate();
    }

    // Contract

    async secdefByConid(conids: number[]): Promise<IBTypes.SecurityDefinition[]> {
        return await this.contractService.secdefByConid(conids);
    }

    async getTradingScheduleForSymbol(assetClass: string, symbol: string, exchange: string, exchangeFilter: string): Promise<IBTypes.TradingScheduleForSymbol> {
        return await this.contractService.getTradingScheduleForSymbol(assetClass, symbol, exchange, exchangeFilter);
    }

    async getSecurityFuturesBySymbol(symbols: string[]): Promise<IBTypes.SecurityFutures> {
        return await this.contractService.getSecurityFuturesBySymbol(symbols);
    }

    async getSecurityStocksBySymbol(symbols: string[]): Promise<IBTypes.SecurityStocks> {
        return await this.contractService.getSecurityStocksBySymbol(symbols);
    }

    async getContractDetails(conid: number): Promise<IBTypes.ContractDetails> {
        return await this.contractService.getContractDetails(conid);
    }

    async searchBySymbolOrName(symbolOrName: string, isName: boolean, securityType: string): Promise<IBTypes.SecuritySearchResult> {
        return await this.contractService.searchBySymbolOrName(symbolOrName, isName, securityType);
    }

    async searchStrikes(conid: number, securityType: string, month: string, exchange: string | undefined): Promise<any> {
        return await this.contractService.searchStrikes(conid, securityType, month, exchange);
    }

    async getSecdefInfo(conid: number, securityType: string, month: string | undefined, exchange: string | undefined, strike: number | undefined, right: string | undefined): Promise<any> {
        return await this.contractService.getSecdefInfo(conid, securityType, month, exchange, strike, right);
    }

    async getAlgoParams(conid: number, algos: string[], addDescription: 0 | 1, addParams: 0 | 1): Promise<any> {
        return await this.contractService.getAlgoParams(conid, algos, addDescription, addParams);
    }

    async postContractRules(conid: number, isBuy: boolean): Promise<any> {
        return await this.contractService.postContractRules(conid, isBuy);
    }

    async getInfoAndRules(conid: number, isBuy: boolean): Promise<any> {
        return await this.contractService.getInfoAndRules(conid, isBuy);
    }

    // Market Data

    async getMarketDataHistoryBeta(conid: number, period: IBTypes.MarketDataHistoryPeriod, bar: IBTypes.MarketDataHistoryBar, outsideRth: boolean): Promise<IBTypes.MarketDataHistory> {
        return await this.marketDataService.getMarketDataHistoryBeta(conid, period, bar, outsideRth)
    }

    async getMarketDataSnapshotBeta(conIds: string[], fields: number[]): Promise<IBTypes.MarketDataAggregate> {
        return await this.marketDataService.getMarketDataSnapshotBeta(conIds, fields);
    }

    // For package version compatibility. Some early versions had this instead of getMarketDataSnapshot.
    async getMarketData(conIds: number[], since: number, fields: number[]): Promise<IBTypes.MarketDataAggregate> {
        return await this.getMarketDataSnapshot(conIds, since, fields);
    }

    async getMarketDataSnapshot(conIds: number[], since: number, fields: number[]): Promise<IBTypes.MarketDataAggregate> {
        return await this.marketDataService.getMarketDataSnapshot(conIds, since, fields);
    }

    async marketDataCancel(conId: number): Promise<IBTypes.MarketDataCancelConfirmation> {
        return await this.marketDataService.marketDataCancel(conId);
    }

    async marketDataCancelAll(): Promise<IBTypes.MarketDataCancelConfirmation> {
        return await this.marketDataService.marketDataCancelAll();
    }

    async getMarketDataHistory(conid: number, exchange: string | undefined, period: IBTypes.MarketDataHistoryPeriod, bar: IBTypes.MarketDataHistoryBar, outsideRth: boolean): Promise<IBTypes.MarketDataHistory> {
        return await this.marketDataService.getMarketDataHistory(conid, exchange, period, bar, outsideRth);
    }

    // Scanner

    // Portfolio Analyst

    // Account

    async getAccountSummary(accountId: string): Promise<IBTypes.AccountSummary> {
        return await this.accountService.getAccountSummary(accountId);
    }

    async getBrokerageAccounts(): Promise<IBTypes.BrokerageAccounts> {
        return await this.accountService.getBrokerageAccounts();
    }

    // Portfolio

    async getPositionByContractId(accountId: string, conId: number): Promise<IBTypes.PositionByContractId> {
        return await this.portfolioService.getPositionByContractId(accountId, conId);
    }

    // Trades

    // Alert

    // Order

    async postOrder(accountId: string, order: IBTypes.Orders): Promise<IBTypes.OrdersFeedback> {
        return await this.orderService.postOrder(accountId, order);
    }

    async postPreviewOrder(accountId: string, order: IBTypes.Orders): Promise<IBTypes.WhatIfOrdersFeedback> {
        return await this.orderService.postPreviewOrder(accountId, order);
    }

    async postOrderReply(replyId: string, feedbackReply: IBTypes.OrdersFeedbackReply): Promise<IBTypes.OrderReplyResponse[]> {
        return await this.orderService.postOrderReply(replyId, feedbackReply);
    }

    // PnL
}

export default InteractiveBrokersService;