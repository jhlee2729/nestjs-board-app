import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import * as config from 'config';

const dbCondif = config.get('db');

export const typeORMConfig : TypeOrmModuleOptions = {
    type:dbCondif.type,
    host:process.env.RDS_HOSTNAME || dbCondif.host,
    port: process.env.RDS_PORT || dbCondif.port,
    username: process.env.RDS_USERNAME || dbCondif.username,
    password:process.env.RDS_PASSWORD ||
    dbCondif.passowrd,
    database: process.env.RDS_DB_NAME || dbCondif.database,
    entities: [__dirname + '/../**/*.entity.{js,ts}'],
    synchronize: dbCondif.synchronize
}