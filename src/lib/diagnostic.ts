import type { DiagnosticFormData, SimulationResult } from '../types';

export async function simulateDiagnosticSubmission(
  _payload: DiagnosticFormData,
): Promise<SimulationResult> {
  await new Promise((resolve) => window.setTimeout(resolve, 900));

  return {
    simulated: true,
    submittedAt: new Date().toISOString(),
  };
}
