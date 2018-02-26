export class Forecast {
    public dayTemps: string[];
    public dayIcons: string[];

    constructor(dayTemps: string[], dayIcons: string[]) {
        this.dayTemps = dayTemps;
        this.dayIcons = dayIcons;
    }
}
