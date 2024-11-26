import { Controller, Get, Req } from "@nestjs/common";
import { Request } from "express";

@Controller('/users')
export class UserController {

    @Get('/profile')
    getProfile(@Req() req: Request) {
        console.log(req)
        return {
            name: 'Chaitan'
        }
    }
}