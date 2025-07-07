// Avoid tests failing because of difference between local and GitHub actions timezone
process.env.TZ = 'UTC';

/** @type {import('jest').Config} */
module.exports = {
	preset: 'ts-jest',
	testEnvironment: 'node',
	testMatch: ['**/test/**/*.test.ts'],
	moduleFileExtensions: ['ts', 'js'],
	transform: {
		'^.+\\.ts$': 'ts-jest',
	},
	collectCoverageFrom: [
		'credentials/**/*.ts',
		'nodes/**/*.ts',
		'!**/*.d.ts',
	],
	moduleNameMapper: {
		'^n8n-workflow$': '<rootDir>/node_modules/n8n-workflow',
	},
};
