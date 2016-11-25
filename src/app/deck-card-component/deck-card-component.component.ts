import { Component, OnInit } from '@angular/core';
import {DeckofCardAPIService} from '../deckof-card-api.service';
import { IdeckCard,cards } from '../Ideck-card';

@Component({
  selector: 'app-deck-card-component',
  templateUrl: './deck-card-component.component.html',
  styleUrls: ['./deck-card-component.component.css']
})
export class DeckCardComponentComponent implements OnInit {
deckCard: IdeckCard;
errorMessage:string;
deckid:string;
Status:string="";
IsTried:boolean=false;
IsRunning:boolean=false;
Result:number=2;
buttonChoice:number;
  constructor(private deckofCardAPIService : DeckofCardAPIService) { }

  ngOnInit() {
    this.PlayDeck();
  }
  PlayDeck()
  {
    this.deckofCardAPIService.GenerateDeckOfCard().subscribe(
      (deckid)=>{
        this.deckid=deckid;
        this.DrawCard();
        //console.log(this.deckCard);

      },
      error=>this.errorMessage=error,
      ()=>this.Status='Deck shuffeled'
    );
  }
  ShowResult(buttonChoice:number)
  {
    this.buttonChoice=buttonChoice;
    var first=parseInt(this.deckCard.cards[0].value);
    var second=parseInt(this.deckCard.cards[1].value);
    if(this.deckCard.cards[0].value=='ACE')
    {
      first=50;
    }
    else if(this.deckCard.cards[0].value=='KING')
    {
      first=13;
    }
    else if(this.deckCard.cards[0].value=='QUEEN')
    {
      first=12;
    }
    else if(this.deckCard.cards[0].value=='JACK')
    {
      first=11;
    }
    if(this.deckCard.cards[1].value=='ACE')
    {
      second=50;
    }
    else if(this.deckCard.cards[1].value=='KING')
    {
      second=13;
    }
    else if(this.deckCard.cards[1].value=='QUEEN')
    {
      second=12;
    }
    else if(this.deckCard.cards[1].value=='JACK')
    {
      second=11;
    }

    this.Result=0;
    if(first>0  && second>0)
    {
        if((first>second && buttonChoice == 2)||
            (first<second && buttonChoice == 1)  )
        {
          this.Result=1;
        }
    }
    /*
    else if(first>0  || second>0)
    {
      if((first>0 && buttonChoice == 2)
      || (second>0 && buttonChoice == 1)
      || (this.deckCard.cards[0].value =='ACE' && buttonChoice == 1))
      {
        this.Result=1;
      }
    }
    else
    {
      this.Result=1;
    }
    */
    this.IsTried=true;
  }
  DrawCard()
  {
    this.deckofCardAPIService.DrawCards(this.deckid).subscribe(
      (decks)=>{

        if(decks.cards[0].value == decks.cards[1].value )
        {
          console.log("got same cards");
          this.DrawCard();
        }
        this.deckCard=decks;
        this.IsTried=false;
        this.IsRunning=true;
      },
      error=>this.errorMessage=error,

      ()=>{this.Status='Drawn Two Cards';
      console.log(this.errorMessage);
    }
    );
  }


  ResetAll()
  {
    this.deckid=null;
    this.deckCard=null;
    this.IsTried=false;
    this.IsRunning=false;
    this.Result=2;
    this.PlayDeck();
  }
}
