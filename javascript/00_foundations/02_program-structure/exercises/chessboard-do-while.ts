function chessboardWithDoWhile() {
  const limit = 8;
  const lineTemplate = "# # # #";
  const whiteSpace = " ";

  let chessboard = "";
  let index = 1;

  do {
    let currentLine = "";

    currentLine =
      index % 2 === 0 ? lineTemplate + whiteSpace : whiteSpace + lineTemplate;

    chessboard += index === 8 ? currentLine : currentLine + "\n";

    index++;
  } while (index <= limit);

  console.log(chessboard);
}

chessboardWithDoWhile();
