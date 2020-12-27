import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AuthguardService } from './service/authguard.service';


const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: '', redirectTo: 'admin/painel', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'admin/painel', loadChildren: () => 
    import('./components/admin/painel/painel.module').then(m => 
      m.PainelModule), canActivate: [AuthguardService]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
