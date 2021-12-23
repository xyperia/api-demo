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
      host: 'xx',
      port: 5433,
      username: 'xx',
      password: 'xx',
      database: 'xx',
      entities: [Participant],
    }), ParticipantModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
