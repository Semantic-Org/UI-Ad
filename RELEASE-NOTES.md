### Version 2.1.5 - Nov 1, 2015

- **Form** - Adds `equal width form` and `equal width fields` for simpler grouped fields
- **Dropdown** - Added `onLabelRemove` callback that allows value removal to be cancelled by callback **Thanks @goloveychuk**
- **Table** - Added `selectable` on table cell, allowing for full table-cell links
- **Popup** Added three new variables for `arrow` background color based on position, top, center or bottom. This makes it easier to use gradient backgrounds with popups and still match arrow colors.
- **Popup** - Added behaviors `get popup` and `change content` to more easily determine popup from activating element and change text
- **Sticky** - Fixes bug where sticky would stick at incorrect times when using a different scroll container than `body` and scrollTop is not 0 on page load.
- **Divider/Step/Modal/AD** - Fixes 1px jump at `@mobileBreakpoint` caused by incorrect edge conditions in media query #3180 **THanks @mdehoog**
- **Dropdown** - Added `remoteValues` as a possible `field` setting. Allowing users to return API results using arbitrary JSON object groupings. #3080
- **Dropdown** - Added ability to pass in `keys` as a setting, to avoid issues with languages where comma delimiter may be a different keycode #3016
- **Header** - Sub headers now force `display: block` #3020

### Version 2.1.4 - Sep 13, 2015

