import type { CapacitorConfig } from '@capacitor/cli';
const config: CapacitorConfig = {
  appId: 'tech.mtlearning.admin', appName: 'MT Learning Admin', webDir: 'www', backgroundColor: '#F6F4EE', loggingBehavior: 'none',
  server: { url: 'https://admin.mtlearning.tech', cleartext: false, allowNavigation: ['admin.mtlearning.tech','cutttmlxxjwufznqmyno.supabase.co'], errorPath: 'offline.html' }
};
export default config;
