describe("pow", function () {

    // it("возводит в степень число n", function() {
    //     assert.equal(pow(2, 3), 8);
    // });
    describe("возводит в 3 степень", function () {

        function makeTest(x) {
            let expected = x * x * x;
            it(`${x} в степени 3 будет ${expected}`, function () {
                assert.equal(pow(x, 3), expected);
            });
        }

        for (let x = 1; x <= 5; x++) {
            makeTest(x);
        }

    });

    describe("проверка на неправильное разные значения степени", function () {

        it("для отрицательных n возвращать NaN", function () {
            assert.isNaN(pow(2, -1));
        });

        it("для дробных n возвращать NaN", function () {
            assert.isNaN(pow(2, 1.5));
        });

        it("для n = 0, возвращать 1", function() {
            assert.equal(pow(5,0), 1);
        });

        it("для n = 1, возвращать x", function(){
            assert.equal(pow(10,1), 10);
        })
    });
});