$(function(){
    $('input').blur(function(){
        if (validset.FieldCheck(this.id,$(this).val())){
            $(this).parent().parent().find('.error').text('').hide();
        }else{
            $(this).parent().parent().find('.error').text(validset.mes[this.id].ErrMes).show();
        }
    });
});
