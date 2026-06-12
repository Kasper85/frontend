import { a as api } from "./router-xyFxSyDz.js";
function applyToJob(jobId, data) {
  return api.post(`/api/v1/jobs/${jobId}/apply`, {});
}
function listMyApplications() {
  return api.get("/api/v1/applications/me");
}
function listJobApplications(jobId) {
  return api.get(`/api/v1/jobs/${jobId}/applications`);
}
function updateApplicationStatus(appId, status) {
  return api.patch(`/api/v1/applications/${appId}/status`, { status });
}
export {
  listJobApplications as a,
  applyToJob as b,
  listMyApplications as l,
  updateApplicationStatus as u
};
