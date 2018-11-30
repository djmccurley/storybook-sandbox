import React, { Component } from 'react';
import styled from 'styled-components';
import SectionHeader from './sectionHeader';
import SectionParagaph from './sectionParagraph';
import MyButton from './button';
import GreenButton from './greenButton'

const StyledCTASection = styled.div`
    padding: 20px;
    box-shadow: 0px 2px 4px 0px rgba(0,0,0,.20);
    border-radius: 5px;
    display: block;
    width: 50%;
    margin: 20px;
`;

const CTASection = (props) => {
    return (
        <StyledCTASection>
            <SectionHeader>{props.title}</SectionHeader>
            <SectionParagaph>{props.content}</SectionParagaph>
            <MyButton>{props.cancel}</MyButton>
            <GreenButton>{props.confirm}</GreenButton>
        </StyledCTASection>
    )


};

export default CTASection;