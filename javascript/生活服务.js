const getHome = [
    {pic:'', title: '助餐服务', url: '' },
    { title: '助洁服务', url: '' },
    { title: '助医服务', url: '' },
    { title: '助购服务', url: '' },
    { title: '适老化改造服务', url: '' },
]

// 获取整个被背景
const warpper = document.querySelector('.warper');
for (let i of getHome) {
    warpper.innerHTML += `
        <a href="" class="item">
            <p>${i.title}</p>
        </a>
    `
}
