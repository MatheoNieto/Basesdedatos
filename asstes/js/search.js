$("input#gosearch").keyup(function () {
    let textseacrh = $(this).val().toUpperCase();
  
    const new_genearlan = genearlan.filter((item)=>{
        if(textseacrh != ''){
            if (item.informacion.toUpperCase().indexOf(textseacrh) > -1 || item.tipo.toUpperCase().indexOf(textseacrh) > -1 || item.nombre.toUpperCase().indexOf(textseacrh) > -1) {
                return item
            }
        }else{
            return item
        }
        
    })
    render(new_genearlan)
});