import React, { useState } from "react";
import TopicLink from "./TopicLink";
import react from "../assets/menu-hamburger.svg";

const ContentModal = () => {
	const [visible, setVisible] = useState(false);
	const openModal = (e) => {
		setVisible(true);
	};
	const closeModal = (e) => {
		e.preventDefault();
		setVisible(false);
	};
	return (
		<div className="rounded-lg aspect-square h-full">
			<button onClick={openModal} className="rounded-lg aspect-square p-2 w-full h-full bg-gray-300">
				<img src={react} className="w-full h-full" />
			</button>
			{
				visible && 
				<div className="rounded-lg bg-gray-700 fixed top-0 left-0 bottom-0 right-0 w-full h-full" >
					<div className="sticky top-0 p-4 flex flex-row flex-nowrap justify-between items-center h-16 w-full">
						<h1 className="text-white text-2xl">
							Contenidos
						</h1>
						<button onClick={closeModal} className="rounded-lg bg-red-500 text-white aspect-square h-full">
							X
						</button>
					</div>
					<div className="rounded-lg flex flex-column justify-center flex-wrap rounded-lg">
						<TopicLink link={"/"} topic={"Index"} />
						<TopicLink link={"/conceptos-basicos"} topic={"Conceptos Básicos"} />
					</div>
				</div>
			}
		</div>
	);
};

export default ContentModal;
