/*****Get all user******/
(GET)>https://groceryjwt.herokuapp.com/api/auth/users


/*******register*********/
(POST)>https://groceryjwt.herokuapp.com/api/auth/register
(body)=>{"name":"cherry","email":"cherry@gmail.com","password":"1217" }

/******Login***********/
(POST)>https://groceryjwt.herokuapp.com/api/auth/login
(response)=>{auth:true,token:'abc'}


/********userinfo********/
(GET)>https://groceryjwt.herokuapp.com/api/auth/userinfo
(header) =>{'y-access-token':'token value from login'}