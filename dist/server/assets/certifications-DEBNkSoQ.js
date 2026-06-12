import { a as api } from "./router-Cqnt14dk.js";
function createCertification(data) {
  return api.post("/api/v1/certifications", data);
}
function deleteCertification(id) {
  return api.delete(`/api/v1/certifications/${id}`);
}
function listMyCertifications() {
  return api.get("/api/v1/candidate/certifications");
}
export {
  createCertification as c,
  deleteCertification as d,
  listMyCertifications as l
};
