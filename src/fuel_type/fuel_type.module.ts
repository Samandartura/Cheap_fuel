import { Module } from '@nestjs/common';
import { FuelTypeService } from './fuel_type.service';
import { FuelTypeController } from './fuel_type.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { FuelType } from './models/fuel_type.model';

@Module({
  imports:[SequelizeModule.forFeature([FuelType])],
  controllers: [FuelTypeController],
  providers: [FuelTypeService]
})
export class FuelTypeModule {}
