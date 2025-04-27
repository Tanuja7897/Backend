async function fetchData(){
    const req = await fetch("http://localhost:3000/" , {
        method : "GET"
    });
    //because in index.js we are seding only str not json so do not do req.json we do req.text
    const data = await req.text()
    console.log(data);
}
fetchData();