function chessboardWithWhile() {
  const limit = 8;
  const lineTemplate = "# # # #";
  const whiteSpace = " ";

  let chessboard = "";
  let index = 1;

  while (index <= limit) {
    let currentLine = "";

    currentLine =
      index % 2 === 0 ? lineTemplate + whiteSpace : whiteSpace + lineTemplate;

    chessboard += index === limit ? currentLine : currentLine + "\n";

    index++;
  }

  console.log(chessboard);
}

chessboardWithWhile();
