import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "../map.css";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

function SimpleMap() {
	const customMarker = new L.icon({
		iconUrl: "https://unpkg.com/leaflet@1.5.1/dist/images/marker-icon.png",
		iconSize: [25, 41],
		iconAnchor: [10, 41],
		popupAnchor: [2, -40],
	});
	return (
		<>
			<MapContainer
				center={[49.263569, -123.138573]}
				zoom={13}
				scrollWheelZoom={true}
			>
				<TileLayer
					attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
					url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
				/>
				<Marker icon={customMarker} position={[49.263569, -123.138573]}>
					<Popup>
						A pretty CSS3 popup. <br /> Easily customizable.
					</Popup>
				</Marker>
			</MapContainer>
		</>
	);
}

export default SimpleMap;
