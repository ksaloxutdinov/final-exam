import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { NewsService } from './news.service';
import { CreateNewsDto } from './dto/create-news.dto';
import { NewsEntity } from './entities/news.entity';
import { NotFoundException } from '@nestjs/common';

@Controller('news')
export class NewsController {
  constructor(private readonly newsService: NewsService) {}

  @Post()
  create(@Body() createNewsDto: CreateNewsDto): Promise<NewsEntity> {
    return this.newsService.create(createNewsDto);
  }

  @Get()
  findAll(): Promise<NewsEntity[]> {
    return this.newsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<NewsEntity> {
    const news = await this.newsService.findOne(+id);  
    if (!news) {
      throw new NotFoundException(`News with id ${id} not found`);
    }
    return news;
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.newsService.remove(+id);
  }
}