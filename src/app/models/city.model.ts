export class City {
  public name: string;
  public country: string;
  public temperature: string;
  public icon: string;
  public clouds: string;
  public wind: string;

  constructor(name: string, country: string, temp: string, icon: string, clouds: string, wind: string) {
    this.name = name;
    this.country = country;
    this.temperature = temp;
    this.icon = icon;
    this.clouds = clouds;
    this.wind = wind;
  }
}
