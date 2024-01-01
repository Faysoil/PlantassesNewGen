import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MyBackendService } from '../my-backend.service';
import { combineLatest } from 'rxjs';
@Component({
  selector: 'app-messagerie',
  templateUrl: './messagerie.component.html',
  styleUrls: ['./messagerie.component.css']
})
export class MessagerieComponent implements OnInit {
  user: any[] = [];
  searchControl = new FormControl('');
  

  constructor(private backendService: MyBackendService){}

  ngOnInit(): void {
    this.backendService.getAllUsers().subscribe((data) => {
      this.user = data;
    });

  }
}
