import {
  BelongsToMany,
  Column,
  DataType,
  Model,
  Table,
} from 'sequelize-typescript';
import { GasStationBranch } from 'src/gas_station_branch/models/gas_station_branch.model';
import { GasStationFuelType } from 'src/gas_station_fuel_type/models/gas_station_fuel_type.model';

interface FuelTypeAttr {
  name: string;
}

@Table({ tableName: 'fuel_type' })
export class FuelType extends Model<FuelType, FuelTypeAttr> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column({
    type: DataType.STRING,
  })
  name: string;

  @BelongsToMany(() => GasStationBranch, () => GasStationFuelType)
  gasStationBranch: GasStationBranch[];
}