- **Form Validation** - `identifier` and `prompt` are now optional for all form validation rules. Default prompt values have been added for all rule types, and identifier will now automatically match on the named value for rule if no ID is specified. [#3001](https://github.com/Semantic-Org/Semantic-UI/issues/3001) [#2579](https://github.com/Semantic-Org/Semantic-UI/issues/2579)

### Version 2.1.3 - Sep 03, 2015

- **Embed** - Fixes issue with `?=` appearing before parameters instead of `?` [#2956](https://github.com/Semantic-Org/Semantic-UI/issues/2956) **Thanks @AgentShark**

#### Features

- **API** - Added `encodeParameters` option to enable/disable parameters being encoded with `encodeURIComponent` [#2752](https://github.com/Semantic-Org/Semantic-UI/issues/2752)
- **API** Added new setting `hideError`, defaults to `auto` (will automatically hide error for elements that are not forms). [#2586](https://github.com/Semantic-Org/Semantic-UI/issues/2586)
- **Button** - Added `labeled button` variation for display a count next to a button.
- **Cards** - Added documentation for `stackable` cards which was available but undocumented in previous versions.
- **Checkbox** - Added 4 new callbacks `beforeChecked`, `beforeUnchecked`, `beforeDeterminate`, `beforeIndeterminate`. You can now cancel a state change by returning false from these callbacks.
- **Dropdown** - Dropdown with user additions now will use custom templated messages to distinguish added choice from preselected choice [#2923](https://github.com/Semantic-Org/Semantic-UI/issues/2923)
- **Form Validation** - Added credit card validation, supports array of card types, and international cards including non luhn cards like China UnionPay [#2729](https://github.com/Semantic-Org/Semantic-UI/issues/2729)
- **Form Validation** - Updated appearance of form validation prompts to use a more lightweight style. Added variables for controlling error validation prompt styles in `form.variables`
- **Grid** - Added new responsive [`reversed`](http://www.semantic-ui.com/collections/grid.html#responsive-order) variations for reversing column order, these are also compatible with other grid types like `divided` and `celled` by device [#2685](https://github.com/Semantic-Org/Semantic-UI/issues/2685)
- **Icon** - Added `fitted` icon variation, and new small sizes `tiny` and `mini`
- **Input** - Added `disabled` state for inputs [#2694](https://github.com/Semantic-Org/Semantic-UI/issues/2694)
- **Input** - Added ability for labeled input to be attached to both sides [#2922 **Thanks @maturano**](https://github.com/Semantic-Org/Semantic-UI/issues/no**)
- **Label** - Added a new  `basic label` style, works symbiotically with other label types to provide a more lightweight style label
- **Menu** - Added new `tabular` menu types, `right tabular`, `bottom tabular`, added many new `tabular` menu variables for customizing
- **Site** - Added global variable `@focusedFormBorderColor` for controlling form focus border color
- **Table** - New `fixed` table variation added for use with `table-layout: fixed;`. This also supports "..." ellipsis when used with `single line` content

**[Additional Features](https://github.com/Semantic-Org/Semantic-UI/issues?q=is%3Aissue+milestone%3A2.1.0+is%3Aclosed)**
- **Breadcrumb** - Breadcrumb no longer receives vertical spacing by default. This may often cause vertical alignment issues when displayed next to other `inline-block` content.
- **Dropdown** - Added `get default text` and `get placeholder text` behaviors for returning text values.
- **Form** - `inverted form` now remove input border, added new variables for controlling inverted form input styles
- **GitHub Theme** - Added github icon theme with port of Octicons.
- **Label** - Added `basic` label variation, useful for item counts
- **Menu** - `text menu` now uses padding for hitboxes to make target area for links larger

**[Community Added Features](https://github.com/Semantic-Org/Semantic-UI/issues?q=is%3Aissue+milestone%3A2.1.0+is%3Aclosed)**

- **Form Validation** - Added `number` and `decimal` validations to form **Thanks @TonnyORG** [#2537](https://github.com/Semantic-Org/Semantic-UI/issues/2537)
- **Popup** - Popup will now look for inline popup as any next adjacent sibling [#2772 **Thanks @malacalypse**](https://github.com/Semantic-Org/Semantic-UI/issues/se**)

#### Bugs

- **Accordion** - Added missing notation for accordion docs [#2812](https://github.com/Semantic-Org/Semantic-UI/issues/2812)
- **Dropdown** - Fixed error where menu would disappear when entering spaced words using `allowAdditions: true` caused by value matching its own whitespace-trimed value [#2853](https://github.com/Semantic-Org/Semantic-UI/issues/2853)
- **Form** - Date input and other special input in chrome now are the same height as normal input (adds custom vendor shadow dom styling) [#2704](https://github.com/Semantic-Org/Semantic-UI/issues/2704)
- **Header** - Fixed `attached header` to have the correct bottom border on `top attached` and `attached` variations. [#2798](https://github.com/Semantic-Org/Semantic-UI/issues/2798)
- **Icon** - Fixed typo in cube icon alias caused by bad grep [#2765](https://github.com/Semantic-Org/Semantic-UI/issues/2765)
- **Popup** - Fixes issue where variation would not be added to a pre-existing popup even if specified in javascript [#26011](https://github.com/Semantic-Org/Semantic-UI/issues/6011)
- **Step** - Fixed issue with display of step groups with only one step having incorrect border radius **Thanks @elliotisonfire** [#2869](https://github.com/Semantic-Org/Semantic-UI/issues/2869)

**Additional Bugs**

- **Dropdown** - Dropdown will no longer fire native `onchange` event on hidden input when setting value during initial load (unless `fireOnInit: true`) #2795 **Thanks @lauri-elevant**
- **Dropdown** - When `useLabels: false` placeholder text will now show up when 0 items selected, instead of the text "0 items selected"
- **Dropdown/Tab** - Fixed an instance where `metadata` was not referencing settings metadata value
- **Form** - Dropdown in `inline field` now use auto width instead of 100%
- **Header** - Fixed issue with em sizing of `chubby` and `bookish` header themes appearing too large
- **Icons** - Fixed issue where `active icon` or `emphasized icon` would not adjust opacity inside menus
- **Menu** - Added `flex: 0 0 auto` to menu item to make sure menu do not collapse text content to reduce space
- **Reveal** - Reveal now uses `display: inherit` instead of forcing `inline-block`

### Version 2.0.7 - July 23, 2015

This release should fix bugs some may have encountered with `npm install semantic-ui` hanging after set-up. See [this thread](https://github.com/Semantic-Org/Semantic-UI/issues/1816) for more details.

- **Dropdown** - Fixed border radius on `circular labeled icon button`  [#2700](https://github.com/Semantic-Org/Semantic-UI/issues/2700)
- **Recipes** - Add links to Sketch files for SUI. Add example repo on how to import gulp tasks.

**Additional Fixes**

- **Popup** - Fixed terribly typo where popup `onShow` was mistakenly being called instead of `onHide` when hiding popup

### Version 2.0.6 - July 22, 2015

- **Form Validation** - In `2.0.4` `length` rules were corrected to match "exact length" and not "minimum length". This may have caused issues for those who were using this rule as min length previously. We've remedied any breaking changes introduced by by returning `length` to functioning as "minimum length" and added a new rule `exactLenght` for matching exact length. #2681
- **Dropdown** - Added `set exactly` to remedy confusion of `set selected` not removing current selections with multiple [#2689](https://github.com/Semantic-Org/Semantic-UI/issues/2689)
- **List**- Fixed issue where using an image variation like `ui image label` as a direct child of an `item` would remove right padding [#2691](https://github.com/Semantic-Org/Semantic-UI/issues/2691)

**Additional Fixes**

### Version 2.0.5 - July 20, 2015

- **API** - Data replaced in urls, `urlData`, will now be url encoded by default. Additionally checks were added to avoid double encoding already encoded values. [#2394](https://github.com/Semantic-Org/Semantic-UI/issues/2394)
- **Radio Checkbox** - Fixed regression causing radio checkboxes to all appear selected in chrome due to `:indeterminate` selector [#2505](https://github.com/Semantic-Org/Semantic-UI/issues/2505)

**Additional Fixes**

- **Dropdown** - Dropdown `<option>` added with `userAddition` now recieve class name `addition` to distinguish from original `<select>` options. [#2573](https://github.com/Semantic-Org/Semantic-UI/issues/2573)
- **Dropdown** - User additions now have their `<option>` removed if a user deselects an addition. [#2573](https://github.com/Semantic-Org/Semantic-UI/issues/2573)

### Version 2.0.4 - July 17, 2015

- **Form** - Added `doesntContain` and `doesntContainExactly` [#2638](https://github.com/Semantic-Org/Semantic-UI/issues/2638)
- **Formatting** - Fixed several source files that had `CR LF` (Windows) line endings [#2649](https://github.com/Semantic-Org/Semantic-UI/issues/2649)
- **Input** - Fixed `left action input` displaying with incorrect `input` border radius inside `ui form` [#2638](https://github.com/Semantic-Org/Semantic-UI/issues/2638)
- **Popup** - Fixed issues where rounding could cause elements that are against edge of page from not appearing. Add new `jitter` setting for allowing popups to escape page boundaries by a small margin [#2526](https://github.com/Semantic-Org/Semantic-UI/issues/2526)
- **Segment** - Added additional variables for `inverted` segment.
- **Transition** - Fixed issue where animating same element in its own `onComplete` would fail because animation had not yet called `force visible/hidden` [#2583](https://github.com/Semantic-Org/Semantic-UI/issues/2583)

**Additional Bugs**

- **Checkbox** - Updated `colored` theme to add new focus color variables.
- **Sticky** - Sticky no longer uses `bottomPadding` to determine bottom edge of container.
- Added individual examples of all form validation rules

### Version 2.0.3 - July 8, 2015

- **Dropdown** - Dropdown using `<select>` and `apiSettings` will now correctly add new `<option>` value when selections are made [#2573](https://github.com/Semantic-Org/Semantic-UI/issues/2573)
- **Icon** - `black icon` have been added back as a color option [#2556](https://github.com/Semantic-Org/Semantic-UI/issues/2556)
- **Icon** - Adds missing `square` and `square outline` icon [#2532](https://github.com/Semantic-Org/Semantic-UI/issues/2532)
- **Input** - Fixed errored input field having incorrect border radius with `labeled input`

**Additional Bugs**

### Version 2.0.2 - July 7, 2015

- **Site** - Sizing variables now are relative to `@emSize` adjusting all sizing variationss proportionately as `@emSize` changes [#2538](https://github.com/Semantic-Org/Semantic-UI/issues/2538)
- **Dropdown** -  Pressing same key on dropdown with multiple choices with same first letter will now cycle selections. For example "California" then "Colorado" when pressing C [#2516](https://github.com/Semantic-Org/Semantic-UI/issues/2516)

**Additional Bugs**

### Version 2.0.1 - July 6, 2015

- **Label** - Attached labels now use a border-radius for corner-edges that matches more closely [#2500](https://github.com/Semantic-Org/Semantic-UI/issues/2500)
- **Checkbox** - Fixed issue in chrome where radio checkbox would appear incorrectly when no default value was selected [#2505](https://github.com/Semantic-Org/Semantic-UI/issues/2505)
- **Checkbox** - Fixed issue where radio checkbox were not properly receiving `checked` class [#2506](https://github.com/Semantic-Org/Semantic-UI/issues/2506)

**Additional Bugs**

- **Dropdown** - `restore defaults` in dropdown when used with multiple will now correctly clear other values selected that were not there on page load.
- **Tab** - Fixed bug where remote loaded tab content would not show `loading tab` on first load.
- **Image** - Added docs for missing `fluid image` variation
- **Tab** - Added new examples for `evaluateScripts` and HTML5 state tabs

### Version 2.0.0 - June 30, 2015

- **Grid** - `page grid` has been deprecated.  `page grids` used percentage gutters which made it unnecessarily difficult to style responsive page content. Moving forward we recommend using `ui container` a fixed width responsive container for holding page contents.
- **Form** - `grouped inline field` no longer display horizontally. Use `inline field` instead for horizontal inline field groups.
- **Popup** - Popups are no longer exclusive by default. Opening a popup will not necessarily close other visible popups. You can change this behavior by using the setting `exclusive: true`. Additionally the default theme now uses `1rem` size for standard popups.
- **Colors** - Default colors have been adjusted, which may cause slight changes in your design. New colors have also been added to fill in missing gaps in [color naming](http://en.wikipedia.org/wiki/Linguistic_relativity_and_the_color_naming_debate#Berlin_and_Kay).
- **Rail** - Rail now uses `border-box` instead of `content-box`. This means manually specified rail widths will now need to account for padding. This was added to fix issues where rail `height: 100%` would incorrectly match content when a rail had padding.
- **Tab** - `onTabInit` and `onTabLoad` have been renamed to `onFirstLoad` and `onLoad` respectively. This is to conform to the naming conventions of other modules (no self reference). Previous callbacks will continue to work but will produce deprecation notices in console. Two new callbacks `onVisible` and `onRequest` have been added as well.
- **Button** - `wide` variations using numbers `2 wide`, `3 wide` have been removed due to incompatibilities with some build tools. Please use `two wide`, or `three wide` instead.
- **Video** - The undocumented `video` module has been renamed to `embed`. Behaviors remain the same, but users need to adjust their javascript init to `$('.ui.embed').embed();`
- **Multiselect** - New `multiple` dropdown types have been added. Many new dropdown improvements have been added including tagging/tokenizing features and loading data through API requests.
- **Embed** - New embed component allows for responsive iframe embeds that maintain their aspect ratio. Embed can be used with YouTube or Vimeo videos, along with placeholder content to avoid loading third party libraries until a user chooses to interact with the video.

**Major Enhancements (Please Read)**
- **Site** - Added new colors `olive`, `violet`, `brown` and `grey`. These are available in all elements with color variations.  **Thanks @lemartialou**
- **API** - API can now be used with mocked responses, and custom AJAX requests. `mockResponse` has been added to resolve request with a prespecified JSON object, or a synchronous function callback.
- **API** `mockResponseAsync` has been added for custom asynchronous requests. This allows you to specify a custom async callback to resolve an API request, helping with integration with libraries like Ember or Angular that may wrap AJAX requests.
- **API** - API callbacks now have an `onResponse` callback that can adjust a servers response before it is parsed by other callbacks for success or failure conditions. **Thanks @mnquintana**
- **Checkbox** - Added support for `indeterminate` checkboxes, along with new stylings.
- **Dropdown** - Added remote API integration with dropdown, to allow `search selection` to query against a remote dataset.
- **Dropdown** - Dropdowns now automatically observe changes in `menu` and will update selector cache with new additions
- **Dropdowns** - Added ability to add custom choices to all search selection dropdowns (multi/single) using `allowAdditions: true` setting. Search now displays error messages on no results in all cases.
- **Dropdown** - Keyboard shortcuts have been added for selecting dropdown choices, for example "N" will scroll to "New York" in a state selection list, similar to native `<select>` behavior.
- **Dropdown** - Added new dropdown variation `scrolling dropdown` and `scrolling menu`, this can be used to include a scrollable section inside a dropdown menu.
- **Grid** - Grids now use `flexbox`, columns are now all equal height by default. New flexbox alignment types like `stretch` have been added for easier vertical alignment.
- **Modal** - Added new settings `blurring` and `inverted` which automatically set a modal's dimmer to either inverted or blurring.
- **Menu** - Menu now uses flexbox. This allows menu items to match each others heights regardless of each items content size. `right menu` content should now follow other menu content instead of preceding it (no longer uses float).
- **Menu** - `vertical tabular menu`, a vertical tab menu, has been added
- **Shapes** - Shapes now correctly adjusts for margin on `sides`
- **Visibility** - Using `.visibility({ type: 'fixed'})` will now automatically add a placeholder element which will swap places with an element when it is attached to the viewport. This should make fixed content drastically simpler.
- **Visibility** - Added two new visibility callbacks `onOnScreen` and `onOffScreen`, which occur, most obviously when an element first appears in or out of a browser's viewport.
- **Site** - Added many new site variables, including the ability to control input size across all UI `inputPadding`, along with more border colors, accents, and colors.
- **Accordion** - adds `onOpening` and `onClosing` callback (before animation) to go with `onOpen`, `onClose` (after animation) **Thanks @cluppric**
- **Accordion** - Added `on` setting for specifying accordion trigger event.
- **Build Tools** - Adjusting `site.variables` will now rebuild all UI, instead of just `site.less`
- **Button** - Added `:focus` styles for all button types, all button examples in docs now are keyboard focusable using either `<button>` or `tabindex` where appropriate.
- **Checkbox** - Checkbox will now gracefully correct behaviors invoked on the child input element instead of the `ui checkbox`.
- **Divider** - `vertical divider` inside `ui grid` now accounts for column padding
- **Dropdown** - Added `showOnFocus` option that lets you specify whether dropdown menu should show on focus
- **Dropdown** - Added `disabled item` state, disabled items will automatically be skipped with keyboard selection
- **Form** - Added a host of new styles for form fields autocompleted by your browser, including autocompleted error, and focus states
- **Form** - Added placeholder color rules for IE, `ms-input-placeholder`
- **Form** - Adds form `success` state
- **Form Validation** - Added `is valid` behavior, returns `true/false` if form is valid
- **Form Validation** - Added `different[field]` rule which requires a field to be different than another field
- **Grid** - Added `large screen only` and `widescreen only` responsive variations for grid.
- **Grid** - `celled` and `internally celled` grid now use flexbox instead of `display: table;`
- **Headers** - Added new header type `sub header`, useful for displaying small headers alongside text content. See examples [in the header docs](http://www.semantic-ui.com/elements/header.html#sub-headers)
- **Image** - Images now include a `spaced` variation for adding whitespace around images when used inline with text.
- **Input** - Added placeholder color rules for IE, `ms-input-placeholder`
- **Menu** - Add examples/documentation for `fixed menu`
- **Menu** - Added `stackable` menu variation for simple responsive menus
- **Menu** - Added many new variables to menu
- **Menu** - Menus items are now slightly more padded
- **Menu** - The hover/active state of `dropdown item` have been adjusted to match `item`. Dropdown styles can be themed specifically inside `menu`.
- **Modal** - Modal now uses an adjusted `scale in` transition in the default theme, that should be more subtle and work better with long modal content.
- **Modal** - Modal `onApprove` and `onDeny` now receive the activating element as the first parameter. Added documentation about using `return false` to avoid hiding element on click.
- **Popup** - Added more size variations for popup `mini`, `tiny`
- **Reveal** - Added new `active` state that allows you to show `reveal` programatically
- **Segment** - Added `padded` and `very padded` segment variations
- **Search** - Search will now automatically add class `category` when using `type: category`.
- **Segment** - Added `clearing` segment for cases that need a [clearfix](http://learnlayout.com/clearfix.html).
- **Sidebar** - Improved animation performance through performance debugging. Sidebar now caches, width, height, rtl direction on load.
- **Site** - Added in `pageOverflowX` variable, default theme hides horizontal scrollbars on `body`
- **Site** - Added default `focus` colors for all color variations
- **Site** - All floating/raised variations now inherit from a global `@floatedShadow` making theming easier
- **Statistic** - Added new evenly divided group variation, for example `three statistics` shows 3 per row
- **Steps** - Added `attached` steps, which can now be attached to other UI like `segment`
- **Tabs** - Added new callbacks `onTabVisible` and `onRequest`
- **Tabs** - Added `parseScripts` option, defaults to `once` parsing inline scripts only first load
- **Table** - Adds `selectable table` variation, which shows hover effect on row when hovering
- **Table** - Added `vertical alignment` variations to `ui table`
- **Table** - Added `single line` table variation which prevents text from wrapping
- **Transition** - Adjusting `style` or `class` during a transition, will no longer reset the change after transition completes.
- **Visibility/Sticky** - Visibility and sticky now refresh automatically after page content loading to deal with changes in position from images loading
- **Visibility** - Visibility `image` will now wait to lazy load images that are *above* the current screen position, not just below.
- **All Modules** - Performance logging now delays 500ms instead of 100ms for console logging to ensure all logs are captured in one group
- **API** - API longer uses `readyState = 0` as sole check for request abort, this may accidentally trigger with `JSONP` or `CORS` requests.
- **API** - Fixed `loadingDuration` not correctly delaying requests when invoking with  `.api('query')`
- **Button** - Fixed `attached buttons` 1px offset when attached to segment and menu (border vs box shadow border)
- **Divider** - Fixed slight offset in `vertical divider` when it automatically adjusts to `horizontal divider` inside a `stackable grid`
- **Dropdown** - Fixes issue with headers disappearing inside of `ui dropdown` when nested in `ui menu`
- **Dropdown** - Fixed dropdown `metadata` attribute caching causing issues with React integration
- **Dropdown** - Fixed border radius on `sub menu` when aligned `left`
- **Image** - `rounded image` and `circular image` now apply border radius to all child elements, fixing dimmers, and other content rounding
- **Input** - Fixed improper left padding on `transparent left icon input` **Thanks @zxfwinder**
- **Input** - Fixed right padding on `labeled input` that were not `corner labeled`
- **Label** - Labels inside `header` now vertical align better by accounting for line height offset
- **List** - Added many new variables for link stylings inside list, added separate variables and defaults for child-list spacing
- **Loader** - Fix position of `inline centered loader` to be centered correctly
- **Message** - Close icon position adjusted to align with headers
- **Menu** - Menu now has a `min-height` that matches standard item padding
- **Modal** - `scrollable modal` now correctly adds padding below modal
- **Popup** - Popup now correctly adjusts if `data` attributes change
- **Popup** - Added `addTouchEvents` to specify whether touch events should be added to trigger popup on mobile
- **Rating** - Rating now correctly adjusts if `data` attributes change
- **Search** - Search will no longer incorrectly produce an error when API settings are passed through metadata
- **Search** - Fix `loading search` with an `icon button` causing double loaders.
- **Search** - `searchFields` setting now correctly replaces default fields instead of adding the user fields to defaults
- **Steps** - Fixes bug where `ordered steps` had smaller numbers in `IE10`
- **Sticky** - Fix issues when `pushing: true` with sticky content having incorrect bottom spacing, when container has bottom padding
- **Table** - `very basic table` now works together with `padded table`
- **Button** - Button focus color now uses hoverColor background instead of blue box shadow
- **Breadcrumb** - Fixed breadcrumb `em` rounding, adjusted distance in default theme
- **Card** - Card styles have been adjusted, `link card` now raise to show selection. Colored variations now have shadows.
- **Dropdown** - Dropdown padding values now resolve to exact pixel values from em
- **Grid** - Small computer `page grid` gutters have been adjusted from 8% to 3% to allow for roomier layouts on small screens.
- **Header/Table/Divider** - These components now pull border color defaults from `site.variables` instead of using their own values
- **Label** - Padding on `corner label` has been increased
- **Input** - Input now use `em` instead of `rem` so they will inherit the size of the elements they are nested inside
- **Menu** - Menu now uses `border` for borders instead of `box-shadow`
- **Menu** - `secondary pointing menu` has had some slight design tweaks, thinner lines, more padding
- **Menu** - Menus no longer have additional borders on `active item` in the default theme
- **Modal** - Modal no longer observes DOM changes by default, added setting to enable
- **Message** - Slightly increases `box-shadow`
- **Rating** - Rating styles have been adjusted to use subtle transitions and tweaked color values.
- **Search** - Slightly adjusted search result theme for clarity
- **Segment** - Segment now uses `border` for border instead of a second `box-shadow`, this may adjust position by 1pixel
- **Site** - Additional font variables have been added to site to help clarify variable purpose.
- **Site** - Page background is now `#FFFFFF` by default instead of an offwhite `#F7F7F7`
- **Site** - Adjusted global line height to the closest even pixel value
- **Table** - Table header colors and padding defaults have been slightly adjusted
- **Table** - Horizontal cell padding has been slightly reduced, and cell borders are slightly lighter.

### Version 1.12.1 - April 26, 2015

- **Input** - Fixes labeled inputs not adjusting correctly with flex. **Backported from 2.0**

### Version 1.12.0 - April 13, 2015

- **Visibility** - Adds updated visibility module from `2.x` channel. Visibility will automatically refresh by default after images load on page refresh. Fixes issues with element positions after image loading.
- **Sticky** - Adds sticky module from `2.x` branch. Sticky elements now use pub/sub with drastically improved performance. Sticky elements that do not fit on page will now scroll at the same speed as the page is scrolled instead of slower.
- **Popup** - Popup no longer produces a console error when it cannot find an adequate position in the browser viewport.
- **Visibility** - Fixed issue where `precache` behavior was missing from visibility causing `image` lazy loading to fail

### Version 1.11.6 - March 27, 2015

- **Menu/Dropdown** - Fix dropdown headers disappearing inside menus
- **LESS Repo** - Add missing `semantic.less` file to less repo for importing components

### Version 1.11.5 - March 23, 2015

- **Build Tools** - Adjusting site.variables will now rebuild all UI, instead of just site.less
- **Dropdown** - Fix bug where element will not blur on tab key when search selection and no selection made
- **Dropdown** - Dropdown `focus` color has been adjusted to match forms more closely

### Version 1.11.3-4 - March 6, 2015

- **Grid** - Added opt-in `stretched` variation for `equal height` instead of forcing `flex` on all `equal height columns` which may cause layout issues due to changes in rendering with `flexbox`.
- **Grid** - Fixed `right/left/center aligned` to adjust `align-items` in flex containers like `equal height/width`

### Version 1.11.2 - March 6, 2015

- **Accordion** - Accordion can now specify a trigger element instead of `title`, added an [example in docs](http://www.semantic-ui.com/modules/accordion.html#changing-trigger)
- **Header** - Labels inside headers have been slightly increased in size
- **Modal** - Fixes modal `buttons` on mobile devices to not have extra bottom padding.
- **Card/Dimmer** - Fix dimmer z-index being too high when inside a `ui card`. Added variable for specifying default dimmer color inside card.
- **Dropdown** - Fix issue in `setup reference` (added in `1.11.1`) where chaining would not return `ui dropdown` immediately after initialization

### Version 1.11.1 - March 5, 2015

- **Dropdown** - Added select styles for elements before they are initialized instead of FOIC (Flash of invisible content)

### Version 1.11.0 - March 3, 2015

- **Visibiliity** - Attach callbacks to elements visibility conditions like `top visible` `bottom visible`, `passing`. Useful for things like: image lazy loading, infinite scroll content, and recording tracking metrics.
- **Transition** - Added more reasonable default durations for each animation
- **Loader** - `inline loader` now has a `centered` variation
- **Popup** - Added `exclusive` parameter to automatically close other popups on open
- **Transition** - Added `toggle` behavior and docs for `show` and `hide`
- **Dimmer** - Add `opacity` setting to override css value. Add to docs several undocumented settings, like `useCSS`, and `variation`.
- **Icon** - added `@src` variable to make it adjustable with themes that dont support all types like `woff2`
- **Sticky** - Fixed sticky position when page loads and content is below sticky content.
- **Sticky** - Fix bottom attached position not adjusting for bottom padding on container element
- **Form** - Added `input[type="search"]` styles to `ui form`
- **Transition** - Adds examples of `hide, `show`, `toggle`, `stop`, `stop all`, and `clear queue`

### Version 1.10.0 - February 23, 2015

- **Form Validation** - Adds `containsExactly`, `notExactly`, `isExactly` case sensitive validation rules, make `contains`, `not`, `is` case insensitive.
- **API** - Added `was cancelled` to determine whether request was cancelled by `beforeSend`
- **Image* - Added `hidden image` state
- **Composer** - Composer.json should now read version from tags, adjusted some fields.
- **Grid** - Stackable grid now has horizontal padding by default on mobile unless nested inside a `ui grid` or `ui segment` (not vertical)

### Version 1.9.3 - February 20, 2015

- **RTL** - Fixes `rtl` tasks not running correctly on `gulp build` due to name typo, `build rtl` instead of `build-rtl`
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
- **Dropdown** - `restore defaults` will now set placeholder styling and remove active element. Added example in docs.
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
- **Modal** - Fixes element detaching sometimes in case where it is already inside a dimmer

### Version 0.10.2 - Dec 13, 2013

- **Button** - Adds VK button

### Version 0.10.0 - Dec 05, 2013

- **Grid** - Adds ``doubling`` responsive variation which automatically formats content spacing based on device type
- **Form Validation** - Adds two new parameters, to allow for changing of revalidation and delay on input
- **Grid** - Row padding is now EM not % based, this might shift layouts slightly
- **Grid** - Grid columns not inside a row will automatically receive row padding now. This will allow for content to flow correctly when row count is unknown

### Version 0.9.6 - Dec 04, 2013

- **Rating** - Ratings now receive class disabled when read only, instead of receiving ``active`` when rateable since active are much more common
- **Header, Grid, Segment** - Adds justified alignment

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

- **Table** - Added awesome new responsive style to ui tables
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