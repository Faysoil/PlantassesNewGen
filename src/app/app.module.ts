import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlogComponent } from './blog/blog.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatListModule } from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { CreatePostComponent } from './create-post/create-post.component';
import { SoloPostComponent } from './blog/solo-post/solo-post.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { ToastrModule } from 'ngx-toastr';
import { AuthInterceptor } from 'src/auth-interceptor';
import { CommentComponent } from './comment/comment.component';
import { MessagerieComponent } from './messagerie/messagerie.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProfilComponent } from './profil/profil.component';

@NgModule({
  declarations: [
    AppComponent,
    BlogComponent,
    CreatePostComponent,
    SoloPostComponent,
    InscriptionComponent,
    ConnexionComponent,
    CommentComponent,
    MessagerieComponent,
    ProfilComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    ToastrModule.forRoot(),
    FormsModule,
    MatListModule,
    MatFormFieldModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
  ],
  providers: [    {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
