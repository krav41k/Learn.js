describe("Автоматичне тестування квадратного рівняння:", function () {
    context("Тест 1.", function () {
        let test = new СreateSquare(1, 3, 2);

        it("Входние данные: a=1, b=3, c=2. Получаем: x1 = -2, x2 = -1. ", function () {

            assert.deepEqual(test.findRoots(), [-2, -1]);
        });
    });

    context("Тест 2.", function () {
        let test = new СreateSquare(1, "", 2);

        it("Входние данные: не вводим b. Значение b не введено.", function () {

            assert.equal(test.findRoots(), "Значение b не задано.");
        });
    });

    context("Тест 3.", function () {
        let test = new СreateSquare(0, 3, 2);

        it("Входние данные: вместо a вводим 0.", function () {

            assert.equal(test.findRoots(), "Возможно деление на 0.");
        });
    });

    context("Тест 4.", function () {
        dataListForTest4 = [
            [-2, -1],
            [-3.414, -0.586],
            [-4.562, -0.438],
            [-5.646, -0.354],
            [-6.702, -0.298]
        ];
        for (let i = 0; i < 5; i++) {
            let test = new СreateSquare(1, i+3, 2);

            it(`Входние данные: a=1, b=${i+3}, c=2. Получаем: x1 = ${dataListForTest4[i][0]}, x2 = ${dataListForTest4[i][1]}. `, function () {
                assert.deepEqual(test.findRoots(), dataListForTest4[i]);
            });
        }
    });

    context("Тест 5.", function () {
        let test = new СreateSquare(1, 8, 0);

        it("Входние данные: a=1, b=8, c=0. Получаем: x1 = -8, x2 = 0. ", function () {

            assert.deepEqual(test.findRoots(), [-8, 0]);
        });
    });

    context("Тест 6.", function () {
        let test = new СreateSquare(1, 2, 3);

        it("Входние данные: a=1, b=2, c=3. Получаем: undefined ", function () {

            assert.deepEqual(test.findRoots(), undefined);
        });
    });
}); 