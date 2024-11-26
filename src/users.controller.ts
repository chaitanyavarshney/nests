import { Controller, Get, Header, HttpCode, HttpStatus, Redirect, Req, Res } from "@nestjs/common";
import { Request, Response } from "express";
import { PassThrough } from "stream";

@Controller('/users')
export class UserController {

    @Get('/profile')
    // @Redirect('/users/wallet', 302)
    @Header('X-Name', 'new')
    getProfile(@Req() req: Request, @Res({passthrough: true}) res: Response) {
        res.status(302)
        return({
            name: "chaitan"
        })
    }

    @Get('/wallet')
    getWallet(){
        return {
            sgr: '34'
        }
    }
}