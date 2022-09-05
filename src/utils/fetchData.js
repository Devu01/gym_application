export const exerciseOptions = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '4f9006d845mshf162ab04b81c54ap18d06ajsn3ebb67831914',
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    },
  };
  
  export const youtubeOptions = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '4f9006d845mshf162ab04b81c54ap18d06ajsn3ebb67831914',
        'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
    },
  };
  
  export const fetchData = async (url, options) => {
    const res = await fetch(url, options);
    const data = await res.json();
  
    return data;
  };