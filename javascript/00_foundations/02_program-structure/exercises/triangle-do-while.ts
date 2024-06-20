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

function drawTriangleWithDoWhile() {
  let line = "#";

  do {
    console.log(line);
    line += "#";
  } while (line.length <= 7);
}

drawTriangleWithDoWhile();
