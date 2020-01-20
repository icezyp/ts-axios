import axios from '../../src/index'

//举例不同参数类型
// axios({
//     method: 'get',
//     url: '/base/get',
//     params: {
//         foo: ['hello', 'world']
//     }
// })

// axios({
//     method: 'get',
//     url: '/base/get',
//     params: {
//         foo: {
//             bar: 'box'
//         }
//     }
// })

// const date = new Date()
// axios({
//     method: 'get',
//     url: '/base/get',
//     params: {
//         date
//     }
// })


// axios({
//     method: 'get',
//     url: '/base/get',
//     params: {
//         foo: '@:$,'
//     }
// })

// axios({
//     method: 'get',
//     url: '/base/get#hash',
//     params: {
//         foo: 'bar'
//     }
// })

// axios({
//     method: 'get',
//     url: '/base/get?foo=bar',
//     params: {
//         bar: 'box'
//     }
// })

//测试data
// axios({
//     method: 'post',
//     url: '/base/post',
//     data: {
//         a: 1,
//         b: 2
//     }
// })

// const arr = new Int32Array([21, 31])

// axios({
//     method: 'post',
//     url: '/base/buffer',
//     data: arr
// })

//测试headers
axios({
    method: 'post',
    url: '/base/post',
    data: {
        a: 1,
        b: 2
    }
})

axios({
    method: 'post',
    url: '/base/post',
    headers: {
        'content-type': 'application/json',
        'Accept': 'application/json, text/plain, */*'
    },
    data: {
        a: 1,
        b: 2
    }
})

const paramsString = 'q=URLUtils.searchParams&topic=api'
const searchParams = new URLSearchParams(paramsString)
axios({
    method: 'post',
    url: '/base/post',
    data: searchParams
})