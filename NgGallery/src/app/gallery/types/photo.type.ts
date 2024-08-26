import { Guid } from 'guid-typescript';

export type Photo = {
  id: Guid,
  title: string,
  created_at: Date,
  description: string,
  image: string; //File
  favorite: boolean;
}