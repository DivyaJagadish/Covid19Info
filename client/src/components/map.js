import React, { useState, useEffect } from "react";
import {
	MapContainer,
	TileLayer,
	Marker,
	Popup,
	useMapEvents,
} from "react-leaflet";
import "../map.css";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import getdataforCountry from "./helpers/useApplicationData";

function SimpleMap() {
	const customMarker = new L.icon({
		iconUrl: "https://unpkg.com/leaflet@1.5.1/dist/images/marker-icon.png",
		iconSize: [25, 41],
		iconAnchor: [10, 41],
		popupAnchor: [2, -40],
	});

	const [initialPosition, setInitialPosition] = useState([50, 50]);
	const [selectedPosition, setSelectedPosition] = useState([50, 50]);

	useEffect(() => {
		navigator.geolocation.getCurrentPosition((position) => {
			const { latitude, longitude } = position.coords;
			setInitialPosition([latitude, longitude]);
		});
	}, []);

	const Markers = () => {
		const map = useMapEvents({
			click(e) {
				setSelectedPosition([e.latlng.lat, e.latlng.lng]);
				getdataforCountry(e.latlng.lat, e.latlng.lng);
				// console.log(e.latlng.lat, e.latlng.lng);
			},
		});

		return <></>;
	};
	return (
		<>
			<MapContainer center={selectedPosition || initialPosition} zoom={12}>
				<TileLayer
					attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
					url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
				/>
				<Markers />
				<Marker
					icon={customMarker}
					position={selectedPosition || initialPosition}
					interactive={false}
				>
					<Popup>
						A pretty CSS3 popup. <br /> Easily customizable.
					</Popup>
				</Marker>
			</MapContainer>
		</>
	);
}

export default SimpleMap;
