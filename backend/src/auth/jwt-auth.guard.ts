import { ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
  constructor(private authService: AuthService) {
    super();
  }
  /**
   * Guard mekanizması [BKZ.](https://docs.nestjs.com/guards#authorization-guard)
   * - if it returns true, the request will be processed.
   * - if it returns false, Nest will deny the request.
   * @param context
   * @returns boolean
   */
  canActivate(context: ExecutionContext): boolean | Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    if (!request.headers.authorization) throw new UnauthorizedException();
    return true;
  }

  handleRequest(err, user, info) {
    // You can throw an exception based on either "info" or "err" arguments
    if (err || !user) {
      throw err || new UnauthorizedException();
    }
    return user;
  }
}
