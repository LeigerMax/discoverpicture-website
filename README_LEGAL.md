# DiscoverPicture Website - Documents Légaux

## 📋 Nouvelles fonctionnalités ajoutées

### Documents légaux intégrés
Le site web inclut maintenant les documents légaux complets de l'application DiscoverPicture :

#### 📄 **Conditions d'Utilisation**
- Acceptation des conditions
- Fonctionnement général de l'app
- Responsabilités de l'utilisateur
- Limitations techniques
- Propriété intellectuelle
- Modifications des conditions

#### 🔒 **Politique de Confidentialité**
- Collecte de données (aucune !)
- Données stockées localement
- Contrôle du partage par l'utilisateur
- Mesures de sécurité intégrées
- Droits des utilisateurs
- Modifications de la politique

#### ⚡ **Informations techniques de sécurité**
- Architecture de sécurité
- Limitations connues
- Responsabilités de chaque partie

## 🎯 Comment accéder aux documents

### Sur le site web
1. Faire défiler jusqu'au **footer**
2. Cliquer sur **"Politique de confidentialité"** ou **"Conditions d'utilisation"**
3. Une page dédiée s'ouvre avec le document complet
4. Bouton "Retour" pour revenir au site principal

### Fonctionnalités
- ✅ **Bilingue** : Français et Anglais
- ✅ **Design moderne** : Interface élégante et lisible
- ✅ **Navigation facile** : Bouton de retour, sections organisées
- ✅ **Contact intégré** : Lien direct vers l'email de support
- ✅ **Mobile-friendly** : Responsive design

## 📧 Contact mis à jour

L'adresse email de contact a été mise à jour :
- **Nouvelle adresse** : `max.allemeersch@gmail.com`
- **Ancienne adresse** : `contact@discoverpicture.app`

## 🚀 Utilisation

### Pour les développeurs
```tsx
// Afficher les documents légaux
<Footer 
  language={language} 
  onShowLegal={(type) => setShowLegal(type)}
/>

// Composant Legal standalone
<Legal 
  language="fr" 
  type="terms" // ou "privacy"
  onBack={() => setShowLegal(null)}
/>
```

### Structure des données
Les documents légaux sont stockés dans `src/data/content.json` sous la clé `legal` :

```json
{
  "legal": {
    "terms": { ... },
    "privacy": { ... },
    "security": { ... }
  }
}
```

## 🎨 Styles personnalisés

Les documents légaux ont leur propre feuille de style : `src/components/Legal.css`

### Fonctionnalités de style
- **Fond dégradé** élégant
- **Cartes avec blur effect** pour le contenu
- **Sections organisées** avec bordures colorées
- **Responsive design** pour mobile
- **Animations subtiles** au scroll

## 📱 Responsive Design

Les documents s'adaptent parfaitement aux différentes tailles d'écran :
- **Desktop** : Mise en page complète avec sidebar
- **Tablet** : Adaptation de la navigation
- **Mobile** : Layout vertical optimisé

## ⚠️ Notes importantes

1. **Suppression de la section Screenshots** : La section photos a été complètement supprimée du site
2. **Documents complets** : Tous les textes légaux de l'app sont maintenant sur le site
3. **Conformité** : Les documents respectent les standards légaux français et européens
4. **Mise à jour facile** : Modification via le fichier JSON centralisé

---

**Dernière mise à jour** : 19 juin 2025  
**Version du site** : 1.0.0  
**Contact** : max.allemeersch@gmail.com
