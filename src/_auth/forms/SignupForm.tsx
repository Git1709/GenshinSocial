import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";

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
import Loader from "@/components/shared/Loader";
import { Link } from "react-router-dom";

import { use } from "react";
import { useCreateUserAccount, useSignInAccount } from "@/lib/react-query/queriesAndMutations";

const SignupForm = () => {
  //The website has the old one , since i a m directly using import { toast } from "sonner";
  // no need to define const {toast} = useToast
  //queries
  const { mutateAsync: createUserAccount, isLoading: isCreatingAccount } =
  useCreateUserAccount();
const {mutateAsync : sighInAccount,isLoading:isSigningIn}=useSignInAccount();

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
  async function onSubmit(values: z.infer<typeof SignupValidadtion>) {
    const newUser = await createUserAccount(values);

    if (!newUser) {
      //once again the site has old data of toast not the latest one in soner
      //so replace the old::return toast({
      //  title: "Scheduled: Catch up",
      //  description: "Friday, February 10, 2023 at 5:57 PM",
      //});    with

      return toast("Scheduled: Sign up Failed. Please try again.", {
        /*description: "Friday, February 10, 2023 at 5:57 PM"*/
      })
     
    }
    const session = await sighInAccount ({
      email: values.email, password: values.password,
    })
    if (!session) {
      return toast("Sign-In Failed")
      
    }
  }

  return (
    <Form {...form}>
      <div className="sm:w-42 q0 flex-center flex-col  ">
        <img src="/assets/icons/react.svg " alt="logo" />
        <h2 className="h3-bold md:h-2-bold pt-5 sm:pt-12 ">
          Create a new Account
        </h2>
        <p className="text-light-3 small-medium md:base-regular mt-2">
          To use snapgram, please enter your deatils
        </p>

        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col gap-5 w-full mt-4"
        >
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input type="text" className="shad-input" {...field} />
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
                  <Input type="text" className="shad-input" {...field} />
                </FormControl>
                <FormDescription></FormDescription>
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
                  <Input type="email" className="shad-input" {...field} />
                </FormControl>
                <FormDescription></FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />{" "}
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input type="password" className="shad-input" {...field} />
                </FormControl>
                <FormDescription></FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="shad-button_primary ">
            {isCreatingUser ? (
              <div className=" flex-center gap-2 ">
                <Loader />
                Loading....
              </div>
            ) : (
              "Signup"
            )}
          </Button>
          <p className=" text-small-regular  text-light-2 text-center mt-2 ">
            Alredy have an Account?{" "}
            <Link
              to="/sign-in"
              className=" text-primary-500 text-small-semi-bold "
            >
              Log in
            </Link>
          </p>
        </form>
      </div>
    </Form>
  );
};
//shadcn/ui
export default SignupForm;
