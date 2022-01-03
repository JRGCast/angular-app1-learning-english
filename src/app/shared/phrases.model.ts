export class Phrases {
  /* uma maneira de deixar o construtor menos verboso é fazer tudo dentro dele.
  daí, ao invés de criar uma instância e reatribuí-la dentro do constructor, como a forma seguinte:
  public phraseEnglish: string;
  public phrasePortuguese: string;
  constructor(phraseEnglish: string, phrasePortuguese: string) {
    this.phraseEnglish = phraseEnglish;
    this.phrasePortuguese = phrasePortuguese;
  }
  é possível fazer tudo dentro do parâmero do constructor:*/
  constructor(public phraseEnglish: string, public phrasePortuguese: string) {}
}