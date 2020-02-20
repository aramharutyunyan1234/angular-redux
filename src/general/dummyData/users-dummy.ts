import {Observable, of} from "rxjs";

export class UsersDummy {
  constructor() {}
  users= [
    {
      firstName: 'Aram',
      lastName: 'Harutyunyan',
      email: 'aramwebmail@gmail.com',
      gender: 'Male',
      password: '123'
    },
    {
      firstName: 'Test',
      lastName: 'testyan',
      email: 't@t.tt',
      gender: 'Female',
      password: '123'
    },
    {
      firstName: 'Test1',
      lastName: '1testyan',
      email: '1t@t.tt',
      gender: 'Female',
      password: '123'
    },
    {
      firstName: '2Test',
      lastName: '2testyan',
      email: '2t@t.tt',
      gender: 'Female',
      password: '123'
    },
    {
      firstName: '3Test',
      lastName: '3testyan',
      email: '3t@t.tt',
      gender: 'Female',
      password: '123'
    },
    {
      firstName: 'Vaspuryan',
      lastName: 'Vaspur',
      email: '4t@t.tt',
      gender: 'Female',
      password: '123'
    },
    {
      firstName: '5Test',
      lastName: '5testyan',
      email: '5t@t.tt',
      gender: 'Female',
      password: '123'
    },
    {
      firstName: 'Gnel',
      lastName: 'PilipoYanc',
      email: '6t@t.tt',
      gender: 'Female',
      password: '123'
    },
    {
      firstName: 'Harutyun',
      lastName: 'Harutyunyan',
      email: '7t@t.tt',
      gender: 'Female',
      password: '123'
    },
    {
      firstName: 'Nikoxos',
      lastName: 'Nikoxosyan',
      email: '8t@t.tt',
      gender: 'Female',
      password: '123'
    },
    {
      firstName: 'Alaverd',
      lastName: 'Alaverdyan',
      email: '9t@t.tt',
      gender: 'Female',
      password: '123'
    }
  ];

  getUsersList() {
    return of(this.users);
  }

  /*putUser(data: any) {
    this.users.push(data);
    return of(data);
  }

  getUser(data: any): Observable<any> {
    return of(this.users.find(user => user.email === data.email && user.password === data.password));
  }*/



}
