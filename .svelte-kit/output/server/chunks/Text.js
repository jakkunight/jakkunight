import { c as create_ssr_component, e as escape } from "./ssr.js";
const Heading = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { heading = "" } = $$props;
  if ($$props.heading === void 0 && $$bindings.heading && heading !== void 0)
    $$bindings.heading(heading);
  return `<h1 class="text-2xl text-white font-bold m-4">${heading ? `${escape(heading)}` : `${slots.default ? slots.default({}) : ``}`}</h1>`;
});
const Text = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="text-gray-300 text-lg m-4">${slots.default ? slots.default({}) : ``}</div>`;
});
export {
  Heading as H,
  Text as T
};
