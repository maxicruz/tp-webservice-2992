export class Noticia {
    id: number;
    seo: String;
    tit: string;
    cap: string;
    con: string;
    img: string;

    noticia(id?:number, seo?:string, tit?:string, cap?:string, con?:string, img?:string){
        this.id=id;
        this.seo=seo;
        this.tit=tit;
        this.cap=cap;
        this.con=con;
        this.img=img;
    }
}
