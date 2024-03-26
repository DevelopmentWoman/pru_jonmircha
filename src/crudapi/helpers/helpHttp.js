

export const helpHttp = () => {

    const customFetch = async (endpoint, options)=>{

        const defaultHeader = {
            accept: "application/json",
        };

        const controller = new AbortController();
        options.signal = controller.signal;

        options.cache = "no-store"


        options.methods = options.method || "GET";

        options.headers = options.headers ? {...defaultHeader, ...options.headers} : defaultHeader;

        options.body = options.body = JSON.stringify(options.body) || false;

        if(!options.body) delete options.body;


        setTimeout(()=> controller.abort(),3000);

        try {
        const resp = await fetch(endpoint,options)
        if(!resp.ok){
            const err = {
                err:true,
                status: resp.status || "00",
                statusText: resp.statusText || "Ocurrió un error",
            }
            throw err;
        }        
        return await resp.json();
                    
        } catch (err) {
            if (!err.err) err= {err:true, status: "00", statusText: err.message}
            return err
            
        }

    }



    const get = (url, options={})=> customFetch(url, options)

    const post = (url, options={})=>{
        options.method = "POST"
        return customFetch(url, options)
    };

    const put = (url, options={})=>{
        options.method = "PUT"
        return customFetch(url, options)
    };

    const del = (url, options={})=>{
        options.method = "DELETE"
        return customFetch(url, options)
    };

    




  return {
    get,
    post,
    put,
    del,
  }
}


