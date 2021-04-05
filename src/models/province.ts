import Census from "./provinceCensus"

export default class Province {
    code:string;
    description:string;
    capital?:string;
    area?: number;
    region?: string;    
    Census?: Census;
}