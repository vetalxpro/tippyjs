(window.webpackJsonp = window.webpackJsonp || []).push([
  [7],
  {
    297: function(e, t, a) {
      'use strict';
      a.r(t),
        a.d(t, '_frontmatter', function() {
          return s;
        }),
        a.d(t, 'default', function() {
          return l;
        });
      a(4), a(5), a(3), a(7), a(10), a(0);
      var n = a(51),
        b = a(183);
      var s = {},
        c = {_frontmatter: s},
        r = b.default;
      function l(e) {
        var t = e.components,
          a = (function(e, t) {
            if (null == e) return {};
            var a,
              n,
              b = {},
              s = Object.keys(e);
            for (n = 0; n < s.length; n++)
              (a = s[n]), t.indexOf(a) >= 0 || (b[a] = e[a]);
            return b;
          })(e, ['components']);
        return Object(n.b)(
          r,
          Object.assign({}, c, a, {components: t, mdxType: 'MDXLayout'}),
          Object(n.b)(
            'table',
            null,
            Object(n.b)(
              'thead',
              {parentName: 'table'},
              Object(n.b)(
                'tr',
                {parentName: 'thead'},
                Object(n.b)(
                  'th',
                  Object.assign({parentName: 'tr'}, {align: null}),
                  'Prop',
                ),
                Object(n.b)(
                  'th',
                  Object.assign({parentName: 'tr'}, {align: 'center'}),
                  'Default',
                ),
                Object(n.b)(
                  'th',
                  Object.assign({parentName: 'tr'}, {align: null}),
                  'Description',
                ),
              ),
            ),
            Object(n.b)(
              'tbody',
              {parentName: 'table'},
              Object(n.b)(
                'tr',
                {parentName: 'tbody'},
                Object(n.b)(
                  'td',
                  Object.assign({parentName: 'tr'}, {align: null}),
                  Object(n.b)(
                    'code',
                    Object.assign(
                      {parentName: 'td'},
                      {className: 'language-text'},
                    ),
                    'allowHTML',
                  ),
                ),
                Object(n.b)(
                  'td',
                  Object.assign({parentName: 'tr'}, {align: 'center'}),
                  Object(n.b)(
                    'code',
                    Object.assign(
                      {parentName: 'td'},
                      {className: 'language-text'},
                    ),
                    'true',
                  ),
                ),
                Object(n.b)(
                  'td',
                  Object.assign({parentName: 'tr'}, {align: null}),
                  Object(n.b)(
                    'strong',
                    {parentName: 'td'},
                    'Determines if the tippy can have HTML content rendered inside of it.',
                  ),
                  ' ',
                  Object(n.b)('br', null),
                  Object(n.b)('br', null),
                  ' Make sure you are sanitizing any user data if rendering HTML to prevent XSS attacks.',
                ),
              ),
              Object(n.b)(
                'tr',
                {parentName: 'tbody'},
                Object(n.b)(
                  'td',
                  Object.assign({parentName: 'tr'}, {align: null}),
                  Object(n.b)(
                    'strong',
                    {parentName: 'td'},
                    Object(n.b)(
                      'code',
                      Object.assign(
                        {parentName: 'strong'},
                        {className: 'language-text'},
                      ),
                      'animateFill',
                    ),
                  ),
                  ' (available as a ',
                  Object(n.b)(
                    'a',
                    Object.assign(
                      {parentName: 'td'},
                      {href: '/tippyjs/plugins/'},
                    ),
                    'plugin',
                  ),
                  ')',
                ),
                Object(n.b)(
                  'td',
                  Object.assign({parentName: 'tr'}, {align: 'center'}),
                  Object(n.b)(
                    'code',
                    Object.assign(
                      {parentName: 'td'},
                      {className: 'language-text'},
                    ),
                    'false',
                  ),
                ),
                Object(n.b)(
                  'td',
                  Object.assign({parentName: 'tr'}, {align: null}),
                  Object(n.b)(
                    'strong',
                    {parentName: 'td'},
                    'Determines if the background fill color of the tippy should be animated.',
                  ),
                  ' ',
                  Object(n.b)('br', null),
                  Object(n.b)('br', null),
                  ' You must import the ',
                  Object(n.b)(
                    'code',
                    Object.assign(
                      {parentName: 'td'},
                      {className: 'language-text'},
                    ),
                    'dist/backdrop.css',
                  ),
                  ' & ',
                  Object(n.b)(
                    'code',
                    Object.assign(
                      {parentName: 'td'},
                      {className: 'language-text'},
                    ),
                    'animations/shift-away.css',
                  ),
                  ' stylesheets for styling to work.',
                ),
              ),
              Object(n.b)(
                'tr',
                {parentName: 'tbody'},
                Object(n.b)(
                  'td',
                  Object.assign({parentName: 'tr'}, {align: null}),
                  Object(n.b)(
                    'code',
                    Object.assign(
                      {parentName: 'td'},
                      {className: 'language-text'},
                    ),
                    'animation',
                  ),
                ),
                Object(n.b)(
                  'td',
                  Object.assign({parentName: 'tr'}, {align: 'center'}),
                  Object(n.b)(
                    'code',
                    Object.assign(
                      {parentName: 'td'},
                      {className: 'language-text'},
                    ),
                    '"fade"',
                  ),
                ),
                Object(n.b)(
                  'td',
                  Object.assign({parentName: 'tr'}, {align: null}),
                  Object(n.b)(
                    'strong',
                    {parentName: 'td'},
                    'The type of transition animation.',
                  ),
                  ' ',
                  Object(n.b)('br', null),
                  Object(n.b)('br', null),
                  ' Possible values: ',
                  Object(n.b)(
                    'code',
                    Object.assign(
                      {parentName: 'td'},
                      {className: 'language-text'},
                    ),
                    '"shift-away"',
                  ),
                  ', ',
                  Object(n.b)(
                    'code',
                    Object.assign(
                      {parentName: 'td'},
                      {className: 'language-text'},
                    ),
                    '"shift-toward"',
                  ),
                  ', ',
                  Object(n.b)(
                    'code',
                    Object.assign(
                      {parentName: 'td'},
                      {className: 'language-text'},
                    ),
                    '"fade"',
                  ),
                  ', ',
                  Object(n.b)(
                    'code',
                    Object.assign(
                      {parentName: 'td'},
                      {className: 'language-text'},
                    ),
                    '"scale"',
                  ),
                  ', ',
                  Object(n.b)(
                    'code',
                    Object.assign(
                      {parentName: 'td'},
                      {className: 'language-text'},
                    ),
                    '"perspective"',
                  ),
                  ' (each require importing styleseheets), or your own custom animation. ',
                  Object(n.b)('br', null),
                  Object(n.b)('br', null),
                  ' See ',
                  Object(n.b)(
                    'a',
                    Object.assign(
                      {parentName: 'td'},
                      {href: '/tippyjs/animations/'},
                    ),
                    'Animations',
                  ),
                  ' for more information.',
                ),
              ),
              Object(n.b)(
                'tr',
                {parentName: 'tbody'},
                Object(n.b)(
                  'td',
                  Object.assign({parentName: 'tr'}, {align: null}),
                  Object(n.b)(
                    'code',
                    Object.assign(
                      {parentName: 'td'},
                      {className: 'language-text'},
                    ),
                    'appendTo',
                  ),
                ),
                Object(n.b)(
                  'td',
                  Object.assign({parentName: 'tr'}, {align: 'center'}),
                  Object(n.b)(
                    'code',
                    Object.assign(
                      {parentName: 'td'},
                      {className: 'language-text'},
                    ),
                    'document.body',
                  ),
                ),
                Object(n.b)(
                  'td',
                  Object.assign({parentName: 'tr'}, {align: null}),
                  Object(n.b)(
                    'strong',
                    {parentName: 'td'},
                    'The element to append the tippy to.',
                  ),
                  ' ',
                  Object(n.b)('br', null),
                  Object(n.b)('br', null),
                  ' Possible values: ',
                  Object(n.b)(
                    'code',
                    Object.assign(
                      {parentName: 'td'},
                      {className: 'language-text'},
                    ),
                    '"parent"',
                  ),
                  " (the reference's parentNode), ",
                  Object(n.b)(
                    'code',
                    Object.assign(
                      {parentName: 'td'},
                      {className: 'language-text'},
                    ),
                    'Element',
                  ),
                  ', ',
                  Object(n.b)(
                    'code',
                    Object.assign(
                      {parentName: 'td'},
                      {className: 'language-text'},
                    ),
                    '(reference) => Element',
                  ),
                  '. ',
                  Object(n.b)('br', null),
                  Object(n.b)('br', null),
                  ' If ',
                  Object(n.b)(
                    'code',
                    Object.assign(
                      {parentName: 'td'},
                      {className: 'language-text'},
                    ),
                    'interactive: true',
                  ),
                  ', the default behavior is ',
                  Object(n.b)(
                    'code',
                    Object.assign(
                      {parentName: 'td'},
                      {className: 'language-text'},
                    ),
                    'appendTo: "parent"',
                  ),
                  ' instead of ',
                  Object(n.b)(
                    'code',
                    Object.assign(
                      {parentName: 'td'},
                      {className: 'language-text'},
                    ),
                    'document.body',
                  ),
                  '. ',
                  Object(n.b)('br', null),
                  Object(n.b)('br', null),
                  ' See ',
                  Object(n.b)(
                    'a',
                    Object.assign(
                      {parentName: 'td'},
                      {href: '/tippyjs/accessibility/#interactivity'},
                    ),
                    'Accessibility',
                  ),
                  ' for more information.',
                ),
              ),
              Object(n.b)(
                'tr',
                {parentName: 'tbody'},
                Object(n.b)(
                  'td',
                  Object.assign({parentName: 'tr'}, {align: null}),
                  Object(n.b)(
                    'code',
                    Object.assign(
                      {parentName: 'td'},
                      {className: 'language-text'},
                    ),
                    'aria',
                  ),
                ),
                Object(n.b)(
                  'td',
                  Object.assign({parentName: 'tr'}, {align: 'center'}),
                  Object(n.b)(
                    'code',
                    Object.assign(
                      {parentName: 'td'},
                      {className: 'language-text'},
                    ),
                    '"describedby"',
                  ),
                ),
                Object(n.b)(
                  'td',
                  Object.assign({parentName: 'tr'}, {align: null}),
                  Object(n.b)(
                    'strong',
                    {parentName: 'td'},
                    'The ',
                    Object(n.b)(
                      'code',
                      Object.assign(
                        {parentName: 'strong'},
                        {className: 'language-text'},
                      ),
                      'aria-*',
                    ),
                    ' attribute applied to the reference element.',
                  ),
                  ' ',
                  Object(n.b)('br', null),
                  Object(n.b)('br', null),
                  ' Possible values: ',
                  Object(n.b)(
                    'code',
                    Object.assign(
                      {parentName: 'td'},
                      {className: 'language-text'},
                    ),
                    '"describedby"',
                  ),
                  ', ',
                  Object(n.b)(
                    'code',
                    Object.assign(
                      {parentName: 'td'},
                      {className: 'language-text'},
                    ),
                    '"labelledby"',
                  ),
                  '. Use ',
                  Object(n.b)(
                    'code',
                    Object.assign(
                      {parentName: 'td'},
                      {className: 'language-text'},
                    ),
                    'null',
                  ),
                  ' to prevent the attribute from being added.',
                ),
              ),
              Object(n.b)(
                'tr',
                {parentName: 'tbody'},
                Object(n.b)(
                  'td',
                  Object.assign({parentName: 'tr'}, {align: null}),
                  Object(n.b)(
                    'code',
                    Object.assign(
                      {parentName: 'td'},
                      {className: 'language-text'},
                    ),
                    'arrow',
                  ),
                ),
                Object(n.b)(
                  'td',
                  Object.assign({parentName: 'tr'}, {align: 'center'}),
                  Object(n.b)(
                    'code',
                    Object.assign(
                      {parentName: 'td'},
                      {className: 'language-text'},
                    ),
                    'true',
                  ),
                ),
                Object(n.b)(
                  'td',
                  Object.assign({parentName: 'tr'}, {align: null}),
                  Object(n.b)(
                    'strong',
                    {parentName: 'td'},
                    'Determines if the tippy has an arrow.',
                  ),
                  ' ',
                  Object(n.b)('br', null),
                  Object(n.b)('br', null),
                  ' Possible values: ',
                  Object(n.b)(
                    'code',
                    Object.assign(
                      {parentName: 'td'},
                      {className: 'language-text'},
                    ),
                    'boolean',
                  ),
                  ', ',
                  Object(n.b)(
                    'code',
                    Object.assign(
                      {parentName: 'td'},
                      {className: 'language-text'},
                    ),
                    'string',
                  ),
                  ' (HTML), or ',
                  Object(n.b)(
                    'code',
                    Object.assign(
                      {parentName: 'td'},
                      {className: 'language-text'},
                    ),
                    'SVGElement',
                  ),
                  ' (your own shape). ',
                  Object(n.b)('br', null),
                  Object(n.b)('br', null),
                  ' To use the default round arrow, import ',
                  Object(n.b)(
                    'code',
                    Object.assign(
                      {parentName: 'td'},
                      {className: 'language-text'},
                    ),
                    'roundArrow',
                  ),
                  ' from the package (',
                  Object(n.b)(
                    'code',
                    Object.assign(
                      {parentName: 'td'},
                      {className: 'language-text'},
                    ),
                    'tippy.roundArrow',
                  ),
                  ' in IIFE version) and pass it as the value. ',
                  Object(n.b)('br', null),
                  Object(n.b)('br', null),
                  ' You must also import ',
                  Object(n.b)(
                    'code',
                    Object.assign(
                      {parentName: 'td'},
                      {className: 'language-text'},
                    ),
                    'dist/svg-arrow.css',
                  ),
                  ' when using SVG arrows for styling to work.',
                ),
              ),
              Object(n.b)(
                'tr',
                {parentName: 'tbody'},
                Object(n.b)(
                  'td',
                  Object.assign({parentName: 'tr'}, {align: null}),
                  Object(n.b)(
                    'code',
                    Object.assign(
                      {parentName: 'td'},
                      {className: 'language-text'},
                    ),
                    'boundary',
                  ),
                ),
                Object(n.b)(
                  'td',
                  Object.assign({parentName: 'tr'}, {align: 'center'}),
                  Object(n.b)(
                    'code',
                    Object.assign(
                      {parentName: 'td'},
                      {className: 'language-text'},
                    ),
                    '"scrollParent"',
                  ),
                ),
                Object(n.b)(
                  'td',
                  Object.assign({parentName: 'tr'}, {align: null}),
                  Object(n.b)(
                    'strong',
                    {parentName: 'td'},
                    "The boundary that Popper.js' ",
                    Object(n.b)(
                      'code',
                      Object.assign(
                        {parentName: 'strong'},
                        {className: 'language-text'},
                      ),
                      'preventOverflow',
                    ),
                    ' modifier adheres to.',
                  ),
                  ' ',
                  Object(n.b)('br', null),
                  Object(n.b)('br', null),
                  ' Possible values: ',
                  Object(n.b)(
                    'code',
                    Object.assign(
                      {parentName: 'td'},
                      {className: 'language-text'},
                    ),
                    '"scrollParent"',
                  ),
                  ', ',
                  Object(n.b)(
                    'code',
                    Object.assign(
                      {parentName: 'td'},
                      {className: 'language-text'},
                    ),
                    '"window"',
                  ),
                  ', ',
                  Object(n.b)(
                    'code',
                    Object.assign(
                      {parentName: 'td'},
                      {className: 'language-text'},
                    ),
                    '"viewport"',
                  ),
                  ', or an ',
                  Object(n.b)(
                    'code',
                    Object.assign(
                      {parentName: 'td'},
                      {className: 'language-text'},
                    ),
                    'HTMLElement',
                  ),
                  '.',
                ),
              ),
              Object(n.b)(
                'tr',
                {parentName: 'tbody'},
                Object(n.b)(
                  'td',
                  Object.assign({parentName: 'tr'}, {align: null}),
                  Object(n.b)(
                    'code',
                    Object.assign(
                      {parentName: 'td'},
                      {className: 'language-text'},
                    ),
                    'content',
                  ),
                ),
                Object(n.b)(
                  'td',
                  Object.assign({parentName: 'tr'}, {align: 'center'}),
                  Object(n.b)(
                    'code',
                    Object.assign(
                      {parentName: 'td'},
                      {className: 'language-text'},
                    ),
                    '""',
                  ),
                ),
                Object(n.b)(
                  'td',
                  Object.assign({parentName: 'tr'}, {align: null}),
                  Object(n.b)(
                    'strong',
                    {parentName: 'td'},
                    'The content of the tippy.',
                  ),
                  ' ',
                  Object(n.b)('br', null),
                  Object(n.b)('br', null),
                  ' Possible values: ',
                  Object(n.b)(
                    'code',
                    Object.assign(
                      {parentName: 'td'},
                      {className: 'language-text'},
                    ),
                    'string',
                  ),
                  ', ',
                  Object(n.b)(
                    'code',
                    Object.assign(
                      {parentName: 'td'},
                      {className: 'language-text'},
                    ),
                    'Element',
                  ),
                  ', or ',
                  Object(n.b)(
                    'code',
                    Object.assign(
                      {parentName: 'td'},
                      {className: 'language-text'},
                    ),
                    '(reference) => Element',
                  ),
                  '.',
                ),
              ),
              Object(n.b)(
                'tr',
                {parentName: 'tbody'},
                Object(n.b)(
                  'td',
                  Object.assign({parentName: 'tr'}, {align: null}),
                  Object(n.b)(
                    'code',
                    Object.assign(
                      {parentName: 'td'},
                      {className: 'language-text'},
                    ),
                    'delay',
                  ),
                ),
                Object(n.b)(
                  'td',
                  Object.assign({parentName: 'tr'}, {align: 'center'}),
                  Object(n.b)(
                    'code',
                    Object.assign(
                      {parentName: 'td'},
                      {className: 'language-text'},
                    ),
                    '0',
                  ),
                ),
                Object(n.b)(
                  'td',
                  Object.assign({parentName: 'tr'}, {align: null}),
                  Object(n.b)(
                    'strong',
                    {parentName: 'td'},
                    'Delay in ms once a trigger event is fired before a tippy shows or hides.',
                  ),
                  ' ',
                  Object(n.b)('br', null),
                  Object(n.b)('br', null),
                  ' Possibles values: ',
                  Object(n.b)(
                    'code',
                    Object.assign(
                      {parentName: 'td'},
                      {className: 'language-text'},
                    ),
                    'number',
                  ),
                  ', ',
                  Object(n.b)(
                    'code',
                    Object.assign(
                      {parentName: 'td'},
                      {className: 'language-text'},
                    ),
                    '[number, number]',
                  ),
                  ' = ',
                  '[show, hide]',
                  '. ',
                  Object(n.b)('br', null),
                  Object(n.b)('br', null),
                  ' Specifying a number means both the show and hide delays are the same. Use ',
                  Object(n.b)(
                    'code',
                    Object.assign(
                      {parentName: 'td'},
                      {className: 'language-text'},
                    ),
                    'null',
                  ),
                  ' in the array to use the default value.',
                ),
              ),
              Object(n.b)(
                'tr',
                {parentName: 'tbody'},
                Object(n.b)(
                  'td',
                  Object.assign({parentName: 'tr'}, {align: null}),
                  Object(n.b)(
                    'code',
                    Object.assign(
                      {parentName: 'td'},
                      {className: 'language-text'},
                    ),
                    'duration',
                  ),
                ),
                Object(n.b)(
                  'td',
                  Object.assign({parentName: 'tr'}, {align: 'center'}),
                  Object(n.b)(
                    'code',
                    Object.assign(
                      {parentName: 'td'},
                      {className: 'language-text'},
                    ),
                    '[275, 250]',
                  ),
                ),
                Object(n.b)(
                  'td',
                  Object.assign({parentName: 'tr'}, {align: null}),
                  Object(n.b)(
                    'strong',
                    {parentName: 'td'},
                    'Duration of the CSS transition animation in ms.',
                  ),
                  ' ',
                  Object(n.b)('br', null),
                  Object(n.b)('br', null),
                  ' Possibles values: ',
                  Object(n.b)(
                    'code',
                    Object.assign(
                      {parentName: 'td'},
                      {className: 'language-text'},
                    ),
                    'number',
                  ),
                  ', ',
                  Object(n.b)(
                    'code',
                    Object.assign(
                      {parentName: 'td'},
                      {className: 'language-text'},
                    ),
                    '[number, number]',
                  ),
                  ' = ',
                  '[show, hide]',
                  '. ',
                  Object(n.b)('br', null),
                  Object(n.b)('br', null),
                  ' Specifying a number means both the show and hide delays are the same. Use ',
                  Object(n.b)(
                    'code',
                    Object.assign(
                      {parentName: 'td'},
                      {className: 'language-text'},
                    ),
                    'null',
                  ),
                  ' in the array to use the default value.',
                ),
              ),
              Object(n.b)(
                'tr',
                {parentName: 'tbody'},
                Object(n.b)(
                  'td',
                  Object.assign({parentName: 'tr'}, {align: null}),
                  Object(n.b)(
                    'code',
                    Object.assign(
                      {parentName: 'td'},
                      {className: 'language-text'},
                    ),
                    'distance',
                  ),
                ),
                Object(n.b)(
                  'td',
                  Object.assign({parentName: 'tr'}, {align: 'center'}),
                  Object(n.b)(
                    'code',
                    Object.assign(
                      {parentName: 'td'},
                      {className: 'language-text'},
                    ),
                    '10',
                  ),
                ),
                Object(n.b)(
                  'td',
                  Object.assign({parentName: 'tr'}, {align: null}),
                  Object(n.b)(
                    'strong',
                    {parentName: 'td'},
                    'How far in pixels the tippy element is from the reference element.',
                  ),
                  ' ',
                  Object(n.b)('br', null),
                  ' ',
                  Object(n.b)('br', null),
                  ' Only applies to a single axis and not to the parent popper element, see the ',
                  Object(n.b)(
                    'code',
                    Object.assign(
                      {parentName: 'td'},
                      {className: 'language-text'},
                    ),
                    'offset',
                  ),
                  ' prop.',
                ),
              ),
              Object(n.b)(
                'tr',
                {parentName: 'tbody'},
                Object(n.b)(
                  'td',
                  Object.assign({parentName: 'tr'}, {align: null}),
                  Object(n.b)(
                    'code',
                    Object.assign(
                      {parentName: 'td'},
                      {className: 'language-text'},
                    ),
                    'flip',
                  ),
                ),
                Object(n.b)(
                  'td',
                  Object.assign({parentName: 'tr'}, {align: 'center'}),
                  Object(n.b)(
                    'code',
                    Object.assign(
                      {parentName: 'td'},
                      {className: 'language-text'},
                    ),
                    'true',
                  ),
                ),
                Object(n.b)(
                  'td',
                  Object.assign({parentName: 'tr'}, {align: null}),
                  Object(n.b)(
                    'strong',
                    {parentName: 'td'},
                    'Determines if the tippy flips so that it is placed within the viewport as best it can be if there is not enough space.',
                  ),
                ),
              ),
              Object(n.b)(
                'tr',
                {parentName: 'tbody'},
                Object(n.b)(
                  'td',
                  Object.assign({parentName: 'tr'}, {align: null}),
                  Object(n.b)(
                    'code',
                    Object.assign(
                      {parentName: 'td'},
                      {className: 'language-text'},
                    ),
                    'flipBehavior',
                  ),
                ),
                Object(n.b)(
                  'td',
                  Object.assign({parentName: 'tr'}, {align: 'center'}),
                  Object(n.b)(
                    'code',
                    Object.assign(
                      {parentName: 'td'},
                      {className: 'language-text'},
                    ),
                    '"flip"',
                  ),
                ),
                Object(n.b)(
                  'td',
                  Object.assign({parentName: 'tr'}, {align: null}),
                  Object(n.b)(
                    'strong',
                    {parentName: 'td'},
                    'Determines the order of flipping, i.e. which placements to prefer if a certain placement cannot be used.',
                  ),
                  ' ',
                  Object(n.b)('br', null),
                  Object(n.b)('br', null),
                  ' Use an array such as ',
                  Object(n.b)(
                    'code',
                    Object.assign(
                      {parentName: 'td'},
                      {className: 'language-text'},
                    ),
                    '["bottom", "left"]',
                  ),
                  ' to prefer the "left" placement if "bottom" is unavailable, instead of "top".',
                ),
              ),
              Object(n.b)(
                'tr',
                {parentName: 'tbody'},
                Object(n.b)(
                  'td',
                  Object.assign({parentName: 'tr'}, {align: null}),
                  Object(n.b)(
                    'code',
                    Object.assign(
                      {parentName: 'td'},
                      {className: 'language-text'},
                    ),
                    'flipOnUpdate',
                  ),
                ),
                Object(n.b)(
                  'td',
                  Object.assign({parentName: 'tr'}, {align: 'center'}),
                  Object(n.b)(
                    'code',
                    Object.assign(
                      {parentName: 'td'},
                      {className: 'language-text'},
                    ),
                    'false',
                  ),
                ),
                Object(n.b)(
                  'td',
                  Object.assign({parentName: 'tr'}, {align: null}),
                  Object(n.b)(
                    'strong',
                    {parentName: 'td'},
                    'Determines if the tippy should flip when necessary if its position updates while showing (for example, while scrolling, resize, or if the size of the tooltip changed).',
                  ),
                ),
              ),
              Object(n.b)(
                'tr',
                {parentName: 'tbody'},
                Object(n.b)(
                  'td',
                  Object.assign({parentName: 'tr'}, {align: null}),
                  Object(n.b)(
                    'strong',
                    {parentName: 'td'},
                    Object(n.b)(
                      'code',
                      Object.assign(
                        {parentName: 'strong'},
                        {className: 'language-text'},
                      ),
                      'followCursor',
                    ),
                  ),
                  ' (available as a ',
                  Object(n.b)(
                    'a',
                    Object.assign(
                      {parentName: 'td'},
                      {href: '/tippyjs/plugins/'},
                    ),
                    'plugin',
                  ),
                  ')',
                ),
                Object(n.b)(
                  'td',
                  Object.assign({parentName: 'tr'}, {align: 'center'}),
                  Object(n.b)(
                    'code',
                    Object.assign(
                      {parentName: 'td'},
                      {className: 'language-text'},
                    ),
                    'false',
                  ),
                ),
                Object(n.b)(
                  'td',
                  Object.assign({parentName: 'tr'}, {align: null}),
                  Object(n.b)(
                    'strong',
                    {parentName: 'td'},
                    "Determines if the tippy follows the user's mouse cursor.",
                  ),
                  ' ',
                  Object(n.b)('br', null),
                  Object(n.b)('br', null),
                  ' Use the strings ',
                  Object(n.b)(
                    'code',
                    Object.assign(
                      {parentName: 'td'},
                      {className: 'language-text'},
                    ),
                    '"vertical"',
                  ),
                  ' or ',
                  Object(n.b)(
                    'code',
                    Object.assign(
                      {parentName: 'td'},
                      {className: 'language-text'},
                    ),
                    '"horizontal"',
                  ),
                  ' to only follow the cursor on a single axis. ',
                  Object(n.b)('br', null),
                  Object(n.b)('br', null),
                  ' Use ',
                  Object(n.b)(
                    'code',
                    Object.assign(
                      {parentName: 'td'},
                      {className: 'language-text'},
                    ),
                    '"initial"',
                  ),
                  ' to place the tippy at the initial cursor position upon show, but prevent following it. ',
                  Object(n.b)('br', null),
                  Object(n.b)('br', null),
                  ' On touch devices, ',
                  Object(n.b)(
                    'code',
                    Object.assign(
                      {parentName: 'td'},
                      {className: 'language-text'},
                    ),
                    '"initial"',
                  ),
                  ' is the behavior for all truthy values.',
                ),
              ),
              Object(n.b)(
                'tr',
                {parentName: 'tbody'},
                Object(n.b)(
                  'td',
                  Object.assign({parentName: 'tr'}, {align: null}),
                  Object(n.b)(
                    'code',
                    Object.assign(
                      {parentName: 'td'},
                      {className: 'language-text'},
                    ),
                    'hideOnClick',
                  ),
                ),
                Object(n.b)(
                  'td',
                  Object.assign({parentName: 'tr'}, {align: 'center'}),
                  Object(n.b)(
                    'code',
                    Object.assign(
                      {parentName: 'td'},
                      {className: 'language-text'},
                    ),
                    'true',
                  ),
                ),
                Object(n.b)(
                  'td',
                  Object.assign({parentName: 'tr'}, {align: null}),
                  Object(n.b)(
                    'strong',
                    {parentName: 'td'},
                    'Determines if the tippy should hide if a mousedown event was fired outside of it (i.e. clicking on the reference element or the body of the page).',
                  ),
                  ' ',
                  Object(n.b)('br', null),
                  Object(n.b)('br', null),
                  ' For click-triggered tippys, using ',
                  Object(n.b)(
                    'code',
                    Object.assign(
                      {parentName: 'td'},
                      {className: 'language-text'},
                    ),
                    'false',
                  ),
                  ' will prevent the tippy from ever hiding once it is showing. ',
                  Object(n.b)('br', null),
                  Object(n.b)('br', null),
                  ' To prevent clicks outside of the tippy from hiding it but still allow it to be toggled, use the string ',
                  Object(n.b)(
                    'code',
                    Object.assign(
                      {parentName: 'td'},
                      {className: 'language-text'},
                    ),
                    '"toggle"',
                  ),
                  '.',
                ),
              ),
              Object(n.b)(
                'tr',
                {parentName: 'tbody'},
                Object(n.b)(
                  'td',
                  Object.assign({parentName: 'tr'}, {align: null}),
                  Object(n.b)(
                    'code',
                    Object.assign(
                      {parentName: 'td'},
                      {className: 'language-text'},
                    ),
                    'ignoreAttributes',
                  ),
                ),
                Object(n.b)(
                  'td',
                  Object.assign({parentName: 'tr'}, {align: 'center'}),
                  Object(n.b)(
                    'code',
                    Object.assign(
                      {parentName: 'td'},
                      {className: 'language-text'},
                    ),
                    'false',
                  ),
                ),
                Object(n.b)(
                  'td',
                  Object.assign({parentName: 'tr'}, {align: null}),
                  Object(n.b)(
                    'strong',
                    {parentName: 'td'},
                    'Determines if ',
                    Object(n.b)(
                      'code',
                      Object.assign(
                        {parentName: 'strong'},
                        {className: 'language-text'},
                      ),
                      'data-tippy-*',
                    ),
                    ' attributes on the reference element should be ignored.',
                  ),
                  ' ',
                  Object(n.b)('br', null),
                  Object(n.b)('br', null),
                  ' Increases performance if you enable it.',
                ),
              ),
              Object(n.b)(
                'tr',
                {parentName: 'tbody'},
                Object(n.b)(
                  'td',
                  Object.assign({parentName: 'tr'}, {align: null}),
                  Object(n.b)(
                    'code',
                    Object.assign(
                      {parentName: 'td'},
                      {className: 'language-text'},
                    ),
                    'inertia',
                  ),
                ),
                Object(n.b)(
                  'td',
                  Object.assign({parentName: 'tr'}, {align: 'center'}),
                  Object(n.b)(
                    'code',
                    Object.assign(
                      {parentName: 'td'},
                      {className: 'language-text'},
                    ),
                    'false',
                  ),
                ),
                Object(n.b)(
                  'td',
                  Object.assign({parentName: 'tr'}, {align: null}),
                  Object(n.b)(
                    'strong',
                    {parentName: 'td'},
                    'Determines if an inertial slingshot effect is applied to the CSS animation.',
                  ),
                ),
              ),
              Object(n.b)(
                'tr',
                {parentName: 'tbody'},
                Object(n.b)(
                  'td',
                  Object.assign({parentName: 'tr'}, {align: null}),
                  Object(n.b)(
                    'strong',
                    {parentName: 'td'},
                    Object(n.b)(
                      'code',
                      Object.assign(
                        {parentName: 'strong'},
                        {className: 'language-text'},
                      ),
                      'inlinePositioning',
                    ),
                  ),
                  ' (available as a ',
                  Object(n.b)(
                    'a',
                    Object.assign(
                      {parentName: 'td'},
                      {href: '/tippyjs/plugins/'},
                    ),
                    'plugin',
                  ),
                  ')',
                ),
                Object(n.b)(
                  'td',
                  Object.assign({parentName: 'tr'}, {align: 'center'}),
                  Object(n.b)(
                    'code',
                    Object.assign(
                      {parentName: 'td'},
                      {className: 'language-text'},
                    ),
                    'false',
                  ),
                ),
                Object(n.b)(
                  'td',
                  Object.assign({parentName: 'tr'}, {align: null}),
                  Object(n.b)(
                    'strong',
                    {parentName: 'td'},
                    'Adds enhanced support for inline element positioning (',
                    Object(n.b)(
                      'code',
                      Object.assign(
                        {parentName: 'strong'},
                        {className: 'language-text'},
                      ),
                      'display: inline',
                    ),
                    ').',
                  ),
                  ' ',
                  Object(n.b)('br', null),
                  Object(n.b)('br', null),
                  ' Automatically detects inline elements and positions the tippy correctly.',
                ),
              ),
              Object(n.b)(
                'tr',
                {parentName: 'tbody'},
                Object(n.b)(
                  'td',
                  Object.assign({parentName: 'tr'}, {align: null}),
                  Object(n.b)(
                    'code',
                    Object.assign(
                      {parentName: 'td'},
                      {className: 'language-text'},
                    ),
                    'interactive',
                  ),
                ),
                Object(n.b)(
                  'td',
                  Object.assign({parentName: 'tr'}, {align: 'center'}),
                  Object(n.b)(
                    'code',
                    Object.assign(
                      {parentName: 'td'},
                      {className: 'language-text'},
                    ),
                    'false',
                  ),
                ),
                Object(n.b)(
                  'td',
                  Object.assign({parentName: 'tr'}, {align: null}),
                  Object(n.b)(
                    'strong',
                    {parentName: 'td'},
                    'Determines if the tippy is interactive, i.e. it can be hovered over or clicked without hiding.',
                  ),
                ),
              ),
              Object(n.b)(
                'tr',
                {parentName: 'tbody'},
                Object(n.b)(
                  'td',
                  Object.assign({parentName: 'tr'}, {align: null}),
                  Object(n.b)(
                    'code',
                    Object.assign(
                      {parentName: 'td'},
                      {className: 'language-text'},
                    ),
                    'interactiveBorder',
                  ),
                ),
                Object(n.b)(
                  'td',
                  Object.assign({parentName: 'tr'}, {align: 'center'}),
                  Object(n.b)(
                    'code',
                    Object.assign(
                      {parentName: 'td'},
                      {className: 'language-text'},
                    ),
                    '2',
                  ),
                ),
                Object(n.b)(
                  'td',
                  Object.assign({parentName: 'tr'}, {align: null}),
                  Object(n.b)(
                    'strong',
                    {parentName: 'td'},
                    'Determines the size in pixels of the invisible border around a tippy which will prevent it from hiding if the cursor left it.',
                  ),
                ),
              ),
              Object(n.b)(
                'tr',
                {parentName: 'tbody'},
                Object(n.b)(
                  'td',
                  Object.assign({parentName: 'tr'}, {align: null}),
                  Object(n.b)(
                    'code',
                    Object.assign(
                      {parentName: 'td'},
                      {className: 'language-text'},
                    ),
                    'interactiveDebounce',
                  ),
                ),
                Object(n.b)(
                  'td',
                  Object.assign({parentName: 'tr'}, {align: 'center'}),
                  Object(n.b)(
                    'code',
                    Object.assign(
                      {parentName: 'td'},
                      {className: 'language-text'},
                    ),
                    '0',
                  ),
                ),
                Object(n.b)(
                  'td',
                  Object.assign({parentName: 'tr'}, {align: null}),
                  Object(n.b)(
                    'strong',
                    {parentName: 'td'},
                    'Number in ms to debounces the internal ',
                    Object(n.b)(
                      'code',
                      Object.assign(
                        {parentName: 'strong'},
                        {className: 'language-text'},
                      ),
                      'onMouseMove',
                    ),
                    ' handler which determines when an interactive tippy should hide.',
                  ),
                ),
              ),
              Object(n.b)(
                'tr',
                {parentName: 'tbody'},
                Object(n.b)(
                  'td',
                  Object.assign({parentName: 'tr'}, {align: null}),
                  Object(n.b)(
                    'code',
                    Object.assign(
                      {parentName: 'td'},
                      {className: 'language-text'},
                    ),
                    'lazy',
                  ),
                ),
                Object(n.b)(
                  'td',
                  Object.assign({parentName: 'tr'}, {align: 'center'}),
                  Object(n.b)(
                    'code',
                    Object.assign(
                      {parentName: 'td'},
                      {className: 'language-text'},
                    ),
                    'true',
                  ),
                ),
                Object(n.b)(
                  'td',
                  Object.assign({parentName: 'tr'}, {align: null}),
                  Object(n.b)(
                    'strong',
                    {parentName: 'td'},
                    "Determines if the positioning engine (powered by Popper.js) is created lazily. That is, it's only created when necessary upon showing the tippy for the first time.",
                  ),
                  ' ',
                  Object(n.b)('br', null),
                  Object(n.b)('br', null),
                  ' If you need to access the ',
                  Object(n.b)(
                    'code',
                    Object.assign(
                      {parentName: 'td'},
                      {className: 'language-text'},
                    ),
                    'popperInstance',
                  ),
                  ' synchronously after creation, set this to ',
                  Object(n.b)(
                    'code',
                    Object.assign(
                      {parentName: 'td'},
                      {className: 'language-text'},
                    ),
                    'false',
                  ),
                  '. Note that disabling this decreases performance considerably.',
                ),
              ),
              Object(n.b)(
                'tr',
                {parentName: 'tbody'},
                Object(n.b)(
                  'td',
                  Object.assign({parentName: 'tr'}, {align: null}),
                  Object(n.b)(
                    'code',
                    Object.assign(
                      {parentName: 'td'},
                      {className: 'language-text'},
                    ),
                    'maxWidth',
                  ),
                ),
                Object(n.b)(
                  'td',
                  Object.assign({parentName: 'tr'}, {align: 'center'}),
                  Object(n.b)(
                    'code',
                    Object.assign(
                      {parentName: 'td'},
                      {className: 'language-text'},
                    ),
                    '350',
                  ),
                ),
                Object(n.b)(
                  'td',
                  Object.assign({parentName: 'tr'}, {align: null}),
                  Object(n.b)(
                    'strong',
                    {parentName: 'td'},
                    'Determines the maximum width of the tippy.',
                  ),
                  ' ',
                  Object(n.b)('br', null),
                  Object(n.b)('br', null),
                  ' Use a ',
                  Object(n.b)(
                    'code',
                    Object.assign(
                      {parentName: 'td'},
                      {className: 'language-text'},
                    ),
                    'number',
                  ),
                  ' for pixels, or a ',
                  Object(n.b)(
                    'code',
                    Object.assign(
                      {parentName: 'td'},
                      {className: 'language-text'},
                    ),
                    'string',
                  ),
                  ' to add units such as ',
                  Object(n.b)(
                    'code',
                    Object.assign(
                      {parentName: 'td'},
                      {className: 'language-text'},
                    ),
                    'rem',
                  ),
                  '.',
                ),
              ),
              Object(n.b)(
                'tr',
                {parentName: 'tbody'},
                Object(n.b)(
                  'td',
                  Object.assign({parentName: 'tr'}, {align: null}),
                  Object(n.b)(
                    'code',
                    Object.assign(
                      {parentName: 'td'},
                      {className: 'language-text'},
                    ),
                    'multiple',
                  ),
                ),
                Object(n.b)(
                  'td',
                  Object.assign({parentName: 'tr'}, {align: 'center'}),
                  Object(n.b)(
                    'code',
                    Object.assign(
                      {parentName: 'td'},
                      {className: 'language-text'},
                    ),
                    'false',
                  ),
                ),
                Object(n.b)(
                  'td',
                  Object.assign({parentName: 'tr'}, {align: null}),
                  Object(n.b)(
                    'strong',
                    {parentName: 'td'},
                    'Determines if the reference element can have multiple tippys applied to it.',
                  ),
                ),
              ),
              Object(n.b)(
                'tr',
                {parentName: 'tbody'},
                Object(n.b)(
                  'td',
                  Object.assign({parentName: 'tr'}, {align: null}),
                  Object(n.b)(
                    'code',
                    Object.assign(
                      {parentName: 'td'},
                      {className: 'language-text'},
                    ),
                    'offset',
                  ),
                ),
                Object(n.b)(
                  'td',
                  Object.assign({parentName: 'tr'}, {align: 'center'}),
                  Object(n.b)(
                    'code',
                    Object.assign(
                      {parentName: 'td'},
                      {className: 'language-text'},
                    ),
                    '0',
                  ),
                ),
                Object(n.b)(
                  'td',
                  Object.assign({parentName: 'tr'}, {align: null}),
                  Object(n.b)(
                    'strong',
                    {parentName: 'td'},
                    'Determines the offset of the tippy element.',
                  ),
                  ' ',
                  Object(n.b)('br', null),
                  ' ',
                  Object(n.b)('br', null),
                  ' Unlike ',
                  Object(n.b)(
                    'code',
                    Object.assign(
                      {parentName: 'td'},
                      {className: 'language-text'},
                    ),
                    'distance',
                  ),
                  ', it can work on both axes by using a string in the form ',
                  Object(n.b)(
                    'code',
                    Object.assign(
                      {parentName: 'td'},
                      {className: 'language-text'},
                    ),
                    '"x, y"',
                  ),
                  ', such as ',
                  Object(n.b)(
                    'code',
                    Object.assign(
                      {parentName: 'td'},
                      {className: 'language-text'},
                    ),
                    '"50, 20"',
                  ),
                  '. ',
                  Object(n.b)('br', null),
                  Object(n.b)('br', null),
                  ' Avoid using an ',
                  Object(n.b)(
                    'code',
                    Object.assign(
                      {parentName: 'td'},
                      {className: 'language-text'},
                    ),
                    'offset',
                  ),
                  ' along the same axis as the ',
                  Object(n.b)(
                    'code',
                    Object.assign(
                      {parentName: 'td'},
                      {className: 'language-text'},
                    ),
                    'placement',
                  ),
                  ' prop if using ',
                  Object(n.b)(
                    'code',
                    Object.assign(
                      {parentName: 'td'},
                      {className: 'language-text'},
                    ),
                    'interactive: true',
                  ),
                  '. If using a ',
                  Object(n.b)(
                    'code',
                    Object.assign(
                      {parentName: 'td'},
                      {className: 'language-text'},
                    ),
                    'number',
                  ),
                  ", there won't be any problems.",
                ),
              ),
              Object(n.b)(
                'tr',
                {parentName: 'tbody'},
                Object(n.b)(
                  'td',
                  Object.assign({parentName: 'tr'}, {align: null}),
                  Object(n.b)(
                    'code',
                    Object.assign(
                      {parentName: 'td'},
                      {className: 'language-text'},
                    ),
                    'onAfterUpdate',
                  ),
                ),
                Object(n.b)(
                  'td',
                  Object.assign({parentName: 'tr'}, {align: 'center'}),
                  Object(n.b)(
                    'code',
                    Object.assign(
                      {parentName: 'td'},
                      {className: 'language-text'},
                    ),
                    'noop',
                  ),
                ),
                Object(n.b)(
                  'td',
                  Object.assign({parentName: 'tr'}, {align: null}),
                  Object(n.b)(
                    'strong',
                    {parentName: 'td'},
                    "Lifecycle hook invoked after the tippy's props have been updated.",
                  ),
                ),
              ),
              Object(n.b)(
                'tr',
                {parentName: 'tbody'},
                Object(n.b)(
                  'td',
                  Object.assign({parentName: 'tr'}, {align: null}),
                  Object(n.b)(
                    'code',
                    Object.assign(
                      {parentName: 'td'},
                      {className: 'language-text'},
                    ),
                    'onBeforeUpdate',
                  ),
                ),
                Object(n.b)(
                  'td',
                  Object.assign({parentName: 'tr'}, {align: 'center'}),
                  Object(n.b)(
                    'code',
                    Object.assign(
                      {parentName: 'td'},
                      {className: 'language-text'},
                    ),
                    'noop',
                  ),
                ),
                Object(n.b)(
                  'td',
                  Object.assign({parentName: 'tr'}, {align: null}),
                  Object(n.b)(
                    'strong',
                    {parentName: 'td'},
                    "Lifecycle hook invoked before the tippy's props have been updated.",
                  ),
                ),
              ),
              Object(n.b)(
                'tr',
                {parentName: 'tbody'},
                Object(n.b)(
                  'td',
                  Object.assign({parentName: 'tr'}, {align: null}),
                  Object(n.b)(
                    'code',
                    Object.assign(
                      {parentName: 'td'},
                      {className: 'language-text'},
                    ),
                    'onCreate',
                  ),
                ),
                Object(n.b)(
                  'td',
                  Object.assign({parentName: 'tr'}, {align: 'center'}),
                  Object(n.b)(
                    'code',
                    Object.assign(
                      {parentName: 'td'},
                      {className: 'language-text'},
                    ),
                    'noop',
                  ),
                ),
                Object(n.b)(
                  'td',
                  Object.assign({parentName: 'tr'}, {align: null}),
                  Object(n.b)(
                    'strong',
                    {parentName: 'td'},
                    'Lifecycle hook invoked when the tippy has has been created.',
                  ),
                ),
              ),
              Object(n.b)(
                'tr',
                {parentName: 'tbody'},
                Object(n.b)(
                  'td',
                  Object.assign({parentName: 'tr'}, {align: null}),
                  Object(n.b)(
                    'code',
                    Object.assign(
                      {parentName: 'td'},
                      {className: 'language-text'},
                    ),
                    'onDestroy',
                  ),
                ),
                Object(n.b)(
                  'td',
                  Object.assign({parentName: 'tr'}, {align: 'center'}),
                  Object(n.b)(
                    'code',
                    Object.assign(
                      {parentName: 'td'},
                      {className: 'language-text'},
                    ),
                    'noop',
                  ),
                ),
                Object(n.b)(
                  'td',
                  Object.assign({parentName: 'tr'}, {align: null}),
                  Object(n.b)(
                    'strong',
                    {parentName: 'td'},
                    'Lifecycle hook invoked when the tippy has has been destroyed.',
                  ),
                ),
              ),
              Object(n.b)(
                'tr',
                {parentName: 'tbody'},
                Object(n.b)(
                  'td',
                  Object.assign({parentName: 'tr'}, {align: null}),
                  Object(n.b)(
                    'code',
                    Object.assign(
                      {parentName: 'td'},
                      {className: 'language-text'},
                    ),
                    'onHidden',
                  ),
                ),
                Object(n.b)(
                  'td',
                  Object.assign({parentName: 'tr'}, {align: 'center'}),
                  Object(n.b)(
                    'code',
                    Object.assign(
                      {parentName: 'td'},
                      {className: 'language-text'},
                    ),
                    'noop',
                  ),
                ),
                Object(n.b)(
                  'td',
                  Object.assign({parentName: 'tr'}, {align: null}),
                  Object(n.b)(
                    'strong',
                    {parentName: 'td'},
                    'Lifecycle hook invoked when the tippy has fully transitioned out and is unmounted from the DOM.',
                  ),
                ),
              ),
              Object(n.b)(
                'tr',
                {parentName: 'tbody'},
                Object(n.b)(
                  'td',
                  Object.assign({parentName: 'tr'}, {align: null}),
                  Object(n.b)(
                    'code',
                    Object.assign(
                      {parentName: 'td'},
                      {className: 'language-text'},
                    ),
                    'onHide',
                  ),
                ),
                Object(n.b)(
                  'td',
                  Object.assign({parentName: 'tr'}, {align: 'center'}),
                  Object(n.b)(
                    'code',
                    Object.assign(
                      {parentName: 'td'},
                      {className: 'language-text'},
                    ),
                    'noop',
                  ),
                ),
                Object(n.b)(
                  'td',
                  Object.assign({parentName: 'tr'}, {align: null}),
                  Object(n.b)(
                    'strong',
                    {parentName: 'td'},
                    'Lifecycle hook invoked when the tippy begins to transition out.',
                  ),
                  ' ',
                  Object(n.b)('br', null),
                  Object(n.b)('br', null),
                  ' You can cancel hiding by returning ',
                  Object(n.b)(
                    'code',
                    Object.assign(
                      {parentName: 'td'},
                      {className: 'language-text'},
                    ),
                    'false',
                  ),
                  ' from this lifecycle.',
                ),
              ),
              Object(n.b)(
                'tr',
                {parentName: 'tbody'},
                Object(n.b)(
                  'td',
                  Object.assign({parentName: 'tr'}, {align: null}),
                  Object(n.b)(
                    'code',
                    Object.assign(
                      {parentName: 'td'},
                      {className: 'language-text'},
                    ),
                    'onMount',
                  ),
                ),
                Object(n.b)(
                  'td',
                  Object.assign({parentName: 'tr'}, {align: 'center'}),
                  Object(n.b)(
                    'code',
                    Object.assign(
                      {parentName: 'td'},
                      {className: 'language-text'},
                    ),
                    'noop',
                  ),
                ),
                Object(n.b)(
                  'td',
                  Object.assign({parentName: 'tr'}, {align: null}),
                  Object(n.b)(
                    'strong',
                    {parentName: 'td'},
                    'Lifecycle hook invoked when the tippy has been mounted to the DOM (called after ',
                    Object(n.b)(
                      'code',
                      Object.assign(
                        {parentName: 'strong'},
                        {className: 'language-text'},
                      ),
                      'onShow',
                    ),
                    ').',
                  ),
                ),
              ),
              Object(n.b)(
                'tr',
                {parentName: 'tbody'},
                Object(n.b)(
                  'td',
                  Object.assign({parentName: 'tr'}, {align: null}),
                  Object(n.b)(
                    'code',
                    Object.assign(
                      {parentName: 'td'},
                      {className: 'language-text'},
                    ),
                    'onShow',
                  ),
                ),
                Object(n.b)(
                  'td',
                  Object.assign({parentName: 'tr'}, {align: 'center'}),
                  Object(n.b)(
                    'code',
                    Object.assign(
                      {parentName: 'td'},
                      {className: 'language-text'},
                    ),
                    'noop',
                  ),
                ),
                Object(n.b)(
                  'td',
                  Object.assign({parentName: 'tr'}, {align: null}),
                  Object(n.b)(
                    'strong',
                    {parentName: 'td'},
                    'Lifecycle hook invoked when the tippy begins to transition in.',
                  ),
                  ' ',
                  Object(n.b)('br', null),
                  Object(n.b)('br', null),
                  ' You can cancel showing by returning ',
                  Object(n.b)(
                    'code',
                    Object.assign(
                      {parentName: 'td'},
                      {className: 'language-text'},
                    ),
                    'false',
                  ),
                  ' from this lifecycle.',
                ),
              ),
              Object(n.b)(
                'tr',
                {parentName: 'tbody'},
                Object(n.b)(
                  'td',
                  Object.assign({parentName: 'tr'}, {align: null}),
                  Object(n.b)(
                    'code',
                    Object.assign(
                      {parentName: 'td'},
                      {className: 'language-text'},
                    ),
                    'onShown',
                  ),
                ),
                Object(n.b)(
                  'td',
                  Object.assign({parentName: 'tr'}, {align: 'center'}),
                  Object(n.b)(
                    'code',
                    Object.assign(
                      {parentName: 'td'},
                      {className: 'language-text'},
                    ),
                    'noop',
                  ),
                ),
                Object(n.b)(
                  'td',
                  Object.assign({parentName: 'tr'}, {align: null}),
                  Object(n.b)(
                    'strong',
                    {parentName: 'td'},
                    'Lifecycle hook invoked when the tippy has fully transitioned in.',
                  ),
                ),
              ),
              Object(n.b)(
                'tr',
                {parentName: 'tbody'},
                Object(n.b)(
                  'td',
                  Object.assign({parentName: 'tr'}, {align: null}),
                  Object(n.b)(
                    'code',
                    Object.assign(
                      {parentName: 'td'},
                      {className: 'language-text'},
                    ),
                    'onTrigger',
                  ),
                ),
                Object(n.b)(
                  'td',
                  Object.assign({parentName: 'tr'}, {align: 'center'}),
                  Object(n.b)(
                    'code',
                    Object.assign(
                      {parentName: 'td'},
                      {className: 'language-text'},
                    ),
                    'noop',
                  ),
                ),
                Object(n.b)(
                  'td',
                  Object.assign({parentName: 'tr'}, {align: null}),
                  Object(n.b)(
                    'strong',
                    {parentName: 'td'},
                    'Lifecycle hook invoked when the tippy was triggered by a real DOM event (called before ',
                    Object(n.b)(
                      'code',
                      Object.assign(
                        {parentName: 'strong'},
                        {className: 'language-text'},
                      ),
                      'onShow',
                    ),
                    ') to show the tippy.',
                  ),
                ),
              ),
              Object(n.b)(
                'tr',
                {parentName: 'tbody'},
                Object(n.b)(
                  'td',
                  Object.assign({parentName: 'tr'}, {align: null}),
                  Object(n.b)(
                    'code',
                    Object.assign(
                      {parentName: 'td'},
                      {className: 'language-text'},
                    ),
                    'onUntrigger',
                  ),
                ),
                Object(n.b)(
                  'td',
                  Object.assign({parentName: 'tr'}, {align: 'center'}),
                  Object(n.b)(
                    'code',
                    Object.assign(
                      {parentName: 'td'},
                      {className: 'language-text'},
                    ),
                    'noop',
                  ),
                ),
                Object(n.b)(
                  'td',
                  Object.assign({parentName: 'tr'}, {align: null}),
                  Object(n.b)(
                    'strong',
                    {parentName: 'td'},
                    'Lifecycle hook invoked when the tippy was triggered by a real DOM event (called before ',
                    Object(n.b)(
                      'code',
                      Object.assign(
                        {parentName: 'strong'},
                        {className: 'language-text'},
                      ),
                      'onHide',
                    ),
                    ') to hide the tippy.',
                  ),
                ),
              ),
              Object(n.b)(
                'tr',
                {parentName: 'tbody'},
                Object(n.b)(
                  'td',
                  Object.assign({parentName: 'tr'}, {align: null}),
                  Object(n.b)(
                    'code',
                    Object.assign(
                      {parentName: 'td'},
                      {className: 'language-text'},
                    ),
                    'placement',
                  ),
                ),
                Object(n.b)(
                  'td',
                  Object.assign({parentName: 'tr'}, {align: 'center'}),
                  Object(n.b)(
                    'code',
                    Object.assign(
                      {parentName: 'td'},
                      {className: 'language-text'},
                    ),
                    '"top"',
                  ),
                ),
                Object(n.b)(
                  'td',
                  Object.assign({parentName: 'tr'}, {align: null}),
                  Object(n.b)(
                    'strong',
                    {parentName: 'td'},
                    'Positions the tippy relative to its reference element.',
                  ),
                  ' ',
                  Object(n.b)('br', null),
                  Object(n.b)('br', null),
                  ' Use the suffix ',
                  Object(n.b)(
                    'code',
                    Object.assign(
                      {parentName: 'td'},
                      {className: 'language-text'},
                    ),
                    '-start',
                  ),
                  ' or ',
                  Object(n.b)(
                    'code',
                    Object.assign(
                      {parentName: 'td'},
                      {className: 'language-text'},
                    ),
                    '-end',
                  ),
                  ' to shift the tippy to the start or end of the reference element, instead of centering it. For example, ',
                  Object(n.b)(
                    'code',
                    Object.assign(
                      {parentName: 'td'},
                      {className: 'language-text'},
                    ),
                    '"top-start"',
                  ),
                  ' or ',
                  Object(n.b)(
                    'code',
                    Object.assign(
                      {parentName: 'td'},
                      {className: 'language-text'},
                    ),
                    '"left-end"',
                  ),
                  '.',
                ),
              ),
              Object(n.b)(
                'tr',
                {parentName: 'tbody'},
                Object(n.b)(
                  'td',
                  Object.assign({parentName: 'tr'}, {align: null}),
                  Object(n.b)(
                    'code',
                    Object.assign(
                      {parentName: 'td'},
                      {className: 'language-text'},
                    ),
                    'popperOptions',
                  ),
                ),
                Object(n.b)(
                  'td',
                  Object.assign({parentName: 'tr'}, {align: 'center'}),
                  Object(n.b)(
                    'code',
                    Object.assign(
                      {parentName: 'td'},
                      {className: 'language-text'},
                    ),
                    '{}',
                  ),
                ),
                Object(n.b)(
                  'td',
                  Object.assign({parentName: 'tr'}, {align: null}),
                  Object(n.b)(
                    'strong',
                    {parentName: 'td'},
                    'Specify custom Popper.js options.',
                  ),
                  ' ',
                  Object(n.b)('br', null),
                  Object(n.b)('br', null),
                  ' See the ',
                  Object(n.b)(
                    'a',
                    Object.assign(
                      {parentName: 'td'},
                      {href: 'https://popper.js.org/popper-documentation.html'},
                    ),
                    'Popper.js documentation',
                  ),
                  ' for more.',
                ),
              ),
              Object(n.b)(
                'tr',
                {parentName: 'tbody'},
                Object(n.b)(
                  'td',
                  Object.assign({parentName: 'tr'}, {align: null}),
                  Object(n.b)(
                    'code',
                    Object.assign(
                      {parentName: 'td'},
                      {className: 'language-text'},
                    ),
                    'role',
                  ),
                ),
                Object(n.b)(
                  'td',
                  Object.assign({parentName: 'tr'}, {align: 'center'}),
                  Object(n.b)(
                    'code',
                    Object.assign(
                      {parentName: 'td'},
                      {className: 'language-text'},
                    ),
                    '"tooltip"',
                  ),
                ),
                Object(n.b)(
                  'td',
                  Object.assign({parentName: 'tr'}, {align: null}),
                  Object(n.b)(
                    'strong',
                    {parentName: 'td'},
                    'Specifies the ',
                    Object(n.b)(
                      'code',
                      Object.assign(
                        {parentName: 'strong'},
                        {className: 'language-text'},
                      ),
                      'role',
                    ),
                    ' attribute on the tippy element.',
                  ),
                ),
              ),
              Object(n.b)(
                'tr',
                {parentName: 'tbody'},
                Object(n.b)(
                  'td',
                  Object.assign({parentName: 'tr'}, {align: null}),
                  Object(n.b)(
                    'code',
                    Object.assign(
                      {parentName: 'td'},
                      {className: 'language-text'},
                    ),
                    'showOnCreate',
                  ),
                ),
                Object(n.b)(
                  'td',
                  Object.assign({parentName: 'tr'}, {align: 'center'}),
                  Object(n.b)(
                    'code',
                    Object.assign(
                      {parentName: 'td'},
                      {className: 'language-text'},
                    ),
                    'false',
                  ),
                ),
                Object(n.b)(
                  'td',
                  Object.assign({parentName: 'tr'}, {align: null}),
                  Object(n.b)(
                    'strong',
                    {parentName: 'td'},
                    'Determines if the tippy will be shown immediately once the instance is created.',
                  ),
                ),
              ),
              Object(n.b)(
                'tr',
                {parentName: 'tbody'},
                Object(n.b)(
                  'td',
                  Object.assign({parentName: 'tr'}, {align: null}),
                  Object(n.b)(
                    'strong',
                    {parentName: 'td'},
                    Object(n.b)(
                      'code',
                      Object.assign(
                        {parentName: 'strong'},
                        {className: 'language-text'},
                      ),
                      'sticky',
                    ),
                  ),
                  ' (available as a ',
                  Object(n.b)(
                    'a',
                    Object.assign(
                      {parentName: 'td'},
                      {href: '/tippyjs/plugins/'},
                    ),
                    'plugin',
                  ),
                  ')',
                ),
                Object(n.b)(
                  'td',
                  Object.assign({parentName: 'tr'}, {align: 'center'}),
                  Object(n.b)(
                    'code',
                    Object.assign(
                      {parentName: 'td'},
                      {className: 'language-text'},
                    ),
                    'false',
                  ),
                ),
                Object(n.b)(
                  'td',
                  Object.assign({parentName: 'tr'}, {align: null}),
                  Object(n.b)(
                    'strong',
                    {parentName: 'td'},
                    'Ensures the tippy stays stuck to its reference element if it moves around or changes size while showing.',
                  ),
                  ' ',
                  Object(n.b)('br', null),
                  Object(n.b)('br', null),
                  ' Use ',
                  Object(n.b)(
                    'code',
                    Object.assign(
                      {parentName: 'td'},
                      {className: 'language-text'},
                    ),
                    'true',
                  ),
                  ' to check both ',
                  Object(n.b)(
                    'code',
                    Object.assign(
                      {parentName: 'td'},
                      {className: 'language-text'},
                    ),
                    'reference',
                  ),
                  ' and ',
                  Object(n.b)(
                    'code',
                    Object.assign(
                      {parentName: 'td'},
                      {className: 'language-text'},
                    ),
                    'popper',
                  ),
                  ' DOM rects, or use the strings ',
                  Object(n.b)(
                    'code',
                    Object.assign(
                      {parentName: 'td'},
                      {className: 'language-text'},
                    ),
                    '"reference"',
                  ),
                  ' or ',
                  Object(n.b)(
                    'code',
                    Object.assign(
                      {parentName: 'td'},
                      {className: 'language-text'},
                    ),
                    '"popper"',
                  ),
                  ' to check only one rect for improved performance (both are checked by default). ',
                  Object(n.b)('br', null),
                  Object(n.b)('br', null),
                  ' See the ',
                  Object(n.b)(
                    'code',
                    Object.assign(
                      {parentName: 'td'},
                      {className: 'language-text'},
                    ),
                    'updateDuration',
                  ),
                  ' prop to change the transition duration between position updates.',
                ),
              ),
              Object(n.b)(
                'tr',
                {parentName: 'tbody'},
                Object(n.b)(
                  'td',
                  Object.assign({parentName: 'tr'}, {align: null}),
                  Object(n.b)(
                    'code',
                    Object.assign(
                      {parentName: 'td'},
                      {className: 'language-text'},
                    ),
                    'theme',
                  ),
                ),
                Object(n.b)(
                  'td',
                  Object.assign({parentName: 'tr'}, {align: 'center'}),
                  Object(n.b)(
                    'code',
                    Object.assign(
                      {parentName: 'td'},
                      {className: 'language-text'},
                    ),
                    '""',
                  ),
                ),
                Object(n.b)(
                  'td',
                  Object.assign({parentName: 'tr'}, {align: null}),
                  Object(n.b)(
                    'strong',
                    {parentName: 'td'},
                    "Themes added as classes (each separated by a space) to the tippy element's ",
                    Object(n.b)(
                      'code',
                      Object.assign(
                        {parentName: 'strong'},
                        {className: 'language-text'},
                      ),
                      'classList',
                    ),
                    '.',
                  ),
                  ' ',
                  Object(n.b)('br', null),
                  Object(n.b)('br', null),
                  ' See ',
                  Object(n.b)(
                    'a',
                    Object.assign(
                      {parentName: 'td'},
                      {href: '/tippyjs/themes/'},
                    ),
                    'Themes',
                  ),
                  ' for more information.',
                ),
              ),
              Object(n.b)(
                'tr',
                {parentName: 'tbody'},
                Object(n.b)(
                  'td',
                  Object.assign({parentName: 'tr'}, {align: null}),
                  Object(n.b)(
                    'code',
                    Object.assign(
                      {parentName: 'td'},
                      {className: 'language-text'},
                    ),
                    'touch',
                  ),
                ),
                Object(n.b)(
                  'td',
                  Object.assign({parentName: 'tr'}, {align: 'center'}),
                  Object(n.b)(
                    'code',
                    Object.assign(
                      {parentName: 'td'},
                      {className: 'language-text'},
                    ),
                    'true',
                  ),
                ),
                Object(n.b)(
                  'td',
                  Object.assign({parentName: 'tr'}, {align: null}),
                  Object(n.b)(
                    'strong',
                    {parentName: 'td'},
                    'Determines if the tippy displays if the user is currently using touch input.',
                  ),
                  ' ',
                  Object(n.b)('br', null),
                  Object(n.b)('br', null),
                  ' Possible values: ',
                  Object(n.b)(
                    'code',
                    Object.assign(
                      {parentName: 'td'},
                      {className: 'language-text'},
                    ),
                    'boolean',
                  ),
                  ', ',
                  Object(n.b)(
                    'code',
                    Object.assign(
                      {parentName: 'td'},
                      {className: 'language-text'},
                    ),
                    '"hold"',
                  ),
                  ', ',
                  Object(n.b)(
                    'code',
                    Object.assign(
                      {parentName: 'td'},
                      {className: 'language-text'},
                    ),
                    '["hold", number]',
                  ),
                  '. ',
                  Object(n.b)('br', null),
                  Object(n.b)('br', null),
                  ' Use ',
                  Object(n.b)(
                    'code',
                    Object.assign(
                      {parentName: 'td'},
                      {className: 'language-text'},
                    ),
                    '"hold"',
                  ),
                  ' to use ',
                  Object(n.b)(
                    'code',
                    Object.assign(
                      {parentName: 'td'},
                      {className: 'language-text'},
                    ),
                    'touch',
                  ),
                  ' listeners instead, and e.g. ',
                  Object(n.b)(
                    'code',
                    Object.assign(
                      {parentName: 'td'},
                      {className: 'language-text'},
                    ),
                    '["hold", 500]',
                  ),
                  ' to simulate "long press" behavior.',
                ),
              ),
              Object(n.b)(
                'tr',
                {parentName: 'tbody'},
                Object(n.b)(
                  'td',
                  Object.assign({parentName: 'tr'}, {align: null}),
                  Object(n.b)(
                    'code',
                    Object.assign(
                      {parentName: 'td'},
                      {className: 'language-text'},
                    ),
                    'trigger',
                  ),
                ),
                Object(n.b)(
                  'td',
                  Object.assign({parentName: 'tr'}, {align: 'center'}),
                  Object(n.b)(
                    'code',
                    Object.assign(
                      {parentName: 'td'},
                      {className: 'language-text'},
                    ),
                    '"mouseenter focus"',
                  ),
                ),
                Object(n.b)(
                  'td',
                  Object.assign({parentName: 'tr'}, {align: null}),
                  Object(n.b)(
                    'strong',
                    {parentName: 'td'},
                    'The events (each separated by a space) which cause a tippy to show.',
                  ),
                  ' ',
                  Object(n.b)('br', null),
                  Object(n.b)('br', null),
                  ' Possible values: ',
                  Object(n.b)(
                    'code',
                    Object.assign(
                      {parentName: 'td'},
                      {className: 'language-text'},
                    ),
                    '"mouseenter"',
                  ),
                  ', ',
                  Object(n.b)(
                    'code',
                    Object.assign(
                      {parentName: 'td'},
                      {className: 'language-text'},
                    ),
                    '"focus"',
                  ),
                  ', ',
                  Object(n.b)(
                    'code',
                    Object.assign(
                      {parentName: 'td'},
                      {className: 'language-text'},
                    ),
                    '"click"',
                  ),
                  ', ',
                  Object(n.b)(
                    'code',
                    Object.assign(
                      {parentName: 'td'},
                      {className: 'language-text'},
                    ),
                    '"manual"',
                  ),
                  '. ',
                  Object(n.b)('br', null),
                  Object(n.b)('br', null),
                  ' Use ',
                  Object(n.b)(
                    'code',
                    Object.assign(
                      {parentName: 'td'},
                      {className: 'language-text'},
                    ),
                    '"manual"',
                  ),
                  ' to only trigger the tippy programmatically.',
                ),
              ),
              Object(n.b)(
                'tr',
                {parentName: 'tbody'},
                Object(n.b)(
                  'td',
                  Object.assign({parentName: 'tr'}, {align: null}),
                  Object(n.b)(
                    'code',
                    Object.assign(
                      {parentName: 'td'},
                      {className: 'language-text'},
                    ),
                    'triggerTarget',
                  ),
                ),
                Object(n.b)(
                  'td',
                  Object.assign({parentName: 'tr'}, {align: 'center'}),
                  Object(n.b)(
                    'code',
                    Object.assign(
                      {parentName: 'td'},
                      {className: 'language-text'},
                    ),
                    'null',
                  ),
                ),
                Object(n.b)(
                  'td',
                  Object.assign({parentName: 'tr'}, {align: null}),
                  Object(n.b)(
                    'strong',
                    {parentName: 'td'},
                    'Which element(s) the ',
                    Object(n.b)(
                      'code',
                      Object.assign(
                        {parentName: 'strong'},
                        {className: 'language-text'},
                      ),
                      'trigger',
                    ),
                    ' event listeners are applied to instead of the reference element.',
                  ),
                  ' ',
                  Object(n.b)('br', null),
                  Object(n.b)('br', null),
                  ' Possible values: ',
                  Object(n.b)(
                    'code',
                    Object.assign(
                      {parentName: 'td'},
                      {className: 'language-text'},
                    ),
                    'null',
                  ),
                  ', ',
                  Object(n.b)(
                    'code',
                    Object.assign(
                      {parentName: 'td'},
                      {className: 'language-text'},
                    ),
                    'Element',
                  ),
                  ', or ',
                  Object(n.b)(
                    'code',
                    Object.assign(
                      {parentName: 'td'},
                      {className: 'language-text'},
                    ),
                    'Element[]',
                  ),
                  '.',
                ),
              ),
              Object(n.b)(
                'tr',
                {parentName: 'tbody'},
                Object(n.b)(
                  'td',
                  Object.assign({parentName: 'tr'}, {align: null}),
                  Object(n.b)(
                    'code',
                    Object.assign(
                      {parentName: 'td'},
                      {className: 'language-text'},
                    ),
                    'updateDuration',
                  ),
                ),
                Object(n.b)(
                  'td',
                  Object.assign({parentName: 'tr'}, {align: 'center'}),
                  Object(n.b)(
                    'code',
                    Object.assign(
                      {parentName: 'td'},
                      {className: 'language-text'},
                    ),
                    '0',
                  ),
                ),
                Object(n.b)(
                  'td',
                  Object.assign({parentName: 'tr'}, {align: null}),
                  Object(n.b)(
                    'strong',
                    {parentName: 'td'},
                    'The transition duration between position updates of the popper element.',
                  ),
                  ' ',
                  Object(n.b)('br', null),
                  Object(n.b)('br', null),
                  ' Useful for the ',
                  Object(n.b)(
                    'code',
                    Object.assign(
                      {parentName: 'td'},
                      {className: 'language-text'},
                    ),
                    'sticky',
                  ),
                  ' and ',
                  Object(n.b)(
                    'code',
                    Object.assign(
                      {parentName: 'td'},
                      {className: 'language-text'},
                    ),
                    'flipOnUpdate',
                  ),
                  ' props.',
                ),
              ),
              Object(n.b)(
                'tr',
                {parentName: 'tbody'},
                Object(n.b)(
                  'td',
                  Object.assign({parentName: 'tr'}, {align: null}),
                  Object(n.b)(
                    'code',
                    Object.assign(
                      {parentName: 'td'},
                      {className: 'language-text'},
                    ),
                    'zIndex',
                  ),
                ),
                Object(n.b)(
                  'td',
                  Object.assign({parentName: 'tr'}, {align: 'center'}),
                  Object(n.b)(
                    'code',
                    Object.assign(
                      {parentName: 'td'},
                      {className: 'language-text'},
                    ),
                    '9999',
                  ),
                ),
                Object(n.b)(
                  'td',
                  Object.assign({parentName: 'tr'}, {align: null}),
                  Object(n.b)(
                    'strong',
                    {parentName: 'td'},
                    'Determines the ',
                    Object(n.b)(
                      'code',
                      Object.assign(
                        {parentName: 'strong'},
                        {className: 'language-text'},
                      ),
                      'z-index',
                    ),
                    ' of the tippy.',
                  ),
                ),
              ),
            ),
          ),
        );
      }
      l.isMDXComponent = !0;
    },
  },
]);
//# sourceMappingURL=component---src-pages-all-props-mdx-a849430a49178da4d866.js.map
