import React, { Children } from "react";

const MainHeading = ({ heading, children }: { heading?: string, children?: Children }) => {
	return (
		<h1 className="text-4xl text-white font-bold m-2">
			{
				heading ? heading : children
			}
		</h1>
	);
};

export default MainHeading;
