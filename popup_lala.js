document.addEventListener('DOMContentLoaded', function() {
    $('.entry.unvoted')
        .mouseover(function() {
            $(this).css('border', '1px solid red');
        }).click(function() {
            console.log($(this));
        })
        .mouseout(function() {
            $(this).css('border', '0px');
        });
    var checkPageButton = document.getElementById('checkPage');
    checkPageButton.addEventListener('click', function() {

        chrome.tabs.getSelected(null, function(tab) {
            d = document;

            var f = d.createElement('form');
            f.action = 'http://gtmetrix.com/analyze.html?bm';
            f.method = 'post';
            var i = d.createElement('input');
            i.type = 'hidden';
            i.name = 'url';
            i.value = tab.url;
            f.appendChild(i);
            d.body.appendChild(f);
            f.submit();
        });
    }, false);
}, false);