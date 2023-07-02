
let Bird = require("../models/Bird");
let chai = require("chai");
let chaiHttp = require("chai-http");
let app = require("../app");
chai.should();

chai.use(chaiHttp);

describe("Birds", () => {
  beforeEach((done) => {
    Bird.deleteMany({}, (err) => {
      done();
    });
  });
  describe("/GET bird", () => {
    it("it should GET all the birds", (done) => {
      chai
        .request(app)
        .get("/api/birds")
        .end((err, res) => {
          res.should.have.status(200);
          res.body.data.should.be.a("array");
          res.body.data.length.should.be.eql(0);
          done();
        });
    });
  });
  describe("/POST bird", () => {
    it("it should new POST a bird", (done) => {
      let bird = {
        title: "This is the first bird",
        body: "This is a bird post"
      };
      chai
        .request(app)
        .post("/api/birds")
        .send(bird)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("object");
          res.body.status.should.be.eql("success");
          done();
        });
    });
  });
  describe("/GET/:id bird", () => {
    it("it should GET a bird by the id", (done) => {
      let bird = new Bird({
        title: "This is the first bird",
        body: "This is a bird post"
      });
      bird.save((err, bird) => {
        chai
          .request(app)
          .get("/api/birds/" + bird.id)
          .send(bird)
          .end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a("object");
            res.body.status.should.be.eql("success");
            done();
          });
      });
    });
  });
  describe("/PUT/:id bird", () => {
    it("it should UPDATE a bird given the id", (done) => {
      let bird = new Bird({
        title: "This is the first bird",
        body: "This is a bird post"
      });
      bird.save((err, bird) => {
        console.log(bird.id);
        chai
          .request(app)
          .put("/api/birds/" + bird.id)
          .send({
            title: "The first bird was updated",
            body: "This is a bird post"
          })
          .end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a("object");
            res.body.status.should.be.eql("success");
            done();
          });
      });
    });
  });
  describe("/DELETE/:id bird", () => {
    it("it should DELETE a bird given the id", (done) => {
      let bird = new Bird({
        title: "This is the first bird",
        body: "This is a bird post"
      });
      bird.save((err, bird) => {
        chai
          .request(app)
          .delete("/api/birds/" + bird.id)
          .end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a("object");
            res.body.status.should.be.eql("success");
            done();
          });
      });
    });
  });
});
