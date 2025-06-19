# 📧 Configuration du Formulaire de Contact

## 🚀 Option 1 : Formspree (Recommandée - GRATUITE)

### Étapes à suivre :

1. **Créer un compte Formspree**
   - Aller sur [formspree.io](https://formspree.io)
   - Créer un compte gratuit
   - Créer un nouveau formulaire

2. **Récupérer l'ID du formulaire**
   - Après création, vous obtiendrez un ID comme `xbjvgpqw`
   - L'URL sera : `https://formspree.io/f/xbjvgpqw`

3. **Mettre à jour le code**
   - Dans `src/components/Contact.tsx`, remplacer `VOTRE_FORM_ID` par votre ID
   - Exemple : `action="https://formspree.io/f/xbjvgpqw"`

4. **Limites gratuites de Formspree**
   - 50 soumissions/mois
   - Parfait pour un site personnel/professionnel

---

## 🌐 Option 2 : Netlify Forms (Si hébergé sur Netlify)

Si vous hébergez sur Netlify, remplacez le formulaire par :

```jsx
<form 
  className="message-form" 
  name="contact" 
  method="POST" 
  data-netlify="true"
  data-netlify-honeypot="bot-field"
>
  <input type="hidden" name="form-name" value="contact" />
  <input type="hidden" name="bot-field" />
  {/* Vos champs existants */}
</form>
```

---

## 📧 Option 3 : EmailJS (100% Frontend)

### Installation :
```bash
npm install @emailjs/browser
```

### Configuration :
1. Créer un compte sur [emailjs.com](https://www.emailjs.com)
2. Configurer un service email (Gmail, Outlook, etc.)
3. Créer un template d'email
4. Remplacer le formulaire par le code EmailJS

---

## 🔧 Option 4 : API Route (Pour Next.js ou serveur)

Si vous migrez vers Next.js plus tard, vous pourrez utiliser des API routes avec nodemailer.

---

## ✅ Recommandation

**Utilisez Formspree** - C'est la solution la plus simple et gratuite pour votre cas d'usage !

### Prochaines étapes :
1. Créer un compte Formspree
2. Remplacer `VOTRE_FORM_ID` dans le code
3. Tester le formulaire
4. Personnaliser les messages de confirmation

### Personnalisation des messages :
- Configurez une page de remerciement personnalisée sur Formspree
- Ou utilisez les champs cachés `_next` pour rediriger vers votre site
