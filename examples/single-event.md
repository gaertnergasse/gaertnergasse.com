### Single Events


#### About Div

this should be the first div in a single event
```html
<div class="about">
  <h4>EVENT</h4>
  <p>ARTIST</p>
  <p>
    DAY.<span class="wide"> MONTH</span><span class="narrow">MONTH_NUMBER.</span>
    –
    DAY.<span class="wide"> MONTH</span><span class="narrow">MONTH_NUMBER.</span>
    2017</p>
  <p>invited by HOST</p>
</div>
```

### Frame div

This is a div with some top and bottom margin.
Use it to separate poems/text from images and about
```html
<div class="frame">
  ...
</div>
```

### Image link
To link to images (for example in a frame)
```html
<img src="./img/IMAGE_NAME.IMAGE_EXTENSION">
```

Multiple images in a frame:
```html
<div class="frame">
  <img src="./img/01.jpg">
  <img src="./img/02.jpg">
  <img src="./img/03.jpg">
  <img src="./img/04.jpg">
  <img src="./img/05.jpg">
</div>
```

paragraphs of text in a frame:
```html
<div class="frame">
  <h4>++</h4>
  <p>
    When you allocate
    <br>
    If you plus plus one too much
    <br>
    <i>SEGMENTATION FAULT</i>
  </p>
  <p>
    When you allocate
    <br>
    If you plus plus one too much
    <br>
    <b>SEGMENTATION FAULT</b>
  </p>
</div>
```