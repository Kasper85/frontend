import { a as api } from "./router-xyFxSyDz.js";
function listEvaluations(params) {
  const qs = "";
  return api.get(`/api/v1/evaluations${qs}`);
}
function getEvaluation(id) {
  return api.get(`/api/v1/evaluations/${id}`);
}
function submitEvaluationResult(evalId, score, answers) {
  return api.post(`/api/v1/evaluations/${evalId}/results`, { score, answers });
}
function listMyEvaluationResults() {
  return api.get("/api/v1/evaluation-results/me");
}
export {
  listMyEvaluationResults as a,
  getEvaluation as g,
  listEvaluations as l,
  submitEvaluationResult as s
};
