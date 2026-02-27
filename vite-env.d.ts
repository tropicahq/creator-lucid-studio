/// <reference types="vite/client" />

type ImportMetaEnv = {};

interface ImportMeta {
	readonly env: ImportMetaEnv;
}

declare const __APP_NAME__: string;
declare const __API_URL__: string;
// ... declare other constants
