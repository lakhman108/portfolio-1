import React, { useEffect, useState } from 'react';
import { getHotels, getRooms } from './components/fetchexmple';

function App() {
    const [hotels, setHotels] = useState([]);
    const [rooms, setRooms] = useState([]);

    useEffect(() => {
        const fetchHotels = async () => {
            try {
                const hotelsData = await getHotels();
                setHotels(hotelsData);
            } catch (error) {
                console.error('Error fetching hotels:', error);
            }
        };

        const fetchRooms = async () => {
            try {
                const roomsData = await getRooms();
                setRooms(roomsData);
            } catch (error) {
                console.error('Error fetching rooms:', error);
            }
        };

        fetchHotels();
        fetchRooms();
    }, []);

    return (
        <div className="App">
            <h1>Hotels</h1>
            <ul>
                {hotels&& hotels.map(hotel => (
                    <li key={hotel.id}>{hotel.name}</li>
                ))}
            </ul>

            <h1>Rooms</h1>
            <ul>
                {rooms && rooms.map(room => (
                    <li key={room.id}>{room.room_number} - {room.room_type}</li>
                ))}
            </ul>
        </div>
    );
}

export default App;