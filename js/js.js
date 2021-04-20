// شهر، يوم، ساعة، دقيقة، ثانية odHMS بصيغة countdown إضافة عداد زمني 
$(document).ready(function () {
    // Count-Down
    $(function () {
        var austDay = new Date();
        austDay = new Date(2021, 12, 25);
        $('#defaultCountdown').countdown({ until: austDay, format: 'odHMS' });
    });

    // ‫ إلغاء الحركة في شاشات الجوال وتهيئة مكتبة wow  للعمل
    var wow = new WOW({ mobile: false });
    wow.init();

    // إظهار رسالة النجاح عند إدخال بريد إلكتروني صحيح والفشل عند إدخال بريد إلكتروني خاطئ 
    $('.form-control').blur(function () {
        var x = document.forms["myForm"]["email"].value;
        var atpos = x.indexOf("@");
        var dotpos = x.lastIndexOf(".");
        if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= x.length) {
            $(this).parent().find(".alert.alert-danger").fadeIn(200);
        }
        else {
            $(this).parent().find(".alert.alert-success").fadeIn(200);
        }
    });
    // إظهار رسالة النجاح عند إدخال بريد إلكتروني صحيح والفشل عند إدخال بريد إلكتروني خاطئ 
    $('.form-control').blur(function () {
        var x = document.forms["myForm2"]["email2"].value;
        var atpos = x.indexOf("@");
        var dotpos = x.lastIndexOf(".");
        if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= x.length) {
            $(this).parent().find(".alert.alert-danger").fadeIn(200);
        }
        else {
            $(this).parent().find(".alert.alert-success").fadeIn(200);
        }
    });
});