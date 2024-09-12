import axios from 'axios';

const API_URL = 'https://localhost:8080/api/';

export const getHotels = async () => {
    try {
        const response = await axios.get(`${API_URL}hotels/`);
        return response.data;
    } catch (error) {
        console.error('Error fetching hotels:', error);
        throw error;
    }
};

export const getRooms = async () => {
    try {
        const response = await axios.get(`${API_URL}rooms/`);
        return response.data;
    } catch (error) {
        console.error('Error fetching rooms:', error);
        throw error;
    }
};

// Add more API methods as needed (createHotel, updateHotel, deleteHotel, etc.)
