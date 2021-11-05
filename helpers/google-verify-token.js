const { OAuth2Client } = require("google-auth-library");

const CLIENT_ID =
  "319782720719-mqlq4krcrb9lo9upnmesg937o7hnr90t.apps.googleusercontent.com";

const client = new OAuth2Client(CLIENT_ID);

const validarGoogleIdToken = async (token) => {
  try {
    const ticket = await client.verifyIdToken({
      idToken: token,
      audience: [
        CLIENT_ID,
        "319782720719-6if378f3fn0oh7si9d8sj1eg3h2r3al3.apps.googleusercontent.com",
      ],
    });
    const payload = ticket.getPayload();

    console.log("==================== PAYLOAD ====================");
    console.log(payload);

    return {
      name: payload["name"],
      picture: payload["picture"],
      email: payload["email"],
    };
  } catch (error) {
    return null;
  }
};

// validarGoogleIdToken().catch(console.error);

module.exports = { validarGoogleIdToken };
