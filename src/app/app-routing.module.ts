import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ProductEditComponent } from './components/product-edit/product-edit.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductsComponent } from './components/products/products.component';
import { AccessGuard } from './services/guards/access.guard';
import { AuthGuard } from './services/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/index',
    pathMatch:'full'
  },
  {
    path: 'index',
    component: HomeComponent,
    canDeactivate:[AccessGuard]
  },
  {
    path: 'product',
    component: ProductsComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: ':id',
        component: ProductDetailComponent
      },
      {
        path: 'edit/:id',
        component: ProductEditComponent
      }
    ]
  },
  {
    path: 'products',
    component: ProductListComponent,
    canActivate: [AuthGuard],
  },

  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '**',
    component:NotfoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
