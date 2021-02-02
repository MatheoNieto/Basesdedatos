$("#btnsearfilt").click(function () {

    const facultad = $("#slectionfacul").val()
    const tipo_subscriptio = $("#tiposucri").val()
    
    const new_genearlan = genearlan.filter((item)=>{
        if(tipo_subscriptio == 'Todas las anteriores' && facultad == 'Todas las anteriores'){
            return item
        }else if(facultad == 'Todas las anteriores' && tipo_subscriptio != 'Todas las anteriores' ){
            if (tipo_subscriptio == item.tipo){
                return item
            }
        }else if(facultad != 'Todas las anteriores' && tipo_subscriptio == 'Todas las anteriores' ){
            if (facultad == item.facultad) {
                return item
            }
        }else{
            if (tipo_subscriptio == item.tipo && facultad == item.facultad) {
                return item
            }
        }
    })

    render(new_genearlan)

});