export const handler = async (event) => {
  let path = event["path"];
  let method = event["httpMethod"];

  if (path === "/hello") {
    return {
      statusCode: 200,
      message: "Hello from Lambda",
    };
  } else {
    return {
      statusCode: 400,
      message: `Bad request syntax or unsupported method. Request path: ${path}. HTTP method: ${method}`,
    };
  }
};
