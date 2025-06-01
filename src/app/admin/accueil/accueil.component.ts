import { Component } from '@angular/core';
import { Fournisseur } from '../../../core/interfaces/fournisseur.interface';
import { FournisseurService } from '../../../core/services/fournisseur.service';
import { MaterielService } from '../../../core/services/materiel.service';
import { UserService } from '../../../core/services/user.service';

@Component({
  selector: 'app-accueil',
  standalone: false,
  templateUrl: './accueil.component.html',
  styleUrl: './accueil.component.css'
})
export class AccueilComponent {
 totalUsers = 0;
  totalMateriels = 0;
  totalFournisseurs = 0;
  stockCritiquePercentage = 0;

  fournisseurs: Fournisseur[] = [];

  pieChartData = {
    labels: ['Stock critique', 'Stock satisfaisant'],
    datasets: [
      {
        data: [0, 100],
        backgroundColor: ['#dc3545', '#28a745']
      }
    ]
  };

  constructor(
    private userService: UserService,
    private materielService: MaterielService,
    private fournisseurService: FournisseurService
  ) {}

  ngOnInit(): void {
    this.loadStats();
    this.loadFournisseurs();
  }

  loadStats(): void {
    this.userService.countUsers().subscribe(u => this.totalUsers = u);
    this.materielService.countMateriels().subscribe(m => this.totalMateriels = m);
    this.fournisseurService.countFournisseurs().subscribe(f => this.totalFournisseurs = f);
    this.materielService.getStockCritiquePercentage().subscribe(p => {
      this.stockCritiquePercentage = +p.toFixed(1);
      this.pieChartData.datasets[0].data = [
        this.stockCritiquePercentage,
        100 - this.stockCritiquePercentage
      ];
    });
  }

  loadFournisseurs(): void {
    this.fournisseurService.getAll().subscribe(data => {
      this.fournisseurs = data;
    });
  }
}
