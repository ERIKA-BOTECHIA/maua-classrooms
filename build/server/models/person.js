"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const IdGenerator_1 = require("../services/IdGenerator");
class Person {
    constructor(idPerson = null, id = null, globalKey = null) {
        this.idPerson = idPerson;
        this.id = id;
        this.globalKey = this.checkAndSetGlobalKey(globalKey);
    }
    checkAndSetGlobalKey(globalKey) {
        if (globalKey === null || !globalKey) {
            const idGenerator = new IdGenerator_1.IdGenerator();
            this.globalKey = idGenerator.generate();
        }
        else {
            this.globalKey = globalKey;
        }
        return this.globalKey;
    }
}
//# sourceMappingURL=person.js.map