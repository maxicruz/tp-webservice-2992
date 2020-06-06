export class Covid {
    confirmed: number;
    recovered: number;
    deaths: number;

    covid(confirmed?:number, recovered?:number, deaths?:number){
        this.confirmed=confirmed;
        this.recovered=recovered;
        this.deaths=deaths;
    }

}
