

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.eabc7fa7.js","_app/immutable/chunks/scheduler.7c4769d9.js","_app/immutable/chunks/index.710e41fa.js","_app/immutable/chunks/singletons.9b39e6fb.js"];
export const stylesheets = [];
export const fonts = [];
