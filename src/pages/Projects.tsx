import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { WindowSizeContext } from '@/utils/context/Responsible.context';
import { CircleHelp } from 'lucide-react';
import React from 'react'
import Container from 'react-bootstrap/Container'
import { Link } from 'react-router-dom';

function Projects() {
  const windowSize = React.useContext(WindowSizeContext);

  const projectsList = [
    {
      title: "Sistemas de Gerenciamento",
      description: "Sistemas de Gerenciamento de Clientes, Produtos e Vendas",
      image: "https://res.cloudinary.com/dh39ahmpj/image/upload/v1736190443/projects-images/gerenciamento-clientes-logo_w2lkm3_1_gjsk8u.png",
      link: "/Budget"
    },
    {
      title: "Dashboard Interativos",
      description: "Dashboards Interativos para Gerenciamento de Informações e Dados",
      image: "https://res.cloudinary.com/dh39ahmpj/image/upload/v1736190350/projects-images/dashboard-full_h8rxty_1_exxiqk.png",
      link: "/Budget"      
    },
    {
      title: "Portifólios Elegantes",
      description: "Portifólios Elegantes para Divulgação de Produtos e Serviços",
      image: "https://i.pinimg.com/736x/c2/04/b5/c204b579c711b6fd9930493551ef76da.jpg",
      link: "https://en.bazil.fr/"
    },
    {
      title: "Landing Pages Atraentes",
      description: "Landing Pages Atraentes para Divulgação da Marca e seus Produtos",
      image: "https://i.pinimg.com/736x/77/2f/9c/772f9cf4f60f80c49a61860b38c06c2d.jpg",
      link: "https://i.pinimg.com/736x/77/2f/9c/772f9cf4f60f80c49a61860b38c06c2d.jpg"
    }
  ]

  return (
    <Container className='flex flex-col justify-center items-center bg-stone-300 rounded shadow-sm bg-opacity-30'>
      <section className={`flex ${windowSize < 768 ? 'flex-col my-[4rem]' : 'flex-col my-[7rem]'} justify-center items-center gap-2 select-none`}>
        <h3 className='font-dmSans text-stone-700'>Projetos Desenvolvidos</h3>
        <span className='font-dmSans text-stone-400 text-center'>
          Aqui Você conhece alguns dos nossos projetos, que ajudaram a impulsionar o crescimento de negócios..
        </span>

        <Separator className='my-3 h-[2px] bg-stone-300 bg-opacity-30' />

        {windowSize < 768 ? (
          <article className='flex flex-col items-center gap-4'>
            {projectsList.map((pj, i) => (
              <Card className='w-[15rem] flex flex-col items-center justify-between' key={i}>
                <img src={pj.image}
                  className='w-full px-0 object-cover mb-3 rounded-t-lg' />
                <CardContent className='flex flex-col gap-3'>
                  <CardTitle>{pj.title}</CardTitle>
                  <CardDescription>
                    <p className='text-stone-500 font-dmSans'>{pj.description}</p>
                  </CardDescription>

                  <Link to={pj.link} target='_blank' className='ml-5'>
                    <Button className='bg-orange-500'>
                      Demonstração
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}

            <Card className='w-[15rem] flex flex-col items-center justify-between opacity-50'>
              <img src='https://i0.wp.com/espaferro.com.br/wp-content/uploads/2024/06/placeholder.png?ssl=1'
                className='w-full px-0 object-cover mb-3 rounded-t-lg' />
              <CardContent className='flex flex-col gap-3'>
                <CardTitle>Novas Soluções em Breve</CardTitle>
                <CardDescription>
                  <p className='text-stone-500 font-dmSans'>Fique de olho, em breve teremos novidades incríveis para adicionar ao nosso portfólio!</p>
                </CardDescription>

                <Button className='bg-orange-500' disabled>
                  <CircleHelp />
                </Button>
              </CardContent>
            </Card>
          </article>
        ) : (
          <article className='grid grid-cols-4 gap-4'>
            {projectsList.map((pj, i) => (
              <Card className='w-[15rem] flex flex-col items-center justify-between' key={i}>
                <img src={pj.image}
                  className='w-full h-[10rem] px-0 object-cover mb-3 rounded-t-lg' />
                <CardContent className='flex flex-col gap-3'>
                  <CardTitle>{pj.title}</CardTitle>
                  <CardDescription>
                    <p className='text-stone-500 font-dmSans'>{pj.description}</p>
                  </CardDescription>

                  <Link to={pj.link} target='_blank' className='ml-5'>
                    <Button className='bg-orange-500'>
                      Demonstração
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}

            <Card className='w-[15rem] flex flex-col items-center justify-between opacity-50'>
              <img src='https://i0.wp.com/espaferro.com.br/wp-content/uploads/2024/06/placeholder.png?ssl=1'
                className='w-full px-0 h-full object-cover mb-3 rounded-t-lg' />
              <CardContent className='flex flex-col gap-3'>
                <CardTitle>Novas Soluções em Breve</CardTitle>
                <CardDescription>
                  <p className='text-stone-500 font-dmSans'>Fique de olho, em breve teremos novidades incríveis para adicionar ao nosso portfólio!</p>
                </CardDescription>

                <Button className='bg-orange-500' disabled>
                  <CircleHelp />
                </Button>
              </CardContent>
            </Card>
          </article>
        )}

        <Separator className='my-3 h-[2px] bg-stone-300 bg-opacity-30' />
      </section>
    </Container>
  )
}

export default Projects