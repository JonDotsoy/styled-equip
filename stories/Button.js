import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { Button } from '../components/Button'
import styled from 'styled-components'

const D = styled.div`
    ${Button} {
        margin-left: 10px;
        margin-bottom: 10px;
    }
`

storiesOf('Button', module)
    .add('all', () => (
        <D>
            <p>
                <Button size='large' type='default'>A button</Button>
                <Button size='large' type='primary'>A primary button</Button>
                <Button size='large' type='success'>A success button</Button>
                <Button size='large' type='info'>A info button</Button>
                <Button size='large' type='warning'>A warning button</Button>
                <Button size='large' type='danger'>A danger button</Button>
                <Button size='large' type='link'>A link button</Button>

                <h1>Hover</h1>

                <Button size='large' type='default' className="hover">A button</Button>
                <Button size='large' type='primary' className="hover">A primary button</Button>
                <Button size='large' type='success' className="hover">A success button</Button>
                <Button size='large' type='info' className="hover">A info button</Button>
                <Button size='large' type='warning' className="hover">A warning button</Button>
                <Button size='large' type='danger' className="hover">A danger button</Button>
                <Button size='large' type='link' className="hover">A link button</Button>

                <h1>Focus</h1>

                <Button size='large' type='default' className="focus">A button</Button>
                <Button size='large' type='primary' className="focus">A primary button</Button>
                <Button size='large' type='success' className="focus">A success button</Button>
                <Button size='large' type='info' className="focus">A info button</Button>
                <Button size='large' type='warning' className="focus">A warning button</Button>
                <Button size='large' type='danger' className="focus">A danger button</Button>
                <Button size='large' type='link' className="focus">A link button</Button>

                <h1>Disabled</h1>

                <Button size='large' type='default' disabled>A button</Button>
                <Button size='large' type='primary' disabled>A primary button</Button>
                <Button size='large' type='success' disabled>A success button</Button>
                <Button size='large' type='info' disabled>A info button</Button>
                <Button size='large' type='warning' disabled>A warning button</Button>
                <Button size='large' type='danger' disabled>A danger button</Button>
                <Button size='large' type='link' disabled>A link button</Button>

            </p>
            <p>
                <Button type='default'>A button</Button>
                <Button type='primary'>A primary button</Button>
                <Button type='success'>A success button</Button>
                <Button type='info'>A info button</Button>
                <Button type='warning'>A warning button</Button>
                <Button type='danger'>A danger button</Button>
                <Button type='link'>A link button</Button>


                <h1>Hover</h1>

                <Button type='default' className="hover">A button</Button>
                <Button type='primary' className="hover">A primary button</Button>
                <Button type='success' className="hover">A success button</Button>
                <Button type='info' className="hover">A info button</Button>
                <Button type='warning' className="hover">A warning button</Button>
                <Button type='danger' className="hover">A danger button</Button>
                <Button type='link' className="hover">A link button</Button>

                <h1>Focus</h1>

                <Button type='default' className="focus">A button</Button>
                <Button type='primary' className="focus">A primary button</Button>
                <Button type='success' className="focus">A success button</Button>
                <Button type='info' className="focus">A info button</Button>
                <Button type='warning' className="focus">A warning button</Button>
                <Button type='danger' className="focus">A danger button</Button>
                <Button type='link' className="focus">A link button</Button>

                <h1>Disabled</h1>

                <Button type='default' disabled>A button</Button>
                <Button type='primary' disabled>A primary button</Button>
                <Button type='success' disabled>A success button</Button>
                <Button type='info' disabled>A info button</Button>
                <Button type='warning' disabled>A warning button</Button>
                <Button type='danger' disabled>A danger button</Button>
                <Button type='link' disabled>A link button</Button>
            </p>
            <p>
                <Button size='small' type='default'>A button</Button>
                <Button size='small' type='primary'>A primary button</Button>
                <Button size='small' type='success'>A success button</Button>
                <Button size='small' type='info'>A info button</Button>
                <Button size='small' type='warning'>A warning button</Button>
                <Button size='small' type='danger'>A danger button</Button>
                <Button size='small' type='link'>A link button</Button>

                <h1>Hover</h1>

                <Button size='small' type='default' className="hover">A button</Button>
                <Button size='small' type='primary' className="hover">A primary button</Button>
                <Button size='small' type='success' className="hover">A success button</Button>
                <Button size='small' type='info' className="hover">A info button</Button>
                <Button size='small' type='warning' className="hover">A warning button</Button>
                <Button size='small' type='danger' className="hover">A danger button</Button>
                <Button size='small' type='link' className="hover">A link button</Button>

                <h1>Focus</h1>

                <Button size='small' type='default' className="focus">A button</Button>
                <Button size='small' type='primary' className="focus">A primary button</Button>
                <Button size='small' type='success' className="focus">A success button</Button>
                <Button size='small' type='info' className="focus">A info button</Button>
                <Button size='small' type='warning' className="focus">A warning button</Button>
                <Button size='small' type='danger' className="focus">A danger button</Button>
                <Button size='small' type='link' className="focus">A link button</Button>

                <h1>Disabled</h1>

                <Button size='small' type='default' disabled>A button</Button>
                <Button size='small' type='primary' disabled>A primary button</Button>
                <Button size='small' type='success' disabled>A success button</Button>
                <Button size='small' type='info' disabled>A info button</Button>
                <Button size='small' type='warning' disabled>A warning button</Button>
                <Button size='small' type='danger' disabled>A danger button</Button>
                <Button size='small' type='link' disabled>A link button</Button>
            </p>
            <p>
                <Button size='extra-small' type='default'>A button</Button>
                <Button size='extra-small' type='primary'>A primary button</Button>
                <Button size='extra-small' type='success'>A success button</Button>
                <Button size='extra-small' type='info'>A info button</Button>
                <Button size='extra-small' type='warning'>A warning button</Button>
                <Button size='extra-small' type='danger'>A danger button</Button>
                <Button size='extra-small' type='link'>A link button</Button>

                <h1>Hover</h1>

                <Button size='extra-small' type='default' className="hover">A button</Button>
                <Button size='extra-small' type='primary' className="hover">A primary button</Button>
                <Button size='extra-small' type='success' className="hover">A success button</Button>
                <Button size='extra-small' type='info' className="hover">A info button</Button>
                <Button size='extra-small' type='warning' className="hover">A warning button</Button>
                <Button size='extra-small' type='danger' className="hover">A danger button</Button>
                <Button size='extra-small' type='link' className="hover">A link button</Button>

                <h1>Focus</h1>

                <Button size='extra-small' type='default' className="focus">A button</Button>
                <Button size='extra-small' type='primary' className="focus">A primary button</Button>
                <Button size='extra-small' type='success' className="focus">A success button</Button>
                <Button size='extra-small' type='info' className="focus">A info button</Button>
                <Button size='extra-small' type='warning' className="focus">A warning button</Button>
                <Button size='extra-small' type='danger' className="focus">A danger button</Button>
                <Button size='extra-small' type='link' className="focus">A link button</Button>

                <h1>Disabled</h1>

                <Button size='extra-small' type='default' disabled>A button</Button>
                <Button size='extra-small' type='primary' disabled>A primary button</Button>
                <Button size='extra-small' type='success' disabled>A success button</Button>
                <Button size='extra-small' type='info' disabled>A info button</Button>
                <Button size='extra-small' type='warning' disabled>A warning button</Button>
                <Button size='extra-small' type='danger' disabled>A danger button</Button>
                <Button size='extra-small' type='link' disabled>A link button</Button>
            </p>
        </D>
    ))
