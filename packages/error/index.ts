{
  "name": "snote",
  "version": "1.0.0",
  "description": "ts proj",
  "main": "dist/index.js",
  "scripts": {
    "build": "node_modules/.bin/tsc --project tsconfig.json",
    "entry-point": "node dist/index.js"
  },
  "repository": "github.com:ws2356/creact-ts-proj.git",
  "author": "wansong",
  "license": "MIT",
  "dependencies": {
    "express": "^4.17.1",
    "lodash": "^4.17.15"
  },
  "devDependencies": {
    "@types/express": "^4.17.6",
    "@types/lodash": "^4.14.150",
    "@types/node": "^13.7.4",
    "@typescript-eslint/eslint-plugin": "^2.0.0",
    "@typescript-eslint/parser": "^2.0.0",
    "eslint": "@^5.16.0 || ^6.1.0",
    "eslint-config-airbnb-base": "^14.0.0",
    "eslint-plugin-import": "^2.18.2",
    "typescript": "^3.8.2"
  }
}
