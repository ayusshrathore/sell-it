import { create } from "apisauce";
import cache from "../utility/cache";

const apiClient = create({
	baseURL: "https://backend-sell-it.herokuapp.com/api/",
});

const get = apiClient.get;
apiClient.get = async (url, params, axiosConig) => {
	const response = await get(url, params, axiosConig);

	if (response.ok) {
		cache.store(url, response.data);
		return response;
	}

	const data = await cache.get(url);
	return data ? { ok: true, data } : response;
};

export default apiClient;
