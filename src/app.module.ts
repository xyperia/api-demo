import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Participant } from './participant/participant.entity';
import { ParticipantModule } from './participant/participant.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: '34.101.123.183',
      port: 5433,
      username: 'yugabyte',
      password: 'P@ssw0rd',
      database: 'db-demo',
      entities: [Participant],
    }), ParticipantModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
