import zipObjectDeep from "lodash-es/zipObjectDeep";
import convert from "./convert.js";
import placeholder from "./placeholder.js";

var func = convert("zipObjectDeep", zipObjectDeep);
func.placeholder = placeholder;

export default func;
