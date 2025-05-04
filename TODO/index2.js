
//hitting post request from frontend instead of postman
async function addTODO() {
    let res = await fetch("http://localhost:3000/todo", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            "title": "frifbjhfuffhkjfhjhfiehfwefjhew",
            "desc": "nedxf"
        })
    });

    let json = await res.json();
    console.log(json);
}
addTODO()


//another syntax of doing same thing but in clean mannner 
// async function addTODO() {
//     let body = {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json"
//         },
//         body: JSON.stringify({
//             "title": "frifbjhfuffhkjfhjhfiehfwefjhew",
//             "desc": "nedxf"
//         })
//     }
//     let res = await fetch("http://localhost:3000/todo", body);
//     let json = await res.json();
//     console.log(json);
// }
// addTODO()