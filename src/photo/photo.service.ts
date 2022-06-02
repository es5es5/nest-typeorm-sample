import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindOperator, In, Repository } from 'typeorm';
import { Photo } from './entities/photo.entity';

@Injectable()
export class PhotoService {
  constructor(
    @InjectRepository(Photo)
    private photoRepository: Repository<Photo>,
  ) {}

  create(createPhotoDto: Photo) {
    return createPhotoDto;
  }

  findAll() {
    // return this.photoRepository.find();
    return this.photoRepository.find();
  }

  findOne(id: number): Promise<Photo> {
    return this.photoRepository.findOneBy({ id });
  }

  update(id: number, updatePhotoDto: Photo) {
    return updatePhotoDto;
  }

  remove(id: number) {
    return `This action removes a #${id} photo`;
  }
}
