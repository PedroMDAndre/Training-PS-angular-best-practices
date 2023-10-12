import { Component } from "@angular/core";
import { CatalogRepositoryService } from "./catalog-repository.service";
import { UserRepositoryService } from "../core/user-repository.service";
import { IClass } from "./class.model";
import { FilterClassesService } from "./filter-classes.service";

@Component({
  styleUrls: ["./catalog.component.css"],
  templateUrl: "./catalog.component.html",
})
export class CatalogComponent {
  classes: IClass[] = [];
  visibleClasses: IClass[] = [];

  constructor(
    private catalogRepository: CatalogRepositoryService,
    public userRepository: UserRepositoryService,
    private filterClassesService: FilterClassesService
  ) {}

  ngOnInit() {
    this.catalogRepository.getCatalog().subscribe((classes) => {
      this.classes = classes;
      this.applyFilter("");
    });
  }

  enroll(classToEnroll: IClass) {
    classToEnroll.processing = true;
    this.userRepository.enroll(classToEnroll.classId).subscribe(
      null,
      (err) => {
        console.error(err);
        classToEnroll.processing = false;
      }, //add a toast message or something
      () => {
        classToEnroll.processing = false;
        classToEnroll.enrolled = true;
      }
    );
  }

  drop(classToDrop: IClass) {
    classToDrop.processing = true;
    this.userRepository.drop(classToDrop.classId).subscribe(
      null,
      (err) => {
        console.error(err);
        classToDrop.processing = false;
      }, //add a toast message or something
      () => {
        classToDrop.processing = false;
        classToDrop.enrolled = false;
      }
    );
  }

  applyFilter(filter: string) {
    this.visibleClasses = this.filterClassesService.applyFilter(
      filter,
      this.classes
    );
  }
}
