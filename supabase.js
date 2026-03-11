import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm"

const supabaseUrl = "https://fwemutmkbvnriqxxufhx.supabase.co"

const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ3ZW11dG1rYnZucmlxeHh1Zmh4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzMxNjM2MzMsImV4cCI6MjA4ODczOTYzM30.HCXIoI_r7_yGJntTPIizhrP4apxXV3Ahd6Jk2AkvKas"

export const supabase = createClient(supabaseUrl, supabaseKey)