'use client'

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";
import { useState } from "react";

import contact from "@/assets/images/contact.png";


const UserValidation = z.object({
    name: z.string().min(3).max(50),
    email: z.string().email(),
    message: z.string().min(10).max(500),
});

interface Props {
    user: {
        name: string;
        email: string;
        message: string;
    };
}

const Contact = () => {
    const form = useForm({
        resolver: zodResolver(UserValidation),
        mode: "onBlur",
    });

    const onSubmit = () => (data: z.infer<typeof UserValidation>) => {
        console.log(data);
    }

    return (


        <div className="my-20">
            <div className="my-12">
 
            <h1 className="text-5xl text-center font-serif font-bold">
                Contact <span className="text-primary">Us</span>
            </h1>

            <h1 className="text-base text-center font-sans font-thin mt-4">
                We would love to hear from you
            </h1>

            </div>
        
        <div className="grid grid-cols-2 mb-12">


            <div className="ml-36">



                <Form {...form} >
                    <form onSubmit={form.handleSubmit(onSubmit)}>
                        <FormField control={form.control} name="name" render={({ field }) => (
                            <FormItem className='flex flex-col gap-1 w-full mt-4'>
                                <FormLabel className='text-light-1 font-sans font-sm'>
                                    Name
                                </FormLabel >
                                <FormControl className='flex-1 text-base-semibold text-secondary'>
                                    <Input type='text' className='border-primary account-form_input no focus' {...field} />
                                </FormControl>
                            </FormItem>)}
                        />
                        <FormField control={form.control} name="email" render={({ field }) => (
                            <FormItem className='flex flex-col gap-1 w-full mt-4'>
                                <FormLabel className='text-light-1 font-sans font-sm'>
                                    Email
                                </FormLabel >
                                <FormControl className='flex-1 text-base-semibold text-secondary'>
                                    <Input type='email' className='border-primary account-form_input no focus' {...field} />
                                </FormControl>
                            </FormItem>)}
                        />

                        <FormField
                            control={form.control}
                            name="message"
                            render={({ field }) => (
                                <FormItem className='flex flex-col gap-1 mt-4 w-full'>
                                    <FormLabel className='text-light-1 font-sans font-sm'>
                                        Message
                                    </FormLabel>
                                    <FormControl className='flex-1 text-base-semibold text-secondary'>
                                        <Textarea rows={10} className='border-primary account-form_input no focus' {...field} />
                                    </FormControl>
                                </FormItem>
                            )}
                        />

                    <div className="flex">
                    <Button type="submit" className='bg-primary mt-4 flex-1'>Submit</Button>
                    </div>
                        
                    </form>
                </Form>
            </div>

            <div className="ml-28">
                <Image src={contact} alt="contact" className="rounded-lg shadow-custom" height={470} width={470} />
            </div>
        </div>
        </div>
    )

}

export default Contact;