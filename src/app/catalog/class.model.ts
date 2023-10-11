import { ICourse } from "./course.model";

export interface IClass {
  classId: string;
  course: ICourse;
  professor: string;
  days: string;
  time: number;
  seatsAvailable: number;
  enrolled: boolean;
  processing: boolean;
}
