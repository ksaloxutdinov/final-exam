import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { NewsEntity } from './entities/news.entity';
import { CreateNewsDto } from './dto/create-news.dto';

@Injectable()
export class NewsService {
  constructor(
    @InjectRepository(NewsEntity)
    private readonly newsRepository: Repository<NewsEntity>,
  ) {}

  async create(createNewsDto: CreateNewsDto): Promise<NewsEntity> {
    const news = this.newsRepository.create(createNewsDto);
    return await this.newsRepository.save(news);
  }

  async findAll(): Promise<NewsEntity[]> {
    return await this.newsRepository.find();
  }

  async findOne(id: number): Promise<NewsEntity | null> {
    return await this.newsRepository.findOne({ where: { id } });
  }

  async update(id: number, updateNewsDto: CreateNewsDto): Promise<NewsEntity> {
    await this.newsRepository.update(id, updateNewsDto);
    const updated = await this.findOne(id);
    if (!updated) {
      throw new Error(`News with id ${id} not found`);
    }
    return updated;
  }

  async remove(id: number): Promise<void> {
    await this.newsRepository.delete(id);
  }
}