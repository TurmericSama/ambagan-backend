import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';

@Controller('users')
class UserController {
  @Get()
  getAllUsers() {
    return [];
  }
}

export default UserController;
