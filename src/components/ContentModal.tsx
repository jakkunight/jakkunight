import React, { useState, ReactNode } from "react";
import Heading from "./Heading";
import hamburgerMenu from "../assets/menu-hamburger.svg";

const ContentModal = ({ heading, children }: { heading: string, children?: ReactNode }) => {
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
				<img src={hamburgerMenu} className="w-full h-full" />
			</button>
			{
				visible && 
				<div className="z-50 backdrop-blur-[500px] overflow-y-auto rounded-lg fixed top-0 left-0 w-full h-full">
					<div className="z-50 bg-gray-700 sticky top-0 left-0 p-4 flex flex-row flex-nowrap justify-between items-center h-16 w-full">
						<Heading>
							{heading}
						</Heading>
						<button onClick={closeModal} className="rounded-lg bg-red-500 text-white aspect-square h-full">
							x
						</button>
					</div>
					<div className="z-50 p-4 rounded-lg flex flex-col rounded-lg">
						{children}
					</div>
				</div>
			}
		</div>
	);
};

export default ContentModal;
