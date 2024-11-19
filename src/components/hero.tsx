import React from "react";
import Image from "next/image";
import Pic from "../../public/images/Work Together Image.png"
import icon from "../../public/images/Icon.png"
import Apple from "../../public/images/Apple.png"
import Microsoft from "../../public/images/Microsoft.png"
import Slack from "../../public/images/Slack.png"
import Google from "../../public/images/Google.png"


const Hero = () => {
	return (
		<>
			<div className='py-[140px] px-[220px] top-[92px] bg-[#043873] text-white flex items-center'>
				<div className='w-[656px] h-[361px]'>
					<div className='w-[656px] h-[238px]'>
						<h2 className='font-bold text-[64px] leading-[77.45px] tracking-[-0.02em] mb-6'>
							Get More Done with whitepace
						</h2>
						<p className='font-normal text-lg leading-[30px] tracking-[-0.02em]'>
							Project management software that enables your teams to
							collaborate, plan, analyze and manage everyday tasks
						</p>
					</div>
				</div>
				<div className='w-[824px] h-[549px] bg-[#C4DEFD]'></div>
			</div>
            <div className="w-[1,920px] h-[1,588px] top-[921px] left-[1px] py-[140px] px-[220px] ">
                <div className="w-[1,480px]h-[547px] gap-[60] flex items-center">
                    <div className="w-[672px] h-[411px]">
                    <div className="w-[672px] h-[174px]">
                        <h1 className="font-bold text-[72px] leading-[87.14px] tracking-[-0.02em] text-[#212529]">Project Managment</h1>
                        <p className="font-normal text-lg leadin-[30px] tracking-[-0.02em] text-[#212529]">
                        Images, videos, PDFs and audio files are supported. Create math expressions and diagrams directly from the app. Take photos with the mobile app and save them to a note.
                        </p>
                    </div>
                    <button className="w-[201px] h-[63px] rounded-md px-10 py-5 bg-[#4F9CF9]">
                        <p className="font-medium text-lg leading-[23px] tracking-[-0.02em] text-white">
                            Get Started
                        </p>
                         </button>
                        </div>
                        <div className='w-[748px] h-[547px] bg-[#C4DEFD]'></div>
                        </div>

                        <div className="w-[1,480px] h-[661px] gap-[100px] flex flex-row items-center">
                        <div>
                        <Image src={Pic} alt="pic"width={600} height={300}/>
                        </div>
                        <div className="w-[670px] h-[87px] gap-[100px] items-center">
                            <h1 className=" font-bold text-[72px] leading-[87.14px] tracking-[-0.02em] text-[#212529] ">Work Togeather</h1>
                        <p className=" w-[670px] h-[60px] font-normal text-lg leading-[30px] tracking-[-0.02em]">
                        With whitepace, share your notes with your colleagues and collaborate on them.
                        You can also publish a note to the internet and share the URL with others.
                        </p>
                       
                        <button className="w-[186px] h-[63px]  rounded-md px-10 py-5 bg-[#4F9CF9] ">
                           
                        <p className=" w-[82px] h-[23px]font-medium text-lg leading-[23px] tracking-[-0.02em] text-white">
                            Try it now
                            <Image src={icon} alt="icon" width={14} height={14} className="gap-1"/>
                        </p>
                        </button>
                         </div>
                         </div>  
                         </div>

            <div className=" w-[1,921px] h-[759px] top-[2509px] left-[1px] px-[220px] py-[140px] gap-[98px] bg-[#043873] flex items-center">
                <div className="w-[697px] h-[294px] gap-[60px]  ">
                <div className="w-[697px] h-[87px] ">
                    <h1 className="font-bold text-[72px] leading-[87.14px] tracking-[-0.02em] text-white ">
                        Use as Extension
                    </h1>
                    <p className="w-[697px] h-[60px] font-normal text-lg leading-[30px] trcking-[-0.02em] text-white">
                    Use the web clipper extension, available on Chrome and Firefox, to save web pages or take screenshots as notes.

                    </p>
                    <button className="w-[171px] h-[63px]  rounded-md px-10 py-5 bg-[#4F9CF9] gap-[10px]">
                           
                           <p className=" w-[67px] h-[23px]font-med text-lg leading-[23px] tracking-[-0.02em] text-white">
                               Lets Go
                               <Image src={icon} alt="icon" width={14} height={14} className="border-1"/>
                           </p>
                           </button></div>
                  </div>
                <div className='w-[686px] h-[479px] bg-[#C4DEFD]'></div> 
                </div>

                <div className=" w-[1,921px] h-[812.09px] top-[3268px] left-[1px] px-[220px] py-[140px] gap-[98px] bg-white flex items-center">
                <div className='w-[714px] h-[532.09px] gap-1 bg-[#C4DEFD]'></div>
                <div className="w-[669px] h-[411px] gap-[60px]">
                    <div className="w-[669px]h-[288px] gap-[24px]">
                        <h1 className="w-[669px]h-[174px] font-bold text-[72px] leading-[87.14px] tracking-[-0.02em] text-black">
                        Customise it to your needs</h1>
                        <p className="w-[669px]h-[90px] font-normal text-lg leading-[30px] tracking-[-0.02em] text-[#212529]">
                        Customise the app with plugins, custom themes and multiple text editors (Rich Text or Markdown). Or create your own scripts and plugins using the Extension API.
                        </p>
                        </div>
                        <button className="w-[171px] h-[63px]  rounded-md px-10 py-5 bg-[#4F9CF9] gap-[10px]">
                           
                           <p className=" w-[67px] h-[23px]font-med text-lg  text-white">
                               Lets Go
                               <Image src={icon} alt="icon" width={14} height={14} className="border-1"/>
                           </p>
                           </button></div>

                </div>
                <div className="w-[1,921px] h-[574px] top-[4080px] left-[1px] px-[220px] py-[140px] bg-[#043873] flex  flex-col items-center justify-center  gap-[10] text-white ">
               <div className="w-[1481px]h-[294px] flex items-center  flex-col gap-[60px]">

                <h1 className="w-[1064px] h-[87px] font-bold text-[72px] leading-[87.14px] tracking-[-0.02em] ">
                Your work, everywhere you are
                </h1>
                <p className="w-[1064px]h-[60px] font-normal text-[18px] tracking-[-0.02em] text-center">
                Access your notes from your computer, phone or tablet by synchronising with various services, including whitepace, Dropbox and
                <br/> OneDrive. The app is available on Windows, macOS, Linux, Android and iOS. A terminal app is also available!
                </p>
               </div>
               <button className="w-[171px] h-[63px]  rounded-md px-10 py-5 bg-[#4F9CF9] gap-[10px]">
                           
                           <p className=" w-[67px] h-[23px]font-med text-lg leading-[23px] tracking-[-0.02em] text-white">
                               Lets Go
                               <Image src={icon} alt="icon" width={14} height={14} className="border-1"/>
                           </p>
                           </button>
                </div>

                <div className=" w-[1,922px]h-[538px] top-[4654] px-[220px] py-[140px]  ">
            
                    <h1 className=" w-[1482px] h-[87px] font-bold text-[72px] leading-[87.14px] tracking-[-2%] text-center mb-9 ">
                        Our Sponsers    
                    </h1>
                    <div className=" w-[1482px] h-[71px] flex justify-between">
                    <Image src={Apple} alt="Apple" width={55.47} height={68}/>
                    <Image src={Microsoft} alt="Microsoft" width={287} height={62}/>
                    <Image src={Slack} alt="Slack" width={280} height={71}/>
                    <Image src={Google} alt="Google" width={211} height={69.81}/>

                    </div>      
                    </div>

            
            


		</>
	);
};
 
export default Hero;

