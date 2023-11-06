$(document).ready(function(){

    $('#ea').click(function () { 
       $('#screen').val($('#screen').val()+'0'); 
    });

    $('#da').click(function () { 
       $('#screen').val($('#screen').val()+'1'); 
    });

    $('#db').click(function () { 
       $('#screen').val($('#screen').val()+'2'); 
    });

    $('#dc').click(function () { 
       $('#screen').val($('#screen').val()+'3'); 
    });

    $('#ca').click(function () { 
       $('#screen').val($('#screen').val()+'4'); 
    });

    $('#cb').click(function () { 
       $('#screen').val($('#screen').val()+'5'); 
    });

    $('#cc').click(function () { 
       $('#screen').val($('#screen').val()+'6'); 
    });

    $('#ba').click(function () { 
       $('#screen').val($('#screen').val()+'7'); 
    });

    $('#bb').click(function () { 
       $('#screen').val($('#screen').val()+'8'); 
    });

    $('#bc').click(function () { 
       $('#screen').val($('#screen').val()+'9'); 
    });

    $('#aa').click(function () { 
        $('#screen').val(' ');
    });
    
    $('#ad').click(function () { 
        $('#screen').val($('#screen').val()+ '/');   
    });
    $('#bd').click(function () { 
        $('#screen').val($('#screen').val()+ '*');   
    });
    $('#cd').click(function () { 
        $('#screen').val($('#screen').val()+ '-');   
    });
    $('#dd').click(function () { 
        $('#screen').val($('#screen').val()+ '+');   
    });
    
    $('#eb').click(function () { 
        $('#screen').val($('#screen').val()+ '.');   
    });

    $('#ec').click(function () { 
        $('#screen').val(eval($('#screen').val()));   
    });

    $('#ac').click(function () { 
        $('#screen').val($('#screen').val()+ '**');   
    });

    $('#ab').click(function () { 
        $('#screen').val(Math.sqrt($('#screen').val()));
        
    });
    
})
