"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";
import emailjs from "emailjs-com";

import contact from "@/assets/images/contact.png";
import { useRef } from "react";

const UserValidation = z.object({
  name: z.string().min(3).max(50),
  email: z.string().email(),
  message: z.string().min(10).max(500),
});

const Contact = () => {
  const formRef = useRef(null);

  const form = useForm({
    resolver: zodResolver(UserValidation),
  });

  const onSubmit = async (formRef: any) => {
    try {
      await emailjs.send(
        `${process.env.NEXT_PUBLIC_EMAILJS_USER_ID}`,
        `${process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID}`,
        formRef,
        `${process.env.NEXT_PUBLIC_EMAILJS_USER_ID}`,
      );
      alert("Your form data has been sent successfully.");
    } catch (error) {
      alert(
        "There was an error sending your form data. Please try again later.",
      );
    }
  };

  return (
    <section className="my-20">
      <div className="my-12">
        <h1 className="text-center font-serif text-3xl font-bold md:text-5xl">
          Contact <span className="text-primary">Us</span>
        </h1>
        <h1 className="mt-4 text-center font-sans text-base font-light">
          We would love to hear from you
        </h1>
      </div>

      <div className="mb-12 md:grid md:grid-cols-2">
        <div className="m-12 md:m-0 md:ml-36 ">
          <Form {...form}>
            <form ref={formRef} onSubmit={form.handleSubmit(onSubmit)}>
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem className="mt-4 flex w-full flex-col gap-1">
                    <FormLabel className="text-light-1 font-sm font-sans">
                      Name
                    </FormLabel>
                    <FormControl className="text-base-semibold flex-1 text-secondary">
                      <Input
                        type="text"
                        className="account-form_input no focus border-primary"
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="mt-4 flex w-full flex-col gap-1">
                    <FormLabel className="text-light-1 font-sm font-sans">
                      Email
                    </FormLabel>
                    <FormControl className="text-base-semibold flex-1 text-secondary">
                      <Input
                        type="email"
                        className="account-form_input no focus border-primary"
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem className="mt-4 flex w-full flex-col gap-1">
                    <FormLabel className="text-light-1 font-sm font-sans">
                      Message
                    </FormLabel>
                    <FormControl className="text-base-semibold flex-1 text-secondary">
                      <Textarea
                        rows={10}
                        className="account-form_input no focus border-primary"
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />

              <div className="flex">
                <Button type="submit" className="mt-4 flex-1 bg-primary">
                  Submit
                </Button>
              </div>
            </form>
          </Form>
        </div>

        <div className="m-12 md:m-0 md:ml-28">
          <Image
            src={contact}
            alt="contact"
            className="rounded-lg shadow-custom"
            height={470}
            width={470}
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;
