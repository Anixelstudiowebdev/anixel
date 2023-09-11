import MapGL from 'react-map-gl';
import { useSelector } from 'react-redux';
import  { useEffect } from 'react';

const MapBoxMap = () => {
    const { userLocation } = useSelector((state) => state.location);

    useEffect(() => {
        // Dispatch getUserLocation action if needed
        // (you can decide whether to dispatch it here or not)
    }, []);
    
    return (    
        <div className="p-5">
            <h2 className="text-3xl font-semibold">anixel studio</h2>
            <MapGL
                mapboxAccessToken="pk.eyJ1IjoiYWZ0YWIzZ2FtZXJzZGVuIiwiYSI6ImNsbTRnbXBmZTBsaXAzZm54MTN1N3FxdmYifQ.tvJxdo72aqUom46b9JgTxQ"
                initialViewState={{
                    longitude: userLocation.lng, // Use the user's longitude from Redux
                    latitude: userLocation.lat,  // Use the user's latitude from Redux
                    zoom: 14,
                }}
                style={{ width: 600, height: 400 }}
                mapStyle="mapbox://styles/mapbox/streets-v9"
            />
        </div>
    );
};

export default MapBoxMap;
