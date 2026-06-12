import { a as api } from "./router-DCu-jlWR.js";
function createInterview(appId, data) {
  return api.post(`/api/v1/applications/${appId}/interviews`, data);
}
function listMyInterviews() {
  return api.get("/api/v1/interviews/me");
}
export {
  createInterview as c,
  listMyInterviews as l
};
