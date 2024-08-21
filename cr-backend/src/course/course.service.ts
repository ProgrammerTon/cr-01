import { Injectable } from '@nestjs/common';
import {Repository} from 'typeorm';
import { InjectRepository} from '@nestjs/typeorm';
import { CreateCourseDto } from './dto/create-course.dto';
import Course from './course.entity';
import Review from './review.entity';
import { ObjectId } from 'mongodb';

@Injectable()
export class CoursesService {
    constructor(
        @InjectRepository(Course) 
        private coursesRepository: Repository<Course>,
        @InjectRepository(Review) 
        private reviewsRepository: Repository<Review>
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
    async findAllReviews(courseId: ObjectId): Promise<Review[]> {
        return this.reviewsRepository.find({where:{ courseId: courseId}});
    }
}