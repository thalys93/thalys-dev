import { Accordion, AccordionContent, AccordionItem } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { WindowSizeContext } from '@/utils/context/Responsible.context';
import { AccordionTrigger } from '@radix-ui/react-accordion';
import { Check, ChevronDown, ChevronUp, DollarSign } from 'lucide-react';
import { motion } from 'motion/react';
import React from 'react'
import Container from 'react-bootstrap/Container'
import { Link } from 'react-router-dom';

function Prices() {
  const windowSize = React.useContext(WindowSizeContext);
  const [isOpen, setIsOpen] = React.useState<Record<number, boolean>>({});


  function handleToggle(index: number) {
    setIsOpen((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  const cardOptions = [
    {
      title: "Preço por Projeto",
      description: "Ideal para projetos com escopo fechado e entrega completa. Um valor fixo é definido com base na complexidade do projeto.",
      price: 5,
      value: "1k - 10k"
    },
    {
      title: "Preço por Hora",
      description: "Indicado para demandas específicas ou suporte contínuo. Você paga somente pelas horas trabalhadas.",
      price: 3,
      value: "25,50",
      auxTxt: "hrs"
    },
    {
      title: "Preço por Sprint",
      description: "Cobre entregas em ciclos definidos, perfeito para projetos ágeis e colaborativos.",
      price: 4,
      value: "50-100",
      auxTxt: "Sprints"
    },
    {
      title: "Pacotes de Manutenção",
      description: "Serviço contínuo para suporte, correções e atualizações periódicas. Valores mensais acessíveis.",
      price: 2,
      value: "200",
      auxTxt: "Mês"
    }
  ];

  const cardDetails = [
    {
      title: "Preço por Projeto",
      description: "Definimos um valor fixo com base no escopo detalhado do projeto. É ideal para quem deseja previsibilidade nos custos e resultados claros. Inclui planejamento, desenvolvimento e entrega final.",
    },
    {
      title: "Preço por Hora",
      description: "Você paga apenas pelas horas efetivamente trabalhadas. Antes de iniciar, estimamos o tempo necessário para a tarefa e mantemos você atualizado sobre o progresso. Ideal para ajustes ou demandas específicas.",
    },
    {
      title: "Preço por Sprint",
      description: "Cada sprint representa um ciclo de trabalho (normalmente 1 a 2 semanas), com entregas frequentes e ajustáveis ao longo do processo. Excelente para projetos ágeis e com colaboração contínua.",
    },
    {
      title: "Pacotes de Manutenção",
      description: "Contrate suporte contínuo para resolver problemas, aplicar melhorias e manter seu sistema atualizado. Oferecemos pacotes mensais ou anuais, ajustados às suas necessidades.",
    },
    {
      title: "Consultoria Personalizada",
      description: "Para quem precisa de orientação estratégica ou análise técnica antes de iniciar o projeto. Realizamos reuniões detalhadas para entender suas necessidades e fornecer insights claros e um roadmap detalhado.",
    }
  ];


  return (
    <Container className='flex flex-col justify-center items-center bg-stone-300 rounded shadow-sm bg-opacity-30'>
      <section className={`flex ${windowSize < 768 ? 'flex-col my-[4rem]' : 'flex-col my-[7rem]'} justify-center items-center gap-2 select-none`}>
        <h3 className='font-dmSans text-stone-700'>Preços</h3>
        <span className='font-dmSans text-stone-400 text-center'>
          Nesta seção você confere como funciona a precificação de projetos.
        </span>

        <Separator className='my-3 h-[2px] bg-stone-300 bg-opacity-30' />

        <article className={windowSize < 768 ? 'flex flex-col gap-3' : 'grid grid-cols-4 gap-4'}>
          {cardOptions.map((card, index) => (
            <Card key={index} className='w-[17rem] transition-all flex flex-col justify-around items-start'>
              <CardHeader>
                <div className='flex flex-row items-center'>
                  {Array.from({ length: card.price }, (_, index) => (
                    <DollarSign key={index} />
                  ))}
                </div>
              </CardHeader>
              <CardContent className='flex flex-col gap-2'>
                <CardTitle className='text-stone-600 font-dmSans '>{card.title}</CardTitle>
                <CardDescription className='text-stone-400 font-dmSans'>{card.description}</CardDescription>

                <Accordion type='multiple'>
                  <AccordionItem value={`item-${index}`}>
                    <AccordionTrigger onClick={() => handleToggle(index)} className='text-stone-600 font-dmSans my-2 flex flex-row items-center justify-between w-full'>
                      Orçamento
                      {isOpen[index] ? <ChevronUp /> : <ChevronDown />}
                    </AccordionTrigger>
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: isOpen[index] ? 1 : 0 }}>
                      <AccordionContent className='absolute bg-slate-50 w-[14rem] p-2 rounded shadow-lg transition-all'>
                        <p className='text-stone-500 font-dmSans'>{cardDetails[index].description}</p>
                      </AccordionContent>
                    </motion.div>
                  </AccordionItem>
                </Accordion>
              </CardContent>

              <CardFooter className='flex flex-row justify-end items-end gap-2'>
                <div className='flex flex-row '>
                  <span className='text-stone-600 font-dmSans flex flex-row items-center'><DollarSign size={15} /></span>
                  <span className='text-stone-600 font-dmSans text-lg'>{card.value}</span>
                </div>
                {card.auxTxt && <span className='text-stone-400 font-dmSans'>{card.auxTxt}</span>}
              </CardFooter>
            </Card>
          ))}
        </article>

        <Link to="/budget">
          <Button className='bg-orange-500 mt-3 transition-all'> <Check /> Faça agora o seu orçamento </Button>
        </Link>
      </section>
    </Container>
  )
}

export default Prices