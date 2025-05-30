/**
 * @return {Generator<number>}
 */
var fibGenerator = function* () {
    let [prev, curr] = [0, 1];
    yield prev; // Yield the first Fibonacci number
    while (true) {
        yield curr;
        [prev, curr] = [curr, prev + curr];
    }
};

/**
 * const gen = fibGenerator();
 * gen.next().value; // 0
 * gen.next().value; // 1
 */