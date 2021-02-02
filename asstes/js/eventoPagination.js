$("#nvpagination >li").click(function () {
  var txtnav = $(this).text();
  $("#nvpagination li").removeClass("active");
  $(this).addClass("active");

  const new_genearlan = genearlan.filter((item)=>{
    if (item.nombre.charAt(0) == txtnav) {
      return item
    }
  })
  
  render(new_genearlan)
});