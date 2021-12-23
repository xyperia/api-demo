import { Body, Controller, Get, HttpCode, Post } from '@nestjs/common';
import { Participant } from './participant.entity';
import { ParticipantService } from './participant.service';

@Controller('participant')
export class ParticipantController {

    constructor(private readonly participantService: ParticipantService){}

    @Get()
    async getAll():Promise<Participant[]>{
        return await this.participantService.findAll();
    }

    @Post()
    insert(@Body() data:any){
        this.participantService.insert(data);
    }
}
