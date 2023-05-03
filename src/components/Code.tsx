import React, { ReactNode, useEffect, useState } from "react";
import Prism, { Token } from "prismjs";
import "prismjs/components/prism-markup";
import "prismjs/components/prism-markup-templating";
import "prismjs/components/prism-c";
import "prismjs/components/prism-cpp";
import "prismjs/components/prism-python";
import "prismjs/components/prism-java";
import "prismjs/components/prism-kotlin";
import "prismjs/components/prism-sql";
import "prismjs/components/prism-asciidoc";
import "prismjs/components/prism-arduino";
import "prismjs/components/prism-bash";
import "prismjs/components/prism-basic";
import "prismjs/components/prism-batch";
import "prismjs/components/prism-cmake";
import "prismjs/components/prism-cobol";
import "prismjs/components/prism-csharp";
import "prismjs/components/prism-dart";
import "prismjs/components/prism-django";
import "prismjs/components/prism-docker";
import "prismjs/components/prism-dot";
import "prismjs/components/prism-editorconfig";
import "prismjs/components/prism-ejs";
import "prismjs/components/prism-excel-formula";
import "prismjs/components/prism-fortran";
import "prismjs/components/prism-git";
import "prismjs/components/prism-glsl";
import "prismjs/components/prism-gml";
import "prismjs/components/prism-go";
import "prismjs/components/prism-go-module";
import "prismjs/components/prism-gradle";
import "prismjs/components/prism-graphql";
import "prismjs/components/prism-groovy";
import "prismjs/components/prism-handlebars";
import "prismjs/components/prism-haskell";
import "prismjs/components/prism-hlsl";
import "prismjs/components/prism-http";
import "prismjs/components/prism-json";
import "prismjs/components/prism-json5";
import "prismjs/components/prism-jsx";
import "prismjs/components/prism-latex";
import "prismjs/components/prism-lisp";
import "prismjs/components/prism-llvm";
import "prismjs/components/prism-log";
import "prismjs/components/prism-lua";
import "prismjs/components/prism-makefile";
import "prismjs/components/prism-markdown";
import "prismjs/components/prism-mongodb";
import "prismjs/components/prism-nginx";
import "prismjs/components/prism-objectivec";
import "prismjs/components/prism-odin";
import "prismjs/components/prism-opencl";
import "prismjs/components/prism-php";
import "prismjs/components/prism-php-extras";
import "prismjs/components/prism-powershell";
import "prismjs/components/prism-protobuf";
import "prismjs/components/prism-psl";
import "prismjs/components/prism-pug";
import "prismjs/components/prism-regex";
import "prismjs/components/prism-rest";
import "prismjs/components/prism-rust";
import "prismjs/components/prism-scheme";
import "prismjs/components/prism-shell-session";
import "prismjs/components/prism-swift";
import "prismjs/components/prism-systemd";
import "prismjs/components/prism-tsx";
import "prismjs/components/prism-typescript";
import "prismjs/components/prism-unrealscript";
import "prismjs/components/prism-uri";
import "prismjs/components/prism-vbnet";
import "prismjs/components/prism-vim";
import "prismjs/components/prism-visual-basic";
import "prismjs/components/prism-wasm";
import "prismjs/components/prism-wiki";
import "prismjs/components/prism-xml-doc";
import "prismjs/components/prism-yaml";
/* import "prismjs/plugins/line-numbers/prism-line-numbers.css";
import "prismjs/plugins/line-numbers/prism-line-numbers.js"; */
//import "prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard.js";
import "../prism.css";

const Code = ({ filename, lang, children }: { filename?: string, lang: string, children: string }) => {

	Prism.languages["pseudocode"] = {
		'comment': {
			pattern: /\/\/(?:[^\r\n\\]|\\(?:\r\n?|\n|(?![\r\n])))*|\/\*[\s\S]*?(?:\*\/|$)/,
			greedy: true
		},
		'string': {
			'pattern': /(\"(.|\S|\d)*\"|\"(.|\S|\d)*\')/,
			'greedy': true
		},
		'keyword': {
			'pattern': /\b(INICIO|FIN|LEER|IMPRIMIR|SI|ENTONCES|SINO|FINSI|DESDE|HASTA|PASO|FINDESDE|PARA|FINPARA|MIENTRAS|FINMIENTRAS|HACER|REPETIR|FINREPETIR|EN CASO QUE|POR DEFECTO|INTENTAR|CAPTURAR|RETORNAR|CONTINUAR|TERMINAR|CLASE|PRIVADO|PUBLICO|CONTANTE|ENTERO|TEXTO|NUMERO|BOOLEANO|PAUSAR|DETENER POR|PUNTERO|REFERENCIA|IR A|FUNCION|FINFUNCION|SERVIDOR|BASE DE DATOS|ARCHIVO|DIRECTORIO|VARIABLE|IMPORTAR|EXPORTAR|CONSTRUCTOR|FECHA|HORA|EMAIL|EJECUTAR|SISTEMA|CONECTAR CON|TRAER|ACTUALIZAR|ENVIAR|BORRAR)\b/,
			'greedy': true
		},
		'operator': {
			'pattern': /[;\+\-\*\/\<\>\?\:\!\&\%\=\(\)\[\]\{\}]/,
			'greedy': true
		},
		'boolean': {
			'pattern': /\b(VERDADERO|FALSO)\b/,
			'greedy': true
		},
	};

/* 	const highlight = (item: Token, key: number) => {
		if(typeof item === "string"){
			return (
				<span key={key}>
					{item}
				</span>
			);
		}
		if(typeof item.content === "string"){
			return (
				<span key={key} className={item.type} >
					{item.content}
				</span>
			);
		}
		if(typeof item.content === typeof Array<string | Token>){
			return item.content.map(highlight);
		}
	}; */

	let [tokenizedCode, setTokenizedCode] = useState<Array<Token | string>>([]);

	useEffect(() => {
		setTokenizedCode(Prism.tokenize(children, Prism.languages[lang]));
	}, []);

	return (
		<div className="z-0 bg-black">
			<div className="bg-black p-4 border-2">
				{
					filename ? "\"" + filename + "\":" : "Code:"
				}
			</div>
			<div className="bg-black border-2 p-4 line-numbers">
				<pre><code className={"font-['Source_Code_Pro'] language-" + lang} >{
					tokenizedCode.map((item, key) => {
						if(typeof item === "string"){
							return (
								<span key={key}>
									{item}
								</span>
							);
						}
						if(typeof item.content === "string"){
							return (
								<span key={key} className={"token " + item.type} >
									{item.content}
								</span>
							);
						}
						return null;
					})					
				}</code></pre>
			</div>
		</div>
	);
};

export default Code;
