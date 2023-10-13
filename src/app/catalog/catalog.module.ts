import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { SharedModule } from "../shared/shared.module";
import { CatalogRepositoryService } from "./catalog-repository.service";
import { CatalogComponent } from "./catalog.component";
import { FilterClassesService } from "./filter-classes.service";
import { OrderByPipe } from "./order-by.pipe";

@NgModule({
  imports: [SharedModule, RouterModule],
  exports: [],
  declarations: [CatalogComponent, OrderByPipe],
  providers: [CatalogRepositoryService, FilterClassesService],
})
export class CatalogModule {}
