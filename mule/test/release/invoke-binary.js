var childProcess = require("child_process");
const binary = `mule-nexus-release-test`
const mainScript = `${__dirname}/${binary}`
const spawnSyncReturns = childProcess.spawnSync(mainScript, { stdio: 'inherit' })