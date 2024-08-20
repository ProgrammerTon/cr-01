import { Injectable } from '@nestjs/common';
import Course from './entities/course.entity';
import {Repository} from 'typeorm';
import { InjectRepository} from '@nestjs/typeorm';

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
        /*
        return [
            { 
                id: '100',
                number: '01204111',
                title:'Computer and Programming'
            },
            {
                id: '213fds',
                number: '01204211',
                title:'Discrete'
            },
            {
                id: 'fdfdfdfdfdfd',
                number: '01204313',
                title:'Algo'
            },
        ];
        */
    }
}