export const corsHeaders = {
  "Access-Control-Allow-Origin": Deno.env.get("MT_ALLOWED_ORIGIN") ?? "https://YOUR-MT-DOMAIN.example",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};
