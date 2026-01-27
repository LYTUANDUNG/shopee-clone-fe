export class Shop {
  readonly id: string;
  readonly name: string;
  readonly image: string;

  readonly isOfficial: boolean;

  constructor(id: string, name: string, image: string, isOfficial: boolean = false) {
    this.id = id;
    this.name = name;
    this.image = image;
    this.isOfficial = isOfficial;
  }
}
