"use strict";

const expect = require("chai").expect;
const codecheck = require("codecheck");
const app = codecheck.consoleApp(process.env.APP_COMMAND);
const testcases = require("./basic_testcases.json");

describe("CLIアプリケーションは", () => {

  testcases["testcases"].forEach((testcase) => {
    it(testcase.description + ": " + testcase.input, () => {
      return app.codecheck(testcase.input.split(" ")).then( result => {
        expect(result.code).to.equal(0,
          "CLIアプリケーションはステータスコード0で終了しなければならない。");
        expect(result.stdout).to.be.ok;
        expect(result.stdout[0]).to.equal(testcase.output);
      });
    });
  });

  testcases["illegal"].forEach((testcase) => {
    it(testcase.description, () => {
      return app.codecheck(testcase.input.split(" ")).then( result => {
        expect(result.stdout).to.be.ok;
        expect(result.stdout[0]).to.equal("-1");
      });
    });
  });
});
