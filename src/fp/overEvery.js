import overEvery from "lodash-es/overEvery";
import convert from "./convert.js";
import placeholder from "./placeholder.js";

var func = convert("overEvery", overEvery);
func.placeholder = placeholder;

export default func;
