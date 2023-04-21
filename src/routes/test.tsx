import React from "react";
import Frame from "../components/Frame.tsx";
import Heading from "../components/Heading.tsx";
import MainHeading from "../components/MainHeading.tsx";
import Image from "../components/Image.tsx";
import Code from "../components/Code.tsx";

const Test = () => {
	return (
		<Frame>
			<Code lang="cpp" filename="main.cpp" >
				{
					"#include <iostream>\n" +
					"using namespace std;\n" + 
					"int main(argc, &argv){\n" +
					"\tcout << \"Hello World!\" << endl;\n" +
					"\treturn 0;\n" +
					"}" 
				}
			</Code>
		</Frame>
	);
};

export default Test;
