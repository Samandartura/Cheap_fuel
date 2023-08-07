import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { GasStationBranchService } from './gas_station_branch.service';
import { CreateGasStationBranchDto } from './dto/create-gas_station_branch.dto';
import { UpdateGasStationBranchDto } from './dto/update-gas_station_branch.dto';
import { GasStationBranch } from './models/gas_station_branch.model';

@Controller('gas-station-branch')
export class GasStationBranchController {
  constructor(
    private readonly gasStationBranchService: GasStationBranchService,
  ) {}

  @Post('create')
  async create(
    @Body() createGasStationBranchDto: CreateGasStationBranchDto,
  ): Promise<GasStationBranch> {
    return this.gasStationBranchService.createGasStationBranch(
      createGasStationBranchDto,
    );
  }

  @Get('all')
  async findAll():Promise<GasStationBranch> {
    return this.gasStationBranchService.getGasStationBranch();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.gasStationBranchService.getGasStationBranchById(+id);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateGasStationBranchDto: UpdateGasStationBranchDto,
  ) {
    return this.gasStationBranchService.updateGasStationBranch(+id, updateGasStationBranchDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.gasStationBranchService.deleteGasStationBranchById(+id);
  }
}
