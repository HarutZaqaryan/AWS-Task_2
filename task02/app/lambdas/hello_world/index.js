exports.handler = async (event) => {
  console.log("event -> ", event);

  let method = event["httpMethod"];
  let path = event["path"];

  if (path === "/hello") {
    return {
      statusCode: 200,
      message: "Hello from Lambda"
      // body: JSON.stringify({ message: "Hello from Lambda" })
    };
  } else {
    return {
      statusCode: 400,
      message: `Bad request syntax or unsupported method. Request path: ${path}. HTTP method: ${method}`
      // body: JSON.stringify({
      //   message: `Bad request syntax or unsupported method. Request path: ${path}. HTTP method: ${method}`
      // })
    };
  }
};
