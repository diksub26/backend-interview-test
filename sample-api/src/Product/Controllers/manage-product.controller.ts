import { Controller, Get, Param, Post } from '@nestjs/common';

@Controller('manage-product')
export class ManageProductController {
    @Get(":id")
    getById(@Param("id") id: string) {

    }

    @Post()
    store() {
        
    }
}
