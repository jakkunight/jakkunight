import React, { ReactNode } from "react";

const List = ({ children }: { children?: ReactNode | ReactNode[] }) => {
	return (
		<ul className="list-disc list-inside m-4">
			{children}
		</ul>
	);
};

export default List;
