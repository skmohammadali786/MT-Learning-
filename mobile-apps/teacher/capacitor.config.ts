import type { CapacitorConfig } from '@capacitor/cli';
const config: CapacitorConfig = {
  appId: 'tech.mtlearning.teacher', appName: 'MT Learning Teacher', webDir: 'www', backgroundColor: '#F6F4EE', loggingBehavior: 'none',
  server: { url: 'https://teacher.mtlearning.tech', cleartext: false, allowNavigation: ['teacher.mtlearning.tech','cutttmlxxjwufznqmyno.supabase.co'], errorPath: 'offline.html' }
};
export default config;
