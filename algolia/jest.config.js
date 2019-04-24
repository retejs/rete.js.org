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
      ".*\\.(vue)$": "vue-jest"
    },
};