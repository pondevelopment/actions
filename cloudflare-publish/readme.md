# Cloudflare Publish

This composite action takes an artifact as input and publishes the contents to
Cloudflare Pages. Depending on the setup of your Cloudflare environment it will
either report a feature specific url, or it will publish to production.

Works together with [vue-dist][vue] to publish static vue apps
to cloudflare pages hosting.

## Configuration

To run this task the following settings are expected:

- `DIST_NAME`:
    description: "Name of the artifact to download",
    required: true
- `BRANCH_NAME`:
    description: "Branch name of this publication, special branches trigger live release...",
    required: true
- `COMMIT_HASH`:
    description: "Commit hash (short) of this publication, an easy way to match your publication back to your commit",
    required: true
- `ACCOUNT_ID`:
    description: "The account-id that has been registered at cloudflare",
    required: true
- `CF_WRANGLER_TOKEN`:
    description: "The secret token created on cloudflare",
    required: true

## Usage

Simply generate an artifact, pass it's name to this action along with branch information and account details. The action will download the artifact and then upload it to Cloudflare Pages.

### Example

This example uses this action and passes the artefact name to a publication action.

```yaml
  publish:
    needs: [dist, version]
    runs-on: ubuntu-latest
    steps:
    - uses:  pondevelopment/actions/cloudflare-publish@feature/cloudflare
      with:
        DIST_NAME:  ${{ needs.dist.outputs.dist }}
        BRANCH_NAME: env.BRANCH_NAME
        COMMIT_HASH: ${{ needs.version.outputs.SHORT_HASH }}
        ACCOUNT_ID: 1234b123e4a1a12345ff01aa4321f12a
        CF_WRANGLER_TOKEN: ${{ secrets.CF_WRANGLER_TOKEN }}
```

[vue]: ../vue-dist/readme.md