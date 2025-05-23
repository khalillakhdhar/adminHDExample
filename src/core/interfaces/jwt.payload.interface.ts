export interface JwtPayload {
  sub: string;       // Email ou nom d'utilisateur
  userId: number;    // Si tu l'as inclus dans le token
  roles: string;     // ou un tableau si besoin: string[]
  iat?: number;
  exp?: number;
}
