import axios from 'axios'

export function listarPost(){
    return axios({
        method:"GET",
        url:"http://localhost:8000/api/post",
    })
}

export function inserirPost(post){
    return axios({
        method:"POST",
        url:"http://localhost:8393/api/post",
        data:post
    })
}

export function removerPost(id_post){
    return axios({
        method:"DELETE",
        url:"http://localhost:8393/api/post/"+id_post
    })
}