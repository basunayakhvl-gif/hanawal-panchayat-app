exports.handler = async () => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      success: true,
      message: "Netlify Function is working"
    })
  };
};
