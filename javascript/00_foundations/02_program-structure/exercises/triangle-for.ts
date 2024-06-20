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
function drawTriangleWithFor() {
  let line = "#";

  for (let index = line.length; line.length <= 7; index++) {
    console.log(line);
    line += "#";
  }
}

drawTriangleWithFor();
