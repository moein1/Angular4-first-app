import { Component, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'video-detail',
  templateUrl: './video-detail.component.html',
  styleUrls: ['./video-detail.component.scss'],
  inputs: ['video'],
  outputs: ['updateVideoEvent','deleteVideoEvent']
})
export class VideoDetailComponent implements OnInit {
  private editTitle: boolean = false;
  private updateVideoEvent = new EventEmitter();
  private deleteVideoEvent = new EventEmitter();
  video: any;
  constructor() { }

  ngOnInit() {
  }
  onTitleClick() {
    this.editTitle = !this.editTitle;
  }
  updateVideo() {
    this.updateVideoEvent.emit(this.video);
  }
  deleteVideo() {
    this.deleteVideoEvent.emit(this.video._id);
  }

}
