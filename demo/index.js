document.addEventListener('DOMContentLoaded', function(){
    var horizontal = new Contraster({
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

    var diagonal = new Contraster({
        'separator': {
            'class': 'custom-separator',
        },
        'container': '#diagonal',
        'className': 'test-container-css-name',
        'direction': 'diagonal',
    });

    var vertical = new Contraster({
        'container': '#vertical',
        'className': 'test-container-css-name',
        'direction': 'vertical',
    });
    // vertical.on('destroy', () => console.log('destroy'))

    var separatorInnerHTML = "<span class=\"span1\"></span><span class=\"span2\"></span><span class=\"span3\"></span>";

    var ba3 = new Contraster({
        'container': '#ba3',
        'className': 'test-container-css-name',
        'separator': {
            'class': 'separator-custom-inner',
            'innerHTML': separatorInnerHTML,
        },
    });

})