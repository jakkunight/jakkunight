import React from "react";

const SocialLink = ({ media, link }: { media: string | any, link: string }) => {
	return (
		<div className="bg-gradient-to-tl from-sky-500 to-blue-800 aspect-square rounded-full h-16 w-min overflow-hidden border-4 border-double border-white">
			<a href={link}>
				<img src={media} />
			</a>
		</div>
	);
};

export default SocialLink;
