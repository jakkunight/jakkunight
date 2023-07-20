import { c as create_ssr_component, e as escape } from "./ssr.js";
const MainHeading = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { heading = "" } = $$props;
  if ($$props.heading === void 0 && $$bindings.heading && heading !== void 0)
    $$bindings.heading(heading);
  return `<h1 class="text-4xl text-white font-bold m-4">${heading ? `${escape(heading)}` : `${slots.default ? slots.default({}) : ``}`}</h1>`;
});
export {
  MainHeading as M
};
