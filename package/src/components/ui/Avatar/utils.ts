import type { AvatarStatus } from './types';

export function getAvatarStatusClass(status: AvatarStatus) {
  const classObject: Record<AvatarStatus, string> = {
    online: 'avatar-online',
    offline: 'avatar-offline',
  };

  return classObject[status];
}
