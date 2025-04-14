/** */
const baseUrl_test = "https://dubdubjazzrecomendsamplebackend.net"
//const baseUrl_test = "http://localhost:3333"
const httpMethodsGET="GET"




const buildURL =(targetPath,param_d)=>{
    const baseurlobj = new URL(baseUrl_test)
    if(targetPath.indexOf("/") ==-1){
        baseurlobj.pathname = "/"+targetPath
    }else{
        baseurlobj.pathname = targetPath
    }
    if(param_d !=null){
        baseurlobj.search = new URLSearchParams(param_d);
    }
    return baseurlobj.href
}

const buildHeader =(httpMethodStr)=>{
    let headerDict ={
        accept: 'application/json',
        'Content-Type': 'application/json'
    }
    let totalInfoDict={
        "methods":httpMethodStr
    }
    const result1 = Object.assign(headerDict, totalInfoDict);
    return result1
}


const jsonToDict = (jsonn) =>{
    return JSON.stringify(jsonn)
}
const  fetchCli = async (url,headers) =>{
    let resjson;
    try{
        let response= await fetch(url,headers)
        if(!response.ok){
            switch (response.status) {
                case 400:
                    console.error("fetchCli ==>> 400 error")
                    throw new Error(jsonToDict({"status":"400","message":"一般的なクライアントエラー"}));
                case 401:
                    console.error("fetchCli ==>> 401 error")
                    throw new Error(jsonToDict({"status":"401","message":"アクセス権がありません"}));
                case 404:
                    console.error("fetchCli ==>> 404 error")
                    throw new Error(jsonToDict({"status":"404","message":"Webページが見つからない"}));
                case 500:
                    console.error("fetchCli ==>> 500 error")
                    throw new Error(jsonToDict({"status":"500","message":"何らかのサーバーエラーが起きています"}));
                case 501:
                    console.error("fetchCli ==>> 501 error")
                    throw new Error(jsonToDict({"status":"501","message":"情報がみつかりませんでした"}));
                default:
                  throw new Error(jsonToDict({"status":"NonClear","message":"不明なエラーがおきてます"}));
            }
        }

        resjson = await response.json()
                
    }catch(e){
        return Promise.reject(e.message)
    }finally{
        console.log("fetchCli ==>> finally")
    }
    return Promise.resolve(resjson)
        
}

export {buildURL,fetchCli,buildHeader,httpMethodsGET}




