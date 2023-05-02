import React from "react";
import Frame from "../components/Frame";
import Heading from "../components/Heading";
import MainHeading from "../components/MainHeading";
import Image from "../components/Image";
import Code from "../components/Code";

const Test = () => {
	return (
		<Frame>
			<Code lang="pseudocode" filename="helloworld" >
				{
					"INICIO\n" +
					"\t" + "SI a > b ENTONCES" + "\n" +
					"\t" + "\t" + "IMPRIMIR(\"a es mayor que b\");" + "\n" +
					"\t" + "FINSI" + "\n" +
					"\t" + "// Solo soy un yacare" + "\n" +
					"\t" + "" + "\n" +
					"\t" + "" + "\n" +
					"\t" + "" + "\n" +
					"\t" + "" + "\n" +
					"\t" + "" + "\n" +
					"\t" + "" + "\n" +
					"\t" + "" + "\n" +
					"\t" + "" + "\n" +
					"\t" + "" + "\n" +
					"FIN\n"
				}
			</Code>
		</Frame>
	);
};

export default Test;
