import Container from 'react-bootstrap/Container'
import NavegationCustomBar from './components/custom/NavBar'
import { Outlet } from 'react-router-dom'
import FooterBarCustom from './components/custom/FooterBar'

function App() {
    return (
        <Container className='my-2'>
            <NavegationCustomBar />
                <Outlet />
            <FooterBarCustom />
        </Container>
    )
}

export default App