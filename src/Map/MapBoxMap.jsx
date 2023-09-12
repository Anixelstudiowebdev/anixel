import MapGL from 'react-map-gl';
import { useSelector } from 'react-redux';

const MapBoxMap = () => {
    const { latitude, longitude } = useSelector((state) => state.location);

    return (    
        <div className="p-5">
            <h2 className="text-3xl font-semibold">anixel studio</h2>
            <MapGL
                mapboxAccessToken="pk.eyJ1IjoiYWZ0YWIzZ2FtZXJzZGVuIiwiYSI6ImNsbTRnbXBmZTBsaXAzZm54MTN1N3FxdmYifQ.tvJxdo72aqUom46b9JgTxQ"
                initialViewState={{
                    longitude: longitude , // Use the user's longitude from Redux, default to 0 if not available
                    latitude: latitude ,   // Use the user's latitude from Redux, default to 0 if not available
                    zoom: 14,
                }}
                style={{ width: 600, height: 400 }}
                mapStyle="mapbox://styles/mapbox/streets-v9"
            />
        </div>
    );
};

export default MapBoxMap;
