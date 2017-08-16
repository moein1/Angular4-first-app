import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Video } from './video';
import 'rxjs/add/operator/map';

@Injectable()
export class VideoService {

  private _url = '/api/video';
  constructor(private _http: Http) { }

  getVideos() {
    return this._http.get(this._url).
      map((response: Response) => response.json());
  }

  addVideo(video: Video) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this._http.post(this._url, JSON.stringify(video), options)
      .map((response: Response) => response.json());
  }

  updateVideo(video: Video) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this._http.put(this._url + '/' + video._id, JSON.stringify(video), options)
      .map((response: Response) => response.json());
  }

  deleteVideo(id:any){
    return this._http.delete(this._url+'/'+id)
    .map((respnse:Response)=>{
      respnse.json();
    })
  }
}
