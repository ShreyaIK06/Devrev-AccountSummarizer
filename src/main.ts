// src/main.ts
import { getClosedDeals } from './api/devrevApi'; // Import the API function

async function main() {
  try {
    // Fetch closed deals data
    const closedDeals = await getClosedDeals();
    console.log('Closed Deals:', closedDeals); // Log or process the data as needed
  } catch (error) {
    console.error('Error in main:', error);
  }
}

main();

