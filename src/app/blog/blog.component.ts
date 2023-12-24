import { Component, OnInit } from '@angular/core';
import { MyBackendService } from '../my-backend.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent  implements OnInit  {
  posts: any[] | undefined;

  constructor(private backendService: MyBackendService) {}

  ngOnInit() {
    this.backendService.getSomeData().subscribe((data) => {
      this.posts = data;
    });

  }
    truncateDescription(description: string, maxLength: number): string {
      if (description.length > maxLength) {
        return `${description.slice(0, maxLength)}...`;
      } else {
        return description;
      }
    }
}
