declare namespace Express {
  export interface Request {
    user: {
      id: string;
    };
  }
}

// Assim eu consigo adicionar variáveis ou funções a um objeto
// existente de uma biblioteca, como o express
