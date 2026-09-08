---
title: "css-protips"
description: "Курируемый awesome-список: css-protips"
layout: awesome/single
awesome_repo: "https://github.com/AllThingsSmitty/css-protips"
awesome_readme: "README.md"
---

> Источник: [css-protips](https://github.com/AllThingsSmitty/css-protips) — синхронизируется из внешнего репозитория как sparse-субмодуль (только список).

<div align="center">
  <img src="./assets/img/bulb.svg" width="200" alt="light bulb icon">
</div>

# CSS Protips [![Awesome](https://awesome.re/badge-flat.svg)](https://awesome.re)

A collection of tips to help take your CSS skills pro.

> [!TIP]
> For other great lists check out [@sindresorhus](https://github.com/sindresorhus/)'s curated list of [awesome lists](https://github.com/sindresorhus/awesome/).

## Contents

- [Protips](#protips)
- [Support](#support)
- [Translations](#translations)
- [Contribution Guidelines](https://github.com/AllThingsSmitty/css-protips/blob/main/CONTRIBUTING.md)

## Protips

1. [Use a CSS Reset](#use-a-css-reset)
1. [Inherit `box-sizing`](#inherit-box-sizing)
1. [Use `unset` Instead of Resetting All Properties](#use-unset-instead-of-resetting-all-properties)
1. [Use `:not()` to Apply/Unapply Borders on Navigation](#use-not-to-applyunapply-borders-on-navigation)
1. [Check if Font Is Installed Locally](#check-if-font-is-installed-locally)
1. [Add `line-height` to `body`](#add-line-height-to-body)
1. [Set `:focus` for Form Elements](#set-focus-for-form-elements)
1. [Vertically-Center Anything](#vertically-center-anything)
1. [Use `aspect-ratio` Instead of Height/Width](#use-aspect-ratio-instead-of-heightwidth)
1. [Comma-Separated Lists](#comma-separated-lists)
1. [Select Items Using Negative `nth-child`](#select-items-using-negative-nth-child)
1. [Use SVG for Icons](#use-svg-for-icons)
1. [Use the "Lobotomized Owl" Selector](#use-the-lobotomized-owl-selector)
1. [Use `max-height` for Pure CSS Sliders](#use-max-height-for-pure-css-sliders)
1. [Equal-Width Table Cells](#equal-width-table-cells)
1. [Get Rid of Margin Hacks With Flexbox](#get-rid-of-margin-hacks-with-flexbox)
1. [Use Attribute Selectors with Empty Links](#use-attribute-selectors-with-empty-links)
1. [Control Specificity Better With `:is()`](#control-specificity-better-with-is)
1. [Style "Default" Links](#style-default-links)
1. [Intrinsic Ratio Boxes](#intrinsic-ratio-boxes)
1. [Style Broken Images](#style-broken-images)
1. [Use `rem` for Global Sizing; Use `em` for Local Sizing](#use-rem-for-global-sizing-use-em-for-local-sizing)
1. [Hide Autoplay Videos That Aren't Muted](#hide-autoplay-videos-that-arent-muted)
1. [Use `:root` for Flexible Type](#use-root-for-flexible-type)
1. [Set `font-size` on Form Elements for a Better Mobile Experience](#set-font-size-on-form-elements-for-a-better-mobile-experience)
1. [Use Pointer Events to Control Mouse Events](#use-pointer-events-to-control-mouse-events)
1. [Set `display: none` on Line Breaks Used as Spacing](#set-display-none-on-line-breaks-used-as-spacing)
1. [Use `:empty` to Hide Empty HTML Elements](#use-empty-to-hide-empty-html-elements)
1. [Use `margin-inline` instead of `margin`](#use-margin-inline-instead-of-margin)

### Use a CSS Reset

CSS resets help enforce style consistency across different browsers with a clean slate for styling elements. There are plenty of reset patterns to find, or you can use a more simplified reset approach:

```css
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
```

Now elements will be stripped of margins and padding, and `box-sizing` lets you manage layouts with the CSS box model.

#### [Demo](https://codepen.io/AllThingsSmitty/pen/kkrkLL)

> [!TIP]
> If you follow the [Inherit `box-sizing`](#inherit-box-sizing) tip below you might opt to not include the `box-sizing` property in your CSS reset.

<sup>[Back to top](#contents)</sup>

### Inherit `box-sizing`

Let `box-sizing` be inherited from `html`:

```css
html {
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: inherit;
}
```

This makes it easier to change `box-sizing` in plugins or other components that leverage other behavior.

#### [Demo](https://css-tricks.com/inheriting-box-sizing-probably-slightly-better-best-practice/)

<sup>[Back to top](#contents)</sup>

### Use `unset` Instead of Resetting All Properties

When resetting an element's properties, it's not necessary to reset each individual property:

```css
button {
  background: none;
  border: none;
  color: inherit;
  font: inherit;
  outline: none;
  padding: 0;
}
```

You can specify all of an element's properties using the `all` shorthand. Setting the value to `unset` changes an element's properties to their initial values:

```css
button {
  all: unset;
}
```

<sup>[Back to top](#contents)</sup>

### Use `:not()` to Apply/Unapply Borders on Navigation

Instead of putting on the border...

```css
/* add border */
.nav li {
  border-right: 1px solid #666;
}
```

...and then taking it off the last element...

```css
/* remove border */
.nav li:last-child {
  border-right: none;
}
```

...use the `:not()` pseudo-class to only apply to the elements you want:

```css
.nav li:not(:last-child) {
  border-right: 1px solid #666;
}
```

Here, the CSS selector is read as a human would describe it.

#### [Demo](https://codepen.io/AllThingsSmitty/pen/LkymvO)

<sup>[Back to top](#contents)</sup>

### Check if Font Is Installed Locally

You can check if a font is installed locally before fetching it remotely, which is a good performance tip, too.

```css
@font-face {
  font-family: "Dank Mono";
  src:
    /* Full name */ local("Dank Mono"), /* Postscript name */ local("Dank Mono"),
    /* Otherwise, download it! */ url("//...a.server/fonts/DankMono.woff");
}

code {
  font-family: "Dank Mono", system-ui-monospace;
}
```

H/T to Adam Argyle for sharing this protip and [demo](https://codepen.io/argyleink/pen/VwYJpgR).

<sup>[Back to top](#contents)</sup>

### Add `line-height` to `body`

You don't need to add `line-height` to each `<p>`, `<h*>`, _et al_. separately. Instead, add it to `body`:

```css
body {
  line-height: 1.5;
}
```

This way textual elements can inherit from `body` easily.

#### [Demo](https://codepen.io/AllThingsSmitty/pen/VjbdYd)

<sup>[Back to top](#contents)</sup>

### Set `:focus` for Form Elements

Sighted keyboard users rely on focus to determine where keyboard events go in the page. Make focus for form elements stand out and consistent than a browser's default implementation:

```css
a:focus,
button:focus,
input:focus,
select:focus,
textarea:focus {
  box-shadow: none;
  outline: #000 dotted 2px;
  outline-offset: 0.05em;
}
```

#### [Demo](https://codepen.io/AllThingsSmitty/pen/ePzoOP/)

<sup>[Back to top](#contents)</sup>

### Vertically-Center Anything

No, it's not black magic, you really can center elements vertically. You can do this with flexbox...

```css
html,
body {
  height: 100%;
}

body {
  align-items: center;
  display: flex;
  justify-content: center;
}
```

...and also with CSS Grid:

```css
body {
  display: grid;
  height: 100vh;
  place-items: center;
}
```

> [!TIP]
> Want to center something else? Vertically, horizontally...anything, anytime, anywhere? CSS-Tricks has [a nice write-up](https://css-tricks.com/centering-css-complete-guide/) on doing all of that.

#### [Demo](https://codepen.io/AllThingsSmitty/pen/GqmGqZ)

<sup>[Back to top](#contents)</sup>

### Use `aspect-ratio` Instead of Height/Width

The `aspect-ratio` property allows you to easily size elements and maintain consistent width-to-height ratio. This is incredibly useful in responsive web design to prevent layout shift. Use `object-fit` with it to prevent disrupting the layout if the height/width values of images changes.

```css
img {
  aspect-ratio: 16 / 9; /* width / height */
  object-fit: cover;
}
```

Learn more about the `aspect-ratio` property in this [web.dev post](https://web.dev/articles/aspect-ratio).

#### [Demo](https://codepen.io/AllThingsSmitty/pen/MWxwoNx/)

_…превью ограничено; полный список — в репозитории._</p>
