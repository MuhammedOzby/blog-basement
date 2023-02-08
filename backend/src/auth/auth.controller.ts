import { Controller, Post, UseGuards, Request, Get, Body } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './jwt-auth.guard';
import { ApiBody, ApiResponse } from '@nestjs/swagger';
import { LoginDTOReq, LoginDTORes } from './DTO/login.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @ApiBody({ type: LoginDTOReq })
  @ApiResponse({
    status: 200,
    description: 'Admin login',
    type: LoginDTORes,
  })
  @Post('login')
  async login(@Body() body: LoginDTOReq) {
    return this.authService.login(body);
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }
}
