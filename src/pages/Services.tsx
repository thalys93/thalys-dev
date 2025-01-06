import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { WindowSizeContext } from '@/utils/context/Responsible.context';
import { Globe, Phone, User, Wrench } from 'lucide-react';
import React from 'react'
import Container from 'react-bootstrap/Container'
import { Link } from 'react-router-dom';

function Services() {
  const windowSize = React.useContext(WindowSizeContext);
  const cardOptions = [
    {
      title: "Desenvolvimento de Aplicativos",
      description: "Desenvolvimento de Soluções Hibridas, para Android e IOS",
      icon: <Phone />
    },
    {
      title: "Desenvolvimento de Landing Pages",
      description: "Desenvolvimento de Landing Pages para divulgação da Marca e seus produtos",
      icon: <Globe />
    },
    {
      title: "Desenvolvimento de Dashboards",
      description: "Desenvolvimento de Dashboards Administrativos, para Gerenciar Informações e Dados",
      icon: <Wrench />
    },
    {
      title: "Desenvolvimento de Portifólios",
      description: "Desenvolvimento de Portifólios para divulgação de produtos e serviços",
      icon: <User />
    }
  ]
  return (
    <Container className='flex flex-col justify-center items-center bg-stone-300 rounded shadow-sm bg-opacity-30'>
      <section className={`flex ${windowSize < 768 ? 'flex-col my-[4rem]' : 'flex-col my-[7rem]'} justify-center items-center gap-2 select-none`}>
        <h3 className='font-dmSans text-stone-700'>Serviços Prestados a clientes</h3>
        <span className='font-dmSans text-stone-400 text-center'>
          Nesta seção você confere quais serviços são oferecidos aos nossos clientes.
        </span>

        <article className={windowSize < 768 ? 'flex flex-col gap-3' : 'grid grid-cols-4 gap-4'}>
          {cardOptions.map((card, index) => (
            <Card key={index} className='w-[15rem] h-[14rem] hover:scale-95 transition-al'>
              <CardHeader>
                {React.cloneElement(card.icon, { size: 25, strokeWidth: 1.5 })}
              </CardHeader>
              <CardContent className='flex flex-col gap-2'>
                <CardTitle className='text-stone-600 font-dmSans '>{card.title}</CardTitle>
                <CardDescription className='text-stone-500 font-dmSans'>{card.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </article>

        <span className='font-dmSans text-stone-400 text-center mt-2'>
          Para mais informações e orçamentos <Link to={'/prices'} className='text-stone-500 underline'>clique aqui</Link>
        </span>
      </section>
    </Container>
  )
}

export default Services