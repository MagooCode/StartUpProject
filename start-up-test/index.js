// import axios from 'axios';

(async () => {
    const url = 'https://health-conditions-file.p.rapidapi.com/records?limit=500&orderBy=dataListIndex_asc';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '76564ce67dmsh972c535d0e0ede2p1da757jsnf1dc23ffa3fb',
		'X-RapidAPI-Host': 'health-conditions-file.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}
  })();