import { PartialType } from '@nestjs/swagger';
import { CreateStudentGroupDto } from './create.studentgroup.dto';



export class UpdateStudentGroupDto extends PartialType(CreateStudentGroupDto) {}