import { CgProfile } from "react-icons/cg";
const Quote = () => {
  return (
    <>
    <div className='bg-slate-200 h-screen flex flex-col items-center  justify-center gap-4 px-4 text-center md:px-6 lg:gap-10 '>
    <p className="font-bold">“The customer service I received was exceptional. The support team went above and beyond to address my
    
    concerns.”</p>
    <p
    
     className="text-sm text-gray-500 dark:text-gray-400 flex gap-2"> 
     <CgProfile/> 
     <p>CEO, Acme Inc</p>

     
    </p>

    </div>
    </>
  )
}

export default Quote