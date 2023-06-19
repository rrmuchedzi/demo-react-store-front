/**
 * Copyright (c) Demo React Storefront - All Rights Reserved
 *
 * Author:
 * Rickson Muchedzi, rrmuchedzi@gmail.com
 */

import { FC } from 'react';
import { AlertTriangle, InfoCircle, Reload, X } from 'tabler-icons-react';
import { useDispatch, useSelector } from 'react-redux';
import { MessageType } from '../../../api/ constants/message';
import { dismissMessageBanner, MessageState } from '../../../redux/message';
import { selectMessage } from '../../../redux/message/selector';
import { TypedDispatch } from '../../../store';
import { StyledClearContainer, StyledMessageBarContainer, StyledMessageContainer, StyledUnderlined } from './style';

export interface MessageBarProps {
    className?: string;
}

interface StoreMessageBarProps extends MessageBarProps {
    handleDismissBanner: TypedDispatch;
    message: MessageState;
}

const MessageBar: FC<StoreMessageBarProps> = ({ className, message, handleDismissBanner }) => {
    const canClearMessage = message.type !== MessageType.CriticalError;
    return (
        <StyledMessageBarContainer type={message.type} className={className}>
            {message.type !== MessageType.Error && <StyledClearContainer />}
            <StyledMessageContainer>
                {message.type === MessageType.Error && <AlertTriangle />}
                {message.type === MessageType.Info && <InfoCircle />}
                {message.message}
                {message.type === MessageType.CriticalError && (
                    <>
                        <StyledUnderlined onClick={() => location.reload()}>
                            {'Please refresh the page.'}
                        </StyledUnderlined>
                        <Reload onClick={() => location.reload()} />
                    </>
                )}
            </StyledMessageContainer>

            {canClearMessage && (
                <StyledClearContainer onClick={handleDismissBanner}>
                    <X size={20} />
                </StyledClearContainer>
            )}
        </StyledMessageBarContainer>
    );
};

/**
 * Component will display a message bar when there is an Error or Update.
 */
export const StoreMessageBar = (props: MessageBarProps) => {
    const message = useSelector(selectMessage);
    const dispatch = useDispatch();

    const handleDismissBanner = () => dispatch(dismissMessageBanner());

    return message == null ? null : (
        <MessageBar message={message} handleDismissBanner={handleDismissBanner} {...props} />
    );
};
