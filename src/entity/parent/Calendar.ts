import { Entity, TableInheritance } from 'typeorm';
import { AbstractEntity } from '../abstract/AbstractEntity';

@Entity()
@TableInheritance({ column: { type: 'varchar', name: 'type' } })
export class Calendar extends AbstractEntity {}
