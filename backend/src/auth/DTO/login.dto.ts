import { ApiProperty } from '@nestjs/swagger';

export class LoginDTOReq {
  @ApiProperty()
  username: string;

  @ApiProperty()
  password: string;
}

export class LoginDTORes {
  @ApiProperty()
  access_token: string;
}
