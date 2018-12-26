### Frontpage example widgets

#### upcoming event
this is an upcoming event, it is in the future or currently open
```html
<li class="upcoming">
  <a href="{{ WEB_ROOT }}YEAR/link-to-folder-in-year-directory/">
    <h4>Name of Event</h4>
    <p>Name of Artist(s)</p>
    <p>
      Opening 16.<span class="wide"> November</span><span class="narrow">11.</span>
      - 19:00
    </p>
    <p>
      16.<span class="wide"> November</span><span class="narrow">11.</span>
      - 16.<span class="wide"> December</span><span class="narrow">12.</span>
      2018
    </p>
  </a>
</li>
```

#### past event
this is a regular event, it has ended in the past.
to get here from an upcoming event,
remove the class="upcoming" and the <p> with the date and opening
```html
<li>
  <a href="{{ WEB_ROOT }}YEAR/link-to-folder-in-year-directory/">
    <h4>Name of Event</h4>
    <p>Name of Artists</p>
  </a>
</li>
````