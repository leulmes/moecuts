import React, { useEffect, useState } from "react";

interface MenuBurgerProps {
    open: boolean;
    toggleMenu: () => void;
};

const MenuBurger = ({ open, toggleMenu } : MenuBurgerProps ) => {

	const burgerLine = `bg-white w-5 h-[0.5px] my-0.5 rounded transition ease transform duration-300`;
	return (
		<button
			className="group cursor-pointer ml-6"
			onClick={toggleMenu}
		>
			<div className="grid justify-items-center">
				<div
					className={`${burgerLine}
							${open ? "rotate-45 translate-y-[4.2px]" : ""}`}
				></div>
				<div
					className={`${burgerLine} ${open ? "opacity-0" : ""}`}
				></div>
				<div
					className={`${burgerLine}
							${open ? "-rotate-45 -translate-y-[4.2px]" : ""}`}
				></div>
			</div>
		</button>
	);
};

export default MenuBurger;
