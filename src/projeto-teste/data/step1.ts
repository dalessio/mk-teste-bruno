export interface IStep1 {
  id: number | undefined;
  dataCadastro: Date;
  ativo: boolean;

  nome: string;
  email: string ;
  celular: string;
  termo: boolean;
}

export class Step1 {
  id: number | undefined;
  dataCadastro: Date = new Date();
  ativo: boolean = false;

  nome: string = '';
  email: string = '';
  celular: string = '';
  termo: boolean = false;
    
  get isNew(): boolean {
    return this.id === undefined;
  }

  constructor(initializer?: any) {
    if (!initializer) return;
    if (initializer.id) this.id = initializer.id;
    if (initializer.dataCadastro) this.dataCadastro = initializer.dataCadastro;
    if (initializer.ativo) this.ativo = initializer.ativo;

    if (initializer.nome) this.nome = initializer.nome;
    if (initializer.email) this.email = initializer.email;
    if (initializer.celular) this.celular = initializer.celular;
    if (initializer.termo) this.termo = initializer.termo;
  }
}