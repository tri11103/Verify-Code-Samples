Utility mixins are used to construct complicated behaviors for [components](../components) and [patterns](../patterns), provide baseline functionality for doc elements, and take care of browser prefixing.

Most utility mixins are borrowed from [Bourbon](http://bourbon.io/). If mixins share a name, then they share the same code base.

Use the utility mixins inside the selector you wish to apply the styles to, passing the arguments in if required. For example, to apply a clearfix to an element with the class `.my-div`, the use the following Sass:

```scss
.my-div {
  @include clearfix();
}
```

If the mixin accepts arguments, pass them into the parenthesis:

```scss
.my-div {
  @include box-sizing(border-box);
}
```

#### Quick Reference

| Mixin                                         | Arguments                      |
| --------------------------------------------- | ------------------------------ |
| [`appearance`](#appearance)                   | `$value`                       |
| [`animation`](#animation)                     | `$animations...`               |
| [`border-*`](#border)                         | `$style`                       |
| [`box-sizing`](#box-sizing)                   | `$box`                         |
| [`box-shadow`](#box-shadow)                   | `$shadow`                      |
| [`calc`](#calc)                               | `$property, $value`            |
| [`clearfix`](#clearfix)                       | none                           |
| [`keyframes`](#keyframes)                     | `$name`                        |
| [`placeholder`](#placeholder)                 | `$property`,  `$attr`          |
| [`position-*`](#position)                     | `$value`                       |
| [`prefixer`](#prefixer)                       | `$property, $value, $prefixes` |
| [`respond-to`](#respond-to)                   | `$max, $mi, $type`             |
| [`transform`](#transform)                     | `$property`                    |
| [`transform-origin`](#transform)              | `$axes`                        |
| [`transform-style`](#transform)               | `$style`                       |
| [`transition`](#transition)                   | `$value`                       |
| [`transition-prefixed`](#transition-prefixed) | `$value`                       |
| [`transition-property`](#transition)          | `$value`                       |
| [`transition-duration`](#transition)          | `$value`                       |
| [`transition-timing-function`](#transition)   | `$value`                       |
| [`transition-delay`](#transition)             | `$value`                       |
| [`visible`](#visibility)                      | none                           |
| [`invisible`](#visibility)                    | none                           |
| [`hide`](#visibility)                         | none                           |

<h4 id="animation">Animation</h4>

The animation mixin allows you to declare cross-browser animations. The mixin accepts

```scss
box:hover {
  @include animation(scale 1.0s ease-in, slide 2.0s ease);
}
```

Or, use individual animation mixins:

```scss
box:hover {
  @include animation-name(scale, slide);
  @include animation-duration(2s);
  @include animation-timing-function(ease);
  @include animation-iteration-count(infinite);
}
```

<h4 id="appearance">Appearance</h4>

The `appearance` CSS property is used to display an element using a platform-native styling based on the operating system's theme. For example, to remove browser specific styling for a ui element, use:

```scss
@include appearance(none);
```

<h4 id="border">Border</h4>

For adding borders that flip in right to left languages, use the `border-` mixins:

```scss
// set all in one argument
@include border-right(1px solid $blue);
@include border-left(none);

// set just the color
@include border-color-right($blue);
@include border-color-left($off-white);
```

<h4 id="box-sizing">Box-Sizing</h4>

Set the `box-sizing` property for all browsers (with browser prefixes):

```scss
@include box-sizing(border-box);
```

Valid values are `content-box`, `border-box`, and `inherit`.

<h4 id="box-shadow">Box-Shadow</h4>

Set the `box-shadow` property for all browsers (with browser prefixes):

```scss
@include box-shadow(border-box);
```

<h4 id="calc">Calc</h4>

Shorthand for setting a property to use a `calc` value. Pass the property you'd like to set, then the value you'd like to use:

```scss
@include calc(width, '100px - 10%');
```

<h4 id="clearfix">Clearfix</h4>

Applies the framework-standard clear for floated elements:

```scss
@include clearfix();
```

<h4 id="keyframes">Keyframes</h4>

For creating animations, you can use the `keyframes` mixin. This mixin accepts an animation name. Then inside the mixin, write your animation as a content block:

```scss
@include keyframes(ANIMATION_NAME){
  0%   { background-color: #ffccf2; }
  100% { background-color: #ccffff; }
};
```

Now you can use the [animation mixin](#animation) as a named animation like this:

```
.animation-class {
  @include animation( @include animation(ANIMATION_NAME 200ms ease-in);)
}
```


<h4 id="placeholder">Placeholder</h4>

Wraps the wide array of input placeholder selectors across browsers.

```scss
@include placeholder('color', $dark-blue);
```

<h4 id="position">Position</h4>

Set `right` and `left` properties (automatically flips in right-to-left languages).

```scss
@include position-right(4px);
@include position-left(0);
```

<h4 id="prefixer">Prefixer</h4>

This is one of the most flexible mixins in the library. Use it to add browser prefixes to a property:

```scss
@include prefixer(margin-end, 5%, webkit moz spec);
```

In this way you can prefix any property. Adding the `spec` as the last argument will also output the property *without* a prefix.

<h4 id="respond-to">Respond To</h4>

The `respond-to` mixin adds media queries for use in responsive design. The mixin accepts three arguments: maximum size, minimum size, and type (screen, print, etc). You can pass just the first out of convenience. This mixin works well with the [breakpoint variables](../sass#breakpoints):

```scss
.my-div {
  @include respond-to($small){
    padding: 1rem;
  }
}
```

This will compile to the following css:

```css
@media screen and (max-width: 480px) {
  .my-div {
    padding: 1rem;
  }
}
```

You can assemble more complicated media queries by using both min and max:

```
@include respond-to($large, $medium) { ... }
```

This will add styles that only appear *between* the `$medium` and `$large` screen sizes.

<h4 id="transform">Transform</h4>

The CSS transform property lets you modify the coordinate space of the CSS visual formatting model. Using it, elements can be translated, rotated, scaled, and skewed according to the values set. `transform`, `transform-origin`, and `transform-style` all add the necessary browser prefixes for interacting with their respective transform properties.

```scss
@include transform(translateY(50px));
@include transform(scale(0.9) rotate(-3deg));
@include transform-origin(center top);
@include transform-style(preserve-3d);
```

<h4 id="transition">Transition</h4>

This mixin provides a shorthand syntax and supports multiple transitions.

```scss
@include transition(all 2.0s ease-in-out);
@include transition(opacity 1.0s ease-in 0s, width 2.0s ease-in 2s);
```

Or you can use the individual transition properties:

```
@include transition-property(transform);
@include transition-duration(1.0s);
@include transition-timing-function(ease-in);
@include transition-delay(0.5s);
```

<h4 id="transition-prefixed">Transition Prefixed</h4>

To transition vendor-prefixed properties, e.g. `-webkit-transform` and `-moz-transform`, there is an additional convinience `transition-prefixed()` mixin:

```
@include transition-prefixed(transform3d(0,0,0) 200ms linear);
```

This will generate vendor prefixed properties *and* values.

<h4 id="visibility">Visibility</h4>

The visibility mixins change the `visibility` property. This is useful for removing and adding elements at certain breakpoints or with certain class names. No arguments are passed. Invisible sets `visibility: hidden` on the object, leaving in the in document flow, but removing it from view. `hide()` will completely remove the item with `display:none`.

```scss
@include hide();
@include invisible();
@include visible();
```
