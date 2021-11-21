import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class UsersController {

  public async index({ request, response}: HttpContextContract){
    const data = await request.all();

    response.status(200).send("nada")
    console.log(data);
  }

  public async create({ request, response}: HttpContextContract){
    const data = await request.only(["name", "username"]);

    response.status(201);
    console.log(data);
  }
}
