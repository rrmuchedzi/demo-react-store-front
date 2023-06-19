/**
 * Copyright (c) Demo React Storefront - All Rights Reserved
 *
 * Author:
 * Rickson Muchedzi, rrmuchedzi@gmail.com
 */
declare module '*.svg' {
    // react-svg-loader turns imported SVGs into React Components
    const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
    // eslint-disable-next-line import/no-default-export
    export default content;
}

declare module '*.png' {
    const content: any;
    // eslint-disable-next-line import/no-default-export
    export default content;
}
