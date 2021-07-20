//todo: add urls for each environment
const getServiceUrls = () => ({
  posts: "http://localhost:4000",
  comments: "http://localhost:4001",
  query: "http://localhost:4002",
});

const getEventBusUrl = () => "http://localhost:5000";

module.exports = { getServiceUrls, getEventBusUrl };
