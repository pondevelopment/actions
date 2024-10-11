var childProcess = require("child_process");
const core = require('@actions/core');
const exec = require('@actions/exec')
core.addPath(`${__dirname}/terraform`);
core.debug(`Installing CDKTF`);
install();
const binary = `mule-nexus-release-test`
const mainScript = `${__dirname}/${binary}`
const spawnSyncReturns = childProcess.spawnSync(mainScript, { stdio: ['inherit', 'inherit', 'pipe'] })
console.log(spawnSyncReturns.status)
if ( spawnSyncReturns.status == 1){
    process.exit(1)
}

async function install() {
    await exec.exec(`npm install -g cdktf-cli@0.15.0`);
}