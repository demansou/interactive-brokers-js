import { BaseService } from "./baseService";
import * as IBTypes from 'IBTypes';

class IBOrderService extends BaseService {
    constructor(baseUrl: string) {
        super(baseUrl);
    }

    async postOrder(accountId: string, order: IBTypes.Orders): Promise<IBTypes.OrdersFeedback> {
        return await this.post(`/iserver/account/${accountId}/orders`, order);
    }

    async postPreviewOrder(accountId: string, order: IBTypes.Orders): Promise<IBTypes.WhatIfOrdersFeedback> {
        return await this.post(`/iserver/account/${accountId}/orders/whatif`, order);
    }

    async postOrderReply(replyId: string, feedbackReply: IBTypes.OrdersFeedbackReply): Promise<IBTypes.OrderReplyResponse[]> {
        return await this.post(`/iserver/reply/${replyId}`, feedbackReply);
    }
}

export default IBOrderService;