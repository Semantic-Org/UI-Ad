### Version 1.9.3 - February 20, 2015

- **Tab** - Fixed bug when loading `remote` content with `tab` where current tab would not hide while another tab is loading
- **Tab** - Added new tab remote content example with stubbed AJAX using SinonJS

### Version 1.9.2 - February 19, 2015

Added new repositories for css and less only versions, can be installed with

### Version 1.9.1 - February 18, 2015

- Fixed issue directly importing `semantic.less` caused by variable scoping in `.loadOverrides()`.

##### NPM Install

- Added `npm` `post-install` scripts which automatically install or update semantic

##### Gulp Task Imports

- Semantic tasks are now each defined [in their own file](https://github.com/Semantic-Org/Semantic-UI/tree/master/tasks), and can be directly imported into external gulpfiles. Read more about [importing tasks here](https://github.com/Semantic-Org/Semantic-UI/blob/next/src/README.md)

### UI Changes

- **Icon** - Added Font Awesome 4.3 including many new icons
- **Segment** - Added plural variation `ui segments` that stack together in groups without using additional class names
- **Button** - Loading buttons no longer receive `pointer-events` in default theme. Added variable for `loading button` opacity.
- **Dropdown** - Added new dropdown setting, `forceSelection` which forces `search selection` to a selected value on blur. Defaults to `true`.
- **Headers** - Headers can now contain images alongside text, added examples to docs
- **Icon** - Added woff2 icon files for supported browsers (20% file-size decrease) **Thanks FontAwesome**
- **Breadcrumb** - Breadcrumb icon now has exact px value to alleviate vertical align issues
- **Modal** - Modal now swaps to `scrolling modal` when `close icon` no longer can be displayed, instead of modal `content`
- Fixed bug with chinese mirror modal appearing on every page load when selecting chinese language

### Version 1.8.1 - January 26, 2015

- **Input** - `ui labeled input` now uses  `flex` added example in ui docs with dropdown
- **Input** - Fix border radius on `ui action input` with button groups, aka `ui buttons`

### Version 1.8.0 - January 23, 2015

- **Form** - Form now has new methods `reset`, `clear`, `set value(s)`, and `read value(s)` for modifying and reading form data. Check docs for details on implementation. **Thanks @mktm**
- **Transition** - Added many new transitions, and new directions for existing transitions **Thanks @ph7vc**
- **Dropdown** - Dropdown now stores `placeholder text` (prompt text) as separate from `default text` (text set on page load). You can now reset placeholder conditions using `$('.ui.dropdown').dropdown('clear');``
- **API** - Added new behavior `$.api('abort')` which cancels current request
- **Header** - Content headers now inherit `@h1-h6` sizes from `site.variables`
- **Header** - Sub headers now adjust in size depending on header size, added new variables for subheader resizing
- **Search** - Greatly reduced search delay from `300ms` to `100ms`. Previous request will automatically abort `xhr` when new request made
- **Search** - Search `onSelect` and `onResultsAdd` can now cancel default actions by returning `false`.
- **Transition** - Transition will now prevent repeated animations when using an inferred direction i.e. animation without `in` or `out` specified. When `queue: true` only animations with explicit direction, e.g. `fade in`, will be ignored when called repeatedly.
- **Checkbox** - Checkbox now only modifies `input[type="radio"]` and `input[type="checkbox"]` ignoring any other inputs
- **List** - `relaxed list` and `very relaxed list` no longer add padding to child menu items

### Version 1.7.(1-2) - January 15, 2015

- **UI** - Fixes `progress`, `ad`, and `sidebar` not loading `.override` files correctly

### Version 1.7.0 - January 14, 2015

- **Project** - Right-to-left (RTL) support added. New gulp tasks for RTL file generation and install setting. Docs however do not yet support RTL.*Thanks @MohammadYounes for constant support with RTL!*.
- **Grid** - Added `equal width` variation using `flex-box`, `equal height` now also uses `flex-box` (this may have to be removed if causes unexpected browser issues)
- **Sidebar** - Having a sidebar visible on page load is now much simpler. You can include ``ui visible sidebar`` on page load to have a sidebar element appear on page load. To close call `$('.ui.sidebar').sidebar('hide')`
- **Sidebar** - Added documentation on using sidebar on a custom context. Sidebars using a custom context no longer add background colors like those initialized on `body`
- **Site** - Form input highlighting color added (helps differentiate form colors with autocompleted fields). Default text highlighting color moved from highlighter yellow to a mellow blue.
- **Dropdown** - Javascript Dropdown can now be disabled by adding ``disabled` class. No need to call `destroy`. **Thanks Psyton**
- **Build** - `Dist/` files now set file permissions in build. `644` by default. Can adjust in `semantic.json` or during gulp install. You will need to run `npm install` to add the new gulp-chmod dependency *Thanks @PeterDaveHello*
- **Video** - Video component now uses `//` instead of defaulting to `http`
- **Dropdown** - `restore defaults` will now set placeholder styling and remove active elemenet. Added example in docs.
- **Segment** - ``ui tabular menu`` now correctly aligns with attached segment when using fluid variation *Thanks @MohammadYounes*
- **Segment** - `basic segment` no longer removes padding on first and last elements

### Version 1.6.3 - January 12, 2015

- **Label** - Fix attached labels to have correct border radius inside of attached segments of all kinds

### Version 1.6.0 - January 05, 2015

- **Accordion** - Added ``animateChildren`` option to disable/enable opacity animation on child elements
- **Accordion** - Accordion now uses `easeOutQuint`` instead of ``easeInOutQuint`` to increase perceived responsiveness of drawers
- **Grid** - ``stackable grid`` now only adds horizontal padding when using ``stackable page grid``, otherwise content will take up full width of parent element
- **Popup** - Fix issue with ``ui popup` not appearing with ``ui flowing popup`` due to newly added ``min-width: max-content``

### Version 1.5.0 - December 30, 2014

- **Dropdown** - New setting ``allowCategorySelection`` lets menu items with sub menus be selected. Added example in docs.
- **Dropdown/Search** - Fixed issues with ``ui search`` and ``ui search dropdown`` using ``RegExp test`` which [advances pointer on match](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test) causing results to display incorrectly
- **Grid** - Fix display of equal height stackable grid. Add padding to divided stackable grid for dividers
- **List** - Fixed bug when using ``ui icon button`` or ``ui icon header`` causing element to receive icon formatting

### Version 1.4.1 - December 23, 2014

- **Dropdown** - ``<select>`` elements will now preserve original ``<option>`` order by default. Added ``sortSelect`` setting (disabled by default) to automatically sort ``<option>`` on initialization
- **Button** - Fixes issue with ``will-change`` property added to ``ui button`` causing layout z-indexing issues (dropdown button)

### Version 1.4.0 - December 22, 2014

- **Accordion** - Added inverted accordion variation
- **Menu** - Fix border radius of dropdown menu inside `ui vertical menu`

### Version 1.3.1 - December 17, 2014

- **Button** - Dist version of button accidentally included ``chubby`` theme instead of ``default`` theme

### Version 1.3.0 - December 17, 2014

- **Dropdown** - Search Dropdown is now much more responsive, js improvements and input throttling added.Throttling defaults to `50ms` and can be modified with settings ``delay.search``
- **Button** - Button "or" positioning variables have been adjusted to be automatically calculated without magic numbers
- **Dropdown** - Dropdown now always scrolls to active element on menu open, calculates position with new ``loading`` class
- **Segment** - Vertical segments now have padding on first/last element, fixing issues when using with grids
- **All UI** - Adds error message when triggering an invalid module behavior i.e. typos ``$('.dropdown').dropdown('hid');``
- **Button** - Add tabindex /keyboard nav documentation
- **Grid** - Add another grid example

### Version 1.2.0 - December 08, 2014

- **Fonts** - Add font subset variable for ``site.variables`` **Thanks gabormeszoly**
- **Modal** - Default modal shadow now more subtle
- **Progress** - Adds ``limitValues`` setting to adjust values outside of 0-100 automatically to within range, defaults to true
- **Item/Card** - Default link formatting inside element simplified to avoid adjusting other nested ``ui`` link styles
- Adds components to semantic.json.example

### Version 1.1.1 - December 03, 2014

- **Step** - Fixes step content appearing overlapped due to use of ``em`` instead of ``rem`` for line-height.

### Version 1.1.0 - December 02, 2014

- **Popup** - Popup now has a ``settings.prefer`` that defaults to ``adjacent``. This setting sets prefered next placement when a popup cannot fit on screen in the chosen placement. ``prefer`` can also be set to ``opposite`` to prefer the same position on the opposite side
- **All UI** - Many ``em`` measurements adjusted slightly to calculate out as exact pixel values (Fixes 1px rounding errors)
- **Build Tools** - NPM now correctly pins dependencies instead of using bleeding-edge versions which may break builds
- **Input** - ``ui action input`` can now accomodate ``ui button`` that adjust padding from default
- **Progress** - Added missing settings docs for progress module

### Version 1.0.1 - November 28, 2014

- **Site** - Add protocol variable for Google Font loader to avoid issues with ``//`` when loading locally causing freezing
- **Menu** - Removes missing image loader variable **Thanks ryan-mahoney**

### Version 1.0.0 - November 24, 2014

- **Word Order** - Many multi word variations now require proper word order, for example ``left aligned`` or ``right floated`` classnames must be adjacent. This is to prevent conflicts with other multiple word variations
- **Form** - Date field has been removed, use a ``ui icon input`` with a ``calendar icon`` instead
- **Item** - 0.x.x's UI card has been adjusted heavily. Vertically listed content should use ``ui item`` while floated grouped content should continue to use ``ui card``. Some 'card' view content has been slightly adjusted. Please refer to documentation
- **Header / Icon** - Inverted headers and icons no longer invert background colors, but instead use a lighter version of colors more legible on dark backgrounds. Inverted circular icons, still however invert the color of the circle.
- **Table** - Tables are no longer striped by default, instead you must specify the 'striped' variation
- **General** - Many modules now use DOM Mutations and event delegation to allow content adjustment after initialization
- **Accordion** - Accordion now includes all icons in an embedded font instead of requiring icons
- **Button** - Now has CSS loaders to allow loading state to maintain other styles
- **Checkbox** - Now correctly handles read-only and disabled, has read-only and disabled states
- **Checkbox** - All styles have been redone. Standard checkboxes are now based around PX and not EM making sure there are no unusual circles or rounding issues. Checkboxes also now use a custom font for glyphs instead of CSS tricks.
- **Checkbox** - Checkbox now have a ``fireOnInit`` setting for firing callbacks on page load
- **Dropdown** - New action combo will change text of adjacent button, select will select element but not change text
- **Dropdown** - Many new content types now work inside dropdowns, headers, dividers, images, inputs, labels and more
- **Form** - Inverted form now properly styles loader
- **Grid** - Fixed page grid allows for fixed pixel size containers used with a grid instead of percentage
- **Header** - Linked headers now receive link colors
- **Label** - Added tag label and empty circular label style
- **List** - List spacing defaults have been adjusted to be more consistent
- **Transition** - You can now specify the final displayType of a transitioning element in metadata or settings (not just automatically detected)
- **More [untracked changes](https://github.com/Semantic-Org/Semantic-UI/issues?q=is%3Aissue+label%3AEnhancement+is%3Aclosed) added as well**

### Version 0.19.0 - July 3, 2014

- **Transition** - Adds "fade in left/right" variations to match "fade up/down" **Thanks AdamMaras**
- **Menu** - Fixes ``ui inverted secondary pointing menu`` to have correct pointer color for all color variations **Thanks AdamMaras**

### Version 0.18.0 - June 6, 2014

- **RTL** - RTL now uses RTLCSS instead of CSSJanus **Thanks MohammadYounes**
- **Label** - Fixes border radius on bottom left label

### Version 0.15.3 - April 04, 2014

- **All UI** - Adds support for legacy FF vendor prefixes (FF > 12)
- Adds more examples for static checkbox/radio boxes with HTML only

### Version 0.15.2 - Mar 28, 2014

- **Step** - Fixes issue with border radius on vertical steps

### Version 0.15.0 - Mar 14, 2014

- **Form** - Forms, Dropdowns, and Inputs now have matching padding size, and use 1em font size to appear same size as surrounding text
- **Dropdown** - Default selection text was not appearing when a dropdown had a value that was ``false`` or ``0``
- **Input** - Fixes slight error in corner label rounding **Thanks MohammadYounes**

### Version 0.14.0 - Mar 03, 2014

- **Modal** - Modal now uses requestAnimationFrame instead of debounced callback
- **NPM** - Docpad is now moved to a dev dependency **Thanks kapouer**

### Version 0.13.1 - Feb 28, 2014

- **Modal** - Fixes modal positioning appearing slightly below center on second load

### Version 0.12.5 - Feb 04, 2014

- **Button** - Or buttons can now have text specified using ``<div class="or" data-text"text">`` with alternate text *Thanks MohammadYounes*
- **Popup** - Fixes issue where popups using ``title`` attribute to store data were losing title content instead of correctly restoring it

### Version 0.12.4 - Jan 29, 2014

- **Input** - Fixes ``ui buttons`` to work inside an ``ui action input`` **Thanks MohammadYounes **
- **RTL** - Adds RTL hinting for some files **Thanks MohammadYounes**
- **Specs** - Adds additional JSON spec files for future use with generators **Thanks brigand**

### Version 0.12.2 - Jan 21, 2014

- **Form Validation** - Adding custom validation is now simpler, uses syntax ``$('.form').form('add prompt', identifier, 'Error message');``

### Version 0.12.1 - Jan 15, 2014

- **Message** - Prevents close icon from being misformatted in icon message **thanks MohammadYounes**

### Version 0.12.0 - Jan 06, 2014

- **Modal** - New setting ``detachable`` allows you to specify whether modal DOM element can be moved (Thanks MohammadYounes)
- **Modal** - Buttons can now use both ``cancel/deny`` or ``ok/approve``, for approve/deny events to fire (Thanks MohammadYounes)
- **Menu** - Fixed menu now adds padding on the next element if it is a grid
- **Progress Bar** - Adds warning color
- **Dropdown** - Fixes touchmove event not clearing on touch devices causing unnecessary overhead

### Merry Christmas!

-**Transition**: Fixes typo in "horizontal flip out" causing opacity to be fading in

### Version 0.10.3 - Dec 22, 2013

- **Dropdown** - Fixes issue where dropdown animation does not occur sometimes (Thanks MohammadYounes)
- **Modal** - Fixes element detatching sometimes in case where it is already inside a dimmer

### Version 0.10.2 - Dec 13, 2013

- **Button** - Adds VK button

### Version 0.10.0 - Dec 05, 2013

- **Grid** - Adds ``doubling`` responsive variation which automatically formats content spacing based on device type
- **Form Validation** - Adds two new parameters, to allow for changing of revalidation and delay on input
- **Grid** - Row padding is now EM not % based, this might shift layouts slightly
- **Grid** - Grid columns not inside a row will automatically receive row padding now. This will allow for content to flow correctly when row count is unknown

### Version 0.9.6 - Dec 04, 2013

- **Rating** - Ratings now recieve class disabled when read only, instead of recieving ``active`` when rateable since active are much more common
- **Header, Grid, Segment** - Adds justified alignemnt

### Version 0.9.5 - Nov 25, 2013

- LESS files now include vendor prefixes by default instead of only including them in css releases

### Version 0.9.4 - Nov 24, 2013

- **Form** - Adds input type="url" to forms
- **Sidebar** - Typo in sidebar header (Thanks slobo)

### Version 0.9.1 - Nov 7, 2013

- **Popup** - Adds context option for popup (thanks jefmathiot)
- **Accordion** - Adds formatting for nested accordions

### Version 0.9.0 - Nov 5, 2013

- **List** - Adds animated list variation
- **Examples** - Adds new homepage example to release zip
- **Button** - UI buttons no longer have shadows, this helps match colored buttons in layouts
- **Header** - Fixes alignment of solo icons in headers

### Version 0.8.4 - Nov 1, 2013

- **Modules** - Adds CSS transition support detection to all modules using css transitions to allow for graceful degradation for IE8
- **Download** - Fixes issue where non minified source was being included with minified copy

### Version 0.8.3 - Oct 30, 2013

- **Modal** - Adds fixes for opening modals when other modals are opened, adds a few new API behaviors

### Version 0.8.1 - Oct 26, 2013

- **Button** - Fixes 1pixel jump on animated fade buttons

### Version 0.8.0 - Oct 25, 2013

- **Button** - Evenly divided buttons can use number classes instead of words ``class="2 buttons"``
- **Button** - New animated button styles, fade, horizontal, and vertical
- **Dropdown** - Fixes border radius on non-selection dropdowns from changing on activation
- Added more detailed contributing guide
- Added new examples to button and input

### Version 0.7.0 - Oct 22, 2013

- **Table** - Added aweosome new responsive style to ui tables
- **List** - Adds documentation for module format
- **List** - Adds onTabInit for local tabs on first load
- **Dimmer** - Adds more dimmer examples, fixes settings
- Adds sortable tables to docs
- **Shape** - Shape now works with no additional stylings
- **Dimmer** - Dimmer now obeys border radius of parent
- **List** - Celled tables now have celled table headers
- **Menu** - Fixes border radius on tabular menu, fixes one pixel jump on active state
- **Accordion** - Reduces vertical padding on basic accordion content
- **Header** - Block header now uses RGBA instead of solid color by default
- **Label** - Ribbon labels now have a shadow color
- **List** - Horizontal padding on icon list slightly increased, fixes to icon position
- **List** - Increased padding on attached labels
- **List** - Leading on bulleted and ordered list slightly increased
- **Popup** - Popup metadata attribute arrowOffset is now offset for simplicities sake
- **Table** - Table headers are now darker to increase contrast with rainbow striped rows
- **Sidebar** - Floating sidebar is slightly less heavily shadowed

### Version 0.6.1 - Oct 15, 2013

- Adds onApprove/onDeny callbacks to modal
- Adds small/large sizing of modal, reformats default modal size to be slightly inset from page grid
- Adds clockwise/counterclockwise rotated icon and default rotate
- Adds orange label/segment
- Adds automatic menu formatting for buttons inside menus
- Fixed shadow overlap on dropdown in menus

### Version 0.6.0 - Oct 14, 2013

- Adds travis CI support with preliminary test coverage for all javascript modules

### Version 0.5.0 - Oct 10, 2013

- Fixes in some UI modules, issue where settings being shared across elements initialized at the same time instead of each instance.
- Adds an example to popup where inline is set to false
- Added onCreate to popup module

### Version 0.3.6 - Oct 7, 2013

- Adds fluid variation to accordion
- Adds more html5 form support for forms (deneuxa)

### Version 0.3.5 - Oct 2, 2013

- Fixes radio checkboxes (again)
- Fixes header content display in icon headers

### Version 0.3.4 - Oct 2, 2013

- Centering of content in icon header

### Version 0.3.3 - Oct 2, 2013

- Fixes selector for checkbox to fix radio boxes Issue #154
- Headers and lists with icons now do not break with multiline content

### Version 0.3.2 - Oct 2, 2013

- Adds more sizes to ratings
- Adds attach events method to modal for attaching modal events to other elements
- Adds input focus/blur to modal, see Issue #124
- Adds new methods to rating: 'get rating', 'clear rating', 'disable', 'enable', adds new setting 'clearable'

### Version 0.2.2 - Sep 28, 2013

- Fixes invoke returning found function instead of results of found function in dropdown, modal

### Version 0.2.0 - Sep 28, 2013

- Adds responsive modal styling, modal always now sits with 5% gutters under page grid responsive styling
- Adds basic modal variation

### Version 0.1.0 - Sep 25, 2013

- Added new font icon set using Font Awesome port
- Adds dropdown icon sexiness to accordions, now with rotating pointing arrows
- Added old icon set as a separate basic icon set
- Added fluid input variation
- Adds relaxed grid variation with increased gutters
- Added relaxed and very relaxed list type with increased padding
- Padding on side of rating
- Adds horizontally padded, vertically padded menu item variations to allow menu items to remove padding
- Added fixes to tabular menu especially with attached content
- UI Loaders now positioned automatically in all circumstances, even with long text