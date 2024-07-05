import GoogleMapComponent from "./GoogleMapComponent";
import { useLoadScript } from "@react-google-maps/api";

export default function Sample() {
    const { isLoaded } = useLoadScript({
      googleMapsApiKey:process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    });
    console.log("Bhay Api of Map Is Working");
    // console.log(process.env.REACT_APP_GOOGLE_MAPS_API_KEY);
    
    return isLoaded ? <GoogleMapComponent /> : <div>Loading...</div>;
}
