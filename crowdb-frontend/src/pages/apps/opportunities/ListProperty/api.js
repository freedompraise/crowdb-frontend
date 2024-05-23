
// api.js
const API_URL = process.env.VITE_API_URL;
console.log('API_URL:', API_URL);

export const createProperty = async (propertyData) => {
    try {
      const response = await fetch(`${API_URL}/packages`, {
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
      return data; // Handle the response as needed
    } catch (error) {
      console.error("Error:", error.message);
    }
  };
  
  export const defaultFormData = {
        name: '',
        images: [],
        description: '',
        slots: 0,
        marketValue: 0,
        currency: 'NGN',
        sizeSqft: '', // Changed to sizeSqft for clarity
        zipCode: '',
        address: '',
        owner: '',
        previousOwners: [],
        voteOptions: ['Rental', 'Sale', 'AirBnB', 'other'],
        amenities: [],
      }