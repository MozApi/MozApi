import { Request, Response } from "express";
import ProvinceService from "../services/provinceService";


const show = async function (request: Request, response: Response) {
  const { id } = request.params;

  const province = await ProvinceService.getById(id);

  if (province) {
    return response.status(200).json(province);
  } else {
    return response.status(404).json({ msg: "no province with that id" });
  }

};

const index = async function (request: Request, response: Response) {
  var provinces = await ProvinceService.getAll()
  return response.json(provinces);
};

export default {
  index,
  show,
};
