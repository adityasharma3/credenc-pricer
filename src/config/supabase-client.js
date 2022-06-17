import { createClient } from '@supabase/supabase-js'

const supabase = createClient('https://alpteondiyihwnramdeq.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFscHRlb25kaXlpaHducmFtZGVxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTQ3NTY2ODMsImV4cCI6MTk3MDMzMjY4M30.v5rt1ouQOWaEd5E5COepZgDY8pEOTDse5Z3iOv4IK2o');

export default supabase;