export type Token = {
	"type": string;
	"match": string;
};
export type Rule = {
	pattern: RegExp | string;
	name: string;
};
export type Grammar = {
	lang: string;
	rules: Rule[];
};

export function tokenizer(code: string, grammar: Grammar): Token[] {
	let tokens: Token[] = [];
	return tokens;
};