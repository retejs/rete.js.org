(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d209540"],{a91c:function(n,e,t){"use strict";t.r(e);var o=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{staticClass:"plugin"},[t("Code",{attrs:{source:"install"}}),n._m(0),t("p",[n._v("Check/replace 'stage0-menu-plugin.debug.css' to add your own style")]),t("table",[t("thead",[t("tr",n._l(n.head,(function(e){return t("th",[n._v(n._s(e))])})),0)]),t("tbody",n._l(n.items,(function(e){return t("tr",n._l(e,(function(e){return t("td",[n._v(n._s(e))])})),0)})),0)])],1)},a=[function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("p",[t("a",{attrs:{href:"https://codepen.io/anon/pen/jQBxKe"}},[n._v("Example")])])}],s={data:function(){return{head:["Опция","Описание","По умолчанию"],items:[["searchBar","Showing search bar",!0],["delay","Delay hide, ms",100],["allocate","function for placing of components into submenu (return false to exclude)","() => []"],["items","Hand crafted menu","{}"]]}}},u=s,c=t("2877"),r=function(n){n.options.code||(n.options.code={}),n.options.code["install"]='import Stage0MenuPlugin from \'stage0-rete-menu-plugin\';\n\neditor.use(Stage0MenuPlugin, {\n    menuOptions: {\n        delay: 100,\n        searchBar: false,\n        allocate(component) {\n            if (component.name == "Add") {\n                return false;\n            }\n            return ["menu", "submenu"];\n        },\n        items: {\n            Menu: {\n                "Add component": {\n                    Add: components[1]\n                },\n                Fn: () => {\n                    alert("Fn");\n                }\n            }\n        }\n    },\n    dockedMenuOptions: {\n        delay: 100,\n        allocate(component) {\n            return false;\n        },\n        items: {\n            Menu: {\n                "Add component": {\n                    Add: components[1]\n                },\n                "Add component 2": {\n                    X: components[1]\n                }\n            }\n        }\n    }\n}});'},l=r,i=Object(c["a"])(u,o,a,!1,null,null,null);"function"===typeof l&&l(i);e["default"]=i.exports}}]);