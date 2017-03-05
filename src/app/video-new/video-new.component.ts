import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MediaService } from './../services/index';
import { VIDEO, CATEGORY } from './../models/index';

@Component({
  selector: 'app-video-new',
  templateUrl: './video-new.component.html',
  styleUrls: ['./video-new.component.css']
})
export class VideoNewComponent implements OnInit {

  private categories: CATEGORY[];
  private videos: VIDEO[];
  private title: string;
  private desc: string;
  private is_free: boolean;
  private cat: number;
  private populary: number;
  private id: string;
  private img: string;


  constructor(private mediaService: MediaService, private router: Router, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(
      (param: any) => {
        this.getCategories();
      });
  }

  ngOnInit() {
  }

  private addVideo(e) {
    this.videos = this.mediaService.Videos();
    this.is_free = false;
    this.populary = 0;
    //
    // console.log('title', this.title, 'desc', this.desc, 'cat', this.cat, 'pay', this.is_free, 'populary', this.populary, 'id', this.id, 'img', this.img);

    let addedVideo = new VIDEO(this.title, this.desc, this.cat, this.is_free, this.populary, this.id, this.img);

    this.videos.push(addedVideo);

    return false;
  }

  private getCategories(): void {
    this.categories = this.mediaService.Categories();
  }

}
