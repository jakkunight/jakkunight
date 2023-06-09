import React from "react";
import { Link } from "react-router-dom";

const TopicLink = ({ topic, link }: { topic: string, link: string }) => {
	const baseURL = "/jakkunight/#";
	return (
		<div className="w-full text-white text-xl justify-evenly m-4">
			<Link to={link} >
				<h3>
					{topic}
				</h3>
			</Link>
		</div>
	);
};

export default TopicLink;
