const getNwes = [
    { url: 'https://mzj.wuhan.gov.cn/mzdt_912/mzyw/202112/t20211221_1877989.shtml', text: '湖北再评出36家国家三级及以上养老机构 民办养老机构首次入选五级养老机构' },
    { url: 'https://mzj.wuhan.gov.cn/mzdt_912/mzyw/202110/t20211021_1799692.shtml', text: '让幸福养老的梦想照进现实' },
    { url: 'https://mzj.wuhan.gov.cn/mzdt_912/tpxw_916/202110/t20211029_1823010.shtml', text: '打造“养老样板”，武汉加快推进养老服务高质量发展' },
    { url: 'https://mzj.wuhan.gov.cn/mzdt_912/mzyw/202402/t20240206_2357617.shtml', text: '硚口区易家街道综合养老服务中心获评4级养老机构' },
    { url: 'https://mzj.wuhan.gov.cn/mzdt_912/mzyw/202204/t20220414_1955468.shtml', text: '养老床位“搬”进家里，武汉将新增家庭养老床位3000张' },
    { url: 'https://mzj.wuhan.gov.cn/mzdt_912/mzyw/202110/t20211029_1822999.shtml', text: '打造“养老样板”，武汉加快推进养老服务高质量发展' },
    { url: 'https://www.thepaper.cn/newsDetail_forward_26841544', text: '2019-2023银发经济资讯分析报告（政策篇）' },
    { url: 'https://baijiahao.baidu.com/s?id=1793625545403167245&wfr=spider&for=pc', text: '银发经济崛起 市场逐步迈向多元化' },
    { url: 'https://www.pishu.cn/zxzx/xwdt/566855.shtml', text: '康养蓝皮书：中国康养产业发展报告（2020）' },
    { url: 'http://www.hubei.gov.cn/zfwj/ezbf/202201/t20220120_3974096.shtml', text: '省人民政府办公厅关于印发建立健全养老服务综合监管制度促进养老服务高质量发展若干措施的通知' },
    { url: 'http://www.hubei.gov.cn/zfwj/ezbf/202201/t20220130_3987525.shtml', text: '省人民政府办公厅关于印发湖北省养老服务体系建设“十四五”规划的通知' },
];

// 渲染新闻到新闻板块
const news = document.querySelector('.news');
for(let i = 0; i < getNwes.length; i++) {
    news.innerHTML += `
        <a class="news-link" href="${getNwes[i].url}" target="_blank">
            <p>${getNwes[i].text}</p>
        </a>
    `;
}