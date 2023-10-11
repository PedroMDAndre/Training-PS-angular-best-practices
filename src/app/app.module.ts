import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";

import { appRoutes } from "./routes";
import { AppComponent } from "./app.component";
import { CatalogComponent } from "./catalog/catalog.component";
import { RegisterComponent } from "./users/register.component";
import { SignInComponent } from "./users/sign-in.component";
import { LoadingComponent } from "./components/loading-spinner.component";
import { CatalogRepositoryService } from "./catalog/catalog-repository.service";
import { CoreModule } from "./core/core.module";

@NgModule({
  imports: [
    CoreModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
  ],
  declarations: [
    AppComponent,
    CatalogComponent,
    RegisterComponent,
    SignInComponent,
    LoadingComponent,
  ],
  providers: [CatalogRepositoryService],
  bootstrap: [AppComponent],
})
export class AppModule {}
