/**
 * Single source of truth for Skymirror office locations.
 *
 * Used by the site footer (src/components/layout/Footer.vue) and the
 * consultation page (src/views/Consultation.vue). Update addresses here
 * only — every surface picks them up automatically.
 */

const mapsUrl = (query) =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`

export const OFFICES = [
  {
    id: 'budapest',
    name: 'Budapest Office',
    badge: 'HQ',
    lines: [
      'Kálmán Imre utca 1',
      'Budapest President Centre, 1054',
      'Budapest, Hungary'
    ],
    mapsUrl: mapsUrl('Kálmán Imre utca 1, 1054 Budapest, Hungary')
  },
  {
    id: 'bauchi',
    name: 'Bauchi Office',
    badge: null,
    lines: [
      'No. 15 Maiduguri Road',
      'NIDB Building, 5th Floor',
      'Bauchi, Nigeria'
    ],
    mapsUrl: mapsUrl('NIDB Building, 15 Maiduguri Road, Bauchi, Nigeria')
  },
  {
    id: 'kano',
    name: 'Kano Office',
    badge: null,
    lines: [
      'AYM Maikifi Plaza, Ground Floor',
      'No. A3, Naibawa',
      'Kano, Nigeria'
    ],
    mapsUrl: mapsUrl('AYM Maikifi Plaza, Naibawa, Kano, Nigeria')
  }
]
