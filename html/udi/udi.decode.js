$('#udi').focus();
$("#search_button").click(function() {
    butClick();
});

$("#clear_button").click(function() {
    $('input').val('');
    $('textarea').val('');
    $('#packageTable').empty();
    $('#udi').focus();
});

//回车事件绑定
$('#udi').bind('keyup', function(event) {
    if (event.keyCode == "13") {
        //回车执行查询
        butClick();
    }
});

$('#udi').bind('keydown', function(event) {
    if (event.keyCode == "9") {
        //TAB执行查询
        butClick();
    }
});

function butClick(){
    var udi = $('#udi').val();
    if(!udi){
        alert('请扫描或输入UDI');
        return;
    }
    decodeUdiByServer(udi);
    $('#udi').focus();
}

//从客户端解析udi
function decodeUdiByClient(udi){
    var result = decodeUdi(udi);
    console.log('client decode result', result);
    if(!result){
        return;
    }
    //赋值
    $('#di').val(result.di);
    $('#pi').val(result.pi);
    $('#batch_no').val(result.batch_no);
    $('#expire_date').val(result.expire_date);
    $('#prd_date').val(result.produce_date);
    $('#type').val(result.type);
}

//从服务端解析udi
function decodeUdiByServer(udi){
    var param = {
        'barcode': udi,
        'bizDescription': '自助查询',
        'invokerName': '伍一',
        'invokerRole': '普通用户'
    };

    $.ajax({
        url: 'http://localhost:8080/japi/udi/decode',
        data: param,
        type: 'GET',
        dataType: 'json',
        success: function(data){
            if(data.code != 200){
                alert(data.message);
                return;
            }

            var result = data.result;
            console.log('server decode result', result);
            printResultPretty(result);
        },
        error: function(){
            alert('连接服务器失败');
            decodeUdiByClient(udi);
        }
    })
}

function printResultPretty(result){
    $('input').val('');
    $('textarea').val('');
    $('#packageTable').empty();
    var udi = result.udi;
    var product = result.product;
     //赋值
     if(udi){
        $('#di').val(udi.di);
        $('#pi').val(udi.pi);
        $('#batch_no').val(udi.batchNo);
        $('#expire_date').val(udi.expireDate);
        $('#prd_date').val(udi.manufactureDate);
        $('#type').val(udi.type);
        $('#sn').val(udi.sn);
     }

     if(product){
        $('#product_name').val(product.cpmctymc);
        $('#spec_model').val(product.ggxh);
        $('#reg_no').val(product.zczbhhzbapzbh);
        $('#org_name').val(product.ylqxzcrbarmc);
        $('#org_code').val(product.tyshxydm);
        $('#yibao_code').val(product.ybbm);
        $('#cate_code').val(product.flbm);
        $('#description').val(product.cpms);
        $('#min_sale_di').val(product.zxxsdycpbs);
        $('#code_system').val(product.cpbsbmtxmc);
        $('#publish_date').val(product.cpbsfbrq);
        $('#version_date').val(product.versionTime);
        $('#use_di').val(product.sydycpbs);
        $('#native_di').val(product.btcpbs);
       
        var devicePackageList = product.devicePackageList;
        if(devicePackageList){
            for(var x in devicePackageList){
                $('#packageTable').append('<tr><td>'+devicePackageList[x].bzcpbs+'</td><td>'+(devicePackageList[x].cpbzjb?devicePackageList[x].cpbzjb:'')+'</td><td>'+(devicePackageList[x].bznhxyjcpbzsl?devicePackageList[x].bznhxyjcpbzsl:'')+'</td><td>'+(devicePackageList[x].bznhxyjbzcpbs?devicePackageList[x].bznhxyjbzcpbs:'')+'</td><td>'+devicePackageList[x].nhzxbzs+'</td></tr>');
            }
        }
        
     }

}

//解析udi
function decodeUdi(udi){
    var result = {'udi':udi};
    //GS1规则
    decodeGS1(result, udi);
    if(!result.type){
        //MA规则
        decodeMa(result, udi);
    }
    return result;
}

