# Contraster

Vanilla JS library for create before-after effect.

![preview](https://github.com/timshaq/contraster/tree/main/img/preview.jpg?raw=true)

## Installation

### Install from NPM

```
npm i contraster
```

```js
import Contraster from "contraster";
import "contraster-es5/contraster.css";
```

```js
const slider = new Contraster({
  container: "#horizontal"
});
```

### Download assets

If you want to use library assets locally, you can directly download CSS and JS files from [unpkg.com](https://unpkg.com/browse/contraster/)
Also support versions:
[Contraster ES5](https://unpkg.com/browse/contraster-es5/)
[Contraster IE11](https://unpkg.com/browse/contraster-ie11/)

### Add styles

```html
<head>
...
<link rel="stylesheet" href="path/to/contraster.css">
...
</head>
```

### Add scripts

```html
<footer> ... </footer>
<script src="path/to/contraster.js"></script>
```

## HTML Layout

```html
<div id="mySlider"
     data-before="./img/ba-2-1.jpg"
     data-after="./img/ba-2-2.jpg">
</div>
```

## Initialize

```js
// index.js
const mySlider = new BeforeAfter({
    container: '#mySlider',
    direction: 'diagonal',
    freePosition: true,
    'separator': {
        'class': 'custom-separator',
    },
});
```

## Separator CSS styles

### :before and :after

You can add before/after pseudo-elements:

```css
// index.css
.custom-separator {
    position: relative;
    width: 10px;
}

.custom-separator:before {
    content: '::';
    width: 20px;
    height: 40px;
    position: absolute;
    background-color: #fff;
    border-radius: 6px;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    display: flex;
    justify-content: center;
    align-items: center;
    line-height: 100%;
}
```

### Custom inner HTML-layout

Or you can append yout HTML-layout in separator:

```js
// index.js
const separatorInnerHTML = `
    <span class="span1"></span>
    <span class="span2"></span>
    <span class="span3"></span>
`;

const mySlider = new BeforeAfter({
    'separator': {
        'class': 'custom-separator',
        'innerHTML': separatorInnerHTML,
    },
});
```

```css
// index.css
.separator-custom-inner .span1,
.separator-custom-inner .span2,
.separator-custom-inner .span3 {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    display: block;
}
.separator-custom-inner .span1 {
    border-top: 10px solid transparent;
    border-bottom: 10px solid transparent;
    border-right: 10px solid #333;
    transform: translate(-200%,-50%);
}
.separator-custom-inner .span2 {
    width: 20px;
    height: 10px;
    background-color: #333;
    transform: translate(-50%,-50%);
}
.separator-custom-inner .span3 {
    border-top: 10px solid transparent;
    border-bottom: 10px solid transparent;
    border-left: 10px solid #333;
    transform: translate(100%,-50%);
}
```

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request

## History

### x.12.2021

Publish v0.1

## License

[MIT License](https://github.com/timshaq/contraster/blob/main/LICENSE)

Copyright (c) 2021 timshaq