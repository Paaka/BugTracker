import React from 'react';
import FlexWrapper from '../../atoms/FlexWrapper/FlexWrapper';
import Paragraph from '../../atoms/typography/Paragraph/Paragraph';

const CheckboxWithLabel = ({label, onClickFn, value}) => {
   
    const toggleHandler = () => {
        onClickFn(!value);
    }
   
   return (<FlexWrapper onClickFn={toggleHandler}>
        <input type="checkbox" checked={value}/>
        <Paragraph cursor="pointer">{label}</Paragraph>
    </FlexWrapper>);
};

export default CheckboxWithLabel;