import React from "react";

const SocialLink = ({ media, link }: { media: string | any, link: string }) => {
	return (
		<div className="bg-white aspect-square rounded-full h-16 w-min overflow-hidden border-4 border-double border-white">
			<a href={link}>
				<img src={media} />
			</a>
		</div>
	);
};

export default SocialLink;
