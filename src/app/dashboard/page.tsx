"use client"
import { APIProvider } from "@vis.gl/react-google-maps";
import { Map, Marker } from "@vis.gl/react-google-maps";
import Image from "next/image";
import { useState } from "react";

export default function Dashboard() {
    const [markerLocation, setMarkerLocation] = useState({
        lat: 40.4406,
        lng: -79.9959,
    });
    return (
        <div className="w-full h-screen relative">
            <APIProvider apiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY || ""}>
                <Map
                    style={{ borderRadius: "20px" }}
                    defaultZoom={13}
                    defaultCenter={markerLocation}
                    gestureHandling={"greedy"}
                    disableDefaultUI
                >
                    <Marker position={markerLocation} />
                </Map>
            </APIProvider>

            <div className="absolute top-4 w-full flex justify-between">
                <div className="flex max-w-[320px] h-[30px] ml-8 mt-2 ring-2 ring-[#000000] 
            bg-[#000000] rounded-md">
                    <Image src="/search.svg" alt="search-icon" width={20} height={20}
                        className="invert ml-2" />
                    <input type="text" className="outline-none pl-2 font-poppins" />
                    <button className="bg-[#2C2B2B] font-poppins text-[#FFFFFF] px-2 mr-6 rounded-md">
                        Search</button>
                </div>

                <div>
                    <Image src="/HomePageLogo.svg" alt="1st_page" width={300} height={100} />
                </div>

                <div className="flex flex-col gap-2">
                    <p className="text-black font-poppins">Maya</p>
                    <div className="w-12 h-12 relative mr-8">
                        <Image src="/User.jpg" alt="user" fill className="rounded-full object-cover 
                        ring-3 ring-[#00308F]"/>
                    </div>
                </div>
            </div>
        </div>
    );
};
