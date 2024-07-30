exports.handler = async (event) => {
  console.log("event -> ", event);

  let method = event["httpMethod"];
  let path = event["path"];

  console.log("path -> ", path);
  console.log("method -> ", method);

  if (path === "/hello") {
    return {
      statusCode: 200,
      message: "Hello from Lambda"
    };
  } else {
    return {
      statusCode: 400,
      message: `Bad request syntax or unsupported method. Request path: ${path}. HTTP method: ${method}`,
    };
  }
};
