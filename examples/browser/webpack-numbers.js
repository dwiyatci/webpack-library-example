!(function (e, r) {
  'object' == typeof exports && 'object' == typeof module
    ? (module.exports = r(require('lodash')))
    : 'function' == typeof define && define.amd
    ? define(['lodash'], r)
    : 'object' == typeof exports
    ? (exports.webpackNumbers = r(require('lodash')))
    : (e.webpackNumbers = r(e._));
})(this, function (e) {
  return (function (e) {
    var r = {};
    function t(n) {
      if (r[n]) return r[n].exports;
      var o = (r[n] = { i: n, l: !1, exports: {} });
      return e[n].call(o.exports, o, o.exports, t), (o.l = !0), o.exports;
    }
    return (
      (t.m = e),
      (t.c = r),
      (t.d = function (e, r, n) {
        t.o(e, r) ||
          Object.defineProperty(e, r, {
            configurable: !1,
            enumerable: !0,
            get: n,
          });
      }),
      (t.r = function (e) {
        Object.defineProperty(e, '__esModule', { value: !0 });
      }),
      (t.n = function (e) {
        var r =
          e && e.__esModule
            ? function () {
                return e.default;
              }
            : function () {
                return e;
              };
        return t.d(r, 'a', r), r;
      }),
      (t.o = function (e, r) {
        return Object.prototype.hasOwnProperty.call(e, r);
      }),
      (t.p = ''),
      t((t.s = 2))
    );
  })([
    function (e) {
      e.exports = [
        { num: 1, word: 'One' },
        { num: 2, word: 'Two' },
        { num: 3, word: 'Three' },
        { num: 4, word: 'Four' },
        { num: 5, word: 'Five' },
        { num: 0, word: 'Zero' },
      ];
    },
    function (r, t) {
      r.exports = e;
    },
    function (e, r, t) {
      'use strict';
      Object.defineProperty(r, '__esModule', { value: !0 });
      var n = u(t(1)),
        o = u(t(0));
      function u(e) {
        return e && e.__esModule ? e : { default: e };
      }
      var f = function (e) {
          return n.default.reduce(
            o.default,
            function (r, t) {
              return t.num === e ? t.word : r;
            },
            ''
          );
        },
        i = function (e) {
          return n.default.reduce(
            o.default,
            function (r, t) {
              return t.word === e && e.toLowerCase() ? t.num : r;
            },
            -1
          );
        };
      (r.default = {
        numtoword: function (e) {
          return e < 0 || e > 5 ? 'This is a failure' : f(e);
        },
        wordtonum: function (e) {
          var r = i(e);
          return -1 === r ? 'This is a failure' : r;
        },
      }),
        (e.exports = r.default);
    },
  ]);
});
