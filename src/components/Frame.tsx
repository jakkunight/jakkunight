import React, { Children } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Frame = ({ children }: { children?: Children}) => {
	return (
		<div className="flex flex-col flex-nowrap min-h-screen w-full text-lg text-gray-300 bg-black">
			<Header />
			<div className="grow p-4 ">
				{children}
			</div>
			<Footer />
		</div>
	);
};

export default Frame;
