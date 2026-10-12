import { useMemo, useState } from 'react';
import { ComposedChart, Line, Scatter, XAxis, YAxis, ResponsiveContainer } from 'recharts';
import { ArrowCounterClockwiseIcon, ArrowRightIcon } from '@phosphor-icons/react';
import { createSignal } from '../lib/signal';

export function SignalLab({ expanded = false }) {
  const [noise, setNoise] = useState(40);
  const [smoothing, setSmoothing] = useState(5);
  const [showSignal, setShowSignal] = useState(false);
  const data = useMemo(() => createSignal(noise, smoothing), [noise, smoothing]);
  return <div className={`signal-lab ${expanded ? 'signal-lab-expanded' : ''}`}>
    <div className="chart-caption"><span>Is there a pattern in the noise?</span><button className="icon-button reset-button" aria-label="Reset experiment" title="Reset experiment" onClick={() => { setNoise(40); setSmoothing(5); setShowSignal(false); }}><ArrowCounterClockwiseIcon size={18} weight="light" /></button></div>
    <div className="signal-chart" role="img" aria-label={`100 noisy measurements with a ${smoothing}-sample moving average. Noise is ${noise} percent. More noise spreads the measurements further from the underlying signal.`}>
      <ResponsiveContainer width="100%" height="100%" minWidth={0}>
        <ComposedChart data={data} margin={{ top: 8, right: 4, bottom: 0, left: 0 }} accessibilityLayer={false}>
          <XAxis type="number" dataKey="x" domain={[0, 99]} hide />
          <YAxis type="number" domain={[-45, 150]} hide />
          <Scatter dataKey="measurement" fill="var(--plot-dot)" fillOpacity={0.7} isAnimationActive={false} shape="circle" legendType="none" />
          {showSignal && <Line dataKey="signal" stroke="var(--muted)" strokeDasharray="4 4" strokeWidth={1.5} dot={false} isAnimationActive={false} />}
          <Line dataKey="estimate" stroke="var(--plot-line)" strokeWidth={2.2} dot={false} isAnimationActive={false} />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
    <div className="range-row"><label htmlFor={expanded ? 'noise-detail' : 'noise'}>Noise</label><input id={expanded ? 'noise-detail' : 'noise'} type="range" min="0" max="100" value={noise} onChange={e => setNoise(Number(e.target.value))} /><output htmlFor={expanded ? 'noise-detail' : 'noise'}>{noise}%</output></div>
    {expanded ? <>
      <div className="range-row"><label htmlFor="smoothing">Smoothing</label><input id="smoothing" type="range" min="1" max="20" value={smoothing} onChange={e => setSmoothing(Number(e.target.value))} /><output htmlFor="smoothing">{smoothing}</output></div>
      <label className="checkbox-label"><input type="checkbox" checked={showSignal} onChange={e => setShowSignal(e.target.checked)} /> Reveal the underlying signal</label>
      <p className="experiment-reading" aria-live="polite">{noise === 0 ? 'No noise: each measurement lands on the underlying signal.' : noise < 35 ? 'Low noise: the shape of the signal is easier to see.' : noise > 70 ? 'High noise: individual measurements tell you much less.' : 'Some noise: the estimate brings the underlying shape into view.'} {smoothing > 10 ? 'A wider average looks calmer, but follows changes more slowly.' : 'Try increasing smoothing to see the trade-off.'}</p>
      <div className="plot-key"><span>Dots · measurements</span><span>Line · moving average</span></div>
    </> : <div className="chart-foot"><span>Move the slider. See what changes.</span><a className="quiet-link" href="/labs/signal/">Try more <ArrowRightIcon size={16} /></a></div>}
  </div>;
}
