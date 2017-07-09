import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { Input } from '../components/Input'
import styled from 'styled-components'
import MdFace from 'react-icons/lib/md/face'
import MdToday from 'react-icons/lib/md/today'
import loremIpsum from 'lorem-ipsum'

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
            <PrintDemo>{`<Input/>`}</PrintDemo>
            <Input/>
            <PrintDemo>{`<Input id="ex1" label="Input With Label"/>`}</PrintDemo>
            <Input id="ex1" label="Input With Label"/>
            <PrintDemo>{`<Input id="ex2" value="Lorem ipsum dolor sit amet laboriosam!"/>`}</PrintDemo>
            <Input id="ex2" value="Lorem ipsum dolor sit amet laboriosam!"/>
            <PrintDemo>{`<Input id="ex3" label="Hello Label" value="Lorem ipsum dolor sit amet laboriosam!"/>`}</PrintDemo>
            <Input id="ex3" label="Hello Label" value="Lorem ipsum dolor sit amet laboriosam!"/>
            <PrintDemo>{`<Input id="ex4" icon={<MdFace />} label="Hello Label" value="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem."/>`}</PrintDemo>
            <Input id="ex4" icon={<MdFace />} label="Hello Label" value="Soluta distinctio ad qui rem, sit eius saepe quae."/>
            <PrintDemo>{`<Input id="ex5" label="Type Date" type="date"/>`}</PrintDemo>
            <Input id="ex5" label="Type date" type="date"/>
            <PrintDemo>{`<Input id="ex6" label="Type time" type="time"/>`}</PrintDemo>
            <Input id="ex6" label="Type time" type="time"/>
            <PrintDemo>{`<Input id="ex7" label="Type text" type="text"/>`}</PrintDemo>
            <Input id="ex7" label="Type text" type="text"/>
            <PrintDemo>{`<Input id="ex8" label="Type color" type="color"/>`}</PrintDemo>
            <Input id="ex8" label="Type color" type="color"/>
            <PrintDemo>{`<Input id="ex9" label="Type button" type="button" value="clic here!!"/>`}</PrintDemo>
            <Input id="ex9" label="Type button" type="button" value="clic here!!"/>
            <PrintDemo>{`<Input id="ex10" label="Type checkbox" type="checkbox"/>`}</PrintDemo>
            <Input id="ex10" label="Type checkbox" type="checkbox"/>
            <PrintDemo>{`<Input id="ex11" label="Type datetime-local" type="datetime-local"/>`}</PrintDemo>
            <Input id="ex11" label="Type datetime-local" type="datetime-local"/>
            <PrintDemo>{`<Input id="ex12" label="Type email" type="email"/>`}</PrintDemo>
            <Input id="ex12" label="Type email" type="email"/>
            <PrintDemo>{`<Input id="ex13" label="Type file" type="file"/>`}</PrintDemo>
            <Input id="ex13" label="Type file" type="file"/>
            <PrintDemo>{`<Input id="ex14" label="Type image" type="image"/>`}</PrintDemo>
            <Input id="ex14" label="Type image" type="image"/>
            <PrintDemo>{`<Input id="ex15" label="Type month" type="month"/>`}</PrintDemo>
            <Input id="ex15" label="Type month" type="month"/>
            <PrintDemo>{`<Input id="ex16" label="Type number" type="number"/>`}</PrintDemo>
            <Input id="ex16" label="Type number" type="number"/>
            <PrintDemo>{`<Input id="ex18" label="Type password" type="password"/>`}</PrintDemo>
            <Input id="ex18" label="Type password" type="password"/>
            <PrintDemo>{`<Input id="ex19" label="Type radio" type="radio"/>`}</PrintDemo>
            <Input id="ex19" label="Type radio" type="radio"/>
            <PrintDemo>{`<Input id="ex20" label="Type range" type="range"/>`}</PrintDemo>
            <Input id="ex20" label="Type range" type="range"/>
        </Container>
    ))

