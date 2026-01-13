/**
 * Demo Scenario Data
 * Simplified for 4-step demo
 */

export const SCENARIO = {
  transfer: {
    amount: 1000,
    token: 'USDC',
    recipient: '0x3C44...93bD',
    windowHours: 24,
    fee: 10,
    feePercent: 1.0,
  },

  threat: {
    suspiciousAddress: '0x3C44...93bD',
    knownContact: {
      address: '0x3C44...93BC',
      label: 'Alice',
    },
    difference: 'C → D',
  },

  rewind: {
    recovered: 985,
    fees: 15,
    feePercent: 1.5,
  },
};
