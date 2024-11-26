import { BadRequestException, Controller, Get, Header, HttpCode, Param, Query, Req,  } from "@nestjs/common";
import { Request } from "express";

interface QueryParam {
    name: string,
    value: string,
}
@Controller('/users')

export class UserController {

    @Get('/profile/:id')
    @Header('X-Name', 'new')
    @HttpCode(201)
    getProfile(
        @Req() req: Request,
        @Param('id')id: string, 
        @Query('value') value: QueryParam['value']
    ) {
        if (!value) {
            throw new BadRequestException('Query parameter "value" is required');
        }
        return{
            id,
            value
        }
    }
}