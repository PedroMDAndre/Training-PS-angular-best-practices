import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { UserRepositoryService } from "./user-repository.service";
import { AccountMenuComponent } from "./account-menu.component";
import { NavBarComponent } from "./nav-bar.component";
import { RouterModule } from "@angular/router";

@NgModule({
  imports: [CommonModule, RouterModule],
  exports: [AccountMenuComponent, NavBarComponent],
  declarations: [AccountMenuComponent, NavBarComponent],
  providers: [UserRepositoryService],
})
export class CoreModule {}
