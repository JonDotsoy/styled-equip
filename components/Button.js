import React from 'react'
import toLower  from 'lodash/toLower'
import * as c from '../libs/colors'
import TitilliumWeb from './FontFamily'
import styled, {css} from 'styled-components'

const ButtonStyle = css`
    font-family: ${TitilliumWeb};
    font-size: 14px;
    text-transform: uppercase;
    border: solid 1px black;
    box-sizing: content-box;
    height: 40px;
    padding-top: 0px;
    padding-bottom: 0px;
    margin: 0px;
    border-radius: 20px;
    padding-left: 24px;
    padding-right: 24px;
`

const ButtonSizeStyle = ({size}) => {
    switch (size) {
        case 'lg':
        case 'large': return css``
        case 'sm':
        case 'small': return css``
        case 'xs':
        case 'extra small':
        case 'extra-small': return css``
        // 'medium'
        default: return css`
        padding-left: 18px;
        padding-right: 18px;
        height: 26px;
        border-radius: 13px;
        `
    }
}

const ButtonTypeStyle = ({type}) => {
    switch (type) {
        case 'primary': return css`
            color: ${c.WHITE};
            border-color: ${c.BLUE};
            background-color: ${c.BLUE};
        `
        case 'success': return css`
            color: ${c.WHITE};
            border-color: ${c.GREEN};
            background-color: ${c.GREEN};
        `
        case 'warning': return css`
            color: ${c.WHITE};
            border-color: ${c.YELLOW};
            background-color: ${c.YELLOW};
        `
        case 'info': return css`
            color: ${c.WHITE};
            border-color: ${c.BLUELITE};
            background-color: ${c.BLUELITE};
        `
        case 'link': return css`
            color: ${c.BLUE};
            text-decoration: underline;
            border-color: transparent;
            background-color: transparent;
        `
        case 'danger': return css`
            color: ${c.WHITE};
            border-color: ${c.RED};
            background-color: ${c.RED};
        `
        // 'active'
        default: return css`
        color: ${c.BLUE};
            border-color: ${c.BLUE};
            background-color: ${c.WHITE};
        `
    }
}

export const Button = styled.button.attrs({
    size: prop => toLower(prop.size) || 'medium',
    type: prop => toLower(prop.type) || 'active'
})`${ButtonStyle}${ButtonSizeStyle}${ButtonTypeStyle}`
