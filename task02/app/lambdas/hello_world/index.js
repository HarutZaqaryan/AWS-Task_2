exports.handler = async (event) => {
  console.log("event -> ", event);

  let method = event["requestContext"]["http"].method;
  let path = event["requestContext"]["http"].path;

  if (path === "/hello") {
    return {
      body:{
          statusCode:200,
          message:"Hello from Lambda"
        }
    };
  } else {
    return {
      body:{
        statusCode:400,
        message:`Bad request syntax or unsupported method. Request path: ${path}. HTTP method: ${method}`
      }
    };
  }
};
