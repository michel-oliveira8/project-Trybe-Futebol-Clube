export interface Ilogin {
  email: string;
  password:string;
}

export interface TokenPayload {
  id: number,
  username: string,
}

export interface User {
  id: number;
  username: string,
  role: string,
  email: string,
}
