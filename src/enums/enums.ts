const PESSOA_FISICA = [1, { tipo:"FÍSICA", abbr:"PF"}]

export enum PF_OR_PJ {
  PF="PESSOA_FISICA",

  PJ ="PESSOA_JURÍDICA"
}

 /* pode ser ampliado segundo necessidade do parceiro*/
export enum ROLES {
    ROLE_1 = "idealizador",
    ROLE_2 = "admin",
    ROLE_3 = "voluntario_geral",
    ROLE_4 = "voluntario_especifico",
    ROLE_5 = "cadastrado",
  }
  
  /* pode ser ampliado segundo necessidade do parceiro*/
  /* em caso de pots deve ser implementado um mongo ou json server local*/
  export enum POSTS_CATEGORIES {
    PRODUTO = 1,
    BLOG = 2,
    EVENTO = 3,
    COMENTARIOS = 4,
    COLABORADOR = 5,
    TICKET = 6,
  }
  
  export enum CLASS_TYPES {
    TEO = 1,
    LAB = 2,
    WEB = 3,
    PJT = 4,
    ATV = 5,
    EXA = 6,
    DOC = 7,
  }
  
  export enum DOMINIOS_EMPRESA {
    EDUCACAO = 1,
    SAUDE = 2,
    TECNOLOGIA = 3,
    FINANCAS = 4,
    COMERCIO = 5,
    INDUSTRIA = 6,
    SERVICOS = 7,
    GOVERNO = 8,
    ALIMENTOS = 9,
    TRANSPORTE = 10,
    CONSTRUCAO = 11,
    OUTROS = 12,
  }
  
  export enum LISTA_CATEGORIAS_ITEMS {
    FLASHCARDS = 1,
    BOOKS = 2,
    NOTEBOOKS = 3,
  }
  
  export enum CURRENT_STATUS {
    RESTART = "restart",
    ONLOAD = "onload",
    STUDYING = "studying",
    READING = "reading",
    COMPLETED = "completed",
    RETRYING = "retrying",
  }
  
export enum DiaDaSemana {
Segunda = "Segunda-feira",
Terca = "Terça-feira",
Quarta = "Quarta-feira",
Quinta = "Quinta-feira",
Sexta = "Sexta-feira",
Sabado = "Sábado",
Domingo = "Domingo",
}