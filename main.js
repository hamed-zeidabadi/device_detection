// Use the platform.js library
(function () {
  "use strict";
  var e = { function: !0, object: !0 },
    k = (e[typeof window] && window) || this,
    i = e[typeof exports] && exports,
    t = e[typeof module] && module && !module.nodeType && module,
    e = i && t && "object" == typeof global && global;
  !e || (e.global !== e && e.window !== e && e.self !== e) || (k = e);
  var a = Math.pow(2, 53) - 1,
    R = /\bOpera/,
    e = Object.prototype,
    r = e.hasOwnProperty,
    A = e.toString;
  function n(e) {
    return (e = String(e)).charAt(0).toUpperCase() + e.slice(1);
  }
  function I(e) {
    return (e = X(e)), /^(?:webOS|i(?:OS|P))/.test(e) ? e : n(e);
  }
  function F(e, t) {
    for (var i in e) r.call(e, i) && t(e[i], i, e);
  }
  function T(e) {
    return null == e ? n(e) : A.call(e).slice(8, -1);
  }
  function G(e) {
    return String(e).replace(/([ -])(?!$)/g, "$1?");
  }
  function $(i, r) {
    var n = null;
    return (
      (function (e, t) {
        var i = -1,
          r = e ? e.length : 0;
        if ("number" == typeof r && -1 < r && r <= a)
          for (; ++i < r; ) t(e[i], i, e);
        else F(e, t);
      })(i, function (e, t) {
        n = r(n, e, t, i);
      }),
      n
    );
  }
  function X(e) {
    return String(e).replace(/^ +| +$/g, "");
  }
  function K(a) {
    var t = k,
      e = a && "object" == typeof a && "String" != T(a);
    e && ((t = a), (a = null));
    var i = t.navigator || {},
      r = i.userAgent || "";
    a = a || r;
    var n,
      o,
      l = e
        ? !!i.likeChrome
        : /\bChrome\b/.test(a) && !/internal|\n/i.test(A.toString()),
      s = "Object",
      b = e ? s : "ScriptBridgingProxyObject",
      p = e ? s : "Environment",
      c = e && t.java ? "JavaPackage" : T(t.java),
      d = e ? s : "RuntimeObject",
      u = /\bJava/.test(c) && t.java,
      f = u && T(t.environment) == p,
      S = u ? "a" : "α",
      x = u ? "b" : "β",
      h = t.document || {},
      m = t.operamini || t.opera,
      g = R.test((g = e && m ? m["[[Class]]"] : T(m))) ? g : (m = null),
      O = a,
      y = [],
      M = null,
      E = a == r,
      w = E && m && "function" == typeof m.version && m.version(),
      v = $(
        [
          { label: "EdgeHTML", pattern: "Edge" },
          "Trident",
          { label: "WebKit", pattern: "AppleWebKit" },
          "iCab",
          "Presto",
          "NetFront",
          "Tasman",
          "KHTML",
          "Gecko",
        ],
        function (e, t) {
          return (
            e ||
            (RegExp("\\b" + (t.pattern || G(t)) + "\\b", "i").exec(a) &&
              (t.label || t))
          );
        }
      ),
      P = $(
        [
          "Adobe AIR",
          "Arora",
          "Avant Browser",
          "Breach",
          "Camino",
          "Electron",
          "Epiphany",
          "Fennec",
          "Flock",
          "Galeon",
          "GreenBrowser",
          "iCab",
          "Iceweasel",
          "K-Meleon",
          "Konqueror",
          "Lunascape",
          "Maxthon",
          { label: "Microsoft Edge", pattern: "(?:Edge|Edg|EdgA|EdgiOS)" },
          "Midori",
          "Nook Browser",
          "PaleMoon",
          "PhantomJS",
          "Raven",
          "Rekonq",
          "RockMelt",
          { label: "Samsung Internet", pattern: "SamsungBrowser" },
          "SeaMonkey",
          { label: "Silk", pattern: "(?:Cloud9|Silk-Accelerated)" },
          "Sleipnir",
          "SlimBrowser",
          { label: "SRWare Iron", pattern: "Iron" },
          "Sunrise",
          "Swiftfox",
          "Vivaldi",
          "Waterfox",
          "WebPositive",
          { label: "Yandex Browser", pattern: "YaBrowser" },
          { label: "UC Browser", pattern: "UCBrowser" },
          "Opera Mini",
          { label: "Opera Mini", pattern: "OPiOS" },
          "Opera",
          { label: "Opera", pattern: "OPR" },
          "Chromium",
          "Chrome",
          { label: "Chrome", pattern: "(?:HeadlessChrome)" },
          { label: "Chrome Mobile", pattern: "(?:CriOS|CrMo)" },
          { label: "Firefox", pattern: "(?:Firefox|Minefield)" },
          { label: "Firefox for iOS", pattern: "FxiOS" },
          { label: "IE", pattern: "IEMobile" },
          { label: "IE", pattern: "MSIE" },
          "Safari",
        ],
        function (e, t) {
          return (
            e ||
            (RegExp("\\b" + (t.pattern || G(t)) + "\\b", "i").exec(a) &&
              (t.label || t))
          );
        }
      ),
      C = B([
        { label: "BlackBerry", pattern: "BB10" },
        "BlackBerry",
        { label: "Galaxy S", pattern: "GT-I9000" },
        { label: "Galaxy S2", pattern: "GT-I9100" },
        { label: "Galaxy S3", pattern: "GT-I9300" },
        { label: "Galaxy S4", pattern: "GT-I9500" },
        { label: "Galaxy S5", pattern: "SM-G900" },
        { label: "Galaxy S6", pattern: "SM-G920" },
        { label: "Galaxy S6 Edge", pattern: "SM-G925" },
        { label: "Galaxy S7", pattern: "SM-G930" },
        { label: "Galaxy S7 Edge", pattern: "SM-G935" },
        "Google TV",
        "Lumia",
        "iPad",
        "iPod",
        "iPhone",
        "Kindle",
        { label: "Kindle Fire", pattern: "(?:Cloud9|Silk-Accelerated)" },
        "Nexus",
        "Nook",
        "PlayBook",
        "PlayStation Vita",
        "PlayStation",
        "TouchPad",
        "Transformer",
        { label: "Wii U", pattern: "WiiU" },
        "Wii",
        "Xbox One",
        { label: "Xbox 360", pattern: "Xbox" },
        "Xoom",
      ]),
      s = $(
        {
          Apple: { iPad: 1, iPhone: 1, iPod: 1 },
          Alcatel: {},
          Archos: {},
          Amazon: { Kindle: 1, "Kindle Fire": 1 },
          Asus: { Transformer: 1 },
          "Barnes & Noble": { Nook: 1 },
          BlackBerry: { PlayBook: 1 },
          Google: { "Google TV": 1, Nexus: 1 },
          HP: { TouchPad: 1 },
          HTC: {},
          Huawei: {},
          Lenovo: {},
          LG: {},
          Microsoft: { Xbox: 1, "Xbox One": 1 },
          Motorola: { Xoom: 1 },
          Nintendo: { "Wii U": 1, Wii: 1 },
          Nokia: { Lumia: 1 },
          Oppo: {},
          Samsung: {
            "Galaxy S": 1,
            "Galaxy S2": 1,
            "Galaxy S3": 1,
            "Galaxy S4": 1,
          },
          Sony: { PlayStation: 1, "PlayStation Vita": 1 },
          Xiaomi: { Mi: 1, Redmi: 1 },
        },
        function (e, t, i) {
          return (
            e ||
            ((t[C] ||
              t[/^[a-z]+(?: +[a-z]+\b)*/i.exec(C)] ||
              RegExp("\\b" + G(i) + "(?:\\b|\\w*\\d)", "i").exec(a)) &&
              i)
          );
        }
      ),
      c = $(
        [
          "Windows Phone",
          "KaiOS",
          "Android",
          "CentOS",
          { label: "Chrome OS", pattern: "CrOS" },
          "Debian",
          { label: "DragonFly BSD", pattern: "DragonFly" },
          "Fedora",
          "FreeBSD",
          "Gentoo",
          "Haiku",
          "Kubuntu",
          "Linux Mint",
          "OpenBSD",
          "Red Hat",
          "SuSE",
          "Ubuntu",
          "Xubuntu",
          "Cygwin",
          "Symbian OS",
          "hpwOS",
          "webOS ",
          "webOS",
          "Tablet OS",
          "Tizen",
          "Linux",
          "Mac OS X",
          "Macintosh",
          "Mac",
          "Windows 98;",
          "Windows ",
        ],
        function (e, t) {
          var i,
            r,
            n = t.pattern || G(t);
          return (
            !e &&
              (e = RegExp("\\b" + n + "(?:/[\\d.]+|[ \\w.]*)", "i").exec(a)) &&
              ((i = e),
              (r = n),
              (n = t.label || t),
              (t = {
                "10.0": "10",
                6.4: "10 Technical Preview",
                6.3: "8.1",
                6.2: "8",
                6.1: "Server 2008 R2 / 7",
                "6.0": "Server 2008 / Vista",
                5.2: "Server 2003 / XP 64-bit",
                5.1: "XP",
                5.01: "2000 SP1",
                "5.0": "2000",
                "4.0": "NT",
                "4.90": "ME",
              }),
              r &&
                n &&
                /^Win/i.test(i) &&
                !/^Windows Phone /i.test(i) &&
                (t = t[/[\d.]+$/.exec(i)]) &&
                (i = "Windows " + t),
              (i = String(i)),
              r && n && (i = i.replace(RegExp(r, "i"), n)),
              (e = i =
                I(
                  i
                    .replace(/ ce$/i, " CE")
                    .replace(/\bhpw/i, "web")
                    .replace(/\bMacintosh\b/, "Mac OS")
                    .replace(/_PowerPC\b/i, " OS")
                    .replace(/\b(OS X) [^ \d]+/i, "$1")
                    .replace(/\bMac (OS X)\b/, "$1")
                    .replace(/\/(\d)/, " $1")
                    .replace(/_/g, ".")
                    .replace(/(?: BePC|[ .]*fc[ \d.]+)$/i, "")
                    .replace(/\bx86\.64\b/gi, "x86_64")
                    .replace(/\b(Windows Phone) OS\b/, "$1")
                    .replace(/\b(Chrome OS \w+) [\d.]+\b/, "$1")
                    .split(" on ")[0]
                ))),
            e
          );
        }
      );
    function B(e) {
      return $(e, function (e, t) {
        var i = t.pattern || G(t);
        return (
          !e &&
            (e =
              RegExp("\\b" + i + " *\\d+[.\\w_]*", "i").exec(a) ||
              RegExp("\\b" + i + " *\\w+-[\\w]*", "i").exec(a) ||
              RegExp(
                "\\b" + i + "(?:; *(?:[a-z]+[_-])?[a-z]+\\d+|[^ ();-]*)",
                "i"
              ).exec(a)) &&
            ((e = String(
              t.label && !RegExp(i, "i").test(t.label) ? t.label : e
            ).split("/"))[1] &&
              !/[\d.]+/.test(e[0]) &&
              (e[0] += " " + e[1]),
            (t = t.label || t),
            (e = I(
              e[0]
                .replace(RegExp(i, "i"), t)
                .replace(RegExp("; *(?:" + t + "[_-])?", "i"), " ")
                .replace(RegExp("(" + t + ")[-_.]?(\\w)", "i"), "$1 $2")
            ))),
          e
        );
      });
    }
    function W(e) {
      return $(e, function (e, t) {
        return (
          e ||
          (RegExp(
            t + "(?:-[\\d.]+/|(?: for [\\w-]+)?[ /-])([\\d.]+[^ ();/_-]*)",
            "i"
          ).exec(a) || 0)[1] ||
          null
        );
      });
    }
    if (
      ((v = v && [v]),
      /\bAndroid\b/.test(c) &&
        !C &&
        (n = /\bAndroid[^;]*;(.*?)(?:Build|\) AppleWebKit)\b/i.exec(a)) &&
        (C = X(n[1]).replace(/^[a-z]{2}-[a-z]{2};\s*/i, "") || null),
      s && !C
        ? (C = B([s]))
        : s &&
          C &&
          (C = C.replace(
            RegExp("^(" + G(s) + ")[-_.\\s]", "i"),
            s + " "
          ).replace(RegExp("^(" + G(s) + ")[-_.]?(\\w)", "i"), s + " $2")),
      (n = /\bGoogle TV\b/.exec(C)) && (C = n[0]),
      /\bSimulator\b/i.test(a) && (C = (C ? C + " " : "") + "Simulator"),
      "Opera Mini" == P &&
        /\bOPiOS\b/.test(a) &&
        y.push("running in Turbo/Uncompressed mode"),
      "IE" == P && /\blike iPhone OS\b/.test(a)
        ? ((s = (n = K(a.replace(/like iPhone OS/, ""))).manufacturer),
          (C = n.product))
        : /^iP/.test(C)
        ? ((P = P || "Safari"),
          (c =
            "iOS" +
            ((n = / OS ([\d_]+)/i.exec(a))
              ? " " + n[1].replace(/_/g, ".")
              : "")))
        : "Konqueror" == P && /^Linux\b/i.test(c)
        ? (c = "Kubuntu")
        : (s &&
            "Google" != s &&
            ((/Chrome/.test(P) && !/\bMobile Safari\b/i.test(a)) ||
              /\bVita\b/.test(C))) ||
          (/\bAndroid\b/.test(c) && /^Chrome/.test(P) && /\bVersion\//i.test(a))
        ? ((P = "Android Browser"), (c = /\bAndroid\b/.test(c) ? c : "Android"))
        : "Silk" == P
        ? (/\bMobi/i.test(a) || ((c = "Android"), y.unshift("desktop mode")),
          /Accelerated *= *true/i.test(a) && y.unshift("accelerated"))
        : "UC Browser" == P && /\bUCWEB\b/.test(a)
        ? y.push("speed mode")
        : "PaleMoon" == P && (n = /\bFirefox\/([\d.]+)\b/.exec(a))
        ? y.push("identifying as Firefox " + n[1])
        : "Firefox" == P && (n = /\b(Mobile|Tablet|TV)\b/i.exec(a))
        ? ((c = c || "Firefox OS"), (C = C || n[1]))
        : !P ||
          (n = !/\bMinefield\b/i.test(a) && /\b(?:Firefox|Safari)\b/.exec(P))
        ? (P &&
            !C &&
            /[\/,]|^[^(]+?\)/.test(a.slice(a.indexOf(n + "/") + 8)) &&
            (P = null),
          (n = C || s || c) &&
            (C || s || /\b(?:Android|Symbian OS|Tablet OS|webOS)\b/.test(c)) &&
            (P =
              /[a-z]+(?: Hat)?/i.exec(/\bAndroid\b/.test(c) ? c : n) +
              " Browser"))
        : "Electron" == P &&
          (n = (/\bChrome\/([\d.]+)\b/.exec(a) || 0)[1]) &&
          y.push("Chromium " + n),
      (w =
        w ||
        W([
          "(?:Cloud9|CriOS|CrMo|Edge|Edg|EdgA|EdgiOS|FxiOS|HeadlessChrome|IEMobile|Iron|Opera ?Mini|OPiOS|OPR|Raven|SamsungBrowser|Silk(?!/[\\d.]+$)|UCBrowser|YaBrowser)",
          "Version",
          G(P),
          "(?:Firefox|Minefield|NetFront)",
        ])),
      (n =
        ("iCab" == v && 3 < parseFloat(w)
          ? "WebKit"
          : /\bOpera\b/.test(P) && (/\bOPR\b/.test(a) ? "Blink" : "Presto")) ||
        (/\b(?:Midori|Nook|Safari)\b/i.test(a) &&
          !/^(?:Trident|EdgeHTML)$/.test(v) &&
          "WebKit") ||
        (!v && /\bMSIE\b/i.test(a) && ("Mac OS" == c ? "Tasman" : "Trident")) ||
        ("WebKit" == v &&
          /\bPlayStation\b(?! Vita\b)/i.test(P) &&
          "NetFront")) && (v = [n]),
      "IE" == P && (n = (/; *(?:XBLWP|ZuneWP)(\d+)/i.exec(a) || 0)[1])
        ? ((P += " Mobile"),
          (c = "Windows Phone " + (/\+$/.test(n) ? n : n + ".x")),
          y.unshift("desktop mode"))
        : /\bWPDesktop\b/i.test(a)
        ? ((P = "IE Mobile"),
          (c = "Windows Phone 8.x"),
          y.unshift("desktop mode"),
          (w = w || (/\brv:([\d.]+)/.exec(a) || 0)[1]))
        : "IE" != P &&
          "Trident" == v &&
          (n = /\brv:([\d.]+)/.exec(a)) &&
          (P && y.push("identifying as " + P + (w ? " " + w : "")),
          (P = "IE"),
          (w = n[1])),
      E)
    ) {
      if (
        ((p = "global"),
        (r = null != (e = t) ? typeof e[p] : "number"),
        /^(?:boolean|number|string|undefined)$/.test(r) ||
          ("object" == r && !e[p]))
      )
        T((n = t.runtime)) == b
          ? ((P = "Adobe AIR"), (c = n.flash.system.Capabilities.os))
          : T((n = t.phantom)) == d
          ? ((P = "PhantomJS"),
            (w =
              (n = n.version || null) &&
              n.major + "." + n.minor + "." + n.patch))
          : "number" == typeof h.documentMode &&
            (n = /\bTrident\/(\d+)/i.exec(a))
          ? ((w = [w, h.documentMode]),
            (n = +n[1] + 4) != w[1] &&
              (y.push("IE " + w[1] + " mode"), v && (v[1] = ""), (w[1] = n)),
            (w = "IE" == P ? String(w[1].toFixed(1)) : w[0]))
          : "number" == typeof h.documentMode &&
            /^(?:Chrome|Firefox)\b/.test(P) &&
            (y.push("masking as " + P + " " + w),
            (P = "IE"),
            (w = "11.0"),
            (v = ["Trident"]),
            (c = "Windows"));
      else if (
        (u &&
          ((O = (n = u.lang.System).getProperty("os.arch")),
          (c =
            c || n.getProperty("os.name") + " " + n.getProperty("os.version"))),
        f)
      ) {
        try {
          (w = t.require("ringo/engine").version.join(".")), (P = "RingoJS");
        } catch (e) {
          (n = t.system) &&
            n.global.system == t.system &&
            ((P = "Narwhal"), (c = c || n[0].os || null));
        }
        P = P || "Rhino";
      } else
        "object" == typeof t.process &&
          !t.process.browser &&
          (n = t.process) &&
          ("object" == typeof n.versions &&
            ("string" == typeof n.versions.electron
              ? (y.push("Node " + n.versions.node),
                (P = "Electron"),
                (w = n.versions.electron))
              : "string" == typeof n.versions.nw &&
                (y.push("Chromium " + w, "Node " + n.versions.node),
                (P = "NW.js"),
                (w = n.versions.nw))),
          P ||
            ((P = "Node.js"),
            (O = n.arch),
            (c = n.platform),
            (w = (w = /[\d.]+/.exec(n.version)) ? w[0] : null)));
      c = c && I(c);
    }
    if (
      (w &&
        (n =
          /(?:[ab]|dp|pre|[ab]\d+pre)(?:\d+\+?)?$/i.exec(w) ||
          /(?:alpha|beta)(?: ?\d)?/i.exec(a + ";" + (E && i.appMinorVersion)) ||
          (/\bMinefield\b/i.test(a) && "a")) &&
        ((M = /b/i.test(n) ? "beta" : "alpha"),
        (w =
          w.replace(RegExp(n + "\\+?$"), "") +
          ("beta" == M ? x : S) +
          (/\d+\+?/.exec(n) || ""))),
      "Fennec" == P ||
        ("Firefox" == P && /\b(?:Android|Firefox OS|KaiOS)\b/.test(c)))
    )
      P = "Firefox Mobile";
    else if ("Maxthon" == P && w) w = w.replace(/\.[\d.]+/, ".x");
    else if (/\bXbox\b/i.test(C))
      "Xbox 360" == C && (c = null),
        "Xbox 360" == C && /\bIEMobile\b/.test(a) && y.unshift("mobile mode");
    else if (
      (!/^(?:Chrome|IE|Opera)$/.test(P) &&
        (!P || C || /Browser|Mobi/.test(P))) ||
      ("Windows CE" != c && !/Mobi/i.test(a))
    )
      if ("IE" == P && E)
        try {
          null === t.external && y.unshift("platform preview");
        } catch (e) {
          y.unshift("embedded");
        }
      else
        (/\bBlackBerry\b/.test(C) || /\bBB10\b/.test(a)) &&
        (n =
          (RegExp(C.replace(/ +/g, " *") + "/([.\\d]+)", "i").exec(a) ||
            0)[1] || w)
          ? ((c =
              ((n = [n, /BB10/.test(a)])[1]
                ? ((C = null), (s = "BlackBerry"))
                : "Device Software") +
              " " +
              n[0]),
            (w = null))
          : this != F &&
            "Wii" != C &&
            ((E && m) ||
              (/Opera/.test(P) && /\b(?:MSIE|Firefox)\b/i.test(a)) ||
              ("Firefox" == P && /\bOS X (?:\d+\.){2,}/.test(c)) ||
              ("IE" == P &&
                ((c && !/^Win/.test(c) && 5.5 < w) ||
                  (/\bWindows XP\b/.test(c) && 8 < w) ||
                  (8 == w && !/\bTrident\b/.test(a))))) &&
            !R.test((n = K.call(F, a.replace(R, "") + ";"))) &&
            n.name &&
            ((n = "ing as " + n.name + ((n = n.version) ? " " + n : "")),
            R.test(P)
              ? (/\bIE\b/.test(n) && "Mac OS" == c && (c = null),
                (n = "identify" + n))
              : ((n = "mask" + n),
                (P = g ? I(g.replace(/([a-z])([A-Z])/g, "$1 $2")) : "Opera"),
                /\bIE\b/.test(n) && (c = null),
                E || (w = null)),
            (v = ["Presto"]),
            y.push(n));
    else P += " Mobile";
    (n = (/\bAppleWebKit\/([\d.]+\+?)/i.exec(a) || 0)[1]) &&
      ((n = [parseFloat(n.replace(/\.(\d)$/, ".0$1")), n]),
      "Safari" == P && "+" == n[1].slice(-1)
        ? ((P = "WebKit Nightly"), (M = "alpha"), (w = n[1].slice(0, -1)))
        : (w != n[1] &&
            w != (n[2] = (/\bSafari\/([\d.]+\+?)/i.exec(a) || 0)[1])) ||
          (w = null),
      (n[1] = (/\b(?:Headless)?Chrome\/([\d.]+)/i.exec(a) || 0)[1]),
      537.36 == n[0] &&
        537.36 == n[2] &&
        28 <= parseFloat(n[1]) &&
        "WebKit" == v &&
        (v = ["Blink"]),
      (n =
        E && (l || n[1])
          ? (v && (v[1] = "like Chrome"),
            n[1] ||
              ((n = n[0]) < 530
                ? 1
                : n < 532
                ? 2
                : n < 532.05
                ? 3
                : n < 533
                ? 4
                : n < 534.03
                ? 5
                : n < 534.07
                ? 6
                : n < 534.1
                ? 7
                : n < 534.13
                ? 8
                : n < 534.16
                ? 9
                : n < 534.24
                ? 10
                : n < 534.3
                ? 11
                : n < 535.01
                ? 12
                : n < 535.02
                ? "13+"
                : n < 535.07
                ? 15
                : n < 535.11
                ? 16
                : n < 535.19
                ? 17
                : n < 536.05
                ? 18
                : n < 536.1
                ? 19
                : n < 537.01
                ? 20
                : n < 537.11
                ? "21+"
                : n < 537.13
                ? 23
                : n < 537.18
                ? 24
                : n < 537.24
                ? 25
                : n < 537.36
                ? 26
                : "Blink" != v
                ? "27"
                : "28"))
          : (v && (v[1] = "like Safari"),
            (n = n[0]) < 400
              ? 1
              : n < 500
              ? 2
              : n < 526
              ? 3
              : n < 533
              ? 4
              : n < 534
              ? "4+"
              : n < 535
              ? 5
              : n < 537
              ? 6
              : n < 538
              ? 7
              : n < 601
              ? 8
              : n < 602
              ? 9
              : n < 604
              ? 10
              : n < 606
              ? 11
              : n < 608
              ? 12
              : "12")),
      v &&
        (v[1] +=
          " " + (n += "number" == typeof n ? ".x" : /[.+]/.test(n) ? "" : "+")),
      "Safari" == P && (!w || 45 < parseInt(w))
        ? (w = n)
        : "Chrome" == P &&
          /\bHeadlessChrome/i.test(a) &&
          y.unshift("headless")),
      "Opera" == P && (n = /\bzbov|zvav$/.exec(c))
        ? ((P += " "),
          y.unshift("desktop mode"),
          "zvav" == n ? ((P += "Mini"), (w = null)) : (P += "Mobile"),
          (c = c.replace(RegExp(" *" + n + "$"), "")))
        : "Safari" == P && /\bChrome\b/.exec(v && v[1])
        ? (y.unshift("desktop mode"),
          (P = "Chrome Mobile"),
          (w = null),
          (c = /\bOS X\b/.test(c) ? ((s = "Apple"), "iOS 4.3+") : null))
        : /\bSRWare Iron\b/.test(P) && !w && (w = W("Chrome")),
      w &&
        0 == w.indexOf((n = /[\d.]+$/.exec(c))) &&
        -1 < a.indexOf("/" + n + "-") &&
        (c = X(c.replace(n, ""))),
      c &&
        -1 != c.indexOf(P) &&
        !RegExp(P + " OS").test(c) &&
        (c = c.replace(RegExp(" *" + G(P) + " *"), "")),
      v &&
        !/\b(?:Avant|Nook)\b/.test(P) &&
        (/Browser|Lunascape|Maxthon/.test(P) ||
          ("Safari" != P && /^iOS/.test(c) && /\bSafari\b/.test(v[1])) ||
          (/^(?:Adobe|Arora|Breach|Midori|Opera|Phantom|Rekonq|Rock|Samsung Internet|Sleipnir|SRWare Iron|Vivaldi|Web)/.test(
            P
          ) &&
            v[1])) &&
        (n = v[v.length - 1]) &&
        y.push(n),
      y.length && (y = ["(" + y.join("; ") + ")"]),
      s && C && C.indexOf(s) < 0 && y.push("on " + s),
      C && y.push((/^on /.test(y[y.length - 1]) ? "" : "on ") + C),
      c &&
        ((n = / ([\d.+]+)$/.exec(c)),
        (o = n && "/" == c.charAt(c.length - n[0].length - 1)),
        (c = {
          architecture: 32,
          family: n && !o ? c.replace(n[0], "") : c,
          version: n ? n[1] : null,
          toString: function () {
            var e = this.version;
            return (
              this.family +
              (e && !o ? " " + e : "") +
              (64 == this.architecture ? " 64-bit" : "")
            );
          },
        })),
      (n = /\b(?:AMD|IA|Win|WOW|x86_|x)64\b/i.exec(O)) && !/\bi686\b/i.test(O)
        ? (c &&
            ((c.architecture = 64),
            (c.family = c.family.replace(RegExp(" *" + n), ""))),
          P &&
            (/\bWOW64\b/i.test(a) ||
              (E &&
                /\w(?:86|32)$/.test(i.cpuClass || i.platform) &&
                !/\bWin64; x64\b/i.test(a))) &&
            y.unshift("32-bit"))
        : c &&
          /^OS X/.test(c.family) &&
          "Chrome" == P &&
          39 <= parseFloat(w) &&
          (c.architecture = 64),
      (a = a || null);
    i = {};
    return (
      (i.description = a),
      (i.layout = v && v[0]),
      (i.manufacturer = s),
      (i.name = P),
      (i.prerelease = M),
      (i.product = C),
      (i.ua = a),
      (i.version = P && w),
      (i.os = c || {
        architecture: null,
        family: null,
        version: null,
        toString: function () {
          return "null";
        },
      }),
      (i.parse = K),
      (i.toString = function () {
        return this.description || "";
      }),
      i.version && y.unshift(w),
      i.name && y.unshift(P),
      c &&
        P &&
        (c != String(c).split(" ")[0] || (c != P.split(" ")[0] && !C)) &&
        y.push(C ? "(" + c + ")" : "on " + c),
      y.length && (i.description = y.join(" ")),
      i
    );
  }
  var o = K();
  "function" == typeof define && "object" == typeof define.amd && define.amd
    ? ((k.platform = o),
      define(function () {
        return o;
      }))
    : i && t
    ? F(o, function (e, t) {
        i[t] = e;
      })
    : (k.platform = o);
}.call(this));

// Personalization codes
window.onload = function () {
  function what() {
    var device = "";
    var product = platform.product;
    var isXiaomi = navigator.userAgent.indexOf(" Mi ") != -1 ? "Xiaomi" : null;
    if (product) {
      document.getElementById("myPhone").innerHTML = product;
    } else if (!product && isXiaomi) {
      document.getElementById("myPhone").innerHTML = isXiaomi;
    } else {
      document.getElementById("myPhone").innerHTML = "Desktop";
    }
  }
  what();
};
