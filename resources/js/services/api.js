class Api {
    constructor() { }

    call(requestType, url, data = null) {
        return new Promise((resolve, reject) => {
            axios[requestType](url, data)
                .then(response => {
                    resolve(response);
                })
                .catch(({ response }) => {
                    reject(response);
                });
        });
    }

    downloadFile(url, name_file) {
        axios({
            url: url,
            method: 'GET',
            responseType: 'blob', // important
        }).then((response) => {
            const url = window.URL.createObjectURL(new Blob([response.data]));
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', name_file); //or any other extension
            document.body.appendChild(link);
            link.click();
        });
    }

    downloadFilePost(url, name_file, data) {
        return axios({
            url: url,
            method: 'POST',
            data: data,
            responseType: 'blob', // important
        }).then((response) => {
            const url = window.URL.createObjectURL(new Blob([response.data]));
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', name_file); //or any other extension
            document.body.appendChild(link);
            link.click();
            return true;
        }).catch((err) => {
            return false;
        });
    }
}

export default Api;