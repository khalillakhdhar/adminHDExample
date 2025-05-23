import { jwtDecode } from 'jwt-decode';

export interface JwtPayload {
  sub: string;       // email
  userId: number;
  roles: string;
  iat?: number;
  exp?: number;
}

export function getDecodedToken(): JwtPayload | null {
  const token = localStorage.getItem('token');
  try {
    return token ? jwtDecode<JwtPayload>(token) : null;
  } catch (error) {
    console.error('Erreur de décodage du token :', error);
    return null;
  }
}
