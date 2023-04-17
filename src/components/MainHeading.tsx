import React, { ReactNode } from "react";

const MainHeading = ({ heading, children }: { heading?: string, children?: ReactNode }) => {
	return (
		<h1 className="text-4xl text-white font-bold">
			{
				heading ? heading : children
			}
		</h1>
	);
};

export default MainHeading;
