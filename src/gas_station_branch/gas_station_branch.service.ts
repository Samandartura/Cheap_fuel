import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateGasStationBranchDto } from './dto/create-gas_station_branch.dto';
import { UpdateGasStationBranchDto } from './dto/update-gas_station_branch.dto';
import { GasStationBranch } from './models/gas_station_branch.model';


@Injectable()
export class GasStationBranchService {
  constructor(
    @InjectModel(GasStationBranch) private gasStationBranchBranchRepo: typeof GasStationBranch,
  ) {}

  async createGasStationBranch(
    createGasStationBranchDto: CreateGasStationBranchDto,
  ): Promise<GasStationBranch> {
    const GasStationBranch = await this.gasStationBranchBranchRepo.create(createGasStationBranchDto);
    return GasStationBranch;
  }

  async getGasStationBranch() {
    const gasStationBranchBranch = await this.gasStationBranchBranchRepo.findOne({
      include: { all: true },
    });
    return gasStationBranchBranch;
  }

  async getGasStationBranchById(id: number) {
    const getGasStationBranchById = await this.gasStationBranchBranchRepo.findOne({
      where: { id },
      include: { all: true },
    });
    return getGasStationBranchById;
  }

  async updateGasStationBranch(
    id: number,
    updateGasStationBranchDto: UpdateGasStationBranchDto,
  ): Promise<[number, GasStationBranch[]]> {
    const gasStationBranchBranch = await this.gasStationBranchBranchRepo.update(updateGasStationBranchDto, {
      where: { id },
      returning: true,
    });
    return gasStationBranchBranch;
  }

  async deleteGasStationBranchById(id: number): Promise<number> {
    const gasStationBranchBranch = await this.gasStationBranchBranchRepo.destroy({ where: { id } });
    return gasStationBranchBranch;
  }
}
