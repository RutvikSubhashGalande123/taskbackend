const logger = (req, res, next) => {
  const startTime = new Date(); // Record the start time of the request
  console.log(`Request Method: ${req.method}`);
  console.log(`Request Time: ${startTime.toISOString()}`);
  console.log(`Endpoint: ${req.path}`);
  console.log("Request Headers:", req.headers);

  // Capture the response data sent to the client
  const originalSend = res.send;
  res.send = function (data) {
    console.log("Response Data:", JSON.stringify(data, null, 2));
    return originalSend.apply(res, arguments);
  };

  // Log the completion of the request and calculate response time
  res.on("finish", () => {
    const endTime = new Date();
    const responseTime = endTime - startTime;
    console.log(`Response Time: ${responseTime/60}s`);
  });

  next();
};

module.exports = logger;
