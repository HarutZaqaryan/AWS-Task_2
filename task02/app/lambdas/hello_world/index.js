exports.handler = async (event) => {
  console.log("event -> ", event);

  let method = event["requestContext"]['http'].method;
  let path = event["requestContext"]['http'].path;

  if (path === "/hello") {
    return {
      statusCode: 200,
      body: { message: "Hello from Lambda" }
    };
  } else {
    return {
      statusCode: 400,
      body:{ message: `Bad request syntax or unsupported method. Request path: ${path}. HTTP method: ${method}`}
    };
  }
};
