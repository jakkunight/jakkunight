import React from "react";
import Frame from "../../components/Frame";
import Heading from "../../components/Heading";
import MainHeading from "../../components/MainHeading";
import Text from "../../components/Text";

const Page = () => {
	return (
		<Frame>
			<MainHeading>
				¡Un Nuevo Comienzo!
			</MainHeading>
			<Heading>
				Contexto
			</Heading>
			<Text>
				¡Maiteĩ!En Paraguay hay un par de cosas que son extrañas para la gente. Una de ellas es 
				el desánimo o el "tirar la toalla" con las cosas de la vida. Hay una serie de 
				cosas que, dicen los fans de Aristóteles, son imprescindibles para alcanzar la 
				felicidad, tales como la belleza, las riquezas, buenos amigos, sabiduría, etc.
			</Text> 
			<Text>
				Supongo que la gente de mi país está bastante acostumbrada a desearle a otros 
				dicha felicidad. Para bien o para mal, esto también incluye a mi familia.
				Resulta que yo, a diferencia de ellos, soy más epicureo. Para mí la felicidad no 
				se halla en lo anterior, sino en vivir sin más dolor del necesario, de manera 
				placentera, como diría el bueno de Epicuro. Una visión bastante menos 
				materialista desde ese punto de vista.
			</Text>
			<Text>
				El caso es que desde que terminé el colegio, todo fue bastante mal desde un 
				punto de vista aristotélico. No pude aprobar el examen de ingreso a la universidad. 
				Tampoco tenía trabajo y mi relación con la familia no hacía más que empeorar. 
				Para colmo, me sentía más desanimado de lo normal. Nada era prometedor hasta que 
				me ofrecieron dar charlas y clases acerca de un área en la que tengo puesta la mira desde 
				que inicié en la programación: <b>Los videojuegos</b>. No tengo un PC propio 
				desde el cual poder programar juegos u otras aplicaciones muy pesadas. Todo lo 
				hago desde lo que se conoce como un <b>chroot Linux</b>, que es una manera de 
				aprovechar las similitudes entre el kernel de Android y el kernel de Linux para 
				simular un sistema Linux y desde ahí programar con una tablet. Hay algunas 
				ventajas interesantes, pero las limitaciones superan con creces 
				dichas ventajas y hacen que el tiempo que a una persona, con una PC bien montada, le tome 
				aprender algún lenguaje o tecnología, tarde más en poder aprenderla o bien no puedo por 
				las limitantes de mi <i>entorno de desarrollo</i>. A eso hay que agregar que no tengo 
				los medios para conseguir un mejor setup y menos para capacitarme más en el área en la 
				que tengo puesta la mira.
			</Text>
			<Heading>
				¿Un salvavidas?
			</Heading>
			<Text>
				Hace como unos cinco meses me enteré de un concurso que ofrece la entidad 
				conocida como la ANDE. Era acerca de un programa de capacitación para "programadores
				 de sistemas" (a saber lo que ellos entiendan por programador de sistemas). El 
				programa consiste en una formación teórica y una formación práctica en las instalaciones 
				de la institución, con una pequeña remuneración durante un para nada corto tiempo de 
				<b> tres años</b>.
			</Text>
			<Text>
				La cuestión es que tengo mis dudas. En los detalles del programa sólo decían que 
				la formación incluye la creación y el mantenimiento de bases de datos (algo de lo 
				que planeo hablar en otra sección a futuro) y un lenguaje de programación "compilado".
				Según rumores, el motor de bases de datos probablemente sea DB2, pero de las versiones 
				viejas, y el susodicho lenguaje compilado sea COBOL.
			</Text>
			<Text>
				Como es sabido entre programadores, COBOL no es un lenguaje especialmente popular (aunque 
				no por eso deje de ser bueno y confiable, como C o C++). Además, DB2 no parece tener más 
				aplicación que el área empresarial y no es demasiado popular (MySQL y MS Server son más 
				popuares y por ende poseen más soporte). En ese sentido, tengo mis dudas.
			</Text>
			<Text>
				Otra posibilidad es que el programa se base en Java y MySQL, dos viejos conocidos míos 
				desde que estuve en el colegio, por lo que no me servirían para lograr mis objetivos. 
				Otra posibilidad, que es la que más me gusta de entre todas, es que el stack se componga 
				de C/C++ y DB2/MySQL (pues C++ aún es usado en la industria de los videojuegos, aunque 
				Rust vaya tomando poco a poco ese lugar).
			</Text>
			<Text>
				En cualquier caso, más allá de las prácticas y el dinero, no me parece que vaya a ganar algo 
				útil para mi camino. Considero que era mucho mejor el dar las charlas antes mencionadas, pues 
				te obligan a actualizarte y estar al día con las tendencias y aprender nuevas cosas (en mi caso 
				Python y Scratch para enseñar programación).
			</Text>
			<Heading>
				El desafío
			</Heading>
			<Text>
				Como mencioné anteriormente, necesito el dinero y la "certificación" que da dicha institución 
				para poder calmar las tensiones familiares y cumplir con la sociedad en ese sentido. Pero, al menos, 
				voy a esforzarme para poder sacarle el máximo provecho a estos tres años que se vienen.
			</Text>
			<Text>
				Durante ese tiempo, tengo planeado escribir acerca de todo lo que vea y aprenda... además de 
				cumplir con mi trabajo como profesor a través de este medio. Espero que mis alumnos no sientan que 
				los abandono. Simplemente no tengo muchas más opciones. Las pocas que tenía, se esfumaron con el 
				tema del concurso. No hay vuelta atrás. Espero que esto salga bien y que el esfuerzo valga la pena.
			</Text>
			<Heading>
				Conclusión
			</Heading>
			<Text>
				Espero que disfruten esta página tanto como yo. No sé lo que me depara el futuro, pero sea lo que sea 
				no me voy a rendir. Voy a seguir persiguiendo mi sueño de ser un desarrollador de videojuegos. 
				Hasta entonces, me tendré que conformar con lo que tengo. Nos vemos pronto en la nueva sección 
				titulada "Algoritmia: El corazón de la Programación". Jahechapeve!
			</Text>
		</Frame>
	);
};

export default Page;
