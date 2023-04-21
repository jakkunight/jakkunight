import React, { ReactNode, useEffect } from "react";
import Prism from "prismjs";
import "prismjs/components/prism-c";
import "prismjs/components/prism-cpp";
import "../prism.css";

const Code = ({ filename, lang, children }: { filename?: string, lang: string, children?: string | ReactNode }) => {

	useEffect(() => {
		Prism.highlightAll();
	}, []);
	
	return (
		<div className="bg-black">
			<div className="bg-black p-4 border-2">
				{
					filename ? "\"" + filename + "\":" : "Code:"
				}
			</div>
			<div className="bg-black border-2">
				<pre><code className={" font-['Source_Code_Pro'] language-" + lang}>{children}</code></pre>
			</div>
		</div>
	);
};

export default Code;

