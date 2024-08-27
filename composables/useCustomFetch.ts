import type { UseFetchOptions } from '~/helpers/interfaces'
import { userTokens, apiErrors } from '~/store/common'
// const adminToken = '1|FKox66sPKAvQlDvnxdITyqaIFKxcULg94tfP5xbDbb5c0dc1'

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
        async onRequest({ request, options }) {
            const tokens = userTokens.value
            const { access } = tokens
            if (access) {
                const headers = new Headers(options.headers)
                headers.set('Authorization', `Bearer ${access}`)
                options.headers = headers
            }
        },
        async onRequestError({ request, options, error }) {
            apiErrors.push({url, text: error})
            console.warn('onRequestError error - ', error)
        },
        async onResponse({ request, response, options }) {
            if(mainOptions?.onResponse) {
                mainOptions.onResponse({ request, response, options })
            }
        },
        async onResponseError({ request, response, options }) {
            console.warn('onResponseError response - ', response)
            const status = response.status
            console.warn('status- ', status)
            if(status === 401) {
                await navigateTo('/login')
                return
            }
            const respData = response._data
            if (respData?.message) {
                apiErrors.push({url, text: respData?.message})
            }

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