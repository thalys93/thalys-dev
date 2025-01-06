import { Button } from '@/components/ui/button'
import { Carousel, type CarouselApi, CarouselContent, CarouselItem } from '@/components/ui/carousel'
import { Circle, Wallet } from 'lucide-react'
import Container from 'react-bootstrap/Container'
import { Link } from 'react-router-dom'
import Autoplay from 'embla-carousel-autoplay'
import React from 'react'
import { motion } from 'motion/react'
import { WindowSizeContext } from '@/utils/context/Responsible.context'

function Home() {
  const [api, setApi] = React.useState<CarouselApi>()
  const [current, setCurrent] = React.useState(0)
  const [_, setGalleryIndex] = React.useState(0)
  const windowSize = React.useContext(WindowSizeContext);

  const galleryImages = [
    "https://res.cloudinary.com/dh39ahmpj/image/upload/v1736011745/services-web/Learning-cuate_1_t6lurr.png",
    "https://res.cloudinary.com/dh39ahmpj/image/upload/v1736011782/services-web/Muslim_graduation-pana_ro7u6p.png",
    "https://res.cloudinary.com/dh39ahmpj/image/upload/v1736011804/services-web/Site_Stats-rafiki_uuqhsm.png",
    "https://res.cloudinary.com/dh39ahmpj/image/upload/v1736011820/services-web/Google_sitemap-amico_rmybce.png"
  ]

  const galleryTitlesAndDescriptions = [
    { title: "Transformando o seu projeto em realidade", description: "Faça seu orçamento agora mesmo" },
    { title: "Levamos sua ideia ao próximo nível", description: "Desenvolvimento sob medida para você" },
    { title: "Inovação que gera impacto", description: "Seu projeto entregue com excelência" },
    { title: "Construímos o futuro do seu negócio", description: "Peça sua proposta personalizada" }
  ]

  React.useEffect(() => {
    if (!api) {
      return
    }

    setGalleryIndex(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap())

    api.on("select", () => {
      const newIndex = api.selectedScrollSnap()
      if (newIndex >= 0 && newIndex < galleryImages.length) {
        setCurrent(newIndex)
        setGalleryIndex(newIndex)
      }
    });
  }, [api])

  return (
    <Container className={`flex flex-col justify-center items-center bg-stone-300 rounded shadow-sm bg-opacity-40`}>
      <section className={`flex ${windowSize < 768 ? 'flex-col my-[6rem]' : 'flex-row my-[7rem]'} justify-center items-center gap-3`}>
        <motion.article animate={{ opacity: 1 }} initial={{ opacity: 0 }} transition={{ duration: 1 }} className={windowSize < 768  ? 'flex flex-col justify-center items-center text-center' : ''}>
          <h2 className={`font-dmSans text-stone-700 w-[20rem]`}>{galleryTitlesAndDescriptions[current].title}</h2>
          <span className={`font-dmSans text-stone-500`}>{galleryTitlesAndDescriptions[current].description}</span>
          <div className='flex flex-row items-center gap-2 my-4'>
            <Link to="prices" className='no-underline group text-orange-600'>
              <Button className='font-inter border-orange-600 transition-all  bg-transparent text-orange-600 border-[1px] hover:border-accent-foreground hover:text-accent-foreground shadow-sm' variant="outline">
                Planos
              </Button>
            </Link>

            <Link to="projects">
              <Button className='font-inter bg-orange-600 shadow-sm transition-all'>
                <Wallet />
                Projetos
              </Button>
            </Link>
          </div>
        </motion.article>

        <article>
          <Carousel
            opts={{
              align: "center",
              loop: true
            }}
            plugins={[
              Autoplay({
                delay: 5000,
              })
            ]}
            className='w-full max-w-xs'
            setApi={setApi}>
            <CarouselContent>
              {galleryImages.map((_, index) => (
                <CarouselItem key={index}>
                  <img src={galleryImages[current]} alt={`Imagem ${current}`} className='h-[290px] object-auto' />
                </CarouselItem>
              ))}
            </CarouselContent>

            <div className='flex flex-row gap-3 items-center justify-center'>
              {Array.from({ length: galleryImages.length }).map((_, index) => (
                < Button variant='ghost' size={"icon"} onClick={() => {
                  setCurrent(index)
                  api?.scrollTo(index)
                }}>
                  <Circle
                    key={index}
                    fill={index === current ? '#ea580c' : '#44403c'}
                    className={index === current ? 'text-orange-600' : 'text-stone-600'}
                    size={20}
                  />
                </Button>
              ))}
            </div>
          </Carousel>
        </article>
      </section>
    </Container>
  )
}

export default Home