const slugToTitleDictionary = {
    'react': 'React',
    'amelioration': 'Pack Amélioration',
    'confidentialites': 'Politique de confidentialité RGPD',
    'condition': 'Conditions générales de vente (CGV)',
    'decouverte': 'Pack Découverte',
    'mentions': 'Mentions légales',
    'premium': 'Pack Premium',
    'remboursement': 'Politique de remboursement',
    'services': 'Nos Services',
    'contact': 'Contact',
    'propos': 'À propos',
    'realisations': 'Nos Réalisations',
    '': 'Accueil'
};

export const slugToTitle = (slug) => {
    return slugToTitleDictionary[slug] ||
    slug.replace(/-/g, ' ')
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}