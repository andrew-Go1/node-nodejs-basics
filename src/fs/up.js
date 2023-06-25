import { updateCurrentPath } from "../start.js";
import path from "path";


export function up(currentPath) {
   
    const newPath = path.dirname(currentPath);
    updateCurrentPath(newPath);

}