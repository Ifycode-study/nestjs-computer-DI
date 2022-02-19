import { Injectable } from '@nestjs/common';
import { PowerService } from 'src/power/power.service';

@Injectable()
export class DiskService {
  constructor(private powerService: PowerService) { }

  getData() {
    console.log('Drawing 20 watt of power from PowerService');
    this.powerService.supplyPower(20);
    return 'Data!!!';
  }
}
