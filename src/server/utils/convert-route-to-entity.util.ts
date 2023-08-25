const mapping: Record<string, string> = {
  cashouts: 'cashout',
  offers: 'offer',
  organizations: 'organization',
  reports: 'report',
  screenshots: 'screenshot',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
