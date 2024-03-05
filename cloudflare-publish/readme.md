# Cloudflare Publish

This composite action takes an artifact as input and publishes the contents to
Cloudflare Pages. Depending on the setup of your Cloudflare environment it will
either report a feature specific url, or it will publish to production.

Works together with [vue-dist][vue] to publish static vue apps to cloudflare
pages hosting. Any similar action that produces an artifact with a predictable
static folder to publish can be used as input.

## Configuration

To run this task the following settings are expected:

-  `ACCOUNT_ID`:
    description: "The account-id that has been registered at cloudflare"
    required: true
-  `BRANCH_NAME`:
    description: "Branch name of this publication, special branches trigger live release..."
    required: true
-  `CF_WRANGLER_TOKEN`:
    description: "The secret token created on cloudflare"
    required: true
-  `COMMIT_HASH`:
    description: "Commit hash (short) of this publication, an easy way to match your publication back to your commit"
    required: true
-  `DIST_NAME`:
    description: "Name of the artifact to download"
    required: true
-  `PROJECT_NAME`:
    description: "The cloudflare registered project name"
    required: true

Outputs:

-  `WRANGLER_OUT`:
    description: "The stdout logged from the wrangler action that was running"
    value: ${{ steps.wrangler.outputs.command-output }}
-  `CLOUDFLARE_URL`:
    description: "The URL of wranglers publication"
    value: ${{ steps.url.outputs.CLOUDFLARE_URL }}

## Usage

Simply generate an artifact, pass it's name to this action along with branch information and account details. The action will download the artifact and then upload it to Cloudflare Pages.

### Example

This example uses this action and passes the artefact name to a publication action.

```yaml
  publish:
    needs: [dist, version]
    runs-on: ubuntu-latest
    steps:
    - uses:  pondevelopment/actions/cloudflare-publish@v1.1
      with:
        DIST_NAME: ${{ needs.dist.outputs.dist }}
        BRANCH_NAME: ${{ env.BRANCH_NAME }}
        PROJECT_NAME: your-project-name
        COMMIT_HASH: ${{ needs.version.outputs.SHORT_HASH }}
        ACCOUNT_ID: ${{ secrets.CF_ACCOUNT_ID }}
        CF_WRANGLER_TOKEN: ${{ secrets.CF_API_TOKEN }}
    outputs:
      cloudflare_url: ${{ steps.cloudflare.outputs.CLOUDFLARE_URL }}
```

[vue]: ../vue-dist/readme.md