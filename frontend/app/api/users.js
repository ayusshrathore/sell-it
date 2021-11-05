import apiClient from "./client";

const register = (userInfo) => apiClient.post("/user/register", userInfo);

export default { register };
