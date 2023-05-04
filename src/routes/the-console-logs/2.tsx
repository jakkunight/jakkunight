import React from "react";
import Frame from "../../components/Frame";
import Heading from "../../components/Heading";
import MainHeading from "../../components/MainHeading";
import Text from "../../components/Text";
import Code from "../../components/Code";

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
                este mecanismo es innecesario. Sin embargo, PrismJS hace alteraciones <b>DIRECTAMENTE AL DOM</b>, esto es, crea en tiempo de ejecución elementos HTML sin haber pasado por 
                el preprocesamiento de ReactJS, que lo hace en un entorno virtual (el Virtual DOM), y luego hace los cambios necesarios en el DOM. Esto deja expuesto al usuario a ataques 
                como <b>XSS</b> (Cross-Site Scripting), que hacen que el navegador ejecute scripts maliciosos sin el consentimiento del usuario. Aunque es cierto que PrismJS lo "sanitriza", 
                el riesgo existe, y si se puede evitar, hay que hacerlo.
            </Text>
            <Text>
                Otra consecuencia directa del uso de esta librería, fue que el código se mostraba por encima del resto de componentes, incluyendo el modal de navegación, 
                de la página. Esto es porque, al actuar directamente sobre el DOM, React no puede adaptar la página al cambio y el contenido <b>"se sale de control"</b>. 
                Eso simplemente era inaceptable para mí, que tengo el trabajo de crear y mantener el sitio, sino que acababa con todas mis esperanzas de encontrar una herramienta 
                que simplifique mi tarea de desarrollar un visor de código decente... o hasta investigar más a fondo el asunto.
            </Text>
            <Heading>
                La importancia de leer la documentación
            </Heading>
            <Text>
                Cuando casi me doy por vencido, recordé que la documentación de PrismJS hacía mención varias veces a como funcionaba por dentro. 
                Decicí echar un vistazo rápido y no encontré nada. Literalmente. Nada. Pero tras una búsqueda con San Google, encontré una página 
                con una referencia a la API de la librería y encontré lo que buscaba. Resulta que PrismJS cuenta con una función de bajo nivel que 
                permite "tokenizar" el código según una definición gramatical específica. Como lo retornado es un array, con React se puede hacer un 
                procesado sobre la misma y generar los cambios correspondientes en el DOM virtual por medio de React, y sin correr el riesgo de sufrir 
                un ataque XSS. Entonces, al final, conseguí mi objetivo. para poder mostrarlo, pueden ver los resultados aquí mismo de como quedó mi 
                código:
            </Text>
            <Code lang="tsx" filename="Code.tsx">
                {
                    "import React, { ReactNode, useEffect, useState } from \"react\";" + "\n" +
                    'import Prism, { Token } from "prismjs";' + "\n" +
                    'import "prismjs/components/prism-markup";' + "\n" +
                    'import "prismjs/components/prism-markup-templating";' + "\n" +
                    'import "prismjs/components/prism-c";' + "\n" +
                    'import "prismjs/components/prism-cpp";' + "\n" +
                    'import "prismjs/components/prism-python";' + "\n" +
                    'import "prismjs/components/prism-java";' + "\n" +
                    'import "prismjs/components/prism-kotlin";' + "\n" +
                    'import "prismjs/components/prism-sql";' + "\n" +
                    'import "prismjs/components/prism-asciidoc";' + "\n" +
                    'import "prismjs/components/prism-arduino";' + "\n" +
                    'import "prismjs/components/prism-bash";' + "\n" +
                    'import "prismjs/components/prism-basic";' + "\n" +
                    'import "prismjs/components/prism-batch";' + "\n" +
                    'import "prismjs/components/prism-cmake";' + "\n" +
                    'import "prismjs/components/prism-cobol";' + "\n" +
                    'import "prismjs/components/prism-csharp";' + "\n" +
                    'import "prismjs/components/prism-dart";' + "\n" +
                    'import "prismjs/components/prism-django";' + "\n" +
                    'import "prismjs/components/prism-docker";' + "\n" +
                    'import "prismjs/components/prism-dot";' + "\n" +
                    'import "prismjs/components/prism-editorconfig";' + "\n" +
                    'import "prismjs/components/prism-ejs";' + "\n" +
                    'import "prismjs/components/prism-excel-formula";' + "\n" +
                    'import "prismjs/components/prism-fortran";' + "\n" +
                    'import "prismjs/components/prism-git";' + "\n" +
                    'import "prismjs/components/prism-glsl";' + "\n" +
                    'import "prismjs/components/prism-gml";' + "\n" +
                    'import "prismjs/components/prism-go";' + "\n" +
                    'import "prismjs/components/prism-go-module";' + "\n" +
                    'import "prismjs/components/prism-gradle";' + "\n" +
                    'import "prismjs/components/prism-graphql";' + "\n" +
                    'import "prismjs/components/prism-groovy";' + "\n" +
                    'import "prismjs/components/prism-handlebars";' + "\n" +
                    'import "prismjs/components/prism-haskell";' + "\n" +
                    'import "prismjs/components/prism-hlsl";' + "\n" +
                    'import "prismjs/components/prism-http";' + "\n" +
                    'import "prismjs/components/prism-json";' + "\n" +
                    'import "prismjs/components/prism-json5";' + "\n" +
                    'import "prismjs/components/prism-jsx";' + "\n" +
                    'import "prismjs/components/prism-latex";' + "\n" +
                    'import "prismjs/components/prism-lisp";' + "\n" +
                    'import "prismjs/components/prism-llvm";' + "\n" +
                    'import "prismjs/components/prism-log";' + "\n" +
                    'import "prismjs/components/prism-lua";' + "\n" +
                    'import "prismjs/components/prism-makefile";' + "\n" +
                    'import "prismjs/components/prism-markdown";' + "\n" +
                    'import "prismjs/components/prism-mongodb";' + "\n" +
                    'import "prismjs/components/prism-nginx";' + "\n" +
                    'import "prismjs/components/prism-objectivec";' + "\n" +
                    'import "prismjs/components/prism-odin";' + "\n" +
                    'import "prismjs/components/prism-opencl";' + "\n" +
                    'import "prismjs/components/prism-php";' + "\n" +
                    'import "prismjs/components/prism-php-extras";' + "\n" +
                    'import "prismjs/components/prism-powershell";' + "\n" +
                    'import "prismjs/components/prism-protobuf";' + "\n" +
                    'import "prismjs/components/prism-psl";' + "\n" +
                    'import "prismjs/components/prism-pug";' + "\n" +
                    'import "prismjs/components/prism-regex";' + "\n" +
                    'import "prismjs/components/prism-rest";' + "\n" +
                    'import "prismjs/components/prism-rust";' + "\n" +
                    'import "prismjs/components/prism-scheme";' + "\n" +
                    'import "prismjs/components/prism-shell-session";' + "\n" +
                    'import "prismjs/components/prism-swift";' + "\n" +
                    'import "prismjs/components/prism-systemd";' + "\n" +
                    'import "prismjs/components/prism-tsx";' + "\n" +
                    'import "prismjs/components/prism-typescript";' + "\n" +
                    'import "prismjs/components/prism-unrealscript";' + "\n" +
                    'import "prismjs/components/prism-uri";' + "\n" +
                    'import "prismjs/components/prism-vbnet";' + "\n" +
                    'import "prismjs/components/prism-vim";' + "\n" +
                    'import "prismjs/components/prism-visual-basic";' + "\n" +
                    'import "prismjs/components/prism-wasm";' + "\n" +
                    'import "prismjs/components/prism-wiki";' + "\n" +
                    'import "prismjs/components/prism-xml-doc";' + "\n" +
                    'import "prismjs/components/prism-yaml";' + "\n" +
                    '/* import "prismjs/plugins/line-numbers/prism-line-numbers.css";' + "\n" +
                    'import "prismjs/plugins/line-numbers/prism-line-numbers.js"; */' + "\n" +
                    '//import "prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard.js";' + "\n" +
                    'import "../prism.css";' + "\n" +
                    'const Code = ({ filename, lang, children }: { filename?: string, lang: string, children: string }) => {' + "\n" +
                        "\t" + 'Prism.languages["pseudocode"] = {' + "\n" +
                        "\t" + "\t" + "'comment': {" + "\n" +
                        "\t" + "\t" + "\t" + "pattern: /\\/\\/(?:[^\\r\\n\\\]|\\\\(?:\\r\\n?|\\n|(?![\\r\\n])))*|\\/\\*[\\s\\S]*?(?:\\*\\/|$)/," + "\n" +
                        "\t" + "\t" + "\t" + "greedy: true" + "\n" +
                        "\t" + "\t" + "}," + "\n" +
                        "\t" + "\t" + "'string': {" + "\n" +
                        "\t" + "\t" + "\t" + "'pattern': /(\\\"(.|\\S|\\d)*\\\"|\\\"(.|\\S|\\d)*\')/," + "\n" +
                        "\t" + "\t" + "\t" + "'greedy': true" + "\n" +
                        "\t" + "\t" + "}," + "\n" +
                        "\t" + "\t" + "'keyword': {" + "\n" +
                        "\t" + "\t" + "\t" + "'pattern': /\\b(INICIO|FIN|LEER|IMPRIMIR|SI|ENTONCES|SINO|FINSI|DESDE|HASTA|PASO|FINDESDE|PARA|FINPARA|MIENTRAS|FINMIENTRAS|HACER|REPETIR|FINREPETIR|EN CASO QUE|POR DEFECTO|INTENTAR|CAPTURAR|RETORNAR|CONTINUAR|TERMINAR|CLASE|PRIVADO|PUBLICO|CONTANTE|ENTERO|TEXTO|NUMERO|BOOLEANO|PAUSAR|DETENER POR|PUNTERO|REFERENCIA|IR A|FUNCION|FINFUNCION|SERVIDOR|BASE DE DATOS|ARCHIVO|DIRECTORIO|VARIABLE|IMPORTAR|EXPORTAR|CONSTRUCTOR|FECHA|HORA|EMAIL|EJECUTAR|SISTEMA|CONECTAR CON|TRAER|ACTUALIZAR|ENVIAR|BORRAR)\\b/," + "\n" +
                        "\t" + "\t" + "\t" + "'greedy': true" + "\n" +
                        "\t" + "\t" + "}," + "\n" +
                        "\t" + "\t" + "'operator': {" + "\n" +
                        "\t" + "\t" + "\t" + "'pattern': /[;\\+\\-\\*\\/\\<\\>\\?\\:\\!\\&\\%\\=\\(\\)\\[\\]\\{\\}]/," + "\n" +
                        "\t" + "\t" + "\t" + "'greedy': true" + "\n" +
                        "\t" + "\t" + "}," + "\n" +
                        "\t" + "\t" + "'boolean': {" + "\n" +
                        "\t" + "\t" + "\t" + "'pattern': /\\b(VERDADERO|FALSO)\\b/," + "\n" +
                        "\t" + "\t" + "\t" + "'greedy': true" + "\n" +
                        "\t" + "\t" + "}," + "\n" +
                        "\t" + "};" + "\n" +
                        "\t" + "/* 	const highlight = (item: Token, key: number) => {" + "\n" +
                        "\t" + "\t" + 'if(typeof item === "string"){' + "\n" +
                        "\t" + "\t" + "\t" + "return (" + "\n" +
                        "\t" + "\t" + "\t" + "\t" + "<span key={key}>" + "\n" +
                        "\t" + "\t" + "\t" + "\t" + "\t" + "{item}" + "\n" +
                        "\t" + "\t" + "\t" + "\t" + "</span>" + "\n" +
                        "\t" + "\t" + "\t" + ");" + "\n" +
                        "\t" + "\t" + "}" + "\n" +
                        "\t" + 'if(typeof item.content === "string"){' + "\n" +
                        "\t" + "\t" + "return (" + "\n" +
                        "\t" + "\t" + "\t" + "<span key={key} className={item.type} >" + "\n" +
                        "\t" + "\t" + "\t" + "\t" + "{item.content}" + "\n" +
                        "\t" + "\t" + "\t" + "</span>" + "\n" +
                        "\t" + "\t" + ");" + "\n" +
                        "\t" + "}" + "\n" +
                        "\t" + "if(typeof item.content === typeof Array<string | Token>){" + "\n" +
                        "\t" + "\t" + "return item.content.map(highlight);" + "\n" +
                        "\t" + "}" + "\n" +
                        "\t" + "}; */" + "\n" +

                        "let [tokenizedCode, setTokenizedCode] = useState<Array<Token | string>>([]);" + "\n" +

                        "useEffect(() => {" + "\n" +
                            "setTokenizedCode(Prism.tokenize(children, Prism.languages[lang]));" + "\n" +
                        "}, []);" + "\n" +

                        "return (" + "\n" +
                            '<div className="z-0 bg-black">' + "\n" +
                                '<div className="bg-black p-4 border-2">' + "\n" +
                                    "{" + "\n" +
                                        'filename ? "\"" + filename + "\":" : "Code:"' + "\n" +
                                    "}" + "\n" +
                                "</div>" + "\n" +
                                '<div className="bg-black border-2 p-4 line-numbers">' + "\n" +
                                    '<pre><code className={"font-[\'Source_Code_Pro\'] language-" + lang} >{' + "\n" +
                                        'tokenizedCode.map((item, key) => {' + "\n" +
                                            'if(typeof item === "string"){' + "\n" +
                                                'return (' + "\n" +
                                                    '<span key={key}>' + "\n" +
                                                        '{item}' + "\n" +
                                                    '</span>' + "\n" +
                                                ");" + "\n" +
                                            "}" + "\n" +
                                            'if(typeof item.content === "string"){' + "\n" +
                                                "return (" + "\n" +
                                                    '<span key={key} className={"token " + item.type} >' + "\n" +
                                                        '{item.content}' + "\n" +
                                                    '</span> '+ "\n" +
                                                ');' + "\n" +
                                            '}' + "\n" +
                                            'return null;' + "\n" +
                                        '})' + "\n" + 
                                    '}</code></pre>' + "\n" +
                                "</div>" + "\n" +
                            "</div>" + "\n" +
                        ");" + "\n" +
                    "};" + 
                    "\n" + 
                    "export default Code;"
                }
            </Code>
		</Frame>
	);
};

export default Page;
