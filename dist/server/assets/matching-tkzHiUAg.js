import { a as api } from "./router-Cqnt14dk.js";
function getJobMatch(jobId) {
  return api.get(`/api/v1/matching/jobs/${jobId}/me`);
}
function getRecommendations(params) {
  const qs = params ? "?" + new URLSearchParams(params).toString() : "";
  return api.get(`/api/v1/matching/recommendations${qs}`);
}
export {
  getJobMatch as a,
  getRecommendations as g
};
