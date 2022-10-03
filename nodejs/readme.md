# NodeJS

This action will run a set of default tasks against your node repository. The
expected run tasks are:

- vulnerabilities
- lint:report
- cpd
- test

If any of these are not configured in your package.json, this task will fail.

## Configuration

To run this task the following settings are expected:

- `NPM_REGISTRY_TOKEN`, this is a personal access token, required to access private repositories.

The following are optional:

- `NODE_VERSION`: if provided will use this specific node-version to run this
  build (can be used in a matrix). If not provided, you're expected to have a
  `.nvmrc` configuration file
- `NODE_CACHE`: can be set to 'npm' and ifso will use the built-in caching of
  `actions/setup-node`. This will NOT cache your node_modules
- `MODULES_CACHE`: can be set to 'true' and will cache your `node_modules`
  directory, cache invalidation is triggered by the hash of your
  `package-lock.json`

## Example

```javascript
  nodeci:
    runs-on: ubuntu-latest
    steps:
    - name: Run Node CI
      id: nodeci
      uses: pondevelopment/actions/nodejs@main
      with:
        NPM_REGISTRY_TOKEN: ${{secrets.NPM_TOKEN}}
        NODE_CACHE: 'npm'
        MODULES_CACHE: 'true'
```