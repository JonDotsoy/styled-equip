import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { Button } from '../components/Button'
import styled from 'styled-components'
import { Demo } from './util/Demo'

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
                <h1>Buttons Large</h1>

                <Demo>
                    <Button size='large' priority='default'>A button</Button>
                </Demo>
                <Demo>
                    <Button size='large' priority='primary'>A primary button</Button>
                </Demo>
                <Demo>
                    <Button size='large' priority='success'>A success button</Button>
                </Demo>
                <Demo>
                    <Button size='large' priority='info'>A info button</Button>
                </Demo>
                <Demo>
                    <Button size='large' priority='warning'>A warning button</Button>
                </Demo>
                <Demo>
                    <Button size='large' priority='danger'>A danger button</Button>
                </Demo>
                <Demo>
                    <Button size='large' priority='link'>A link button</Button>
                </Demo>

                <h2>Hover</h2>

                <Demo>
                    <Button size='large' priority='default' className="hover">A button</Button>
                </Demo>
                <Demo>
                    <Button size='large' priority='primary' className="hover">A primary button</Button>
                </Demo>
                <Demo>
                    <Button size='large' priority='success' className="hover">A success button</Button>
                </Demo>
                <Demo>
                    <Button size='large' priority='info' className="hover">A info button</Button>
                </Demo>
                <Demo>
                    <Button size='large' priority='warning' className="hover">A warning button</Button>
                </Demo>
                <Demo>
                    <Button size='large' priority='danger' className="hover">A danger button</Button>
                </Demo>
                <Demo>
                    <Button size='large' priority='link' className="hover">A link button</Button>
                </Demo>

                <h2>Focus</h2>

                <Demo>
                    <Button size='large' priority='default' className="focus">A button</Button>
                </Demo>
                <Demo>
                    <Button size='large' priority='primary' className="focus">A primary button</Button>
                </Demo>
                <Demo>
                    <Button size='large' priority='success' className="focus">A success button</Button>
                </Demo>
                <Demo>
                    <Button size='large' priority='info' className="focus">A info button</Button>
                </Demo>
                <Demo>
                    <Button size='large' priority='warning' className="focus">A warning button</Button>
                </Demo>
                <Demo>
                    <Button size='large' priority='danger' className="focus">A danger button</Button>
                </Demo>
                <Demo>
                    <Button size='large' priority='link' className="focus">A link button</Button>
                </Demo>

                <h2>Disabled</h2>

                <Demo>
                    <Button size='large' priority='default' disabled>A button</Button>
                </Demo>
                <Demo>
                    <Button size='large' priority='primary' disabled>A primary button</Button>
                </Demo>
                <Demo>
                    <Button size='large' priority='success' disabled>A success button</Button>
                </Demo>
                <Demo>
                    <Button size='large' priority='info' disabled>A info button</Button>
                </Demo>
                <Demo>
                    <Button size='large' priority='warning' disabled>A warning button</Button>
                </Demo>
                <Demo>
                    <Button size='large' priority='danger' disabled>A danger button</Button>
                </Demo>
                <Demo>
                    <Button size='large' priority='link' disabled>A link button</Button>
                </Demo>

            </p>
            <p>
                <h1>Buttons Normal</h1>

                <Demo>
                    <Button priority='default'>A button</Button>
                </Demo>
                <Demo>
                    <Button priority='primary'>A primary button</Button>
                </Demo>
                <Demo>
                    <Button priority='success'>A success button</Button>
                </Demo>
                <Demo>
                    <Button priority='info'>A info button</Button>
                </Demo>
                <Demo>
                    <Button priority='warning'>A warning button</Button>
                </Demo>
                <Demo>
                    <Button priority='danger'>A danger button</Button>
                </Demo>
                <Demo>
                    <Button priority='link'>A link button</Button>
                </Demo>


                <h2>Hover</h2>

                <Demo>
                    <Button priority='default' className="hover">A button</Button>
                </Demo>
                <Demo>
                    <Button priority='primary' className="hover">A primary button</Button>
                </Demo>
                <Demo>
                    <Button priority='success' className="hover">A success button</Button>
                </Demo>
                <Demo>
                    <Button priority='info' className="hover">A info button</Button>
                </Demo>
                <Demo>
                    <Button priority='warning' className="hover">A warning button</Button>
                </Demo>
                <Demo>
                    <Button priority='danger' className="hover">A danger button</Button>
                </Demo>
                <Demo>
                    <Button priority='link' className="hover">A link button</Button>
                </Demo>

                <h2>Focus</h2>

                <Demo>
                    <Button priority='default' className="focus">A button</Button>
                </Demo>
                <Demo>
                    <Button priority='primary' className="focus">A primary button</Button>
                </Demo>
                <Demo>
                    <Button priority='success' className="focus">A success button</Button>
                </Demo>
                <Demo>
                    <Button priority='info' className="focus">A info button</Button>
                </Demo>
                <Demo>
                    <Button priority='warning' className="focus">A warning button</Button>
                </Demo>
                <Demo>
                    <Button priority='danger' className="focus">A danger button</Button>
                </Demo>
                <Demo>
                    <Button priority='link' className="focus">A link button</Button>
                </Demo>

                <h2>Disabled</h2>

                <Demo>
                    <Button priority='default' disabled>A button</Button>
                </Demo>
                <Demo>
                    <Button priority='primary' disabled>A primary button</Button>
                </Demo>
                <Demo>
                    <Button priority='success' disabled>A success button</Button>
                </Demo>
                <Demo>
                    <Button priority='info' disabled>A info button</Button>
                </Demo>
                <Demo>
                    <Button priority='warning' disabled>A warning button</Button>
                </Demo>
                <Demo>
                    <Button priority='danger' disabled>A danger button</Button>
                </Demo>
                <Demo>
                    <Button priority='link' disabled>A link button</Button>
                </Demo>
            </p>
            <p>
                <h1>Buttons Small</h1>

                <Demo>
                    <Button size='small' priority='default'>A button</Button>
                </Demo>
                <Demo>
                    <Button size='small' priority='primary'>A primary button</Button>
                </Demo>
                <Demo>
                    <Button size='small' priority='success'>A success button</Button>
                </Demo>
                <Demo>
                    <Button size='small' priority='info'>A info button</Button>
                </Demo>
                <Demo>
                    <Button size='small' priority='warning'>A warning button</Button>
                </Demo>
                <Demo>
                    <Button size='small' priority='danger'>A danger button</Button>
                </Demo>
                <Demo>
                    <Button size='small' priority='link'>A link button</Button>
                </Demo>

                <h2>Hover</h2>

                <Demo>
                    <Button size='small' priority='default' className="hover">A button</Button>
                </Demo>
                <Demo>
                    <Button size='small' priority='primary' className="hover">A primary button</Button>
                </Demo>
                <Demo>
                    <Button size='small' priority='success' className="hover">A success button</Button>
                </Demo>
                <Demo>
                    <Button size='small' priority='info' className="hover">A info button</Button>
                </Demo>
                <Demo>
                    <Button size='small' priority='warning' className="hover">A warning button</Button>
                </Demo>
                <Demo>
                    <Button size='small' priority='danger' className="hover">A danger button</Button>
                </Demo>
                <Demo>
                    <Button size='small' priority='link' className="hover">A link button</Button>
                </Demo>

                <h2>Focus</h2>

                <Demo>
                    <Button size='small' priority='default' className="focus">A button</Button>
                </Demo>
                <Demo>
                    <Button size='small' priority='primary' className="focus">A primary button</Button>
                </Demo>
                <Demo>
                    <Button size='small' priority='success' className="focus">A success button</Button>
                </Demo>
                <Demo>
                    <Button size='small' priority='info' className="focus">A info button</Button>
                </Demo>
                <Demo>
                    <Button size='small' priority='warning' className="focus">A warning button</Button>
                </Demo>
                <Demo>
                    <Button size='small' priority='danger' className="focus">A danger button</Button>
                </Demo>
                <Demo>
                    <Button size='small' priority='link' className="focus">A link button</Button>
                </Demo>

                <h2>Disabled</h2>

                <Demo>
                    <Button size='small' priority='default' disabled>A button</Button>
                </Demo>
                <Demo>
                    <Button size='small' priority='primary' disabled>A primary button</Button>
                </Demo>
                <Demo>
                    <Button size='small' priority='success' disabled>A success button</Button>
                </Demo>
                <Demo>
                    <Button size='small' priority='info' disabled>A info button</Button>
                </Demo>
                <Demo>
                    <Button size='small' priority='warning' disabled>A warning button</Button>
                </Demo>
                <Demo>
                    <Button size='small' priority='danger' disabled>A danger button</Button>
                </Demo>
                <Demo>
                    <Button size='small' priority='link' disabled>A link button</Button>
                </Demo>
            </p>
            <p>
                <h1>Buttons Extra Small</h1>

                <Demo>
                    <Button size='extra-small' priority='default'>A button</Button>
                </Demo>
                <Demo>
                    <Button size='extra-small' priority='primary'>A primary button</Button>
                </Demo>
                <Demo>
                    <Button size='extra-small' priority='success'>A success button</Button>
                </Demo>
                <Demo>
                    <Button size='extra-small' priority='info'>A info button</Button>
                </Demo>
                <Demo>
                    <Button size='extra-small' priority='warning'>A warning button</Button>
                </Demo>
                <Demo>
                    <Button size='extra-small' priority='danger'>A danger button</Button>
                </Demo>
                <Demo>
                    <Button size='extra-small' priority='link'>A link button</Button>
                </Demo>

                <h2>Hover</h2>

                <Demo>
                    <Button size='extra-small' priority='default' className="hover">A button</Button>
                </Demo>
                <Demo>
                    <Button size='extra-small' priority='primary' className="hover">A primary button</Button>
                </Demo>
                <Demo>
                    <Button size='extra-small' priority='success' className="hover">A success button</Button>
                </Demo>
                <Demo>
                    <Button size='extra-small' priority='info' className="hover">A info button</Button>
                </Demo>
                <Demo>
                    <Button size='extra-small' priority='warning' className="hover">A warning button</Button>
                </Demo>
                <Demo>
                    <Button size='extra-small' priority='danger' className="hover">A danger button</Button>
                </Demo>
                <Demo>
                    <Button size='extra-small' priority='link' className="hover">A link button</Button>
                </Demo>

                <h2>Focus</h2>

                <Demo>
                    <Button size='extra-small' priority='default' className="focus">A button</Button>
                </Demo>
                <Demo>
                    <Button size='extra-small' priority='primary' className="focus">A primary button</Button>
                </Demo>
                <Demo>
                    <Button size='extra-small' priority='success' className="focus">A success button</Button>
                </Demo>
                <Demo>
                    <Button size='extra-small' priority='info' className="focus">A info button</Button>
                </Demo>
                <Demo>
                    <Button size='extra-small' priority='warning' className="focus">A warning button</Button>
                </Demo>
                <Demo>
                    <Button size='extra-small' priority='danger' className="focus">A danger button</Button>
                </Demo>
                <Demo>
                    <Button size='extra-small' priority='link' className="focus">A link button</Button>
                </Demo>

                <h2>Disabled</h2>

                <Demo>
                    <Button size='extra-small' priority='default' disabled>A button</Button>
                </Demo>
                <Demo>
                    <Button size='extra-small' priority='primary' disabled>A primary button</Button>
                </Demo>
                <Demo>
                    <Button size='extra-small' priority='success' disabled>A success button</Button>
                </Demo>
                <Demo>
                    <Button size='extra-small' priority='info' disabled>A info button</Button>
                </Demo>
                <Demo>
                    <Button size='extra-small' priority='warning' disabled>A warning button</Button>
                </Demo>
                <Demo>
                    <Button size='extra-small' priority='danger' disabled>A danger button</Button>
                </Demo>
                <Demo>
                    <Button size='extra-small' priority='link' disabled>A link button</Button>
                </Demo>
            </p>
        </D>
    ))
