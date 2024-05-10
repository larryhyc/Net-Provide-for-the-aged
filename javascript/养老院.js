// tab栏切换
const lis = document.querySelectorAll('.tab ul li');
const items = document.querySelectorAll('.tab .tab-content .item');
for (let i = 0; i < lis.length; i++) {
    lis[i].addEventListener('click', function (e) {
        document.querySelector('.active').classList.remove('active');
        document.querySelector('.active2').classList.remove('active2');
        lis[i].classList.add('active');
        items[i].classList.add('active2');
    });
}

// 养老院数据
// 江岸区
const getJiangan = [
    { pic: './res/move1.jpg', url: '#', name: '江岸区建设新村社区养老院', address: '武汉市江岸区百步亭花园建设新村183号', number: '82323310' },
    { pic: './res/move1.jpg', url: '#', name: '武汉江岸区长江明珠社区养老院', address: '武汉市江岸区谌家矶大道28号（长江明珠小区旁）', number: '66668818' },
    { pic: './res/move1.jpg', url: '#', name: '武汉香园社区优康养老院', address: '位于武汉市江岸区兴业路167号佑康医院三楼', number: '82914866' },
    { pic: './res/move1.jpg', url: ' http://whyly.net/html/about/lxwm/', name: '武汉江岸区劳动街敬老院', address: '位于武汉市江岸区劳动街10附2号（劳动敬老院）', number: '027-82426320' },
    { pic: './res/move1.jpg', url: '#', name: '武汉市江岸区长航社区养老院', address: '武汉市江岸区三眼桥一村158号育欣路22号', number: '82281002' },
    { pic: './res/move1.jpg', url: '#', name: '武汉江岸区三合社区养老院', address: '武汉市江岸区劳动街10附2号（原劳动新村A棟1号）', number: '82868271' },
    { pic: './res/move1.jpg', url: '#', name: '悦年华|颐养中心', address: '武汉市江岸区兴业路33号青松路与兴业路交汇处', number: '88869996' },
];

// 渲染江岸区

const jiangan = document.querySelectorAll('.item')[0];
for (let i = 0; i < getJiangan.length; i++){
    jiangan.innerHTML += `
        <a href="${getJiangan[i].url}">
            <img src="${getJiangan[i].pic}" alt="">
            <div class="data">
                <p>${getJiangan[i].name}</p>
                <p>地址:${getJiangan[i].address}</p>
                <p>电话:${getJiangan[i].number}</p>
            </div>
        </a>
    `
}

