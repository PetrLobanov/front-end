import type { UseFetchOptions } from '~/helpers/interfaces'


export const API =  (url: string, mainOptions?: UseFetchOptions<object>) => {
    url = `http://80.68.156.177/${url}`
    const defaultOpt: any = {
        retry: 0,
        retryDelay: 500, // ms,
        watch: false,
        // immediate: false,
    }
    const resOpt = {...defaultOpt, ...mainOptions}
    return useFetch(url, {
        ...resOpt,
        async onRequestError({ request, options, error }) {
            console.warn('onRequestError error - ', error)
        },
        async onResponse({ request, response, options }) {
            if(mainOptions?.onResponse) {
                mainOptions.onResponse({ request, response, options })
            }
        },
        async onResponseError({ request, response, options }) {
            console.warn('onResponseError options - ', options)
        },
    })
}

export const GET = (url: string, options?: UseFetchOptions<object>) => {
    return API(url, { ...{ method: 'GET' }, ...options })
}

export const POST = (url: string,  body?: object | any, options?: UseFetchOptions<object>) => {
    if(body) {
        options = options || {}
        options.body =  JSON.stringify(body)
    }
    return API(url, { ...{ method: 'POST' }, ...options })
}

export const PATCH = (url: string, body?: object, options?: UseFetchOptions<object> ) => {
    if(body) {
        options = options || {}
        options.body =  JSON.stringify(body)
    }
    return API(url, { ...{ method: 'PATCH' }, ...options })
}