/**
 * Write a loop that makes seven calls to console.log to output the following triangle:
 * #
 * ##
 * ###
 * ####
 * #####
 * ######
 * #######
 */

function drawTriangleWithWhile() {
  let line = "#";

  while (line.length <= 7) {
    console.log(line);
    line += "#";
  }
}

drawTriangleWithWhile();
