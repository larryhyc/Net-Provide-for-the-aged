// 渲染课程模块

// 健康
const getHealth = [
    { pic: 'https://resource.lndx.edu.cn/lndx-ggfwpt-study/org-2/a/png/2023/0718/13e7f62836549907dadb6724518a0d4f83e1a93ee21d8a10d3ad7f88e8463b9c.png', url: 'https://study.lndx.edu.cn/ui/home/?currentOrgId=50#/course/CourseInfo?postsId=65494', title: '财富管理N课-西湖十景' },
    { pic: 'https://resource.lndx.edu.cn/lndx-ggfwpt-study/org-2/a/jpg/2022/0902/17aaf2dc526aa2b895427b4df5e8d5829737d4f2356ba6d4fd720fd85e817970.jpg', url: 'https://study.lndx.edu.cn/ui/home/?currentOrgId=50#/course/CourseInfo?postsId=24270', title: '如何过好退休生活？' },
    { pic: 'https://resource.lndx.edu.cn/lndx-ggfwpt-study/org-2/a/png/2023/0608/7c3c81bc8f0b318ebeb4b3b6e38fb49d075ca4d22e51f3d3e02ebdd1a0e5fc58.png', url: 'https://study.lndx.edu.cn/ui/home/?currentOrgId=50#/course/CourseInfo?postsId=65378', title: '声乐提高' },
    { pic: 'https://resource.lndx.edu.cn/lndx-ggfwpt-study/org-2/a/png/2023/0320/9e47d659041a6b90be13bd5a1d9ec51455614463d27c7798e22a4c74d85ac1ab.png', url: 'https://study.lndx.edu.cn/ui/home/?currentOrgId=50#/course/CourseInfo?postsId=38784', title: '轻松学烘焙（快速入门篇）' },
    { pic: 'https://resource.lndx.edu.cn/lndx-ggfwpt-study/org-2/a/png/2022/1021/2b4605a59883f8fdd8b5aaf48ae4ae45d1823b96b6348ee80b7e99e0d5d5bd69.png', url: 'https://study.lndx.edu.cn/ui/home/?currentOrgId=50#/course/CourseInfo?postsId=32973', title: '中医养生课程' },
    { pic: 'https://resource.lndx.edu.cn/lndx-ggfwpt-study/org-2/a/png/2022/1021/26bb72e6b3f326d3e7ca637add62768e71f9ac080fed23afd2198759446e4d7b.png', url: 'https://study.lndx.edu.cn/ui/home/?currentOrgId=50#/course/CourseInfo?postsId=33217', title: '科学生活——饮食安全' },
    { pic: 'https://resource.lndx.edu.cn/lndx-ggfwpt-study/org-2/a/png/2023/0320/1e3499e9b392580a0a223be5c98d8898044ef8835a20348faebedd223fca9015.png', url: 'https://study.lndx.edu.cn/ui/home/?currentOrgId=50#/course/CourseInfo?postsId=39944', title: '老年生活“微”起来' },
    { pic: 'https://resource.lndx.edu.cn/lndx-ggfwpt-study/org-2/a/png/2023/0320/ed8df5baf4e84028778b695df4d9191e2473a02033bd4c9de8b2df6036e6d9fc.png', url: 'https://study.lndx.edu.cn/ui/home/?currentOrgId=50#/course/CourseInfo?postsId=40191', title: '汉语音韵之美' },
]

const lessonBody = document.querySelectorAll('.warpper .lesson-body')[0];
for (let i of getHealth) {
    lessonBody.innerHTML += `
        <a href="${i.url}" class="item">
                <img src="${i.pic}">
                <p>${i.title}</p>
        </a>
    `
}
// 书法
const getWrite = [
    { pic: './res/move3.jpg', url: '', title: '标题1' },
    { pic: './res/move3.jpg', url: '', title: '标题2' },
    { pic: './res/move3.jpg', url: '', title: '标题3' },
    { pic: './res/move3.jpg', url: '', title: '标题4' },
    { pic: './res/move3.jpg', url: '', title: '标题5' },
    { pic: './res/move3.jpg', url: '', title: '标题6' },
    { pic: './res/move3.jpg', url: '', title: '标题7' },
    { pic: './res/move3.jpg', url: '', title: '标题8' },
]

const writeBody = document.querySelectorAll('.warpper .lesson-body')[1];
for (let i of getWrite) {
    writeBody.innerHTML += `
        <a href="${i.url}" class="item">
                <img src="${i.pic}">
                <p>${i.title}</p>
        </a>
    `
}
// 美术
const getArt = [
    { pic: './res/move3.jpg', url: '', title: '标题1' },
    { pic: './res/move3.jpg', url: '', title: '标题2' },
    { pic: './res/move3.jpg', url: '', title: '标题3' },
    { pic: './res/move3.jpg', url: '', title: '标题4' },
    { pic: './res/move3.jpg', url: '', title: '标题5' },
    { pic: './res/move3.jpg', url: '', title: '标题6' },
    { pic: './res/move3.jpg', url: '', title: '标题7' },
    { pic: './res/move3.jpg', url: '', title: '标题8' },
]

const artBody = document.querySelectorAll('.warpper .lesson-body')[2];
for (let i of getArt) {
    artBody.innerHTML += `
        <a href="${i.url}" class="item">
                <img src="${i.pic}">
                <p>${i.title}</p>
        </a>
    `
}