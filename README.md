# outer/edge SASS


[![Build Status](https://travis-ci.org/outeredge/sass.svg?branch=master)](https://travis-ci.org/outeredge/sass)

Uses [yarn](https://yarnpkg.com/en/) to manage dependencies and [gulp](https://gulpjs.com/) to build css

## Settings

To add specific colour palette for each site, create a `$siteColours` map (name: hex, name: hex) which will be automatically added to the base colours.

#### Devices
- `$devices`: (tablet: 541px, desktop: 1025px)

#### Grid
- `$grid-width`: 1280px
- `$grid-columns`: 12

#### Global
- `$global-line-height`: 100%
- `$body-background-colour`: map-get($colours, white)
- `$body-text-colour`: map-get($colours, darkgrey)
- `$body-font-size`: 12px
- `$body-font-family`: Arial, Helvetica, sans-serif

#### Class Names
- `$class-left`: left
- `$class-right`: right
- `$class-top`: top
- `$class-bottom`: bottom
- `$class-vertical`: vertical
- `$class-horizontal`: horizontal
- `$class-middle`: middle
- `$class-center`: center

#### Padding / Margin
- `$padding-class`: padding
- `$padding`: (tiny: 6px, small: 12px, default: 18px, large: 24px, none: 0)
- `$margin-class`: margin
- `$margin`: (tiny: 6px, small: 12px, default: 18px, large: 24px, none: 0)

#### Border
- `$border-class`: border
- `$border-width`: 1px
- `$border-style`: solid
- `$border-colour`: #cccccc
- `$border-radius-size`: 5px

#### Typography
- `$titles`: (h1: 40px, h2: 32px, h3: 24px, h4: 16px)
- `$weights`: (light: 300, not-bold: 500, bold: 700)

#### Forms
- `$button-background-colour`: $primary-colour
- `$button-text-colour`: map-get($colours, white)
- `$button-border`: 1px solid $primary-colour
- `$button-padding`: map-get($padding, small)
- `$button-background-colour-hover`: darken($button-background-colour, 10)
- `$button-text-colour-hover`: darken($button-text-colour, 10)
- `$button-border-hover`: 1px solid darken($primary-colour, 10)
- `$field-background-colour`: map-get($colours, whitesmoke)
- `$field-text-colour`: map-get($colours, darkgrey)
- `$field-border`: 1px solid map-get($colours, lightgrey)
- `$field-padding`: map-get($padding, tiny)
- `$field-width`: 100%
- `$label-display`: block

#### CSS 3
- `$transition-duration`: .5s

#### Colours
- `$white`: #ffffff
- `$black`: #000000
- `$red`: #990000
- `$green`: #009900
- `$blue`: #000099
- `$yellow`: #999900
- `$cyan`: #009999
- `$magenta`: #990099
- `$grey`: #666666
- `$darkgrey`: #333333
- `$lightgrey`: #999999
- `$whitegrey`: #eeeeee
- `$whitesmoke`: #f5f5f5
- `$primary-colour`: map-get($colours, darkgrey)


## Icons

Includes some basic icons in SVG format

- info.svg
- search.svg

