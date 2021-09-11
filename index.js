$(document).ready(function () {
    $("#DESIGN-img").click(function () {
        $("#DESIGN-img").fadeOut("slow").hide('1000')
        $("#DESIGNS").fadeIn("slow")
    });
    $("#DESIGNS").click(function () {
        $("#DESIGNS").toggle("slow").hide('1000')
        $("#DESIGN-img").fadeIn("slow")
    });
});
$(document).ready(function () {
    $("#dev-img").click(function () {
        $("#dev-img").fadeOut("slow").hide('1000')
        $("#dev").fadeIn("slow")
    });
    $("#dev").click(function () {
        $("#dev").toggle("slow").hide('1000')
        $("#dev-img").fadeIn("slow")
    });
});
$(document).ready(function () {
    $("#product-img").click(function () {
        $("#product-img").fadeOut("slow").hide('1000')
        $("#product").fadeIn("slow")
    });
    $("#product").click(function () {
        $("#product").toggle("slow").hide('1000')
        $("#product-img").fadeIn("slow")
    });
});

$(document).ready(function () {
    $("#work0").mouseover(function () {
        $("#done1").show();
    }).mouseout(function () {
        $("#done1").hide();
    });
});
$(document).ready(function () {
    $("#work1").mouseover(function () {
        $("#done2").show();
    }).mouseout(function () {
        $("#done2").hide();
    });
});
$(document).ready(function () {
    $("#work2").mouseover(function () {
        $("#done3").show();
    }).mouseout(function () {
        $("#done3").hide();
    });
});
$(document).ready(function () {
    $("#work3").mouseover(function () {
        $("#done4").show();
    }).mouseout(function () {
        $("#done4").hide();
    });
});
$(document).ready(function () {
    $("#work4").mouseover(function () {
        $("#done5").show();
    }).mouseout(function () {
        $("#done5").hide();
    });
});
$(document).ready(function () {
    $("#work5").mouseover(function () {
        $("#done6").show();
    }).mouseout(function () {
        $("#done6").hide();
    });
});
$(document).ready(function () {
    $("#work6").mouseover(function () {
        $("#done7").show();
    }).mouseout(function () {
        $("#done7").hide();
    });
});
$(document).ready(function () {
    $("#work7").mouseover(function () {
        $("#done8").show();
    }).mouseout(function () {
        $("#done8").hide();
    });
});
$(document).ready(function () {
    $("form#form").submit(function (event) {
        event.preventDefault()
    });
    $("#sub").click(function () {
        var name = $("input#name").val()
        var email = $("input#email").val()
        var message = $("textarea#comment").val()
        if ($("input#name").val() && $("input#email").val()) {
            alert("Please enter a valid email.")
        } else {
            alert("Thank you for your feedback, our personnel will reach out to you.")
        }
    });
});