import React from 'react';
import { storiesOf } from '@storybook/react';
import MyButton from '../components/button';
import GreenButton from '../components/greenButton';
import SectionParagraph from '../components/sectionParagraph';
import SectionHeader from '../components/sectionHeader';
import CTASection from '../components/CTASection';

storiesOf('Buttons', module)
    .add('red happy', () => <MyButton>Yay 😂</MyButton>)
    .add('red sad', () => <MyButton>Aww 😞</MyButton>)
    .add('green happy', () => <GreenButton>Yay 😂</GreenButton>)
    .add('green sad', () => <GreenButton>Aww 😞</GreenButton>);
storiesOf('Type', module)
    .add('Section Header', () => <SectionHeader>Section Header</SectionHeader>)
    .add('Section Paragraph', () => <SectionParagraph>This is some paragraph text that wraps to multiple lines in most occasions. This is some paragraph text that wraps to multiple lines in most occasions. This is some paragraph text that wraps to multiple lines in most occasions. This is some paragraph text that wraps to multiple lines in most occasions.</SectionParagraph>);
storiesOf('Layouts', module)
    .add('CTA Section', () => <CTASection
        title='Section Title'
        content='Section content in the form of a paragraph or multiple paragraphs of copy.'
        cancel='Cancel'
        confirm='Confirm'
    ></CTASection>);    