// A fixed seed keeps comparisons fair: the slider changes noise, not the sample.
export function createSignal(noise = 40, smoothing = 5) {
  let seed = 1931;
  const random = () => {
    seed = (seed * 16807) % 2147483647;
    return (seed - 1) / 2147483646;
  };
  const samples = Array.from({ length: 100 }, (_, i) => {
    const signal = 48 + 17 * Math.sin(i / 10 - 0.6) + 10 * Math.sin(i / 23);
    const jitter = (random() + random() + random() - 1.5) * noise * 0.7;
    return { x: i, signal, measurement: signal + jitter };
  });
  // A causal moving average only uses measurements already seen.
  const window = Math.max(1, Math.round(smoothing));
  return samples.map((sample, i) => {
    const seen = samples.slice(Math.max(0, i - window + 1), i + 1);
    return { ...sample, estimate: seen.reduce((sum, point) => sum + point.measurement, 0) / seen.length };
  });
}
