import test from 'node:test';
import assert from 'node:assert/strict';
import { createSignal } from '../src/lib/signal.js';

test('no noise and a one-sample window recover the exact signal', () => {
  for (const point of createSignal(0, 1)) {
    assert.equal(point.measurement, point.signal);
    assert.equal(point.estimate, point.signal);
  }
});

test('smoothing averages only the current and earlier measurements', () => {
  const samples = createSignal(65, 5);
  for (let i = 0; i < samples.length; i++) {
    const past = samples.slice(Math.max(0, i - 4), i + 1);
    assert.equal(samples[i].estimate, past.reduce((sum, point) => sum + point.measurement, 0) / past.length);
  }
});

test('changing noise preserves the seeded sample and scales its deviation', () => {
  const low = createSignal(20, 5);
  const high = createSignal(80, 5);
  low.forEach((point, i) => assert.ok(Math.abs((point.measurement - point.signal) * 4 - (high[i].measurement - high[i].signal)) < 1e-10));
  assert.deepEqual(createSignal(20, 5), low);
});
