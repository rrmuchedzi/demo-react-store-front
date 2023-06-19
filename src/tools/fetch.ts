/**
 * Copyright (c) Demo React Storefront - All Rights Reserved
 *
 * Author:
 * Rickson Muchedzi, rrmuchedzi@gmail.com
 */

import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { HttpMethod, HttpStatus } from '../api/utils/endpointSync';
import { captureException } from './error';

/**
 * Extended Error which can also contain the response triggering the error
 * (usually because of a faulty HTTP status code).
 *
 * This response can then be used to get more information about the error
 * by using the response body.
 */
class FetchError extends Error {
    public response: AxiosResponse;

    constructor(response: AxiosResponse) {
        super(response.statusText);
        this.response = response;
        this.logError();
    }

    public async logError(): Promise<void> {
        captureException('FetchError (Text): ', this.response.statusText);
    }
}

/**
 * Helper method to check for a error HTTP response.
 * By default, if the request succeeds, the promise will
 * also succeed. However, we would like to have the request also fail
 * if the HTTP status core is below 200 or 300 and higher.
 *
 */
function checkHttpStatus(response: AxiosResponse): AxiosResponse {
    if (response.status >= HttpStatus.OK && response.status < HttpStatus.BAD_REQUEST) {
        return response;
    }

    throw new FetchError(response);
}

/**
 * Handles HTTP request for the application.
 *
 * @param url request URL address
 * @param method HTTP method for server interaction
 * @returns request response/result from the server
 */
export async function endpointFetch<Res>(url: string, method: HttpMethod): Promise<Res> {
    const config: AxiosRequestConfig = {
        url,
        method,
        headers: {
            'Content-Type': 'application/json',
        },
        timeout: 200000,
    };

    return axios(config)
        .then(checkHttpStatus)
        .then((res) => res.data);
}
