import React from "react";
import Frame from "../components/Frame";
import MainHeading from "../components/MainHeading";
import Heading from "../components/Heading";

const CoreConcepts = () => {
	return (
		<Frame>
			<MainHeading>
				¡Maiteĩ!
			</MainHeading>
			<p>
				¡Hola a todos! Mi nombre es <b>Jakku</b> (ジャック) y bienvenidos a mi página web.
			</p>
			<Heading>
				¿¡Qué rayos es esto!?
			</Heading>
			<p>
				Esto es, por así decirlo, mi página web personal. Sé que no es la más elaborada 
				del mundo, pero creo que es suficiente para permitirme expresarme con soltura y 
				sobriedad, propias de mí. Espero que les guste mucho y se diviertan viendo todo 
				lo que hay en este sitio.
			</p>
			<Heading>
				¿De qué hablás en esta sección?
			</Heading>
			<p>
				De todo un poco. La idea de "The Console Logs" es hablar de aquellos temas 
				que no estén estrictamente ligados a la informática o la programación.
			</p>
			<Heading>
				¿Qué podés contarnos acerca de vos?
			</Heading>
			<p>
				Soy paraguayo. Fan del asado (si es mbopi, mejor), el cocido, el tereré 
				(que me acompañan en mis jornadas <b>siempre</b>),
				el mate (me gusta dulce), el mbeju, la chipa, el soyo 
				(el de verdad, no el yrei que te intentan vender como soyo), 
				el manga, el anime, los videojuegos (como buen <i>otaku</i>) y una buena 
				charla.
			</p>
		</Frame>
	);
};

export default CoreConcepts;
