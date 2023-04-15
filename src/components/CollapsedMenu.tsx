import React, { useState } from "react";
import TopicLink from "./TopicLink";

const CollapsedMenu = ({ heading, topics }: { heading: string, topics: Array<{ topic: string, link: string }> }) => {
	const [collapsed, setCollapsed] = useState(true);
	const toogleButton = () => {
		setCollapsed(!collapsed);
	};
	return(
		<div>
			<div className="flex flex-row justify-between h-12 w-full">
				<h1 className="text-white text-2xl" >
					{heading}
				</h1>
				<button onClick={toogleButton} className="text-2xl rounded-lg bg-blue-500 text-white aspect-square h-full">
					{collapsed ? "+" : "-"}
				</button>
			</div>
			{
				!collapsed && 
				<div>
					{
						topics.map((item, key) => {
							return (
								<TopicLink key={key} link={item.link} topic={item.topic} />
							);
						})
					}
				</div>
			}
		</div>
	);
};

export default CollapsedMenu;
