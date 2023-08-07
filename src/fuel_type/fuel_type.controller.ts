import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { FuelTypeService } from './fuel_type.service';
import { CreateFuelTypeDto } from './dto/create-fuel_type.dto';
import { UpdateFuelTypeDto } from './dto/update-fuel_type.dto';

@Controller('fuel-type')
export class FuelTypeController {
  constructor(private readonly fuelTypeService: FuelTypeService) {}

  @Post('create')
  create(@Body() createFuelTypeDto: CreateFuelTypeDto) {
    return this.fuelTypeService.createFuelType(createFuelTypeDto);
  }

  @Get('all')
  findAll() {
    return this.fuelTypeService.getFuelType();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.fuelTypeService.getFuelTypeById(+id);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateFuelTypeDto: UpdateFuelTypeDto,
  ) {
    return this.fuelTypeService.updateFuelType(+id, updateFuelTypeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.fuelTypeService.deleteFuelTypeById(+id);
  }
}
