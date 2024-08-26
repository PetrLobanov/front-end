const apiHost = 'http://80.68.156.177';

export const getProducts = function() {
    const url = new URL(`${apiHost}/api/v1/product`);

    const headers = {
        "Content-Type": "multipart/form-data",
        "Accept": "application/json",
        "Authorization": "Bearer 1|7XMFJBrZTSh5og6so4mhwDmPYd1KRyHD5UJAm3SS01b23150",
    };

    return fetch(url, {
        method: "GET",
        headers,
    }).then(response => response.json());
}

export const getProjects = function() {
    const url = new URL(`${apiHost}/api/v1/project`);

    const headers = {
        "Content-Type": "multipart/form-data",
        "Accept": "application/json",
        "Authorization": "Bearer 1|7XMFJBrZTSh5og6so4mhwDmPYd1KRyHD5UJAm3SS01b23150",
    };

    return fetch(url, {
        method: "GET",
        headers,
    }).then(response => response.json());
}

