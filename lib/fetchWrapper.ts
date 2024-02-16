import { getTokenWorkAround } from "@/app/actions/authActions"

const baseUrl = "http://4.196.28.156/" //process.env.API_URL

async function get(url:string) {
    const requestOptions ={
        method: "GET",
        headers: await getHeaders(),
    }
    const response = await fetch(baseUrl + url, requestOptions)
    return await handleResponse(response)    
}

async function post(url:string, body:{}) {
    const requestOptions ={
        method: "POST",
        headers: await getHeaders(),
        body: JSON.stringify(body)
    }
    const response = await fetch(baseUrl + url, requestOptions)
    return await handleResponse(response)    
}

async function put(url:string, body:{}) {
    const requestOptions ={
        method: "PUT",
        headers: await getHeaders(),
        body: JSON.stringify(body)
    }
    const response = await fetch(baseUrl + url, requestOptions)
    return await handleResponse(response)    
}

async function del(url:string) {
    const requestOptions ={
        method: "DELETE",
        headers: await getHeaders()
    }
    const response = await fetch(baseUrl + url, requestOptions)
    return await handleResponse(response)    
}

async function getHeaders() {
    const token = await getTokenWorkAround();
    const headers = { "Content-Type":"application/json" } as any
    if (token){
        headers.Authorization = `Bearer ${token.access_token}`
    }
    return headers    
}


async function handleResponse(response: Response) {    
    const text = await response.text();
    // const data = text && JSON.parse(text);
    let data;
    try {
        data = JSON.parse(text);
    } catch (error) {
        data = text; 
    }

    if (response.ok){
        return data || response.statusText
    }else{
        const error = {
            status: response.status,
            message: typeof data === 'string' ? data : response.statusText
        }
        return {error}
    }
}


export {get,post,put,del}
