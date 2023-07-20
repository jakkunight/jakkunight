import { c as create_ssr_component, v as validate_component } from "../../../../../chunks/ssr.js";
import { H as Heading, T as Text } from "../../../../../chunks/Text.js";
import { M as MainHeading } from "../../../../../chunks/MainHeading.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(MainHeading, "MainHeading").$$render($$result, {}, {}, {
    default: () => {
      return `¡Nos pasamos a Svelte!`;
    }
  })} ${validate_component(Heading, "Heading").$$render($$result, {}, {}, {
    default: () => {
      return `¿Mucho tiempo sin actualizarme?`;
    }
  })} ${validate_component(Text, "Text").$$render($$result, {}, {}, {
    default: () => {
      return `Honestamente creo que ya hace un buen tiempo que no actualizo el blog (demasiado). Hay mucho desorden. El sitio cargaba despacio y no 
	me sentía cómodo escribiendo y actualizando el contenido. Cuando tu código empieza a ser un <i data-svelte-h="svelte-1o0fylp">spagheti</i>, es cuando hay que hacer 
	un alto y ponerse a considerar otra solución mejor al problema. Acá es donde Svelte entra en acción.`;
    }
  })} ${validate_component(Heading, "Heading").$$render($$result, {}, {}, {
    default: () => {
      return `¿Por qué Svlete?`;
    }
  })} ${validate_component(Text, "Text").$$render($$result, {}, {}, {
    default: () => {
      return `Como muchos sabrán, este sitio está hecho originalmente en React, un framework muy útil de JS para crear aplicaciones web de 
	<i data-svelte-h="svelte-2s3uet">una sóla página</i> (SPA, por sus siglas en inglés). La principal desventaja de React es que intenta cargar todo el contenido 
	de la página mediante un archivo gigante de JS que ralentiza la carga inicial de la página, lo que es muy bueno si el contenido 
	se genera de manera dinámica o se requieren hacer múltiples actualizaciones desde el cliente. Esta no es la situación de un blog, 
	donde la mayor parte del contenido es estático y no se requiere de ningún tipo de información adicional (al menos en los más simples).
	El otro problema que tuve, como comenté en otra ocasión, es el poder mostrar código, una característica a la cual le encontré, 
	otra vez, un error. Me temo que me va a tomar un tiempo arreglar ese fallo, pero de momento, voy a deshabilitarlo y simplemente 
	voy a mostrar código de forma plana, sin resaltado de sintaxis.`;
    }
  })} ${validate_component(Text, "Text").$$render($$result, {}, {}, {
    default: () => {
      return `Sin embargo, hace un par de años, un framework de JS comenzó a ganar mucha popularidad y fama de ser &quot;fácil&quot;. Dicho framework es 
	Svelte, y es todo lo que un desarrollador web necesita y más.`;
    }
  })} ${validate_component(Text, "Text").$$render($$result, {}, {}, {
    default: () => {
      return `Para ponernos en contexto, mientras otros frameworks usan lo que se llama un <b data-svelte-h="svelte-1hl1sdi">bundler</b>, un programa que se encarga de 
	empaquetar el código que usa, por ejemplo React, a HTML, CSS y JS planos que entienda el navegador, Svelte usa un compilador. 
	En general los bundlers son suficientes para poder empaquetar y generar código desplegable en algún servicio de hosting, 
	pero son lentos e ineficientes, sobre todo si el framework utilizado es React. Pero como Svelte usa un compilador, es capaz de 
	eliminar código redundante y generar código desplegable más rápido y más liviano que otros frameworks.`;
    }
  })} ${validate_component(Text, "Text").$$render($$result, {}, {}, {
    default: () => {
      return `Otra ventaja de Svelte es que es absurdamente amigable e intuitiva con los principiantes. No es necesario aprender mucho acerca de 
	JS para poder hacer algo. El código de Svelte se asemeja mucho al HTML/CSS/JS puros que aprende el principiante para programar 
	páginas web.`;
    }
  })} ${validate_component(Text, "Text").$$render($$result, {}, {}, {
    default: () => {
      return `La última ventaja importante de Svelte frente a otros framework es su flexibilidad. Mientras que otros frameworks sólo se enfocan en 
	server-side-rendering (SSR), SPA&#39;s, o multi-page-applications (MPA&#39;s), Svelte, al ser compilado, puede adaptarse a cualquier modelo 
	sin necesidad de cambiar el código o hacer nada mágico. Basta con añadir un plugin, configurarlo y desplegar el código de producción.`;
    }
  })} ${validate_component(Heading, "Heading").$$render($$result, {}, {}, {
    default: () => {
      return `¿Qué va a pasar con el proyecto?`;
    }
  })} ${validate_component(Text, "Text").$$render($$result, {}, {}, {
    default: () => {
      return `El proceso de migración ya empezó. De hecho, pueden notar muy fácilmente los cambios. De momento sigo migrando el contenido que ya 
	existía en el blog, pero tengo bastantes cosas que quiero añadir y modificar y por eso voy avanzando muy lentamente. Además, no 
	lo tuve particularmente fácil estos meses, así que voy a seguir un poco retrasado con el blog.`;
    }
  })} ${validate_component(Text, "Text").$$render($$result, {}, {}, {
    default: () => {
      return `Últimamente estoy más activo en YouTube, por lo que pueden ir y suscribirse si es que todavía no lo hicieron. También tengo pensado 
	ser algo más activo en Discord y hacer streaming más de seguido. Espero poder con todo lo que me propongo. ¡Jajohechapevé!`;
    }
  })}`;
});
export {
  Page as default
};
