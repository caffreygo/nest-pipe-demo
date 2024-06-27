import { Controller, Get, Param } from '@nestjs/common'
import { AppService } from './app.service'
import { PrismaClient } from '@prisma/client'

@Controller()
export class AppController {
  prisma: PrismaClient

  constructor(private readonly appService: AppService) {
    this.prisma = new PrismaClient()
  }

  @Get(':id')
  getHello(@Param('id') id: number) {
    return this.prisma.article.findUnique({
      where: {
        id: Number(id),
      },
    })
  }
}
