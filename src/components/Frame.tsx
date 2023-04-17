import React, { ReactNode } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Frame = ({ children }: { children?: ReactNode}) => {
	return (
		<div className="flex flex-col flex-nowrap min-h-screen w-full text-lg text-gray-300">
			<Header />
			<div className="grow p-8 bg-gradient-to-tl from-sky-700 to-black">
				{children}
			</div>
			<Footer />
		</div>
	);
};

export default Frame;
