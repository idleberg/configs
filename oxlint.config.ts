import { defineConfig } from 'oxlint';

export default defineConfig({
	categories: {
		correctness: 'error',
		suspicious: 'warn',
		pedantic: 'warn',
	},
	ignorePatterns: ['.claude/', '.cursor/', 'node_modules/'],
	plugins: ['import', 'oxc', 'typescript', 'unicorn'],
	rules: {
		eqeqeq: 'warn',
		'import/no-cycle': 'error',

		// Parity with the `style` rules enabled in biome.jsonc
		'eslint/default-param-last': 'error',
		'eslint/no-param-reassign': 'error',
		'typescript/consistent-type-exports': 'error',
		'typescript/no-inferrable-types': 'error',
		'typescript/prefer-as-const': 'error',
		'typescript/prefer-enum-initializers': 'error',
		'unicorn/prefer-number-properties': 'error',
	},
});
