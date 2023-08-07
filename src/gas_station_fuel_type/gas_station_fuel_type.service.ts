import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateGasStationFuelTypeDto } from './dto/create-gas_station_fuel_type.dto';
import { UpdateGasStationFuelTypeDto } from './dto/update-gas_station_fuel_type.dto';
import { GasStationFuelType } from './models/gas_station_fuel_type.model';


@Injectable()
export class GasStationFuelTypeService {
  constructor(
    @InjectModel(GasStationFuelType)
    private gasStationFuelTypeRepo: typeof GasStationFuelType,
  ) {}

  async createGasStationFuelType(
    createGasStationFuelTypeDto: CreateGasStationFuelTypeDto,
  ): Promise<GasStationFuelType> {
    const GasStationFuelType = await this.gasStationFuelTypeRepo.create(
      createGasStationFuelTypeDto,
    );
    return GasStationFuelType;
  }

  async getGasStationFuelType() {
    const gasStationFuelTypeBranch =
      await this.gasStationFuelTypeRepo.findOne({
        include: { all: true },
      });
    return gasStationFuelTypeBranch;
  }

  async getGasStationFuelTypeById(id: number) {
    const getGasStationFuelTypeById =
      await this.gasStationFuelTypeRepo.findOne({
        where: { id },
        include: { all: true },
      });
    return getGasStationFuelTypeById;
  }

  async updateGasStationFuelType(
    id: number,
    updateGasStationFuelTypeDto: UpdateGasStationFuelTypeDto,
  ): Promise<[number, GasStationFuelType[]]> {
    const gasStationFuelTypeBranch = await this.gasStationFuelTypeRepo.update(
      updateGasStationFuelTypeDto,
      {
        where: { id },
        returning: true,
      },
    );
    return gasStationFuelTypeBranch;
  }

  async deleteGasStationFuelTypeById(id: number): Promise<number> {
    const gasStationFuelTypeBranch =
      await this.gasStationFuelTypeRepo.destroy({ where: { id } });
    return gasStationFuelTypeBranch;
  }
}
