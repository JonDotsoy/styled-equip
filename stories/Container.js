import React from 'react'
import { storiesOf } from '@storybook/react'
import { Container } from '../components/Container'
import styled from 'styled-components'

const ContentContainers = styled.div`
    padding: 20px;

    > ${Container} {
        margin-bottom: 40px;
    }
`


storiesOf('Container', module)
    .add('Container', () => (
        <div>
            <ContentContainers>

                <Container>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil provident sint, qui incidunt! Repudiandae neque, consequatur natus cum, vel veniam ut aspernatur magni vitae dolore minima nobis saepe expedita unde!
                </Container>
                
                <Container>
                    <Container shadowStyle="2" type="float">
                        Eligendi, nam fugit voluptatibus, voluptates quia illum, velit quasi ea non.
                    </Container>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur perferendis assumenda quae sed quibusdam cum, ut culpa vero tempore alias aliquam, eos id illum neque vel ipsum sit. Et, ab.
                    </p>
                    <p>Veniam, error molestias. Architecto expedita, laudantium quibusdam rerum similique repellat omnis, odit quos alias id quia perspiciatis iste facere voluptates quasi explicabo soluta quis quo, cupiditate! Quae commodi ratione explicabo.
                    </p>
                    <p>Minus inventore modi suscipit, neque qui sit odio dolor quidem accusamus earum ipsa obcaecati provident quia, animi possimus quos totam ipsam harum necessitatibus distinctio voluptate, nulla perspiciatis! Maxime, odit, incidunt.
                    </p>
                    <p>Alias iure veniam magnam mollitia nihil ipsa voluptates quam tenetur illum totam, neque earum, laudantium, esse, reiciendis eaque sed quibusdam numquam consequatur natus? Quasi doloribus ipsa, tempora, officia neque tempore.
                    </p>
                </Container>
        
            </ContentContainers>
        </div>
    ))
