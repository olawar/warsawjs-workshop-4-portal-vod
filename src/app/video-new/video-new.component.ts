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
  private message: string;
  private addedVideo: any;

  constructor(private mediaService: MediaService, private router: Router, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(
      (param: any) => {
        this.getCategories();
      });
  }

  ngOnInit() {
  }

  private addVideo(e) {
    this.is_free = false;
    this.populary = 0;
    this.addedVideo = new VIDEO(this.title, this.desc, this.cat, this.is_free, this.populary, this.id, this.img);
    this.sendVideo(this.addedVideo);
    this.message = "Gratulacje, dodałeś swój film!";

    setTimeout(()=> {
      this.router.navigate(['/profile', this.id]);
    }, 1500);

    return false;
  }

  public sendVideo(video): void {
    this.videos = this.mediaService.Videos();
    this.videos.push(video);
    localStorage.setItem('userVideos', JSON.stringify(this.videos));
    // console.log(localStorage.getItem('user'));
    // console.log(localStorage.getItem('userVideos'));
  }

  private getCategories(): void {
    this.categories = this.mediaService.Categories();
  }

}
