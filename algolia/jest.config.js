module.exports = {
    verbose: true,
    testMatch: ['<rootDir>/index.js'],
    moduleFileExtensions: [
      "js",
      "json",
      "vue"
    ],
    transform: {
      "^.+\\.js$": "babel-jest",
      ".*\\.(vue)$": "vue-jest",
      ".+\\.(css|styl|less|sass|scss|png|jpg|svg|ttf|woff|woff2|gif)$": "jest-transform-stub"
    },
    moduleNameMapper: {
      "@/(.*)$": "<rootDir>/src/$1",
    }
};