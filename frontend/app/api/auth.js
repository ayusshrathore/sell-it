import apiClient from "./client";

const login = (email, password) =>
	apiClient.post("/user/login", { email, password });

export default { login };
