import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { Button } from '../components/Button'

storiesOf('Button', module)
    .add('all', () => (
        <div>
            <p>
                <Button size='large' type='default'>A button</Button>
                <Button size='large' type='primary'>A primary button</Button>
                <Button size='large' type='success'>A success button</Button>
                <Button size='large' type='info'>A info button</Button>
                <Button size='large' type='warning'>A warning button</Button>
                <Button size='large' type='danger'>A danger button</Button>
                <Button size='large' type='link'>A link button</Button>
            </p>
            <p>
                <Button type='default'>A button</Button>
                <Button type='primary'>A primary button</Button>
                <Button type='success'>A success button</Button>
                <Button type='info'>A info button</Button>
                <Button type='warning'>A warning button</Button>
                <Button type='danger'>A danger button</Button>
                <Button type='link'>A link button</Button>
            </p>
            <p>
                <Button size='small' type='default'>A button</Button>
                <Button size='small' type='primary'>A primary button</Button>
                <Button size='small' type='success'>A success button</Button>
                <Button size='small' type='info'>A info button</Button>
                <Button size='small' type='warning'>A warning button</Button>
                <Button size='small' type='danger'>A danger button</Button>
                <Button size='small' type='link'>A link button</Button>
            </p>
            <p>
                <Button size='extra-small' type='default'>A button</Button>
                <Button size='extra-small' type='primary'>A primary button</Button>
                <Button size='extra-small' type='success'>A success button</Button>
                <Button size='extra-small' type='info'>A info button</Button>
                <Button size='extra-small' type='warning'>A warning button</Button>
                <Button size='extra-small' type='danger'>A danger button</Button>
                <Button size='extra-small' type='link'>A link button</Button>
            </p>
        </div>
    ))
