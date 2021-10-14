# Crab template

## How to use

Either click 'Use this template' above, or when creating a new repository select this template from the dropdown:

![image](https://user-images.githubusercontent.com/614392/115035764-cde44580-9ec4-11eb-89c3-d31884ef6e8d.png)

Clone the repository to your machine. Install dependencies with:

```
yarn
```

Then run with:

```
yarn dev
```

Then open http://localhost:3000/yourapp/example to see your app in action.

It is recommended to use [the Google Chrome extension](https://github.com/transferwise/copy-tokens-chrome-extension) to copy cookies from staging onto your local environment. Crab will then load your session and profile on each page request.

## Customising for our own project

You should do the following straight away:

- Update Neptune with `yarn add @transferwise/components @transferwise/neptune-css @transferwise/icons`
- Commit `yarn.lock` (it is left out of the template to avoid tying the template to specific verisons)
- Replace `/yourapp` in [next.config.js](./next.config.js) with the location that you'll be deploying your Crab app.
- Update the Github Actions configuration in [.github/workflows/build-publish-release.yaml](.github/workflows/build-publish-release.yaml):
  - Replace `main` with `master` if your default branch is `master`
  - Replace `DEPLOY_SLACK_CHANNEL` and `DEPLOY_IMAGE_NAME`
- Check if any of the main dependencies need upgrading. Dependabot will also notify you each week if anything is out of date.
- Replace `PROJECT_NAME` in [sonar-project.properties.tmpl](./sonar-project.properties.tmpl) with the name of your project

Check out [the Crab wiki](https://github.com/transferwise/crab/wiki) for further information on customising your app and [deploying it to production](https://github.com/transferwise/crab/wiki/Guide-on-Deployment).

## Other things

### Crowdin integration

You'll need to set up a Crowdin project in order to start getting translations for your app. You can read more about this process and the GitHub integration on [Confluence](https://transferwise.atlassian.net/wiki/spaces/EKB/pages/1054900981/Setting+up+a+Crowdin+integration+for+translations?atlOrigin=eyJpIjoiZGM3ODI0OWE5MmJlNDBhYmEyYjZkYjExYmYyZGYzZmQiLCJwIjoiYyJ9).

### Rollbar and source maps

You can create a Rollbar project for your app via [rollbar-provisioning](https://github.com/transferwise/rollbar-provisioning).

Once done, you can place the generated ROLLBAR_CLIENT_TOKEN and ROLLBAR_SERVER_TOKEN in [.env.production](./.env.production).

The upload-sourcemaps job in GitHub Actions [Test Build Release flow](.github/workflows/build-publish-release.yaml) will then work.

### Adding items to the Docker image

If you add translations, middleware, or other files outside of the `src` directory; you will need to update [Dockerfile](./Dockerfile) to tell it to also include these items in the docker image.

### Testing in custom environments

Usually Github Actions will only create Docker images for commits to master. If you push a branch that ends in `-ce` then Github Actions will create an image that you can deploy to a custom enviroment.
