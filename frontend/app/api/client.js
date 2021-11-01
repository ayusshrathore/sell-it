import { create } from "apisauce";

const apiClient = create({
	baseURL: "http://192.168.1.7:8080/api/",
});

export default apiClient;
