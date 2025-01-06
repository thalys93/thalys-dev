import { WindowSizeContext } from '@/utils/context/Responsible.context'
import React from 'react'
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import { Link } from 'react-router-dom'

function FooterBarCustom() {
    const windowSize = React.useContext(WindowSizeContext)

    const defaultDescriptionClass = 'text-stone-400 font-dmSans select-none'
    const defaultDivDescriptionClass = 'flex flex-col items-start gap-1'

    const footerOptions = [
        {
            title: "Thalys Dev",
            description: (
                <div className={defaultDivDescriptionClass}>
                    <span className={defaultDescriptionClass}> &copy; {new Date().getFullYear()} Thalys Dev</span>
                    <span className={defaultDescriptionClass}> Todos os Direitos Reservados</span>
                </div>
            )
        },
        {
            title: "Sobre Nós",
            description: (
                <div className={defaultDivDescriptionClass}>
                    <ul className='flex flex-col justify-start items-start select-none'>
                        <a href="https://portifolio-luis-thalys.web.app/home" target='_blank' rel='noreferrer' className='hover:text-orange-500 transition-all no-underline text-stone-400'>• Portifólio</a>
                        <a href="https://portifolio-luis-thalys.web.app/contact" target='_blank' rel='noreferrer'className='hover:text-orange-500 transition-all no-underline text-stone-400'>• Contato</a>
                    </ul>
                </div>
            )
        },
        {
            title: "Links Úteis",
            description: (
                <div className={defaultDivDescriptionClass}>
                    <ul className='flex flex-col justify-start items-start select-none'>
                        <Link to="/" className='hover:text-orange-500 transition-all no-underline text-stone-400'>• FAQ</Link>
                        <Link to="/" className='hover:text-orange-500 transition-all no-underline text-stone-400'>• Políticas de Privacidade</Link>
                        <Link to="/" className='hover:text-orange-500 transition-all no-underline text-stone-400'>• Termos de Uso</Link>
                    </ul>
                </div>
            )
        },
        {
            title: "Redes Sociais",
            description: (
                <div className={defaultDivDescriptionClass}>
                    <ul className='flex flex-col justify-start items-start select-none'>
                        <a href="https://www.instagram.com/luiss_xavierr/" target='_blank' rel='noreferrer' className='hover:text-orange-500 transition-all no-underline text-stone-400'>• Instagram</a>
                        <a href="https://www.linkedin.com/in/thalys-dev202/" target='_blank' rel='noreferrer' className='hover:text-orange-500 transition-all no-underline text-stone-400'>• Linkedin</a>
                        <a href="https://br.fiverr.com/s/pdAxvll" target='_blank' rel='noreferrer' className='hover:text-orange-500 transition-all no-underline text-stone-400'>• Fiverr</a>
                        <a href="https://github.com/thalys93" target='_blank' rel='noreferrer' className='hover:text-orange-500 transition-all no-underline text-stone-400'>• Github</a>
                        <a href="https://api.whatsapp.com/send?phone=51991485593&text=Olá!" target='_blank' rel='noreferrer' className='hover:text-orange-500 transition-all no-underline text-stone-400'>• Whatsapp</a>
                    </ul>
                </div>
            )
        }
    ]

    return windowSize < 768 ? (
        <Navbar sticky='bottom' className='my-2 flex flex-row items-center justify-center bg-stone-50 '>            
            <span className={"text-stone-400 font-dmSans select-none ml-[2rem]"}> {new Date().getFullYear()} &copy; Todos os Direitos</span>
                <Navbar.Brand>
                    <Link to="/" className='text-orange-600 hover:text-orange-200 transition-all no-underline font-dmSans pl-[3rem]'>
                        <span>
                            Thalys Dev
                        </span>
                    </Link>
                </Navbar.Brand>            
        </Navbar>
    ) : (
        <Container fluid>
            <section className='flex flex-row items-start my-[5rem] gap-[10rem] justify-center'>
                {footerOptions.map((opt, i) => (
                    <article key={i}>
                        <h4 className='text-orange-600 font-dmSans select-none'>{opt.title}</h4>
                        {opt.description}
                    </article>
                ))}
            </section>
        </Container>
    )
}

export default FooterBarCustom