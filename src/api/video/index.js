import axios from "axios"

// 创建视频
const postVideo = form => axios.post('/api/v1/video', form).then(res => res.data)

// 读取视频详情
const getVideo = id => axios.post(`/api/v1/video/${id}`).then(res => res.data)

// 读取视频列表
const getVidoes = () => axios.get('/api/v1/videos').then(res => res.data)

export {
    getVidoes,
    getVideo,
    postVideo
}