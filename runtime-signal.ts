export interface RuntimeSignal {
  service: string;
  latencyMs: number;
}

export function normalizeSignal(signal: RuntimeSignal {
  return signal.latencyMs;
}
