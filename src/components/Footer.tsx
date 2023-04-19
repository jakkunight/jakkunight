import React from "react";
import SocialLink from "../components/SocialLink";
import Heading from "../components/Heading";
import github from "../assets/github.svg";
import twitch from "../assets/twitch.svg";
import youtube from "../assets/youtube.svg";
import discord from "../assets/discord.svg";


const Footer = () => {
	
	return (
		<div className="flex flex-col flex-nowrap w-full h-max bg-blue-900 p-4 items-center justify-center text-center">
			<Heading>
				¡Seguime en mis redes!
			</Heading>
			<div className="flex flex-nowrap flex-row w-full h-24 bg-blue-900 p-4 items-center justify-evenly">
				<SocialLink link={"https://github.com/jakkunight"} media={github} />
				<SocialLink link={"https://discord.gg/8ZvqWatGYY"} media={discord} />
				<SocialLink link={"https://m.youtube.com/channel/UCj9oLC2AaoHRqZffjXhOTLA"} media={youtube} />
				<SocialLink link={"https://twitch.tv/jakku_night"} media={twitch} />
			</div>
		</div>
	);
};

export default Footer;
