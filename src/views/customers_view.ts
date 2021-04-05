import Province from '../models/province'

export default {
    render(province: Province) {
      return {
        code: province.code,
        description: province.description
      };
    },
    renderMany(provinces: Province[]) {
      return provinces.map(province =>this.render(province));
    },
  };
  