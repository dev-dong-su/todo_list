import axios from 'axios';

export const client = axios.create({
  baseURL: 'https://pre-onboarding-selection-task.shop/',
});

export const handleError = error => {
  if (error.response) {
    alert(error.response.data.message);
  } else if (error.request) {
    console.log(error.request);
  }
};
