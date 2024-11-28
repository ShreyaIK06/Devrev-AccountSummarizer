import axios from 'axios';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

// Base URL for the DevRev API
const baseUrl = 'https://api.devrev.ai'; 

// Use the token from the environment file
const apiToken = process.env.DEVREV_API_TOKEN;  // Retrieve token from environment

if (!apiToken) {
  throw new Error('API Token is not defined in .env');
}

// Endpoint to fetch closed deals (replace with the actual endpoint if different)
const endpoint = '/opportunities/closed'; 
const fullUrl = `${baseUrl}${endpoint}`; // Combine the base URL and endpoint

// Function to get closed deals
export const getClosedDeals = async (): Promise<any> => {
  try {
    const response = await axios.get(fullUrl, {
      headers: {
        'Authorization': `Bearer ${apiToken}`,  // Add your API token here
        'Accept': 'application/json',           // Set the Accept header for JSON response
        'Content-Type': 'application/json',     // Set the Content-Type for the request
      },
    });
    return response.data;  // Return the response data
  } catch (error) {
    // Handle the error if the request fails
    console.error('Error fetching closed deals:', error);
    throw error;  // Re-throw the error so that it can be handled elsewhere
  }
};
