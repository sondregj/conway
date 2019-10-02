module.exports = {
	globals: {
		'ts-jest': {
			tsConfig: 'tsconfig.json'
		}
	},
	transform: {
		"^.+\\.tsx?$": "ts-jest"
	},
	moduleFileExtensions: [
		"ts",
		"js"
	],
	testRegex: "(/test/.*|(\\.|/)(test|spec))\\.[jt]sx?$",
}
