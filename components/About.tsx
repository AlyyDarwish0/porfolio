import React from "react";
import Image from "next/image";
import Link from "next/link";
import Heading from "./ui/Heading";
import { CardBackgroundGradient } from "./ui/CardBackgroundGradient";
import ProfileImage from "@/public/images/profile.jpeg";
import { HoverBorderGradient } from "./ui/HoverBorderGradient";
import { BsBoxArrowUpRight } from "react-icons/bs";
import { CiSaveDown2 } from "react-icons/ci";
import SectionContainer from "./ui/SectionContainer";

const About = () => {
	return (
		<SectionContainer id='about'>
			<Heading title='About' titleSpan='Me' />
			<div className='relative flex flex-col lg:flex-row justify-between items-center gap-24 mx-auto'>
				<div className='sm:max-w-2xl flex flex-col gap-2 justify-center items-start'>
					<p className='mt-4 text-lg'>I am a dedicated Cybersecurity professional committed to excelling in the ever-evolving field of cybersecurity. With a passion for continuous learning, I actively participate in hacking competitions to hone my skills and gain practical experience. Competing against hundreds of talented individuals, I consistently achieve high rankings, demonstrating my expertise and dedication. My journey in cybersecurity is driven by a relentless pursuit of knowledge and excellence. I stay updated with the latest industry trends, techniques, and tools to ensure I am at the forefront of the field.</p>
					<p className='mt-4 text-lg'>My competitive spirit and hands-on experience in hacking competitions have equipped me with a unique skill set that sets me apart. I am passionate about protecting digital assets and providing robust security solutions. My goal is to be a leader in cybersecurity, and I am constantly seeking new challenges and opportunities to grow and make a significant impact in the industry.</p>
					<div className='flex flex-row gap-6'>
						<Link href={"#contact"} className='mt-4'>
							<HoverBorderGradient containerClassName='rounded-full' as='button' className='dark:bg-black-100 bg-white text-black dark:text-white flex items-center space-x-2'>
								Contact Me!
								<span>
									<BsBoxArrowUpRight className='ml-3' size={"18"} />
								</span>
							</HoverBorderGradient>
						</Link>
						<Link href={"/docs/Aly Darwish's CV.pdf"} className='mt-4'>
							<HoverBorderGradient containerClassName='rounded-full' as='button' className='dark:bg-black-100 bg-white text-black dark:text-white flex items-center space-x-2'>
								View CV
								<span>
									<CiSaveDown2 className='ml-3' size={"24"} />
								</span>
							</HoverBorderGradient>
						</Link>
					</div>
				</div>
				<div>
					<CardBackgroundGradient className='rounded-[22px] max-w-sm bg-white dark:bg-zinc-900 overflow-hidden'>
						<Image src={ProfileImage} alt='jordans' height='400' width='400' className='object-contain' />
					</CardBackgroundGradient>
				</div>
			</div>
		</SectionContainer>
	);
};

export default About;
