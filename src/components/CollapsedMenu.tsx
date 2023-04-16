import React, { useState, ReactNode } from "react";
import TopicLink from "./TopicLink";
import Heading from "./Heading";

const CollapsedMenu = ({ heading, children }: { heading: string, children?: ReactNode }) => {
	const [collapsed, setCollapsed] = useState(true);
	const toogleButton = () => {
		setCollapsed(!collapsed);
	};
	return(
		<div>
			<div className="flex flex-row items-center justify-between w-full p-2">
				<Heading>
					{heading}
				</Heading>
				<button onClick={toogleButton} className="text-2xl rounded-lg bg-blue-500 text-white aspect-square h-8">
					{collapsed ? "+" : "-"}
				</button>
			</div>
			{
				!collapsed && 
				<div>
					{children}
				</div>
			}
		</div>
	);
};

export default CollapsedMenu;
