'use strict';


describe('FirebaseRef Service', function () {
  var testUrl;
  beforeEach(function() {

    Mocks.setupFireUser(this);

    this.firebaseAuthMock.$login = sinon.stub().returns({then:function(){}});

  });

  describe("when login() is called with 'test'", function() {
    it("should call firebaseAuth.$login with 'test'", inject(function($fireUser) {
      $fireUser.login('test')
      expect(this.firebaseAuthMock.$login).toHaveBeenCalledWith('test');      
      expect(this.firebaseAuthMock.$login).toHaveBeenCalled();
    }));
  });

  describe("when login() is called with ('password',user)", function() {
    it("should call firebaseAuth.$login with ('password',user)", inject(function($fireUser) {
      this.user = {email:'test',password:'test'};

      $fireUser.login('password',this.user)
      expect(this.firebaseAuthMock.$login).toHaveBeenCalledWith('password',this.user);
    }));
  });

});