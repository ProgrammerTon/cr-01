import { Module } from '@nestjs/common';
//import { CourseService } from './course.service';
//import { CourseController } from './course.controller';
import { CoursesService } from './course.service';
import { CoursesController } from './course.controller';
import Course from './entities/course.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Course])],
  providers: [CoursesService],
  controllers: [CoursesController],
})
/*
@Module({
  controllers: [CoursesController],
  providers: [CoursesService],
})
  */
export class CourseModule {}
