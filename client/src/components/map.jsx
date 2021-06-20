import React, { useState, useEffect, useContext } from "react";
import { MapContainer, TileLayer, Marker, useMapEvents } from "react-leaflet";
import "../map.css";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

import Datacontext from "./dataContext";
function SimpleMap() {
	const customMarker = new L.icon({
		iconUrl: "https://unpkg.com/leaflet@1.5.1/dist/images/marker-icon.png",
		iconSize: [25, 41],
		iconAnchor: [10, 41],
		popupAnchor: [10, -40],
	});
	const { getdataforCountry } = useContext(Datacontext);
	const [initialPosition, setInitialPosition] = useState([50, 50]);

	useEffect(() => {
		navigator.geolocation.getCurrentPosition((position) => {
			const { latitude, longitude } = position.coords;
			setInitialPosition([latitude, longitude]);
			getdataforCountry(latitude, longitude);
		});
	}, []);

	const Markers = () => {
		useMapEvents({
			click(e) {
				setInitialPosition([e.latlng.lat, e.latlng.lng]);
				getdataforCountry(e.latlng.lat, e.latlng.lng);
			},
		});

		return <></>;
	};
	return (
		<>
			<MapContainer center={initialPosition} zoom={3}>
				<TileLayer
					attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
					url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
				/>
				<Markers />
				<Marker icon={customMarker} position={initialPosition}></Marker>
			</MapContainer>
		</>
	);
}

export default SimpleMap;
