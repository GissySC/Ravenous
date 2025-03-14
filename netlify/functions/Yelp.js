import fetch from "node-fetch";
require("dotenv").config();

const apiKey = process.env.YELP_API_KEY;
const yelpBaseUrl = 'https://api.yelp.com/v3/';
const businessListEndpoint = '/businesses/search';

export async function handler(event) {                           
  
    const { searchTerm, location, sortBy } = event.queryStringParameters;

    const requestParams = `?location=${location}&term=${searchTerm}&sort_by=${sortBy}`
    const urlToFetch = `${yelpBaseUrl}${businessListEndpoint}${requestParams}`;

    try {
        const response = await fetch(urlToFetch, {
            headers: {
                'Authorization': `Bearer ${apiKey}`,
                'Content-Type': 'application/json'
            }
        });

        if(!response.ok) {
            throw new Error(`Error en la petición: ${response.statusText}`)
        }

        const jsonResponse = await response.json();

        return {
            statusCode: 200,
            body: JSON.stringify(jsonResponse.businesses),
        };

    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({error: error.message}),
        };
    }
};
                                                
