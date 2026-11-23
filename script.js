function speedup(f, s) {
  return 1 / ((1 - f) + f / s);
}

function checkInputs(fText, sText) {
  if (fText.trim() === "" || sText.trim() === "") {
    return { ok: false, message: "Please fill in both boxes." };
  }
  const f = Number(fText);
  const s = Number(sText);
  if (isNaN(f) || isNaN(s)) {
    return { ok: false, message: "Please type numbers only." };
  }
  if (f < 0 || f > 1) {
    return { ok: false, message: "Fraction must be between 0 and 1." };
  }
  if (s <= 0) {
    return { ok: false, message: "Speedup of the part must be greater than 0." };
  }
  return { ok: true, f: f, s: s };
}

function calculate() {
  const fText = document.getElementById("fraction").value;
  const sText = document.getElementById("speedup").value;
  const out = document.getElementById("result");
  const check = checkInputs(fText, sText);

  if (!check.ok) {
    out.innerText = check.message;
    return;
  }

  const answer = speedup(check.f, check.s);
  out.innerText = "Overall speedup = " + answer.toFixed(2);
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
