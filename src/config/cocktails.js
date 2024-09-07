export default [
  {
    familyName: 'House cocktails',
    cocktails: [
      {
        name: 'Bondi Iceberg',
        steps: [
          { label: '3/4 Glace pilée', type: 'crushedIce' },
          { label: '3/4 7-Up Free', type: 'sevenUp'},
          { label: '1 tranche citron jaune', type: 'yellowLemonSlice' },
          { label: '6cl Bondi Mix', isLayered: true },
          { label: 'Trait de pulco', type: 'pulco', isLayered: true },
          { label: 'Layer', type: 'layer' },
        ]
      },
      {
        name: 'Billabong',
        steps: [
          { label: 'Glaçons cube', type: 'crushedIce' },
          { label: '2cl Malibu', type: 'malibu' },
          { label: '2cl liqueur Ginger Giffard', type: 'gingerGiffard' },
          { label: '2cl Blue Curaçao', type: 'blueCuracao' },
          { label: 'Jus d\'ananas', type: 'ananas' },
          { label: 'Shake', type: 'shake' },
        ]
      },
      {
        name: 'Big Pineapple',
        steps: [
          { label: 'Glaçons cube', type: 'crushedIce' },
          { label: '6cl Rhum St James', type: 'rhumStJames' },
          { label: '4cl Coco mix Giffard', type: 'cocoGiffard' },
          { label: 'Jus d\'ananas', type: 'ananas' },
          { label: 'Shake', type: 'shake' },
        ]
      },
      {
        name: 'Darwin Sunset',
        steps: [
          { label: 'Glaçons cube', type: 'crushedIce' },
          { label: '1/2 Jus d\'orange', type: 'orange' },
          { label: 'Jus d\'ananas', type: 'ananas' },
          { label: 'Glaçon dans un shaker', type: 'crushedIce', isLayered: true },
          { label: '4cl Rhum St James', type: 'rhumStJames', isLayered: true },
          { label: '2cl Captain Morgan', type: 'morgan', isLayered: true },
          { label: 'Sirop de grenadine', type: 'grenade', isLayered: true },
          { label: 'Shake', type: 'shake', isLayered: true },
          { label: 'Layer', type: 'layer' },
        ]
      },
      {
        name: 'Desert Coral',
        steps: [
          { label: 'Glaçons cube', type: 'crushedIce' },
          { label: '4cl Vodka', type: 'vodka' },
          { label: '2cl Peach Tree', type: 'peachTree' },
          { label: 'Jus de cranberry', type: 'cranberry' },
          { label: 'Shake', type: 'shake' },
        ]
      },
      {
        name: 'Batida Passion',
        steps: [
          { label: '1 citron vert pressé', type: 'greenLemon' },
          { label: '3/4 Glace pilée', type: 'crushedIce' },
          { label: '6cl Cachaca' },
          { label: '2cl Coco mix Giffard', type: 'cocoGiffard' },
          { label: '2cl Sirop Passion', type: 'passion' },
          { label: 'Shake', type: 'shake' },
        ]
      }
    ]
  },
]