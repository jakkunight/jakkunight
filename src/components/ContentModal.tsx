import React, { useState } from "react";
import TopicLink from "./TopicLink";
import react from "../assets/menu-hamburger.svg";

const ContentModal = () => {
	const [visible, setVisible] = useState(false);
	const openModal = () => {
		setVisible(true);
	};
	const closeModal = () => {
		setVisible(false);
	};
	return (
		<div className="rounded-lg aspect-square h-full">
			<button onClick={openModal} className="rounded-lg aspect-square p-2 w-full h-full bg-gray-300">
				<img src={react} className="w-full h-full" />
			</button>
			{
				visible && 
				<div className="overflow-y-auto rounded-lg bg-gray-700 fixed top-0 left-0 w-full h-full" >
					<div className="bg-gray-700 sticky top-0 left-0 p-4 flex flex-row flex-nowrap justify-between items-center h-16 w-full">
						<h1 className="text-white text-2xl">
							Contenidos
						</h1>
						<button onClick={closeModal} className="rounded-lg bg-red-500 text-white aspect-square h-full">
							X
						</button>
					</div>
					<div className="p-4 rounded-lg flex flex-col rounded-lg">
						<h1 className="text-white text-2xl">
							Commit Logs: Blog personal.
						</h1>
						<TopicLink link={"/"} topic={"Index"} />
						<h1 className="text-white text-2xl">
							Commit Logs: Blog personal.
						</h1>
						<TopicLink link={"/conceptos-basicos"} topic={"Conceptos Básicos"} />
						<TopicLink link={"/conceptos-basicos"} topic={"Conceptos Básicos"} />
						<TopicLink link={"/conceptos-basicos"} topic={"Conceptos Básicos"} />
						<TopicLink link={"/conceptos-basicos"} topic={"Conceptos Básicos"} />
						<TopicLink link={"/conceptos-basicos"} topic={"Conceptos Básicos"} />
						<TopicLink link={"/conceptos-basicos"} topic={"Conceptos Básicos"} />
						<TopicLink link={"/conceptos-basicos"} topic={"Conceptos Básicos"} />
						<TopicLink link={"/conceptos-basicos"} topic={"Conceptos Básicos"} />
						<TopicLink link={"/conceptos-basicos"} topic={"Conceptos Básicos"} />
						<TopicLink link={"/conceptos-basicos"} topic={"Conceptos Básicos"} />
						<TopicLink link={"/conceptos-basicos"} topic={"Conceptos Básicos"} />
						<TopicLink link={"/conceptos-basicos"} topic={"Conceptos Básicos"} />
						<TopicLink link={"/conceptos-basicos"} topic={"Conceptos Básicos"} />
						<TopicLink link={"/conceptos-basicos"} topic={"Conceptos Básicos"} />
						<TopicLink link={"/conceptos-basicos"} topic={"Conceptos Básicos"} />
						<TopicLink link={"/conceptos-basicos"} topic={"Conceptos Básicos"} />
						<TopicLink link={"/conceptos-basicos"} topic={"Conceptos Básicos"} />
						<TopicLink link={"/conceptos-basicos"} topic={"Conceptos Básicos"} />
						<TopicLink link={"/conceptos-basicos"} topic={"Conceptos Básicos"} />
						<TopicLink link={"/conceptos-basicos"} topic={"Conceptos Básicos"} />
						<TopicLink link={"/conceptos-basicos"} topic={"Conceptos Básicos"} />
						<TopicLink link={"/conceptos-basicos"} topic={"Conceptos Básicos"} />
						<TopicLink link={"/conceptos-basicos"} topic={"Conceptos Básicos"} />
						<TopicLink link={"/conceptos-basicos"} topic={"Conceptos Básicos"} />
					</div>
				</div>
			}
		</div>
	);
};

export default ContentModal;
