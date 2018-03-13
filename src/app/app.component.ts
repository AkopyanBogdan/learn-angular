import { Component } from '@angular/core';
import { UsersService } from '../../users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [UsersService]
})

export class AppComponent {
  items = [];
  constructor(private usersService: UsersService) {}
 
  ngOnInit(){
    this.usersService.getItems().subscribe(items => {
      this.items = items;
    })
  }

}
