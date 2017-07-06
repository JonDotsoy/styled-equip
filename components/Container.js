import * as c from '../libs/colors'
import toLower from 'lodash/toLower'
import styled, {css} from 'styled-components'
import * as shadow from '../libs/shadow'

const ShadowStyle = ({shadowStyle}) => {
    switch (shadowStyle) {
        case '1':
        case 1: return shadow.shadow1;
        case '2':
        case 2: return shadow.shadow2;
        case '3':
        case 3: return shadow.shadow3;
        case '4':
        case 4: return shadow.shadow4;
        case '5':
        case 5: return shadow.shadow5;
    }
}

const TypeStyle = ({type}) => {
    switch (type) {
        case 'float': return css`
            position: absolute;
            left: 10px;
            top: 10px;
        `
    }
}

export const Container = styled.div.attrs({
    shadowStyle: ({shadowStyle}) => toLower(shadowStyle) || false,
    type: ({type}) => toLower(type) || null
})`
    background-color: ${c.WHITE};
    position: relative;
    border: solid 1px ${c.BLUE};
    padding: 20px;
    > & {
        padding: 10px;
    }
    ${ShadowStyle};
    ${TypeStyle};
`
