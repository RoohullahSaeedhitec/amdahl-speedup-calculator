function speedup(f, s) {
  return 1 / ((1 - f) + f / s);
}

function runTests() {
  const tests = [
    { f: 0.6, s: 2, expected: 1.43 },
    { f: 0.8, s: 4, expected: 2.5 },
    { f: 0.5, s: 10, expected: 1.82 }
  ];

  tests.forEach(function (t, i) {
    const answer = Number(speedup(t.f, t.s).toFixed(2));
    const result = answer === t.expected ? "PASS" : "FAIL";
    console.log("Example " + (i + 1) + ": f = " + t.f + ", s = " + t.s +
      " | expected = " + t.expected + " | got = " + answer + " | " + result);
  });
}

runTests();
