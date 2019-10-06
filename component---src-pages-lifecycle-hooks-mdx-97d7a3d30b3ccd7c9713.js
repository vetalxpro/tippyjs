(window.webpackJsonp = window.webpackJsonp || []).push([
  [15],
  {
    290: function(e, a, n) {
      'use strict';
      n.r(a),
        n.d(a, '_frontmatter', function() {
          return c;
        }),
        n.d(a, 'default', function() {
          return p;
        });
      n(4), n(5), n(3), n(7), n(10), n(0);
      var t = n(51),
        s = n(183);
      var c = {},
        b = {_frontmatter: c},
        o = s.default;
      function p(e) {
        var a = e.components,
          n = (function(e, a) {
            if (null == e) return {};
            var n,
              t,
              s = {},
              c = Object.keys(e);
            for (t = 0; t < c.length; t++)
              (n = c[t]), a.indexOf(n) >= 0 || (s[n] = e[n]);
            return s;
          })(e, ['components']);
        return Object(t.b)(
          o,
          Object.assign({}, b, n, {components: a, mdxType: 'MDXLayout'}),
          Object(t.b)(
            'p',
            null,
            "Lifecycle hooks provide a way to run code in response to a certain part of a\ntippy's lifecycle. They are listed here in the usual order in which they occur.\nEvery lifecycle hook takes the ",
            Object(t.b)(
              'a',
              Object.assign(
                {parentName: 'p'},
                {href: '/tippyjs/tippy-instance/'},
              ),
              Object(t.b)(
                'code',
                Object.assign({parentName: 'a'}, {className: 'language-text'}),
                'instance',
              ),
            ),
            ' as its first\nargument.',
          ),
          Object(t.b)(
            'p',
            null,
            "These functions are how you hook into a tippy instance's lifecycle to add\nfunctionality via a ",
            Object(t.b)(
              'a',
              Object.assign({parentName: 'p'}, {href: '/tippyjs/plugins/'}),
              'plugin',
            ),
            '.',
          ),
          Object(t.b)('h4', null, 'onCreate'),
          Object(t.b)(
            'p',
            null,
            'Executed a single time when a tippy is first created.',
          ),
          Object(t.b)(
            'div',
            {className: 'gatsby-highlight', 'data-language': 'js'},
            Object(t.b)(
              'pre',
              Object.assign({parentName: 'div'}, {className: 'language-js'}),
              Object(t.b)(
                'code',
                Object.assign({parentName: 'pre'}, {className: 'language-js'}),
                Object(t.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token function'},
                  ),
                  'tippy',
                ),
                Object(t.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token block'},
                  ),
                  '(',
                ),
                'reference',
                Object(t.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token punctuation'},
                  ),
                  ',',
                ),
                ' ',
                Object(t.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token block'},
                  ),
                  '{',
                ),
                '\n  ',
                Object(t.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token function'},
                  ),
                  'onCreate',
                ),
                Object(t.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token block'},
                  ),
                  '(',
                ),
                Object(t.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token parameter'},
                  ),
                  'instance',
                ),
                Object(t.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token block'},
                  ),
                  ')',
                ),
                ' ',
                Object(t.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token block'},
                  ),
                  '{',
                ),
                '\n    ',
                Object(t.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token comment'},
                  ),
                  '// ...',
                ),
                '\n  ',
                Object(t.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token block'},
                  ),
                  '}',
                ),
                Object(t.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token punctuation'},
                  ),
                  ',',
                ),
                '\n',
                Object(t.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token block'},
                  ),
                  '}',
                ),
                Object(t.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token block'},
                  ),
                  ')',
                ),
                Object(t.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token punctuation'},
                  ),
                  ';',
                ),
              ),
            ),
          ),
          Object(t.b)('h4', null, 'onTrigger'),
          Object(t.b)(
            'p',
            null,
            'Executed when a tippy is triggered by a DOM event (e.g. mouseenter, focus,\nclick), but before it starts to show.',
          ),
          Object(t.b)(
            'div',
            {className: 'gatsby-highlight', 'data-language': 'js'},
            Object(t.b)(
              'pre',
              Object.assign({parentName: 'div'}, {className: 'language-js'}),
              Object(t.b)(
                'code',
                Object.assign({parentName: 'pre'}, {className: 'language-js'}),
                Object(t.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token function'},
                  ),
                  'tippy',
                ),
                Object(t.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token block'},
                  ),
                  '(',
                ),
                'reference',
                Object(t.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token punctuation'},
                  ),
                  ',',
                ),
                ' ',
                Object(t.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token block'},
                  ),
                  '{',
                ),
                '\n  ',
                Object(t.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token function'},
                  ),
                  'onTrigger',
                ),
                Object(t.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token block'},
                  ),
                  '(',
                ),
                Object(t.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token parameter'},
                  ),
                  'instance',
                  Object(t.b)(
                    'span',
                    Object.assign(
                      {parentName: 'span'},
                      {className: 'token punctuation'},
                    ),
                    ',',
                  ),
                  ' event',
                ),
                Object(t.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token block'},
                  ),
                  ')',
                ),
                ' ',
                Object(t.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token block'},
                  ),
                  '{',
                ),
                '\n    ',
                Object(t.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token comment'},
                  ),
                  '// ...',
                ),
                '\n  ',
                Object(t.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token block'},
                  ),
                  '}',
                ),
                Object(t.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token punctuation'},
                  ),
                  ',',
                ),
                '\n',
                Object(t.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token block'},
                  ),
                  '}',
                ),
                Object(t.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token block'},
                  ),
                  ')',
                ),
                Object(t.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token punctuation'},
                  ),
                  ';',
                ),
              ),
            ),
          ),
          Object(t.b)('h4', null, 'onShow'),
          Object(t.b)(
            'p',
            null,
            'Executed when a tippy begins to show, but before it gets mounted to the DOM.',
          ),
          Object(t.b)(
            'p',
            null,
            'You can optionally return ',
            Object(t.b)(
              'code',
              Object.assign({parentName: 'p'}, {className: 'language-text'}),
              'false',
            ),
            ' to cancel the tippy from showing.',
          ),
          Object(t.b)(
            'div',
            {className: 'gatsby-highlight', 'data-language': 'js'},
            Object(t.b)(
              'pre',
              Object.assign({parentName: 'div'}, {className: 'language-js'}),
              Object(t.b)(
                'code',
                Object.assign({parentName: 'pre'}, {className: 'language-js'}),
                Object(t.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token function'},
                  ),
                  'tippy',
                ),
                Object(t.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token block'},
                  ),
                  '(',
                ),
                'reference',
                Object(t.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token punctuation'},
                  ),
                  ',',
                ),
                ' ',
                Object(t.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token block'},
                  ),
                  '{',
                ),
                '\n  ',
                Object(t.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token function'},
                  ),
                  'onShow',
                ),
                Object(t.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token block'},
                  ),
                  '(',
                ),
                Object(t.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token parameter'},
                  ),
                  'instance',
                ),
                Object(t.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token block'},
                  ),
                  ')',
                ),
                ' ',
                Object(t.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token block'},
                  ),
                  '{',
                ),
                '\n    ',
                Object(t.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token comment'},
                  ),
                  '// ...',
                ),
                '\n    ',
                Object(t.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token control keyword'},
                  ),
                  'return',
                ),
                ' ',
                Object(t.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token boolean'},
                  ),
                  'false',
                ),
                Object(t.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token punctuation'},
                  ),
                  ';',
                ),
                ' ',
                Object(t.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token comment'},
                  ),
                  '// cancels it',
                ),
                '\n  ',
                Object(t.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token block'},
                  ),
                  '}',
                ),
                Object(t.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token punctuation'},
                  ),
                  ',',
                ),
                '\n',
                Object(t.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token block'},
                  ),
                  '}',
                ),
                Object(t.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token block'},
                  ),
                  ')',
                ),
                Object(t.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token punctuation'},
                  ),
                  ';',
                ),
              ),
            ),
          ),
          Object(t.b)('h4', null, 'onMount'),
          Object(t.b)(
            'p',
            null,
            'Executed when the tippy element is mounted to the DOM.',
          ),
          Object(t.b)(
            'div',
            {className: 'gatsby-highlight', 'data-language': 'js'},
            Object(t.b)(
              'pre',
              Object.assign({parentName: 'div'}, {className: 'language-js'}),
              Object(t.b)(
                'code',
                Object.assign({parentName: 'pre'}, {className: 'language-js'}),
                Object(t.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token function'},
                  ),
                  'tippy',
                ),
                Object(t.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token block'},
                  ),
                  '(',
                ),
                'reference',
                Object(t.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token punctuation'},
                  ),
                  ',',
                ),
                ' ',
                Object(t.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token block'},
                  ),
                  '{',
                ),
                '\n  ',
                Object(t.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token function'},
                  ),
                  'onMount',
                ),
                Object(t.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token block'},
                  ),
                  '(',
                ),
                Object(t.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token parameter'},
                  ),
                  'instance',
                ),
                Object(t.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token block'},
                  ),
                  ')',
                ),
                ' ',
                Object(t.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token block'},
                  ),
                  '{',
                ),
                '\n    ',
                Object(t.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token comment'},
                  ),
                  '// ...',
                ),
                '\n  ',
                Object(t.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token block'},
                  ),
                  '}',
                ),
                Object(t.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token punctuation'},
                  ),
                  ',',
                ),
                '\n',
                Object(t.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token block'},
                  ),
                  '}',
                ),
                Object(t.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token block'},
                  ),
                  ')',
                ),
                Object(t.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token punctuation'},
                  ),
                  ';',
                ),
              ),
            ),
          ),
          Object(t.b)('h4', null, 'onShown'),
          Object(t.b)(
            'p',
            null,
            'Executed when a tippy has fully transitioned in.',
          ),
          Object(t.b)(
            'div',
            {className: 'gatsby-highlight', 'data-language': 'js'},
            Object(t.b)(
              'pre',
              Object.assign({parentName: 'div'}, {className: 'language-js'}),
              Object(t.b)(
                'code',
                Object.assign({parentName: 'pre'}, {className: 'language-js'}),
                Object(t.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token function'},
                  ),
                  'tippy',
                ),
                Object(t.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token block'},
                  ),
                  '(',
                ),
                'reference',
                Object(t.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token punctuation'},
                  ),
                  ',',
                ),
                ' ',
                Object(t.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token block'},
                  ),
                  '{',
                ),
                '\n  ',
                Object(t.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token function'},
                  ),
                  'onShown',
                ),
                Object(t.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token block'},
                  ),
                  '(',
                ),
                Object(t.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token parameter'},
                  ),
                  'instance',
                ),
                Object(t.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token block'},
                  ),
                  ')',
                ),
                ' ',
                Object(t.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token block'},
                  ),
                  '{',
                ),
                '\n    ',
                Object(t.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token comment'},
                  ),
                  '// ...',
                ),
                '\n  ',
                Object(t.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token block'},
                  ),
                  '}',
                ),
                Object(t.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token punctuation'},
                  ),
                  ',',
                ),
                '\n',
                Object(t.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token block'},
                  ),
                  '}',
                ),
                Object(t.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token block'},
                  ),
                  ')',
                ),
                Object(t.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token punctuation'},
                  ),
                  ';',
                ),
              ),
            ),
          ),
          Object(t.b)('h4', null, 'onUntrigger'),
          Object(t.b)(
            'p',
            null,
            'Executed when a tippy was untriggered by a DOM event (e.g. mouseleave, blur,\nclick), but before it starts to hide.',
          ),
          Object(t.b)(
            'div',
            {className: 'gatsby-highlight', 'data-language': 'js'},
            Object(t.b)(
              'pre',
              Object.assign({parentName: 'div'}, {className: 'language-js'}),
              Object(t.b)(
                'code',
                Object.assign({parentName: 'pre'}, {className: 'language-js'}),
                Object(t.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token function'},
                  ),
                  'tippy',
                ),
                Object(t.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token block'},
                  ),
                  '(',
                ),
                'reference',
                Object(t.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token punctuation'},
                  ),
                  ',',
                ),
                ' ',
                Object(t.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token block'},
                  ),
                  '{',
                ),
                '\n  ',
                Object(t.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token function'},
                  ),
                  'onUntrigger',
                ),
                Object(t.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token block'},
                  ),
                  '(',
                ),
                Object(t.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token parameter'},
                  ),
                  'instance',
                  Object(t.b)(
                    'span',
                    Object.assign(
                      {parentName: 'span'},
                      {className: 'token punctuation'},
                    ),
                    ',',
                  ),
                  ' event',
                ),
                Object(t.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token block'},
                  ),
                  ')',
                ),
                ' ',
                Object(t.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token block'},
                  ),
                  '{',
                ),
                '\n    ',
                Object(t.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token comment'},
                  ),
                  '// ...',
                ),
                '\n  ',
                Object(t.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token block'},
                  ),
                  '}',
                ),
                Object(t.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token punctuation'},
                  ),
                  ',',
                ),
                '\n',
                Object(t.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token block'},
                  ),
                  '}',
                ),
                Object(t.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token block'},
                  ),
                  ')',
                ),
                Object(t.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token punctuation'},
                  ),
                  ';',
                ),
              ),
            ),
          ),
          Object(t.b)('h4', null, 'onHide'),
          Object(t.b)(
            'p',
            null,
            'Executed when a tippy begins to hide and transition out.',
          ),
          Object(t.b)(
            'p',
            null,
            'You can optionally return ',
            Object(t.b)(
              'code',
              Object.assign({parentName: 'p'}, {className: 'language-text'}),
              'false',
            ),
            ' to cancel the tippy from hiding.',
          ),
          Object(t.b)(
            'div',
            {className: 'gatsby-highlight', 'data-language': 'js'},
            Object(t.b)(
              'pre',
              Object.assign({parentName: 'div'}, {className: 'language-js'}),
              Object(t.b)(
                'code',
                Object.assign({parentName: 'pre'}, {className: 'language-js'}),
                Object(t.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token function'},
                  ),
                  'tippy',
                ),
                Object(t.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token block'},
                  ),
                  '(',
                ),
                'reference',
                Object(t.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token punctuation'},
                  ),
                  ',',
                ),
                ' ',
                Object(t.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token block'},
                  ),
                  '{',
                ),
                '\n  ',
                Object(t.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token function'},
                  ),
                  'onHide',
                ),
                Object(t.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token block'},
                  ),
                  '(',
                ),
                Object(t.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token parameter'},
                  ),
                  'instance',
                ),
                Object(t.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token block'},
                  ),
                  ')',
                ),
                ' ',
                Object(t.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token block'},
                  ),
                  '{',
                ),
                '\n    ',
                Object(t.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token comment'},
                  ),
                  '// ...',
                ),
                '\n    ',
                Object(t.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token control keyword'},
                  ),
                  'return',
                ),
                ' ',
                Object(t.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token boolean'},
                  ),
                  'false',
                ),
                Object(t.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token punctuation'},
                  ),
                  ';',
                ),
                ' ',
                Object(t.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token comment'},
                  ),
                  '// cancels it',
                ),
                '\n  ',
                Object(t.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token block'},
                  ),
                  '}',
                ),
                Object(t.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token punctuation'},
                  ),
                  ',',
                ),
                '\n',
                Object(t.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token block'},
                  ),
                  '}',
                ),
                Object(t.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token block'},
                  ),
                  ')',
                ),
                Object(t.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token punctuation'},
                  ),
                  ';',
                ),
              ),
            ),
          ),
          Object(t.b)('h4', null, 'onHidden'),
          Object(t.b)(
            'p',
            null,
            'Executed when a tippy has fully transitioned out and unmounted from the DOM.',
          ),
          Object(t.b)(
            'div',
            {className: 'gatsby-highlight', 'data-language': 'js'},
            Object(t.b)(
              'pre',
              Object.assign({parentName: 'div'}, {className: 'language-js'}),
              Object(t.b)(
                'code',
                Object.assign({parentName: 'pre'}, {className: 'language-js'}),
                Object(t.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token function'},
                  ),
                  'tippy',
                ),
                Object(t.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token block'},
                  ),
                  '(',
                ),
                'reference',
                Object(t.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token punctuation'},
                  ),
                  ',',
                ),
                ' ',
                Object(t.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token block'},
                  ),
                  '{',
                ),
                '\n  ',
                Object(t.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token function'},
                  ),
                  'onHidden',
                ),
                Object(t.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token block'},
                  ),
                  '(',
                ),
                Object(t.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token parameter'},
                  ),
                  'instance',
                ),
                Object(t.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token block'},
                  ),
                  ')',
                ),
                ' ',
                Object(t.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token block'},
                  ),
                  '{',
                ),
                '\n    ',
                Object(t.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token comment'},
                  ),
                  '// ...',
                ),
                '\n  ',
                Object(t.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token block'},
                  ),
                  '}',
                ),
                Object(t.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token punctuation'},
                  ),
                  ',',
                ),
                '\n',
                Object(t.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token block'},
                  ),
                  '}',
                ),
                Object(t.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token block'},
                  ),
                  ')',
                ),
                Object(t.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token punctuation'},
                  ),
                  ';',
                ),
              ),
            ),
          ),
          Object(t.b)('h4', null, 'onBeforeUpdate'),
          Object(t.b)(
            'p',
            null,
            "Executed before a tippy's props are updated (via ",
            Object(t.b)(
              'code',
              Object.assign({parentName: 'p'}, {className: 'language-text'}),
              '.setContent()',
            ),
            ' or\n',
            Object(t.b)(
              'code',
              Object.assign({parentName: 'p'}, {className: 'language-text'}),
              '.setProps()',
            ),
            ').',
          ),
          Object(t.b)(
            'div',
            {className: 'gatsby-highlight', 'data-language': 'js'},
            Object(t.b)(
              'pre',
              Object.assign({parentName: 'div'}, {className: 'language-js'}),
              Object(t.b)(
                'code',
                Object.assign({parentName: 'pre'}, {className: 'language-js'}),
                Object(t.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token function'},
                  ),
                  'tippy',
                ),
                Object(t.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token block'},
                  ),
                  '(',
                ),
                'reference',
                Object(t.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token punctuation'},
                  ),
                  ',',
                ),
                ' ',
                Object(t.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token block'},
                  ),
                  '{',
                ),
                '\n  ',
                Object(t.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token function'},
                  ),
                  'onBeforeUpdate',
                ),
                Object(t.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token block'},
                  ),
                  '(',
                ),
                Object(t.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token parameter'},
                  ),
                  'instance',
                  Object(t.b)(
                    'span',
                    Object.assign(
                      {parentName: 'span'},
                      {className: 'token punctuation'},
                    ),
                    ',',
                  ),
                  ' updatedProps',
                ),
                Object(t.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token block'},
                  ),
                  ')',
                ),
                ' ',
                Object(t.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token block'},
                  ),
                  '{',
                ),
                '\n    ',
                Object(t.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token comment'},
                  ),
                  '// ...',
                ),
                '\n  ',
                Object(t.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token block'},
                  ),
                  '}',
                ),
                Object(t.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token punctuation'},
                  ),
                  ',',
                ),
                '\n',
                Object(t.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token block'},
                  ),
                  '}',
                ),
                Object(t.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token block'},
                  ),
                  ')',
                ),
                Object(t.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token punctuation'},
                  ),
                  ';',
                ),
              ),
            ),
          ),
          Object(t.b)('h4', null, 'onAfterUpdate'),
          Object(t.b)(
            'p',
            null,
            "Executed after a tippy's props are updated (via ",
            Object(t.b)(
              'code',
              Object.assign({parentName: 'p'}, {className: 'language-text'}),
              '.setContent()',
            ),
            ' or\n',
            Object(t.b)(
              'code',
              Object.assign({parentName: 'p'}, {className: 'language-text'}),
              '.setProps()',
            ),
            ').',
          ),
          Object(t.b)(
            'div',
            {className: 'gatsby-highlight', 'data-language': 'js'},
            Object(t.b)(
              'pre',
              Object.assign({parentName: 'div'}, {className: 'language-js'}),
              Object(t.b)(
                'code',
                Object.assign({parentName: 'pre'}, {className: 'language-js'}),
                Object(t.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token function'},
                  ),
                  'tippy',
                ),
                Object(t.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token block'},
                  ),
                  '(',
                ),
                'reference',
                Object(t.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token punctuation'},
                  ),
                  ',',
                ),
                ' ',
                Object(t.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token block'},
                  ),
                  '{',
                ),
                '\n  ',
                Object(t.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token function'},
                  ),
                  'onAfterUpdate',
                ),
                Object(t.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token block'},
                  ),
                  '(',
                ),
                Object(t.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token parameter'},
                  ),
                  'instance',
                  Object(t.b)(
                    'span',
                    Object.assign(
                      {parentName: 'span'},
                      {className: 'token punctuation'},
                    ),
                    ',',
                  ),
                  ' updatedProps',
                ),
                Object(t.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token block'},
                  ),
                  ')',
                ),
                ' ',
                Object(t.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token block'},
                  ),
                  '{',
                ),
                '\n    ',
                Object(t.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token comment'},
                  ),
                  '// ...',
                ),
                '\n  ',
                Object(t.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token block'},
                  ),
                  '}',
                ),
                Object(t.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token punctuation'},
                  ),
                  ',',
                ),
                '\n',
                Object(t.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token block'},
                  ),
                  '}',
                ),
                Object(t.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token block'},
                  ),
                  ')',
                ),
                Object(t.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token punctuation'},
                  ),
                  ';',
                ),
              ),
            ),
          ),
          Object(t.b)('h4', null, 'onDestroy'),
          Object(t.b)(
            'p',
            null,
            'Executed a single time when a tippy is destroyed.',
          ),
          Object(t.b)(
            'div',
            {className: 'gatsby-highlight', 'data-language': 'js'},
            Object(t.b)(
              'pre',
              Object.assign({parentName: 'div'}, {className: 'language-js'}),
              Object(t.b)(
                'code',
                Object.assign({parentName: 'pre'}, {className: 'language-js'}),
                Object(t.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token function'},
                  ),
                  'tippy',
                ),
                Object(t.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token block'},
                  ),
                  '(',
                ),
                'reference',
                Object(t.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token punctuation'},
                  ),
                  ',',
                ),
                ' ',
                Object(t.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token block'},
                  ),
                  '{',
                ),
                '\n  ',
                Object(t.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token function'},
                  ),
                  'onDestroy',
                ),
                Object(t.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token block'},
                  ),
                  '(',
                ),
                Object(t.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token parameter'},
                  ),
                  'instance',
                ),
                Object(t.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token block'},
                  ),
                  ')',
                ),
                ' ',
                Object(t.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token block'},
                  ),
                  '{',
                ),
                '\n    ',
                Object(t.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token comment'},
                  ),
                  '// ...',
                ),
                '\n  ',
                Object(t.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token block'},
                  ),
                  '}',
                ),
                Object(t.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token punctuation'},
                  ),
                  ',',
                ),
                '\n',
                Object(t.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token block'},
                  ),
                  '}',
                ),
                Object(t.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token block'},
                  ),
                  ')',
                ),
                Object(t.b)(
                  'span',
                  Object.assign(
                    {parentName: 'code'},
                    {className: 'token punctuation'},
                  ),
                  ';',
                ),
              ),
            ),
          ),
        );
      }
      p.isMDXComponent = !0;
    },
  },
]);
//# sourceMappingURL=component---src-pages-lifecycle-hooks-mdx-97d7a3d30b3ccd7c9713.js.map
