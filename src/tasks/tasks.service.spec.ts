// import { Test } from '@nestjs/testing';
// import { TasksService } from './tasks.service';
// import { Repository } from 'typeorm';
// import { Task } from './task.entity';

// // factory method to generate a mock
// const mockTasksRepository = () => ({
//   getTasks: jest.fn(),
// });

// const mockUser = {
//   username: 'Juan',
//   password: 'SomePW',
//   id: 'dskdas',
//   tasks: [],
// };

// describe('TasksService', () => {
//   let tasksService: TasksService;
//   let tasksRepository: Repository<Task>;

//   // before each test, I have to create a dummy NestJS module that contains my service and my repository
//   beforeEach(async () => {
//     // initialize a dummy NestJS module with tasksService and tasksRepository
//     const module = await Test.createTestingModule({
//       providers: [
//         TasksService,
//         { provide: Repository<Task>, useFactory: mockTasksRepository },
//       ], // TasksService depends on TasksRepository,
//       //so we are mocking it because we dont want to connect to the real database
//     }).compile();

//     tasksService = module.get(TasksService);
//     tasksRepository = module.get(Repository<Task>);
//   });

//   describe('getTasks', () => {
//     it('calls tasksRepository.getTasks and returns the result', () => {
//       expect(tasksService.getTasks).not.toHaveBeenCalled();
//       tasksService.getTasks(null, mockUser);
//       expect(tasksService.getTasks).toHaveBeenCalled();
//     });
//   });
// });
