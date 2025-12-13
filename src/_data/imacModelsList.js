const imacModels = require('./imacModels.json');

module.exports = Object.values(imacModels).sort((a, b) => {
  // Sort by year descending, then by size
  if (b.year !== a.year) return b.year - a.year;
  return b.size.localeCompare(a.size);
});
