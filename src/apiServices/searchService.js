import * as request from '~/utils/request';

export const search= async(q,type='less')=>{
    ///https://github.com/axios/axios  : thư viện axios github

    try {
        const res = await request.get('users/search',{
            params:{
                q,
                type
            }
            });
            return res.data

    } catch (error) {
        console.log(error);
    }
    //encodeURIComponent để mã hóa kí từ nhập vào để ko bị trùng vs kí tự bên backend ví dụ như ?,=
        // .then(res=>{
        //     setSearchResult(res.data);
        //     setLoading(false)

        // })
        // .catch(()=>{
        //     setLoading(false)
        // })
}