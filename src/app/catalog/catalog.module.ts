import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { SharedModule } from "../shared/shared.module";
import { CatalogRepositoryService } from "./catalog-repository.service";
import { CatalogComponent } from "./catalog.component";

@NgModule({
  imports: [SharedModule, RouterModule],
  exports: [],
  declarations: [CatalogComponent],
  providers: [CatalogRepositoryService],
})
export class CatalogModule {}
