import React from "react";
import Frame from "../../components/Frame";
import Heading from "../../components/Heading";
import MainHeading from "../../components/MainHeading";
import Text from "../../components/Text";

const Page = () => {
	return (
		<Frame>
			<MainHeading>
				¡Ya podemos mostrar código!
			</MainHeading>
			<Heading>
				Contexto
			</Heading>
			<Text>
                Hace un buen tiempo que quería implementar la funcionalidad para poder mostrar código con resaltado de sintaxis. 
                Hice muchas investigaciones hasta que dí con dos librerías que prometían resolver mis problemas: <b>HighlightJS y PrismJS</b>.
            </Text>
            <Heading>
                El problema del resaltado de sintaxis en los lenguajes de programación
            </Heading>
            <Text>
                ¿Cómo saben los editores de código que un "if" es definitivamente un "if"? ¿O que una suma es una suma? Esto es algo muy 
                interesante, pues es lo que da lugar a la construcción de las herramientas más poderosas de la programación: Los <b>Lenguajes de 
                Programación de alto nivel</b>, los <b>Compiladores</b> y los <b>Intérpretes</b>.
            </Text>
            <Text>
                El problema de los lenguajes de programación de alto nivel es que poseen una gramática, léxico y potencia léxica muy 
                diferentes al código máquina o lenguaje binario (ceros y unos). Con esto en mente, de alguna manera debemos poder describir 
                nuestro código para poder transformarlo en código máquina. Las herramientas utilizadas para dicha tarea son los compiladores e 
                intérpretes. Ellos, contando con la <i>definición gramatical y léxica</i> de un lenguaje en específico, lo pueden traducir sin problemas 
                a código máquina. En el caso de los intérpretes, éstos ejecutan el código a medida que lo leen, por lo que podemos inferir que 
                este proceso debe ser veloz y preciso.
            </Text>
            <Text>
                Según la documentación de <b><i>LLVM</i></b>, una librería de C/C++ utilizada para crear compiladores e intérpretes, como Clang o el compilador 
                de Rust, entre otros, los compiladores analizan el código y lo descomponen en "tokens", que luego utilizan para crear un Árbol 
                Sintáctico Abstrcto (AST, por sus siglas en inglés). Con esto, es imposible que confundan cosas como "if's" o "while's" entre sí. 
                Cabe resaltar que, según ejemplifican en su propia documentación, esto es un proceso hecho 
                "carácter a carácter", esto es, no se toman grupos de palabras, ni siquiera palabras, como unidad de análisis, sino que se toma un 
                carácter y se evalúa para saber si es válido o no, luego se lo coloca en un array que forma una palabra y se vuelve a hacer el análisis. 
            </Text>
            <Text>
                Con un proceso tan complejo para reconocer el código, debemos darnos cuenta de lo que editores como VS Code, PyCharm, CodeBlocks o IntelliJ Idea 
                hacen por detrás para poder resaltar la sintaxis de nuestro código sin errores. Esto incluso puede aplicar al corrector del texto predictivo en 
                los celulares en cierta medida. Pero, ¿Y qué hay de otros editores de código, como Micro, Vim, Nano y NeoVim? ¿Por qué muestran errores al resaltar
                la sintaxis en ciertos lenguajes si es que utilizan este proceso para hacer el resaltado? Pues la respuesta es que no lo hacen.
            </Text>
            <Heading>
                RegEx: La alternativa "fácil" al análisis léxico
            </Heading>
            <Text>
                Hay ciertos editores que muestran errores en su resaltado de código, incluso cuando el código escrito es válido. Esto es porque en lugar de analizar 
                el código como vimos antes, utilizan <b>RegEx</b> para buscar patrones en el código y hacer el resaltado sin mucha complicación. RegEx es un sistema por medio 
                del cual se pueden escribir <i>patrones de texto</i>, en lugar de textos específicos como tal. Por ejemplo, si deseara obtener una lista de personas cuyo nombre 
                inicie por la "A", sería tormentoso ver analizar cada nombre de la lista, descomponerlo en un array, y hacer las comparaciones. Con RegEx, sólo debo ver si 
                el texto en cuestión encaja en el patrón definido y listo.
            </Text>
            <Text>
                Esa facilidad y su parecido con el análisis léxico de un compilador, hacen a RegEx un favorito de aquellos editores que buscan ser ligeros y de bajo consumo de 
                recursos, como los antes mencionados, o para gente con poco tiempo de programar un lexer simple para el cometido. Da la casualidad de que HighlightJS y PrismJS 
                pertenecen a esta última categoría.
            </Text>
            <Heading>
                HighlightJS: ¡Desactualizado!
            </Heading>
            <Text>
                Pues sí, HighlightJS depende de otras librerías que son incompatibles con las nuevas versiones de NodeJS y ReactJS, así que queda descartada.
            </Text>
            <Heading>
                PrismJS: Tres dolores de cabeza
            </Heading>
            <Text>
                ¿Y qué hay de PrismJS? Pues la verdad... funcionó bien... hasta que dí con bugs. El primero era que no se aplicaba correctamente el resaltado. Esto fue cosa mía, 
                ya que olvidé importar las gramáticas que iba a utilizar. El segundo bug, fue respecto al RegEx utilizado para deinir nuevos lenuajes (el Seudocódigo a utilizar 
                en la sección de "Algoritmia"), ya que en JavaScript se utilizan otras convenciones de RegEx y no estaba muy al tanto de ello. Luego, llegó el peor de bug de todos.
            </Text>
            <Heading>
                ¿Una mala combinación y XSS?
            </Heading>
            <Text>
                Para los que estén menos familiarizados con el tema, React posee un mecanismo mediante el cual monitoriza si hay cambios o no en un componente, llamado <i>estado</i>. 
                Cada componente puede tener una o más variables que determinan su estado. Como el blog es un sitio en el que la información es más bien estática y no dinámica, el uso de 
                este mecanismo es innecesario. Sin embargo, PrismJS hace alteraciones <b>DIRECTAMENTE AL DOM</b>, esto
            </Text>
		</Frame>
	);
};

export default Page;
