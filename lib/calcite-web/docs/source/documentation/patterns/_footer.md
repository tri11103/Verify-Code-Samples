Standard footer for ArcGIS and Esri properties. The footer in Calcite Web is 'sticky' by default. This means that if the page doesn't have sufficient height, the footer will still hug the bottom of the screen. For this to work properly, you must use a `div` with a class of `wrapper`. See the [basic HTML page]({{relativePath}}/guides/quickstart/) for an example.

```

<footer class="footer leader-3">
  <div class="grid-container">
    <nav class="column-8">
      <h6 class="font-size-5"><strong>esri</strong></h6>
      <ul class="list-plain font-size--2">
        <li><strong>Talk With Us</strong></li>
        <li><a class="link-off-black" href="#">Contact Sales</a></li>
        <li><a class="link-off-black" href="#">Contact Support</a></li>
      </ul>
      <p class="leader-1 font-size--2"><strong>Follow Us</strong></span></p>
      <section class="footer-social-nav">
        <a class="icon-social-twitter" href="https://twitter.com/Esri/"></a>
        <a class="icon-social-facebook" href="https://www.facebook.com/esrigis/"></a>
        <a class="icon-social-youtube" href="https://www.youtube.com/esrigis/"></a>
        <a class="icon-social-github" href="http://esri.github.com/"></a>
        <a class="icon-social-linkedin" href="https://www.linkedin.com/company/5311"></a>
        <a class="icon-social-contact" href="http://www.esri.com/about-esri/contact/"></a>
      </section>
    </nav>

    <nav class="column-4 leader-1">
      <h6 class="font-size--2"><strong>Arc<span>GIS</span></strong></h6>
      <ul class="list-plain font-size--2">
        <li><a class="link-off-black" href="#">About ArcGIS</a></li>
        <li><a class="link-off-black" href="#">ArcGIS Desktop</a></li>
        <li><a class="link-off-black" href="#">ArcGIS Server</a></li>
        <li><a class="link-off-black" href="#">ArcGIS Online</a></li>
        <li><a class="link-off-black" href="#">Apps</a></li>
        <li><a class="link-off-black" href="#">How to Buy</a></li>
      </ul>
    </nav>
    <nav class="column-4 leader-1">
      <h6 class="font-size--2"><strong>Community</strong></h6>
      <ul class="list-plain font-size--2">
        <li><a class="link-off-black" href="#">Esri Community</a></li>
        <li><a class="link-off-black" href="#">Events</a></li>
        <li><a class="link-off-black" href="#">Education</a></li>
        <li><a class="link-off-black" href="#">Early Adopters</a></li>
        <li><a class="link-off-black" href="#">Developers</a></li>
      </ul>
    </nav>
    <nav class="column-4 leader-1">
      <h6 class="font-size--2"><strong>Understanding GIS</strong></h6>
      <ul class="list-plain font-size--2">
        <li><a class="link-off-black" href="#">What is GIS</a></li>
        <li><a class="link-off-black" href="#">Training</a></li>
        <li><a class="link-off-black" href="#">Events</a></li>
        <li><a class="link-off-black" href="#">Insights</a></li>
        <li><a class="link-off-black" href="#">Esri Press</a></li>
      </ul>
    </nav>
    <nav class="column-4 leader-1">
      <h6 class="font-size--2"><strong>Company</strong></h6>
      <ul class="list-plain font-size--2">
        <li><a class="link-off-black" href="#">About Esri</a></li>
        <li><a class="link-off-black" href="#">Contact Us</a></li>
        <li><a class="link-off-black" href="#">Careers</a></li>
        <li><a class="link-off-black" href="#">Worldwide Distributors</a></li>
        <li><a class="link-off-black" href="#">Partners</a></li>
        <li><a class="link-off-black" href="#">Disaster Response Program</a></li>
      </ul>
    </nav>

    <div class="column-24">
      <hr>
      <div class="column-8">
        <p>United States (English) <span class="icon-ui-globe"></span></p>
      </div>
      <div class="column-16 font-size--2">
        <a class="link-off-black margin-right-4" href="#">Privacy</a>
        <a class="link-off-black margin-right-4" href="#">Legal</a>
        <a class="link-off-black margin-right-4" href="#">Site Map</a>
        <a class="link-off-black margin-right-4" href="#">Terms and Conditions</a>
      </div>
    </div>
  </div>
</footer>
```
