import { IPersonGlobalModel } from '../interfaces/interfaces';
import { IdGenerator } from '../services/IdGenerator';
class Person{

    private globalKey: string
    private id: Number | null 
    private idPerson: Number|null
    

    constructor(idPerson: Number|null=null, id :Number | null=null, globalKey: string|null=null) {
        this.idPerson = idPerson;
        this.id=id;
        this.globalKey=this.checkAndSetGlobalKey(globalKey);
    }




    checkAndSetGlobalKey(globalKey: string | null):string{
      if (globalKey === null|| !globalKey) {
        const idGenerator = new IdGenerator();
        this.globalKey = idGenerator.generate();
      } else {
        this.globalKey = globalKey;
      }
      return this.globalKey;
    
}


}