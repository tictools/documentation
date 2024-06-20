function chessboardWithFor() {
  const limit = 8;
  const lineTemplate = "# # # #";
  const whiteSpace = " ";

  let chessboard = "";

  for (let index = 1; index <= limit; index++) {
    let currentLine = "";

    currentLine =
      index % 2 === 0 ? lineTemplate + whiteSpace : whiteSpace + lineTemplate;

    chessboard += index === limit ? currentLine : currentLine + "\n";
  }

  console.log(chessboard);
}

chessboardWithFor();
