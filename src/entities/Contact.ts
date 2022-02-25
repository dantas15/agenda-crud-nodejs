import { v4 as uuid } from "uuid";
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryColumn,
  UpdateDateColumn,
} from "typeorm";
import { Expose } from "class-transformer";

@Entity("contacts")
class Contact {
  @PrimaryColumn({ type: "uuid" })
  readonly id: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column({ length: "11" })
  phoneNumber: string;

  @Column({ nullable: true })
  image: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @Expose({ name: "imageUrl" })
  getAvatarURL(): string | null {
    if (!this.image) {
      return null;
    }

    return `http://localhost:3333/uploads/${this.image}`;
  }

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}

export { Contact };
