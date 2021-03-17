import "../database/connection"
import { Request, Response } from "express"
import { getRepository } from "typeorm"
import  Role  from "../models/Role"

export default {
  async index(request: Request, response: Response) {
    const roleRepository = getRepository(Role);
    const roles = await roleRepository.find()
    response.status(200).json({
      statusCode: 200,
      status: 'Ok',
      totalResult: (roles).length,
      roles: roles.map(role => {
        return {
          id: role.id,
          roles: role.roles,
          link: `localhost:3333/roles/${role.id}`
        }
      })
    })
  },
  async show(request: Request, response: Response) {
    const { id } = request.params
    const roleRepository = getRepository(Role);
    const roles = await roleRepository.findOne(id)
    if (!roles) {
      response.status(404).json({
        statusCode: 404, status: "not found", totalResult: 0, roles: []
      })
    }
    if (roles) {
      response.status(200).json({
        statusCode: 200,
        status: 'Ok',
        totalResult: 1,
        roles
      })
    }
  },
  async store(request: Request, response: Response) {
    const { roles } = request.body
    const roleRepository = getRepository(Role);
    const roleCreate = roleRepository.create({ roles })
    const data = await roleRepository.save(roleCreate)
    response.status(201).json({
      statusCode: 200,
      status: "ok",
      roles: {
        id: (data).id,
        roles: (data).roles,
        link: `localhost:3333/roles/${(data).id}`
      },
    })

  },
  async update(request: Request, response: Response) {
    const { id } = request.params
    const { roles } = request.body
    const roleRepository = getRepository(Role);
    const roleFind = await roleRepository.findOne(id)
    if (!roleFind) response.status(404).json({ statusCode: 404, status: "not found" })
    if (roleFind) {
      const update = await roleRepository.update(id, { roles })
      response.status(200).json({
        statusCode: 200,
        status: 'Ok',
        affected: update.affected,
        roles: {
          id: id,
          roles: roles,
          link: `localhost:3333/roles/${id}`
        }
      })
    }
  },
  async destroy(request: Request, response: Response) {
    const { id } = request.params
    const roleRepository = getRepository(Role);
    const roleDelete = await roleRepository.findOne(id)
    if (!roleDelete) response.status(404).json({ statusCode: 404, status: "not found" })
    if (roleDelete) {
      await roleRepository.delete(roleDelete)
      response.status(200).json({
        statusCode: 200,
        status: 'Ok'
      })
    }
  }
}