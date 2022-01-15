var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
import React from "react";
import clsx from "clsx";
import "virtual:vanilla-extract:../../../src/themes/windows/theme.css.ts$$$button.vanilla.css";
import "virtual:vanilla-extract:../../../src/themes/macos/theme.css.ts$$$button.vanilla.css";
import "virtual:vanilla-extract:src/button.css.ts$$$button.vanilla.css";
import { createRuntimeFn } from "@vanilla-extract/recipes/createRuntimeFn";
var buttonRecipe = createRuntimeFn({ defaultClassName: "rh2xz61", variantClassNames: { variant: { "default": "rh2xz62", accent: "rh2xz63" } }, defaultVariants: {}, compoundVariants: [] });
var buttonStyle = "rh2xz60";
const Button = (_a) => {
  var _b = _a, { label, variants = {} } = _b, props = __objRest(_b, ["label", "variants"]);
  return /* @__PURE__ */ React.createElement("button", __spreadProps(__spreadValues({}, props), {
    className: clsx(buttonStyle, buttonRecipe(variants))
  }), label);
};
const componentName = "button";
export { componentName, Button as default };
