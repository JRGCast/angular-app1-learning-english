interface HeartObject {
  currUrl: string;
  currAltTxt: string;
}
export class Heart {
  constructor(
    public fullOrNot: boolean,
    public fullUrl: string = 'https://cdn3.iconfinder.com/data/icons/retro-game-items/100/retro-11-512.png',
    public fullAltTxt: string = 'full-heart-icon',
    public emptyUrl: string = 'https://cdn3.iconfinder.com/data/icons/retro-game-items/100/retro-12-512.png',
    public emptyAltTxt: string = 'empty-heart-icon'
  ) { }
  public showHeart(): HeartObject {
    const result = this.fullOrNot ?
      { currUrl: this.fullUrl, currAltTxt: this.fullAltTxt } :
      { currUrl: this.emptyUrl, currAltTxt: this.emptyAltTxt }
    return result
  }
}