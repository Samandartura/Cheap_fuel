import {
  BelongsTo,
  BelongsToMany,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { FuelType } from 'src/fuel_type/models/fuel_type.model';
import { GasStation } from 'src/gas_station/models/gas_station.model';
import { GasStationFuelType } from 'src/gas_station_fuel_type/models/gas_station_fuel_type.model';

interface GasStationBranchAttr {
  gas_station_id: number;
  branch_name: string;
  address: string;
  location: string;
  phone_number: string;
}

@Table({ tableName: 'gas_station_branch' })
export class GasStationBranch extends Model<
  GasStationBranch,
  GasStationBranchAttr
> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ForeignKey(() => GasStation)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    onDelete: 'CASCADE',
  })
  gas_station_id: number;

  @BelongsTo(() => GasStation)
  gasStations: GasStation;

  @Column({
    type: DataType.STRING,
  })
  branch_name: string;
  @Column({
    type: DataType.STRING,
  })
  address: string;
  @Column({
    type: DataType.STRING,
  })
  location: string;
  @Column({
    type: DataType.STRING,
  })
  phone_number: string;

  @BelongsToMany(() => FuelType, () => GasStationFuelType)
  FuelType: FuelType[];
}
