import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";

import { appRoutes } from "./routes";
import { AppComponent } from "./app.component";
import { CatalogComponent } from "./catalog/catalog.component";
import { RegisterComponent } from "./users/register.component";
import { SignInComponent } from "./users/sign-in.component";
import { CatalogRepositoryService } from "./catalog/catalog-repository.service";
import { CoreModule } from "./core/core.module";
import { SharedModule } from "./shared/shared.module";

@NgModule({
  imports: [
    CoreModule,
    SharedModule,
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
  ],
  providers: [CatalogRepositoryService],
  bootstrap: [AppComponent],
})
export class AppModule {}
