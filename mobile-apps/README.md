# MT Learning Android pilot apps

Three independent Capacitor Android applications.

| App | Website | Android application ID |
|---|---|---|
| Student | https://www.mtlearning.tech | `tech.mtlearning.student` |
| Teacher | https://teacher.mtlearning.tech | `tech.mtlearning.teacher` |
| Admin | https://admin.mtlearning.tech | `tech.mtlearning.admin` |

Each app loads its matching live website inside a Capacitor WebView. This keeps the current website UI and updates visible without rebuilding. Internet access is required.

## Build
Open **Actions**, select **Build MT Learning Android APKs**, then press **Run workflow**. Three artifacts will be generated: student, teacher, and admin debug APKs.

## Important limitation
This is an internal test pilot, not a Play Store release build. Capacitor's `server.url` option is intended for live reload and is not recommended for production distribution. Before store release, bundle the web app locally or choose a reviewed production architecture. Test login, password reset/deep links, file uploads and downloads, camera flows, back navigation, and each role's complete workflow on real devices. Workflow APKs are unsigned debug APKs for internal testing only.

Never store Supabase service-role keys or private credentials in these projects.
