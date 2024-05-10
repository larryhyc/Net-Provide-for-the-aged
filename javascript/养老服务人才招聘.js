const getPeople = [
    {
        url: 'https://www.liepin.com/job/1964749999.shtml?pgRef=c_pc_industry_search_page:c_pc_industry_search_job_listcard@2_64749999:1:gw.ad71fe73-39200529.1&d_sfrom=search_title&d_ckId=d9dffe02f6467bfd7bc19e630402487a&d_curPage=0&d_pageSize=40&d_headId=d9dffe02f6467bfd7bc19e630402487a&d_posi=1',
        title: '温洲长护险养老护理员招聘'
    },
    {
        url: 'https://www.liepin.com/job/1964231603.shtml?pgRef=c_pc_industry_search_page:c_pc_industry_search_job_listcard@2_64231603:1:gw.ad71fe73-39200529.1&d_sfrom=search_title&d_ckId=d9dffe02f6467bfd7bc19e630402487a&d_curPage=0&d_pageSize=40&d_headId=d9dffe02f6467bfd7bc19e630402487a&d_posi=2',
        title: '养老护理员招聘泰康健投招聘'
    },
    {
        url: 'https://www.liepin.com/a/53709037.shtml?pgRef=c_pc_industry_search_page:c_pc_industry_search_job_listcard@1_53709037:1:gw.ad71fe73-39200529.1&d_sfrom=search_title&d_ckId=d9dffe02f6467bfd7bc19e630402487a&d_curPage=0&d_pageSize=40&d_headId=d9dffe02f6467bfd7bc19e630402487a&d_posi=3',
        title: '养老护理员招聘'
    },
    {
        url: 'https://www.liepin.com/job/1964867211.shtml?pgRef=c_pc_industry_search_page:c_pc_industry_search_job_listcard@2_64867211:1:gw.ad71fe73-39200529.1&d_sfrom=search_title&d_ckId=d9dffe02f6467bfd7bc19e630402487a&d_curPage=0&d_pageSize=40&d_headId=d9dffe02f6467bfd7bc19e630402487a&d_posi=5',
        title: '机构养老护理员招聘(富力集团)'
    },
    {
        url: 'https://www.liepin.com/job/1962753407.shtml?pgRef=c_pc_industry_search_page:c_pc_industry_search_job_listcard@2_62753407:1:gw.ad71fe73-39200529.1&d_sfrom=search_title&d_ckId=d9dffe02f6467bfd7bc19e630402487a&d_curPage=0&d_pageSize=40&d_headId=d9dffe02f6467bfd7bc19e630402487a&d_posi=14',
        title: '养老护理员招聘(黑龙江柏善养老服务有限公司)'
    },
    {
        url: 'https://www.liepin.com/job/1962272743.shtml?pgRef=c_pc_search_page:c_pc_search_job_listcard@2_62272743:1:a4b4d1c7-76d0-4b02-9ff7-f10971e87e3d&d_sfrom=search_prime&d_ckId=null&d_curPage=0&d_pageSize=40&d_headId=null&d_posi=0&skId=s0agif22mg71xrwpqj32ktuzntmpovdb&fkId=s0agif22mg71xrwpqj32ktuzntmpovdb&ckId=s0agif22mg71xrwpqj32ktuzntmpovdb&sfrom=search_job_pc&curPage=0&pageSize=40&index=0',
        title: '养老院院长招聘(颐伦养老服务集团有限公司)'
    },
    {
        url: 'https://www.liepin.com/job/1955317005.shtml?pgRef=c_pc_search_page:c_pc_search_job_listcard@2_55317005:1:eb5c0dd4-5fa9-4047-aaf3-b7e8393cd1d4&d_sfrom=search_prime&d_ckId=null&d_curPage=0&d_pageSize=40&d_headId=null&d_posi=1&skId=lg1xb1qawtshydvhzbkt9erxfoqaz5qb&fkId=lg1xb1qawtshydvhzbkt9erxfoqaz5qb&ckId=lg1xb1qawtshydvhzbkt9erxfoqaz5qb&sfrom=search_job_pc&curPage=0&pageSize=40&index=1',
        title: '护理培训经理招聘(广西新生活医养健康服务股份有限公司)'
    },
    {
        url: 'https://www.liepin.com/job/1957481879.shtml?pgRef=c_pc_industry_search_page:c_pc_industry_search_job_listcard@2_57481879:1:gw.ad71fe73-39200529.1&d_sfrom=search_title&d_ckId=d9dffe02f6467bfd7bc19e630402487a&d_curPage=0&d_pageSize=40&d_headId=d9dffe02f6467bfd7bc19e630402487a&d_posi=29',
        title: '养老护理员招聘(上海逸团健康科技有限公司)'
    },
    {
        url: 'https://www.liepin.com/job/1961005621.shtml?pgRef=c_pc_industry_search_page:c_pc_industry_search_job_listcard@2_61005621:1:gw.ad71fe73-39200529.1&d_sfrom=search_title&d_ckId=d9dffe02f6467bfd7bc19e630402487a&d_curPage=0&d_pageSize=40&d_headId=d9dffe02f6467bfd7bc19e630402487a&d_posi=18',
        title: '养老护理员招聘(北京普世教育科技有限公司)'
    },
];

const warpper = document.querySelector('.warper');
for (let i of getPeople) {
    warpper.innerHTML += `
        <a href="" class="item">
            <p>${i.title}</p>
        </a>
    `
}