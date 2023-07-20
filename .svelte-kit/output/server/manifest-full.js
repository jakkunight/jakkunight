export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".nojekyll","favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.d87d7e31.js","app":"_app/immutable/entry/app.3a49e73f.js","imports":["_app/immutable/entry/start.d87d7e31.js","_app/immutable/chunks/scheduler.7c4769d9.js","_app/immutable/chunks/singletons.1ccabf9e.js","_app/immutable/entry/app.3a49e73f.js","_app/immutable/chunks/scheduler.7c4769d9.js","_app/immutable/chunks/index.710e41fa.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/blog/the-console-logs/maitei",
				pattern: /^\/blog\/the-console-logs\/maitei\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/blog/the-console-logs/nos-pasamos-a-svelte",
				pattern: /^\/blog\/the-console-logs\/nos-pasamos-a-svelte\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
