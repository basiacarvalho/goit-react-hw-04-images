import axios from 'axios';

export const fetchImagesFromAPI = async (searchQuery, currentPage) => {
  const response = await axios.get('https://pixabay.com/api/', {
    params: {
      key: '36366632-d7829422fb4de051ba6d1d5b4',
      q: searchQuery,
      image_type: 'photo',
      orientation: 'horizontal',
      per_page: 12,
      page: currentPage,
      safesearch: 'true',
    },
  });
  return response.data;
};
