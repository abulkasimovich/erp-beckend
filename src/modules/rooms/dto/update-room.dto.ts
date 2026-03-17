import { PartialType } from '@nestjs/swagger'
import { CreateRatingDto } from 'src/modules/rating/dto/create-rating.dto';
import { CreateRoomDto } from './create.room.dto';


export class UpdateRoomDto extends PartialType(CreateRoomDto) {}
