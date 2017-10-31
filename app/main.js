"use strict";

function main(argv) {
  /**
   * このコードは引数と標準出力を用いたサンプルコードです。
   * このコードは好きなように編集・削除してもらって構いません。
   *
   * This is a sample code to use arguments and outputs.
   * You can edit and even remove this code as you like.
   */
  argv.forEach((v, i) => console.log(`argv[${i}]: ${v}`));
}

module.exports = main;
