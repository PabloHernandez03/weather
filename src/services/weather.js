export async function getWeatherFrom(query = 'Guadalajara') {
	return fetch(`/api/get-weather?q=${query}`).then((res) => res.json());
}
