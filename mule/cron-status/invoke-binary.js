var childProcess = require("child_process");
const binary = `mule-cron-status`
const mainScript = `${__dirname}/${binary}`
const spawnSyncReturns = childProcess.spawnSync(mainScript, { stdio: 'inherit' })