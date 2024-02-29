(async function () {
    const token = document.location.href.split('access_token=')[1].split('&token')[0];
    console.log(token);

    const res = await axios({
        method: 'get',
        url: 'https://www.googleapis.com/oauth2/v2/userinfo',
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    console.log(res);
    const { name: user_name, email, picture } = res.data;

    //회원가입 여부 확인
    const findUser = await axios({
        method: 'POST',
        url: '/api/user/find',
        data: {
            email,
            isSignup: true,
        },
    });
    //해당하는 email이 없으면 회원가입
    if (findUser.data === null) {
        const signupKakaoResult = await axios({
            method: 'POST',
            url: '/api/user/signup',
            data: {
                email,
                user_name,
                type: 'google',
                profile_img: picture,
                thumb_img: picture,
            },
        });
        console.log(signupKakaoResult);
    }
    //회원가입 또는 로그인 완료시 메인페이지로 이동
    document.location.href = '/';
})();
