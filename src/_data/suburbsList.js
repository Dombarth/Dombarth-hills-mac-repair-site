import suburbs from './suburbs.json' with { type: 'json' };

export default function() {
  return Object.keys(suburbs).map(key => ({
    slug: key,
    ...suburbs[key]
  }));
}
