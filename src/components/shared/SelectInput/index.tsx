/**
 * Copyright (c) Demo React Storefront - All Rights Reserved
 *
 * Author:
 * Rickson Muchedzi, rrmuchedzi@gmail.com
 *
 * Description:
 * Styled shared select input component
 */

import { FC, useState } from 'react';
import { ChevronDown, ChevronUp } from 'tabler-icons-react';
import { OutsideAlerter } from '../../../helper/ClickComponent';
import {
    StyledSelectCurrentOption,
    StyledSelectInputContainer,
    StyledSelectInputField,
    StyledSelectInputList,
    StyledSelectInputOption,
} from './style';

export interface SelectInputProps {
    options: string[];
    selected: string;
    onValueChange: (value: string) => void;
}

export const SelectInput: FC<SelectInputProps> = ({ options, selected, onValueChange }) => {
    const [isActive, setIsActive] = useState(false);

    const onToggleShowSelectOptions = () => {
        setIsActive(!isActive);
    };

    const onSelectFilterOption = (filter: string) => {
        setIsActive(false);
        onValueChange(filter);
    };

    return (
        <StyledSelectInputContainer>
            <OutsideAlerter
                onClickOutside={() => {
                    if (isActive) {
                        setIsActive(false);
                    }
                }}
            >
                <StyledSelectInputField type="button" onClick={onToggleShowSelectOptions} isActive={isActive}>
                    <StyledSelectCurrentOption>{selected}</StyledSelectCurrentOption>
                    {!isActive ? <ChevronDown size={18} /> : <ChevronUp size={18} />}
                    <StyledSelectInputList>
                        {options.map((optionsValue) => (
                            <StyledSelectInputOption
                                key={`select-option-${optionsValue}`}
                                isSelected={optionsValue === selected}
                                onClick={() => onSelectFilterOption(optionsValue)}
                            >
                                <span>{optionsValue}</span>
                            </StyledSelectInputOption>
                        ))}
                    </StyledSelectInputList>
                </StyledSelectInputField>
            </OutsideAlerter>
        </StyledSelectInputContainer>
    );
};
