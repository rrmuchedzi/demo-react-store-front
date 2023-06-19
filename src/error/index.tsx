/*
 * Copyright (c) Demo React Storefront - All Rights Reserved
 *
 * Description:
 * This component wraps the app entry component and it for handling potential hard errors.
 */

import { Component, ErrorInfo, PropsWithChildren, ReactNode } from 'react';
import { Heading } from '../components/shared/Heading';
import { ErrorBoundaryContainer, ErrorBoundaryWrapper } from './style';

interface ErrorBoundaryState {
    error?: Error;
    errorInfo?: ErrorInfo;
}

export class ErrorBoundary extends Component<PropsWithChildren<ErrorBoundaryState>> {
    public state: any = {};

    public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        // Catch errors in any components below and re-render with error message
        this.setState({ error, errorInfo });
    }

    render(): ReactNode {
        if (this.state.errorInfo != null) {
            return (
                <ErrorBoundaryContainer>
                    <ErrorBoundaryWrapper>
                        <Heading level={2}>Something went wrong</Heading>
                        <p>
                            This error caused the application to stop working. Please&nbsp;
                            <a href="javascript:void(0)" onClick={() => window.location.reload()}>
                                reload
                            </a>
                            &nbsp;to try again or&nbsp; contact the developer at{' '}
                            <a
                                href={`mailto:rrmuchedzi@gmail.com?subject=Error report for Demo React Storefront store front application`}
                            >
                                rrmuchedzi@gmail.com
                            </a>
                            &nbsp;if the error persists.
                        </p>
                    </ErrorBoundaryWrapper>
                </ErrorBoundaryContainer>
            );
        }

        // Normally, just render children
        return this.props.children;
    }
}
