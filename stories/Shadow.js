import React from 'react'
import { storiesOf } from '@storybook/react'
import styled from 'styled-components'
import {shadow1, shadow2, shadow3, shadow4, shadow5} from '../libs/shadow'

const DivWithShadow = styled.div`
    width: 120px;
    height: 120px;
    border: solid 1px #ccc;
    background-color: white;
    text-align: center;
    line-height: 120px;
`

const ContentDemos = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

    & > * {
        margin-right: 40px;
        margin-bottom: 40px;
        border-radius: ${prop => prop.circle ? '60px' : '0px'};
    }
`

const DivWithShadow1 = DivWithShadow.extend`${shadow1}`
const DivWithShadow2 = DivWithShadow.extend`${shadow2}`
const DivWithShadow3 = DivWithShadow.extend`${shadow3}`
const DivWithShadow4 = DivWithShadow.extend`${shadow4}`
const DivWithShadow5 = DivWithShadow.extend`${shadow5}`

storiesOf('Shadow', module)
    .add('All shadows', () => (
        <div>
            <ContentDemos>
                <DivWithShadow>Shadow 0</DivWithShadow>
                <DivWithShadow1>Shadow 1</DivWithShadow1>
                <DivWithShadow2>Shadow 2</DivWithShadow2>
                <DivWithShadow3>Shadow 3</DivWithShadow3>
                <DivWithShadow4>Shadow 4</DivWithShadow4>
                <DivWithShadow5>Shadow 5</DivWithShadow5>
            </ContentDemos>
            <ContentDemos circle={true}>
                <DivWithShadow>Shadow 0</DivWithShadow>
                <DivWithShadow1>Shadow 1</DivWithShadow1>
                <DivWithShadow2>Shadow 2</DivWithShadow2>
                <DivWithShadow3>Shadow 3</DivWithShadow3>
                <DivWithShadow4>Shadow 4</DivWithShadow4>
                <DivWithShadow5>Shadow 5</DivWithShadow5>
            </ContentDemos>
        </div>
    ))
