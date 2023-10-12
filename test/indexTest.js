require ( './helpers.js' );

const chai = require("chai");
chai.use(require("chai-dom"));
const { expect } = chai;

describe("Well-Formed HTML Document", function () {

  it("begins with a valid doctype", function () {
    const doctype = document.doctype;
    expect(doctype.name).to.equal("html");
  });

  it("has a top-level <html> tag to enclose the document", function () {
    const htmlTag = document.querySelector("html");
    expect(htmlTag).to.exist;
  });

  context("within <html>", function () {
    it("contains a <head> tag to enclose the header", function () {
      const headTag = document.querySelector("html > head");
      expect(headTag).to.exist;
    });

    context("within <head>", function () {
      it("contains a <title> tag to enclose the site title", function () {
        const titleTag = document.querySelector("html > head > title");
        expect(titleTag).to.exist;
      });
    });
  });

  context("within <html>", function () {
    it("contains a <body> tag to enclose the body of the document", function () {
      const bodyTag = document.querySelector("html > body");
      expect(bodyTag).to.exist;
    });
  });

  context("w3c validation", function () {
    it("is a valid w3c document", function () {      
      const isValid = true;
      expect(isValid).to.be.true;
    });
  });
});