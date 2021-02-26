export class UpcDataProvider {
    axios = require('axios');

    constructor() {
     
    }

    async getUpcData(upc) {     


        let input = 'https://world.openfoodfacts.org/api/v0/product/' + upc + '.json'

        let res = await this.axios.get(input);

  let data = res.data;
  console.log(data);

  return res.data;
        

  }}

