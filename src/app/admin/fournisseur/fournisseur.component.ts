import { Component } from '@angular/core';
import { Fournisseur } from '../../../core/interfaces/fournisseur.interface';
import { FournisseurService } from '../../../core/services/fournisseur.service';

@Component({
  selector: 'app-fournisseur',
  standalone: false,
  templateUrl: './fournisseur.component.html',
  styleUrl: './fournisseur.component.css'
})
export class FournisseurComponent {
fournisseurs: Fournisseur[] = [];
newFournisseur: Fournisseur = {
  id: 0,
  nom: '',
  adresse: '',
  telephone: ''
};
  showModal = false;

  constructor(private fournisseurService: FournisseurService) {}

  ngOnInit(): void {
    this.loadFournisseurs();
  }

  loadFournisseurs(): void {
    this.fournisseurService.getAll().subscribe(data => this.fournisseurs = data);
  }

  openModal(): void {
const newFournisseur= {
  id: 0,
  nom: '',
  adresse: '',
  telephone: ''
} as Fournisseur;
    this.showModal = true;
  }

  saveFournisseur(): void {
    this.fournisseurService.add(this.newFournisseur).subscribe(() => {
      this.showModal = false;
      this.loadFournisseurs();
    });
  }

  deleteFournisseur(id: number): void {
    if (confirm('Supprimer ce fournisseur ?')) {
      this.fournisseurService.delete(id).subscribe(() => this.loadFournisseurs());
    }
  }
}
