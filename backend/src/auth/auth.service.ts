import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService, private jwtService: JwtService) {}

  /**
   * * Giriş isteğimi işleyecek servis.
   * @param body Kullanıcı bilgilerini taşıyan istek
   * @returns token veya null
   */
  async login(body: { username: string; password: string }): Promise<{ access_token: string } | null> {
    const user = await this.usersService.findOne(body.username, body.password);
    if (user) return { access_token: this.jwtService.sign({ fullname: `${user.firstName} ${user.surname}` }) };
    else return null;
  }

  /**
   *
   * @param username Kullanıcı adı.
   * @param password Şifre.
   * @returns Kullanıcı veya null
   */
  async validateUser(username: string, password: string) {
    const user = await this.usersService.findOne(username, password);
    if (user) return user;
    else return null;
  }
}
