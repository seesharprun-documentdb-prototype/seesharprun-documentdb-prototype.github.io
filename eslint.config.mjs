import { defineConfig } from "eslint/config";
import nextPlugin from '@next/eslint-plugin-next'

export default defineConfig([
	{
		plugins: {
			'@next/next': nextPlugin,
		},
		rules: {
			semi: "error",
			"prefer-const": "error",
			...nextPlugin.configs.recommended.rules
		},
	},
]);
