import { useState } from "react";

const useApi = (apiFunc) => {
	const [data, setData] = useState([]);
	const [error, setError] = useState(false);
	const [loading, setLoading] = useState(false);

	const request = async () => {
		setLoading(true);
		const response = await apiFunc();
		setLoading(false);

		if (!response.ok) return setError(true);

		setError(false);
		setData(response.data);
	};

	return { data, error, loading, request };
};

export default useApi;
