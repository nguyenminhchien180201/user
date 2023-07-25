import { Injectable } from '@nestjs/common';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';

import * as shareEntity from 'share-entity'
import * as SharedEntities from 'shared-entities';

@Injectable()
export class ConfigService {
    postgresTypeormConfigAloline(): Promise<TypeOrmModuleOptions> | TypeOrmModuleOptions {
        return {
            type: 'postgres',
            host: process.env.CONFIG_POSTGRESQL_HOST_ALOLINE,
            port: parseInt(process.env.CONFIG_POSTGRESQL_PORT_ALOLINE),
            username: process.env.CONFIG_POSTGRESQL_USER_NAME_ALOLINE,
            password: process.env.CONFIG_POSTGRESQL_PASSWORD_ALOLINE,
            database: process.env.CONFIG_POSTGRESQL_KEYSPACE_ALOLINE,
            entities: [
            ],
        };
    }

    postgresTypeormConfigShared(): Promise<TypeOrmModuleOptions> | TypeOrmModuleOptions {
        return {
            type: 'postgres',
            host: process.env.CONFIG_POSTGRESQL_HOST_SHARED,
            port: parseInt(process.env.CONFIG_POSTGRESQL_PORT_SHARED),
            username: process.env.CONFIG_POSTGRESQL_USER_NAME_SHARED,
            password: process.env.CONFIG_POSTGRESQL_PASSWORD_SHARED,
            database: process.env.CONFIG_POSTGRESQL_KEYSPACE_SHARED,
            entities: [SharedEntities.UserEntity],
        };
    }
}
