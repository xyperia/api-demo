import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Participant } from './participant.entity';

@Injectable()
export class ParticipantService {
    constructor(@InjectRepository(Participant) private participantRepo: Repository<Participant>) {}

    findAll(): Promise<Participant[]> {
        return this.participantRepo.find();
    }

    insert(data){
        this.participantRepo.insert(data);
    }
}
