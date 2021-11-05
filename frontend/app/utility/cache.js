import AsyncStorage from "@react-native-async-storage/async-storage";
import dayjs from "dayjs";

const prefix = "cache";
const expiry = 5;

const isExpired = (item) => {
	const now = dayjs();
	const storedTime = dayjs(item.timestamp);
	return now.diff(storedTime, "minute") > expiry;
};

const store = async (key, value) => {
	const item = {
		value,
		timestamp: Date.now(),
	};
	try {
		await AsyncStorage.setItem(prefix + key, JSON.stringify(item));
	} catch (error) {
		console.log(error);
	}
};

const get = async (key) => {
	try {
		const value = await AsyncStorage.getItem(prefix + key);
		const item = JSON.parse(value);

		if (isExpired(item)) {
			await AsyncStorage.removeItem(prefix + key);
			return null;
		}
	} catch (error) {
		console.log(error);
	}
};

export default { store };
