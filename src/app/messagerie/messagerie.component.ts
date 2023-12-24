import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MyBackendService } from '../my-backend.service';
@Component({
  selector: 'app-messagerie',
  templateUrl: './messagerie.component.html',
  styleUrls: ['./messagerie.component.css']
})
export class MessagerieComponent implements OnInit {
  users: any[] = [];

  constructor(private backendService: MyBackendService){}

  ngOnInit(): void {
    this.backendService.getAllUsers().subscribe((data) => {
      this.users = data;
    });

    console.log(this.users)
  }
  
  searchControl = new FormControl('');



}
