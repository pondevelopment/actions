# Vue Distribution

This composite action is used for generating an artifact for a vue distribution. It assumes the existence of a `.nvmrc` file to provide the node version to use. A few other inputs are requested.

### Inputs:

- `version`
- `NPM_TOKEN`

### Outputs:

- `dist`

## Usage

This will setup a node environment using the version from `.nvmrc` to finally run `npm run build`. As long as that command exists and runs the build to the standard output directory (`/dist` at the time of writing), it then proceeds to generate an artifact using the supplied `version` input.

The resulting output is the name of the artifact, which can be used by follow up workflows to download the build and use it.

### Example

This example uses this action and passes the artefact name to a publication action.

```yaml
  dist:
    needs: [nodeci, sonar, version]
    runs-on: ubuntu-latest
    steps:
    - uses: pondevelopment/actions/vue-dist@features/sonarcloud
      with:
        version: ${{ needs.version.outputs.version }}
        NPM_TOKEN: ${{secrets.NPM_TOKEN}}
  publish:
    needs: [dist, version]
    uses: ./.github/workflows/cloudflare-publish.yml
    with:
      DIST_NAME:  ${{ needs.dist.outputs.dist }}
      BRANCH_NAME: env.BRANCH_NAME
      COMMIT_HASH: ${{ needs.version.outputs.short-hash }}
      ACCOUNT_ID: 1234b123e4a1a12345ff01aa4321f12a
    secrets:
      CF_WRANGLER_TOKEN: ${{ secrets.CF_WRANGLER_TOKEN }}
```