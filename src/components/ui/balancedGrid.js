// Balanced card grids: 1 column on mobile, 2 on tablet, 3 on desktop, with any
// leftover cards on the last row centered instead of leaving an empty gap.
// Built on a 6-column track so a card can start "half a card" in.
//
// Usage:
//   <div className={`${BALANCED_GRID} gap-8`}>
//     {items.map((item, i) => <div className={balancedCellClass(i, items.length)}>…</div>)}
//   </div>

export const BALANCED_GRID = 'grid grid-cols-1 md:grid-cols-6';

export const balancedCellClass = (index, total) => {
  const classes = ['md:col-span-3', 'lg:col-span-2'];

  // Tablet (2 per row): a single leftover card is centered.
  const mdOrphan = total % 2 === 1 && index === total - 1;
  if (mdOrphan) classes.push('md:col-start-2');

  // Desktop (3 per row): one leftover is centered; two leftovers are offset by half a card.
  const lgRemainder = total % 3;
  const lgLastRowStart = total - lgRemainder;
  if (lgRemainder === 1 && index === lgLastRowStart) classes.push('lg:col-start-3');
  else if (lgRemainder === 2 && index === lgLastRowStart) classes.push('lg:col-start-2');
  else if (mdOrphan) classes.push('lg:col-start-auto');

  return classes.join(' ');
};
