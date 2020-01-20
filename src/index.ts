import {AxiosRequestConfig} from './types'
import xhr from './xhr'
import { buildURL } from './helpers/url'
import { transformRequest } from './helpers/data'
import { processHeaders } from './helpers/headers'

function axios(config: AxiosRequestConfig): void {
    processConfig(config)
    xhr(config)
}

function processConfig(config: AxiosRequestConfig): void {
    config.url = tansformURL(config)
    config.headers = transformHeaders(config)
    config.data = tansformRequestData(config)
}

function tansformURL(config: AxiosRequestConfig): string {
    const {url, params} = config
    return buildURL(url, params)
}

function tansformRequestData(config: AxiosRequestConfig): any {
    return transformRequest(config.data)
}

function transformHeaders(config: AxiosRequestConfig): any {
    const {headers = {}, data} = config
    return processHeaders(headers, data)
}

export default axios