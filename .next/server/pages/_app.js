(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 713:
/***/ ((module) => {

// Exports
module.exports = {
	"style": {"fontFamily":"'__lamaRoundedFont_51b67b', '__lamaRoundedFont_Fallback_51b67b'"},
	"className": "__className_51b67b"
};


/***/ }),

/***/ 738:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ App)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(692);
;// CONCATENATED MODULE: ./themes/utilities/palette.js
const palette = {
    primary: {
        main: "#FF3B3B"
    },
    secondary: {
        main: "#28293D"
    }
};

// EXTERNAL MODULE: ./node_modules/@next/font/local/target.css?{"path":"themes\\utilities\\fonts.js","import":"","arguments":[{"src":[{"path":"../../assets/fonts/LamaRounded-Regular.woff2","weight":"400"},{"path":"../../assets/fonts/LamaRounded-Bold.woff2","weight":"700"},{"path":"../../assets/fonts/LamaRounded-Black.woff2","weight":"900"}]}],"variableName":"lamaRoundedFont"}
var LamaRounded_Black_woff2_weight_900_variableName_lamaRoundedFont_ = __webpack_require__(713);
var LamaRounded_Black_woff2_weight_900_variableName_lamaRoundedFont_default = /*#__PURE__*/__webpack_require__.n(LamaRounded_Black_woff2_weight_900_variableName_lamaRoundedFont_);
;// CONCATENATED MODULE: ./themes/utilities/typography.js

const typography = {
    "fontFamily": `${(LamaRounded_Black_woff2_weight_900_variableName_lamaRoundedFont_default()).style.fontFamily}, sans-serif`,
    "fontSize": 14,
    "fontWeightLight": 300,
    "fontWeightRegular": 400,
    "fontWeightMedium": 500
};

;// CONCATENATED MODULE: ./themes/default.js



const theme = (0,material_.createTheme)({
    palette: palette,
    typography: typography,
    components: {
        MuiOutlinedInput: {
            styleOverrides: {
                root: {
                    borderRadius: "8px"
                }
            }
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: "8px"
                }
            }
        }
    }
});

// EXTERNAL MODULE: ./assets/styles/app.scss
var app = __webpack_require__(603);
;// CONCATENATED MODULE: ./pages/_app.js




function App({ Component , pageProps  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.ThemeProvider, {
        theme: theme,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(material_.CssBaseline, {}),
            /*#__PURE__*/ jsx_runtime_.jsx("main", {
                children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                    ...pageProps
                })
            })
        ]
    });
}


/***/ }),

/***/ 603:
/***/ (() => {



/***/ }),

/***/ 692:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(738));
module.exports = __webpack_exports__;

})();