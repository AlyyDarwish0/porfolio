import React from "react";
import Heading from "./ui/Heading";
import SectionContainer from "./ui/SectionContainer";
import Image from "next/image";
import { FollowerPointerCard } from "./ui/FollowPointer";
import Link from "next/link";
import { HoverBorderGradient } from "./ui/HoverBorderGradient";
import { BsBoxArrowUpRight } from "react-icons/bs";
import { CiGlobe } from "react-icons/ci";
import { IoPieChartOutline } from "react-icons/io5";
import { MdOutlineDesignServices } from "react-icons/md";
import { TbBrandPython } from "react-icons/tb";
import { BsRobot } from "react-icons/bs";
import { GiRobotGrab } from "react-icons/gi";

const Services = () => {
	return (
		<SectionContainer id='services'>
			<Heading title='Machines I have' titleSpan='Pawned' />
			<div className='mx-auto flex flex-row flex-wrap gap-8 justify-center'>
				{services.map((service, index) => (
					<FollowerPointerCard className='md:max-w-96' key={index} title={<TitleComponent title={service.title} avatar={<CiGlobe />} />}>
						<div className='relative overflow-hidden h-full rounded-2xl transition duration-200 group bg-black-100 hover:shadow-xl border border-gray-600'>
							<div className=' p-4'>
								<h2 className='flex gap-3 items-center font-bold my-4 text-lg text-white'>{service.title}</h2>
								<h2 className='font-normal my-4 text-sm text-zinc-400'>{service.description}</h2>
								<div className='flex flex-col items-start mt-10'>
									<span className='flex flex-row flex-wrap'>
										{service.icons.map((icon, index) => (
											<div key={index} className='w-12 h-12 border border-zinc-500 bg-black-100 rounded-full p-1 flex justify-center items-center' style={{ transform: `translateX(-${5 * index * 2}px)` }}>
												<Image src={icon} width={"1000"} height={"1000"} alt='company logo' />
											</div>
										))}
									</span>
									{/* <Link href={"#contact"} className='mt-4'>
										<HoverBorderGradient containerClassName='rounded-full' as='button' className='dark:bg-black-100 bg-white text-black dark:text-white flex items-center space-x-2 cursor-none'>
											Send Inquiry
											<span>
												<BsBoxArrowUpRight className='ml-3' size={"18"} />
											</span>
										</HoverBorderGradient>
									</Link> */}
								</div>
							</div>
						</div>
					</FollowerPointerCard>
				))}
			</div>
		</SectionContainer>
	);
};

const services = [
	{
		title: "Meow has been Pwned",
		description: "The0big0Darwish has successfully pwned Meow Machine from Hack The Box.",
		icons: ["/images/logos/1.webp"],
	},
	{
		title: "Fawn has been Pwned",
		description: "The0big0Darwish has successfully pwned Fawn Machine from Hack The Box",
		icons: ["/images/logos/2.webp"],
	},
	{
		title: "Dancing has been Pwned",
		description: "The0big0Darwish has successfully pwned Dancing Machine from Hack The Box",
		icons: ["/images/logos/3.png"],
	},
	{
		title: "Redeemer has been Pwned",
		description: "The0big0Darwish has successfully pwned Redeemer Machine from Hack The Box",
		icons: ["/images/logos/4.webp"],
	},
	{
		title: "Explosion has been Pwned",
		description: "The0big0Darwish has successfully pwned Explosion Machine from Hack The Box",
		icons: ["/images/logos/5.png"],
	},
	{
		title: "Preignition has been Pwned!",
		description: "The0big0Darwish has successfully pwned Preignition Machine from Hack The Box",
		icons: ["/images/logos/6.png"],
	},
];

const TitleComponent = ({ title, avatar }: { title: string; avatar: React.ReactNode }) => (
	<div className='flex space-x-2 items-center'>
		{avatar}
		{/* <Image src={avatar} height='20' width='20' alt='thumbnail' className='rounded-full border-2 border-white' /> */}
		<p>{title}</p>
	</div>
);

export default Services;
