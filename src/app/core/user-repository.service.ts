import { Injectable } from "@angular/core";
import { Observable, EMPTY, throwError } from "rxjs";
import { delay } from "rxjs/operators";

import { IUser } from "../users/user.model";
import { ICredential } from "./credential.model";

@Injectable()
export class UserRepositoryService {
  currentUser: any;

  constructor() {}

  saveUser(user: IUser): Observable<any> {
    const classes = user.classes || [];
    this.currentUser = { ...user, classes: [...classes] };

    return EMPTY.pipe(delay(1000));
  }

  enroll(classId: string): Observable<any> {
    if (!this.currentUser)
      return throwError(() => new Error("User not signed in"));

    if (this.currentUser.classes.includes(classId))
      return throwError(() => new Error("Already enrolled"));

    this.currentUser = {
      ...this.currentUser,
      classes: this.currentUser.classes.concat(classId),
    };

    return EMPTY.pipe(delay(1000));
  }

  drop(classId: string): Observable<any> {
    if (!this.currentUser)
      return throwError(() => new Error("User not signed in"));

    if (!this.currentUser.classes.includes(classId))
      return throwError(() => new Error("Not enrolled"));

    this.currentUser = {
      ...this.currentUser,
      classes: this.currentUser.classes.filter((c: string) => c !== classId),
    };

    return EMPTY.pipe(delay(3000));
  }

  signIn(credentials: ICredential): Observable<any> {
    //Never, ever check credentials in client-side code.
    //This code is only here to supply a fake endpoint for signing in.
    if (
      credentials.email !== "hello@gg.com" ||
      credentials.password !== "hello@gg.com"
    )
      return throwError(() => new Error("Invalid login"));

    this.currentUser = {
      userId: "e61aebed-dbc5-437a-b514-02b8380d8efc",
      firstName: "Jim",
      lastName: "Cooper",
      email: "me@whitebeards.edu",
      classes: ["24ab7b14-f935-44c1-b91b-8598123ea54a"],
    };

    return EMPTY;
  }
}

const users = [
  {
    userId: "e61aebed-dbc5-437a-b514-02b8380d8efc",
    firstName: "Jim",
    lastName: "Cooper",
    email: "hello@gg.com",
    password: "hello@gg.com",
    classes: ["24ab7b14-f935-44c1-b91b-8598123ea54a"],
  },
];
