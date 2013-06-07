Gjesteboka Layout created with Jekyll + SCSS + Compass + Susy

Little guide how to use and improve:

CSS:

Anything will compile in one CSS file (global.css)

global.scss - global file where all other SCSS files are included
_global.base.scss - base styles like typo, input styles, links, forms
_global.layout.scss - base styles for layout (containers, grid, sections, etc.)
_global.styles.scss - main custom styles for blocks, widgets
_mixins.scss - all used mixins
_variables.scss - all variables used
_responsive.desktop.scss - media queries for desktop view (now it's empty and, unused, i think)
_responsive.tablet.landscape.scss - media queries for tablet in landscape mode
_responsive.tablet.portrait.scss - custom media queries for tablet (portrait mode)
_responsive.phone.landscape.scss - for phone (landscape)
_responsive.phone.portrait.scss - for phone (portrait)

Default layout is located here:
_layouts/default.html

Included HTMLS (_includes/):
header.html - header :)
footer.html - no comments
timeline.html - timeline (is used on homepage and on guestbook pages)