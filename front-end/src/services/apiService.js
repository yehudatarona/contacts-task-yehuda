let localUrl = "http://localhost:3000/";
let realUrl = "https://ideodigital-contacts-task.herokuapp.com/"

export const apiUrl = realUrl;
export const doApiGet = async (_url) => {
    let resp = await fetch(_url);
    let data = await resp.json();
    //console.log("doApiGst",data);
    return data;
}

export const doApiPost = async (_url, _body) => {
    let resp = await fetch(_url, {
        method: "POST",
        body: JSON.stringify(_body),
        headers: {
            'content-type': "application/json"
        }
    })
    let data = await resp.json()
    console.log("service say:" ,data)
    return data;
}



