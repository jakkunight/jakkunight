import React, { ReactNode } from "react";

const ListItem = ({ children }: { children?: ReactNode | ReactNode[] }) => {
	return (
		<li className="m-4">
			{children}
		</li>
	);
};

export default ListItem;
