const golfScoreCalculator = (p, s) => {
    p = [...p];
    s = [...s];

    return s.map((sc, id) => sc - p[id]).reduce((a, b) => a + b, 0);
};
