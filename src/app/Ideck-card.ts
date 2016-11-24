
export interface IdeckCard {
remaining:number;
deck_id:string;
success:boolean;
cards:cards[];
}
export interface cards{
  value:string;
  code:string;
  suit:string;
  image:string;
}
