"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import MenuBurger from "../MenuBurger";
import { motion } from "motion/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { Phone } from "lucide-react";

type NavLinks = {
	name: string;
	href: string;
};

const links: NavLinks[] = [
	{ name: "About", href: "#first-section" },
	{ name: "Services", href: "#second-section" },
	{ name: "Gallery", href: "#third-section" },
	{
		name: "Book Now",
		href: "https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ3eZvcokw-Il3A-oGnXJxpfY82IG7ta-GC_uXID0Y9CNOBSHBUCRf9JyY2-ygr-mtzqmuiiJriA?gv=true",
	},
];

const Navbar = () => {
	const [open, setOpen] = useState(false);

	const toggleMenu = () => {
		setOpen((prevOpen) => !prevOpen);
	};

	useEffect(() => {
		console.log("MenuState: ", open);
	}, [open]);

	return (
		// Mobile nav
		<header className="px-14 py-6 border-b-2 border-solid bg-slate-600 ">
			<div className="flex justify-between">
				<h1>Moe Cuts</h1>
				<MenuBurger open={open} toggleMenu={toggleMenu} />
			</div>

			{open && (
				<motion.div
					initial={{ scale: 0, opacity: 0, x: "-50%", y: "-50%" }}
					animate={{ scale: 1, opacity: 1 }}
					transition={{ duration: 0.5 }}
					className="min-w-[70vw] flex flex-col justify-between z-30 items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#3d3c3c]/90 rounded-lg backdrop-blur-md py-10"
				>
					<nav className="flex items-center flex-col justify-center gap-8">
						{links.map((link, i) => (
							<MobileNavLink key={i} name={link.name} href={link.href} />
						))}
					</nav>

					<nav className="flex flex-col items-center justify-center flex-wrap my-5 gap-3">
						{/* <div className="flex flex-row gap-2 items-center">
							<Phone className="size-4" />
							<p>+1 (444) 444-4444</p>
						</div> */}

						<div className="flex gap-6">
							<Link
								href={"https://www.instagram.com/moeblessed_/"}
								target="_blank"
								rel="noopener noreferrer"
							>
								<FontAwesomeIcon icon={faInstagram} className="size-7" />
							</Link>
							<Link
								href={"https://www.linkedin.com/in/mohsin-awan353/"}
								target="_blank"
								rel="noopener noreferrer"
							>
								<FontAwesomeIcon
									icon={faLinkedin}
									className="size-7 cursor-pointer"
								/>
							</Link>
						</div>
					</nav>
				</motion.div>
			)}
		</header>
	);
};

export default Navbar;

const MobileNavLink = ({ name, href }: NavLinks) => {
	return (
		<div className="text-4xl uppercase text-white cursor-pointer">
			<Link href={href} className="">
				{name}
			</Link>
		</div>
	);
};
