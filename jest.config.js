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
	testRegex: "(/test/unit/.*|(\\.|/)(test|spec))\\.[jt]sx?$",
}
