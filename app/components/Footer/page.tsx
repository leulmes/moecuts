import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

const updateDate = (): number => {
	const date = new Date();
	return date.getFullYear();
};

const Footer = () => {
	return (
		<div className="text-white bg-slate-600 flex flex-col items-center gap-2">
			<div className="flex gap-4">
				<Link
					href={"https://www.instagram.com/moeblessed_/"}
					target="_blank"
					rel="noopener noreferrer"
				>
					<FontAwesomeIcon
						icon={faInstagram}
						className="size-7 cursor-pointer"
					/>
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
			<div className="flex flex-row">
				&copy; {updateDate()} Moe Cuts. All Rights Reserved
			</div>
		</div>
	);
};

export default Footer;
