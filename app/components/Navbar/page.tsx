"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import MenuBurger from "../MenuBurger";
type NavLinks = {
	name: string;
	href: string;
};

const links: NavLinks[] = [
    { name: "About", href: "" },
	{ name: "Services", href: "" },
    { name: "Gallery", href: "" },
	{
		name: "Book Now",
		href: "https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ3eZvcokw-Il3A-oGnXJxpfY82IG7ta-GC_uXID0Y9CNOBSHBUCRf9JyY2-ygr-mtzqmuiiJriA?gv=true",
	},
];

const Navbar = () => {
	const [open, setOpen] = useState(false);
	const burgerLine = `bg-white w-5 h-[0.5px] my-0.5 rounded transition ease transform duration-300`;

	const toggleMenu = () => {
		setOpen((prevOpen) => !prevOpen);
	};

	useEffect(() => {
		console.log("MenuState: ", open);
	}, [open]);

	return (
		// Mobile nav
		<header>
			<div className="fixed left-0 top-0 w-full h-screen bg-[#151312] p-10">
				<div className="flex h-full flex-col">
					<div className="flex justify-between">
						<h1 className="text-lg text-white">Moe Cuts</h1>
						<MenuBurger open={open} toggleMenu={toggleMenu} />
					</div>
					<div className="flex flex-col h-full justify-center items-center">
						{links.map((link, i) => (
							<MobileNavLink key={i} name={link.name} href={link.href} />
						))}
					</div>
				</div>
			</div>
		</header>
	);
};

export default Navbar;

const MobileNavLink = ({ name, href }: NavLinks) => {
	return (
		<div className="text-4xl uppercase text-white cursor-pointer">
			<Link
				href={href}
				className="relative cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-300 before:absolute before:bg-gray-400 before:origin-center before:h-[1px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-300 after:absolute after:bg-gray-400 after:origin-center after:h-[1px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%]"
			>
				{name}
			</Link>
		</div>
	);
};
