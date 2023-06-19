module.exports = {
    roots: ['<rootDir>/src'],
    testRegex: '.*spec\\.tsx?',
    transform: {
        '^.+\\.ts?$': 'ts-jest',
        "^.+\\.tsx?$": "ts-jest",
    },
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    setupFilesAfterEnv: ['@alex_neo/jest-expect-message'],
    testTimeout: 120000,
    testEnvironment: 'jsdom',
};
