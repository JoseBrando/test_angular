import { Component, OnInit } from '@angular/core';
import { UserService } from '../../service/user.service';

@Component({
  selector: 'app-consumo-api',
  templateUrl: './consumo-api.component.html'
})
export class ConsumoAPIComponent implements OnInit {

  arrUsers = [];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe(response => {
      this.arrUsers = response.results[0];
      console.log(this.arrUsers);     
    });
  }

}
