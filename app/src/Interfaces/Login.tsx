export interface Login {
  isAuthenticated: boolean;
  username: null | string;
  token: null | string;
}

export interface User {
  username?: string;
  password?: string;
}

export interface Google {
  token: string;
  refreshToken: any;
  expiresIn: number;
  id: string;
  nickname: any;
  name: string;
  email: string;
  avatar: string;
  user: GoogleUser;
  avatar_original: string;
}

export interface GoogleUser {
  sub: string;
  name: string;
  given_name: string;
  family_name: string;
  picture: string;
  email: string;
  email_verified: boolean;
  locale: string;
  id: string;
  verified_email: boolean;
  link: any;
}

export class GoogleModel implements Google {
  token: string = '';
  refreshToken: any;
  expiresIn: number = 0;
  id: string = '';
  nickname: any;
  name: string = '';
  email: string = '';
  avatar: string = '';
  user: any = {};
  avatar_original: string = '';
}
