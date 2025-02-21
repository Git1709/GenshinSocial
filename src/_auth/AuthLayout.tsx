import { Outlet, Navigate } from "react-router-dom"

const AuthLayout = () => {
  const isAuthenticated=false;
  return (
   <>
   {isAuthenticated ? (
    <Navigate to="/"/>
   ):(
   <>
   <section className="flex flex-1 justify-center items-center flex-col py-10"> 
    <Outlet/>
    </section>
    <img 
    src="../../public/assets/anyone-have-a-high-quality-image-of-the-nahida-birthday-v0-8ij1k4onknzd1.webp"
    alt="logo"
    className="hidden xl:block h-screen w-1/2 object-cover bg-no-repeat "/>
    
    </>
   )}
   </>
  )
}

export default AuthLayout