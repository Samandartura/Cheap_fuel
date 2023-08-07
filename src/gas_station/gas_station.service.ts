import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { where } from 'sequelize';
import { CreateGasStationDto } from './dto/create-gas_station.dto';
import { UpdateGasStationDto } from './dto/update-gas_station.dto';
import { GasStation } from './models/gas_station.model';

@Injectable()
export class GasStationService {
  constructor(
    @InjectModel(GasStation) private gasStationRepo: typeof GasStation,
  ) {}

  async createGasStaion(
    createGasStationDto: CreateGasStationDto,
  ): Promise<GasStation> {
    const GasStation = await this.gasStationRepo.create(createGasStationDto);
    return GasStation;
  }

  async getGasStation() {
    const gasStation = await this.gasStationRepo.findOne({
      include: { all: true },
    });
    return gasStation;
  }

  async getGasStationById(id: number) {
    const getGasStationById = await this.gasStationRepo.findOne({
      where: { id },
      include: { all: true },
    });
    return getGasStationById;
  }

  async updateGasStation(
    id: number,
    updateGasStationDto: UpdateGasStationDto,
  ): Promise<[number, GasStation[]]> {
    const gasStation = await this.gasStationRepo.update(updateGasStationDto, {
      where: { id },
      returning: true,
    });
    return gasStation;
  }

  async deleteGasStationById(id: number):Promise<number> {
    const gasStation = await this.gasStationRepo.destroy({where:{id}})
    return gasStation;
  }
}
