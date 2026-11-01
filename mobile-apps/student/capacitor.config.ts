import type { CapacitorConfig } from '@capacitor/cli';
const config: CapacitorConfig = {
  appId: 'tech.mtlearning.student', appName: 'MT Learning Student', webDir: 'www', backgroundColor: '#F6F4EE', loggingBehavior: 'none',
  server: { url: 'https://www.mtlearning.tech', cleartext: false, allowNavigation: ['www.mtlearning.tech','mtlearning.tech','cutttmlxxjwufznqmyno.supabase.co'], errorPath: 'offline.html' }
};
export default config;
