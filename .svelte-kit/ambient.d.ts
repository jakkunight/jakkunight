
// this file is generated — do not edit it


/// <reference types="@sveltejs/kit" />

/**
 * Environment variables [loaded by Vite](https://vitejs.dev/guide/env-and-mode.html#env-files) from `.env` files and `process.env`. Like [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), this module cannot be imported into client-side code. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://kit.svelte.dev/docs/configuration#env) (if configured).
 * 
 * _Unlike_ [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), the values exported from this module are statically injected into your bundle at build time, enabling optimisations like dead code elimination.
 * 
 * ```ts
 * import { API_KEY } from '$env/static/private';
 * ```
 * 
 * Note that all environment variables referenced in your code should be declared (for example in an `.env` file), even if they don't have a value until the app is deployed:
 * 
 * ```
 * MY_FEATURE_FLAG=""
 * ```
 * 
 * You can override `.env` values from the command line like so:
 * 
 * ```bash
 * MY_FEATURE_FLAG="enabled" npm run dev
 * ```
 */
declare module '$env/static/private' {
	export const SHELL: string;
	export const SESSION_MANAGER: string;
	export const WINDOWID: string;
	export const USER_ZDOTDIR: string;
	export const QT_ACCESSIBILITY: string;
	export const COLORTERM: string;
	export const XDG_CONFIG_DIRS: string;
	export const XDG_SESSION_PATH: string;
	export const NVM_INC: string;
	export const XDG_MENU_PREFIX: string;
	export const TERM_PROGRAM_VERSION: string;
	export const POWERSHELL_UPDATECHECK: string;
	export const ANDROID_TOOLCHAIN: string;
	export const LANGUAGE: string;
	export const NODE: string;
	export const LESS_TERMCAP_se: string;
	export const LESS_TERMCAP_so: string;
	export const POWERSHELL_TELEMETRY_OPTOUT: string;
	export const SSH_AUTH_SOCK: string;
	export const DOTNET_CLI_TELEMETRY_OPTOUT: string;
	export const npm_config_local_prefix: string;
	export const DESKTOP_SESSION: string;
	export const SSH_AGENT_PID: string;
	export const EDITOR: string;
	export const GTK_MODULES: string;
	export const XDG_SEAT: string;
	export const PWD: string;
	export const XDG_SESSION_DESKTOP: string;
	export const LOGNAME: string;
	export const QT_QPA_PLATFORMTHEME: string;
	export const XDG_SESSION_TYPE: string;
	export const PANEL_GDK_CORE_DEVICE_EVENTS: string;
	export const _: string;
	export const XAUTHORITY: string;
	export const VSCODE_GIT_ASKPASS_NODE: string;
	export const XDG_GREETER_DATA_DIR: string;
	export const COMMAND_NOT_FOUND_INSTALL_PROMPT: string;
	export const VSCODE_INJECTION: string;
	export const HOME: string;
	export const LANG: string;
	export const LS_COLORS: string;
	export const XDG_CURRENT_DESKTOP: string;
	export const npm_package_version: string;
	export const GIT_ASKPASS: string;
	export const XDG_SEAT_PATH: string;
	export const CHROME_DESKTOP: string;
	export const NVM_DIR: string;
	export const VSCODE_GIT_ASKPASS_EXTRA_ARGS: string;
	export const XDG_SESSION_CLASS: string;
	export const TERM: string;
	export const LESS_TERMCAP_mb: string;
	export const npm_package_name: string;
	export const LESS_TERMCAP_me: string;
	export const LESS_TERMCAP_md: string;
	export const ZDOTDIR: string;
	export const USER: string;
	export const VSCODE_GIT_IPC_HANDLE: string;
	export const COLORFGBG: string;
	export const VISUAL: string;
	export const DISPLAY: string;
	export const npm_lifecycle_event: string;
	export const LESS_TERMCAP_ue: string;
	export const SHLVL: string;
	export const NVM_CD_FLAGS: string;
	export const LESS_TERMCAP_us: string;
	export const XDG_VTNR: string;
	export const XDG_SESSION_ID: string;
	export const npm_config_user_agent: string;
	export const npm_execpath: string;
	export const XDG_RUNTIME_DIR: string;
	export const npm_package_json: string;
	export const BUN_INSTALL: string;
	export const VSCODE_GIT_ASKPASS_MAIN: string;
	export const QT_AUTO_SCREEN_SCALE_FACTOR: string;
	export const XDG_DATA_DIRS: string;
	export const GDK_BACKEND: string;
	export const PATH: string;
	export const GDMSESSION: string;
	export const ORIGINAL_XDG_CURRENT_DESKTOP: string;
	export const DBUS_SESSION_BUS_ADDRESS: string;
	export const NVM_BIN: string;
	export const _JAVA_OPTIONS: string;
	export const npm_node_execpath: string;
	export const OLDPWD: string;
	export const TERM_PROGRAM: string;
	export const NODE_ENV: string;
}

