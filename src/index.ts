import { Server } from "./models/server";
const server = new Server();

const run1 = ()=>{
    server.listen();
}


const runner = ()=>{
  run1();
}



runner()