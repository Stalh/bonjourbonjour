# Harrison & Associés – Next.js

Ce dépôt contient la base du site vitrine multilingue du cabinet Harrison & Associés. L'application est construite avec Next.js (App Router), Tailwind CSS et la librairie de composants shadcn/ui. Deux langues sont proposées (français et anglais) avec une structure de navigation optimisée et un design responsive conforme à la maquette initiale.

## Démarrage rapide

```bash
pnpm install # ou npm install / yarn install
pnpm dev     # lance le serveur de développement sur http://localhost:3000
```

## Principales fonctionnalités

- **Next.js 14** avec App Router et TypeScript pour une architecture moderne et maintenable.
- **Internationalisation** : détection automatique de la langue (fr/en) et switcher dans la navigation.
- **UI** : Tailwind CSS, composants shadcn/ui et design responsive inspiré de la maquette Figma.
- **Pages dédiées** : Accueil, Méthodologie, Expertise, Équipe, Fondateur, Contact avec formulaires interactifs.
- **Accessibilité & UX** : navigation mobile, interactions douces, formulaires validés côté client, notifications toast.

## Structure du projet

- `app/[locale]` : layout multilingue et pages marketing.
- `components/` : composants UI, sections et providers (i18n, notifications).
- `lib/i18n` : dictionnaires et configuration des langues.
- `styles/globals.css` : thème Tailwind personnalisé aligné avec l'identité visuelle.

## Production

```bash
pnpm build
pnpm start
```

La configuration prévoit également un middleware pour rediriger automatiquement les visiteurs vers la langue adéquate.
