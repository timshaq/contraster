function round(num) {
    return Math.round(num*2)/2;
}
function defaultHorizontalBuildOut(names) {
    cy.get(`${names.container}`);

    cy.get(`${names.container} ${names.separator}`);

    cy.get(`${names.container} ${names.beforeWrapper}`);
    cy.get(`${names.container} ${names.beforeWrapper} img`);

    cy.get(`${names.container} ${names.afterWrapper}`);
    cy.get(`${names.container} ${names.afterWrapper} img`);
}
function defaultHorizontalSetSize(names) {
    cy.get(`${names.container} img`)
        .should('be.visible')
        .and(($img) => {
            expect($img[0].naturalWidth).to.be.greaterThan(0)
        })

    cy.get(names.container).invoke('outerHeight').then((sliderHeight) => {
        sliderHeight = round(sliderHeight);
        const halfHeight = round(sliderHeight/2);

        cy.get(`${names.container} ${names.beforeWrapper}`).invoke('outerHeight').then(height => parseFloat(height)).should('be.eq', halfHeight);
        cy.get(`${names.container} ${names.beforeWrapper} img`).invoke('outerHeight').then(height => parseFloat(height)).should('be.eq', sliderHeight);

        cy.get(`${names.container} ${names.separator}`).invoke('css', 'top').then(top => parseFloat(top)).should('be.eq', halfHeight);
    });
}
const recursClicks = (position, clickPositionY, separatorStartTop, step, sliderHeight) => {
    // cy.log(`recursBefore Y: ${clickPositionY}`)
    switch(position) {
        case 'before':
            if(clickPositionY < separatorStartTop - 6) {
                cy.get(`#horizontal`).invoke('outerWidth').then((sliderWidth) => {
                    const halfWidth = round(sliderWidth/2);
                    cy.get(`#horizontal`).click(halfWidth, clickPositionY);
                    cy.get(`#horizontal .before-after-separator`).invoke('css', 'top').then(top => parseFloat(top)).should('be.eq', separatorStartTop)
                })
                recursClicks(position, clickPositionY + step, separatorStartTop, step);
            }
            break;
        case 'after':
            if(clickPositionY < sliderHeight) {
                cy.get(`#horizontal`).invoke('outerWidth').then((sliderWidth) => {
                    const halfWidth = round(sliderWidth/2);
                    cy.get(`#horizontal`).click(halfWidth, clickPositionY);
                    cy.get(`#horizontal .before-after-separator`).invoke('css', 'top').then(top => parseFloat(top)).should('be.eq', separatorStartTop)
                })
                recursClicks(position, clickPositionY + step, separatorStartTop, step, sliderHeight);
            }
            break;
    }
}

describe('Page Response', () => {
    it('visit', () => {
        cy.visit('http://test.56.shakirov.sand/test.html');
    })
})

describe('Default Horizontal Test', () => {

    const names = {
        container: '#horizontal',
        separator: '.before-after-separator',
        beforeWrapper: '.before-after-wrapper-before',
        afterWrapper: '.before-after-wrapper-after'
    }

    it('buildOut', () => {
        defaultHorizontalBuildOut(names)
    })

    it('setSizes', () => {
        defaultHorizontalSetSize(names)
    })

    // it('freePosition: false', () => {
    //     cy.get(`${names.container}`).invoke('outerHeight').then((sliderHeight) => {
    //         sliderHeight = round(sliderHeight);
    //         cy.get(`${names.container} ${names.separator}`).invoke('css', 'top').then((top) => {
    //             const separatorStartTop = parseFloat(top);
    //             cy.get(`${names.container}`).invoke('outerHeight').then((sliderHeight) => {
    //                 const step = sliderHeight / 10; // 10 percent
    //
    //                 recursClicks('before', 0, separatorStartTop, step);
    //
    //                 recursClicks('after', separatorStartTop + 6, separatorStartTop, step, sliderHeight);
    //             })
    //         });
    //     });
    // })

    it('separatorMove', () => {
        cy.get(`${names.container}`).then(container => {
            const minSeparatorPageY = round(container.offset().top);
            const maxSeparatorPageY = minSeparatorPageY + parseInt(container.css('height'));
            const step = maxSeparatorPageY/10;

            cy.get(`${names.container} ${names.separator}`).then(separator => {

                const separatorHalfWidth = parseInt(separator.css('width'))/2;
                const separatorSelfY = parseInt(separator.css('height')) / 2 + 1;

                const recursMouseMove = (x,y, maxY, step) => {
                    if(y < maxY) {
                        cy.get(`${names.container} ${names.separator}`)
                            .trigger('mouseenter', x, separatorSelfY)
                            .trigger('mousedown', { which: 1, button: 0, pageX: x, pageY: y + 1, force: true} )
                            .trigger('mousemove', { button: 0, pageX: x, pageY: y, force: true} )
                            .trigger('mouseup', { force: true } );

                        cy.get(`${names.container} ${names.separator}`)
                            .then(separator => {
                                return round(separator.height()/2) + round(separator.offset().top)
                            })
                            .should('be.eq', y)

                        cy.get(`${names.container} ${names.beforeWrapper}`)
                            .then(beforeWrapper => {
                                return round(beforeWrapper.height()) + round(beforeWrapper.offset().top)
                            })
                            .should('be.eq',y)

                        recursMouseMove(x, round(y + step), maxY, step);
                    }
                }
                recursMouseMove(separatorHalfWidth, minSeparatorPageY, maxSeparatorPageY, step);
            })
        })
    })
})
