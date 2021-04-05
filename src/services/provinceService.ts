import Province from "../models/province"
import data from "../data/province.json"

const getById = async function getById(id: string):Promise<Province> {
    let provinces: Province[]=[];

    data.forEach(p => {
        provinces.push({
            code: p.Province,
            description: p.Province,
            area: p.Area,
            region: p.Region
        })
    })
    
    provinces.find(p => p.code === id);

    return provinces[0];
}
    

const getAll = async function (): Promise<Province[]>{
    let provinces: Province[]=[];

    data.forEach(p => {
        provinces.push({
            code: p.Province,
            description: p.Province,
            area: p.Area,
            region: p.Region
        })
    })

    return provinces
}

export default {
  getAll,
  getById
}