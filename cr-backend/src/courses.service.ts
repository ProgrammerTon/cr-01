import { Injectable } from '@nestjs/common';
import { Course } from './interfaces/course.interface';

@Injectable()
export class CoursesService {
    async findAll(): Promise<Course[]> {
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
    }
}