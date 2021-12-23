import { Participant } from './participant.entity';
import { ParticipantService } from './participant.service';
export declare class ParticipantController {
    private readonly participantService;
    constructor(participantService: ParticipantService);
    getAll(): Promise<Participant[]>;
    insert(data: any): void;
}
