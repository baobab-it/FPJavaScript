import truncate from "lodash-es/truncate";
import convert from "./convert.js";
import placeholder from "./placeholder.js";

var func = convert("truncate", truncate);
func.placeholder = placeholder;

export default func;
