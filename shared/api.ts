const apiHost = 'http://80.68.156.177';

export const getProducts = function() {
    const url = new URL(`${apiHost}/api/v1/product`);

    const headers = {
        "Content-Type": "multipart/form-data",
        "Accept": "application/json",
        "Authorization": "Bearer 1|FKox66sPKAvQlDvnxdITyqaIFKxcULg94tfP5xbDbb5c0dc1",
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
        "Authorization": "Bearer 1|FKox66sPKAvQlDvnxdITyqaIFKxcULg94tfP5xbDbb5c0dc1",
    };

    return fetch(url, {
        method: "GET",
        headers,
    }).then(response => response.json());
}

