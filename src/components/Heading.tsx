import React, { Children } from "react";

const Heading = ({ heading, children }: { heading?: string, children?: Children }) => {
	return (
		<h1 className="text-2xl text-white font-bold m-2">
			{
				heading ? heading : children
			}
		</h1>
	);
};

export default Heading;
