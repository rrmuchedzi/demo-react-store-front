/**
 * Copyright (c) Demo React Storefront - All Rights Reserved
 *
 * Author:
 * Rickson Muchedzi, rrmuchedzi@gmail.com
 *
 * Description:
 * Defines global styling for the application. Creating this as a component
 * makes it easy to share the styles with Storybook for UI elements testing and creating.
 *
 * The component makes use of the styled-components createGlobalStyle, used thought the application.
 */

import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html,
    body {
        font-size: 16px;
        font-weight: 400;
        color: #0f1419;
        position: relative;
        background: #ffffff;
        text-rendering: optimizeLegibility;
        font-family: 'Inter', sans-serif;
    }

    body {
        position: relative;
        overflow-x: hidden;
    }

    a {
        cursor: pointer;
        text-decoration: none;
    }

    li {
        list-style: none;
    }
    
    button {
        cursor: pointer;
    }

    @keyframes fadeIn {
        from {
            opacity: 0;
        }

        to {
            opacity: 1;
        }
    }

    /* width */
    ::-webkit-scrollbar {
        width: 10px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
        background: #f3f3f4;
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
        border-radius: 10px;
        max-height: 100px;
        background: #b2bec3;
    }
`;
