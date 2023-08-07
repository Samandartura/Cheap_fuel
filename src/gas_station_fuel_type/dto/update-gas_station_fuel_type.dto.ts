import { PartialType } from '@nestjs/mapped-types';
import { CreateGasStationFuelTypeDto } from './create-gas_station_fuel_type.dto';

export class UpdateGasStationFuelTypeDto extends PartialType(CreateGasStationFuelTypeDto) {}
