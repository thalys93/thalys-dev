import { WindowSizeContext } from '@/utils/context/Responsible.context';
import Container from 'react-bootstrap/Container'
import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Separator } from '@/components/ui/separator';
import { CheckCircle, DollarSign, Mail, User } from 'lucide-react';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import * as Yup from "yup"
import { Formik } from 'formik';
import { budgetForm } from '@/utils/form';
import { AlertDialog, AlertDialogAction, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from '@/components/ui/alert-dialog';

function Budget() {
  const windowSize = React.useContext(WindowSizeContext);
  const [success, setSuccess] = React.useState(false);  
  const myPhone = "5551991485593";

  const defaultBudgetValues: budgetForm = {
    name: "",
    email: "",
    budget: "",
    description: "",
  }

  const customBudgetValues: budgetForm = {
    name: "",
    email: "",
    budget: "",
    description: "",
    type: "",
    prefabrication: "",
  }

  const defaultValidationSchema = Yup.object().shape({
    name: Yup.string().required("Obrigatorio").min(3, "Obrigatorio"),
    email: Yup.string().required("Obrigatorio").email("Obrigatorio"),
    budget: Yup.string().required("Obrigatorio").min(3, "Obrigatorio"),
    description: Yup.string().required("Obrigatorio").min(3, "Obrigatorio"),
  })

  const customValidationSchema = Yup.object().shape({
    name: Yup.string().required("Obrigatorio").min(3, "Obrigatorio"),
    email: Yup.string().required("Obrigatorio").email("Obrigatorio"),
    budget: Yup.string().required("Obrigatorio").min(3, "Obrigatorio"),
    description: Yup.string().required("Obrigatorio").min(3, "Obrigatorio"),    
  })

  const services = [
    { value: "Aplicativos", key: 0 },
    { value: "Landing Page", key: 1 },
    { value: "Dashboards", key: 2 },
    { value: "Portifólios", key: 3 },
  ]
  const prefabrications = [
    { value: "Por Projeto", key: 0 },
    { value: "Por Hora", key: 1 },
    { value: "Por Sprint", key: 2 },
    { value: "Por Manutenção", key: 3 },
  ]

  function handleSubmitForm(values: budgetForm, type: string) {
    switch (type) {
      case "custom":
        const customMessage =
          `Olá!, Me Chamo ${values.name}, Meu email é: ${values.email}` +
          `Tenho interesse em um ${values.type}, de Precificação ${values.prefabrication}` +
          `Meu Orçamento é de ${values.budget} R$, Descrição do Projeto ${values.description}`

        window.open(`https://wa.me/${myPhone}?text=${encodeURIComponent(customMessage)}`, "_blank")
        setSuccess(true)
        break;
      case "default":
        const defaultMessage =
          `Olá!, Me Chamo ${values.name}, Meu email é : ${values.email}` +
          `\n ${values.description}, meu Orçamento é de ${values.budget} R$`

        window.open(`https://wa.me/${myPhone}?text=${encodeURIComponent(defaultMessage)}`, "_blank")
        setSuccess(true)
        break;
    }
  }

  return (
    <Container>

      <AlertDialog open={success} onOpenChange={setSuccess}>
        <AlertDialogContent className='select-none'>
          <AlertDialogHeader>
            <AlertDialogTitle>
              <div className='flex flex-col gap-2 items-center justify-center'>
                <CheckCircle size={33} color='green' />
                <span className='font-dmSans text-stone-600'>
                  Formulário Enviado com Sucesso!
                </span>
              </div>
            </AlertDialogTitle>

            <AlertDialogDescription className='flex flex-col items-center gap-1'>
              <span className='font-dmSans text-stone-600'>
                Entraremos em contato com vocé em breve
              </span>

              <span className='font-dmSans text-stone-600'>
                Obrigado pelo contato!
              </span>
            </AlertDialogDescription>
          </AlertDialogHeader>

          <AlertDialogFooter>
            <AlertDialogAction className='bg-orange-500' onClick={() => setSuccess(false)}>Fechar</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      <section className={`flex ${windowSize < 768 ? 'flex-col my-[4rem]' : 'flex-col my-[2rem]'} justify-center items-center gap-2 select-none`}>
        <Tabs defaultValue='budget'>
          <TabsList>
            <TabsTrigger value="budget">Orçamento Padrão</TabsTrigger>
            <TabsTrigger value="customBuget">Orçamento Personalizado</TabsTrigger>
          </TabsList>

          <Formik initialValues={defaultBudgetValues} validationSchema={defaultValidationSchema} onSubmit={(values) => handleSubmitForm(values, "default")}>
            {({ values, handleChange, handleBlur, handleSubmit, resetForm }) => (
              <TabsContent value="budget" className='bg-stone-200 p-3 w-[22rem] bg-opacity-30 rounded-lg shadow-sm'>
                <article>
                  <h3 className='font-dmSans text-stone-700'>Padrão</h3>
                  <Separator className='my-3 h-[2px] bg-stone-300 bg-opacity-30' />
                  <span className='text-sm font-dmSans text-stone-500'>No Modelo de Orçamento Padrão, você informa a descrição do projeto e o seu orcamento </span>
                </article>

                <article className='flex flex-col gap-3 my-3'>
                  <div className='flex flex-row items-center gap-3 border-input rounded-md border bg-transparent px-3 py-1 '>
                    <User className='text-stone-400' />
                    <input
                      value={values.name}
                      onChange={handleChange("name")}
                      onBlur={handleBlur("name")}
                      placeholder='Seu Nome'
                      className='font-dmSans border-none ring-0 w-full outline-none placeholder:text-stone-400 placeholder:font-dmSans bg-transparent' />
                  </div>

                  <div className='flex flex-row items-center gap-3 border-input rounded-md border bg-transparent px-3 py-1 '>
                    <Mail className='text-stone-400' />
                    <input
                      value={values.email}
                      onChange={handleChange("email")}
                      onBlur={handleBlur("email")}
                      placeholder='Email'
                      className='font-dmSans border-none ring-0 w-full outline-none placeholder:text-stone-400 placeholder:font-dmSans bg-transparent' />
                  </div>

                  <div className='flex flex-row items-center gap-3 border-input rounded-md border bg-transparent px-3 py-1 '>
                    <DollarSign className='text-stone-400' />
                    <input
                      value={values.budget}
                      onChange={handleChange("budget")}
                      onBlur={handleBlur("budget")}
                      placeholder='Orçamento'
                      type='number'
                      className='font-dmSans border-none ring-0 w-full outline-none placeholder:text-stone-400 placeholder:font-dmSans bg-transparent' />
                  </div>

                  <div>
                    <Textarea
                      value={values.description}
                      onChange={handleChange("description")}
                      onBlur={handleBlur("description")}
                      placeholder='Descricão do Projeto'
                      className='font-dmSans border-none ring-0 w-full outline-none placeholder:text-stone-400 placeholder:font-dmSans bg-transparent' />
                  </div>

                  <div className='flex flex-row gap-3 justify-center items-center my-3'>
                    <Button
                      variant='outline'
                      onClick={() => resetForm()}
                      type='reset'
                      className='border-orange-500 border-[1px] text-orange-500 transition-all hover:border-primary'> Resetar </Button>

                    <Button
                      disabled={!values.name || !values.email || !values.budget || !values.description}
                      className='bg-orange-500'
                      onClick={() => handleSubmit()}
                      type='submit'> Enviar </Button>
                  </div>
                </article>
              </TabsContent>
            )}
          </Formik>

          <Formik initialValues={customBudgetValues} validationSchema={customValidationSchema} onSubmit={(values) => handleSubmitForm(values, "custom")}>
            {({ values, handleChange, handleBlur, handleSubmit, resetForm }) => (
              <TabsContent value="customBuget" className='bg-stone-200 p-3 w-[22rem] bg-opacity-30 rounded-lg shadow-sm'>
                <article>
                  <h3 className='font-dmSans text-stone-700'>Personalizado</h3>
                  <Separator className='my-3 h-[2px] bg-stone-300 bg-opacity-30' />
                  <span className='text-sm font-dmSans text-stone-500'>No Modelo de Orçamento Personalizado, você define o escopo e precificações do projeto, conforme sua necessidade. </span>
                </article>

                <article className='flex flex-col gap-3 my-3'>
                  <div className='flex flex-row items-center gap-3 border-input rounded-md border bg-transparent px-3 py-1 '>
                    <User className='text-stone-400' />
                    <input
                      value={values.name}
                      onChange={handleChange('name')}
                      onBlur={handleBlur('name')}
                      placeholder='Seu Nome'
                      className='font-dmSans border-none ring-0 w-full outline-none placeholder:text-stone-400 placeholder:font-dmSans bg-transparent' />
                  </div>

                  <div className='flex flex-row items-center gap-3 border-input rounded-md border bg-transparent px-3 py-1 '>
                    <Mail className='text-stone-400' />
                    <input
                      value={values.email}
                      onChange={handleChange('email')}
                      onBlur={handleBlur('email')}
                      placeholder='Email'
                      className='font-dmSans border-none ring-0 w-full outline-none placeholder:text-stone-400 placeholder:font-dmSans bg-transparent' />
                  </div>

                  <div className='flex flex-row items-center gap-3 border-input rounded-md border bg-transparent px-3 py-1 '>
                    <DollarSign className='text-stone-400' />
                    <input
                      value={values.budget}
                      onChange={handleChange('budget')}
                      onBlur={handleBlur('budget')}
                      placeholder='Orçamento'
                      type='number'
                      className='font-dmSans border-none ring-0 w-full outline-none placeholder:text-stone-400 placeholder:font-dmSans bg-transparent' />
                  </div>

                  <div>
                    <Label className='font-dmSans text-stone-500 font-normal mb-3'>Tipo de Serviço</Label>
                    <RadioGroup className='grid grid-cols-2 gap-1' onValueChange={handleChange('service')}>
                      {services.map((item, index) => (
                        <div className='flex items-center space-x-2'>
                          <RadioGroupItem key={item.value} id={item.value} value={item.value} className='ring-orange-500 border-orange-500 text-orange-500' />
                          <Label htmlFor={`item-${index}`} className='text-sm font-dmSans text-stone-500'>{item.value}</Label>
                        </div>
                      ))}
                    </RadioGroup>
                  </div>

                  <div>
                    <Label className='font-dmSans text-stone-500 font-normal mb-3'>Tipo de Precificação</Label>
                    <RadioGroup className='grid grid-cols-2 gap-1' onValueChange={handleChange('prefabrication')}>
                      {prefabrications.map((item, index) => (
                        <div className='flex items-center space-x-2'>
                          <RadioGroupItem key={item.value} id={item.value} onSelect={handleChange('prefabrication')} value={item.value} className='ring-orange-500 border-orange-500 text-orange-500' />
                          <Label htmlFor={`item-${index}`} className='text-sm font-dmSans text-stone-500'>{item.value}</Label>
                        </div>
                      ))}
                    </RadioGroup>
                  </div>

                  <div>
                    <Textarea
                      value={values.description}
                      onChange={handleChange('description')}
                      onBlur={handleBlur('description')}
                      placeholder='Descricão do Projeto'
                      className='font-dmSans border-none ring-0 w-full outline-none placeholder:text-stone-400 placeholder:font-dmSans bg-transparent' />
                  </div>

                  <div className='flex flex-row gap-3 justify-center items-center my-3'>
                    <Button
                      variant='outline'
                      type='reset'
                      onClick={() => resetForm()}
                      className='border-orange-500 border-[1px] text-orange-500 transition-all hover:border-primary'> Resetar </Button>

                    <Button
                      disabled={!values.name || !values.email || !values.budget || !values.description}
                      className='bg-orange-500' onClick={() => handleSubmit()}
                      type='submit'> Enviar </Button>
                  </div>
                </article>
              </TabsContent>
            )}
          </Formik>
        </Tabs>
      </section>
    </Container>
  )
}

export default Budget