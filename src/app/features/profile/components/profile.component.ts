import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Profile } from '@app/models';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile.component.html'
})
export class ProfileComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
  ) { }

  profile: Profile & { isUser: boolean };

  ngOnInit() {
    this.route.data.subscribe(
      (data) => this.profile = data.profile
    );
  }

  onToggleFollowing(following: boolean) {
    this.profile.following = following;
  }

}
