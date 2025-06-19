# 📱 Guide complet pour configurer le téléchargement d'APK

## 🚀 Étapes pour configurer le téléchargement automatique

### 1. **Placer votre fichier APK**
```bash
# Copiez votre APK dans ce dossier :
/public/downloads/DiscoverPicture.apk
```

### 2. **Vérifier la configuration**
- Le nom du fichier doit correspondre à : `DiscoverPicture.apk`
- Ou modifier le nom dans `/src/components/Download.tsx` ligne 25

### 3. **Fonctionnalités incluses**
✅ **Téléchargement automatique** - Clic → téléchargement direct  
✅ **Vérification d'existence** - Le bouton se désactive si le fichier n'existe pas  
✅ **Affichage de la taille** - Taille réelle du fichier APK  
✅ **États visuels** - Téléchargement, succès, erreur  
✅ **Analytics** - Suivi des téléchargements (si Google Analytics configuré)  

### 4. **Test en local**
```bash
# 1. Placez votre APK dans public/downloads/
# 2. Lancez le serveur
npm run dev

# 3. Testez l'URL directe
http://localhost:5173/downloads/DiscoverPicture.apk

# 4. Testez le bouton sur votre site
http://localhost:5173/discoverpicture-website/
```

## 🌐 Déploiement en production

### **Netlify / Vercel**
```bash
# Les fichiers dans /public/ sont automatiquement servis
# Votre APK sera accessible à :
https://votre-site.com/downloads/DiscoverPicture.apk
```

### **GitHub Pages**
```bash
# Assurez-vous que le serveur peut servir les fichiers .apk
# Ajoutez dans votre configuration si nécessaire
```

### **Serveur personnalisé**
```nginx
# Configuration Nginx pour servir les APK
location /downloads/ {
    add_header Content-Type application/vnd.android.package-archive;
    add_header Content-Disposition "attachment";
}
```

## 📊 Métriques et Analytics

Le code inclut automatiquement le suivi des téléchargements :
```javascript
// Événement envoyé à Google Analytics
gtag('event', 'download', {
  event_category: 'APK',
  event_label: 'DiscoverPicture.apk',
  value: '1.0.0'
});
```

## 🔧 Personnalisation

### **Changer le nom du fichier**
```typescript
// Dans src/components/Download.tsx
const info = await getAPKInfo('VotreApp.apk');
await downloadAPK({
  fileName: 'VotreApp.apk',
  version: '2.0.0'
});
```

### **Ajouter des versions multiples**
```typescript
// Vous pouvez étendre pour supporter plusieurs versions
const versions = [
  { name: 'DiscoverPicture-v1.0.0.apk', version: '1.0.0', label: 'Stable' },
  { name: 'DiscoverPicture-v1.1.0-beta.apk', version: '1.1.0-beta', label: 'Beta' }
];
```

## ⚠️ Considérations importantes

1. **Taille du fichier** - Les APK peuvent être volumineux (20-100MB)
2. **Sécurité** - Assurez-vous que votre APK est signé et sûr
3. **HTTPS** - Nécessaire pour la plupart des navigateurs modernes
4. **MIME type** - Le serveur doit servir les APK avec le bon type
5. **Téléchargements mobiles** - Testez sur différents navigateurs mobiles

## 🆘 Dépannage

### **Le fichier ne se télécharge pas**
```bash
# Vérifiez que le fichier existe
curl -I http://localhost:5173/downloads/DiscoverPicture.apk

# Vérifiez les permissions
ls -la public/downloads/
```

### **Le bouton est désactivé**
- Le fichier n'existe pas dans `/public/downloads/`
- Le nom du fichier ne correspond pas
- Erreur de réseau lors de la vérification

### **Erreur 404**
- Vérifiez le chemin du fichier
- Assurez-vous que le serveur sert les fichiers statiques
- Vérifiez la configuration de votre hébergeur
