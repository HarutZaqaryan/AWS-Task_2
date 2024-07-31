exports.handler = async (event) => {
  console.log("event -> ", event);

  let method = event["requestContext"]["http"].method;
  let path = event["requestContext"]["http"].path;

  const correctPathResponse = JSON.stringify({
    statusCode: 200,
    message: "Hello from Lambda",
  });

  const incorrectPathResponse = JSON.stringify({
    statusCode: 400,
    message: `Bad request syntax or unsupported method. Request path: ${path}. HTTP method: ${method}`,
  })

  if (path === "/hello") {
    return correctPathResponse;
  } else {
    return incorrectPathResponse
  }
};
