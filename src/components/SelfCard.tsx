import React from "react";
import Heading from "./Heading";
import Avatar from "./Avatar";

const SelfCard = () => {
	return (
		<div className="flex flex-row flex-nowrap justify-evenly items-center space-x-4"> 
			<Avatar />
			<div>
				<Heading>
					Jakku Night
				</Heading>
			</div>
		</div>
	);
};

export default SelfCard;
