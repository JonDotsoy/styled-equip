import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { Input } from '../components/Input'
import styled from 'styled-components'
import MdFace from 'react-icons/lib/md/face'
import MdToday from 'react-icons/lib/md/today'
import loremIpsum from 'lorem-ipsum'
import {Demo} from './util/Demo'

const Container = styled.div`
    & > * {
        margin-bottom: 20px;
    }
`

const PrintDemo = styled.code`
    display: block;
    background-color: #eaeaea;
    margin-bottom: 20px;
    padding: 20px;
    font-family: monospace;
    font-size: 1.2em;
`

storiesOf('Input', module)
    .add('All', () => (
        <Container>
            <h1>Inputs</h1>
            <Demo>
                <Input id="ex0"/>
            </Demo>
            <Demo>
                <Input id="ex1" label="Input With Label"/>
            </Demo>
            <Demo>
                <Input id="ex2" value="Lorem ipsum dolor sit amet laboriosam!"/>
            </Demo>
            <Demo>
                <Input id="ex3" label="Hello Label" value="Lorem ipsum dolor sit amet laboriosam!"/>
            </Demo>
            <Demo>
                <Input id="ex4" icon={<MdFace />} label="Hello Label" value="Soluta distinctio ad qui rem, sit eius saepe quae."/>
            </Demo>
            <Demo>
                <Input id="ex5" label="Type date" type="date"/>
            </Demo>
            <Demo>
                <Input id="ex6" label="Type time" type="time"/>
            </Demo>
            
            <Demo>
                <Input id="ex7" label="Type text" type="text"/>
            </Demo>
            
            <Demo>
                <Input id="ex8" label="Type color" type="color"/>
            </Demo>
            
            <Demo>
                <Input id="ex9" label="Type button" type="button" value="clic here!!"/>
            </Demo>
            
            <Demo>
                <Input id="ex10" label="Type checkbox" type="checkbox"/>
            </Demo>
            
            <Demo>
                <Input id="ex11" label="Type datetime-local" type="datetime-local"/>
            </Demo>
            
            <Demo>
                <Input id="ex12" label="Type email" type="email"/>
            </Demo>
            
            <Demo>
                <Input id="ex13" label="Type file" type="file"/>
            </Demo>
            
            <Demo>
                <Input id="ex14" label="Type image" type="image"/>
            </Demo>
            
            <Demo>
                <Input id="ex15" label="Type month" type="month"/>
            </Demo>
            
            <Demo>
                <Input id="ex16" label="Type number" type="number"/>
            </Demo>
            
            <Demo>
                <Input id="ex18" label="Type password" type="password"/>
            </Demo>
            
            <Demo>
                <Input id="ex19" label="Type radio" type="radio"/>
            </Demo>
            
            <Demo>
                <Input id="ex20" label="Type range" type="range"/>
            </Demo>
        </Container>
    ))
