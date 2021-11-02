import apiClient from "./client";

const login = (email, password) =>
	apiClient.post("/api/user/login", { email, password });

export default { login };
