import styled from 'styled-components'
import ReactElementToString from 'react-element-to-string'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { docco } from 'react-syntax-highlighter/dist/styles'
import React from 'react'

const PrintDemo = styled.code`
    display: block;
    background-color: #eaeaea;
    margin-bottom: 20px;
    padding: 20px;
    font-family: monospace;
    font-size: 1.2em;
`

export const Demo = ({children, title, code}) => (
    <div>
        {children}
        <SyntaxHighlighter language='javascript' style={docco}>{ReactElementToString(children)}</SyntaxHighlighter>
    </div>
)
