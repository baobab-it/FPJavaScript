import pick from "lodash-es/pick";
import convert from "./convert.js";
import placeholder from "./placeholder.js";

var func = convert("pick", pick);
func.placeholder = placeholder;

export default func;
