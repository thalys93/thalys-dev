import { navBarRoutes } from '@/utils/navbar.'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import React from 'react'
import { WindowSizeContext } from '@/utils/context/Responsible.context'
import { Menu } from 'lucide-react'
import { Button } from '../ui/button'
import { Link } from 'react-router-dom'

function NavegationCustomBar() {
    const windowSize = React.useContext(WindowSizeContext);
    const [isExpanded, setIsExpanded] = React.useState(false);

    return (
        <Container>
            <Navbar expand="lg" expanded={isExpanded} fixed={windowSize < 768 ? 'top' : undefined}>
                <div className={windowSize < 768 ? 'flex flex-col justify-end items-end w-full my-1 mx-4' : 'flex flex-row justify-evenly items-center w-full'}>
                    {windowSize < 768 && (
                        <Button onClick={() => setIsExpanded(!isExpanded)} variant="ghost" size="icon" className='hover:text-white transition-all hover:bg-orange-500'>
                            <Menu />
                        </Button>
                    )}
                    <Navbar.Collapse id="navbar-nav">
                        <Nav className={windowSize < 768 ? 'gap-2 bg-stone-300 mt-1 p-3 rounded-lg shadow-md z-50 bg-opacity-90' : 'gap-3'}>
                            {navBarRoutes.map((route, index) => (
                                <Link onClick={() => setIsExpanded(false)} key={index} to={route.route} className='group hover:text-orange-500 transition-all no-underline text-stone-800'>
                                    <div className={'flex flex-row items-center gap-2 p-1'}>
                                        {React.cloneElement(route.icon)}
                                        {route.name}
                                    </div>
                                </Link>
                            ))}
                        </Nav>
                    </Navbar.Collapse>
                    {windowSize > 768 && (
                        <Navbar.Brand className={windowSize < 768 ? 'absolute right-0 top-2' : ''}>
                            <Link to="/" className='hover:text-orange-500 transition-all no-underline text-stone-800'>
                                <span>
                                    Thalys Dev
                                </span>
                            </Link>
                        </Navbar.Brand>
                    )}
                </div>
            </Navbar>
        </Container>
    )
}

export default NavegationCustomBar