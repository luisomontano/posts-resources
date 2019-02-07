module.exports = {
  rootDir: 'test',
  testMatch: ['**/*-test.js'],
  setupTestFrameworkScriptFile: './setup.js',
  snapshotSerializers: ['enzyme-to-json/serializer']
}
