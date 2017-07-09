import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { Input } from '../components/Input'
import styled from 'styled-components'
import FaBeez from 'react-icons/lib/fa/beer'
import loremIpsum from 'lorem-ipsum'

const Container = styled.div`
    & > * {
        margin-bottom: 20px;
    }
`

storiesOf('Input', module)
    .add('All', () => (
        <Container>
            <Input label='hola' id='nana' icon={<FaBeez />}/>
            <Input label='hola' disabled id='nana' icon={<FaBeez />}/>
            <Input label='hola' id='nana' placeholder="asd" icon={<img src="http://pomma89.altervista.org/troschuetz.random/logo-128.png" />}/>
            <Input disabled label='hola' id='nana' value="asd" icon={<img src="http://pomma89.altervista.org/troschuetz.random/logo-128.png" />}/>
            <Input value={loremIpsum({count: 1})}/>
            <hr/>

            <p>{loremIpsum()}</p>
        </Container>
    ))

