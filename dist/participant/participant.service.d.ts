import { Repository } from 'typeorm';
import { Participant } from './participant.entity';
export declare class ParticipantService {
    private participantRepo;
    constructor(participantRepo: Repository<Participant>);
    findAll(): Promise<Participant[]>;
    insert(data: any): void;
}
