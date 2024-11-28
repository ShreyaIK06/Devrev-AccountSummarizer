import { getClosedDeals } from './api/devrevApi'; // Import the function

(async () => {
  try {
    const closedDeals = await getClosedDeals(); // Call the function
    console.log('Closed Deals:', closedDeals); // Log the response
  } catch (error) {
    console.error('Error fetching closed deals:', error); // Handle any errors
  }
})();
