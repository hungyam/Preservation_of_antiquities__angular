var validset = {
    mes: {
        username: {
            status: false,
            ErrMes: '用户名6~18位英文字母、数字或下划线，必须以英文字母开头'
        },
        id: {
            status: false,
            ErrMes: '学号8位数字，不能以0开头'
        },
        tel: {
            status: false,
            ErrMes: '电话11位数字，不能以0开头'
        },
        email: {
            status: false,
            ErrMes: '邮箱格式不正确'
        },
        key: {
            status: false,
            ErrMes: '密码为6~12位数字、大小写字母、中划线、下划线'
        },
        re_key: {
            status: false,
            ErrMes: '两次密码不一致'
        },
    },
    usernameCheck: function(username){
        return this.mes.username.status = /^[a-zA-Z][a-zA-Z0-9_]{5,17}$/.test(username);
    },
    idCheck: function(id){ 
        return this.mes.id.status = /^[1-9]\d{7}$/.test(id);
    },
    telCheck: function(tel){
        return this.mes.tel.status = /^[1-9]\d{10}$/.test(tel);
    },
    emailCheck: function(email){
        return this.mes.email.status = /^[a-zA-Z_\-]+@([a-zA-Z_\-]+\.)+[a-zA-Z]{2,4}$/.test(email);
    },
    keyCheck: function(key){
        this.key=key;
        return this.mes.key.status = /^[a-zA-Z0-9_\-]{6,12}$/.test(key);
    },
    re_keyCheck: function(re_key){
        return this.mes.re_key.status = re_key == this.key;
    },
    FieldCheck: function(name , value) {
        return this[name+"Check"](value);
    },
    FormCheck: function(){
        return this.mes.username.status&&this.mes.id.status&&this.mes.tel.status&&this.mes.email.status&&this.mes.key.status&&this.mes.re_key.status;
    },
    findFormatErrors: function(user){
        var errorMessages = [] ;
        for(var key in user){
            if(!this.FieldCheck(key,user[key]))
                errorMessages.push(validset.mes[key].ErrMes);
        }
        return errorMessages.length > 0 ? new Error(errorMessages.join('<br />')) :null;
    }
}
if(typeof module == 'object')
    module.exports = validset;
