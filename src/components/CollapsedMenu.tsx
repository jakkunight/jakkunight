import React, { useState, ReactNode } from "react";
import TopicLink from "./TopicLink";

const CollapsedMenu = ({ heading, children }: { heading: string, children?: ReactNode }) => {
	const [collapsed, setCollapsed] = useState(true);
	const toogleButton = () => {
		setCollapsed(!collapsed);
	};
	return(
		<div>
			<div className="flex flex-row items-center justify-between w-full p-2">
				<h1 className="text-white text-2xl" >
					{heading}
				</h1>
				<button onClick={toogleButton} className="text-4xl rounded-lg bg-blue-500 text-white aspect-square h-16">
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
