import { Component } from '@angular/core';
import { Log } from '@decorators';
import { GatewayService } from './gateway.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'decorator-experiment';

  constructor(private gateway: GatewayService) {}

  @Log('test')
  async handleClick(data: unknown) {
    console.log('User clicked a button');

    let gatewayData;
    try {
      gatewayData = await this.gateway.getUserData();
    } catch (e) {
      //application handle error and throw for logging decorator
      throw e;
    }

    return gatewayData;
  }
}
