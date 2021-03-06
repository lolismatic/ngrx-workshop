import { Component, EventEmitter, Input, Output, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { UserService } from '@app/services';
import { Comment, User } from '@app/models';

@Component({
  selector: 'app-article-comment',
  templateUrl: './article-comment.component.html',
})
export class ArticleCommentComponent implements OnInit, OnDestroy {
  constructor(
    private userService: UserService
  ) {}

  private subscription: Subscription;

  @Input() comment: Comment;
  @Output() deleteComment = new EventEmitter<boolean>();

  canModify: boolean;

  ngOnInit() {
    // Load the current user's data
    this.subscription = this.userService.currentUser.subscribe(
      (userData: User) => {
        this.canModify = (userData.username === this.comment.author.username);
      }
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  deleteClicked() {
    this.deleteComment.emit(true);
  }


}
