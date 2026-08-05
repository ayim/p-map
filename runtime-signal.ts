import type {RuntimeEnvelope} from './runtime-envelope.js';

export interface RuntimeSignal {
  service: string;
  latencyMs: number;
  envelope?: RuntimeEnvelope;
}

export function normalizeSignal(signal: RuntimeSignal) {
  return signal.latencyMs;
}
