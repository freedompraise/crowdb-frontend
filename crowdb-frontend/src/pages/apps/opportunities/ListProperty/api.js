
// api.js
const API_URL = import.meta.env.VITE_API_URL;

export const createProperty = async (propertyData) => {
    try {
      const response = await fetch(`${API_URL}/package`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(propertyData),
      });
  
      if (!response.ok) {
        throw new Error("Error sending data to the server");
      }
  
      const data = await response.json();
      return data; 
    } catch (error) {
      console.error("Error:", error.message);
    }
  };
  
  export const defaultFormData = {
        name: '',
        images: [],
        description: '',
        slots: 0,
        price: 0,
        currency: 'NGN',
        size: '',
        zipcode: '',
        address: '',
        owner: '',
        voteOptions: ['Rental', 'Sale', 'AirBnB', 'other'],
        amenities: [],
      }