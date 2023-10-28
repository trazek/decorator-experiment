import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GatewayService {
  constructor() {}

  async getUserData() {
    const request = { foo: 'bar' };

    const mockAPICall = new Promise((resolve, reject) => {
      setTimeout(() => {
        if (false) resolve('done!');
        else reject('error occured');
      }, 1000);
    });

    const response = await mockAPICall;

    console.log(response);

    return response;
  }
}
