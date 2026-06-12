import { a as api } from "./router-CmATITWS.js";
function listJobs(params) {
  const qs = params ? "?" + new URLSearchParams(params).toString() : "";
  return api.get(`/api/v1/jobs${qs}`);
}
function getJob(id) {
  return api.get(`/api/v1/jobs/${id}`);
}
function createJob(data) {
  return api.post("/api/v1/jobs", data);
}
function updateJob(id, data) {
  return api.put(`/api/v1/jobs/${id}`, data);
}
function deleteJob(id) {
  return api.delete(`/api/v1/jobs/${id}`);
}
export {
  createJob as c,
  deleteJob as d,
  getJob as g,
  listJobs as l,
  updateJob as u
};
