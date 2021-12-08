document.addEventListener('DOMContentLoaded', function(){
    var horizontal = new BeforeAfter({
        container: '#horizontal',
        direction: 'horizontal',
        // cursorGrab: true,
        progressPosition: 50,
        freePosition: true,
    });
    setTimeout(function() {
        // horizontal.setprogressPosition(10)
        // horizontal.destroy()
    }, 3000)

    var diagonal = new BeforeAfter({
        'separator': {
            'class': 'custom-separator',
        },
        'container': '#diagonal',
        'className': 'test-container-css-name',
        'direction': 'diagonal',
    });

    var vertical = new BeforeAfter({
        'container': '#vertical',
        'className': 'test-container-css-name',
        'direction': 'vertical',
    });
    // vertical.on('destroy', () => console.log('destroy'))

    var separatorInnerHTML = "<span class=\"span1\"></span><span class=\"span2\"></span><span class=\"span3\"></span>";

    var ba3 = new BeforeAfter({
        'container': '#ba3',
        'className': 'test-container-css-name',
        'separator': {
            'class': 'separator-custom-inner',
            'innerHTML': separatorInnerHTML,
        },
    });

})