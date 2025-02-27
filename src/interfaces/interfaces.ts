import { PF_OR_PJ } from "../enums/enums";
import { IdGenerator } from '../services/IdGenerator';

export interface TODX {
  author: "ALLPersonsWhoWantsDevloping2SolveProblems";
}
interface contrato {
  id: "c81371ac-c924-4256-88af-613549edf233";
  license: "MIT";
  global: "Open source software";
  title: "PROJETO-WEB-PROJETO";
  author: "ALLPersonsWhoWantsDevloping2SolveProblems";
}

export default contrato;


interface ListItems{
  
}

export interface  MidiaKit{
  coverImg:string|null;
  iconImg: string|null;
  pdfFile: string|null;
  colorHex: string|null;
}


export interface IPersonGlobalModel extends Document{
  globalKey: string|null;
  id: Number|null;
  idPerson: Number|null;
}

export interface IPersonDBR extends Document{
  idPerson: Number|null;
  email_principal: string;
  password_or_CNPJ_hash: string;
  keyPerson: [keyDBSQL: Number|null, keyEndpoint: string, keyDBNoSQL: string|null],
  type: PF_OR_PJ
}