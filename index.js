const express = require('express');
const NodeCache = require('node-cache');
const app = express();
const port = 3000;

const cache = new NodeCache({ stdTTL: 10, checkperiod: 120 });

const checkCache = (req, res, next) => {
  const key = req.originalUrl;
  const cachedResponse = cache.get(key);
  
  if (cachedResponse) {
    const end = Date.now();
    const responseTime = end - res.locals.startTime;
    cachedResponse.responseTime = responseTime;
    cachedResponse.cache = true; 
    res.send(cachedResponse);
  } else {
    next();
  }
};

const measureResponseTime = (req, res, next) => {
  const start = Date.now();
  res.locals.startTime = start;
  res.on('finish', () => {
    const end = Date.now();
    const responseTime = end - start;
    res.locals.responseTime = responseTime;
  });
  next();
};

app.get('/data', measureResponseTime, checkCache, (req, res) => {
  const data = {
    message: "Example Data From Server",
    timestamp: new Date().toISOString(),
    cache: false,
  };

  data.responseTime = Date.now() - res.locals.startTime;

  cache.set(req.originalUrl, data);

  res.send(data);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
