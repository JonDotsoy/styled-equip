import React from 'react'
import Color from 'color'
import toLower  from 'lodash/toLower'
import * as c from '../libs/colors'
import TitilliumWeb from './FontFamily'
import styled, {css} from 'styled-components'

const ButtonStyle = css`
    border-radius: 13px;
    border: solid 1px black;
    box-sizing: content-box;
    font-family: ${TitilliumWeb};
    font-size: 14px;
    height: 26px;
    margin: 0px;
    padding-bottom: 0px;
    padding-left: 18px;
    padding-right: 18px;
    padding-top: 0px;
    text-transform: uppercase;

    &:focus,
    &.focus {
        outline: -webkit-focus-ring-color auto 5px;
        outline-color: -webkit-focus-ring-color;
        outline-style: auto;
        outline-width: 5px;
    }
`

const ButtonSizeStyle = ({size}) => {
    switch (size) {
        case 'lg':
        case 'large': return css`
            border-radius: 20px;
            height: 40px;
            padding-left: 26px;
            padding-right: 26px;
        `
        case 'sm':
        case 'small': return css`
            border-radius: 10px;
            font-size: 12px;
            height: 20px;
            padding-left: 14px;
            padding-right: 14px;
        `
        case 'xs':
        case 'extra small':
        case 'extra-small': return css`
            border-radius: 10px;
            font-size: 10px;
            height: 16px;
            padding-left: 10px;
            padding-right: 10px;
        `
        // 'medium'
        default: return css`
        `
    }
}

const ButtonTypeStyle = ({priority}) => {
    switch (priority) {
        case 'primary': return css`
            color: ${c.WHITE};
            border-color: ${c.BLUE};
            background-color: ${c.BLUE};

            &:focus,
            &.focus,
            &:hover,
            &.hover {
                background-color: ${Color(c.BLUE).lighten(0.5).string()};
            }

            &[disabled],
            &.disabled {
                color: ${c.GREY};
                background-color: ${Color(c.BLUE).alpha(0.8).string()};
                border-color: ${Color(c.BLUE).alpha(0.8).string()};
            }
        `
        case 'success': return css`
            color: ${c.WHITE};
            border-color: ${c.GREEN};
            background-color: ${c.GREEN};

            &[disabled],
            &.disabled {
                color: ${c.WHITE};
                background-color: ${Color(c.GREEN).alpha(0.8).string()};
                border-color: ${Color(c.GREEN).alpha(0.8).string()};
            }
        `
        case 'warning': return css`
            color: ${c.WHITE};
            border-color: ${c.YELLOW};
            background-color: ${c.YELLOW};

            &[disabled],
            &.disabled {
                color: ${c.WHITE};
                background-color: ${Color(c.YELLOW).alpha(0.8).string()};
                border-color: ${Color(c.YELLOW).alpha(0.8).string()};
            }
        `
        case 'info': return css`
            color: ${c.WHITE};
            border-color: ${c.BLUELITE};
            background-color: ${c.BLUELITE};

            &[disabled],
            &.disabled {
                color: ${c.WHITE};
                background-color: ${Color(c.BLUELITE).alpha(0.8).string()};
                border-color: ${Color(c.BLUELITE).alpha(0.8).string()};
            }
        `
        case 'link': return css`
            color: ${c.BLUE};
            text-decoration: underline;
            border-color: transparent;
            background-color: transparent;

            &[disabled],
            &.disabled {
                color: ${c.GREY};
            }
        `
        case 'danger': return css`
            color: ${c.WHITE};
            border-color: ${c.RED};
            background-color: ${c.RED};

            &[disabled],
            &.disabled {
                color: ${c.WHITE};
                background-color: ${Color(c.RED).alpha(0.8).string()};
                border-color: ${Color(c.RED).alpha(0.8).string()};
            }
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
    priority: prop => toLower(prop.priority) || 'active',
})`${ButtonStyle}${ButtonSizeStyle}${ButtonTypeStyle}`

Button.displayName = "Button"
