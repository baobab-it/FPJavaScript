import reduceRight from "lodash-es/reduceRight";
import convert from "./convert.js";
import placeholder from "./placeholder.js";

var func = convert("reduceRight", reduceRight);
func.placeholder = placeholder;

export default func;
