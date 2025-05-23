import { Component } from '@angular/core';
import { Materiel } from '../../../core/interfaces/materiel.interface';
import { MaterielService } from '../../../core/services/materiel.service';

@Component({
  selector: 'app-materiel',
  standalone: false,
  templateUrl: './materiel.component.html',
  styleUrl: './materiel.component.css'
})
export class MaterielComponent {
materiels: Materiel[] = [];
  newMateriel: Materiel = {
    id: 0, nom: '', description: '',
    quantiteStock: 0, seuilCritique: 0, quantite: 0
  };

  showModal = false;
  stockInput: number = 0;

  constructor(private materielService: MaterielService) {}

  ngOnInit(): void {
    this.loadMateriels();
  }

  loadMateriels(): void {
    this.materielService.getAll().subscribe(data => this.materiels = data);
  }

  openModal(): void {
    this.newMateriel = { id: 0, nom: '', description: '', quantiteStock: 0, seuilCritique: 0, quantite: 0 };
    this.showModal = true;
  }

  saveMateriel(): void {
    this.materielService.add(this.newMateriel).subscribe(() => {
      this.showModal = false;
      this.loadMateriels();
    });
  }

  deleteMateriel(id: number): void {
    if (confirm('Supprimer ce matériel ?')) {
      this.materielService.delete(id).subscribe(() => this.loadMateriels());
    }
  }

  addStock(m: Materiel): void {
    if (this.stockInput > 0)
      this.materielService.addStock(m.id, this.stockInput).subscribe(() => this.loadMateriels());
  }

  removeStock(m: Materiel): void {
    if (this.stockInput > 0)
      this.materielService.removeStock(m.id, this.stockInput).subscribe(() => this.loadMateriels());
  }
}
