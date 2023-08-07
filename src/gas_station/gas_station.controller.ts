import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { GasStationService } from './gas_station.service';
import { CreateGasStationDto } from './dto/create-gas_station.dto';
import { UpdateGasStationDto } from './dto/update-gas_station.dto';
import { GasStation } from './models/gas_station.model';

@Controller('gas-station')
export class GasStationController {
  constructor(private readonly gasStationService: GasStationService) {}

  @Post('create')
  create(@Body() createGasStationDto: CreateGasStationDto) {
    return this.gasStationService.createGasStaion(createGasStationDto);
  }

  @Get('all')
  async getGasStation() {
    return this.gasStationService.getGasStation();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.gasStationService.getGasStationById(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateGasStationDto: UpdateGasStationDto):Promise<[number,GasStation[]]> {
    return this.gasStationService.updateGasStation(+id, updateGasStationDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.gasStationService.deleteGasStationById(+id);
  }
}
