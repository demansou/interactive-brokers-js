declare module 'IBTypes' {
    export interface Account {
        [key: number]: string
    }
    export interface AccountAlias {
        [key: string]: string
    }
    export interface AccountData {
        amount: number
        currency: string | null
        isNull: boolean
        timeStamp: number
        value: string
        severity: number
    }
    export interface AccountFeatures {
        showGfis: boolean
        showEuCostReport: boolean
        allowFxConv: boolean
        allowFinancialLens: boolean
        allowMta: boolean
        allowTypeAhead: boolean
        AllowEventTrading: boolean
        snapshotRefreshTimeout: number
        liteUser: boolean
        showWebNews: boolean
        research: boolean
        debugPnl: boolean
        showTaxOpt: boolean
        showImpactDashboard: boolean
        allowDynAccount: boolean
        allowCrypto: boolean
        allowedAssetTypes: string
    }
    export interface AccountProps {
        [key: string]: AccountPropOptions
    }
    export interface AccountPropOptions {
        hasChildAccounts: boolean
        supportsCashQty: boolean
        noFxConv: boolean
        isProp: boolean
        supportsFractions: boolean
        allowCustomerTime: boolean
    }
    export interface AccountSummary {
        [key: string]: AccountData
        availableFunds: AccountData
        buyingPower: AccountData
    }
    export interface AuthenticationStatus {
        authenticated: boolean
        competing: boolean
        connected: boolean
        message: string
        mac: string
        serverInfo: ServerInfo
        fail: string
    }
    export interface BrokerageAccounts {
        accounts: Account[]
        acctProps: AccountProps,
        aliases: AccountAlias
        allowFeatures: AccountFeatures
        chartPeriods: ChartPeriods
        groups: any[]
        profiles: any[]
        selectedAccount: string
        serverInfo: ServerInfo
        sessionId: string
        isFt: boolean
        isPaper: boolean
    }
    export interface ChartPeriod {
        [key: number]: string
    }
    export interface ChartPeriods {
        [key: string]: ChartPeriod[]
    }
    export interface ContractDetails {
        r_t_h: boolean
        con_id: string
        company_name: string
        exchange: string
        local_symbol: string
        instrument_type: string
        currency: string
        companyName: string
        category: string
        industry: string
        rules: ContractRules
    }
    export interface ContractRules {
        orderTypes: string[]
        orderTypesOutside: string[]
        defaultSize: number
        sizeIncrement: number
        tifTypes: string[]
        limitPrice: number
        stopprice: number
        preview: boolean
        displaySize: string
        increment: string
    }
    export interface DisplayRule {
        magnification: number
        displayRuleStep: DisplayRuleSteps
    }
    export interface DisplayRuleStep {
        decimalDigits: number
        lowerEdge: number
        wholeDigit: number
    }
    export interface DisplayRuleSteps {
        [key: number]: DisplayRuleStep
    }
    export interface FuturesInfo {
        symbol: string
        conid: number
        underlyingConid: number
        expirationDate: number
        ltd: number
        shortFuturesCutOff: number
        longFuturesCutOff: number
    }
    export interface IncrementRule {
        lowerEdge: number
        increment: number
    }
    export interface IncrementRules {
        [key: number]: IncrementRule
    }
    export interface LogoutConfirmation {
        confirmed: boolean
    }
    export interface MarketData {
        31: string
        84: string
        85: string
        86: string
        88: string
        6119: string
        6509: string
        7219: string
        7635: string
        7762: string
        conIdEx: string
        conId: number
        server_id: string
    }
    export interface MarketDataBeta {
        "31": string
        "70": number
        "71": number
        "82": string
        "83": number
        "84": string
        "85": string
        "86": string
        "87": string
        "88": string
        "6509": string
        "7057": string
        "7058": string
        "7059": number
        "7068": string
        "7195": string
        "7196": string
        "7197": string
        "7198": string
        "7199": string
        "7200": string
        "7201": string
        "7202": string
        "7203": string
        "7204": string
        "7205": string
        "7206": string
        "7207": string
        "7208": string
        "7209": string
        "7210": string
        "7211": string
        "7212": string
        "7245": string
        "7246": string
        "7247": string
        "7248": string
        "7249": string
        "7263": string
        "7264": string
        "7265": string
        "7266": string
        "7267": string
        "7268": string
        "7269": string
        "7271": string
        "7272": string
        "7273": string
        "7274": string
        "7275": string
        "7276": string
        "7277": string
        "7282": string
        "7283": string
        "7284": string
        "7286": number
        "7287": string
        "7288": string
        "7289": string
        "7290": string
        "7293": string
        "7294": string
        "7295": number
        "7296": number
        "7331": string
        "7370": string
        "7371": string
        "7372": string
        "7635": string
        "7636": number
        "7637": string
        "7644": string
        "7674": string
        "7675": string
        "7676": string
        "7677": string
        "7681": string
        "7698": string
        "7699": string
        "7718": string
        "7720": string
        "7743": string
        "7761": string
        "7992": string
        "7993": string
        "7994": string
        "7995": string
        "conid": number
        "minTick": number
        "BboExchange": string
        "HasDelayed": boolean
        "sizeMinTick": number
        "BestEligible": number
        "BestBidExch": number
        "BestAskExch": number
        "PreOpenBid": number
        "LastAttribs": number
        "TimestampBase": number
        "TimestampDelta": number
        "LastExch": number
        "CloseAttribs": number
    }
    export interface MarketDataAggregate {
        [key: number]: MarketData
    }
    export interface MarketDataCancelConfirmation {
        confirmed: string
    }
    export interface MarketDataHistory {
        bars: MarketDataHistoryBars
    }
    export type MarketDataHistoryBar = 'min' | 'h' | 'd' | 'w' | 'm'
    export interface MarketDataHistoryBars {
        open: number
        startTime: string
        startTimeVal: number
        endTime: string
        endTimeVal: number
        points: number
        data: MarketDataHistoryBarsData[]
        mktDataDelay: number
    }
    export interface MarketDataHistoryBarsData {
        t: number
        o: number
        c: number
        h: number
        l: number
        v: number
    }
    export type MarketDataHistoryPeriod = 'min' | 'h' | 'd' | 'w' | 'm' | 'y'
    export interface Order {
        acctId: string
        conid: number
        conidex: string
        secType: string
        orderType: string
        listingExchange: string
        isSingleGroup: boolean
        outsideRth: boolean
        price: number
        side: "BUY" | "SELL"
        ticker: string
        tif: "DAY"
        referrer: string
        quantity: number
        useAdaptive: boolean
        isCcyConv: boolean
        allocationMethod: "AvailableEquity"
    }
    export interface Orders {
        orders: Order[]
    }
    export type OrdersFeedback = OrderFeedback[]
    export interface OrderFeedback {
        id: string
        message: string[]
    }
    export interface OrderReplyResponse extends OrderFeedback {
        'order_id': string
        'order_status': string
        'local_order_id': string
    }
    export interface OrdersFeedbackReply {
        confirmed: boolean
    }
    export interface Position {
        acctId: string
        conId: number
        contractDesc: string
        position: number
        mktPrice: number
        mktValue: number
        currency: string
        avgCost: number
        avgPrice: number
        realizedPnl: number
        unrealizedPnl: number
        exchs: any | null
        expiry: string
        putOrCall: any | null
        multiplier: number
        strike: number
        exerciseStyle: any | null
        conExchMap: any[]
        assetClass: string
        undConid: number
        model: string
        time: number
        chineseName: string
        allExchanges: string
        listingExchange: string
        countryCode: string
        name: string
        lastTradingDay: string
        group: string
        sector: string
        sectorGroup: any | null
        ticker: string
        type: string
        undComp: string
        undSym: string
        underExchange: string
        hasOptions: boolean
        fullName: string
        incrementRules: IncrementRules
        displayRule: DisplayRule
        isEventContract: boolean
        pageSize: number
    }
    export interface PositionByContractId {
        [key: number]: Position
    }
    export interface ReauthenticationStatus {
        authenticated: boolean
        connected: boolean
        competing: boolean
        fail: string
        message: string
        prompts: string[]
    }
    export interface SecurityDefinition {
        conid: number
        currency: string
        crossCurrency: string
        time: number
        chineseName: string
        allExchanges: string
        listingExchange: string
        name: string
        assetClass: string
        expiry: string
        lastTradingDay: string
        group: string
        putOrCall: string
        sector: string
        sectorGroup: string
        strike: number
        ticker: string
        undConid: number
        multiplier: number
        type: string
        undComp: string
        undSym: string
        hasOptions: boolean
        fullName: string
        isUS: boolean
        incrementRule: IncrementRule
    }
    export interface SecurityFutures {
        [key: string]: FuturesInfo[]
    }
    export interface SecuritySearchTerms {
        symbol: string
        name: boolean
        secType: string
    }
    export interface SecuritySearchResult {
        conid: number
        companyHeader: string
        companyName: string
        symbol: string
        description: string
        restricted: string
        fop: string
        opt: string
        war: string
        sections: SecuritySearchSection[]
    }
    export interface SecuritySearchSection {
        secType: string
        months: string
        symbol: string
        exchange: string
        legSecType: string
    }
    export interface SecurityStocks {
        [key: string]: StocksInfo[]
    }
    export interface ServerInfo {
        serverName: string
        serverVersion: string
    }
    export interface SsoValidationInfo {
        LOGIN_TYPE: number
        USER_NAME: string
        USER_ID: number
        expire: number
        RESULT: boolean
        AUTH_TIME: number
    }
    export interface StockContractInfo {
        conid: string
        exchange: string
    }
    export interface StocksInfo {
        name: string
        chineseName: string
        assetClass: string
        contracts: StockContractInfo[]
    }
    export interface TradingSchedule {
        clearingCycleEndTime: number
        tradingScheduleDate: number
        sessions: TradingScheduleSession
        tradingTimes: TradingScheduleTradingTimes
    }
    export interface TradingScheduleForSymbol {
        id: string
        tradeVenueId: string
        schedules: TradingSchedule[]
    }
    export interface TradingScheduleSession {
        openingTime: number
        closingTime: number
        prop: string
    }
    export interface TradingScheduleTradingTimes {
        openingTime: number
        closingTime: number
        cancelDayOrders: string
    }
    export interface WhatIfAmount {
        amount: string
        commission: string
        total: string
    }
    export interface WhatIfChange {
        current: string
        change: string
        after: string
    }
    export interface WhatIfOrdersFeedback {
        amount: WhatIfAmount
        equity: WhatIfChange
        initial: WhatIfChange
        maintenance: WhatIfChange
        warn: string
        error: string
    }
}