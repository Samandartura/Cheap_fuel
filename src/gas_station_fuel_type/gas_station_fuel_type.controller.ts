import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { GasStationFuelTypeService } from './gas_station_fuel_type.service';
import { CreateGasStationFuelTypeDto } from './dto/create-gas_station_fuel_type.dto';
import { UpdateGasStationFuelTypeDto } from './dto/update-gas_station_fuel_type.dto';

@Controller('gas-station-fuel-type')
export class GasStationFuelTypeController {
  constructor(private readonly gasStationFuelTypeService: GasStationFuelTypeService) {}

  @Post('create')
  create(@Body() createGasStationFuelTypeDto: CreateGasStationFuelTypeDto) {
    return this.gasStationFuelTypeService.createGasStationFuelType(createGasStationFuelTypeDto);
  }

  @Get('all')
  findAll() {
    return this.gasStationFuelTypeService.getGasStationFuelType();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.gasStationFuelTypeService.getGasStationFuelTypeById(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateGasStationFuelTypeDto: UpdateGasStationFuelTypeDto) {
    return this.gasStationFuelTypeService.updateGasStationFuelType(+id, updateGasStationFuelTypeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.gasStationFuelTypeService.deleteGasStationFuelTypeById(+id);
  }
}
