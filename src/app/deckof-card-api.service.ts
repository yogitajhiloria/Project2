import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import {Http, Response}  from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { IdeckCard, cards } from './Ideck-card';

@Injectable()
export class DeckofCardAPIService {
  private _serviceurl:string=environment.apiUrl;

  constructor(private _http:Http) {
   }

  GenerateDeckOfCard() {
    return this._http.get(this._serviceurl+'/deck/new/shuffle/?deck_count=1').map((response:Response)=> response.json().deck_id)
            .do(data=> console.log('check data:' +JSON.stringify(data))).
            catch(this.HandleError);
  }
  DrawCards(deckid:string)  {
    return this._http.get(this._serviceurl+'/deck/'+deckid+'/draw/?count=2').map((response:Response)=> <IdeckCard>response.json())
            .do(data=> console.log('check data:' +JSON.stringify(data))).
            catch(this.HandleError);
  }
  HandleError(error:Response){
  console.error('got in error');
  console.error(error);
  return Observable.throw(error.json() || 'Server Error ');
}
}
