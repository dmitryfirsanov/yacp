export interface UserPayload {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
}

export interface LoginResponse {
  accessToken: string;
}
