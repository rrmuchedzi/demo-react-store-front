/**
 * Copyright (c) Demo React Storefront - All Rights Reserved
 *
 * Author:
 * Rickson Muchedzi, rrmuchedzi@gmail.com
 */

/**
 * By throwing this error in a switch statement default case, TypeScript will warn against unhandled enum cases.
 */
export class UnreachableCaseError extends Error {
    constructor(val: any) {
        super(`Unreachable case: ${JSON.stringify(val, undefined, 2)}`);
    }
}

export const captureException = (err: unknown, captureContext?: string) => {
    // eslint-disable-next-line no-console
    console.error('[Logged Exception]', err, captureContext);
};
