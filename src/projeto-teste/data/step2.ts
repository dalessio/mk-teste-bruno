export interface IStep2 {
  id: number | undefined;
  dataCadastro: Date;
  ativo: boolean;

  digito1: string;
  digito2: string;
  digito3: string;
  digito4: string;
  digito5: string;
  digito6: string;
}

export class Step2  {
  id: number | undefined;
  dataCadastro: Date = new Date();
  ativo: boolean = false;

  digito1: string = '';
  digito2: string = '';
  digito3: string = '';
  digito4: string = '';
  digito5: string = '';
  digito6: string = '';
    
  get isNew(): boolean {
    return this.id === undefined;
  }

  constructor(initializer?: any) {
    if (!initializer) return;
    if (initializer.id) this.id = initializer.id;
    if (initializer.dataCadastro) this.dataCadastro = initializer.dataCadastro;
    if (initializer.ativo) this.ativo = initializer.ativo;

    if (initializer.digito1) this.digito1 = initializer.digito1;
    if (initializer.digito2) this.digito2 = initializer.digito2;
    if (initializer.digito3) this.digito3 = initializer.digito3;
    if (initializer.digito4) this.digito4 = initializer.digito4;
    if (initializer.digito5) this.digito5 = initializer.digito5;
    if (initializer.digito6) this.digito6 = initializer.digito6;
  
    
  }
}