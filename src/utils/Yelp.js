const apiKey = 'PdoNeXS9_BYeqyySgK6by1a2pLZl5ISigZdKDIvUI98tATvckLICFWNDeVQ1bzfByBbZ82a2v9Oe8jLRkdqb0ZBnZGfD7PtJk3zbIiodVkWq4C5RzW8KpO-jY4qzZ3Yx';
const yelpBaseUrl = 'https://api.yelp.com/v3/';

const searchBusinesses = async (searchTerm, location, sortBy) => {                           
    const businessListEndpoint = '/businesses/search';
    const requestParams = `?location=${location}&term=${searchTerm}&sort_by=${sortBy}`
    const urlToFetch = `${yelpBaseUrl}${businessListEndpoint}${requestParams}`;

    try {
        const response = await fetch(urlToFetch, {
            headers: {
                'Authorization': `Bearer ${apiKey}`,
                'Content-Type': 'application/json'
            }
        });

        if(response.ok) {
            const jsonResponse = await response.json();
            return jsonResponse.businesses;
        } 

    } catch (error) {
        console.error(`Error en la petición: ${error.message}`);
        return null;
    }



};
                                                
export default searchBusinesses;