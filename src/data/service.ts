export namespace Service {
  export const fetchData = async (url: string): Promise<any> => {
    const result = await fetch(url, {
      method: 'get',
    });
    return await result.json();
  };

  export const postData = async (url: string, configs?: RequestInit) => {
    const result = await fetch(url, {
      method: 'post',
      ...configs,
    });
    return await result.json();
  };

  export const configs = {
    API_BASE_URL: '/api',
  };
}
