import { zodResolver } from "@hookform/resolvers/zod";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { SignupValidadtion } from "@/lib/validation";
import { z } from "zod";

const SignupForm = () => {
  // 1. Define your form.
  const form = useForm<z.infer<typeof SignupValidadtion>>({
    resolver: zodResolver(SignupValidadtion),
    defaultValues: {
      name: "",

      username: "",
      email: "",
      password: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof SignupValidadtion>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <Form {...form}>
      <div className="sm:w-420 flex-center flex-col  ">
        <img src="../../../public/assets/react.svg" alt="logo" />
        <h2 className="h3-bold md:h-2-bold pt-5 sm:pt-12 ">
          Create a new Account
        </h2>
        <p className="text-light-3 small-medium md:base-regular mt-2">
          To use snapgram enter your deatils
        </p>

        <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-5 w-full mt-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input type="text"  className="shad-input" {...field} />
                </FormControl>
                <FormDescription>
                  This is your public display name.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
           <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input type="text"  className="shad-input" {...field} />
                </FormControl>
                <FormDescription>
                
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
           <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input type="email"  className="shad-input" {...field} />
                </FormControl>
                <FormDescription>
                
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          /> <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input type="password"  className="shad-input" {...field} />
              </FormControl>
              <FormDescription>
             
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
          <Button type="submit">Submit</Button>
        </form>
      </div>
    </Form>
  );
};
//shadcn/ui
export default SignupForm;
