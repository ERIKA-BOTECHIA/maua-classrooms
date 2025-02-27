

export function switchParams(listParams:string[]){

}



export const ListItems=(list:string[]):any=>{
    return new Promise((resolve,reject)=>{
        // Simulate a network request
        setTimeout(()=>{
            resolve({
                status: 200,
                data: list.map((item, index)=>({id: index+1, title: item})),
                message: 'List fetched successfully'
            });
        }, 1000);
    });
}