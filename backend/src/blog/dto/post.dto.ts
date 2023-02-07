import { ApiProperty } from '@nestjs/swagger';
import { Post } from 'src/Entities/Post.enitity';

export class PaginatedDto<Post> {
  @ApiProperty()
  total: number;

  @ApiProperty()
  limit: number;

  @ApiProperty()
  offset: number;
}
