import { useState, useEffect, useCallback } from "react";
import { a as api, s as setAuthSession, b as getAccessToken, g as getCurrentUser, c as clearAuthSession } from "./router-Cqnt14dk.js";
async function register(email, password, name, role) {
  const resp = await api.post("/api/v1/auth/register", { email, password, name, role });
  setAuthSession(resp.token.access_token, resp.token.refresh_token, resp.user);
  return resp;
}
async function login(email, password) {
  const resp = await api.post("/api/v1/auth/login", { email, password });
  setAuthSession(resp.token.access_token, resp.token.refresh_token, resp.user);
  return resp;
}
function getMe() {
  return api.get("/api/v1/me");
}
function useAuth() {
  const [state, setState] = useState({
    user: getCurrentUser(),
    isLoading: true,
    isAuthenticated: !!getAccessToken()
  });
  useEffect(() => {
    const token = getAccessToken();
    if (token) {
      getMe().then((resp) => {
        setState({ user: resp.user, isLoading: false, isAuthenticated: true });
      }).catch(() => {
        clearAuthSession();
        setState({ user: null, isLoading: false, isAuthenticated: false });
      });
    } else {
      setState({ user: null, isLoading: false, isAuthenticated: false });
    }
  }, []);
  const login$1 = useCallback(async (email, password) => {
    const resp = await login(email, password);
    setState({ user: resp.user, isLoading: false, isAuthenticated: true });
    return resp;
  }, []);
  const register$1 = useCallback(async (email, password, name, role) => {
    const resp = await register(email, password, name, role);
    setState({ user: resp.user, isLoading: false, isAuthenticated: true });
    return resp;
  }, []);
  const logout = useCallback(() => {
    clearAuthSession();
    setState({ user: null, isLoading: false, isAuthenticated: false });
  }, []);
  return { ...state, login: login$1, register: register$1, logout };
}
export {
  useAuth as u
};
