import { supabase } from './supabaseClient.js';

async function fetchGuestData(guestId) {
  const { data, error } = await supabase
    .from('guests')
    .select('*')
    .eq('guestId', guestId)
    .single();

  if (error) {
    console.error('Error fetching guest data:', error);
    return;
  }

  // Update UI based on language
  if (data.language === 'EN') {
    document.getElementById('lang-en').classList.add('underline');
    document.getElementById('lang-zh').classList.remove('underline');
  } else {
    document.getElementById('lang-zh').classList.add('underline');
    document.getElementById('lang-en').classList.remove('underline');
  }
}

fetchGuestData('cheryse0902');

