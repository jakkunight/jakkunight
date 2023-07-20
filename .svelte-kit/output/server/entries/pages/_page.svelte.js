import { c as create_ssr_component, v as validate_component } from "../../chunks/ssr.js";
import { H as Heading, T as Text } from "../../chunks/Text.js";
import { M as MainHeading } from "../../chunks/MainHeading.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(MainHeading, "MainHeading").$$render($$result, {}, {}, {
    default: () => {
      return `¡Maiteĩ!`;
    }
  })} ${validate_component(Heading, "Heading").$$render($$result, {}, {}, {
    default: () => {
      return `¿Jakku Night?`;
    }
  })} ${validate_component(Text, "Text").$$render($$result, {}, {}, {
    default: () => {
      return `¡Hola a todos! Me llamo <b data-svelte-h="svelte-dh1bg0">Jakku (ジャック)</b> y soy programador full-stack.`;
    }
  })} ${validate_component(Heading, "Heading").$$render($$result, {}, {}, {
    default: () => {
      return `¿Qué cosas te gustan hacer?`;
    }
  })} ${validate_component(Text, "Text").$$render($$result, {}, {}, {
    default: () => {
      return `Me gustan mucho ver anime, leer manga y jugar videojuegos.`;
    }
  })} ${validate_component(Heading, "Heading").$$render($$result, {}, {}, {
    default: () => {
      return `¿De dónde sos?`;
    }
  })} ${validate_component(Text, "Text").$$render($$result, {}, {}, {
    default: () => {
      return `De un país que no existe.`;
    }
  })} ${validate_component(Heading, "Heading").$$render($$result, {}, {}, {
    default: () => {
      return `¿Comida favorita?`;
    }
  })} ${validate_component(Text, "Text").$$render($$result, {}, {}, {
    default: () => {
      return `El <b data-svelte-h="svelte-q0c59y">soyo</b> y el <b data-svelte-h="svelte-gv1ywa">mbejú</b>.`;
    }
  })} ${validate_component(Heading, "Heading").$$render($$result, {}, {}, {
    default: () => {
      return `¿Bebida preferida?`;
    }
  })} ${validate_component(Text, "Text").$$render($$result, {}, {}, {
    default: () => {
      return `El <b data-svelte-h="svelte-1p5jnl1">tereré</b>, el <b data-svelte-h="svelte-xd5s6l">cocido</b>, y <b data-svelte-h="svelte-124232f">mate</b> (sobre todo si es dulce).`;
    }
  })} ${validate_component(Heading, "Heading").$$render($$result, {}, {}, {
    default: () => {
      return `¿Juego favorito?`;
    }
  })} ${validate_component(Text, "Text").$$render($$result, {}, {}, {
    default: () => {
      return `El Age of Mythology y el Genshin Impact.`;
    }
  })} ${validate_component(Heading, "Heading").$$render($$result, {}, {}, {
    default: () => {
      return `¿Anime favorito?`;
    }
  })} ${validate_component(Text, "Text").$$render($$result, {}, {}, {
    default: () => {
      return `No Game No Life (Sigo esperando la 2da temporada).`;
    }
  })} ${validate_component(Heading, "Heading").$$render($$result, {}, {}, {
    default: () => {
      return `¿A qué área de la programación te dedicás?`;
    }
  })} ${validate_component(Text, "Text").$$render($$result, {}, {}, {
    default: () => {
      return `Aunque al inicio me especialicé en desarrollo de videojuegos, pero ahora me dedico a la programación web full-stack con Express, React y MySQL.
	También manejo un poco ReactNative/Expo, C++, Python y bash script, y ahora estoy aprendiendo SvelteKit.
	Próximamente voy a estar estudiando un poco más de desarrollo en C/C++, MongoDB y Python Django.`;
    }
  })}`;
});
export {
  Page as default
};
