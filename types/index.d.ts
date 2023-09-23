declare module 'ib-types' {
    interface Account {
        [key: number]: string
    }
    interface AccountAlias {
        [key: string]: string
    }
    interface AccountData {
        amount: number
        currency: string | null
        isNull: boolean
        timeStamp: number
        value: string
        severity: number
    }
    interface AccountFeatures {
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
    interface AccountProps {
        [key: string]: AccountPropOptions
    }
    interface AccountPropOptions {
        hasChildAccounts: boolean
        supportsCashQty: boolean
        noFxConv: boolean
        isProp: boolean
        supportsFractions: boolean
        allowCustomerTime: boolean
    }
    interface AccountSummary {
        [key: string]: AccountData
        availableFunds: AccountData
        buyingPower: AccountData
    }
    interface AuthenticationStatus {
        authenticated: boolean
        competing: boolean
        connected: boolean
        message: string
        mac: string
        serverInfo: ServerInfo
        fail: string
    }
    interface BrokerageAccounts {
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
    interface ChartPeriod {
        [key: number]: string
    }
    interface ChartPeriods {
        [key: string]: ChartPeriod[]
    }
    interface DisplayRule {
        magnification: number
        displayRuleStep: DisplayRuleSteps
    }
    interface DisplayRuleStep {
        decimalDigits: number
        lowerEdge: number
        wholeDigit: number
    }
    interface DisplayRuleSteps {
        [key: number]: DisplayRuleStep
    }
    interface FuturesInfo {
        symbol: string
        conid: number
        underlyingConid: number
        expirationDate: number
        ltd: number
        shortFuturesCutOff: number
        longFuturesCutOff: number
    }
    interface IncrementRule {
        lowerEdge: number
        increment: number
    }
    interface IncrementRules {
        [key: number]: IncrementRule
    }
    interface MarketData {
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
    interface MarketDataAggregate {
        [key: number]: MarketData
    }
    interface Order {
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
    interface Orders {
        orders: Order[]
    }
    type OrdersFeedback = OrderFeedback[]
    interface OrderFeedback {
        id: string
        message: string[]
    }
    interface Position {
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
    interface PositionByContractId {
        [key: number]: Position
    }
    interface SecurityFutures {
        [key: string]: FuturesInfo[]
    }
    interface ServerInfo {
        serverName: string
        serverVersion: string
    }
    interface WhatIfAmount {
        amount: string
        commission: string
        total: string
    }
    interface WhatIfChange {
        current: string
        change: string
        after: string
    }
    interface WhatIfOrdersFeedback {
        amount: WhatIfAmount
        equity: WhatIfChange
        initial: WhatIfChange
        maintenance: WhatIfChange
        warn: string
        error: string
    }
}