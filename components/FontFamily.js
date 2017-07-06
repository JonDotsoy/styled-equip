import {injectGlobal} from 'styled-components'

if (process.env.NODE_ENV !== 'production') {
    injectGlobal`@import url('https://fonts.googleapis.com/css?family=Titillium+Web:200,200i,300,300i,400,400i,600,600i,700,700i,900');`
} else {
    injectGlobal`@import url('https://fonts.googleapis.com/css?family=Titillium+Web');`
}

export const TitilliumWeb = `'Titillium Web', sans-serif`
export default TitilliumWeb
