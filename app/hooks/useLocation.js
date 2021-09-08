//Location hook for accessing user's location

import * as Location from "expo-location";
import { useEffect, useState } from "react";

export default useLocation = () => {
	const [location, setLocation] = useState();

	const getLocation = () => {
		try {
			const { granted } =
				await Location.requestForegroundPermissionsAsync();
			if (!granted) return;
			const {
				coords: { latitude, longitude },
			} = await Location.getLastKnownPositionAsync();
			setLocation({ latitude, longitude });
		} catch (error) {
			console.log(error);
		}
	};
	useEffect(() => {
		getLocation();
	}, []);

	return location;
};
