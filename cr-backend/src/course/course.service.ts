import { Injectable } from '@nestjs/common';
import Course from './course.entity';
import {Repository} from 'typeorm';
import { InjectRepository} from '@nestjs/typeorm';
import { CreateCourseDto } from './dto/create-course.dto';

@Injectable()
export class CoursesService {
    constructor(
        @InjectRepository(Course) 
        private coursesRepository: Repository<Course>
    ) {}

    async findAll(): Promise<Course[]> {
      /*
        this.coursesRepository.save(
            {
                "number": "01204211",
                "title": "Discrete"
            }
        )
        */
        //const data = await this.coursesRepository.find()
        //console.log(data)
        return this.coursesRepository.find();
    }
    async create(createCourseDto: CreateCourseDto){
        return this.coursesRepository.save(createCourseDto);
    }
}