(window.webpackJsonp = window.webpackJsonp || []).push([
  [3],
  {
    280: function(e, a, t) {
      'use strict';
      t.r(a),
        t.d(a, '_frontmatter', function() {
          return c;
        }),
        t.d(a, 'default', function() {
          return o;
        });
      t(4), t(5), t(3), t(7), t(10), t(0);
      var n = t(51),
        s = t(183);
      var c = {},
        p = {_frontmatter: c},
        b = s.default;
      function o(e) {
        var a = e.components,
          t = (function(e, a) {
            if (null == e) return {};
            var t,
              n,
              s = {},
              c = Object.keys(e);
            for (n = 0; n < c.length; n++)
              (t = c[n]), a.indexOf(t) >= 0 || (s[t] = e[t]);
            return s;
          })(e, ['components']);
        return Object(n.b)(
          b,
          Object.assign({}, p, t, {components: a, mdxType: 'MDXLayout'}),
          Object(n.b)(
            'p',
            null,
            'Tooltip and popover UI elements may not necessarily be considered a mouse-only\nUI element. There is also keyboard and touch navigation to be aware of,\nincluding people with disabilities that rely on assistive technology such as\nscreenreaders to navigate user interfaces.',
          ),
          Object(n.b)(
            'p',
            null,
            'To ensure these users get the best possible experience, Tippy already employs\nbaked-in defaults to ensure accessibility. However, some special consideration\nshould be taken into account when using the library so you can be aware of\npotential accessibility problems that may arise.',
          ),
          Object(n.b)('h3', null, 'Use natively focusable elements'),
          Object(n.b)(
            'p',
            null,
            'Tooltips should only be applied to natively focusable elements like ',
            Object(n.b)(
              'code',
              Object.assign({parentName: 'p'}, {className: 'language-text'}),
              '<button>',
            ),
            '\nor ',
            Object(n.b)(
              'code',
              Object.assign({parentName: 'p'}, {className: 'language-text'}),
              '<input>',
            ),
            '. Some screenreader software may not announce the tooltip on an\nelement like ',
            Object(n.b)(
              'code',
              Object.assign({parentName: 'p'}, {className: 'language-text'}),
              '<div>',
            ),
            ', even if you add a ',
            Object(n.b)(
              'code',
              Object.assign({parentName: 'p'}, {className: 'language-text'}),
              'tabindex="0"',
            ),
            ' attribute on it so that\nit can receive focus.',
          ),
          Object(n.b)('h3', null, 'Mouse, keyboard, and touch input'),
          Object(n.b)(
            'p',
            null,
            'The default trigger for tooltips is ',
            Object(n.b)(
              'code',
              Object.assign({parentName: 'p'}, {className: 'language-text'}),
              '"mouseenter focus"',
            ),
            ' This means both a hover\nvia mouse and focus via keyboard navigation will trigger a tooltip. Both of\nthese events also cover touch devices via a tap, with some mobile browsers\nfiring ',
            Object(n.b)(
              'code',
              Object.assign({parentName: 'p'}, {className: 'language-text'}),
              'mouseenter',
            ),
            ' and others ',
            Object(n.b)(
              'code',
              Object.assign({parentName: 'p'}, {className: 'language-text'}),
              'focus',
            ),
            ' (or both).',
          ),
          Object(n.b)('h3', null, 'Announcing tooltip content'),
          Object(n.b)(
            'p',
            null,
            'Non-interactive tooltips give the reference element an ',
            Object(n.b)(
              'code',
              Object.assign({parentName: 'p'}, {className: 'language-text'}),
              'aria-describedby',
            ),
            '\nattribute once they show:',
          ),
          Object(n.b)(
            'div',
            {className: 'gatsby-highlight', 'data-language': 'html'},
            Object(n.b)(
              'pre',
              Object.assign({parentName: 'div'}, {className: 'language-html'}),
              Object(n.b)(
                'code',
                Object.assign(
                  {parentName: 'pre'},
                  {className: 'language-html'},
                ),
                Object(n.b)(
                  'span',
                  Object.assign({parentName: 'code'}, {className: 'token tag'}),
                  Object(n.b)(
                    'span',
                    Object.assign(
                      {parentName: 'span'},
                      {className: 'token tag'},
                    ),
                    Object(n.b)(
                      'span',
                      Object.assign(
                        {parentName: 'span'},
                        {className: 'token punctuation'},
                      ),
                      '<',
                    ),
                    'button',
                  ),
                  ' ',
                  Object(n.b)(
                    'span',
                    Object.assign(
                      {parentName: 'span'},
                      {className: 'token attr-name'},
                    ),
                    'aria-describedby',
                  ),
                  Object(n.b)(
                    'span',
                    Object.assign(
                      {parentName: 'span'},
                      {className: 'token attr-value'},
                    ),
                    Object(n.b)(
                      'span',
                      Object.assign(
                        {parentName: 'span'},
                        {className: 'token punctuation'},
                      ),
                      '=',
                    ),
                    Object(n.b)(
                      'span',
                      Object.assign(
                        {parentName: 'span'},
                        {className: 'token punctuation'},
                      ),
                      '"',
                    ),
                    'tippy-1',
                    Object(n.b)(
                      'span',
                      Object.assign(
                        {parentName: 'span'},
                        {className: 'token punctuation'},
                      ),
                      '"',
                    ),
                  ),
                  Object(n.b)(
                    'span',
                    Object.assign(
                      {parentName: 'span'},
                      {className: 'token punctuation'},
                    ),
                    '>',
                  ),
                ),
                'Text',
                Object(n.b)(
                  'span',
                  Object.assign({parentName: 'code'}, {className: 'token tag'}),
                  Object(n.b)(
                    'span',
                    Object.assign(
                      {parentName: 'span'},
                      {className: 'token tag'},
                    ),
                    Object(n.b)(
                      'span',
                      Object.assign(
                        {parentName: 'span'},
                        {className: 'token punctuation'},
                      ),
                      '</',
                    ),
                    'button',
                  ),
                  Object(n.b)(
                    'span',
                    Object.assign(
                      {parentName: 'span'},
                      {className: 'token punctuation'},
                    ),
                    '>',
                  ),
                ),
                '\n',
                Object(n.b)(
                  'span',
                  Object.assign({parentName: 'code'}, {className: 'token tag'}),
                  Object(n.b)(
                    'span',
                    Object.assign(
                      {parentName: 'span'},
                      {className: 'token tag'},
                    ),
                    Object(n.b)(
                      'span',
                      Object.assign(
                        {parentName: 'span'},
                        {className: 'token punctuation'},
                      ),
                      '<',
                    ),
                    'div',
                  ),
                  ' ',
                  Object(n.b)(
                    'span',
                    Object.assign(
                      {parentName: 'span'},
                      {className: 'token attr-name'},
                    ),
                    'id',
                  ),
                  Object(n.b)(
                    'span',
                    Object.assign(
                      {parentName: 'span'},
                      {className: 'token attr-value'},
                    ),
                    Object(n.b)(
                      'span',
                      Object.assign(
                        {parentName: 'span'},
                        {className: 'token punctuation'},
                      ),
                      '=',
                    ),
                    Object(n.b)(
                      'span',
                      Object.assign(
                        {parentName: 'span'},
                        {className: 'token punctuation'},
                      ),
                      '"',
                    ),
                    'tippy-1',
                    Object(n.b)(
                      'span',
                      Object.assign(
                        {parentName: 'span'},
                        {className: 'token punctuation'},
                      ),
                      '"',
                    ),
                  ),
                  ' ',
                  Object(n.b)(
                    'span',
                    Object.assign(
                      {parentName: 'span'},
                      {className: 'token attr-name'},
                    ),
                    'role',
                  ),
                  Object(n.b)(
                    'span',
                    Object.assign(
                      {parentName: 'span'},
                      {className: 'token attr-value'},
                    ),
                    Object(n.b)(
                      'span',
                      Object.assign(
                        {parentName: 'span'},
                        {className: 'token punctuation'},
                      ),
                      '=',
                    ),
                    Object(n.b)(
                      'span',
                      Object.assign(
                        {parentName: 'span'},
                        {className: 'token punctuation'},
                      ),
                      '"',
                    ),
                    'tooltip',
                    Object(n.b)(
                      'span',
                      Object.assign(
                        {parentName: 'span'},
                        {className: 'token punctuation'},
                      ),
                      '"',
                    ),
                  ),
                  ' ',
                  Object(n.b)(
                    'span',
                    Object.assign(
                      {parentName: 'span'},
                      {className: 'token attr-name'},
                    ),
                    'class',
                  ),
                  Object(n.b)(
                    'span',
                    Object.assign(
                      {parentName: 'span'},
                      {className: 'token attr-value'},
                    ),
                    Object(n.b)(
                      'span',
                      Object.assign(
                        {parentName: 'span'},
                        {className: 'token punctuation'},
                      ),
                      '=',
                    ),
                    Object(n.b)(
                      'span',
                      Object.assign(
                        {parentName: 'span'},
                        {className: 'token punctuation'},
                      ),
                      '"',
                    ),
                    'tippy-popper',
                    Object(n.b)(
                      'span',
                      Object.assign(
                        {parentName: 'span'},
                        {className: 'token punctuation'},
                      ),
                      '"',
                    ),
                  ),
                  Object(n.b)(
                    'span',
                    Object.assign(
                      {parentName: 'span'},
                      {className: 'token punctuation'},
                    ),
                    '>',
                  ),
                ),
                '\n  ',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token comment'},
                  ),
                  '\x3c!-- inner elements --\x3e',
                ),
                '\n',
                Object(n.b)(
                  'span',
                  Object.assign({parentName: 'code'}, {className: 'token tag'}),
                  Object(n.b)(
                    'span',
                    Object.assign(
                      {parentName: 'span'},
                      {className: 'token tag'},
                    ),
                    Object(n.b)(
                      'span',
                      Object.assign(
                        {parentName: 'span'},
                        {className: 'token punctuation'},
                      ),
                      '</',
                    ),
                    'div',
                  ),
                  Object(n.b)(
                    'span',
                    Object.assign(
                      {parentName: 'span'},
                      {className: 'token punctuation'},
                    ),
                    '>',
                  ),
                ),
              ),
            ),
          ),
          Object(n.b)(
            'p',
            null,
            "This allows screenreader software to announce the tooltip content describing the\nreference element once it's in focus.",
          ),
          Object(n.b)('h3', null, 'Interactivity'),
          Object(n.b)(
            'p',
            null,
            'Tippy uses two techniques to ensure interactive popovers are accessible:',
          ),
          Object(n.b)(
            'ul',
            null,
            Object(n.b)(
              'li',
              {parentName: 'ul'},
              Object(n.b)(
                'code',
                Object.assign({parentName: 'li'}, {className: 'language-text'}),
                'aria-expanded',
              ),
              ' attribute',
            ),
            Object(n.b)(
              'li',
              {parentName: 'ul'},
              Object(n.b)(
                'code',
                Object.assign({parentName: 'li'}, {className: 'language-text'}),
                'appendTo: "parent"',
              ),
              ' order',
            ),
          ),
          Object(n.b)(
            'p',
            null,
            'This means once the reference element has focus, the assistive technology will\nlet the user know it has an expandable popover attached to it.',
          ),
          Object(n.b)(
            'p',
            null,
            'Once they open it, elements within the tippy can be tabbed to immediately once\nfocus has left the reference element. This relies on there being no more\nfocusable sibling elements after the reference element itself.',
          ),
          Object(n.b)('p', null, 'Before opening the popover:'),
          Object(n.b)(
            'div',
            {className: 'gatsby-highlight', 'data-language': 'html'},
            Object(n.b)(
              'pre',
              Object.assign({parentName: 'div'}, {className: 'language-html'}),
              Object(n.b)(
                'code',
                Object.assign(
                  {parentName: 'pre'},
                  {className: 'language-html'},
                ),
                Object(n.b)(
                  'span',
                  Object.assign({parentName: 'code'}, {className: 'token tag'}),
                  Object(n.b)(
                    'span',
                    Object.assign(
                      {parentName: 'span'},
                      {className: 'token tag'},
                    ),
                    Object(n.b)(
                      'span',
                      Object.assign(
                        {parentName: 'span'},
                        {className: 'token punctuation'},
                      ),
                      '<',
                    ),
                    'div',
                  ),
                  ' ',
                  Object(n.b)(
                    'span',
                    Object.assign(
                      {parentName: 'span'},
                      {className: 'token attr-name'},
                    ),
                    'id',
                  ),
                  Object(n.b)(
                    'span',
                    Object.assign(
                      {parentName: 'span'},
                      {className: 'token attr-value'},
                    ),
                    Object(n.b)(
                      'span',
                      Object.assign(
                        {parentName: 'span'},
                        {className: 'token punctuation'},
                      ),
                      '=',
                    ),
                    Object(n.b)(
                      'span',
                      Object.assign(
                        {parentName: 'span'},
                        {className: 'token punctuation'},
                      ),
                      '"',
                    ),
                    'parent',
                    Object(n.b)(
                      'span',
                      Object.assign(
                        {parentName: 'span'},
                        {className: 'token punctuation'},
                      ),
                      '"',
                    ),
                  ),
                  Object(n.b)(
                    'span',
                    Object.assign(
                      {parentName: 'span'},
                      {className: 'token punctuation'},
                    ),
                    '>',
                  ),
                ),
                '\n  ',
                Object(n.b)(
                  'span',
                  Object.assign({parentName: 'code'}, {className: 'token tag'}),
                  Object(n.b)(
                    'span',
                    Object.assign(
                      {parentName: 'span'},
                      {className: 'token tag'},
                    ),
                    Object(n.b)(
                      'span',
                      Object.assign(
                        {parentName: 'span'},
                        {className: 'token punctuation'},
                      ),
                      '<',
                    ),
                    'button',
                  ),
                  ' ',
                  Object(n.b)(
                    'span',
                    Object.assign(
                      {parentName: 'span'},
                      {className: 'token attr-name'},
                    ),
                    'aria-expanded',
                  ),
                  Object(n.b)(
                    'span',
                    Object.assign(
                      {parentName: 'span'},
                      {className: 'token attr-value'},
                    ),
                    Object(n.b)(
                      'span',
                      Object.assign(
                        {parentName: 'span'},
                        {className: 'token punctuation'},
                      ),
                      '=',
                    ),
                    Object(n.b)(
                      'span',
                      Object.assign(
                        {parentName: 'span'},
                        {className: 'token punctuation'},
                      ),
                      '"',
                    ),
                    'false',
                    Object(n.b)(
                      'span',
                      Object.assign(
                        {parentName: 'span'},
                        {className: 'token punctuation'},
                      ),
                      '"',
                    ),
                  ),
                  Object(n.b)(
                    'span',
                    Object.assign(
                      {parentName: 'span'},
                      {className: 'token punctuation'},
                    ),
                    '>',
                  ),
                ),
                'Text',
                Object(n.b)(
                  'span',
                  Object.assign({parentName: 'code'}, {className: 'token tag'}),
                  Object(n.b)(
                    'span',
                    Object.assign(
                      {parentName: 'span'},
                      {className: 'token tag'},
                    ),
                    Object(n.b)(
                      'span',
                      Object.assign(
                        {parentName: 'span'},
                        {className: 'token punctuation'},
                      ),
                      '</',
                    ),
                    'button',
                  ),
                  Object(n.b)(
                    'span',
                    Object.assign(
                      {parentName: 'span'},
                      {className: 'token punctuation'},
                    ),
                    '>',
                  ),
                ),
                '\n',
                Object(n.b)(
                  'span',
                  Object.assign({parentName: 'code'}, {className: 'token tag'}),
                  Object(n.b)(
                    'span',
                    Object.assign(
                      {parentName: 'span'},
                      {className: 'token tag'},
                    ),
                    Object(n.b)(
                      'span',
                      Object.assign(
                        {parentName: 'span'},
                        {className: 'token punctuation'},
                      ),
                      '</',
                    ),
                    'div',
                  ),
                  Object(n.b)(
                    'span',
                    Object.assign(
                      {parentName: 'span'},
                      {className: 'token punctuation'},
                    ),
                    '>',
                  ),
                ),
              ),
            ),
          ),
          Object(n.b)('p', null, 'After opening the popover:'),
          Object(n.b)(
            'div',
            {className: 'gatsby-highlight', 'data-language': 'html'},
            Object(n.b)(
              'pre',
              Object.assign({parentName: 'div'}, {className: 'language-html'}),
              Object(n.b)(
                'code',
                Object.assign(
                  {parentName: 'pre'},
                  {className: 'language-html'},
                ),
                Object(n.b)(
                  'span',
                  Object.assign({parentName: 'code'}, {className: 'token tag'}),
                  Object(n.b)(
                    'span',
                    Object.assign(
                      {parentName: 'span'},
                      {className: 'token tag'},
                    ),
                    Object(n.b)(
                      'span',
                      Object.assign(
                        {parentName: 'span'},
                        {className: 'token punctuation'},
                      ),
                      '<',
                    ),
                    'div',
                  ),
                  ' ',
                  Object(n.b)(
                    'span',
                    Object.assign(
                      {parentName: 'span'},
                      {className: 'token attr-name'},
                    ),
                    'id',
                  ),
                  Object(n.b)(
                    'span',
                    Object.assign(
                      {parentName: 'span'},
                      {className: 'token attr-value'},
                    ),
                    Object(n.b)(
                      'span',
                      Object.assign(
                        {parentName: 'span'},
                        {className: 'token punctuation'},
                      ),
                      '=',
                    ),
                    Object(n.b)(
                      'span',
                      Object.assign(
                        {parentName: 'span'},
                        {className: 'token punctuation'},
                      ),
                      '"',
                    ),
                    'parent',
                    Object(n.b)(
                      'span',
                      Object.assign(
                        {parentName: 'span'},
                        {className: 'token punctuation'},
                      ),
                      '"',
                    ),
                  ),
                  Object(n.b)(
                    'span',
                    Object.assign(
                      {parentName: 'span'},
                      {className: 'token punctuation'},
                    ),
                    '>',
                  ),
                ),
                '\n  ',
                Object(n.b)(
                  'span',
                  Object.assign({parentName: 'code'}, {className: 'token tag'}),
                  Object(n.b)(
                    'span',
                    Object.assign(
                      {parentName: 'span'},
                      {className: 'token tag'},
                    ),
                    Object(n.b)(
                      'span',
                      Object.assign(
                        {parentName: 'span'},
                        {className: 'token punctuation'},
                      ),
                      '<',
                    ),
                    'button',
                  ),
                  ' ',
                  Object(n.b)(
                    'span',
                    Object.assign(
                      {parentName: 'span'},
                      {className: 'token attr-name'},
                    ),
                    'aria-expanded',
                  ),
                  Object(n.b)(
                    'span',
                    Object.assign(
                      {parentName: 'span'},
                      {className: 'token attr-value'},
                    ),
                    Object(n.b)(
                      'span',
                      Object.assign(
                        {parentName: 'span'},
                        {className: 'token punctuation'},
                      ),
                      '=',
                    ),
                    Object(n.b)(
                      'span',
                      Object.assign(
                        {parentName: 'span'},
                        {className: 'token punctuation'},
                      ),
                      '"',
                    ),
                    'true',
                    Object(n.b)(
                      'span',
                      Object.assign(
                        {parentName: 'span'},
                        {className: 'token punctuation'},
                      ),
                      '"',
                    ),
                  ),
                  Object(n.b)(
                    'span',
                    Object.assign(
                      {parentName: 'span'},
                      {className: 'token punctuation'},
                    ),
                    '>',
                  ),
                ),
                'Text',
                Object(n.b)(
                  'span',
                  Object.assign({parentName: 'code'}, {className: 'token tag'}),
                  Object(n.b)(
                    'span',
                    Object.assign(
                      {parentName: 'span'},
                      {className: 'token tag'},
                    ),
                    Object(n.b)(
                      'span',
                      Object.assign(
                        {parentName: 'span'},
                        {className: 'token punctuation'},
                      ),
                      '</',
                    ),
                    'button',
                  ),
                  Object(n.b)(
                    'span',
                    Object.assign(
                      {parentName: 'span'},
                      {className: 'token punctuation'},
                    ),
                    '>',
                  ),
                ),
                '\n  ',
                Object(n.b)(
                  'span',
                  Object.assign({parentName: 'code'}, {className: 'token tag'}),
                  Object(n.b)(
                    'span',
                    Object.assign(
                      {parentName: 'span'},
                      {className: 'token tag'},
                    ),
                    Object(n.b)(
                      'span',
                      Object.assign(
                        {parentName: 'span'},
                        {className: 'token punctuation'},
                      ),
                      '<',
                    ),
                    'div',
                  ),
                  ' ',
                  Object(n.b)(
                    'span',
                    Object.assign(
                      {parentName: 'span'},
                      {className: 'token attr-name'},
                    ),
                    'id',
                  ),
                  Object(n.b)(
                    'span',
                    Object.assign(
                      {parentName: 'span'},
                      {className: 'token attr-value'},
                    ),
                    Object(n.b)(
                      'span',
                      Object.assign(
                        {parentName: 'span'},
                        {className: 'token punctuation'},
                      ),
                      '=',
                    ),
                    Object(n.b)(
                      'span',
                      Object.assign(
                        {parentName: 'span'},
                        {className: 'token punctuation'},
                      ),
                      '"',
                    ),
                    'tippy-1',
                    Object(n.b)(
                      'span',
                      Object.assign(
                        {parentName: 'span'},
                        {className: 'token punctuation'},
                      ),
                      '"',
                    ),
                  ),
                  ' ',
                  Object(n.b)(
                    'span',
                    Object.assign(
                      {parentName: 'span'},
                      {className: 'token attr-name'},
                    ),
                    'role',
                  ),
                  Object(n.b)(
                    'span',
                    Object.assign(
                      {parentName: 'span'},
                      {className: 'token attr-value'},
                    ),
                    Object(n.b)(
                      'span',
                      Object.assign(
                        {parentName: 'span'},
                        {className: 'token punctuation'},
                      ),
                      '=',
                    ),
                    Object(n.b)(
                      'span',
                      Object.assign(
                        {parentName: 'span'},
                        {className: 'token punctuation'},
                      ),
                      '"',
                    ),
                    'tooltip',
                    Object(n.b)(
                      'span',
                      Object.assign(
                        {parentName: 'span'},
                        {className: 'token punctuation'},
                      ),
                      '"',
                    ),
                  ),
                  ' ',
                  Object(n.b)(
                    'span',
                    Object.assign(
                      {parentName: 'span'},
                      {className: 'token attr-name'},
                    ),
                    'class',
                  ),
                  Object(n.b)(
                    'span',
                    Object.assign(
                      {parentName: 'span'},
                      {className: 'token attr-value'},
                    ),
                    Object(n.b)(
                      'span',
                      Object.assign(
                        {parentName: 'span'},
                        {className: 'token punctuation'},
                      ),
                      '=',
                    ),
                    Object(n.b)(
                      'span',
                      Object.assign(
                        {parentName: 'span'},
                        {className: 'token punctuation'},
                      ),
                      '"',
                    ),
                    'tippy-popper',
                    Object(n.b)(
                      'span',
                      Object.assign(
                        {parentName: 'span'},
                        {className: 'token punctuation'},
                      ),
                      '"',
                    ),
                  ),
                  Object(n.b)(
                    'span',
                    Object.assign(
                      {parentName: 'span'},
                      {className: 'token punctuation'},
                    ),
                    '>',
                  ),
                ),
                '\n    ',
                Object(n.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token comment'},
                  ),
                  '\x3c!-- inner elements, with focusable content --\x3e',
                ),
                '\n  ',
                Object(n.b)(
                  'span',
                  Object.assign({parentName: 'code'}, {className: 'token tag'}),
                  Object(n.b)(
                    'span',
                    Object.assign(
                      {parentName: 'span'},
                      {className: 'token tag'},
                    ),
                    Object(n.b)(
                      'span',
                      Object.assign(
                        {parentName: 'span'},
                        {className: 'token punctuation'},
                      ),
                      '</',
                    ),
                    'div',
                  ),
                  Object(n.b)(
                    'span',
                    Object.assign(
                      {parentName: 'span'},
                      {className: 'token punctuation'},
                    ),
                    '>',
                  ),
                ),
                '\n',
                Object(n.b)(
                  'span',
                  Object.assign({parentName: 'code'}, {className: 'token tag'}),
                  Object(n.b)(
                    'span',
                    Object.assign(
                      {parentName: 'span'},
                      {className: 'token tag'},
                    ),
                    Object(n.b)(
                      'span',
                      Object.assign(
                        {parentName: 'span'},
                        {className: 'token punctuation'},
                      ),
                      '</',
                    ),
                    'div',
                  ),
                  Object(n.b)(
                    'span',
                    Object.assign(
                      {parentName: 'span'},
                      {className: 'token punctuation'},
                    ),
                    '>',
                  ),
                ),
              ),
            ),
          ),
          Object(n.b)(
            'p',
            null,
            'You should wrap the reference element in its own parent element (',
            Object(n.b)(
              'code',
              Object.assign({parentName: 'p'}, {className: 'language-text'}),
              '<div>',
            ),
            ' or\n',
            Object(n.b)(
              'code',
              Object.assign({parentName: 'p'}, {className: 'language-text'}),
              '<span>',
            ),
            ") if it's not the only focusable sibling element.",
          ),
          Object(n.b)('h4', null, 'Clipping issues'),
          Object(n.b)(
            'p',
            null,
            "Sometimes, this behavior won't work for your app due to clipping issues. In this\ncase, you need to specify a custom ",
            Object(n.b)(
              'code',
              Object.assign({parentName: 'p'}, {className: 'language-text'}),
              'appendTo',
            ),
            ' element outside of the parent node\ncontext and use a focus management solution to handle keyboard navigation.',
          ),
        );
      }
      o.isMDXComponent = !0;
    },
  },
]);
//# sourceMappingURL=component---src-pages-accessibility-mdx-ed2a3ca1b3aaa47a828b.js.map
