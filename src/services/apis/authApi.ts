import {
  jwtTokenKey,
  microservicesBaseUrl,
  userIdKey,
} from "../../utils/constants";

interface LoginResponse {
  id: string;
  token: string;
}

interface ErrorResponse {
  message: string;
}

interface LoginResult {
  success: boolean;
  message?: string;
}

export const login = async (email: string, password: string): Promise<LoginResult> => {
  try {
    const response = await fetch(`${microservicesBaseUrl}/auth/login`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password }),
    });
    if (!response.ok) {
      const { message }: ErrorResponse = await response.json();
      console.log("message: ", message);
      throw Error(message);
    }

    const { id, token }: LoginResponse = await response.json();

    localStorage.setItem(userIdKey, id);
    localStorage.setItem(jwtTokenKey, token);

    return  { success: true }
  } catch (error) {
    if (error instanceof Error) {
      return { success: false, message: error.message };
    }

    return { success: false, message: 'Something went wrong' }
  }
};
