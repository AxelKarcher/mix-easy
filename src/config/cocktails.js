export default [
  {
    familyName: 'House cocktails',
    cocktails: [
      {
        name: 'Bondi Iceberg',
        steps: [
          { label: '3/4 Glace pilée', type: 'ice' },
          { label: '3/4 7-Up Free', type: 'sevenUp'},
          { label: '1 tranche citron jaune', type: 'lemon' },
          { label: '6cl Bondi Mix', isLayered: true },
          { label: 'Trait de pulco', type: 'pulco', isLayered: true },
          { label: 'Layer', type: 'layer' },
        ]
      },
      {
        name: 'Billabong',
        steps: [
          { label: 'Glaçons cube', type: 'ice' },
          { label: '2cl Malibu', type: 'malibu' },
          { label: '2cl liqueur Ginger Giffard', type: 'ginger' },
          { label: '2cl Blue Curaçao', type: 'blueCuracao' },
          { label: 'Jus d\'ananas', type: 'ananas' },
          { label: 'Shake', type: 'shake' },
        ]
      },
      {
        name: 'Big Pineapple',
        steps: [
          { label: 'Glaçons cube', type: 'ice' },
          { label: '6cl Rhum St James', type: 'rhumStJames' },
          { label: '4cl Coco mix Giffard', type: 'cocoGiffard' },
          { label: 'Jus d\'ananas', type: 'ananas' },
          { label: 'Shake', type: 'shake' },
        ]
      },
      {
        name: 'Darwin Sunset',
        steps: [
          { label: 'Glaçons cube', type: 'ice' },
          { label: '1/2 Jus d\'orange', type: 'orange' },
          { label: 'Jus d\'ananas', type: 'ananas' },
          { label: 'Glaçon dans un shaker', type: 'ice', isLayered: true },
          { label: '4cl Rhum St James', type: 'rhumStJames', isLayered: true },
          { label: '2cl Captain Morgan', type: 'captainMorgan', isLayered: true },
          { label: 'Sirop de grenadine', type: 'grenade', isLayered: true },
          { label: 'Shake', type: 'shake', isLayered: true },
          { label: 'Layer', type: 'layer' },
        ]
      },
      {
        name: 'Desert Coral',
        steps: [
          { label: 'Glaçons cube', type: 'ice' },
          { label: '4cl Vodka', type: 'vodka' },
          { label: '2cl Peach Tree', type: 'peachTree' },
          { label: 'Jus de cranberry', type: 'cranberry' },
          { label: 'Shake', type: 'shake' },
        ]
      },
      {
        name: 'Batida Passion',
        steps: [
          { label: '1 citron vert pressé', type: 'lime' },
          { label: '3/4 Glace pilée', type: 'ice' },
          { label: '6cl Cachaca' },
          { label: '2cl Coco mix Giffard', type: 'cocoGiffard' },
          { label: '2cl Sirop Passion', type: 'passion' },
          { label: 'Shake', type: 'shake' },
        ]
      },
      {
        name: 'Spiced Rhubarb Mule',
        steps: [
          { label: '3 citrons verts', type: 'lime' },
          { label: 'Piler', type: 'crush' },
          { label: 'Glaçons cube', type: 'ice' },
          { label: '4cl Captain Morgan', type: 'captainMorgan' },
          { label: '2cl Liqueur de rhubarbe', type: 'rhubarb' },
          { label: 'Remplir de Ginger Beer', type: 'ginger' },
          { label: 'Mélanger avec la cuillière', type: 'mix' },
        ]
      },
      {
        name: 'Byron Bay',
        steps: [
          { label: 'Glaçons cube (remplir)', type: 'ice' },
          { label: '2cl Aperol', type: 'aperol' },
          { label: '2cl Gin', type: 'gin' },
          { label: '2cl St Germain', type: 'stGermain' },
          { label: '8cl Prosecco', type: 'prosecco' },
        ]
      },
      {
        name: 'Gin Fizz',
        steps: [
          { label: 'Glaçons cube', type: 'ice' },
          { label: '3 citrons verts', type: 'lime' },
          { label: 'Piler', type: 'crush' },
          { label: '6cl Gin', type: 'gin' },
          { label: 'Trait de pulco', type: 'pulco' },
          { label: '2cl Sirop sucre de canne', type: 'sugarCane' },
          { label: 'Shake', type: 'shake' },
          { label: 'Soda', type: 'soda' },
        ]
      }
    ]
  },
]