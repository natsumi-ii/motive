import { Injectable } from '@nestjs/common';
import { CreateLabelDto } from './dto/create-label.dto';
import { UpdateLabelDto } from './dto/update-label.dto';
import { prisma } from '@/prisma';

@Injectable()
export class LabelsService {
  async create(createLabelDto: CreateLabelDto) {
    console.log('createLabelDto', createLabelDto)
    const label = await prisma.label.create({ data: createLabelDto });

    return label;
  }

  async findAll() {
    const labels = await prisma.label.findMany();
    return labels;
  }

  async findOne(id: number) {
    return `This action returns a #${id} label`;
  }

  async update(id: number, updateLabelDto: UpdateLabelDto) {
    return `This action updates a #${id} label`;
  }

  async remove(id: number) {
    return `This action removes a #${id} label`;
  }
}