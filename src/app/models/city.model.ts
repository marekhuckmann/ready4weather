export class City {
  private name: string;
  private country: string;
  private temperature: string;
  private icon: string;
  private clouds: string;
  private wind: string;

  constructor(name: string, country: string, temp: string, icon: string, clouds: string, wind: string) {
    this.name = name;
    this.country = country;
    this.temperature = temp;
    this.icon = icon;
    this.clouds = clouds;
    this.wind = wind;
  }
}
