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
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
                <FormField control={form.control} name="name" render={({ field }) => (
                    <FormItem className='flex flex-col gap-3 w-full'>
                        <FormLabel className='text-light-1'>
                            Name
                        </FormLabel >
                        <FormControl className='flex-1 text-base-semibold text-gray-200'>
                            <Input type='text' className='account-form_input no focus' {...field} />
                        </FormControl>
                    </FormItem>)}
                />
                <FormField control={form.control} name="email" render={({ field }) => (
                    <FormItem className='flex flex-col gap-3 w-full'>
                        <FormLabel className='text-light-1'>
                            Email
                        </FormLabel >
                        <FormControl className='flex-1 text-base-semibold text-gray-200'>
                            <Input type='email' className='account-form_input no focus' {...field} />
                        </FormControl>
                    </FormItem>)}
                />

                <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                        <FormItem className='flex flex-col gap-3 w-full'>
                            <FormLabel className='text-light-1'>
                                Message
                            </FormLabel>
                            <FormControl className='flex-1 text-base-semibold text-gray-200'>
                                <Textarea rows={10} className='account-form_input no focus' {...field} />
                            </FormControl>
                        </FormItem>
                    )}
                />

                <Button type="submit" className='bg-primary'>Submit</Button>
            </form>
        </Form>
    )

}

export default Contact;