import axios from 'axios';

axios.defaults.baseURL = 'https://66b1f8e71ca8ad33d4f5f63e.mockapi.io';

export const getCampers = async () => {
  const response = await axios.get('/campers');
  return response.data.items;
};

// export const getCamperById = async camperId => {
//   try {
//     console.log(`Fetching camper with ID: ${camperId}`); // Логування для перевірки ID
//     const response = await fetch(`https://your-api-url/campers/${camperId}`);
//     if (!response.ok) {
//       throw new Error('Network response was not ok');
//     }
//     const data = await response.json();
//     console.log('Received data:', data); // Логування даних
//     return data;
//   } catch (error) {
//     console.error('Error fetching camper:', error);
//     return null; // або кинь помилку
//   }
// };

export const getCamperById = async camperId => {
  const response = await axios.get(`/campers/${camperId}`);
  console.log(response.data);
  return response.data;
};
