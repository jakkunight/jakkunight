import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Index = () => {
	return (
		<div className="text-lg text-gray-300 bg-black">
			<Header />
			<div className="w-full h-full p-4">
				<h1 className="text-4xl text-white m-2">
					Informática y Programación
				</h1>
				<h1 className="text-2xl text-white m-2">
					Introducción
				</h1>
				<p>
					Hace mucho que quiero escribir esto.
					Sin lugar a dudas la programación, y la informática en general, 
					cambió mucho mi manera de ver el mundo. Ahora todo me parece más 
					interesante y las problemáticas son un reto a mi habilidad para alcanzar
					soluciones. Sin importar el contexto, siempre estamos expuestos a la
					toma de decisiones. Hay muchos a quienes se les dificulta esta tarea, 
					pero tampoco son pocos los que las toman sin que les tiemble el pulso.
					Es por esto que como seres <i>racionales</i> nos inventamos una serie de 
					reglas para guiar dicho proceso y simplificarlo para no resultar estresante 
					para el lego. Este conjunto de reglas lo llamamos <b>lógica</b> y sirve 
					para guiar nuestras decisiones y, en consecuencia, nuestros actos hacia 
					aquello que es considerado "bueno y racional".
				</p>
				<p>
					
				</p>
			</div>
			<Footer />
		</div>
	);
};

export default Index;
