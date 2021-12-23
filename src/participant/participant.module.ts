import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ParticipantController } from './participant.controller';
import { Participant } from './participant.entity';
import { ParticipantService } from './participant.service';

@Module({
    imports: [TypeOrmModule.forFeature([Participant])],
    providers: [ParticipantService],
    controllers: [ParticipantController],
})
export class ParticipantModule {}
