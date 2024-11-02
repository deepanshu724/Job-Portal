import { Button } from '@/components/ui/button'
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel'
import React from 'react'
import { Link } from 'react-router-dom'
import companies from '../data/companies.json'
import Autoplay from "embla-carousel-autoplay"
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import faq from '../data/faq.json'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const LandingPage = () => {
  return (
    <div className='flex flex-col gap-10 sm:gap-20  py-10 sm:py-20'>
      <div className=' text-center'>
        <h1 className=' font-extrabold flex flex-col justify-center items-center text-4xl sm:text-6xl lg:text-8xl gradient-title tracking-tighter py-4'>Find Your Dream Job {" "} <span className='flex items-center gap-2 lg:gap-6'>and get {" "}<img src="/logo.png" className='h-14 sm:h-24 lg:h-32' alt="" /></span> </h1>
        <p className="text-gray-300 sm:mt-4 text-xs sm:text-xl">
          Explore thousands of job listings or find the perfect candidate
        </p>
      </div>
      <div className=' flex gap-6 justify-center items-center'>
        <Link to="/jobs">
        <Button  variant="blue" size="xl" >Find Jobs</Button>
        </Link >
        <Link to="/post-job">
        <Button   variant="destructive" size="xl"  >  Post Jobs</Button>
        </Link >
      </div>

      <div>
      <Carousel plugins={[
        Autoplay({
          delay: 2000,
        }),
      ]}  className="py-10 w-full">
        <CarouselContent className=" flex items-center gap-10 lg:gap-20 ">
          {
            companies.map(( item,index)=>{
             return <CarouselItem key={item.id} className="pl-2 md:pl-4 basis-1/3 lg:basis-1/6"><img  className='h-9 sm:h-14 object-contain' src={item.path} alt={item.name} /></CarouselItem>

            })
          }
       </CarouselContent>
      </Carousel>

      </div>
      <div className='w-full' >
        <img src="/banner.jpeg" alt="" />
      </div>

      <section className='grid grid-cols-1  md:grid-cols-2 gap-4 w-full'>
        <Card>
          <CardHeader>
           <CardTitle>For Job Seekers</CardTitle>
         </CardHeader>
         <CardContent>
             Search and apply for jobs,track application, and more.
         </CardContent>
      </Card>
      <Card>
          <CardHeader>
           <CardTitle>For Employers</CardTitle>
         </CardHeader>
         <CardContent>
                Post Jobs,manage applications, and find best candidates.
          </CardContent>
      </Card>
      </section>

      <div>
           <Accordion type="single" collapsible>
           
            {
              faq.map(({question,answer},index)=>{
                return <AccordionItem key={index} value={`item-${index+1}`}>
                 <AccordionTrigger>{question}</AccordionTrigger>
                <AccordionContent>
                     {answer}
                 </AccordionContent>
              </AccordionItem>
              })
            }
             
          </Accordion>
      </div>
      
    </div>
  )
}

export default LandingPage