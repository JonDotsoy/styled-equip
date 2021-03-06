import React from 'react'
import uniqueId from 'lodash/uniqueId'
import toLower from 'lodash/toLower'
import styled, {css} from 'styled-components'
import {TitilliumWeb} from './FontFamily'
import * as c from '../libs/colors'

const InputComponent = styled.input`
    border: solid 1px ${c.BLUE};
    border-radius: 6px;
    height: 40px;
    padding: 0px 12px;
    font-size: 14px;
    width: 100%;
    color: ${c.BLUE};
    font-family: ${TitilliumWeb};
    box-sizing: border-box;
    &::placeholder {
        color: ${c.GREY};
    }

    &[disabled] {
        background-color: ${c.WHITE};
        color: ${c.GREY};
        border-color: ${c.GREY};
    }
`

const LabelComponent = styled.label`
    font-size: 18px;
    color: ${c.BLUE};
    font-family: ${TitilliumWeb};

    &[disabled] {
        color: ${c.GREY};
    }
`

const TextLabel = styled.span`
    line-height: 28px;
    display: inline-block;
`

const Container = styled.div`
    display: block;
    width: 100%;
`

const ContainerIcon = styled.span`
    display: inline-block;
    height: 28px;
    box-sizing: border-box;
    margin-right: 6px;
    & > * {
        width: 24px;
        height: 24px;
        margin-top: 2px;
        vertical-align: top !important;
    }
`

export const InputBase = ({label, icon, ...props}) => (
    <Container className={props.className}>
        {label && (
            <div>
                <LabelComponent htmlFor={props.id} disabled={props.disabled}>
                    {icon && (<ContainerIcon>{icon}</ContainerIcon>)}
                    <TextLabel>{label}</TextLabel>
                </LabelComponent>
            </div>
        )}
        <InputComponent {...props}/>
    </Container>
)

export const Input = styled(InputBase).attrs({
    priority: prop => toLower(prop.priority) || 'active',
})``

Input.displayName = "Input"
