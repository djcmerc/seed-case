import { User } from '../../components/shared/types/User';

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

export const signupUser = async (userInfo: User) => {
  const fullUrl = `${process.env.REACT_APP_BASE_URL}/users/signup`;
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(userInfo)
  };
  try {
    const response = await fetch(fullUrl, requestOptions);
    const success = await response.json();

    return success.result as Boolean;
  } catch (e) {
    console.error(e);
  }
};
