// 轮播图模块
const getPicture = [
    { url: './res/move1.jpg' },
    { url: './res/move2.jpg' },
    { url: './res/move3.jpg' },
];

// 渲染图片到轮播图
// 获取轮播图整体框架
const swiperWrapper = document.querySelector('.swiper-wrapper');
// 遍历数组对象
for (let i = 0; i < getPicture.length; i++) {
    const slide = document.createElement('div');
    slide.className = 'swiper-slide';
    const img = document.createElement('img');
    img.src = getPicture[i].url;
    slide.appendChild(img);
    swiperWrapper.appendChild(slide);
}

var swiper = new Swiper(".mySwiper", {
    cssMode: true,
    navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
    },

    pagination: {
    el: ".swiper-pagination",
    },
    mousewheel: true,

    // 自动切换
    keyboard: true,
     autoplay: {
    delay: 3000,
    },
     
});

// 新闻板块
// 新闻数据
const getNwes = [
    { url: 'https://mzj.wuhan.gov.cn/mzdt_912/mzyw/202112/t20211221_1877989.shtml', text: '湖北再评出36家国家三级及以上养老机构 民办养老机构首次入选五级养老机构' },
    { url: 'https://mzj.wuhan.gov.cn/mzdt_912/mzyw/202110/t20211021_1799692.shtml', text: '让幸福养老的梦想照进现实' },
    { url: 'https://mzj.wuhan.gov.cn/mzdt_912/tpxw_916/202110/t20211029_1823010.shtml', text: '打造“养老样板”，武汉加快推进养老服务高质量发展' },
    { url: 'https://mzj.wuhan.gov.cn/mzdt_912/mzyw/202402/t20240206_2357617.shtml', text: '硚口区易家街道综合养老服务中心获评4级养老机构' },
    { url: 'https://mzj.wuhan.gov.cn/mzdt_912/mzyw/202204/t20220414_1955468.shtml', text: '养老床位“搬”进家里，武汉将新增家庭养老床位3000张' },
    { url: 'https://mzj.wuhan.gov.cn/mzdt_912/mzyw/202110/t20211029_1822999.shtml', text: '打造“养老样板”，武汉加快推进养老服务高质量发展' },
    { url: 'https://www.thepaper.cn/newsDetail_forward_26841544', text: '2019-2023银发经济资讯分析报告（政策篇）' },
];

// 渲染新闻到新闻板块
const news = document.querySelector('.news');
for(let i = 0; i < getNwes.length; i++) {
    news.innerHTML += `
        <a class="news-link" href="${getNwes[i].url}" target="_blank"">
            <p>${getNwes[i].text}</p>
        </a>
    `;
}