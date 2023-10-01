import { AxiosRequestConfig } from "axios";
import https from 'https';
import BaseService from "./baseService";
import * as IBTypes from 'IBTypes';

class IBMarketDataService extends BaseService {
    constructor(baseUrl: string) {
        super(baseUrl);
    }
}

export default IBMarketDataService;