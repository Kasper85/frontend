import { a as api } from "./router-CmATITWS.js";
function getProfile() {
  return api.get("/api/v1/profile");
}
function updateProfile(data) {
  return api.put("/api/v1/profile", data);
}
export {
  getProfile as g,
  updateProfile as u
};
