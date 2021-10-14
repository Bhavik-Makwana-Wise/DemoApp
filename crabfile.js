/* eslint-disable @typescript-eslint/no-var-requires */
const { AuthenticationPolicy } = require('@transferwise/crab');

const nextConfig = require('./next.config');

const { ROLLBAR_CLIENT_TOKEN, ROLLBAR_SERVER_TOKEN } = process.env;

module.exports = {
  authentication: {
    policy: AuthenticationPolicy.OPTIONAL,
  },
  nextConfig,
  profiles: true,
  rollbar: {
    accessToken: {
      client: ROLLBAR_CLIENT_TOKEN,
      server: ROLLBAR_SERVER_TOKEN,
    },
    uploadSourceMapsToken: ROLLBAR_SERVER_TOKEN,
  },
};
