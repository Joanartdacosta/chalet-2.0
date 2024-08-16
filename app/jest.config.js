const nextJest = require("next/jest");

const createJestConfig = nextJest({
  // path to Next.js app (to load next.config.js and .env files in test environment)
  dir: "./",
});

const customJestConfig = {
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  testEnvironment: "jest-environment-jsdom",
  moduleFileExtensions: [
    "js",
    "jsx",
    "mjs",
    "cjs",
    "ts",
    "tsx",
    "json",
    "node",
  ],
};

module.exports = createJestConfig(customJestConfig);
