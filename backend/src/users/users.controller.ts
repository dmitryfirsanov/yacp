import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Request,
  CanActivate,
  ExecutionContext,
  Injectable,
  UseGuards,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { LoginUserDto } from './dto/login-user.dto';
import { UsersService } from './users.service';
import { User } from '@prisma/client';
import { LoginResponse, UserPayload } from './interfaces/users-login.interface';
import { UserResponse } from './interfaces/users.interface';
import { Public } from '../common/decorators/public.decorator';
import { ExpressRequestWithUser } from './interfaces/express-request-with-user.interface';

@Injectable()
export class IsMineGuard implements CanActivate {
  constructor() {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();

    return parseInt(request.params.id) === request.user.sub;
  }
}

@Controller('users')
export class UsersController {
  // inject users service
  constructor(private readonly usersService: UsersService) {}

  @Public()
  @Post('register')
  async registerUser(@Body() createUserDto: CreateUserDto): Promise<User> {
    // call users service method to register new user
    return this.usersService.registerUser(createUserDto);
  }

  @Public()
  @Post('login')
  async loginUser(@Body() loginUserDto: LoginUserDto): Promise<LoginResponse> {
    // call users service method to login user
    return this.usersService.loginUser(loginUserDto);
  }

  @Get('me')
  me(@Request() req: ExpressRequestWithUser): UserPayload {
    return req.user;
  }

  @Get('all')
  async getAllUsers(): Promise<UserResponse[]> {
    return this.usersService.getAllUsers();
  }

  @Patch(':id')
  @UseGuards(IsMineGuard)
  async updateUser(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateUserDto: UpdateUserDto,
  ): Promise<User> {
    // call users service method to update user
    return this.usersService.updateUser(+id, updateUserDto);
  }

  @Delete(':id')
  @UseGuards(IsMineGuard)
  async deleteUser(@Param('id', ParseIntPipe) id: number): Promise<string> {
    // call users service method to delete user
    return this.usersService.deleteUser(+id);
  }
}
