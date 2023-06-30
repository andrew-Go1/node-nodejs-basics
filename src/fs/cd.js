import { updateCurrentPath } from "../start.js";
import { readdir } from "fs";
import path from "path";

export const cd = async (currentPath, wishingPath) => {
    var newPath = path.join(currentPath, wishingPath);
    if (path.isAbsolute(wishingPath)) {
        newPath = wishingPath;
    };
    
    readdir(newPath, {}, (err) => {
        if (!err) {
            updateCurrentPath(newPath);
            
        } else {
            console.log('Operation failed')
        }
    });
}