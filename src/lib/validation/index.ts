import * as  z  from "zod";

export const SignupValidadtion = z.object({
    name:z.string().min(2,{message:'too short'}),
    username: z.string().min(2,{message:'too short'}).max(50),
    email: z.string().email(),
    password: z.string().min(8,{message:'too short'})
  });
  