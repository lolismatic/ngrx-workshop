import { Component, EventEmitter, Input, Output } from '@angular/core';

import { UserService } from '@app/services';
import { Comment } from '@app/models';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-article-comment',
  templateUrl: './article-comment.component.html',
})
export class ArticleCommentComponent {
  canModify$ = this.userService.currentUser.pipe(
    map((user) => user.username === this.comment.author.username)
  );

  constructor(
    private userService: UserService
  ) {}

  @Input() comment: Comment;
  @Output() deleteComment = new EventEmitter<boolean>();

  deleteClicked() {
    this.deleteComment.emit(true);
  }


}
