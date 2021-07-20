//todo: add urls for each environment
const getServiceUrls = (env) =>
  env === "production"
    ? {
        posts: "http://localhost:4000",
        comments: "http://localhost:4001",
        query: "http://localhost:4002",
      }
    : {
        posts: "http://localhost:4000",
        comments: "http://localhost:4001",
        query: "http://localhost:4002",
      };

const getEventBusUrl = (env) =>
  env === "production" ? "http://localhost:5000" : "http://localhost:5000";

module.exports = { getServiceUrls, getEventBusUrl };
