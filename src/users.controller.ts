import { Controller, Get, Header, HttpCode, HttpStatus, Redirect, Req, Res } from "@nestjs/common";
import { Request, Response } from "express";
import { PassThrough } from "stream";

@Controller('/users')
export class UserController {

    @Get('/profile')
    @Redirect('/users/wallet', 302)
    @Header('X-Name', 'new')
    getProfile(@Req() req: Request, @Res({passthrough: true}) res: Response) {
        res.status(302)
        return{
            url: '/users/acc',
            statusCode: 302
        }
    }

    @Get('/acc')
    getWallet(){
        return {
            number: '34'
        }
    }
}