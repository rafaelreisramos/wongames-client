module.exports = {
  resolveSnapshotPath: (testPath, snapshotExtension) => {
    const result = testPath
      .replace(
        /\.test\.([tj]sx?)/,
        `.test${snapshotExtension}`
      )
    return result
  },

  resolveTestPath: (snapshotFilePath, snapshotExtension) => {
    const result = snapshotFilePath
      .replace(snapshotExtension, '.tsx')
    return result
  },

  testPathForConsistencyCheck: 'src/components/some.test.tsx',
}
