import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MyBackendService } from 'src/app/my-backend.service';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-solo-post',
  templateUrl: './solo-post.component.html',
  styleUrls: ['./solo-post.component.css']
})
export class SoloPostComponent implements OnInit {
  userName: string | null = null;
  userId: number | null = null;
  post: any;

  constructor(private route: ActivatedRoute,private backendService: MyBackendService, private sharedService: SharedService) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const postId = params.get('id');

      // Vérification de null avant l'appel du service
      if (postId !== null) {
        this.backendService.getPostById(postId).subscribe(data => {
          this.post = data;
        });
      }
    })
    this.sharedService.userName$.subscribe((userName) => {
      this.userName = userName;
    });

    // Abonnez-vous à l'observable pour recevoir les mises à jour de l'ID de l'utilisateur
    this.sharedService.userId$.subscribe((userId) => {
      this.userId = userId;
    });
  
  }
}
