// supabase.js
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://rudzotpkqxmcpcgdemrt.supabase.co'; 
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ1ZHpvdHBrcXhtY3BjZ2RlbXJ0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzEzNTA3NDEsImV4cCI6MjA0NjkyNjc0MX0.TEVjNaf4nGKK-K-nfbo-RYS3ru6ENs_SCeKe9lmnPx8'; // Substitua pela chave anônima

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
