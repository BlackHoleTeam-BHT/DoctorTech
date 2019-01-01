it('db.connection.connect should ...', function(done) {
    db.connection.connect(function(err, result) {
        if(err){
            done(err);
            return;
        }
        expect(result).to.equal("SQL CONNECT SUCCESSFUL.");
        done();
    });
});