// Import Supabase client
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://ujdseujdbnuvzwqrnlvx.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVqZHNldWpkYm51dnp3cXJubHZ4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDc2Mjg5OTcsImV4cCI6MjA2MzIwNDk5N30.a_n56LzvTZDrdSAWGkW6YcrFjxS4lht8EF-aav21NkE'

// Create a Supabase client
const supabase = createClient(supabaseUrl, supabaseKey)

// Your JSON data
const guests = [
  {
    "guestId": "cheryse0902",
    "name": "Cheryse",
    "isAdmin": true,
    "guestType": "Bride & Groom",
    "groupIds": [
      "kwan"
    ],
    "rsvp": {
      "status": "Pending",
      "needsAlternativeFood": false,
      "dietaryNotes": "",
      "lastUpdatedBy": null,
      "lastUpdatedDateTime": null
    },
    "email": "cherysewee@gmail.com",
    "language": "EN"
  },
  {
    "guestId": "winston3005",
    "name": "Winston",
    "isAdmin": true,
    "guestType": "Bride & Groom",
    "groupIds": [
      "kwan"
    ],
    "rsvp": {
      "status": "Pending",
      "needsAlternativeFood": false,
      "dietaryNotes": "",
      "lastUpdatedBy": null,
      "lastUpdatedDateTime": null
    },
    "email": "",
    "language": "EN"
  },
  {
    "guestId": "catherine2612",
    "name": "Catherine",
    "isAdmin": false,
    "guestType": "Family",
    "groupIds": [
      "wee"
    ],
    "rsvp": {
      "status": "Pending",
      "needsAlternativeFood": false,
      "dietaryNotes": "",
      "lastUpdatedBy": null,
      "lastUpdatedDateTime": null
    },
    "email": "",
    "language": "EN"
  },
  {
    "guestId": "jacky1510",
    "name": "Jacky",
    "isAdmin": false,
    "guestType": "Family",
    "groupIds": [
      "wee",
      "wee_nainai"
    ],
    "rsvp": {
      "status": "Pending",
      "needsAlternativeFood": false,
      "dietaryNotes": "",
      "lastUpdatedBy": null,
      "lastUpdatedDateTime": null
    },
    "email": "",
    "language": "EN"
  },
  {
    "guestId": "javier0208",
    "name": "Javier",
    "isAdmin": false,
    "guestType": "Family",
    "groupIds": [
      "wee",
      "plusOne_wee"
    ],
    "rsvp": {
      "status": "Pending",
      "needsAlternativeFood": false,
      "dietaryNotes": "",
      "lastUpdatedBy": null,
      "lastUpdatedDateTime": null
    },
    "email": "",
    "language": "EN"
  },
  {
    "guestId": "luanna2205",
    "name": "Luanna",
    "isAdmin": false,
    "guestType": "Family",
    "groupIds": [
      "plusOne_wee"
    ],
    "rsvp": {
      "status": "Pending",
      "needsAlternativeFood": false,
      "dietaryNotes": "",
      "lastUpdatedBy": null,
      "lastUpdatedDateTime": null
    },
    "email": "",
    "language": "EN"
  },
  {
    "guestId": "caylie3006",
    "name": "Caylie",
    "isAdmin": false,
    "guestType": "Family",
    "groupIds": [
      "wee"
    ],
    "rsvp": {
      "status": "Pending",
      "needsAlternativeFood": false,
      "dietaryNotes": "",
      "lastUpdatedBy": null,
      "lastUpdatedDateTime": null
    },
    "email": "",
    "language": "EN"
  },
  {
    "guestId": "whiskey0207",
    "name": "Whiskey",
    "isAdmin": false,
    "guestType": "Fur Babies",
    "groupIds": [
      "wee"
    ],
    "rsvp": {
      "status": "Pending",
      "needsAlternativeFood": false,
      "dietaryNotes": "",
      "lastUpdatedBy": null,
      "lastUpdatedDateTime": null
    },
    "email": "",
    "language": "EN"
  },
  {
    "guestId": "lyka2408",
    "name": "Lyka",
    "isAdmin": false,
    "guestType": "Family",
    "groupIds": [
      "helper"
    ],
    "rsvp": {
      "status": "Pending",
      "needsAlternativeFood": false,
      "dietaryNotes": "",
      "lastUpdatedBy": null,
      "lastUpdatedDateTime": null
    },
    "email": "",
    "language": "EN"
  },
  {
    "guestId": "ahma2602",
    "name": "阿嬷",
    "isAdmin": false,
    "guestType": "Family",
    "groupIds": [
      "choo"
    ],
    "rsvp": {
      "status": "Pending",
      "needsAlternativeFood": false,
      "dietaryNotes": "",
      "lastUpdatedBy": null,
      "lastUpdatedDateTime": null
    },
    "email": "",
    "language": "ZH"
  },
  {
    "guestId": "ahgong2606",
    "name": "阿公",
    "isAdmin": false,
    "guestType": "Family",
    "groupIds": [
      "choo"
    ],
    "rsvp": {
      "status": "Pending",
      "needsAlternativeFood": false,
      "dietaryNotes": "",
      "lastUpdatedBy": null,
      "lastUpdatedDateTime": null
    },
    "email": "",
    "language": "ZH"
  },
  {
    "guestId": "kay2604",
    "name": "Kay",
    "isAdmin": false,
    "guestType": "Family",
    "groupIds": [
      "choo"
    ],
    "rsvp": {
      "status": "Pending",
      "needsAlternativeFood": false,
      "dietaryNotes": "",
      "lastUpdatedBy": null,
      "lastUpdatedDateTime": null
    },
    "email": "",
    "language": "EN"
  },
  {
    "guestId": "nainai0103",
    "name": "奶奶",
    "isAdmin": false,
    "guestType": "Family",
    "groupIds": [
      "wee_nainai"
    ],
    "rsvp": {
      "status": "Pending",
      "needsAlternativeFood": false,
      "dietaryNotes": "",
      "lastUpdatedBy": null,
      "lastUpdatedDateTime": null
    },
    "email": "",
    "language": "ZH"
  },
  {
    "guestId": "eric1608",
    "name": "Eric",
    "isAdmin": false,
    "guestType": "Family",
    "groupIds": [
      "wee_ext",
      "wee_nainai"
    ],
    "rsvp": {
      "status": "Pending",
      "needsAlternativeFood": false,
      "dietaryNotes": "",
      "lastUpdatedBy": null,
      "lastUpdatedDateTime": null
    },
    "email": "",
    "language": "EN"
  },
  {
    "guestId": "elaina1010",
    "name": "Elaina",
    "isAdmin": false,
    "guestType": "Family",
    "groupIds": [
      "wee_ext"
    ],
    "rsvp": {
      "status": "Pending",
      "needsAlternativeFood": false,
      "dietaryNotes": "",
      "lastUpdatedBy": null,
      "lastUpdatedDateTime": null
    },
    "email": "",
    "language": "EN"
  },
  {
    "guestId": "endre1010",
    "name": "Endre",
    "isAdmin": false,
    "guestType": "Family",
    "groupIds": [
      "wee_ext"
    ],
    "rsvp": {
      "status": "Pending",
      "needsAlternativeFood": false,
      "dietaryNotes": "",
      "lastUpdatedBy": null,
      "lastUpdatedDateTime": null
    },
    "email": "",
    "language": "EN"
  },
  {
    "guestId": "sheena1703",
    "name": "Sheena",
    "isAdmin": false,
    "guestType": "Family",
    "groupIds": [
      "ng"
    ],
    "rsvp": {
      "status": "Pending",
      "needsAlternativeFood": false,
      "dietaryNotes": "",
      "lastUpdatedBy": null,
      "lastUpdatedDateTime": null
    },
    "email": "",
    "language": "EN"
  },
  {
    "guestId": "gibson0106",
    "name": "Gibson",
    "isAdmin": false,
    "guestType": "Family",
    "groupIds": [
      "ng"
    ],
    "rsvp": {
      "status": "Pending",
      "needsAlternativeFood": false,
      "dietaryNotes": "",
      "lastUpdatedBy": null,
      "lastUpdatedDateTime": null
    },
    "email": "",
    "language": "EN"
  },
  {
    "guestId": "gareth2010",
    "name": "Gareth",
    "isAdmin": false,
    "guestType": "Family",
    "groupIds": [
      "ng"
    ],
    "rsvp": {
      "status": "Pending",
      "needsAlternativeFood": false,
      "dietaryNotes": "",
      "lastUpdatedBy": null,
      "lastUpdatedDateTime": null
    },
    "email": "",
    "language": "EN"
  },
  {
    "guestId": "glendon2501",
    "name": "Glendon",
    "isAdmin": false,
    "guestType": "Family",
    "groupIds": [
      "ng",
      "plusOne_ng"
    ],
    "rsvp": {
      "status": "Pending",
      "needsAlternativeFood": false,
      "dietaryNotes": "",
      "lastUpdatedBy": null,
      "lastUpdatedDateTime": null
    },
    "email": "",
    "language": "EN"
  },
  {
    "guestId": "tammy2101",
    "name": "Tammy",
    "isAdmin": false,
    "guestType": "Family",
    "groupIds": [
      "plusOne_ng"
    ],
    "rsvp": {
      "status": "Pending",
      "needsAlternativeFood": false,
      "dietaryNotes": "",
      "lastUpdatedBy": null,
      "lastUpdatedDateTime": null
    },
    "email": "",
    "language": "EN"
  },
  {
    "guestId": "starlene0612",
    "name": "Starlene",
    "isAdmin": false,
    "guestType": "Family",
    "groupIds": [
      "ng"
    ],
    "rsvp": {
      "status": "Pending",
      "needsAlternativeFood": false,
      "dietaryNotes": "",
      "lastUpdatedBy": null,
      "lastUpdatedDateTime": null
    },
    "email": "",
    "language": "EN"
  },
  {
    "guestId": "scoffee2501",
    "name": "Scoffee",
    "isAdmin": false,
    "guestType": "Fur Babies",
    "groupIds": [
      "ng"
    ],
    "rsvp": {
      "status": "Pending",
      "needsAlternativeFood": false,
      "dietaryNotes": "",
      "lastUpdatedBy": null,
      "lastUpdatedDateTime": null
    },
    "email": "",
    "language": "EN"
  },
  {
    "guestId": "nicole2302",
    "name": "Nicole",
    "isAdmin": false,
    "guestType": "Family",
    "groupIds": [
      "tan"
    ],
    "rsvp": {
      "status": "Pending",
      "needsAlternativeFood": false,
      "dietaryNotes": "",
      "lastUpdatedBy": null,
      "lastUpdatedDateTime": null
    },
    "email": "",
    "language": "EN"
  },
  {
    "guestId": "alex2310",
    "name": "Alex",
    "isAdmin": false,
    "guestType": "Family",
    "groupIds": [
      "tan"
    ],
    "rsvp": {
      "status": "Pending",
      "needsAlternativeFood": false,
      "dietaryNotes": "",
      "lastUpdatedBy": null,
      "lastUpdatedDateTime": null
    },
    "email": "",
    "language": "EN"
  },
  {
    "guestId": "kaitlin2605",
    "name": "Kaitlin",
    "isAdmin": false,
    "guestType": "Family",
    "groupIds": [
      "tan"
    ],
    "rsvp": {
      "status": "Pending",
      "needsAlternativeFood": false,
      "dietaryNotes": "",
      "lastUpdatedBy": null,
      "lastUpdatedDateTime": null
    },
    "email": "",
    "language": "EN"
  },
  {
    "guestId": "kian0807",
    "name": "Kian",
    "isAdmin": false,
    "guestType": "Family",
    "groupIds": [
      "tan"
    ],
    "rsvp": {
      "status": "Pending",
      "needsAlternativeFood": false,
      "dietaryNotes": "",
      "lastUpdatedBy": null,
      "lastUpdatedDateTime": null
    },
    "email": "",
    "language": "EN"
  },
  {
    "guestId": "kiki2810",
    "name": "Kiki",
    "isAdmin": false,
    "guestType": "Fur Babies",
    "groupIds": [
      "tan"
    ],
    "rsvp": {
      "status": "Pending",
      "needsAlternativeFood": false,
      "dietaryNotes": "",
      "lastUpdatedBy": null,
      "lastUpdatedDateTime": null
    },
    "email": "",
    "language": "EN"
  },
  {
    "guestId": "angie3007",
    "name": "Angie",
    "isAdmin": false,
    "guestType": "Family",
    "groupIds": [
      "godma"
    ],
    "rsvp": {
      "status": "Pending",
      "needsAlternativeFood": false,
      "dietaryNotes": "",
      "lastUpdatedBy": null,
      "lastUpdatedDateTime": null
    },
    "email": "",
    "language": "EN"
  },
  {
    "guestId": "anfield0401",
    "name": "Anfield",
    "isAdmin": false,
    "guestType": "Family",
    "groupIds": [
      "godma"
    ],
    "rsvp": {
      "status": "Pending",
      "needsAlternativeFood": false,
      "dietaryNotes": "",
      "lastUpdatedBy": null,
      "lastUpdatedDateTime": null
    },
    "email": "",
    "language": "EN"
  },
  {
    "guestId": "aaron1602",
    "name": "Aaron",
    "isAdmin": false,
    "guestType": "Family",
    "groupIds": [
      "godpa"
    ],
    "rsvp": {
      "status": "Pending",
      "needsAlternativeFood": false,
      "dietaryNotes": "",
      "lastUpdatedBy": null,
      "lastUpdatedDateTime": null
    },
    "email": "",
    "language": "EN"
  },
  {
    "guestId": "rophyee0409",
    "name": "Roph Yee",
    "isAdmin": false,
    "guestType": "Friends",
    "groupIds": [
      "nchs_lee"
    ],
    "rsvp": {
      "status": "Pending",
      "needsAlternativeFood": false,
      "dietaryNotes": "",
      "lastUpdatedBy": null,
      "lastUpdatedDateTime": null
    },
    "email": "",
    "language": "EN"
  },
  {
    "guestId": "sixin2405",
    "name": "Si Xin",
    "isAdmin": false,
    "guestType": "Friends",
    "groupIds": [
      "nchs_chew"
    ],
    "rsvp": {
      "status": "Pending",
      "needsAlternativeFood": false,
      "dietaryNotes": "",
      "lastUpdatedBy": null,
      "lastUpdatedDateTime": null
    },
    "email": "",
    "language": "EN"
  },
  {
    "guestId": "alethea1001",
    "name": "Alethea",
    "isAdmin": false,
    "guestType": "Friends",
    "groupIds": [
      "nchs_chung"
    ],
    "rsvp": {
      "status": "Pending",
      "needsAlternativeFood": false,
      "dietaryNotes": "",
      "lastUpdatedBy": null,
      "lastUpdatedDateTime": null
    },
    "email": "",
    "language": "EN"
  },
  {
    "guestId": "enting0104",
    "name": "En-Ting",
    "isAdmin": false,
    "guestType": "Friends",
    "groupIds": [
      "nchs_tan"
    ],
    "rsvp": {
      "status": "Pending",
      "needsAlternativeFood": false,
      "dietaryNotes": "",
      "lastUpdatedBy": null,
      "lastUpdatedDateTime": null
    },
    "email": "",
    "language": "EN"
  },
  {
    "guestId": "terene2704",
    "name": "Terene",
    "isAdmin": false,
    "guestType": "Friends",
    "groupIds": [
      "np_tan_chin"
    ],
    "rsvp": {
      "status": "Pending",
      "needsAlternativeFood": false,
      "dietaryNotes": "",
      "lastUpdatedBy": null,
      "lastUpdatedDateTime": null
    },
    "email": "",
    "language": "EN"
  },
  {
    "guestId": "wenkit2410",
    "name": "Wen Kit",
    "isAdmin": false,
    "guestType": "Friends",
    "groupIds": [
      "np_tan_chin"
    ],
    "rsvp": {
      "status": "Pending",
      "needsAlternativeFood": false,
      "dietaryNotes": "",
      "lastUpdatedBy": null,
      "lastUpdatedDateTime": null
    },
    "email": "",
    "language": "EN"
  },
  {
    "guestId": "germaise0708",
    "name": "Germaise",
    "isAdmin": false,
    "guestType": "Friends",
    "groupIds": [
      "np_leong"
    ],
    "rsvp": {
      "status": "Pending",
      "needsAlternativeFood": false,
      "dietaryNotes": "",
      "lastUpdatedBy": null,
      "lastUpdatedDateTime": null
    },
    "email": "",
    "language": "EN"
  }
]

guests.groupIds = JSON.stringify(guests.groupIds);

async function uploadGuests() {
  try {
    // Insert data into your 'guests' table
    const { data, error } = await supabase.from('guests').insert(guests)

    if (error) {
      console.error('Error inserting data:', error)
    } else {
      console.log('Data inserted:', data)
    }
  } catch (err) {
    console.error('Unexpected error:', err)
  }
}

// Run the upload function
uploadGuests()
