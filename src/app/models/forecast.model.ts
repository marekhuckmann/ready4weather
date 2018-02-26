export class Forecast {
    private dayTemps: string[];
    private dayIcons: string[];

    constructor(dayTemps: string[], dayIcons: string[]) {
        this.dayTemps = dayTemps;
        this.dayIcons = dayIcons;
    }
}
