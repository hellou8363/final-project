$(() => {

  $(".rankers > #rankBox").on({
      mouseover: function () {
          // console.log("open");
          let boxWidth = $(this).parent().css("width");
          let totalWrapMargin = $(".total-wrap").css("marginLeft");
          let sectionMargin = $(".total-wrap").css("width");

          let boxMargin = parseInt(totalWrapMargin) + parseInt(sectionMargin) / 50;

          // console.log($(this));
          // console.log(boxWidth);
          // console.log(boxMargin);

          $(this).children().children("#rankers").css("display", "grid");
          $(this).children().children("#rankers").css("width", boxWidth);
          $(this).children().children("#rankers").css("left", boxMargin);
      } // mouseover  
  })

  $("*").on({
      click: function () {
          $("#rankers ").css("display", "none");
          // console.log($("#rankers"))
      }
  })


}) // .jq