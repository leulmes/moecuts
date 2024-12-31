import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/app/components/ui/card";
import React from "react";

type ServiceProp = {
	title: string;
	price: number;
};
const ServicesCard = () => {
	const services: ServiceProp[] = [
		{ title: "Haircut", price: 30 },
		{ title: "Beard Trim", price: 15 },
		{ title: "Shave", price: 20 },
		{ title: "Trim", price: 10 },
		{ title: "Kids Haircut", price: 20 },
	];

	return (
		<div>
			<Card className="w-80 bg-slate-50 shadow-lg rounded-none">
				<CardHeader className="bg-slate-800 text-white text-center">
					<CardTitle className="text-white text-2xl font-bold">
						My Services
					</CardTitle>
					<CardDescription className="text-slate-300">
						Quality cuts for less
					</CardDescription>
				</CardHeader>
				<CardContent className="pt-6">
					<ul className="space-y-4">
						{services.map((service: ServiceProp, idx: number) => (
							<li key={idx} className="flex justify-between items-center border-b border-slate-200 pb-2 last:border-b-0">
								<span className="text-lg font-medium text-slate-700">
									{service.title}
								</span>
								<span className="text-lg font-bold text-slate-900">
									${service.price}
								</span>
							</li>
						))}
					</ul>
				</CardContent>
				{/* <CardFooter>
					<p>Card Footer</p>
				</CardFooter> */}
			</Card>
		</div>
	);
};

export default ServicesCard;
