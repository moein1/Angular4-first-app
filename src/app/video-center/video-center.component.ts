import { Component, OnInit } from '@angular/core';
import { Video } from '../video';
import { VideoService } from '../video.service';

@Component({
  selector: 'app-video-center',
  templateUrl: './video-center.component.html',
  styleUrls: ['./video-center.component.css'],
  providers: [VideoService]
})
export class VideoCenterComponent implements OnInit {

  videos: Array<Video>;
  selectedVideo: Video;
  private hideNewVideo: boolean = true;

  constructor(private _videoService: VideoService) { }

  ngOnInit() {
    this._videoService.getVideos()
      .subscribe(resVideos => this.videos = resVideos);
  }

  onSelectVideo(vid: Video) {
    this.selectedVideo = vid;
  }
  onSubmitAddVideo(video: Video) {
    this._videoService.addVideo(video)
      .subscribe(resNewVido => {
        this.videos.push(resNewVido);
        this.selectedVideo = resNewVido;
        this.hideNewVideo = true;
      })
  }

  newVideo() {
    this.hideNewVideo = false;
  }

  updateVideo(vid: Video) {
    this._videoService.updateVideo(vid)
      .subscribe(updatedVideo => {
        vid = updatedVideo;
      })
  };

  deleteVideo(id: any) {
    this._videoService.deleteVideo(id)
      .subscribe(deletedVideo => {
        console.log('this vido has been deleted ', deletedVideo);
        for (let i = 0; i < this.videos.length; i++) {
          if (this.videos[i]._id == id) {
            this.videos.splice(i, 1);
            this.selectedVideo = null;
            return;
          }
        }
      })
  }

}
