import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { Book } from '../book/entities/book.entity'; 

@Injectable()
export class BookService {
  constructor(
    @InjectRepository(Book)
    private readonly bookRepository: Repository<Book>,
  ) {}

  async create(createBookDto: CreateBookDto): Promise<Book> {
    const book = this.bookRepository.create(createBookDto);
    return await this.bookRepository.save(book);
  }

  async findAll(): Promise<Book[]> {
    return await this.bookRepository.find({where : {delete_status : false}});
  }

  async findOne(id: number): Promise<Book | undefined> {
    return await this.bookRepository.findOne({ where: { id } });
  }

  async update(id: number, updateBookDto: UpdateBookDto): Promise<Book | undefined> {
    await this.bookRepository.update(id, updateBookDto);
    return this.bookRepository.findOne({where : {id}});
  }

  async remove(id: number): Promise<void> {
    await this.bookRepository.delete(id);
  }
}
