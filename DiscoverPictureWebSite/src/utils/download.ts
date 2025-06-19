// Utilitaire pour gérer les téléchargements
export interface DownloadOptions {
  fileName: string;
  version?: string;
  onDownloadStart?: () => void;
  onDownloadComplete?: () => void;
  onDownloadError?: (error: Error) => void;
}

export const downloadAPK = async (options: DownloadOptions): Promise<void> => {
  const { fileName, version = '1.0.0', onDownloadStart, onDownloadComplete, onDownloadError } = options;
  
  try {
    onDownloadStart?.();
    
    // URL du fichier APK
    const downloadUrl = `/downloads/${fileName}`;
    
    // Vérifier si le fichier existe
    const response = await fetch(downloadUrl, { method: 'HEAD' });
    if (!response.ok) {
      throw new Error(`Fichier non trouvé: ${fileName}`);
    }
    
    // Créer le lien de téléchargement
    const link = document.createElement('a');
    link.href = downloadUrl;
    link.download = fileName;
    link.target = '_blank';
    
    // Ajouter des attributs pour la sécurité
    link.rel = 'noopener noreferrer';
    
    // Déclencher le téléchargement
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
      // Optionnel : Envoyer des statistiques (si Google Analytics est installé)
    if (typeof (window as any).gtag !== 'undefined') {
      (window as any).gtag('event', 'download', {
        event_category: 'APK',
        event_label: fileName,
        value: version
      });
    }
    
    onDownloadComplete?.();
    
  } catch (error) {
    console.error('Erreur lors du téléchargement:', error);
    onDownloadError?.(error as Error);
  }
};

// Fonction pour obtenir des informations sur le fichier
export const getAPKInfo = async (fileName: string) => {
  try {
    const response = await fetch(`/downloads/${fileName}`, { method: 'HEAD' });
    if (response.ok) {
      const contentLength = response.headers.get('content-length');
      const lastModified = response.headers.get('last-modified');
      
      return {
        exists: true,
        size: contentLength ? parseInt(contentLength) : null,
        lastModified: lastModified ? new Date(lastModified) : null,
        sizeFormatted: contentLength ? formatFileSize(parseInt(contentLength)) : null
      };
    }
    return { exists: false };
  } catch {
    return { exists: false };
  }
};

// Utilitaire pour formater la taille des fichiers
const formatFileSize = (bytes: number): string => {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
};
