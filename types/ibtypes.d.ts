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
    export interface MarketDataAggregate {
        [key: number]: MarketData
    }
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
    type OrdersFeedback = OrderFeedback[]
    export interface OrderFeedback {
        id: string
        message: string[]
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
    export interface SecurityFutures {
        [key: string]: FuturesInfo[]
    }
    export interface ServerInfo {
        serverName: string
        serverVersion: string
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