/**
 * 解析MA规则
 * @param {} result 
 * @param {*} udi 
 */
function decodeMa(result, udi){
    if(udi.indexOf('MA.') == 0){
       var udiArray = udi.split('.');
       if(udiArray.length < 6){
            return;
       }
       result.type = 'UDI';
       for(var i=0; i<udiArray.length; i++){
            if(i < 5){
                result.di = (result.di?result.di+'.':'') + udiArray[i];
            }else{
                result.pi = (result.pi?result.pi+'.':'') + udiArray[i];
            }

            var startFlag = udiArray[i].substring(0, 1);
            var content = udiArray[i].substring(1);
            if(startFlag == 'S'){
                result.sn = content;
                result.type = 'SN';
            }
            if(startFlag == 'M'){
                result.produce_date = content;
            }
            if(startFlag == 'L'){
                result.batch_no = content;
            }
            //灭菌批号
            if(startFlag == 'D'){
                result.sterilization_batch_no = content;
            }
            //失效期
            if(startFlag == 'E'){
                result.expire_date = content;
            }
            //有效期
            if(startFlag == 'V'){
                result.effective_date = content;
            }
       }

    }
}

/**
 * 解析GS1规则
 * @param {*} result 
 * @param {*} udi 
 */
function decodeGS1(result, udi){
    if(udi.indexOf('00') == 0 || udi.indexOf('01') == 0 || udi.indexOf('02') == 0 || udi.indexOf('69') == 0 || udi.indexOf('069') == 0){
        if((udi.indexOf('00') == 0 && udi.length == 20) 
             || ((udi.indexOf('01') == 0 || udi.indexOf('02') == 0) && udi.length == 16)
             || (udi.indexOf('69') == 0 && udi.length == 13)
             || (udi.indexOf('069') == 0 && udi.length == 14)
          ){
             result.type = 'DI';
             result.di = (udi.length == 16 || udi.length == 20) ? udi.substring(2) : udi;
        }else if(udi.length > 16){
             if(udi.indexOf('69') == 0){
                 result.di = udi.substring(0, 13);
                 result.pi = udi.substring(13);
             }else if(udi.indexOf('069') == 0){
                 result.di = udi.substring(0, 14);
                 result.pi = udi.substring(14);
             }else if(udi.indexOf('00') == 0 && udi.length > 20){
                 result.di = udi.substring(2, 20);
                 result.pi = udi.substring(20);
             }else{
                 result.di = udi.substring(2, 16);
                 result.pi = udi.substring(16);
             }
 
             var piStartWithArray = ['10', '11', '13', '15', '17', '21', '22'];
             if(piStartWithArray.includes(result.pi.substring(0, 2))){
                 result.type = 'UDI';
                 //解析PI
                 decodeGS1Pi(result, result.pi);
             }else{
                 result.type = 'DI';
                 result.pi = null;
             }
        }else{
             result.type = 'DI';
             result.di = udi;
        }
     }
}

/**
 * 解析GS1规则的PI
 * @param {*} result 
 * @param {*} pi 
 */
function decodeGS1Pi(result, pi){
    var startFlag = '';
    if(pi.length > 2){
        startFlag = pi.substring(0, 2);
    }

    if(startFlag == '15' || startFlag == '17'){
        if(pi.length >= 8){
            result.expire_date = pi.substring(2, 8);
        }
        if(pi.length > 8){
            decodeGS1Pi(result, pi.substring(8));
        }
    }

    if(startFlag == '11' || startFlag == '13'){
        if(pi.length >= 8){
            result.produce_date = pi.substring(2, 8);
        }
        if(pi.length > 8){
            decodeGS1Pi(result, pi.substring(8));
        }
    }

    if(startFlag == '10'){
        result.batch_no = pi.substring(2);
        if(pi.length > 22){
            decodeGS1Pi(result, pi.substring(22));
        }
    }

    if(startFlag == '21'){
        result.sn = pi.substring(2);
        result.type = 'SN';
        if(pi.length > 22){
            decodeGS1Pi(result, pi.substring(22));
        }
    }

}