import { defineConfig } from 'oxfmt';

export default defineConfig({
	arrowParens: 'always',
	bracketSpacing: true,
	endOfLine: 'lf',
	ignorePatterns: ['.claude/', '.cursor/', 'node_modules/'],
	printWidth: 120,
	semi: true,
	singleQuote: true,
	sortImports: true,
	tabWidth: 2,
	trailingComma: 'all',
	useTabs: true,
});
