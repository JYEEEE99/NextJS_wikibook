const nextJest = require("next/jest");
const createJestConfig = nextJest({ dir: "./" });
const customJestConfig = {
  restPathIgnorePatterns: ["<rrotDir>/.next/", "<rooDir>/node_modules"],
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  moduleDirectories: ["node_modules", "<rootDir>/src"],
  testEnvironment: "jsdom",
};

module.exports = createJestConfig(customJestConfig);
