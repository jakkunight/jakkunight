import React from "react";
import Avatar from "./Avatar";

const SelfCard = () => {
	return (
		<div className="flex flex-row flex-nowrap justify-evenly items-center space-x-4"> 
			<Avatar />
			<div>
				<h1 className="text-white text-2xl font-['Courier_New']">
					Jakku Night
				</h1>
			</div>
		</div>
	);
};

export default SelfCard;
