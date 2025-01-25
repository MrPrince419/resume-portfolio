export const getAssetPath = (path: string | undefined): string => {
  const basePath = '/resume-portfolio';
  const defaultPath = '/profile.jpg';
  
  if (!path) {
    return `${basePath}${defaultPath}`;
  }
  
  return `${basePath}${path.startsWith('/') ? path : `/${path}`}`;
};
