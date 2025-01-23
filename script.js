let msg = [{
    name: '张三',
    age: 20,
    strengths: 'JavaScript',
    avatar: 'https://tse4-mm.cn.bing.net/th/id/OIP-C.39mOMBjUfsK-HL9jUbv1MwHaE7?pid=ImgDet&rs=1',
    email: 'yunding@qq.com',
    password: 33333
},
{
    name: '李四',
    age: 19,
    strengths: 'python',
    avatar: 'https://tse2-mm.cn.bing.net/th/id/OIP-C.YlKimVo94OkaZDZCzPIDpAHaFh?pid=ImgDet&rs=1',
    email: '12345678@163.com',
    password: 11111
},
{
    name: '王五',
    age: 18,
    strengths: 'Java',
    avatar: 'https://tse2-mm.cn.bing.net/th/id/OIP-C.P2hK9SRjhFE8WM9N8tgWFAHaEQ?pid=ImgDet&rs=1',
    email: 'yundingshuyuan@qq.cn',
    password: 222222
},
];

function login() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const eErr = document.getElementById('eErr');
    const pErr = document.getElementById('pErr');
    const uInfo = document.getElementById('uInfo');

    eErr.text = '';
    pErr.text = '';
    uInfo.innerHTML = '';

    const emailRegex = /^([a-zA-Z0-9_.+-])+@(qq|163)\.com$|^([a-zA-Z0-9_.+-])+@(qq)\.cn$/;
    if (!emailRegex.test(email)) {
        eErr.text = '请输入合法的邮箱地址';
        return;
    }

    const user = msg.find(u => u.email === email && u.password === +password);
    if (user) {
        uInfo.innerHTML = `
                    <img src="${user.avatar}" alt="${user.name}">
                    <p>姓名：${user.name}</p>
                    <p>年龄：${user.age}</p>
                    <p>特长：${user.strengths}</p>
                `;
    } else {
        pErr.text = '邮箱或密码错误';
    }
}