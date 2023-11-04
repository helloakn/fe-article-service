const nextJest = require("next/jest");
const createJestConfig = nextJest({
  dir: "./",
});
const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>__tests__/jest.setup.js'],
  moduleDirectories: ["node_modules", "<rootDir>/"],
  testEnvironment: "jest-environment-jsdom",
  testRegex: "/__tests__/.*.(test|spec).(js|ts|tsx)?$",
};
module.exports = createJestConfig(customJestConfig);