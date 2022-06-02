import { ApiProperty } from '@nestjs/swagger';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('photo')
export class Photo {
  @PrimaryGeneratedColumn()
  @ApiProperty()
  id: number;

  @Column({ length: 500 })
  @ApiProperty()
  name: string;

  @Column('text')
  @ApiProperty()
  description: string;

  @Column()
  @ApiProperty()
  filename: string;

  @Column('int')
  @ApiProperty()
  views: number;

  @Column()
  @ApiProperty()
  isPublished: boolean;
}
