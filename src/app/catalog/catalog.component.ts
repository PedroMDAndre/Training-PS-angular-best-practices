import { Component } from "@angular/core";
import { CatalogRepositoryService } from "./catalog-repository.service";
import { UserRepositoryService } from "../core/user-repository.service";
import { IClass } from "./class.model";
import { IUser } from "../users/user.model";

@Component({
  styleUrls: ["./catalog.component.css"],
  templateUrl: "./catalog.component.html",
})
export class CatalogComponent {
  classes: IClass[] = [];
  visibleClasses: IClass[] = [];

  constructor(
    private catalogRepository: CatalogRepositoryService,
    public userRepository: UserRepositoryService
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
    if (!filter) {
      this.visibleClasses = this.classes;
      return;
    }

    if (filter === "GEN") {
      this.showOnlyGeneralCourses();
      return;
    }

    this.visibleClasses = this.classes.filter((c) =>
      c.course.courseNumber.startsWith(filter)
    );
  }

  showOnlyGeneralCourses(): void {
    this.visibleClasses = this.classes.filter(
      (c) =>
        !c.course.courseNumber.startsWith("CH") &&
        !c.course.courseNumber.startsWith("PO") &&
        !c.course.courseNumber.startsWith("SP")
    );
  }
}
