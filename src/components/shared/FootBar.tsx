import logo from "@/assets/images/logo.png";
import Image from "next/image";
import Link from "next/link";
import { BsLinkedin } from "react-icons/bs";
import { FaInstagramSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { ImFacebook2 } from "react-icons/im";
import { footerLinks } from "@/constants";

const Footbar = () => {
	return (
		<footer className="bg-primary p-4 text-white md:p-8">
			<div className="container mx-auto">
				<div className="flex flex-col justify-between sm:flex-row">
					<div className="mb-4 sm:mb-0">
						<Image
							className="rounded-2xl bg-white p-6 shadow-xl"
							alt="logo"
							src={logo}
							width={200}
							height={50}
						/>
						<h1 className="mt-4 font-serif text-xl font-bold sm:text-2xl">
							HEALTH OPTIMA INC.
						</h1>
						<h2 className="text-md font-light sm:text-lg">CARE N&#39; CURE</h2>
					</div>

					<div className="mt-8">
						<ul className="flex flex-col gap-3 pb-0 text-lg font-medium sm:text-xl">
							{footerLinks.map((links) => (
								<li key={links.id} className="flex hover:text-secondary">
									<Link
										href={`/${
											links.id === "contact" ? "#contact" : `${links.id}`
										}`}
										className="flex-1 md:text-right">
										{links.title}
									</Link>
								</li>
							))}
						</ul>
					</div>
				</div>

				<hr className="mb-4 mt-4 h-1 bg-white sm:mb-6 sm:mt-7" />

				<div className="flex flex-col justify-between sm:flex-row">
					<span className="text-white">
						&copy; 2023 Health Optima. All rights reserved
					</span>
					<div className="flex align-middle">
						<h1 className="text-md mt-1 font-semibold md:text-2xl">
							Follow us on:
						</h1>
						<ul className="saturate ml-4 flex">
							<li className="hover:text-secondary">
								<Link href="">
									<FaSquareXTwitter className="ml-2 h-12 w-12 sm:ml-6" />
								</Link>
							</li>
							<li className="hover:text-secondary">
								<Link href="">
									<BsLinkedin className="ml-2 mt-1 h-10 w-10 sm:ml-6" />
								</Link>
							</li>
							<li className="hover:text-secondary">
								<Link href="">
									<ImFacebook2 className="ml-2 mt-1 h-10 w-10 sm:ml-6" />
								</Link>
							</li>
							<li className="hover:text-secondary">
								<Link href="">
									<FaInstagramSquare className="ml-2 h-12 w-12 sm:ml-6" />
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footbar;
