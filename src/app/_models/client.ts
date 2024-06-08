export interface Client {
  accountNumber?: number;
  surname: string;
  name: string;
  patronymic?: string;
  dateOfBirth: Date;
  inn: string;
  responsibleUser: string;
  status: string;
  userId: number;
}

export enum statusEnum {
  PENDING = 'PENDING',
  IN_PROGRESS = 'IN_PROGRESS',
  REJECTED = 'REJECTED',
  CLOSED = 'CLOSED',
}
// 'PENDING' | 'IN_PROGRESS' | 'REJECTED' | 'CLOSED';
