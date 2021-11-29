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

describe('Page Response', () => {
    it('visit', () => {
        cy.visit('http://test.56.shakirov.sand/demo.html');
    })
})

const defaultHorizontalNames = {
    container: '#horizontal',
    separator: '.before-after-separator',
    beforeWrapper: '.before-after-wrapper-before',
    afterWrapper: '.before-after-wrapper-after'
}
describe('Default Horizontal Test', () => {

    it('buildOut', () => {
        defaultHorizontalBuildOut(defaultHorizontalNames)
    })
    it('setSizes', () => {
        defaultHorizontalSetSize(defaultHorizontalNames)
    })
    it('freePosition: false', () => {
        cy.get(`#horizontal`).invoke('outerHeight').then((sliderHeight) => {
            sliderHeight = round(sliderHeight);
            const halfHeight = round(sliderHeight/2);
            cy.get(`#horizontal .before-after-separator`).invoke('css', 'top').then((top) => {
                const startTop = parseFloat(top);
                let clickPosition = 0;
                const step = 10;
                const recursClicks = (clickPosition, startTop) => {
                    cy.log(`recurs: ${clickPosition}`)
                    if(clickPosition < startTop) {
                        cy.get(`#horizontal`).invoke('outerWidth').then((sliderWidth) => {
                            const halfWidth = round(sliderWidth/2);
                            cy.get(`#horizontal`).click(halfWidth, clickPosition);
                            cy.get(`#horizontal .before-after-separator`).invoke('css', 'top').then(top => parseFloat(top)).should('be.eq', startTop)
                        })
                        recursClicks(clickPosition + step,startTop);
                    }
                }
                recursClicks(clickPosition, startTop)
            });
        });
    })
})
