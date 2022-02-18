import { Module } from '@nestjs/common';
import { DiskService } from './disk.service';
import { DiskService } from './disk.service';

@Module({
  providers: [DiskService]
})
export class DiskModule {}
