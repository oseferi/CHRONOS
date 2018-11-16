import { Component, OnInit } from '@angular/core';
import { UserModel } from '../../core/models/user.model';

@Component({
  selector: 'bit-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  userProfile: UserModel = {
    username: 'User',
    imageUrl: 'https://vignette.wikia.nocookie.net/hitman/images/6/6b/Agent47HITMAN2016.png/revision/latest/scale-to-width-down/350?cb=20160709203721'
  };

  constructor() { }

  ngOnInit() {
  }
}
