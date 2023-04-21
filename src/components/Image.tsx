import React from "react";

const Image = ({ src, alt }: { src: string | any, alt?: string }) => {
	return (
		<img src={src} alt={alt} className="w-full h-auto" />
	);
};

export default Image;
