import React from "react";
import SelfCard from "../components/SelfCard";
import ContentModal from "../components/ContentModal";
import CollapsedMenu from "../components/CollapsedMenu";
import TopicLink from "../components/TopicLink";

const Header = () => {
	return (
		<div
			className={
				"sticky top-0 flex flex-row flex-nowrap bg-blue-900" +
				" h-24 w-full items-center space-x-4 p-4 justify-between"
			}
		>
			<SelfCard />
			<ContentModal heading="Contenido">
				<CollapsedMenu heading="The Console Logs: Mi blog personal.">
					<TopicLink topic="¡Bienvenidos!" link="/" />
					<TopicLink topic="" link="/" />
				</CollapsedMenu>
			</ContentModal>
		</div>
	);
};

export default Header;
