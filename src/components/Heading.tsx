import React, { ReactNode } from "react";

const Heading = ({ heading, children }: { heading?: string, children?: ReactNode }) => {
	return (
		<h1 className="text-2xl text-white font-bold m-2">
			{
				heading ? heading : children
			}
		</h1>
	);
};

export default Heading;
