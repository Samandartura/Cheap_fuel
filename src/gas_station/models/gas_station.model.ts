import {
  Column,
  DataType,
  Model,
  Table,
} from 'sequelize-typescript';

interface GasStationAttr {
  main_gas_station_name: string;
}

@Table({ tableName: 'gas_station',createdAt:false,updatedAt:false })
export class GasStation extends Model<GasStation, GasStationAttr> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  main_gas_station_name: string;
}
