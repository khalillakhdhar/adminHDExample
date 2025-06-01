import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { UtilisateurComponent } from './utilisateur/utilisateur.component';
import { FournisseurComponent } from './fournisseur/fournisseur.component';
import { MaterielComponent } from './materiel/materiel.component';
import { MouvementComponent } from './mouvement/mouvement.component';
import { FormsModule } from '@angular/forms';
import { ProfileComponent } from './profile/profile.component';
import { AccueilComponent } from './accueil/accueil.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeaderComponent } from './header/header.component';
import { NgChartsModule } from 'ng2-charts';


@NgModule({
  declarations: [
    AdminComponent,
    UtilisateurComponent,
    FournisseurComponent,
    MaterielComponent,
    MouvementComponent,
    ProfileComponent,
    AccueilComponent,
    FooterComponent,
    NavbarComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    NgChartsModule

  ]
})
export class AdminModule { }
