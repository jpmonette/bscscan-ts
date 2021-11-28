export default {
  preset: "ts-jest",
  testEnvironment: "node",
  collectCoverageFrom: ["src/**/*.{ts,tsx}", "!**/*.d.ts", "!src/typings/**", "!src/__tests__/**"],
  testPathIgnorePatterns: ["/node_modules/"],
  testRegex: "(/__tests__/.*\\.test)\\.(jsx?|tsx?)$",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
};
