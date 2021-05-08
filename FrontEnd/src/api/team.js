import axios from 'axios'

export function listarTeam(){
    return axios({
        method:"GET",
        url:"http://localhost:8000/api/team",
    })
}

export function inserirTeam(team){
    return axios({
        method:"POST",
        url:"http://localhost:8393/api/team",
        data:team
    })
}

export function removerTeam(id_bolsista){
    return axios({
        method:"DELETE",
        url:"http://localhost:8393/api/team/"+id_bolsista
    })
}