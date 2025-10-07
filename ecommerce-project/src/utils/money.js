export function formatMoney(amountCents) {
  amountCents < 0
    ? amountCents = `-$${Math.abs((amountCents / 100)).toFixed(2)}`
    : amountCents = `$${(amountCents / 100).toFixed(2)}`;
  return amountCents;
}