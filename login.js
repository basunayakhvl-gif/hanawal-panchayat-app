exports.handler = async (e) => {
  try {
    if (e.httpMethod !== "POST") {
      return out(405, { error: "Method not allowed" });
    }

    const b = JSON.parse(e.body || "{}");

    const username = process.env.ADMIN_USERNAME || "admin";
    const password = process.env.ADMIN_PASSWORD || "hanawal123";

    if (b.username !== username) {
      return out(401, { error: "Username ತಪ್ಪಾಗಿದೆ" });
    }

    if (b.password !== password) {
      return out(401, { error: "Password ತಪ್ಪಾಗಿದೆ" });
    }

    return out(200, {
      success: true,
      token: process.env.ADMIN_TOKEN || "hanawal-demo-token"
    });

  } catch (x) {
    return out(500, { error: x.message });
  }
};

function out(s, b) {
  return {
    statusCode: s,
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(b)
  };
}
