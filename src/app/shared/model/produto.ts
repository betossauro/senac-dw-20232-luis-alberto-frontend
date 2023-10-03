import { Fabricante } from './fabricante';

export class Produto {
  id: number;
  nome: string;
  fabricante: Fabricante;
  peso: number;
  valor?: number;
  dataCadastro: Date;
}
