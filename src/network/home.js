import {goods} from "./request";

// export function getGoods() {
//     return goods({
//         url: '/banner/queryAllByLimit?offset=0&limit=4',
//         // url: '/home/multidata',
//     })
// }


export function login() {
    return goods({
        url: '/api/login',
        // url: '/home/multidata',
    })
}
