import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateFuelTypeDto } from './dto/create-fuel_type.dto';
import { UpdateFuelTypeDto } from './dto/update-fuel_type.dto';
import { FuelType } from './models/fuel_type.model';

@Injectable()
export class FuelTypeService {
  constructor(@InjectModel(FuelType) private fuelTypeRepo: typeof FuelType) {}

  async createFuelType(
    createFuelTypeDto: CreateFuelTypeDto,
  ): Promise<FuelType> {
    const FuelType = await this.fuelTypeRepo.create(createFuelTypeDto);
    return FuelType;
  }

  async getFuelType() {
    const fuelType = await this.fuelTypeRepo.findOne({
      include: { all: true },
    });
    return fuelType;
  }

  async getFuelTypeById(id: number) {
    const getFuelTypeById = await this.fuelTypeRepo.findOne({
      where: { id },
      include: { all: true },
    });
    return getFuelTypeById;
  }

  async updateFuelType(
    id: number,
    updateFuelTypeDto: UpdateFuelTypeDto,
  ): Promise<[number, FuelType[]]> {
    const fuelType = await this.fuelTypeRepo.update(updateFuelTypeDto, {
      where: { id },
      returning: true,
    });
    return fuelType;
  }

  async deleteFuelTypeById(id: number): Promise<number> {
    const fuelType = await this.fuelTypeRepo.destroy({ where: { id } });
    return fuelType;
  }
}
