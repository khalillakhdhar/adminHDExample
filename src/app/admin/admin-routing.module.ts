import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { FournisseurComponent } from './fournisseur/fournisseur.component';
import { MouvementComponent } from './mouvement/mouvement.component';
import { UtilisateurComponent } from './utilisateur/utilisateur.component';
import { MaterielComponent } from './materiel/materiel.component';
import { AccueilComponent } from './accueil/accueil.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  {path: '', redirectTo: 'accueil', pathMatch: 'full'},
  {

    path: '', component: AdminComponent,

    children: [
      {path:'accueil',component:AccueilComponent},
      {path:'profil',component:ProfileComponent},
      { path: 'utilisateur', component: UtilisateurComponent },

      { path: 'fournisseur', component: FournisseurComponent },
      { path: 'materiel', component: MaterielComponent },
      { path: 'mouvement-stock', component: MouvementComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
