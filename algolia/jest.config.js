module.exports = {
    verbose: true,
    cache: false,
    testMatch: ['<rootDir>/index.js'],
    moduleFileExtensions: [
      "js",
      "json",
      "vue"
    ],
    transform: {
      "^.+\\.js$": "babel-jest",
      ".*\\.(vue)$": "./transform",
      ".+\\.(css|styl|less|sass|scss|png|jpg|svg|ttf|woff|woff2|gif)$": "jest-transform-stub"
    },
    moduleNameMapper: {
      "@/(.*)$": "<rootDir>/src/$1",
    }
};