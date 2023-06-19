/**
 * Copyright (c) Demo React Storefront - All Rights Reserved
 *
 * Author:
 * Rickson Muchedzi, rrmuchedzi@gmail.com
 *
 * Description:
 * Shared component for external click events notifications.
 */

import { FC, PropsWithChildren, useEffect, useRef } from 'react';

const useOutsideAlerter = (ref: any, onClickOutside: () => void) => {
    useEffect(() => {
        // Alert if clicked on outside of element
        const handleClickOutside = (event: any) => {
            if (ref.current && !ref.current.contains(event.target)) {
                onClickOutside();
            }
        };
        // Bind the event listener
        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [ref]);
};

interface OutsideAlerterProps {
    onClickOutside: () => void;
}

export const OutsideAlerter: FC<PropsWithChildren<OutsideAlerterProps>> = ({ children, onClickOutside }) => {
    const wrapperRef = useRef(null);
    useOutsideAlerter(wrapperRef, onClickOutside);

    return (
        <>
            <div ref={wrapperRef}>{children}</div>
        </>
    );
};
