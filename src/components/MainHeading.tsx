import React, { ReactNode } from "react";

const MainHeading = ({ heading, children }: { heading?: string, children?: ReactNode | ReactNode[] }) => {
	return (
		<h1 className="text-4xl text-white font-bold m-4">
			{
				heading ? heading : children
			}
		</h1>
	);
};

export default MainHeading;
