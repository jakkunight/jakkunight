import React, { ReactNode } from "react";

const Text = ({ children }: { children?: ReactNode | ReactNode[] }) => {
	return (
		<div className="text-gray-300 text-lg m-4">
			{children}
		</div>
	);
};

export default Text;
