import { c as create_ssr_component, b as add_attribute, v as validate_component } from "../../chunks/ssr.js";
const Image = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { src = null } = $$props;
  let { alt = "" } = $$props;
  if ($$props.src === void 0 && $$bindings.src && src !== void 0)
    $$bindings.src(src);
  if ($$props.alt === void 0 && $$bindings.alt && alt !== void 0)
    $$bindings.alt(alt);
  return `<img${add_attribute("src", src, 0)}${add_attribute("alt", alt, 0)} class="w-full h-auto">`;
});
const JakkuLogo = "/_app/immutable/assets/jakku-tree.fea023b4.png";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Image, "Image").$$render($$result, { src: JakkuLogo, alt: "" }, {}, {})}`;
});
export {
  Page as default
};
