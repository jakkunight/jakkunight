import { c as create_ssr_component, b as add_attribute, v as validate_component, e as escape } from "../../chunks/ssr.js";
import { H as Heading, T as Text } from "../../chunks/Text.js";
const SocialLink = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { link = "" } = $$props;
  let { media = null } = $$props;
  if ($$props.link === void 0 && $$bindings.link && link !== void 0)
    $$bindings.link(link);
  if ($$props.media === void 0 && $$bindings.media && media !== void 0)
    $$bindings.media(media);
  return `<div class="bg-gradient-to-tl from-sky-500 to-blue-800 aspect-square rounded-full h-16 w-min overflow-hidden border-4 border-double border-white"><a${add_attribute("href", link, 0)}><img${add_attribute("src", media, 0)} alt="media"></a></div>`;
});
const github = "/jakkunight/_app/immutable/assets/github.76b15e47.svg";
const discord = "/jakkunight/_app/immutable/assets/discord.11377313.svg";
const youtube = "/jakkunight/_app/immutable/assets/youtube.ff5d3d9d.svg";
const twitch = "/jakkunight/_app/immutable/assets/twitch.e8507ed6.svg";
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="flex flex-col flex-nowrap w-full h-max bg-blue-950 p-4 items-center justify-center text-center">${validate_component(Heading, "Heading").$$render($$result, {}, {}, {
    default: () => {
      return `¡Seguime en mis redes!`;
    }
  })} <div class="flex flex-nowrap flex-row w-full h-24 bg-blue-950 p-4 items-center justify-evenly">${validate_component(SocialLink, "SocialLink").$$render(
    $$result,
    {
      link: "https://github.com/jakkunight",
      media: github
    },
    {},
    {}
  )} ${validate_component(SocialLink, "SocialLink").$$render(
    $$result,
    {
      link: "https://discord.gg/8ZvqWatGYY",
      media: discord
    },
    {},
    {}
  )} ${validate_component(SocialLink, "SocialLink").$$render(
    $$result,
    {
      link: "https://m.youtube.com/channel/UCj9oLC2AaoHRqZffjXhOTLA",
      media: youtube
    },
    {},
    {}
  )} ${validate_component(SocialLink, "SocialLink").$$render(
    $$result,
    {
      link: "https://twitch.tv/jakku_night",
      media: twitch
    },
    {},
    {}
  )}</div></div>`;
});
const app = "";
const Avatar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="aspect-square rounded-full overflow-hidden w-16" data-svelte-h="svelte-415zwe"><img src="https://dthezntil550i.cloudfront.net/zc/latest/zc2004241320582840010962821/4d1e94ce-5340-4c51-a3b7-a58024737e66.png" alt="Jakku" class="relative bottom-2"></div>`;
});
const SelfCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="flex flex-row flex-nowrap justify-evenly items-center space-x-4">${validate_component(Avatar, "Avatar").$$render($$result, {}, {}, {})} <div>${validate_component(Heading, "Heading").$$render($$result, {}, {}, {
    default: () => {
      return `Jakku Night`;
    }
  })}</div></div>`;
});
const CollapsedMenu = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { heading } = $$props;
  if ($$props.heading === void 0 && $$bindings.heading && heading !== void 0)
    $$bindings.heading(heading);
  return `<div class="flex flex-row items-center justify-between w-full p-2">${validate_component(Heading, "Heading").$$render($$result, {}, {}, {
    default: () => {
      return `${escape(heading)}`;
    }
  })} <button class="text-2xl rounded-lg bg-blue-500 text-white aspect-square h-8">${`+`}</button></div> ${``}`;
});
const BASE_URL = "/jakkunight";
const TopicLink = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { link = "" } = $$props;
  let { topic = "" } = $$props;
  if ($$props.link === void 0 && $$bindings.link && link !== void 0)
    $$bindings.link(link);
  if ($$props.topic === void 0 && $$bindings.topic && topic !== void 0)
    $$bindings.topic(topic);
  return `<div class="w-full text-white text-xl justify-evenly m-4"><a${add_attribute("href", BASE_URL + link, 0)}><h3>${!topic ? `${slots.default ? slots.default({}) : ``}` : `${escape(topic)}`}</h3></a></div>`;
});
const ContentModal = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { heading = "" } = $$props;
  if ($$props.heading === void 0 && $$bindings.heading && heading !== void 0)
    $$bindings.heading(heading);
  return `<div><button class="rounded-lg p-2 border-double border-white border-2 flex justify-center items-center">${validate_component(Text, "Text").$$render($$result, {}, {}, {
    default: () => {
      return `Índice`;
    }
  })}</button> ${``}</div>`;
});
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="h-18 w-full bg-blue-950 flex flex-row justify-between items-center sticky top-0 flex-nowrap space-x-4 p-4">${validate_component(SelfCard, "SelfCard").$$render($$result, {}, {}, {})} ${validate_component(ContentModal, "ContentModal").$$render($$result, { heading: "Menú" }, {}, {
    default: () => {
      return `${validate_component(CollapsedMenu, "CollapsedMenu").$$render($$result, { heading: "The Console Logs" }, {}, {
        default: () => {
          return `${validate_component(TopicLink, "TopicLink").$$render($$result, { link: "/blog/the-console-logs/maitei" }, {}, {
            default: () => {
              return `¡Maiteĩ!`;
            }
          })} ${validate_component(TopicLink, "TopicLink").$$render(
            $$result,
            {
              link: "/blog/the-console-logs/nos-pasamos-a-svelte"
            },
            {},
            {
              default: () => {
                return `¡Nos pasamos a Svelte!`;
              }
            }
          )}`;
        }
      })}`;
    }
  })}</div>`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="bg-black text-gray-400 font-sans min-h-screen w-screen m-0 box-border p-0">${validate_component(Header, "Header").$$render($$result, {}, {}, {})} <div class="min-h-screen w-full">${slots.default ? slots.default({}) : ``}</div> ${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}</div>`;
});
export {
  Layout as default
};
