# Markdown to Confluence

This actions converts markdown to confluence markup and uploads it.

## Configuration
```yaml
  base_folder:
    description: "location of documentation"
    required: false
    default: "./"
  confluence_url:
    description: "Base URL to Atlassian with network name"
    required: true
  confluence_space_key:
    description: "The space key found in the URL on Confluence"
    required: true
  auth_username:
    description: "The username of the user pushing changes to Confluence"
    required: true
  auth_api_token:
    description: "The authentication token from the user pushing changes to Confluence"
    required: true
```
