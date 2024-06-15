import { createClient } from "@supabase/supabase-js";

const link = 'https://ckjhurntefgmidydubrt.supabase.co'
const chave = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNramh1cm50ZWZnbWlkeWR1YnJ0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTg0MDYyMTAsImV4cCI6MjAzMzk4MjIxMH0.rilDBro3F_dn5kH_hfTI9fveiqZj6ThtqXTsZgSNH4U'

export const supabase = createClient(link, chave)