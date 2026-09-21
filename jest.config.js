module.exports = {
	globals: {
		'ts-jest': {
			tsconfig: 'tsconfig.json'
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
