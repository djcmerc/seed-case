export const getLogin = async (email: string, password: string) => {
  const fullUrl = `${process.env.REACT_APP_BASE_URL}/users/login`;
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email: email, password: password })
  };
  try {
    const response = await fetch(fullUrl, requestOptions);

    if (response.status === 200) {
      const responseJson = await response.json();

      return responseJson.email;
    } else {
      return null;
    }
  } catch (e) {
    console.error(e);
  }
};
