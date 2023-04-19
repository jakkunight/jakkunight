import React from "react";
import Frame from "../components/Frame";
import MainHeading from "../components/MainHeading";
import Heading from "../components/Heading";
import Text from "../components/Text";

const Index = () => {
	return (
		<Frame>
			<MainHeading>
				¡Maiteĩ!
			</MainHeading>
			<Text>
				¡Hola a todos! Mi nombre es <b>Jakku</b> (ジャック) y bienvenidos a mi página web.
			</Text>
			<Heading>
				¿¡Qué rayos es esto!?
			</Heading>
			<Text>
				Esto es, por así decirlo, mi página web personal. Sé que no es la más elaborada 
				del mundo, pero creo que es suficiente para permitirme expresarme con soltura y 
				sobriedad, propias de mí. Espero que les guste mucho y se diviertan viendo todo 
				lo que hay en este sitio.
			</Text>
			<Heading>
				¿De qué hablás en esta sección?
			</Heading>
			<Text>
				De todo un poco. La idea de "The Console Logs" es hablar de aquellos temas 
				que no estén estrictamente ligados a la informática o la programación.
			</Text>
			<Heading>
				¿Qué podés contarnos acerca de vos?
			</Heading>
			<Text>
				Soy paraguayo. Fan del asado (si es mbopi, mejor), el cocido, el tereré 
				(que me acompañan en mis jornadas <b>siempre</b>),
				el mate (me gusta dulce), el mbeju, la chipa, el soyo 
				(el de verdad, no el yrei que te intentan vender como soyo), 
				el manga, el anime, los videojuegos (como buen <i>otaku</i>) y una buena 
				charla.
			</Text>
		</Frame>
	);
};

export default Index;
