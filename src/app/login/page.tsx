"use client";

import Image from "next/image";
import registerIm from "@/assets/images/registerIm.png";
import Link from "next/link";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const UserValidation = z.object({
  email: z.string().email(),
  password: z.string().min(10).max(500),
});

const Login = () => {
  const form = useForm({
    resolver: zodResolver(UserValidation),
  });

  return (
    <main>
      <div className="flex flex-col justify-between p-5 md:flex-row md:p-10">
        <div className="mb-5 mt-20 w-full md:mb-0 md:w-1/2">
          <Image
            src={registerIm}
            width={600}
            height={500}
            alt="Picture of doctor"
          />
        </div>

        <div className="flex w-full flex-col rounded-lg bg-pink-100 p-4 md:mx-4 md:w-1/2 md:px-12 md:py-6">
          <h1 className="mt-4 text-center font-serif text-2xl font-bold text-purple-900 md:mt-6 md:text-5xl">
            Hello Again
          </h1>
          <h2 className="mt-2 text-center font-sans text-lg font-light md:text-xl">
            Glad to See You!
          </h2>
          <div className="mt-5 flex flex-col text-xl md:mt-10 md:text-2xl">
            <Form {...form}>
              <form>
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
                  name="password"
                  render={({ field }) => (
                    <FormItem className="mt-4 flex w-full flex-col gap-1">
                      <FormLabel className="text-light-1 font-sm font-sans">
                        Password
                      </FormLabel>
                      <FormControl className="text-base-semibold flex-1 text-secondary">
                        <Input
                          type="password"
                          className="account-form_input no focus border-primary"
                          {...field}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />

                <div className="flex">
                  <Button type="submit" className="mt-4 flex-1 bg-primary">
                    Log In
                  </Button>
                </div>
              </form>
            </Form>

            <div className="mt-5 flex items-center">
              <hr className="flex-grow border-t border-black" />
              <span className="mx-2 text-xs">OR</span>
              <hr className="flex-grow border-t border-black" />
            </div>

            <button
              type="button"
              className="mt-4 flex w-full items-center justify-center rounded-lg bg-white p-3 text-xs font-semibold shadow-md md:text-sm"
            >
              <svg
                width="20"
                height="16"
                fill=""
                className=""
                viewBox="0 0 1792 1792"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M896 786h725q12 67 12 128 0 217-91 387.5t-259.5 266.5-386.5 96q-157 0-299-60.5t-245-163.5-163.5-245-60.5-299 60.5-299 163.5-245 245-163.5 299-60.5q300 0 515 201l-209 201q-123-119-306-119-129 0-238.5 65t-173.5 176.5-64 243.5 64 243.5 173.5 176.5 238.5 65q87 0 160-24t120-60 82-82 51.5-87 22.5-78h-436v-264z"></path>
              </svg>
              Sign in with Google
            </button>

            <div className="mt-7 flex items-center justify-center">
              <h1 className="mr-2 text-sm md:mr-3 md:text-base">
                Already have an account
              </h1>
              <Link href="/register">
                <Button className="" size="sm" variant="secondary">
                  click here
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Login;
