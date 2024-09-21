import { defineAuth, secret } from "@aws-amplify/backend";

export const auth = defineAuth({
  loginWith: {
    externalProviders: {
      google: {
        clientId: secret("GOOGLE_CLIENT_ID"),
        clientSecret: secret("GOOGLE_CLIENT_SECRET"),
        scopes: ["email"],
        attributeMapping: {
          email: "email",
        },
      },
      callbackUrls: [
        "http://localhost:5173/profile",
        "https://mywebsite.com/profile",
      ],
      logoutUrls: ["http://localhost:5173/", "https://mywebsite.com"],
    },
  },
});
