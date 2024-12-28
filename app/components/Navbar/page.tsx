'use client'
import React, { useEffect, useState } from "react";
import Link from "next/link";
type NavLinks = {
	name: string;
	href: string;
};

const links: NavLinks[] = [
	{ name: "Services", href: "" },
	{ name: "About", href: "" },
	{ name: "Book Now", href: "" },
];

const Navbar = () => {
	const [burgerMenuIsOpen, setBurgerMenuOpen] = useState(false);
	const burgerLine = `bg-white w-5 h-[0.5px] my-0.5 rounded transition ease transform duration-300`;

	const toggleBurgerMenu = () => {
		setBurgerMenuOpen(!burgerMenuIsOpen);
	};

	useEffect(() => {
		console.log("burgerState: ", burgerMenuIsOpen);
	}, [burgerMenuIsOpen]);
    
	return (
		<div className="sticky top-0 z-50">
			<div className="flex flex-row justify-center items-center bg-[#151312] text-white gap-5 cursor-pointer h-16">
				<h1>Moe Cuts</h1>
				{links.map((link, i) => (
					<Link
						href={link.href}
						key={i}
						className="relative cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-300 before:absolute before:bg-gray-400 before:origin-center before:h-[1px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-300 after:absolute after:bg-gray-400 after:origin-center after:h-[1px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%]"
					>
						{link.name}
					</Link>
				))}
                <button
					className="group cursor-pointer ml-6"
					onClick={() => toggleBurgerMenu()}
				>
					<div className="grid justify-items-center">
						<div
							className={`${burgerLine}
							${burgerMenuIsOpen ? "rotate-45 translate-y-[4.2px]" : ""}`}
						></div>
						<div
							className={`${burgerLine} ${burgerMenuIsOpen ? "opacity-0" : ""}`}
						></div>
						<div
							className={`${burgerLine}
							${burgerMenuIsOpen ? "-rotate-45 -translate-y-[4.2px]" : ""}`}
						></div>
					</div>
				</button>
			</div>
		</div>
	);
};

export default Navbar;
