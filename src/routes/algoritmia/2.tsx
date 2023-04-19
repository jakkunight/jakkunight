import React from "react";
import Frame from "../../components/Frame";
import Heading from "../../components/Heading";
import MainHeading from "../../components/MainHeading";
import Text from "../../components/Text";
import List from "../../components/List";
import ListItem from "../../components/ListItem";

const Page = () => {
	return (
		<Frame>
			<MainHeading>
				Computadora Ideal. Componentes y funcionamiento.
			</MainHeading>
			<Heading>
				¿Por qué "ideal"?
			</Heading>
			<Text>
				Al tratar de estudiar las instrucciones de los programas, debemos conocer las 
				limitaciones de nuestro entorno al momento de hacer nuestro código. Hay que saber 
				como van a ser ejecutadas nuestras instruciones y como funciona la máquina que va 
				a automatizar nuestro trabajo.
			</Text>
			<Text>
				Es menester crear un entorno donde podamos probar lo que aprendemos, sin necesidad 
				de conocer de manera detallada todo lo anterior y centrarnos en el estudio de los 
				programas y los algoritmos. Para ello, al menos en esta sección, vamos a utilizar 
				lo que se llama "computadora ideal", que es una abstracción acerca de como operan 
				los componentes fundamentales de una computadora sin preocuparnos por los detalles 
				exactos o límites físicos. La misma debe cumplir con un par de características:
			</Text>
			<List>
				<ListItem>
					Cuenta con un procesador (CPU) de <i>potencia de cálculo infinita</i>. 
					El procesador, o CPU, es el componente que ejecuta las intrucciones de nuestro 
					programa <i>paso a paso</i> y en el orden en el que las va leyendo.
				</ListItem>
				<ListItem>
					Cuenta con una memoria principal (RAM) de <i>capacidad infinita</i> y 
					<i>tiempo de respuesta inmediato</i>. La memoria principal, o RAM, es el 
					componente que almacena de manera temporal las instrucciones y datos que el 
					procesador necesita para ejecutar los programas.
				</ListItem>
				<ListItem>
					Cuenta con un teclado y un monitor, que se suponen de <i>velocidad instantánea</i>.
					El teclado y el el monitor son el medio que tiene la computadora para interactuar 
					con el usuario. Por medio del teclado, el usuario es capaz de <i>introducir</i> 
					datos. Así mismo, el usuario es capaz de <i>visualizar</i> información a través 
					del monitor.<br/>
				</ListItem>
				<ListItem>
					Cuenta con almacenamiento secundario, ("disco"), de <i>capacidad infinita</i>. 
					El almacenamiento secundario, o disco, es capaz de, al igual que la RAM, almacenar 
					datos, con el detalle de que lo puede hacer de manera <i>permanente</i>. Aquí se 
					pueden guardar todo tipo de datos bajo un esquema de <i>archivos y directorios</i>. 
				</ListItem>
				<ListItem>
					Cuenta con un bus de <i>velocidad infinita</i>. El bus es el componente que 
					interconecta a los anteriores, pudiendo tranmitirse a través de él datos y 
					señales de control. Las señales de control, o <i>interrupciones</i>, son un 
					mecanismo por el cual otros componentes indican al procesador sus estados según 
					vayan cumpliendo con sus tareas. También pueden indicar a dichos componentes que 
					ejecuten instrucciones guardadas en la RAM o el estado del procesador.
				</ListItem>
			</List>
			<Text>
				Con estos componentes, podemos armar una computadora teórica que sea capaz de ejecutar 
				nuestros programas y al mismo tiempo dejarnos saber como funcionan, al menos a grandes rasgos, 
				las computadoras en la realidad. Veremos como crear programas sin la necesidad de saber un lenguaje 
				de programación en el siguiente capítulo "Algoritmia: Seudocódigo."
			</Text>
		</Frame>
	);
};

export default Page;