/**
 * Similar to [`$env/static/private`](https://kit.svelte.dev/docs/modules#$env-static-private), except that it only includes environment variables that begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Values are replaced statically at build time.
 * 
 * ```ts
 * import { PUBLIC_BASE_URL } from '$env/static/public';
 * ```
 */
declare module '$env/static/public' {
	export const PUBLIC_BASE_PATH: string;
}

/**
 * This module provides access to runtime environment variables, as defined by the platform you're running on. For example if you're using [`adapter-node`](https://github.com/sveltejs/kit/tree/master/packages/adapter-node) (or running [`vite preview`](https://kit.svelte.dev/docs/cli)), this is equivalent to `process.env`. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://kit.svelte.dev/docs/configuration#env) (if configured).
 * 
 * This module cannot be imported into client-side code.
 * 
 * ```ts
 * import { env } from '$env/dynamic/private';
 * console.log(env.DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 * 
 * > In `dev`, `$env/dynamic` always includes environment variables from `.env`. In `prod`, this behavior will depend on your adapter.
 */
declare module '$env/dynamic/private' {
	export const env: {
		SHELL: string;
		SESSION_MANAGER: string;
		WINDOWID: string;
		USER_ZDOTDIR: string;
		QT_ACCESSIBILITY: string;
		COLORTERM: string;
		XDG_CONFIG_DIRS: string;
		XDG_SESSION_PATH: string;
		NVM_INC: string;
		XDG_MENU_PREFIX: string;
		TERM_PROGRAM_VERSION: string;
		POWERSHELL_UPDATECHECK: string;
		ANDROID_TOOLCHAIN: string;
		LANGUAGE: string;
		NODE: string;
		LESS_TERMCAP_se: string;
		LESS_TERMCAP_so: string;
		POWERSHELL_TELEMETRY_OPTOUT: string;
		SSH_AUTH_SOCK: string;
		DOTNET_CLI_TELEMETRY_OPTOUT: string;
		npm_config_local_prefix: string;
		DESKTOP_SESSION: string;
		SSH_AGENT_PID: string;
		EDITOR: string;
		GTK_MODULES: string;
		XDG_SEAT: string;
		PWD: string;
		XDG_SESSION_DESKTOP: string;
		LOGNAME: string;
		QT_QPA_PLATFORMTHEME: string;
		XDG_SESSION_TYPE: string;
		PANEL_GDK_CORE_DEVICE_EVENTS: string;
		_: string;
		XAUTHORITY: string;
		VSCODE_GIT_ASKPASS_NODE: string;
		XDG_GREETER_DATA_DIR: string;
		COMMAND_NOT_FOUND_INSTALL_PROMPT: string;
		VSCODE_INJECTION: string;
		HOME: string;
		LANG: string;
		LS_COLORS: string;
		XDG_CURRENT_DESKTOP: string;
		npm_package_version: string;
		GIT_ASKPASS: string;
		XDG_SEAT_PATH: string;
		CHROME_DESKTOP: string;
		NVM_DIR: string;
		VSCODE_GIT_ASKPASS_EXTRA_ARGS: string;
		XDG_SESSION_CLASS: string;
		TERM: string;
		LESS_TERMCAP_mb: string;
		npm_package_name: string;
		LESS_TERMCAP_me: string;
		LESS_TERMCAP_md: string;
		ZDOTDIR: string;
		USER: string;
		VSCODE_GIT_IPC_HANDLE: string;
		COLORFGBG: string;
		VISUAL: string;
		DISPLAY: string;
		npm_lifecycle_event: string;
		LESS_TERMCAP_ue: string;
		SHLVL: string;
		NVM_CD_FLAGS: string;
		LESS_TERMCAP_us: string;
		XDG_VTNR: string;
		XDG_SESSION_ID: string;
		npm_config_user_agent: string;
		npm_execpath: string;
		XDG_RUNTIME_DIR: string;
		npm_package_json: string;
		BUN_INSTALL: string;
		VSCODE_GIT_ASKPASS_MAIN: string;
		QT_AUTO_SCREEN_SCALE_FACTOR: string;
		XDG_DATA_DIRS: string;
		GDK_BACKEND: string;
		PATH: string;
		GDMSESSION: string;
		ORIGINAL_XDG_CURRENT_DESKTOP: string;
		DBUS_SESSION_BUS_ADDRESS: string;
		NVM_BIN: string;
		_JAVA_OPTIONS: string;
		npm_node_execpath: string;
		OLDPWD: string;
		TERM_PROGRAM: string;
		NODE_ENV: string;
		[key: `PUBLIC_${string}`]: undefined;
		[key: `${string}`]: string | undefined;
	}
}

/**
 * Similar to [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), but only includes variables that begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Note that public dynamic environment variables must all be sent from the server to the client, causing larger network requests — when possible, use `$env/static/public` instead.
 * 
 * ```ts
 * import { env } from '$env/dynamic/public';
 * console.log(env.PUBLIC_DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 */
declare module '$env/dynamic/public' {
	export const env: {
		PUBLIC_BASE_PATH: string;
		[key: `PUBLIC_${string}`]: string | undefined;
	}
}
