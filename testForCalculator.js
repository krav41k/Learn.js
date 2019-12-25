describe("calculator engine test", function () {
    describe("Проверка правильности ввода свойств.", function () {
        for (let x = 1; x <= 5; x++) {
            let expected = {
                first: x,
                second: x * 2,
            }

            it(`введены значения: first = ${x}, second = ${x * 2}.`, function () {
                assert.deepEqual(calculator.read(x, x * 2), expected);
            });
        }
    });

    describe("Проверка сложения.", function () {
        for (let x = 1; x <= 5; x++) {
            let expected = x + x * 2;

            it(`Сумма: ${x} + ${x * 2} =  ${expected}.`, function () {
                calculator.read(x, x * 2);
                assert.equal(calculator.sum(), expected);
            });
        }
    });

    describe("Проверка уможения.", function () {

        for (let x = 1; x <= 5; x++) {
            let expected = x * x * 2;

            it(`Сумма: ${x} * ${x * 2} =  ${expected}.`, function () {
                calculator.read(x, x * 2);
                assert.equal(calculator.mul(), expected);
            });
        }
    });
}) 