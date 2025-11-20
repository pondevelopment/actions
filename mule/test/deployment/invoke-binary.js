var childProcess = require("child_process");
const binary = `mule-asset-deployment-test`
const mainScript = `${__dirname}/${binary}`
const spawnSyncReturns = childProcess.spawnSync(mainScript, { stdio: 'inherit' })