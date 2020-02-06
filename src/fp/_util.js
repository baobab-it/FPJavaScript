import ary from "lodash-es/ary";
import _baseAssign from "lodash-es/_baseAssign";
import clone from "lodash-es/clone";
import curry from "lodash-es/curry";
import _arrayEach from "lodash-es/_arrayEach";
import isArray from "lodash-es/isArray";
import isError from "lodash-es/isError";
import isFunction from "lodash-es/isFunction";
import isWeakMap from "lodash-es/isWeakMap";
import iteratee from "lodash-es/iteratee";
import _baseKeys from "lodash-es/_baseKeys";
import rearg from "lodash-es/rearg";
import toInteger from "lodash-es/toInteger";
import toPath from "lodash-es/toPath";

export default {
  ary: ary,
  assign: _baseAssign,
  clone: clone,
  curry: curry,
  forEach: _arrayEach,
  isArray: isArray,
  isError: isError,
  isFunction: isFunction,
  isWeakMap: isWeakMap,
  iteratee: iteratee,
  keys: _baseKeys,
  rearg: rearg,
  toInteger: toInteger,
  toPath: toPath
};
