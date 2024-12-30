import React, { useEffect, useState } from "react";

interface MenuBurgerProps {
	open: boolean;
	toggleMenu: () => void;
}

const MenuBurger = ({ open, toggleMenu }: MenuBurgerProps) => {
	const burgerLine = `bg-white w-5 h-[0.5px] my-0.5 rounded transition ease transform duration-300`;
	return (
		<button
			className="flex flex-col justify-center items-center "
			onClick={toggleMenu}
			title="Mobile Navigation Bar Button"
		>
			<span
				className={`bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
					open ? "rotate-45 translate-y-1" : "-translate-y-1"
				}`}
			></span>
            <span className={`bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${open ? 'opacity-0' : 'opacity-100'}`}></span>
            <span className={`bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${open ? '-rotate-45 -translate-y-1' : 'translate-y-1'}`}></span>
		</button>
	);
};

export default MenuBurger;
