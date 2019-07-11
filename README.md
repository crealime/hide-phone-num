# hide-phone-num
## Jquery plugin to hide the phone number

html

    <div class="phone" data-tel="+38 (063) 060-38-93">
        <a href="#">show</a>
    </div>

js

    $('.phone').hidePhoneNum({
        showNumber: 9, // Number of displayed digits
        linkClass: 'tel-link' // Class for link
    });
