import { Controller, Get, Post, Delete, Put } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('members/:')
class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('')
  getAllMembers() {
    return [
      {
        memberId: 1,
        memberName: 'Paulo Lopera',
        spendingIds: [],
      },
    ];
  }

  @Get(':id')
  getMemberById() {
    return {
      memberId: 1,
      memberName: 'Paulo Lopera',
      spendingIds: [],
    };
  }

  @Post()
  createMember() {
    return {
      memberId: 2,
      memberName: 'Paulo Lopera',
      spendingIds: [],
    };
  }

  @Put(':id')
  updateMember() {
    return {
      memberId: 1,
      memberName: 'Paulo Lopera',
      spendingIds: [],
    };
  }

  @Delete(':id')
  deleteMember() {
    return {
      memberId: 1,
      memberName: 'Paulo Lopera',
      spendingIds: [],
    };
  }
}

export { AppController };
