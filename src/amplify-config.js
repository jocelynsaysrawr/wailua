import config from "./config";

export default {
  Auth: {
    mandatorySignIn: true,
    region: config.cognito.REGION,
    userPoolId: config.cognito.USER_POOL_ID,
    identityPoolId: config.cognito.IDENTITY_POOL_ID,
    userPoolWebClientId: config.cognito.APP_CLIENT_ID
  },
  API: {
    endpoints: [
      {
        name: "wailua-api",
        endpoint: config.apiGateway.URL,
        region: config.apiGateway.REGION
      }
    ]
  },
  Storage: {
    bucket: ""
  }
};
