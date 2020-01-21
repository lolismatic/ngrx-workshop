import { ApiService } from './api.service';
import { ArticlesService } from './articles.service';
import { CommentsService } from './comments.service';
import { JwtService } from './jwt.service';
import { ProfilesService } from './profiles.service';
import { TagsService } from './tags.service';
import { UserService } from './user.service';

export {
  ApiService,
  ArticlesService,
  CommentsService,
  JwtService,
  ProfilesService,
  TagsService,
  UserService
};

export const SERVICES = [
  ApiService,
  ArticlesService,
  CommentsService,
  JwtService,
  ProfilesService,
  TagsService,
  UserService,
];
