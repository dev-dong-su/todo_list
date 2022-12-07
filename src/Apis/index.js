import axios from 'axios';

export const client = axios.create({
  baseURL: 'https://pre-onboarding-selection-task.shop/',
});

export const handleError = (error) => {
  if (error.response) {
    // 요청이 이루어졌으며 서버가 2xx의 범위를 벗어나는 상태 코드로 응답했습니다.
    alert(error.response.data.message);
  } else if (error.request) {
    // 요청이 이루어 졌으나 응답을 받지 못했습니다.
    console.log(error.request);
  }
};
