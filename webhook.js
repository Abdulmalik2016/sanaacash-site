exports.handler = async function(event, context) {
  const verify_token = "YOUR_VERIFY_TOKEN"; // عدّل هنا

  if (event.httpMethod === "GET") {
    const params = event.queryStringParameters;
    if (params['hub.mode'] === 'subscribe' && params['hub.verify_token'] === verify_token) {
      return {
        statusCode: 200,
        body: params['hub.challenge']
      };
    }
    return { statusCode: 403, body: "Forbidden" };
  }

  if (event.httpMethod === "POST") {
    const body = JSON.parse(event.body);
    console.log("Webhook event received:", JSON.stringify(body, null, 2));

    // معالجة الرسائل حسب الحاجة

    return {
      statusCode: 200,
      body: "EVENT_RECEIVED"
    };
  }

  return {
    statusCode: 405,
    body: "Method Not Allowed"
  };
};
