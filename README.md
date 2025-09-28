# Harrison & Associés – Next.js

Ce dépôt contient la base du site vitrine du cabinet Harrison & Associés. L'application est construite avec Next.js (App Router), Tailwind CSS et la librairie de composants shadcn/ui. L'expérience est livrée en français et reprend les sections de la maquette Figma dans une structure simple et responsive.

## Démarrage rapide

```bash
pnpm install # ou npm install / yarn install
pnpm dev     # lance le serveur de développement sur http://localhost:3000
```

## Principales fonctionnalités

- **Next.js 14** avec App Router et TypeScript pour une architecture moderne et maintenable.
- **UI** : Tailwind CSS, composants shadcn/ui et design responsive inspiré de la maquette Figma.
- **Pages dédiées** : Accueil, Méthodologie, Expertise, Équipe, Fondateur, Contact avec formulaires interactifs.
- **Expérience fluide** : navigation cohérente et formulaire de contact accessible depuis chaque page.
- **Accessibilité & UX** : navigation mobile, interactions douces, formulaires validés côté client, notifications toast.

## Structure du projet

- `app/(marketing)` : layout applicatif et pages marketing accessibles directement (/, /methodology, /expertise, ...).
- `components/` : composants UI, sections et providers (i18n, notifications).
- `lib/i18n` : dictionnaires de contenu (fr par défaut, base pour d'éventuelles traductions).
- `styles/globals.css` : thème Tailwind personnalisé aligné avec l'identité visuelle.

## Production

```bash
pnpm build
pnpm start
```

L'application s'ouvre directement sur la page d'accueil via http://localhost:3000.
