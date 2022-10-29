import globalConfig from '@/config/global-config/global-config';

export function withBaseBrainyURL(path: string): string {
  const separator = path.startsWith('/') ? '' : '/';
  return `${globalConfig.baseBrainyURL()}${separator}${path}`;
}
