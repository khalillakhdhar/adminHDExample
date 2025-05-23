import { Fournisseur } from './fournisseur.interface';
import { Materiel } from './materiel.interface';

export interface Livraison {
  id?: number;
  dateLivraison: string; // ou Date
  quantiteLivree: number;
  fournisseur: Fournisseur;
  materiel: Materiel;
}
