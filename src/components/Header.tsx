import React from "react";
import SelfCard from "../components/SelfCard";
import ContentModal from "../components/ContentModal";

const Header = () => {
	return (
		<div
			className="sticky top-0 flex flex-row flex-nowrap bg-blue-900 h-24 w-full items-center space-x-4 p-4 justify-between"
		>
			<SelfCard />
			<ContentModal />
		</div>
	);
};

export default Header;
