import Image from "next/image";


export default function Footer() {
  return (
    <div className="bg-[#043873] text-white">
   
      <div className="w-full max-w-screen-xl mx-auto py-16 flex justify-between gap-16">
        
       
        <div className="flex flex-col w-[295px] justify-start gap-6">
          <Image src="/images/Logo.png" alt="logo" width={200} height={100} />
         
          <p className="text-[18px] text-[#F7F7EE] font-normal leading-[30px] tracking-[-2%]">
            Whitepace was created for the new ways we live and work. We make a better workspace around the world.
          </p>
        </div>

       
        <div className="flex flex-col w-[295px] items-center gap-4">
          <p className="text-[18px] font-bold">Product</p>
          <p className="text-[16px] text-[#FFE492]">Overview</p>
          <p className="text-[16px]">Pricing</p>
          <p className="text-[16px]">Customer stories</p>
        </div>

      
        <div className="flex flex-col w-[295px] items-center gap-4">
          <p className="text-[18px] font-bold">Resources</p>
          <p className="text-[16px]">Overview</p>
          <p className="text-[16px]">Guides & tutorials</p>
          <p className="text-[16px]">Help center</p>
        </div>

    
        <div className="flex flex-col w-[295px] items-center gap-4">
          <p className="text-[18px] font-bold">Company</p>
          <p className="text-[16px]">About us</p>
          <p className="text-[16px]">Careers</p>
          <p className="text-[16px]">Media kit</p>
        </div>

      </div>

 
      <div className="w-full max-w-screen-xl mx-auto pt-8">
        <div className="border-t border-[#2E4E73]"></div>
      </div>

 
      <div className="w-full max-w-screen-xl mx-auto pt-3 pb-4 text-center">
        <p className="text-[16px]">©2021 Whitepace LLC.</p>
      </div>
    </div>
  );
}