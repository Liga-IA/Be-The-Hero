const connection = require("../database/connection");
const crypto = require("crypto");

module.exports = {
  async create(request, response) {
    console.log(request.body);
    const { name, email, whatsapp, city, uf } = request.body;
    const id = crypto.randomBytes(4).toString("HEX");
    
        const nong = await connection("ongs").insert({
        id,
        name,
        email,
        whatsapp,
        city,
        uf
      });
      return response.json({id});
      

  },
  async index(request, response) {
    const ongs = await connection("ongs").select("*");
    return response.json(ongs);
  },
  
  async indexIncidentByOngId(request, response) {
    const { id } = request.params;

    

    const incidents = await connection("incidents").select("*").where("ong_id",id);
    if(incidents.length)
      return response.json(incidents);
    else  
      return response.status(404).json({"Error":"No cases found with id" + id})
  }
};
