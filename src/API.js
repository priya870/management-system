
const url = "http://localhost:8080/employee"

export const getData = ({FilterByGender , FilterBy , titleSortBy, page ,setTotalProduct , limit}) =>{

    if(FilterBy !== null){
        return fetch(`${url}?department=${FilterBy}&_sort=name&_order=${titleSortBy}&_page=${page}&_limit=${limit}`)
        .then(res => {
            setTotalProduct(+(res.headers.get("X-Total-Count")));
            return res.json()
        })
    }
    if(FilterByGender !== null){
        return fetch(`${url}?gender=${FilterByGender}&_sort=name&_order=${titleSortBy}&_page=${page}&_limit=${limit}`)
        .then(res => {
            setTotalProduct(+(res.headers.get("X-Total-Count")));
            return res.json()
        })
    }
    return fetch(`${url}?_sort=name&_order=${titleSortBy}&_page=${page}&_limit=${limit}`)
    .then(res => {
        setTotalProduct(Number(res.headers.get("X-Total-Count")));
        return res.json()
    })
}

export const addData = (userData)=>{
    return fetch(`${url}` , {
        method :"POST",
        body: JSON.stringify(userData),
        headers :{
            "Content-Type" : "application/json"
        }
    })
.then((res)=>res.json())
}


export const deleteData = (id)=>{
    return fetch(`${url}/${id}`,{
        method :"DELETE", headers :{
            "Content-Type" : "application/json"
        }
    })
    .then((res)=>res.json())

}

export const updateData = (id ,newData)=>{
    return fetch(`${url}/${id}`,{
        method :"PATCH", 
        body :JSON.stringify(newData),
        headers :{
            "Content-Type" : "application/json"
        }
    })
    .then((res)=>res.json())


}