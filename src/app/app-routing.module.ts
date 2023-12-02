import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './blog/blog.component';
import { CreatePostComponent } from './create-post/create-post.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { SoloPostComponent } from './blog/solo-post/solo-post.component';

const routes: Routes = [
  { path: 'blog', component: BlogComponent },
  { path: 'createPost', component: CreatePostComponent},
  { path: 'inscription', component: InscriptionComponent},
  { path: 'connexion', component: ConnexionComponent},
  { path: 'solopost/:id', component: SoloPostComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
