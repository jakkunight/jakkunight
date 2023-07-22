
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
	export const LESS_TERMCAP_se: string;
	export const POWERSHELL_TELEMETRY_OPTOUT: string;
	export const LANGUAGE: string;
	export const USER: string;
	export const LESS_TERMCAP_ue: string;
	export const npm_config_user_agent: string;
	export const XAUTHLOCALHOSTNAME: string;
	export const DOTNET_CLI_TELEMETRY_OPTOUT: string;
	export const XDG_SESSION_TYPE: string;
	export const GIT_ASKPASS: string;
	export const SSH_AGENT_PID: string;
	export const npm_package_devDependencies_gh_pages: string;
	export const npm_package_devDependencies_vite: string;
	export const npm_node_execpath: string;
	export const SHLVL: string;
	export const HOME: string;
	export const CHROME_DESKTOP: string;
	export const OLDPWD: string;
	export const DESKTOP_SESSION: string;
	export const TERM_PROGRAM_VERSION: string;
	export const npm_package_devDependencies__sveltejs_adapter_static: string;
	export const GTK_MODULES: string;
	export const XDG_SEAT_PATH: string;
	export const VSCODE_GIT_ASKPASS_MAIN: string;
	export const npm_package_devDependencies_svelte_check: string;
	export const MANAGERPID: string;
	export const LESS_TERMCAP_so: string;
	export const VSCODE_GIT_ASKPASS_NODE: string;
	export const npm_package_scripts_check: string;
	export const SYSTEMD_EXEC_PID: string;
	export const DBUS_SESSION_BUS_ADDRESS: string;
	export const VISUAL: string;
	export const npm_package_dependencies_dotenv: string;
	export const COLORTERM: string;
	export const npm_package_devDependencies_tailwindcss: string;
	export const npm_package_devDependencies_typescript: string;
	export const COMMAND_NOT_FOUND_INSTALL_PROMPT: string;
	export const NVM_DIR: string;
	export const QT_QPA_PLATFORMTHEME: string;
	export const npm_package_scripts_dev: string;
	export const LOGNAME: string;
	export const npm_package_type: string;
	export const QT_AUTO_SCREEN_SCALE_FACTOR: string;
	export const JOURNAL_STREAM: string;
	export const LESS_TERMCAP_us: string;
	export const PULSE_SERVER: string;
	export const _: string;
	export const npm_package_private: string;
	export const npm_package_scripts_check_watch: string;
	export const npm_package_devDependencies_autoprefixer: string;
	export const XDG_SESSION_CLASS: string;
	export const USER_ZDOTDIR: string;
	export const npm_config_registry: string;
	export const TERM: string;
	export const ANDROID_TOOLCHAIN: string;
	export const npm_config_node_gyp: string;
	export const PATH: string;
	export const _JAVA_OPTIONS: string;
	export const INVOCATION_ID: string;
	export const npm_package_name: string;
	export const NODE: string;
	export const XDG_RUNTIME_DIR: string;
	export const XDG_SESSION_PATH: string;
	export const GDK_BACKEND: string;
	export const DISPLAY: string;
	export const nnn: string;
	export const LANG: string;
	export const POWERSHELL_UPDATECHECK: string;
	export const VSCODE_INJECTION: string;
	export const XAUTHORITY: string;
	export const XDG_SESSION_DESKTOP: string;
	export const LS_COLORS: string;
	export const TERM_PROGRAM: string;
	export const VSCODE_GIT_IPC_HANDLE: string;
	export const npm_lifecycle_script: string;
	export const XDG_GREETER_DATA_DIR: string;
	export const ORIGINAL_XDG_CURRENT_DESKTOP: string;
	export const SSH_AUTH_SOCK: string;
	export const npm_package_devDependencies__sveltejs_kit: string;
	export const SHELL: string;
	export const NODE_PATH: string;
	export const npm_package_version: string;
	export const npm_package_devDependencies__sveltejs_adapter_cloudflare: string;
	export const npm_lifecycle_event: string;
	export const QT_ACCESSIBILITY: string;
	export const GDMSESSION: string;
	export const npm_package_scripts_build: string;
	export const npm_package_devDependencies_svelte: string;
	export const npm_package_devDependencies_tslib: string;
	export const LESS_TERMCAP_mb: string;
	export const GPG_AGENT_INFO: string;
	export const LESS_TERMCAP_md: string;
	export const VSCODE_GIT_ASKPASS_EXTRA_ARGS: string;
	export const PWD: string;
	export const LESS_TERMCAP_me: string;
	export const npm_execpath: string;
	export const XDG_DATA_DIRS: string;
	export const ZDOTDIR: string;
	export const npm_package_devDependencies__sveltejs_adapter_auto: string;
	export const npm_package_devDependencies_postcss: string;
	export const npm_command: string;
	export const PNPM_SCRIPT_SRC_DIR: string;
	export const npm_package_scripts_preview: string;
	export const PNPM_HOME: string;
	export const EDITOR: string;
	export const INIT_CWD: string;
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
		LESS_TERMCAP_se: string;
		POWERSHELL_TELEMETRY_OPTOUT: string;
		LANGUAGE: string;
		USER: string;
		LESS_TERMCAP_ue: string;
		npm_config_user_agent: string;
		XAUTHLOCALHOSTNAME: string;
		DOTNET_CLI_TELEMETRY_OPTOUT: string;
		XDG_SESSION_TYPE: string;
		GIT_ASKPASS: string;
		SSH_AGENT_PID: string;
		npm_package_devDependencies_gh_pages: string;
		npm_package_devDependencies_vite: string;
		npm_node_execpath: string;
		SHLVL: string;
		HOME: string;
		CHROME_DESKTOP: string;
		OLDPWD: string;
		DESKTOP_SESSION: string;
		TERM_PROGRAM_VERSION: string;
		npm_package_devDependencies__sveltejs_adapter_static: string;
		GTK_MODULES: string;
		XDG_SEAT_PATH: string;
		VSCODE_GIT_ASKPASS_MAIN: string;
		npm_package_devDependencies_svelte_check: string;
		MANAGERPID: string;
		LESS_TERMCAP_so: string;
		VSCODE_GIT_ASKPASS_NODE: string;
		npm_package_scripts_check: string;
		SYSTEMD_EXEC_PID: string;
		DBUS_SESSION_BUS_ADDRESS: string;
		VISUAL: string;
		npm_package_dependencies_dotenv: string;
		COLORTERM: string;
		npm_package_devDependencies_tailwindcss: string;
		npm_package_devDependencies_typescript: string;
		COMMAND_NOT_FOUND_INSTALL_PROMPT: string;
		NVM_DIR: string;
		QT_QPA_PLATFORMTHEME: string;
		npm_package_scripts_dev: string;
		LOGNAME: string;
		npm_package_type: string;
		QT_AUTO_SCREEN_SCALE_FACTOR: string;
		JOURNAL_STREAM: string;
		LESS_TERMCAP_us: string;
		PULSE_SERVER: string;
		_: string;
		npm_package_private: string;
		npm_package_scripts_check_watch: string;
		npm_package_devDependencies_autoprefixer: string;
		XDG_SESSION_CLASS: string;
		USER_ZDOTDIR: string;
		npm_config_registry: string;
		TERM: string;
		ANDROID_TOOLCHAIN: string;
		npm_config_node_gyp: string;
		PATH: string;
		_JAVA_OPTIONS: string;
		INVOCATION_ID: string;
		npm_package_name: string;
		NODE: string;
		XDG_RUNTIME_DIR: string;
		XDG_SESSION_PATH: string;
		GDK_BACKEND: string;
		DISPLAY: string;
		nnn: string;
		LANG: string;
		POWERSHELL_UPDATECHECK: string;
		VSCODE_INJECTION: string;
		XAUTHORITY: string;
		XDG_SESSION_DESKTOP: string;
		LS_COLORS: string;
		TERM_PROGRAM: string;
		VSCODE_GIT_IPC_HANDLE: string;
		npm_lifecycle_script: string;
		XDG_GREETER_DATA_DIR: string;
		ORIGINAL_XDG_CURRENT_DESKTOP: string;
		SSH_AUTH_SOCK: string;
		npm_package_devDependencies__sveltejs_kit: string;
		SHELL: string;
		NODE_PATH: string;
		npm_package_version: string;
		npm_package_devDependencies__sveltejs_adapter_cloudflare: string;
		npm_lifecycle_event: string;
		QT_ACCESSIBILITY: string;
		GDMSESSION: string;
		npm_package_scripts_build: string;
		npm_package_devDependencies_svelte: string;
		npm_package_devDependencies_tslib: string;
		LESS_TERMCAP_mb: string;
		GPG_AGENT_INFO: string;
		LESS_TERMCAP_md: string;
		VSCODE_GIT_ASKPASS_EXTRA_ARGS: string;
		PWD: string;
		LESS_TERMCAP_me: string;
		npm_execpath: string;
		XDG_DATA_DIRS: string;
		ZDOTDIR: string;
		npm_package_devDependencies__sveltejs_adapter_auto: string;
		npm_package_devDependencies_postcss: string;
		npm_command: string;
		PNPM_SCRIPT_SRC_DIR: string;
		npm_package_scripts_preview: string;
		PNPM_HOME: string;
		EDITOR: string;
		INIT_CWD: string;
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
