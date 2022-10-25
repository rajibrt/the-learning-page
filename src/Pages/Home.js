
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Hero from '../Shared/Hero';
import RoomCard from '../Shared/RoomCard';

const Home = () => {
    const allRooms = useLoaderData();
    return (
        <div>
            <Hero></Hero>
            {/* Room Section */}
            <div id='more' className=' grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-4 p-4 flex flex-wrap justify-center'>
                {
                    allRooms.map(room => <RoomCard
                        key={room.id}
                        room={room}
                    ></RoomCard>)
                }
            </div>
        </div>
    );
};

export default Home;