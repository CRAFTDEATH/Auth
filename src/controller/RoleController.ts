import "../database/connection"
import { Request, Response } from "express"
import { getRepository } from "typeorm"
import { Role } from "../models/Role"

export = {
  async index(request: Request, response: Response) {

  },
  async show(request: Request, response: Response) {

  },
  async store(request: Request, response: Response) {
    const { roles } = request.body
    const roleRepository = getRepository(Role);
    const roleCreate = roleRepository.create({ roles })
    const data = roleRepository.save(roleCreate)
    response.json({
      statusCode: 200,
      status: "ok",
      roles: {
        id: (await data).id,
        roles: (await data).roles
      },
      link: `localhost:3333/routes/${(await data).id}`

    })

  },
  async update(request: Request, Response: Response) {

  },
  async destroy(request: Request, response: Response) {

  }
}