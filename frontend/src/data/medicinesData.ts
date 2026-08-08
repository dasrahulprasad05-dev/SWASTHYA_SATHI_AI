export interface Medicine {
  id: string;
  en: {
    name: string;
    genericName: string;
    usage: string;
    dosage: string;
    warnings: string[];
  };
  or: {
    name: string;
    genericName: string;
    usage: string;
    dosage: string;
    warnings: string[];
  };
  janAushadhiAlt: string;
  priceCompare: { branded: string; generic: string; savings: string };
}

export const medicinesData: Medicine[] = [
  {
    "id": "med-1",
    "en": {
      "name": "Paracetamol Tablet 100mg (Dengue Relief) - OdishaCare",
      "genericName": "Paracetamol / Acetaminophen",
      "usage": "Fever reduction & mild-to-moderate pain relief.",
      "dosage": "500-650mg every 6-8 hours for adults.",
      "warnings": [
        "Do not exceed maximum daily dosage to prevent liver toxicity",
        "Avoid alcohol consumption while on medication"
      ]
    },
    "or": {
      "name": "ପାରାସିଟାମଲ୍ / ଏସିଟାମିନୋଫେନ୍ Tablet 100mg",
      "genericName": "ପାରାସିଟାମଲ୍ / ଏସିଟାମିନୋଫେନ୍",
      "usage": "ଜ୍ୱର ଏବଂ ସାଧାରଣ ଯନ୍ତ୍ରଣା (ମୁଣ୍ଡବିନ୍ଧା, ଦେହବିନ୍ଧା) ରୁ ଉପଶମ।",
      "dosage": "ପ୍ରାପ୍ତବୟସ୍କଙ୍କ ପାଇଁ ୫୦୦-୬୫୦ ମି.ଗ୍ରା. ପ୍ରତି ୬-୮ ଘଣ୍ଟାରେ।",
      "warnings": [
        "ଯକୃତ ସମସ୍ୟାକୁ ରୋକିବା ପାଇଁ ଦୈନିକ ମାତ୍ରା ଅତିକ୍ରମ କରନ୍ତୁ ନାହିଁ।",
        "ଔଷଧ ଖାଉଥିବା ସମୟରେ ମଦ୍ୟପାନ କରନ୍ତୁ ନାହିଁ।"
      ]
    },
    "janAushadhiAlt": "Jan Aushadhi Paracetamol 100mg",
    "priceCompare": {
      "branded": "₹50 / pack",
      "generic": "₹10 / pack",
      "savings": "80%"
    }
  },
  {
    "id": "med-2",
    "en": {
      "name": "Ibuprofen Capsule 200mg (Malaria Cure) - UtkalMeds",
      "genericName": "Ibuprofen",
      "usage": "Pain relief, inflammation reduction, and fever reduction.",
      "dosage": "400mg every 4-6 hours.",
      "warnings": [
        "Take with food to avoid stomach upset",
        "Do not use if pregnant"
      ]
    },
    "or": {
      "name": "ଆଇବୁପ୍ରୋଫେନ୍ Capsule 200mg",
      "genericName": "ଆଇବୁପ୍ରୋଫେନ୍",
      "usage": "ଯନ୍ତ୍ରଣା ଉପଶମ, ଫୁଲା କମାଇବା ଏବଂ ଜ୍ୱର କମାଇବା।",
      "dosage": "ପ୍ରାପ୍ତବୟସ୍କଙ୍କ ପାଇଁ ୪୦୦ ମି.ଗ୍ରା. ପ୍ରତି ୪-୬ ଘଣ୍ଟାରେ।",
      "warnings": [
        "ପେଟ ସମସ୍ୟା ଏଡ଼ାଇବା ପାଇଁ ଖାଦ୍ୟ ସହିତ ଖାଆନ୍ତୁ।",
        "ଗର୍ଭବତୀ ଥିଲେ ବ୍ୟବହାର କରନ୍ତୁ ନାହିଁ।"
      ]
    },
    "janAushadhiAlt": "Jan Aushadhi Ibuprofen 200mg",
    "priceCompare": {
      "branded": "₹53 / pack",
      "generic": "₹11 / pack",
      "savings": "79%"
    }
  },
  {
    "id": "med-3",
    "en": {
      "name": "Amoxicillin Syrup 300mg (Typhoid Care) - KalingaPharma",
      "genericName": "Amoxicillin Trihydrate",
      "usage": "Bacterial infections such as pneumonia, bronchitis, and infections of the ears, nose, throat.",
      "dosage": "500mg every 8 hours or 875mg every 12 hours.",
      "warnings": [
        "Finish entire prescription",
        "May cause diarrhea"
      ]
    },
    "or": {
      "name": "ଆମୋକ୍ସିସିଲିନ୍ ଟ୍ରାଇହାଇଡ୍ରେଟ୍ Syrup 300mg",
      "genericName": "ଆମୋକ୍ସିସିଲିନ୍ ଟ୍ରାଇହାଇଡ୍ରେଟ୍",
      "usage": "ବ୍ୟାକ୍ଟେରିଆ ସଂକ୍ରମଣ ଯେପରିକି ନିମୋନିଆ, ବ୍ରୋଙ୍କାଇଟିସ୍ ଏବଂ କାନ, ନାକ, ଗଳା ସଂକ୍ରମଣ।",
      "dosage": "ପ୍ରତି ୮ ଘଣ୍ଟାରେ ୫୦୦ ମି.ଗ୍ରା. କିମ୍ବା ପ୍ରତି ୧୨ ଘଣ୍ଟାରେ ୮୭୫ ମି.ଗ୍ରା।",
      "warnings": [
        "ସମ୍ପୂର୍ଣ୍ଣ କୋର୍ସ ଶେଷ କରନ୍ତୁ।",
        "ତରଳ ଝାଡ଼ା ହୋଇପାରେ।"
      ]
    },
    "janAushadhiAlt": "Jan Aushadhi Amoxicillin 300mg",
    "priceCompare": {
      "branded": "₹56 / pack",
      "generic": "₹12 / pack",
      "savings": "78%"
    }
  },
  {
    "id": "med-4",
    "en": {
      "name": "ORS Suspension 400mg (Fever & Pain) - SathiMed",
      "genericName": "Electrolyte Solution",
      "usage": "Prevention and treatment of dehydration caused by diarrhea.",
      "dosage": "Dissolve 1 sachet in 1 Litre of clean water.",
      "warnings": [
        "Use within 24 hours",
        "Do not mix with milk"
      ]
    },
    "or": {
      "name": "ଇଲେକ୍ଟ୍ରୋଲାଇଟ୍ ସଲ୍ୟୁସନ୍ Suspension 400mg",
      "genericName": "ଇଲେକ୍ଟ୍ରୋଲାଇଟ୍ ସଲ୍ୟୁସନ୍",
      "usage": "ଝାଡ଼ା କାରଣରୁ ହେଉଥିବା ଜଳଶୂନ୍ୟତାର ପ୍ରତିରୋଧ ଏବଂ ଚିକିତ୍ସା।",
      "dosage": "୧ ଲିଟର ସଫା ପାଣିରେ ୧ ପ୍ୟାକେଟ୍ ମିଶାନ୍ତୁ।",
      "warnings": [
        "୨୪ ଘଣ୍ଟା ମଧ୍ୟରେ ବ୍ୟବହାର କରନ୍ତୁ।",
        "କ୍ଷୀର ସହିତ ମିଶାନ୍ତୁ ନାହିଁ।"
      ]
    },
    "janAushadhiAlt": "Jan Aushadhi ORS 400mg",
    "priceCompare": {
      "branded": "₹59 / pack",
      "generic": "₹13 / pack",
      "savings": "77%"
    }
  },
  {
    "id": "med-5",
    "en": {
      "name": "Albendazole Ointment 500mg (Stomach Infection) - VillageCure",
      "genericName": "Albendazole",
      "usage": "Treatment of parasitic worm infections (deworming).",
      "dosage": "400mg as a single dose.",
      "warnings": [
        "Chew tablet completely before swallowing",
        "Do not use during pregnancy"
      ]
    },
    "or": {
      "name": "ଆଲବେଣ୍ଡାଜୋଲ୍ Ointment 500mg",
      "genericName": "ଆଲବେଣ୍ଡାଜୋଲ୍",
      "usage": "ପରଜୀବୀ କୃମି ସଂକ୍ରମଣର ଚିକିତ୍ସା (କୃମି ନାଶକ)।",
      "dosage": "ଗୋଟିଏ ମାତ୍ରା ଭାବରେ ୪୦୦ ମି.ଗ୍ରା.।",
      "warnings": [
        "ଗିଳିବା ପୂର୍ବରୁ ବଟିକାକୁ ସମ୍ପୂର୍ଣ୍ଣ ରୂପେ ଚୋବାନ୍ତୁ।",
        "ଗର୍ଭାବସ୍ଥାରେ ବ୍ୟବହାର କରନ୍ତୁ ନାହିଁ।"
      ]
    },
    "janAushadhiAlt": "Jan Aushadhi Albendazole 500mg",
    "priceCompare": {
      "branded": "₹62 / pack",
      "generic": "₹14 / pack",
      "savings": "77%"
    }
  },
  {
    "id": "med-6",
    "en": {
      "name": "Azithromycin Drop 100mg (Skin Care) - HealthPlus",
      "genericName": "Azithromycin",
      "usage": "Bacterial infections of the respiratory tract, throat, skin, and ear.",
      "dosage": "500mg once daily for 3 days.",
      "warnings": [
        "Take 1 hour before or 2 hours after meals",
        "Complete full course"
      ]
    },
    "or": {
      "name": "ଆଜିଥ୍ରୋମାଇସିନ୍ Drop 100mg",
      "genericName": "ଆଜିଥ୍ରୋମାଇସିନ୍",
      "usage": "ଶ୍ୱାସକ୍ରିୟା, ଗଳା, ଚର୍ମ ଏବଂ କାନର ବ୍ୟାକ୍ଟେରିଆ ସଂକ୍ରମଣ।",
      "dosage": "ଦିନକୁ ଥରେ ୫୦୦ ମି.ଗ୍ରା. ୩ ଦିନ ପାଇଁ।",
      "warnings": [
        "ଖାଇବାର ୧ ଘଣ୍ଟା ପୂର୍ବରୁ କିମ୍ବା ୨ ଘଣ୍ଟା ପରେ ଖାଆନ୍ତୁ।",
        "ସମ୍ପୂର୍ଣ୍ଣ କୋର୍ସ ଶେଷ କରନ୍ତୁ।"
      ]
    },
    "janAushadhiAlt": "Jan Aushadhi Azithromycin 100mg",
    "priceCompare": {
      "branded": "₹65 / pack",
      "generic": "₹10 / pack",
      "savings": "84%"
    }
  },
  {
    "id": "med-7",
    "en": {
      "name": "Cetirizine Sachet 200mg (Cold & Cough) - JanSeva",
      "genericName": "Cetirizine Hydrochloride",
      "usage": "Relief of allergy symptoms like runny nose, sneezing, and watery eyes.",
      "dosage": "10mg once daily.",
      "warnings": [
        "May cause drowsiness",
        "Avoid alcohol"
      ]
    },
    "or": {
      "name": "ସେଟିରିଜିନ୍ ହାଇଡ୍ରୋକ୍ଲୋରାଇଡ୍ Sachet 200mg",
      "genericName": "ସେଟିରିଜିନ୍ ହାଇଡ୍ରୋକ୍ଲୋରାଇଡ୍",
      "usage": "ଆଲର୍ଜି ଲକ୍ଷଣ ଯେପରିକି ନାକରୁ ପାଣି ବୋହିବା, ଛିଙ୍କିବା ଏବଂ ଆଖିରୁ ପାଣି ବୋହିବାରୁ ଉପଶମ।",
      "dosage": "ଦିନକୁ ଥରେ ୧୦ ମି.ଗ୍ରା.।",
      "warnings": [
        "ନିଦ ଆସିପାରେ।",
        "ମଦ୍ୟପାନ କରନ୍ତୁ ନାହିଁ।"
      ]
    },
    "janAushadhiAlt": "Jan Aushadhi Cetirizine 200mg",
    "priceCompare": {
      "branded": "₹68 / pack",
      "generic": "₹11 / pack",
      "savings": "83%"
    }
  },
  {
    "id": "med-8",
    "en": {
      "name": "Metronidazole Tablet 300mg (Worm Treatment) - GraminCare",
      "genericName": "Metronidazole",
      "usage": "Treatment of certain bacterial and parasitic infections (amoebiasis).",
      "dosage": "400mg three times a day for 5-7 days.",
      "warnings": [
        "Strictly avoid alcohol during and 48 hours after treatment",
        "Take with food"
      ]
    },
    "or": {
      "name": "ମେଟ୍ରୋନିଡାଜୋଲ୍ Tablet 300mg",
      "genericName": "ମେଟ୍ରୋନିଡାଜୋଲ୍",
      "usage": "କେତେକ ବ୍ୟାକ୍ଟେରିଆ ଏବଂ ପରଜୀବୀ ସଂକ୍ରମଣର ଚିକିତ୍ସା (ଆମୋଏବିଆସିସ୍)।",
      "dosage": "୫-୭ ଦିନ ପାଇଁ ଦିନକୁ ତିନିଥର ୪୦୦ ମି.ଗ୍ରା.।",
      "warnings": [
        "ଚିକିତ୍ସା ସମୟରେ ଏବଂ ୪୮ ଘଣ୍ଟା ପରେ ମଦ୍ୟପାନ ସମ୍ପୂର୍ଣ୍ଣ ନିଷେଧ।",
        "ଖାଦ୍ୟ ସହିତ ଖାଆନ୍ତୁ।"
      ]
    },
    "janAushadhiAlt": "Jan Aushadhi Metronidazole 300mg",
    "priceCompare": {
      "branded": "₹71 / pack",
      "generic": "₹12 / pack",
      "savings": "83%"
    }
  },
  {
    "id": "med-9",
    "en": {
      "name": "Ciprofloxacin Capsule 400mg (Rehydration) - SwasthyaFirst",
      "genericName": "Ciprofloxacin",
      "usage": "Broad-spectrum antibiotic for urinary tract infections, typhoid fever.",
      "dosage": "500mg twice daily.",
      "warnings": [
        "Do not take with dairy products",
        "May cause joint issues"
      ]
    },
    "or": {
      "name": "ସିପ୍ରୋଫ୍ଲୋକ୍ସାସିନ୍ Capsule 400mg",
      "genericName": "ସିପ୍ରୋଫ୍ଲୋକ୍ସାସିନ୍",
      "usage": "ପରିସ୍ରା ନଳୀ ସଂକ୍ରମଣ, ଟାଇଫଏଡ୍ ଜ୍ୱର ପାଇଁ ବ୍ୟାପକ ଆଣ୍ଟିବାୟୋଟିକ୍।",
      "dosage": "ଦିନକୁ ଦୁଇଥର ୫୦୦ ମି.ଗ୍ରା.।",
      "warnings": [
        "ଦୁଗ୍ଧଜାତ ଦ୍ରବ୍ୟ ସହିତ ଖାଆନ୍ତୁ ନାହିଁ।",
        "ଗଣ୍ଠି ସମସ୍ୟା ହୋଇପାରେ।"
      ]
    },
    "janAushadhiAlt": "Jan Aushadhi Ciprofloxacin 400mg",
    "priceCompare": {
      "branded": "₹74 / pack",
      "generic": "₹13 / pack",
      "savings": "82%"
    }
  },
  {
    "id": "med-10",
    "en": {
      "name": "Pantoprazole Syrup 500mg (Acidity Relief) - ApexOdisha",
      "genericName": "Pantoprazole Sodium",
      "usage": "Reduces stomach acid, treats acidity, GERD, and ulcers.",
      "dosage": "40mg once daily before breakfast.",
      "warnings": [
        "Swallow whole, do not crush",
        "Long term use may cause B12 deficiency"
      ]
    },
    "or": {
      "name": "ପାଣ୍ଟୋପ୍ରାଜୋଲ୍ ସୋଡିୟମ୍ Syrup 500mg",
      "genericName": "ପାଣ୍ଟୋପ୍ରାଜୋଲ୍ ସୋଡିୟମ୍",
      "usage": "ପେଟରେ ଏସିଡ୍ କମାଏ, ଏସିଡିଟି, ଗ୍ୟାଷ୍ଟ୍ରିକ୍ ଏବଂ ଅଲସରର ଚିକିତ୍ସା କରେ।",
      "dosage": "ଜଳଖିଆ ପୂର୍ବରୁ ଦିନକୁ ଥରେ ୪୦ ମି.ଗ୍ରା.।",
      "warnings": [
        "ଗୋଟା ଗିଳି ଦିଅନ୍ତୁ, ଗୁଣ୍ଡ କରନ୍ତୁ ନାହିଁ।",
        "ଦୀର୍ଘକାଳୀନ ବ୍ୟବହାର ଦ୍ୱାରା ଭିଟାମିନ୍ B12 ଅଭାବ ହୋଇପାରେ।"
      ]
    },
    "janAushadhiAlt": "Jan Aushadhi Pantoprazole 500mg",
    "priceCompare": {
      "branded": "₹77 / pack",
      "generic": "₹14 / pack",
      "savings": "81%"
    }
  },
  {
    "id": "med-11",
    "en": {
      "name": "Ondansetron Suspension 100mg (Dengue Relief) - OdishaCare",
      "genericName": "Ondansetron",
      "usage": "Prevention of nausea and vomiting.",
      "dosage": "4mg or 8mg as needed.",
      "warnings": [
        "May cause headache",
        "Use carefully during pregnancy"
      ]
    },
    "or": {
      "name": "ଓଣ୍ଡାନସେଟ୍ରନ୍ Suspension 100mg",
      "genericName": "ଓଣ୍ଡାନସେଟ୍ରନ୍",
      "usage": "ବାନ୍ତି ଏବଂ ବାନ୍ତି ଲାଗିବାରୁ ପ୍ରତିରୋଧ।",
      "dosage": "ଆବଶ୍ୟକ ଅନୁଯାୟୀ ୪ ମି.ଗ୍ରା. କିମ୍ବା ୮ ମି.ଗ୍ରା.।",
      "warnings": [
        "ମୁଣ୍ଡବିନ୍ଧା ହୋଇପାରେ।",
        "ଗର୍ଭାବସ୍ଥାରେ ସତର୍କତାର ସହ ବ୍ୟବହାର କରନ୍ତୁ।"
      ]
    },
    "janAushadhiAlt": "Jan Aushadhi Ondansetron 100mg",
    "priceCompare": {
      "branded": "₹80 / pack",
      "generic": "₹10 / pack",
      "savings": "87%"
    }
  },
  {
    "id": "med-12",
    "en": {
      "name": "Doxycycline Ointment 200mg (Malaria Cure) - UtkalMeds",
      "genericName": "Doxycycline Hyclate",
      "usage": "Treatment of acne, cholera, scrub typhus, and malaria prophylaxis.",
      "dosage": "100mg twice daily.",
      "warnings": [
        "Avoid sun exposure (photosensitivity)",
        "Do not take with antacids"
      ]
    },
    "or": {
      "name": "ଡକ୍ସିସାଇକ୍ଲିନ୍ ହାଇକ୍ଲେଟ୍ Ointment 200mg",
      "genericName": "ଡକ୍ସିସାଇକ୍ଲିନ୍ ହାଇକ୍ଲେଟ୍",
      "usage": "ବ୍ରଣ, କଲେରା, ସ୍କ୍ରବ୍ ଟାଇଫସ୍ ଏବଂ ମ୍ୟାଲେରିଆ ପ୍ରତିରୋଧର ଚିକିତ୍ସା।",
      "dosage": "ଦିନକୁ ଦୁଇଥର ୧୦୦ ମି.ଗ୍ରା.।",
      "warnings": [
        "ସୂର୍ଯ୍ୟ କିରଣରୁ ଦୂରେଇ ରୁହନ୍ତୁ।",
        "ଏଣ୍ଟାସିଡ୍ ସହିତ ଖାଆନ୍ତୁ ନାହିଁ।"
      ]
    },
    "janAushadhiAlt": "Jan Aushadhi Doxycycline 200mg",
    "priceCompare": {
      "branded": "₹83 / pack",
      "generic": "₹11 / pack",
      "savings": "86%"
    }
  },
  {
    "id": "med-13",
    "en": {
      "name": "Chloroquine Drop 300mg (Typhoid Care) - KalingaPharma",
      "genericName": "Chloroquine Phosphate",
      "usage": "Treatment and prevention of malaria.",
      "dosage": "As prescribed based on body weight.",
      "warnings": [
        "Take with food",
        "May cause vision changes"
      ]
    },
    "or": {
      "name": "କ୍ଲୋରୋକୁଇନ୍ ଫସଫେଟ୍ Drop 300mg",
      "genericName": "କ୍ଲୋରୋକୁଇନ୍ ଫସଫେଟ୍",
      "usage": "ମ୍ୟାଲେରିଆର ଚିକିତ୍ସା ଏବଂ ପ୍ରତିରୋଧ।",
      "dosage": "ଶରୀରର ଓଜନ ଉପରେ ଆଧାର କରି ଡାକ୍ତରଙ୍କ ପରାମର୍ଶ ଅନୁଯାୟୀ।",
      "warnings": [
        "ଖାଦ୍ୟ ସହିତ ଖାଆନ୍ତୁ।",
        "ଦୃଷ୍ଟିଶକ୍ତିରେ ପରିବର୍ତ୍ତନ ଆସିପାରେ।"
      ]
    },
    "janAushadhiAlt": "Jan Aushadhi Chloroquine 300mg",
    "priceCompare": {
      "branded": "₹86 / pack",
      "generic": "₹12 / pack",
      "savings": "86%"
    }
  },
  {
    "id": "med-14",
    "en": {
      "name": "Artesunate Sachet 400mg (Fever & Pain) - SathiMed",
      "genericName": "Artesunate",
      "usage": "Treatment of severe malaria.",
      "dosage": "Given as injection or as prescribed.",
      "warnings": [
        "Requires medical supervision",
        "Usually given with other antimalarials"
      ]
    },
    "or": {
      "name": "ଆର୍ଟେସୁନେଟ୍ Sachet 400mg",
      "genericName": "ଆର୍ଟେସୁନେଟ୍",
      "usage": "ଗୁରୁତର ମ୍ୟାଲେରିଆର ଚିକିତ୍ସା।",
      "dosage": "ଇଞ୍ଜେକ୍ସନ୍ ଭାବରେ କିମ୍ବା ପରାମର୍ଶ ଅନୁଯାୟୀ ଦିଆଯାଏ।",
      "warnings": [
        "ଡାକ୍ତରୀ ତଦାରଖ ଆବଶ୍ୟକ।",
        "ସାଧାରଣତଃ ଅନ୍ୟ ମ୍ୟାଲେରିଆ ଔଷଧ ସହିତ ଦିଆଯାଏ।"
      ]
    },
    "janAushadhiAlt": "Jan Aushadhi Artesunate 400mg",
    "priceCompare": {
      "branded": "₹89 / pack",
      "generic": "₹13 / pack",
      "savings": "85%"
    }
  },
  {
    "id": "med-15",
    "en": {
      "name": "Povidone Iodine Tablet 500mg (Stomach Infection) - VillageCure",
      "genericName": "Povidone Iodine Ointment",
      "usage": "Topical antiseptic for minor cuts, wounds, and burns.",
      "dosage": "Apply externally to affected area 1-3 times daily.",
      "warnings": [
        "For external use only",
        "Avoid contact with eyes"
      ]
    },
    "or": {
      "name": "ପୋଭିଡୋନ୍ ଆୟୋଡିନ୍ ମଲମ Tablet 500mg",
      "genericName": "ପୋଭିଡୋନ୍ ଆୟୋଡିନ୍ ମଲମ",
      "usage": "ଛୋଟ କ୍ଷତ, କଟିବା ଏବଂ ପୋଡ଼ିବା ପାଇଁ ଆଣ୍ଟିସେପ୍ଟିକ୍ ମଲମ।",
      "dosage": "ପ୍ରଭାବିତ ସ୍ଥାନରେ ଦିନକୁ ୧-୩ ଥର ଲଗାନ୍ତୁ।",
      "warnings": [
        "କେବଳ ବାହ୍ୟ ବ୍ୟବହାର ପାଇଁ।",
        "ଆଖିରେ ଲଗାନ୍ତୁ ନାହିଁ।"
      ]
    },
    "janAushadhiAlt": "Jan Aushadhi Povidone Iodine 500mg",
    "priceCompare": {
      "branded": "₹92 / pack",
      "generic": "₹14 / pack",
      "savings": "84%"
    }
  },
  {
    "id": "med-16",
    "en": {
      "name": "Diclofenac Capsule 100mg (Skin Care) - HealthPlus",
      "genericName": "Diclofenac Gel",
      "usage": "Local relief from muscle pain, joint pain, and sprains.",
      "dosage": "Apply a small amount to the affected area 3-4 times a day.",
      "warnings": [
        "Wash hands after application",
        "Do not apply on broken skin"
      ]
    },
    "or": {
      "name": "ଡାଇକ୍ଲୋଫେନାକ୍ ଜେଲ୍ Capsule 100mg",
      "genericName": "ଡାଇକ୍ଲୋଫେନାକ୍ ଜେଲ୍",
      "usage": "ମାଂସପେଶୀ ଯନ୍ତ୍ରଣା, ଗଣ୍ଠି ବିନ୍ଧା ଏବଂ ମୋଚକାରୁ ସ୍ଥାନୀୟ ଉପଶମ।",
      "dosage": "ପ୍ରଭାବିତ ସ୍ଥାନରେ ଦିନକୁ ୩-୪ ଥର ଅଳ୍ପ ପରିମାଣରେ ଲଗାନ୍ତୁ।",
      "warnings": [
        "ଲଗାଇବା ପରେ ହାତ ଧୋଇ ଦିଅନ୍ତୁ।",
        "କଟିଥିବା ଚର୍ମରେ ଲଗାନ୍ତୁ ନାହିଁ।"
      ]
    },
    "janAushadhiAlt": "Jan Aushadhi Diclofenac 100mg",
    "priceCompare": {
      "branded": "₹95 / pack",
      "generic": "₹10 / pack",
      "savings": "89%"
    }
  },
  {
    "id": "med-17",
    "en": {
      "name": "Paracetamol Syrup 200mg (Cold & Cough) - JanSeva",
      "genericName": "Paracetamol / Acetaminophen",
      "usage": "Fever reduction & mild-to-moderate pain relief.",
      "dosage": "500-650mg every 6-8 hours for adults.",
      "warnings": [
        "Do not exceed maximum daily dosage to prevent liver toxicity",
        "Avoid alcohol consumption while on medication"
      ]
    },
    "or": {
      "name": "ପାରାସିଟାମଲ୍ / ଏସିଟାମିନୋଫେନ୍ Syrup 200mg",
      "genericName": "ପାରାସିଟାମଲ୍ / ଏସିଟାମିନୋଫେନ୍",
      "usage": "ଜ୍ୱର ଏବଂ ସାଧାରଣ ଯନ୍ତ୍ରଣା (ମୁଣ୍ଡବିନ୍ଧା, ଦେହବିନ୍ଧା) ରୁ ଉପଶମ।",
      "dosage": "ପ୍ରାପ୍ତବୟସ୍କଙ୍କ ପାଇଁ ୫୦୦-୬୫୦ ମି.ଗ୍ରା. ପ୍ରତି ୬-୮ ଘଣ୍ଟାରେ।",
      "warnings": [
        "ଯକୃତ ସମସ୍ୟାକୁ ରୋକିବା ପାଇଁ ଦୈନିକ ମାତ୍ରା ଅତିକ୍ରମ କରନ୍ତୁ ନାହିଁ।",
        "ଔଷଧ ଖାଉଥିବା ସମୟରେ ମଦ୍ୟପାନ କରନ୍ତୁ ନାହିଁ।"
      ]
    },
    "janAushadhiAlt": "Jan Aushadhi Paracetamol 200mg",
    "priceCompare": {
      "branded": "₹98 / pack",
      "generic": "₹11 / pack",
      "savings": "88%"
    }
  },
  {
    "id": "med-18",
    "en": {
      "name": "Ibuprofen Suspension 300mg (Worm Treatment) - GraminCare",
      "genericName": "Ibuprofen",
      "usage": "Pain relief, inflammation reduction, and fever reduction.",
      "dosage": "400mg every 4-6 hours.",
      "warnings": [
        "Take with food to avoid stomach upset",
        "Do not use if pregnant"
      ]
    },
    "or": {
      "name": "ଆଇବୁପ୍ରୋଫେନ୍ Suspension 300mg",
      "genericName": "ଆଇବୁପ୍ରୋଫେନ୍",
      "usage": "ଯନ୍ତ୍ରଣା ଉପଶମ, ଫୁଲା କମାଇବା ଏବଂ ଜ୍ୱର କମାଇବା।",
      "dosage": "ପ୍ରାପ୍ତବୟସ୍କଙ୍କ ପାଇଁ ୪୦୦ ମି.ଗ୍ରା. ପ୍ରତି ୪-୬ ଘଣ୍ଟାରେ।",
      "warnings": [
        "ପେଟ ସମସ୍ୟା ଏଡ଼ାଇବା ପାଇଁ ଖାଦ୍ୟ ସହିତ ଖାଆନ୍ତୁ।",
        "ଗର୍ଭବତୀ ଥିଲେ ବ୍ୟବହାର କରନ୍ତୁ ନାହିଁ।"
      ]
    },
    "janAushadhiAlt": "Jan Aushadhi Ibuprofen 300mg",
    "priceCompare": {
      "branded": "₹101 / pack",
      "generic": "₹12 / pack",
      "savings": "88%"
    }
  },
  {
    "id": "med-19",
    "en": {
      "name": "Amoxicillin Ointment 400mg (Rehydration) - SwasthyaFirst",
      "genericName": "Amoxicillin Trihydrate",
      "usage": "Bacterial infections such as pneumonia, bronchitis, and infections of the ears, nose, throat.",
      "dosage": "500mg every 8 hours or 875mg every 12 hours.",
      "warnings": [
        "Finish entire prescription",
        "May cause diarrhea"
      ]
    },
    "or": {
      "name": "ଆମୋକ୍ସିସିଲିନ୍ ଟ୍ରାଇହାଇଡ୍ରେଟ୍ Ointment 400mg",
      "genericName": "ଆମୋକ୍ସିସିଲିନ୍ ଟ୍ରାଇହାଇଡ୍ରେଟ୍",
      "usage": "ବ୍ୟାକ୍ଟେରିଆ ସଂକ୍ରମଣ ଯେପରିକି ନିମୋନିଆ, ବ୍ରୋଙ୍କାଇଟିସ୍ ଏବଂ କାନ, ନାକ, ଗଳା ସଂକ୍ରମଣ।",
      "dosage": "ପ୍ରତି ୮ ଘଣ୍ଟାରେ ୫୦୦ ମି.ଗ୍ରା. କିମ୍ବା ପ୍ରତି ୧୨ ଘଣ୍ଟାରେ ୮୭୫ ମି.ଗ୍ରା।",
      "warnings": [
        "ସମ୍ପୂର୍ଣ୍ଣ କୋର୍ସ ଶେଷ କରନ୍ତୁ।",
        "ତରଳ ଝାଡ଼ା ହୋଇପାରେ।"
      ]
    },
    "janAushadhiAlt": "Jan Aushadhi Amoxicillin 400mg",
    "priceCompare": {
      "branded": "₹104 / pack",
      "generic": "₹13 / pack",
      "savings": "87%"
    }
  },
  {
    "id": "med-20",
    "en": {
      "name": "ORS Drop 500mg (Acidity Relief) - ApexOdisha",
      "genericName": "Electrolyte Solution",
      "usage": "Prevention and treatment of dehydration caused by diarrhea.",
      "dosage": "Dissolve 1 sachet in 1 Litre of clean water.",
      "warnings": [
        "Use within 24 hours",
        "Do not mix with milk"
      ]
    },
    "or": {
      "name": "ଇଲେକ୍ଟ୍ରୋଲାଇଟ୍ ସଲ୍ୟୁସନ୍ Drop 500mg",
      "genericName": "ଇଲେକ୍ଟ୍ରୋଲାଇଟ୍ ସଲ୍ୟୁସନ୍",
      "usage": "ଝାଡ଼ା କାରଣରୁ ହେଉଥିବା ଜଳଶୂନ୍ୟତାର ପ୍ରତିରୋଧ ଏବଂ ଚିକିତ୍ସା।",
      "dosage": "୧ ଲିଟର ସଫା ପାଣିରେ ୧ ପ୍ୟାକେଟ୍ ମିଶାନ୍ତୁ।",
      "warnings": [
        "୨୪ ଘଣ୍ଟା ମଧ୍ୟରେ ବ୍ୟବହାର କରନ୍ତୁ।",
        "କ୍ଷୀର ସହିତ ମିଶାନ୍ତୁ ନାହିଁ।"
      ]
    },
    "janAushadhiAlt": "Jan Aushadhi ORS 500mg",
    "priceCompare": {
      "branded": "₹107 / pack",
      "generic": "₹14 / pack",
      "savings": "86%"
    }
  },
  {
    "id": "med-21",
    "en": {
      "name": "Albendazole Sachet 100mg (Dengue Relief) - OdishaCare",
      "genericName": "Albendazole",
      "usage": "Treatment of parasitic worm infections (deworming).",
      "dosage": "400mg as a single dose.",
      "warnings": [
        "Chew tablet completely before swallowing",
        "Do not use during pregnancy"
      ]
    },
    "or": {
      "name": "ଆଲବେଣ୍ଡାଜୋଲ୍ Sachet 100mg",
      "genericName": "ଆଲବେଣ୍ଡାଜୋଲ୍",
      "usage": "ପରଜୀବୀ କୃମି ସଂକ୍ରମଣର ଚିକିତ୍ସା (କୃମି ନାଶକ)।",
      "dosage": "ଗୋଟିଏ ମାତ୍ରା ଭାବରେ ୪୦୦ ମି.ଗ୍ରା.।",
      "warnings": [
        "ଗିଳିବା ପୂର୍ବରୁ ବଟିକାକୁ ସମ୍ପୂର୍ଣ୍ଣ ରୂପେ ଚୋବାନ୍ତୁ।",
        "ଗର୍ଭାବସ୍ଥାରେ ବ୍ୟବହାର କରନ୍ତୁ ନାହିଁ।"
      ]
    },
    "janAushadhiAlt": "Jan Aushadhi Albendazole 100mg",
    "priceCompare": {
      "branded": "₹110 / pack",
      "generic": "₹10 / pack",
      "savings": "90%"
    }
  },
  {
    "id": "med-22",
    "en": {
      "name": "Azithromycin Tablet 200mg (Malaria Cure) - UtkalMeds",
      "genericName": "Azithromycin",
      "usage": "Bacterial infections of the respiratory tract, throat, skin, and ear.",
      "dosage": "500mg once daily for 3 days.",
      "warnings": [
        "Take 1 hour before or 2 hours after meals",
        "Complete full course"
      ]
    },
    "or": {
      "name": "ଆଜିଥ୍ରୋମାଇସିନ୍ Tablet 200mg",
      "genericName": "ଆଜିଥ୍ରୋମାଇସିନ୍",
      "usage": "ଶ୍ୱାସକ୍ରିୟା, ଗଳା, ଚର୍ମ ଏବଂ କାନର ବ୍ୟାକ୍ଟେରିଆ ସଂକ୍ରମଣ।",
      "dosage": "ଦିନକୁ ଥରେ ୫୦୦ ମି.ଗ୍ରା. ୩ ଦିନ ପାଇଁ।",
      "warnings": [
        "ଖାଇବାର ୧ ଘଣ୍ଟା ପୂର୍ବରୁ କିମ୍ବା ୨ ଘଣ୍ଟା ପରେ ଖାଆନ୍ତୁ।",
        "ସମ୍ପୂର୍ଣ୍ଣ କୋର୍ସ ଶେଷ କରନ୍ତୁ।"
      ]
    },
    "janAushadhiAlt": "Jan Aushadhi Azithromycin 200mg",
    "priceCompare": {
      "branded": "₹113 / pack",
      "generic": "₹11 / pack",
      "savings": "90%"
    }
  },
  {
    "id": "med-23",
    "en": {
      "name": "Cetirizine Capsule 300mg (Typhoid Care) - KalingaPharma",
      "genericName": "Cetirizine Hydrochloride",
      "usage": "Relief of allergy symptoms like runny nose, sneezing, and watery eyes.",
      "dosage": "10mg once daily.",
      "warnings": [
        "May cause drowsiness",
        "Avoid alcohol"
      ]
    },
    "or": {
      "name": "ସେଟିରିଜିନ୍ ହାଇଡ୍ରୋକ୍ଲୋରାଇଡ୍ Capsule 300mg",
      "genericName": "ସେଟିରିଜିନ୍ ହାଇଡ୍ରୋକ୍ଲୋରାଇଡ୍",
      "usage": "ଆଲର୍ଜି ଲକ୍ଷଣ ଯେପରିକି ନାକରୁ ପାଣି ବୋହିବା, ଛିଙ୍କିବା ଏବଂ ଆଖିରୁ ପାଣି ବୋହିବାରୁ ଉପଶମ।",
      "dosage": "ଦିନକୁ ଥରେ ୧୦ ମି.ଗ୍ରା.।",
      "warnings": [
        "ନିଦ ଆସିପାରେ।",
        "ମଦ୍ୟପାନ କରନ୍ତୁ ନାହିଁ।"
      ]
    },
    "janAushadhiAlt": "Jan Aushadhi Cetirizine 300mg",
    "priceCompare": {
      "branded": "₹116 / pack",
      "generic": "₹12 / pack",
      "savings": "89%"
    }
  },
  {
    "id": "med-24",
    "en": {
      "name": "Metronidazole Syrup 400mg (Fever & Pain) - SathiMed",
      "genericName": "Metronidazole",
      "usage": "Treatment of certain bacterial and parasitic infections (amoebiasis).",
      "dosage": "400mg three times a day for 5-7 days.",
      "warnings": [
        "Strictly avoid alcohol during and 48 hours after treatment",
        "Take with food"
      ]
    },
    "or": {
      "name": "ମେଟ୍ରୋନିଡାଜୋଲ୍ Syrup 400mg",
      "genericName": "ମେଟ୍ରୋନିଡାଜୋଲ୍",
      "usage": "କେତେକ ବ୍ୟାକ୍ଟେରିଆ ଏବଂ ପରଜୀବୀ ସଂକ୍ରମଣର ଚିକିତ୍ସା (ଆମୋଏବିଆସିସ୍)।",
      "dosage": "୫-୭ ଦିନ ପାଇଁ ଦିନକୁ ତିନିଥର ୪୦୦ ମି.ଗ୍ରା.।",
      "warnings": [
        "ଚିକିତ୍ସା ସମୟରେ ଏବଂ ୪୮ ଘଣ୍ଟା ପରେ ମଦ୍ୟପାନ ସମ୍ପୂର୍ଣ୍ଣ ନିଷେଧ।",
        "ଖାଦ୍ୟ ସହିତ ଖାଆନ୍ତୁ।"
      ]
    },
    "janAushadhiAlt": "Jan Aushadhi Metronidazole 400mg",
    "priceCompare": {
      "branded": "₹119 / pack",
      "generic": "₹13 / pack",
      "savings": "89%"
    }
  },
  {
    "id": "med-25",
    "en": {
      "name": "Ciprofloxacin Suspension 500mg (Stomach Infection) - VillageCure",
      "genericName": "Ciprofloxacin",
      "usage": "Broad-spectrum antibiotic for urinary tract infections, typhoid fever.",
      "dosage": "500mg twice daily.",
      "warnings": [
        "Do not take with dairy products",
        "May cause joint issues"
      ]
    },
    "or": {
      "name": "ସିପ୍ରୋଫ୍ଲୋକ୍ସାସିନ୍ Suspension 500mg",
      "genericName": "ସିପ୍ରୋଫ୍ଲୋକ୍ସାସିନ୍",
      "usage": "ପରିସ୍ରା ନଳୀ ସଂକ୍ରମଣ, ଟାଇଫଏଡ୍ ଜ୍ୱର ପାଇଁ ବ୍ୟାପକ ଆଣ୍ଟିବାୟୋଟିକ୍।",
      "dosage": "ଦିନକୁ ଦୁଇଥର ୫୦୦ ମି.ଗ୍ରା.।",
      "warnings": [
        "ଦୁଗ୍ଧଜାତ ଦ୍ରବ୍ୟ ସହିତ ଖାଆନ୍ତୁ ନାହିଁ।",
        "ଗଣ୍ଠି ସମସ୍ୟା ହୋଇପାରେ।"
      ]
    },
    "janAushadhiAlt": "Jan Aushadhi Ciprofloxacin 500mg",
    "priceCompare": {
      "branded": "₹122 / pack",
      "generic": "₹14 / pack",
      "savings": "88%"
    }
  },
  {
    "id": "med-26",
    "en": {
      "name": "Pantoprazole Ointment 100mg (Skin Care) - HealthPlus",
      "genericName": "Pantoprazole Sodium",
      "usage": "Reduces stomach acid, treats acidity, GERD, and ulcers.",
      "dosage": "40mg once daily before breakfast.",
      "warnings": [
        "Swallow whole, do not crush",
        "Long term use may cause B12 deficiency"
      ]
    },
    "or": {
      "name": "ପାଣ୍ଟୋପ୍ରାଜୋଲ୍ ସୋଡିୟମ୍ Ointment 100mg",
      "genericName": "ପାଣ୍ଟୋପ୍ରାଜୋଲ୍ ସୋଡିୟମ୍",
      "usage": "ପେଟରେ ଏସିଡ୍ କମାଏ, ଏସିଡିଟି, ଗ୍ୟାଷ୍ଟ୍ରିକ୍ ଏବଂ ଅଲସରର ଚିକିତ୍ସା କରେ।",
      "dosage": "ଜଳଖିଆ ପୂର୍ବରୁ ଦିନକୁ ଥରେ ୪୦ ମି.ଗ୍ରା.।",
      "warnings": [
        "ଗୋଟା ଗିଳି ଦିଅନ୍ତୁ, ଗୁଣ୍ଡ କରନ୍ତୁ ନାହିଁ।",
        "ଦୀର୍ଘକାଳୀନ ବ୍ୟବହାର ଦ୍ୱାରା ଭିଟାମିନ୍ B12 ଅଭାବ ହୋଇପାରେ।"
      ]
    },
    "janAushadhiAlt": "Jan Aushadhi Pantoprazole 100mg",
    "priceCompare": {
      "branded": "₹125 / pack",
      "generic": "₹10 / pack",
      "savings": "92%"
    }
  },
  {
    "id": "med-27",
    "en": {
      "name": "Ondansetron Drop 200mg (Cold & Cough) - JanSeva",
      "genericName": "Ondansetron",
      "usage": "Prevention of nausea and vomiting.",
      "dosage": "4mg or 8mg as needed.",
      "warnings": [
        "May cause headache",
        "Use carefully during pregnancy"
      ]
    },
    "or": {
      "name": "ଓଣ୍ଡାନସେଟ୍ରନ୍ Drop 200mg",
      "genericName": "ଓଣ୍ଡାନସେଟ୍ରନ୍",
      "usage": "ବାନ୍ତି ଏବଂ ବାନ୍ତି ଲାଗିବାରୁ ପ୍ରତିରୋଧ।",
      "dosage": "ଆବଶ୍ୟକ ଅନୁଯାୟୀ ୪ ମି.ଗ୍ରା. କିମ୍ବା ୮ ମି.ଗ୍ରା.।",
      "warnings": [
        "ମୁଣ୍ଡବିନ୍ଧା ହୋଇପାରେ।",
        "ଗର୍ଭାବସ୍ଥାରେ ସତର୍କତାର ସହ ବ୍ୟବହାର କରନ୍ତୁ।"
      ]
    },
    "janAushadhiAlt": "Jan Aushadhi Ondansetron 200mg",
    "priceCompare": {
      "branded": "₹128 / pack",
      "generic": "₹11 / pack",
      "savings": "91%"
    }
  },
  {
    "id": "med-28",
    "en": {
      "name": "Doxycycline Sachet 300mg (Worm Treatment) - GraminCare",
      "genericName": "Doxycycline Hyclate",
      "usage": "Treatment of acne, cholera, scrub typhus, and malaria prophylaxis.",
      "dosage": "100mg twice daily.",
      "warnings": [
        "Avoid sun exposure (photosensitivity)",
        "Do not take with antacids"
      ]
    },
    "or": {
      "name": "ଡକ୍ସିସାଇକ୍ଲିନ୍ ହାଇକ୍ଲେଟ୍ Sachet 300mg",
      "genericName": "ଡକ୍ସିସାଇକ୍ଲିନ୍ ହାଇକ୍ଲେଟ୍",
      "usage": "ବ୍ରଣ, କଲେରା, ସ୍କ୍ରବ୍ ଟାଇଫସ୍ ଏବଂ ମ୍ୟାଲେରିଆ ପ୍ରତିରୋଧର ଚିକିତ୍ସା।",
      "dosage": "ଦିନକୁ ଦୁଇଥର ୧୦୦ ମି.ଗ୍ରା.।",
      "warnings": [
        "ସୂର୍ଯ୍ୟ କିରଣରୁ ଦୂରେଇ ରୁହନ୍ତୁ।",
        "ଏଣ୍ଟାସିଡ୍ ସହିତ ଖାଆନ୍ତୁ ନାହିଁ।"
      ]
    },
    "janAushadhiAlt": "Jan Aushadhi Doxycycline 300mg",
    "priceCompare": {
      "branded": "₹131 / pack",
      "generic": "₹12 / pack",
      "savings": "90%"
    }
  },
  {
    "id": "med-29",
    "en": {
      "name": "Chloroquine Tablet 400mg (Rehydration) - SwasthyaFirst",
      "genericName": "Chloroquine Phosphate",
      "usage": "Treatment and prevention of malaria.",
      "dosage": "As prescribed based on body weight.",
      "warnings": [
        "Take with food",
        "May cause vision changes"
      ]
    },
    "or": {
      "name": "କ୍ଲୋରୋକୁଇନ୍ ଫସଫେଟ୍ Tablet 400mg",
      "genericName": "କ୍ଲୋରୋକୁଇନ୍ ଫସଫେଟ୍",
      "usage": "ମ୍ୟାଲେରିଆର ଚିକିତ୍ସା ଏବଂ ପ୍ରତିରୋଧ।",
      "dosage": "ଶରୀରର ଓଜନ ଉପରେ ଆଧାର କରି ଡାକ୍ତରଙ୍କ ପରାମର୍ଶ ଅନୁଯାୟୀ।",
      "warnings": [
        "ଖାଦ୍ୟ ସହିତ ଖାଆନ୍ତୁ।",
        "ଦୃଷ୍ଟିଶକ୍ତିରେ ପରିବର୍ତ୍ତନ ଆସିପାରେ।"
      ]
    },
    "janAushadhiAlt": "Jan Aushadhi Chloroquine 400mg",
    "priceCompare": {
      "branded": "₹134 / pack",
      "generic": "₹13 / pack",
      "savings": "90%"
    }
  },
  {
    "id": "med-30",
    "en": {
      "name": "Artesunate Capsule 500mg (Acidity Relief) - ApexOdisha",
      "genericName": "Artesunate",
      "usage": "Treatment of severe malaria.",
      "dosage": "Given as injection or as prescribed.",
      "warnings": [
        "Requires medical supervision",
        "Usually given with other antimalarials"
      ]
    },
    "or": {
      "name": "ଆର୍ଟେସୁନେଟ୍ Capsule 500mg",
      "genericName": "ଆର୍ଟେସୁନେଟ୍",
      "usage": "ଗୁରୁତର ମ୍ୟାଲେରିଆର ଚିକିତ୍ସା।",
      "dosage": "ଇଞ୍ଜେକ୍ସନ୍ ଭାବରେ କିମ୍ବା ପରାମର୍ଶ ଅନୁଯାୟୀ ଦିଆଯାଏ।",
      "warnings": [
        "ଡାକ୍ତରୀ ତଦାରଖ ଆବଶ୍ୟକ।",
        "ସାଧାରଣତଃ ଅନ୍ୟ ମ୍ୟାଲେରିଆ ଔଷଧ ସହିତ ଦିଆଯାଏ।"
      ]
    },
    "janAushadhiAlt": "Jan Aushadhi Artesunate 500mg",
    "priceCompare": {
      "branded": "₹137 / pack",
      "generic": "₹14 / pack",
      "savings": "89%"
    }
  },
  {
    "id": "med-31",
    "en": {
      "name": "Povidone Iodine Syrup 100mg (Dengue Relief) - OdishaCare",
      "genericName": "Povidone Iodine Ointment",
      "usage": "Topical antiseptic for minor cuts, wounds, and burns.",
      "dosage": "Apply externally to affected area 1-3 times daily.",
      "warnings": [
        "For external use only",
        "Avoid contact with eyes"
      ]
    },
    "or": {
      "name": "ପୋଭିଡୋନ୍ ଆୟୋଡିନ୍ ମଲମ Syrup 100mg",
      "genericName": "ପୋଭିଡୋନ୍ ଆୟୋଡିନ୍ ମଲମ",
      "usage": "ଛୋଟ କ୍ଷତ, କଟିବା ଏବଂ ପୋଡ଼ିବା ପାଇଁ ଆଣ୍ଟିସେପ୍ଟିକ୍ ମଲମ।",
      "dosage": "ପ୍ରଭାବିତ ସ୍ଥାନରେ ଦିନକୁ ୧-୩ ଥର ଲଗାନ୍ତୁ।",
      "warnings": [
        "କେବଳ ବାହ୍ୟ ବ୍ୟବହାର ପାଇଁ।",
        "ଆଖିରେ ଲଗାନ୍ତୁ ନାହିଁ।"
      ]
    },
    "janAushadhiAlt": "Jan Aushadhi Povidone Iodine 100mg",
    "priceCompare": {
      "branded": "₹140 / pack",
      "generic": "₹10 / pack",
      "savings": "92%"
    }
  },
  {
    "id": "med-32",
    "en": {
      "name": "Diclofenac Suspension 200mg (Malaria Cure) - UtkalMeds",
      "genericName": "Diclofenac Gel",
      "usage": "Local relief from muscle pain, joint pain, and sprains.",
      "dosage": "Apply a small amount to the affected area 3-4 times a day.",
      "warnings": [
        "Wash hands after application",
        "Do not apply on broken skin"
      ]
    },
    "or": {
      "name": "ଡାଇକ୍ଲୋଫେନାକ୍ ଜେଲ୍ Suspension 200mg",
      "genericName": "ଡାଇକ୍ଲୋଫେନାକ୍ ଜେଲ୍",
      "usage": "ମାଂସପେଶୀ ଯନ୍ତ୍ରଣା, ଗଣ୍ଠି ବିନ୍ଧା ଏବଂ ମୋଚକାରୁ ସ୍ଥାନୀୟ ଉପଶମ।",
      "dosage": "ପ୍ରଭାବିତ ସ୍ଥାନରେ ଦିନକୁ ୩-୪ ଥର ଅଳ୍ପ ପରିମାଣରେ ଲଗାନ୍ତୁ।",
      "warnings": [
        "ଲଗାଇବା ପରେ ହାତ ଧୋଇ ଦିଅନ୍ତୁ।",
        "କଟିଥିବା ଚର୍ମରେ ଲଗାନ୍ତୁ ନାହିଁ।"
      ]
    },
    "janAushadhiAlt": "Jan Aushadhi Diclofenac 200mg",
    "priceCompare": {
      "branded": "₹143 / pack",
      "generic": "₹11 / pack",
      "savings": "92%"
    }
  },
  {
    "id": "med-33",
    "en": {
      "name": "Paracetamol Ointment 300mg (Typhoid Care) - KalingaPharma",
      "genericName": "Paracetamol / Acetaminophen",
      "usage": "Fever reduction & mild-to-moderate pain relief.",
      "dosage": "500-650mg every 6-8 hours for adults.",
      "warnings": [
        "Do not exceed maximum daily dosage to prevent liver toxicity",
        "Avoid alcohol consumption while on medication"
      ]
    },
    "or": {
      "name": "ପାରାସିଟାମଲ୍ / ଏସିଟାମିନୋଫେନ୍ Ointment 300mg",
      "genericName": "ପାରାସିଟାମଲ୍ / ଏସିଟାମିନୋଫେନ୍",
      "usage": "ଜ୍ୱର ଏବଂ ସାଧାରଣ ଯନ୍ତ୍ରଣା (ମୁଣ୍ଡବିନ୍ଧା, ଦେହବିନ୍ଧା) ରୁ ଉପଶମ।",
      "dosage": "ପ୍ରାପ୍ତବୟସ୍କଙ୍କ ପାଇଁ ୫୦୦-୬୫୦ ମି.ଗ୍ରା. ପ୍ରତି ୬-୮ ଘଣ୍ଟାରେ।",
      "warnings": [
        "ଯକୃତ ସମସ୍ୟାକୁ ରୋକିବା ପାଇଁ ଦୈନିକ ମାତ୍ରା ଅତିକ୍ରମ କରନ୍ତୁ ନାହିଁ।",
        "ଔଷଧ ଖାଉଥିବା ସମୟରେ ମଦ୍ୟପାନ କରନ୍ତୁ ନାହିଁ।"
      ]
    },
    "janAushadhiAlt": "Jan Aushadhi Paracetamol 300mg",
    "priceCompare": {
      "branded": "₹146 / pack",
      "generic": "₹12 / pack",
      "savings": "91%"
    }
  },
  {
    "id": "med-34",
    "en": {
      "name": "Ibuprofen Drop 400mg (Fever & Pain) - SathiMed",
      "genericName": "Ibuprofen",
      "usage": "Pain relief, inflammation reduction, and fever reduction.",
      "dosage": "400mg every 4-6 hours.",
      "warnings": [
        "Take with food to avoid stomach upset",
        "Do not use if pregnant"
      ]
    },
    "or": {
      "name": "ଆଇବୁପ୍ରୋଫେନ୍ Drop 400mg",
      "genericName": "ଆଇବୁପ୍ରୋଫେନ୍",
      "usage": "ଯନ୍ତ୍ରଣା ଉପଶମ, ଫୁଲା କମାଇବା ଏବଂ ଜ୍ୱର କମାଇବା।",
      "dosage": "ପ୍ରାପ୍ତବୟସ୍କଙ୍କ ପାଇଁ ୪୦୦ ମି.ଗ୍ରା. ପ୍ରତି ୪-୬ ଘଣ୍ଟାରେ।",
      "warnings": [
        "ପେଟ ସମସ୍ୟା ଏଡ଼ାଇବା ପାଇଁ ଖାଦ୍ୟ ସହିତ ଖାଆନ୍ତୁ।",
        "ଗର୍ଭବତୀ ଥିଲେ ବ୍ୟବହାର କରନ୍ତୁ ନାହିଁ।"
      ]
    },
    "janAushadhiAlt": "Jan Aushadhi Ibuprofen 400mg",
    "priceCompare": {
      "branded": "₹149 / pack",
      "generic": "₹13 / pack",
      "savings": "91%"
    }
  },
  {
    "id": "med-35",
    "en": {
      "name": "Amoxicillin Sachet 500mg (Stomach Infection) - VillageCure",
      "genericName": "Amoxicillin Trihydrate",
      "usage": "Bacterial infections such as pneumonia, bronchitis, and infections of the ears, nose, throat.",
      "dosage": "500mg every 8 hours or 875mg every 12 hours.",
      "warnings": [
        "Finish entire prescription",
        "May cause diarrhea"
      ]
    },
    "or": {
      "name": "ଆମୋକ୍ସିସିଲିନ୍ ଟ୍ରାଇହାଇଡ୍ରେଟ୍ Sachet 500mg",
      "genericName": "ଆମୋକ୍ସିସିଲିନ୍ ଟ୍ରାଇହାଇଡ୍ରେଟ୍",
      "usage": "ବ୍ୟାକ୍ଟେରିଆ ସଂକ୍ରମଣ ଯେପରିକି ନିମୋନିଆ, ବ୍ରୋଙ୍କାଇଟିସ୍ ଏବଂ କାନ, ନାକ, ଗଳା ସଂକ୍ରମଣ।",
      "dosage": "ପ୍ରତି ୮ ଘଣ୍ଟାରେ ୫୦୦ ମି.ଗ୍ରା. କିମ୍ବା ପ୍ରତି ୧୨ ଘଣ୍ଟାରେ ୮୭୫ ମି.ଗ୍ରା।",
      "warnings": [
        "ସମ୍ପୂର୍ଣ୍ଣ କୋର୍ସ ଶେଷ କରନ୍ତୁ।",
        "ତରଳ ଝାଡ଼ା ହୋଇପାରେ।"
      ]
    },
    "janAushadhiAlt": "Jan Aushadhi Amoxicillin 500mg",
    "priceCompare": {
      "branded": "₹152 / pack",
      "generic": "₹14 / pack",
      "savings": "90%"
    }
  },
  {
    "id": "med-36",
    "en": {
      "name": "ORS Tablet 100mg (Skin Care) - HealthPlus",
      "genericName": "Electrolyte Solution",
      "usage": "Prevention and treatment of dehydration caused by diarrhea.",
      "dosage": "Dissolve 1 sachet in 1 Litre of clean water.",
      "warnings": [
        "Use within 24 hours",
        "Do not mix with milk"
      ]
    },
    "or": {
      "name": "ଇଲେକ୍ଟ୍ରୋଲାଇଟ୍ ସଲ୍ୟୁସନ୍ Tablet 100mg",
      "genericName": "ଇଲେକ୍ଟ୍ରୋଲାଇଟ୍ ସଲ୍ୟୁସନ୍",
      "usage": "ଝାଡ଼ା କାରଣରୁ ହେଉଥିବା ଜଳଶୂନ୍ୟତାର ପ୍ରତିରୋଧ ଏବଂ ଚିକିତ୍ସା।",
      "dosage": "୧ ଲିଟର ସଫା ପାଣିରେ ୧ ପ୍ୟାକେଟ୍ ମିଶାନ୍ତୁ।",
      "warnings": [
        "୨୪ ଘଣ୍ଟା ମଧ୍ୟରେ ବ୍ୟବହାର କରନ୍ତୁ।",
        "କ୍ଷୀର ସହିତ ମିଶାନ୍ତୁ ନାହିଁ।"
      ]
    },
    "janAushadhiAlt": "Jan Aushadhi ORS 100mg",
    "priceCompare": {
      "branded": "₹155 / pack",
      "generic": "₹10 / pack",
      "savings": "93%"
    }
  },
  {
    "id": "med-37",
    "en": {
      "name": "Albendazole Capsule 200mg (Cold & Cough) - JanSeva",
      "genericName": "Albendazole",
      "usage": "Treatment of parasitic worm infections (deworming).",
      "dosage": "400mg as a single dose.",
      "warnings": [
        "Chew tablet completely before swallowing",
        "Do not use during pregnancy"
      ]
    },
    "or": {
      "name": "ଆଲବେଣ୍ଡାଜୋଲ୍ Capsule 200mg",
      "genericName": "ଆଲବେଣ୍ଡାଜୋଲ୍",
      "usage": "ପରଜୀବୀ କୃମି ସଂକ୍ରମଣର ଚିକିତ୍ସା (କୃମି ନାଶକ)।",
      "dosage": "ଗୋଟିଏ ମାତ୍ରା ଭାବରେ ୪୦୦ ମି.ଗ୍ରା.।",
      "warnings": [
        "ଗିଳିବା ପୂର୍ବରୁ ବଟିକାକୁ ସମ୍ପୂର୍ଣ୍ଣ ରୂପେ ଚୋବାନ୍ତୁ।",
        "ଗର୍ଭାବସ୍ଥାରେ ବ୍ୟବହାର କରନ୍ତୁ ନାହିଁ।"
      ]
    },
    "janAushadhiAlt": "Jan Aushadhi Albendazole 200mg",
    "priceCompare": {
      "branded": "₹158 / pack",
      "generic": "₹11 / pack",
      "savings": "93%"
    }
  },
  {
    "id": "med-38",
    "en": {
      "name": "Azithromycin Syrup 300mg (Worm Treatment) - GraminCare",
      "genericName": "Azithromycin",
      "usage": "Bacterial infections of the respiratory tract, throat, skin, and ear.",
      "dosage": "500mg once daily for 3 days.",
      "warnings": [
        "Take 1 hour before or 2 hours after meals",
        "Complete full course"
      ]
    },
    "or": {
      "name": "ଆଜିଥ୍ରୋମାଇସିନ୍ Syrup 300mg",
      "genericName": "ଆଜିଥ୍ରୋମାଇସିନ୍",
      "usage": "ଶ୍ୱାସକ୍ରିୟା, ଗଳା, ଚର୍ମ ଏବଂ କାନର ବ୍ୟାକ୍ଟେରିଆ ସଂକ୍ରମଣ।",
      "dosage": "ଦିନକୁ ଥରେ ୫୦୦ ମି.ଗ୍ରା. ୩ ଦିନ ପାଇଁ।",
      "warnings": [
        "ଖାଇବାର ୧ ଘଣ୍ଟା ପୂର୍ବରୁ କିମ୍ବା ୨ ଘଣ୍ଟା ପରେ ଖାଆନ୍ତୁ।",
        "ସମ୍ପୂର୍ଣ୍ଣ କୋର୍ସ ଶେଷ କରନ୍ତୁ।"
      ]
    },
    "janAushadhiAlt": "Jan Aushadhi Azithromycin 300mg",
    "priceCompare": {
      "branded": "₹161 / pack",
      "generic": "₹12 / pack",
      "savings": "92%"
    }
  },
  {
    "id": "med-39",
    "en": {
      "name": "Cetirizine Suspension 400mg (Rehydration) - SwasthyaFirst",
      "genericName": "Cetirizine Hydrochloride",
      "usage": "Relief of allergy symptoms like runny nose, sneezing, and watery eyes.",
      "dosage": "10mg once daily.",
      "warnings": [
        "May cause drowsiness",
        "Avoid alcohol"
      ]
    },
    "or": {
      "name": "ସେଟିରିଜିନ୍ ହାଇଡ୍ରୋକ୍ଲୋରାଇଡ୍ Suspension 400mg",
      "genericName": "ସେଟିରିଜିନ୍ ହାଇଡ୍ରୋକ୍ଲୋରାଇଡ୍",
      "usage": "ଆଲର୍ଜି ଲକ୍ଷଣ ଯେପରିକି ନାକରୁ ପାଣି ବୋହିବା, ଛିଙ୍କିବା ଏବଂ ଆଖିରୁ ପାଣି ବୋହିବାରୁ ଉପଶମ।",
      "dosage": "ଦିନକୁ ଥରେ ୧୦ ମି.ଗ୍ରା.।",
      "warnings": [
        "ନିଦ ଆସିପାରେ।",
        "ମଦ୍ୟପାନ କରନ୍ତୁ ନାହିଁ।"
      ]
    },
    "janAushadhiAlt": "Jan Aushadhi Cetirizine 400mg",
    "priceCompare": {
      "branded": "₹164 / pack",
      "generic": "₹13 / pack",
      "savings": "92%"
    }
  },
  {
    "id": "med-40",
    "en": {
      "name": "Metronidazole Ointment 500mg (Acidity Relief) - ApexOdisha",
      "genericName": "Metronidazole",
      "usage": "Treatment of certain bacterial and parasitic infections (amoebiasis).",
      "dosage": "400mg three times a day for 5-7 days.",
      "warnings": [
        "Strictly avoid alcohol during and 48 hours after treatment",
        "Take with food"
      ]
    },
    "or": {
      "name": "ମେଟ୍ରୋନିଡାଜୋଲ୍ Ointment 500mg",
      "genericName": "ମେଟ୍ରୋନିଡାଜୋଲ୍",
      "usage": "କେତେକ ବ୍ୟାକ୍ଟେରିଆ ଏବଂ ପରଜୀବୀ ସଂକ୍ରମଣର ଚିକିତ୍ସା (ଆମୋଏବିଆସିସ୍)।",
      "dosage": "୫-୭ ଦିନ ପାଇଁ ଦିନକୁ ତିନିଥର ୪୦୦ ମି.ଗ୍ରା.।",
      "warnings": [
        "ଚିକିତ୍ସା ସମୟରେ ଏବଂ ୪୮ ଘଣ୍ଟା ପରେ ମଦ୍ୟପାନ ସମ୍ପୂର୍ଣ୍ଣ ନିଷେଧ।",
        "ଖାଦ୍ୟ ସହିତ ଖାଆନ୍ତୁ।"
      ]
    },
    "janAushadhiAlt": "Jan Aushadhi Metronidazole 500mg",
    "priceCompare": {
      "branded": "₹167 / pack",
      "generic": "₹14 / pack",
      "savings": "91%"
    }
  },
  {
    "id": "med-41",
    "en": {
      "name": "Ciprofloxacin Drop 100mg (Dengue Relief) - OdishaCare",
      "genericName": "Ciprofloxacin",
      "usage": "Broad-spectrum antibiotic for urinary tract infections, typhoid fever.",
      "dosage": "500mg twice daily.",
      "warnings": [
        "Do not take with dairy products",
        "May cause joint issues"
      ]
    },
    "or": {
      "name": "ସିପ୍ରୋଫ୍ଲୋକ୍ସାସିନ୍ Drop 100mg",
      "genericName": "ସିପ୍ରୋଫ୍ଲୋକ୍ସାସିନ୍",
      "usage": "ପରିସ୍ରା ନଳୀ ସଂକ୍ରମଣ, ଟାଇଫଏଡ୍ ଜ୍ୱର ପାଇଁ ବ୍ୟାପକ ଆଣ୍ଟିବାୟୋଟିକ୍।",
      "dosage": "ଦିନକୁ ଦୁଇଥର ୫୦୦ ମି.ଗ୍ରା.।",
      "warnings": [
        "ଦୁଗ୍ଧଜାତ ଦ୍ରବ୍ୟ ସହିତ ଖାଆନ୍ତୁ ନାହିଁ।",
        "ଗଣ୍ଠି ସମସ୍ୟା ହୋଇପାରେ।"
      ]
    },
    "janAushadhiAlt": "Jan Aushadhi Ciprofloxacin 100mg",
    "priceCompare": {
      "branded": "₹170 / pack",
      "generic": "₹10 / pack",
      "savings": "94%"
    }
  },
  {
    "id": "med-42",
    "en": {
      "name": "Pantoprazole Sachet 200mg (Malaria Cure) - UtkalMeds",
      "genericName": "Pantoprazole Sodium",
      "usage": "Reduces stomach acid, treats acidity, GERD, and ulcers.",
      "dosage": "40mg once daily before breakfast.",
      "warnings": [
        "Swallow whole, do not crush",
        "Long term use may cause B12 deficiency"
      ]
    },
    "or": {
      "name": "ପାଣ୍ଟୋପ୍ରାଜୋଲ୍ ସୋଡିୟମ୍ Sachet 200mg",
      "genericName": "ପାଣ୍ଟୋପ୍ରାଜୋଲ୍ ସୋଡିୟମ୍",
      "usage": "ପେଟରେ ଏସିଡ୍ କମାଏ, ଏସିଡିଟି, ଗ୍ୟାଷ୍ଟ୍ରିକ୍ ଏବଂ ଅଲସରର ଚିକିତ୍ସା କରେ।",
      "dosage": "ଜଳଖିଆ ପୂର୍ବରୁ ଦିନକୁ ଥରେ ୪୦ ମି.ଗ୍ରା.।",
      "warnings": [
        "ଗୋଟା ଗିଳି ଦିଅନ୍ତୁ, ଗୁଣ୍ଡ କରନ୍ତୁ ନାହିଁ।",
        "ଦୀର୍ଘକାଳୀନ ବ୍ୟବହାର ଦ୍ୱାରା ଭିଟାମିନ୍ B12 ଅଭାବ ହୋଇପାରେ।"
      ]
    },
    "janAushadhiAlt": "Jan Aushadhi Pantoprazole 200mg",
    "priceCompare": {
      "branded": "₹173 / pack",
      "generic": "₹11 / pack",
      "savings": "93%"
    }
  },
  {
    "id": "med-43",
    "en": {
      "name": "Ondansetron Tablet 300mg (Typhoid Care) - KalingaPharma",
      "genericName": "Ondansetron",
      "usage": "Prevention of nausea and vomiting.",
      "dosage": "4mg or 8mg as needed.",
      "warnings": [
        "May cause headache",
        "Use carefully during pregnancy"
      ]
    },
    "or": {
      "name": "ଓଣ୍ଡାନସେଟ୍ରନ୍ Tablet 300mg",
      "genericName": "ଓଣ୍ଡାନସେଟ୍ରନ୍",
      "usage": "ବାନ୍ତି ଏବଂ ବାନ୍ତି ଲାଗିବାରୁ ପ୍ରତିରୋଧ।",
      "dosage": "ଆବଶ୍ୟକ ଅନୁଯାୟୀ ୪ ମି.ଗ୍ରା. କିମ୍ବା ୮ ମି.ଗ୍ରା.।",
      "warnings": [
        "ମୁଣ୍ଡବିନ୍ଧା ହୋଇପାରେ।",
        "ଗର୍ଭାବସ୍ଥାରେ ସତର୍କତାର ସହ ବ୍ୟବହାର କରନ୍ତୁ।"
      ]
    },
    "janAushadhiAlt": "Jan Aushadhi Ondansetron 300mg",
    "priceCompare": {
      "branded": "₹176 / pack",
      "generic": "₹12 / pack",
      "savings": "93%"
    }
  },
  {
    "id": "med-44",
    "en": {
      "name": "Doxycycline Capsule 400mg (Fever & Pain) - SathiMed",
      "genericName": "Doxycycline Hyclate",
      "usage": "Treatment of acne, cholera, scrub typhus, and malaria prophylaxis.",
      "dosage": "100mg twice daily.",
      "warnings": [
        "Avoid sun exposure (photosensitivity)",
        "Do not take with antacids"
      ]
    },
    "or": {
      "name": "ଡକ୍ସିସାଇକ୍ଲିନ୍ ହାଇକ୍ଲେଟ୍ Capsule 400mg",
      "genericName": "ଡକ୍ସିସାଇକ୍ଲିନ୍ ହାଇକ୍ଲେଟ୍",
      "usage": "ବ୍ରଣ, କଲେରା, ସ୍କ୍ରବ୍ ଟାଇଫସ୍ ଏବଂ ମ୍ୟାଲେରିଆ ପ୍ରତିରୋଧର ଚିକିତ୍ସା।",
      "dosage": "ଦିନକୁ ଦୁଇଥର ୧୦୦ ମି.ଗ୍ରା.।",
      "warnings": [
        "ସୂର୍ଯ୍ୟ କିରଣରୁ ଦୂରେଇ ରୁହନ୍ତୁ।",
        "ଏଣ୍ଟାସିଡ୍ ସହିତ ଖାଆନ୍ତୁ ନାହିଁ।"
      ]
    },
    "janAushadhiAlt": "Jan Aushadhi Doxycycline 400mg",
    "priceCompare": {
      "branded": "₹179 / pack",
      "generic": "₹13 / pack",
      "savings": "92%"
    }
  },
  {
    "id": "med-45",
    "en": {
      "name": "Chloroquine Syrup 500mg (Stomach Infection) - VillageCure",
      "genericName": "Chloroquine Phosphate",
      "usage": "Treatment and prevention of malaria.",
      "dosage": "As prescribed based on body weight.",
      "warnings": [
        "Take with food",
        "May cause vision changes"
      ]
    },
    "or": {
      "name": "କ୍ଲୋରୋକୁଇନ୍ ଫସଫେଟ୍ Syrup 500mg",
      "genericName": "କ୍ଲୋରୋକୁଇନ୍ ଫସଫେଟ୍",
      "usage": "ମ୍ୟାଲେରିଆର ଚିକିତ୍ସା ଏବଂ ପ୍ରତିରୋଧ।",
      "dosage": "ଶରୀରର ଓଜନ ଉପରେ ଆଧାର କରି ଡାକ୍ତରଙ୍କ ପରାମର୍ଶ ଅନୁଯାୟୀ।",
      "warnings": [
        "ଖାଦ୍ୟ ସହିତ ଖାଆନ୍ତୁ।",
        "ଦୃଷ୍ଟିଶକ୍ତିରେ ପରିବର୍ତ୍ତନ ଆସିପାରେ।"
      ]
    },
    "janAushadhiAlt": "Jan Aushadhi Chloroquine 500mg",
    "priceCompare": {
      "branded": "₹182 / pack",
      "generic": "₹14 / pack",
      "savings": "92%"
    }
  },
  {
    "id": "med-46",
    "en": {
      "name": "Artesunate Suspension 100mg (Skin Care) - HealthPlus",
      "genericName": "Artesunate",
      "usage": "Treatment of severe malaria.",
      "dosage": "Given as injection or as prescribed.",
      "warnings": [
        "Requires medical supervision",
        "Usually given with other antimalarials"
      ]
    },
    "or": {
      "name": "ଆର୍ଟେସୁନେଟ୍ Suspension 100mg",
      "genericName": "ଆର୍ଟେସୁନେଟ୍",
      "usage": "ଗୁରୁତର ମ୍ୟାଲେରିଆର ଚିକିତ୍ସା।",
      "dosage": "ଇଞ୍ଜେକ୍ସନ୍ ଭାବରେ କିମ୍ବା ପରାମର୍ଶ ଅନୁଯାୟୀ ଦିଆଯାଏ।",
      "warnings": [
        "ଡାକ୍ତରୀ ତଦାରଖ ଆବଶ୍ୟକ।",
        "ସାଧାରଣତଃ ଅନ୍ୟ ମ୍ୟାଲେରିଆ ଔଷଧ ସହିତ ଦିଆଯାଏ।"
      ]
    },
    "janAushadhiAlt": "Jan Aushadhi Artesunate 100mg",
    "priceCompare": {
      "branded": "₹185 / pack",
      "generic": "₹10 / pack",
      "savings": "94%"
    }
  },
  {
    "id": "med-47",
    "en": {
      "name": "Povidone Iodine Ointment 200mg (Cold & Cough) - JanSeva",
      "genericName": "Povidone Iodine Ointment",
      "usage": "Topical antiseptic for minor cuts, wounds, and burns.",
      "dosage": "Apply externally to affected area 1-3 times daily.",
      "warnings": [
        "For external use only",
        "Avoid contact with eyes"
      ]
    },
    "or": {
      "name": "ପୋଭିଡୋନ୍ ଆୟୋଡିନ୍ ମଲମ Ointment 200mg",
      "genericName": "ପୋଭିଡୋନ୍ ଆୟୋଡିନ୍ ମଲମ",
      "usage": "ଛୋଟ କ୍ଷତ, କଟିବା ଏବଂ ପୋଡ଼ିବା ପାଇଁ ଆଣ୍ଟିସେପ୍ଟିକ୍ ମଲମ।",
      "dosage": "ପ୍ରଭାବିତ ସ୍ଥାନରେ ଦିନକୁ ୧-୩ ଥର ଲଗାନ୍ତୁ।",
      "warnings": [
        "କେବଳ ବାହ୍ୟ ବ୍ୟବହାର ପାଇଁ।",
        "ଆଖିରେ ଲଗାନ୍ତୁ ନାହିଁ।"
      ]
    },
    "janAushadhiAlt": "Jan Aushadhi Povidone Iodine 200mg",
    "priceCompare": {
      "branded": "₹188 / pack",
      "generic": "₹11 / pack",
      "savings": "94%"
    }
  },
  {
    "id": "med-48",
    "en": {
      "name": "Diclofenac Drop 300mg (Worm Treatment) - GraminCare",
      "genericName": "Diclofenac Gel",
      "usage": "Local relief from muscle pain, joint pain, and sprains.",
      "dosage": "Apply a small amount to the affected area 3-4 times a day.",
      "warnings": [
        "Wash hands after application",
        "Do not apply on broken skin"
      ]
    },
    "or": {
      "name": "ଡାଇକ୍ଲୋଫେନାକ୍ ଜେଲ୍ Drop 300mg",
      "genericName": "ଡାଇକ୍ଲୋଫେନାକ୍ ଜେଲ୍",
      "usage": "ମାଂସପେଶୀ ଯନ୍ତ୍ରଣା, ଗଣ୍ଠି ବିନ୍ଧା ଏବଂ ମୋଚକାରୁ ସ୍ଥାନୀୟ ଉପଶମ।",
      "dosage": "ପ୍ରଭାବିତ ସ୍ଥାନରେ ଦିନକୁ ୩-୪ ଥର ଅଳ୍ପ ପରିମାଣରେ ଲଗାନ୍ତୁ।",
      "warnings": [
        "ଲଗାଇବା ପରେ ହାତ ଧୋଇ ଦିଅନ୍ତୁ।",
        "କଟିଥିବା ଚର୍ମରେ ଲଗାନ୍ତୁ ନାହିଁ।"
      ]
    },
    "janAushadhiAlt": "Jan Aushadhi Diclofenac 300mg",
    "priceCompare": {
      "branded": "₹191 / pack",
      "generic": "₹12 / pack",
      "savings": "93%"
    }
  },
  {
    "id": "med-49",
    "en": {
      "name": "Paracetamol Sachet 400mg (Rehydration) - SwasthyaFirst",
      "genericName": "Paracetamol / Acetaminophen",
      "usage": "Fever reduction & mild-to-moderate pain relief.",
      "dosage": "500-650mg every 6-8 hours for adults.",
      "warnings": [
        "Do not exceed maximum daily dosage to prevent liver toxicity",
        "Avoid alcohol consumption while on medication"
      ]
    },
    "or": {
      "name": "ପାରାସିଟାମଲ୍ / ଏସିଟାମିନୋଫେନ୍ Sachet 400mg",
      "genericName": "ପାରାସିଟାମଲ୍ / ଏସିଟାମିନୋଫେନ୍",
      "usage": "ଜ୍ୱର ଏବଂ ସାଧାରଣ ଯନ୍ତ୍ରଣା (ମୁଣ୍ଡବିନ୍ଧା, ଦେହବିନ୍ଧା) ରୁ ଉପଶମ।",
      "dosage": "ପ୍ରାପ୍ତବୟସ୍କଙ୍କ ପାଇଁ ୫୦୦-୬୫୦ ମି.ଗ୍ରା. ପ୍ରତି ୬-୮ ଘଣ୍ଟାରେ।",
      "warnings": [
        "ଯକୃତ ସମସ୍ୟାକୁ ରୋକିବା ପାଇଁ ଦୈନିକ ମାତ୍ରା ଅତିକ୍ରମ କରନ୍ତୁ ନାହିଁ।",
        "ଔଷଧ ଖାଉଥିବା ସମୟରେ ମଦ୍ୟପାନ କରନ୍ତୁ ନାହିଁ।"
      ]
    },
    "janAushadhiAlt": "Jan Aushadhi Paracetamol 400mg",
    "priceCompare": {
      "branded": "₹194 / pack",
      "generic": "₹13 / pack",
      "savings": "93%"
    }
  },
  {
    "id": "med-50",
    "en": {
      "name": "Ibuprofen Tablet 500mg (Acidity Relief) - ApexOdisha",
      "genericName": "Ibuprofen",
      "usage": "Pain relief, inflammation reduction, and fever reduction.",
      "dosage": "400mg every 4-6 hours.",
      "warnings": [
        "Take with food to avoid stomach upset",
        "Do not use if pregnant"
      ]
    },
    "or": {
      "name": "ଆଇବୁପ୍ରୋଫେନ୍ Tablet 500mg",
      "genericName": "ଆଇବୁପ୍ରୋଫେନ୍",
      "usage": "ଯନ୍ତ୍ରଣା ଉପଶମ, ଫୁଲା କମାଇବା ଏବଂ ଜ୍ୱର କମାଇବା।",
      "dosage": "ପ୍ରାପ୍ତବୟସ୍କଙ୍କ ପାଇଁ ୪୦୦ ମି.ଗ୍ରା. ପ୍ରତି ୪-୬ ଘଣ୍ଟାରେ।",
      "warnings": [
        "ପେଟ ସମସ୍ୟା ଏଡ଼ାଇବା ପାଇଁ ଖାଦ୍ୟ ସହିତ ଖାଆନ୍ତୁ।",
        "ଗର୍ଭବତୀ ଥିଲେ ବ୍ୟବହାର କରନ୍ତୁ ନାହିଁ।"
      ]
    },
    "janAushadhiAlt": "Jan Aushadhi Ibuprofen 500mg",
    "priceCompare": {
      "branded": "₹197 / pack",
      "generic": "₹14 / pack",
      "savings": "92%"
    }
  },
  {
    "id": "med-51",
    "en": {
      "name": "Amoxicillin Capsule 100mg (Dengue Relief) - OdishaCare",
      "genericName": "Amoxicillin Trihydrate",
      "usage": "Bacterial infections such as pneumonia, bronchitis, and infections of the ears, nose, throat.",
      "dosage": "500mg every 8 hours or 875mg every 12 hours.",
      "warnings": [
        "Finish entire prescription",
        "May cause diarrhea"
      ]
    },
    "or": {
      "name": "ଆମୋକ୍ସିସିଲିନ୍ ଟ୍ରାଇହାଇଡ୍ରେଟ୍ Capsule 100mg",
      "genericName": "ଆମୋକ୍ସିସିଲିନ୍ ଟ୍ରାଇହାଇଡ୍ରେଟ୍",
      "usage": "ବ୍ୟାକ୍ଟେରିଆ ସଂକ୍ରମଣ ଯେପରିକି ନିମୋନିଆ, ବ୍ରୋଙ୍କାଇଟିସ୍ ଏବଂ କାନ, ନାକ, ଗଳା ସଂକ୍ରମଣ।",
      "dosage": "ପ୍ରତି ୮ ଘଣ୍ଟାରେ ୫୦୦ ମି.ଗ୍ରା. କିମ୍ବା ପ୍ରତି ୧୨ ଘଣ୍ଟାରେ ୮୭୫ ମି.ଗ୍ରା।",
      "warnings": [
        "ସମ୍ପୂର୍ଣ୍ଣ କୋର୍ସ ଶେଷ କରନ୍ତୁ।",
        "ତରଳ ଝାଡ଼ା ହୋଇପାରେ।"
      ]
    },
    "janAushadhiAlt": "Jan Aushadhi Amoxicillin 100mg",
    "priceCompare": {
      "branded": "₹200 / pack",
      "generic": "₹10 / pack",
      "savings": "95%"
    }
  },
  {
    "id": "med-52",
    "en": {
      "name": "ORS Syrup 200mg (Malaria Cure) - UtkalMeds",
      "genericName": "Electrolyte Solution",
      "usage": "Prevention and treatment of dehydration caused by diarrhea.",
      "dosage": "Dissolve 1 sachet in 1 Litre of clean water.",
      "warnings": [
        "Use within 24 hours",
        "Do not mix with milk"
      ]
    },
    "or": {
      "name": "ଇଲେକ୍ଟ୍ରୋଲାଇଟ୍ ସଲ୍ୟୁସନ୍ Syrup 200mg",
      "genericName": "ଇଲେକ୍ଟ୍ରୋଲାଇଟ୍ ସଲ୍ୟୁସନ୍",
      "usage": "ଝାଡ଼ା କାରଣରୁ ହେଉଥିବା ଜଳଶୂନ୍ୟତାର ପ୍ରତିରୋଧ ଏବଂ ଚିକିତ୍ସା।",
      "dosage": "୧ ଲିଟର ସଫା ପାଣିରେ ୧ ପ୍ୟାକେଟ୍ ମିଶାନ୍ତୁ।",
      "warnings": [
        "୨୪ ଘଣ୍ଟା ମଧ୍ୟରେ ବ୍ୟବହାର କରନ୍ତୁ।",
        "କ୍ଷୀର ସହିତ ମିଶାନ୍ତୁ ନାହିଁ।"
      ]
    },
    "janAushadhiAlt": "Jan Aushadhi ORS 200mg",
    "priceCompare": {
      "branded": "₹203 / pack",
      "generic": "₹11 / pack",
      "savings": "94%"
    }
  },
  {
    "id": "med-53",
    "en": {
      "name": "Albendazole Suspension 300mg (Typhoid Care) - KalingaPharma",
      "genericName": "Albendazole",
      "usage": "Treatment of parasitic worm infections (deworming).",
      "dosage": "400mg as a single dose.",
      "warnings": [
        "Chew tablet completely before swallowing",
        "Do not use during pregnancy"
      ]
    },
    "or": {
      "name": "ଆଲବେଣ୍ଡାଜୋଲ୍ Suspension 300mg",
      "genericName": "ଆଲବେଣ୍ଡାଜୋଲ୍",
      "usage": "ପରଜୀବୀ କୃମି ସଂକ୍ରମଣର ଚିକିତ୍ସା (କୃମି ନାଶକ)।",
      "dosage": "ଗୋଟିଏ ମାତ୍ରା ଭାବରେ ୪୦୦ ମି.ଗ୍ରା.।",
      "warnings": [
        "ଗିଳିବା ପୂର୍ବରୁ ବଟିକାକୁ ସମ୍ପୂର୍ଣ୍ଣ ରୂପେ ଚୋବାନ୍ତୁ।",
        "ଗର୍ଭାବସ୍ଥାରେ ବ୍ୟବହାର କରନ୍ତୁ ନାହିଁ।"
      ]
    },
    "janAushadhiAlt": "Jan Aushadhi Albendazole 300mg",
    "priceCompare": {
      "branded": "₹206 / pack",
      "generic": "₹12 / pack",
      "savings": "94%"
    }
  },
  {
    "id": "med-54",
    "en": {
      "name": "Azithromycin Ointment 400mg (Fever & Pain) - SathiMed",
      "genericName": "Azithromycin",
      "usage": "Bacterial infections of the respiratory tract, throat, skin, and ear.",
      "dosage": "500mg once daily for 3 days.",
      "warnings": [
        "Take 1 hour before or 2 hours after meals",
        "Complete full course"
      ]
    },
    "or": {
      "name": "ଆଜିଥ୍ରୋମାଇସିନ୍ Ointment 400mg",
      "genericName": "ଆଜିଥ୍ରୋମାଇସିନ୍",
      "usage": "ଶ୍ୱାସକ୍ରିୟା, ଗଳା, ଚର୍ମ ଏବଂ କାନର ବ୍ୟାକ୍ଟେରିଆ ସଂକ୍ରମଣ।",
      "dosage": "ଦିନକୁ ଥରେ ୫୦୦ ମି.ଗ୍ରା. ୩ ଦିନ ପାଇଁ।",
      "warnings": [
        "ଖାଇବାର ୧ ଘଣ୍ଟା ପୂର୍ବରୁ କିମ୍ବା ୨ ଘଣ୍ଟା ପରେ ଖାଆନ୍ତୁ।",
        "ସମ୍ପୂର୍ଣ୍ଣ କୋର୍ସ ଶେଷ କରନ୍ତୁ।"
      ]
    },
    "janAushadhiAlt": "Jan Aushadhi Azithromycin 400mg",
    "priceCompare": {
      "branded": "₹209 / pack",
      "generic": "₹13 / pack",
      "savings": "93%"
    }
  },
  {
    "id": "med-55",
    "en": {
      "name": "Cetirizine Drop 500mg (Stomach Infection) - VillageCure",
      "genericName": "Cetirizine Hydrochloride",
      "usage": "Relief of allergy symptoms like runny nose, sneezing, and watery eyes.",
      "dosage": "10mg once daily.",
      "warnings": [
        "May cause drowsiness",
        "Avoid alcohol"
      ]
    },
    "or": {
      "name": "ସେଟିରିଜିନ୍ ହାଇଡ୍ରୋକ୍ଲୋରାଇଡ୍ Drop 500mg",
      "genericName": "ସେଟିରିଜିନ୍ ହାଇଡ୍ରୋକ୍ଲୋରାଇଡ୍",
      "usage": "ଆଲର୍ଜି ଲକ୍ଷଣ ଯେପରିକି ନାକରୁ ପାଣି ବୋହିବା, ଛିଙ୍କିବା ଏବଂ ଆଖିରୁ ପାଣି ବୋହିବାରୁ ଉପଶମ।",
      "dosage": "ଦିନକୁ ଥରେ ୧୦ ମି.ଗ୍ରା.।",
      "warnings": [
        "ନିଦ ଆସିପାରେ।",
        "ମଦ୍ୟପାନ କରନ୍ତୁ ନାହିଁ।"
      ]
    },
    "janAushadhiAlt": "Jan Aushadhi Cetirizine 500mg",
    "priceCompare": {
      "branded": "₹212 / pack",
      "generic": "₹14 / pack",
      "savings": "93%"
    }
  },
  {
    "id": "med-56",
    "en": {
      "name": "Metronidazole Sachet 100mg (Skin Care) - HealthPlus",
      "genericName": "Metronidazole",
      "usage": "Treatment of certain bacterial and parasitic infections (amoebiasis).",
      "dosage": "400mg three times a day for 5-7 days.",
      "warnings": [
        "Strictly avoid alcohol during and 48 hours after treatment",
        "Take with food"
      ]
    },
    "or": {
      "name": "ମେଟ୍ରୋନିଡାଜୋଲ୍ Sachet 100mg",
      "genericName": "ମେଟ୍ରୋନିଡାଜୋଲ୍",
      "usage": "କେତେକ ବ୍ୟାକ୍ଟେରିଆ ଏବଂ ପରଜୀବୀ ସଂକ୍ରମଣର ଚିକିତ୍ସା (ଆମୋଏବିଆସିସ୍)।",
      "dosage": "୫-୭ ଦିନ ପାଇଁ ଦିନକୁ ତିନିଥର ୪୦୦ ମି.ଗ୍ରା.।",
      "warnings": [
        "ଚିକିତ୍ସା ସମୟରେ ଏବଂ ୪୮ ଘଣ୍ଟା ପରେ ମଦ୍ୟପାନ ସମ୍ପୂର୍ଣ୍ଣ ନିଷେଧ।",
        "ଖାଦ୍ୟ ସହିତ ଖାଆନ୍ତୁ।"
      ]
    },
    "janAushadhiAlt": "Jan Aushadhi Metronidazole 100mg",
    "priceCompare": {
      "branded": "₹215 / pack",
      "generic": "₹10 / pack",
      "savings": "95%"
    }
  },
  {
    "id": "med-57",
    "en": {
      "name": "Ciprofloxacin Tablet 200mg (Cold & Cough) - JanSeva",
      "genericName": "Ciprofloxacin",
      "usage": "Broad-spectrum antibiotic for urinary tract infections, typhoid fever.",
      "dosage": "500mg twice daily.",
      "warnings": [
        "Do not take with dairy products",
        "May cause joint issues"
      ]
    },
    "or": {
      "name": "ସିପ୍ରୋଫ୍ଲୋକ୍ସାସିନ୍ Tablet 200mg",
      "genericName": "ସିପ୍ରୋଫ୍ଲୋକ୍ସାସିନ୍",
      "usage": "ପରିସ୍ରା ନଳୀ ସଂକ୍ରମଣ, ଟାଇଫଏଡ୍ ଜ୍ୱର ପାଇଁ ବ୍ୟାପକ ଆଣ୍ଟିବାୟୋଟିକ୍।",
      "dosage": "ଦିନକୁ ଦୁଇଥର ୫୦୦ ମି.ଗ୍ରା.।",
      "warnings": [
        "ଦୁଗ୍ଧଜାତ ଦ୍ରବ୍ୟ ସହିତ ଖାଆନ୍ତୁ ନାହିଁ।",
        "ଗଣ୍ଠି ସମସ୍ୟା ହୋଇପାରେ।"
      ]
    },
    "janAushadhiAlt": "Jan Aushadhi Ciprofloxacin 200mg",
    "priceCompare": {
      "branded": "₹218 / pack",
      "generic": "₹11 / pack",
      "savings": "94%"
    }
  },
  {
    "id": "med-58",
    "en": {
      "name": "Pantoprazole Capsule 300mg (Worm Treatment) - GraminCare",
      "genericName": "Pantoprazole Sodium",
      "usage": "Reduces stomach acid, treats acidity, GERD, and ulcers.",
      "dosage": "40mg once daily before breakfast.",
      "warnings": [
        "Swallow whole, do not crush",
        "Long term use may cause B12 deficiency"
      ]
    },
    "or": {
      "name": "ପାଣ୍ଟୋପ୍ରାଜୋଲ୍ ସୋଡିୟମ୍ Capsule 300mg",
      "genericName": "ପାଣ୍ଟୋପ୍ରାଜୋଲ୍ ସୋଡିୟମ୍",
      "usage": "ପେଟରେ ଏସିଡ୍ କମାଏ, ଏସିଡିଟି, ଗ୍ୟାଷ୍ଟ୍ରିକ୍ ଏବଂ ଅଲସରର ଚିକିତ୍ସା କରେ।",
      "dosage": "ଜଳଖିଆ ପୂର୍ବରୁ ଦିନକୁ ଥରେ ୪୦ ମି.ଗ୍ରା.।",
      "warnings": [
        "ଗୋଟା ଗିଳି ଦିଅନ୍ତୁ, ଗୁଣ୍ଡ କରନ୍ତୁ ନାହିଁ।",
        "ଦୀର୍ଘକାଳୀନ ବ୍ୟବହାର ଦ୍ୱାରା ଭିଟାମିନ୍ B12 ଅଭାବ ହୋଇପାରେ।"
      ]
    },
    "janAushadhiAlt": "Jan Aushadhi Pantoprazole 300mg",
    "priceCompare": {
      "branded": "₹221 / pack",
      "generic": "₹12 / pack",
      "savings": "94%"
    }
  },
  {
    "id": "med-59",
    "en": {
      "name": "Ondansetron Syrup 400mg (Rehydration) - SwasthyaFirst",
      "genericName": "Ondansetron",
      "usage": "Prevention of nausea and vomiting.",
      "dosage": "4mg or 8mg as needed.",
      "warnings": [
        "May cause headache",
        "Use carefully during pregnancy"
      ]
    },
    "or": {
      "name": "ଓଣ୍ଡାନସେଟ୍ରନ୍ Syrup 400mg",
      "genericName": "ଓଣ୍ଡାନସେଟ୍ରନ୍",
      "usage": "ବାନ୍ତି ଏବଂ ବାନ୍ତି ଲାଗିବାରୁ ପ୍ରତିରୋଧ।",
      "dosage": "ଆବଶ୍ୟକ ଅନୁଯାୟୀ ୪ ମି.ଗ୍ରା. କିମ୍ବା ୮ ମି.ଗ୍ରା.।",
      "warnings": [
        "ମୁଣ୍ଡବିନ୍ଧା ହୋଇପାରେ।",
        "ଗର୍ଭାବସ୍ଥାରେ ସତର୍କତାର ସହ ବ୍ୟବହାର କରନ୍ତୁ।"
      ]
    },
    "janAushadhiAlt": "Jan Aushadhi Ondansetron 400mg",
    "priceCompare": {
      "branded": "₹224 / pack",
      "generic": "₹13 / pack",
      "savings": "94%"
    }
  },
  {
    "id": "med-60",
    "en": {
      "name": "Doxycycline Suspension 500mg (Acidity Relief) - ApexOdisha",
      "genericName": "Doxycycline Hyclate",
      "usage": "Treatment of acne, cholera, scrub typhus, and malaria prophylaxis.",
      "dosage": "100mg twice daily.",
      "warnings": [
        "Avoid sun exposure (photosensitivity)",
        "Do not take with antacids"
      ]
    },
    "or": {
      "name": "ଡକ୍ସିସାଇକ୍ଲିନ୍ ହାଇକ୍ଲେଟ୍ Suspension 500mg",
      "genericName": "ଡକ୍ସିସାଇକ୍ଲିନ୍ ହାଇକ୍ଲେଟ୍",
      "usage": "ବ୍ରଣ, କଲେରା, ସ୍କ୍ରବ୍ ଟାଇଫସ୍ ଏବଂ ମ୍ୟାଲେରିଆ ପ୍ରତିରୋଧର ଚିକିତ୍ସା।",
      "dosage": "ଦିନକୁ ଦୁଇଥର ୧୦୦ ମି.ଗ୍ରା.।",
      "warnings": [
        "ସୂର୍ଯ୍ୟ କିରଣରୁ ଦୂରେଇ ରୁହନ୍ତୁ।",
        "ଏଣ୍ଟାସିଡ୍ ସହିତ ଖାଆନ୍ତୁ ନାହିଁ।"
      ]
    },
    "janAushadhiAlt": "Jan Aushadhi Doxycycline 500mg",
    "priceCompare": {
      "branded": "₹227 / pack",
      "generic": "₹14 / pack",
      "savings": "93%"
    }
  },
  {
    "id": "med-61",
    "en": {
      "name": "Chloroquine Ointment 100mg (Dengue Relief) - OdishaCare",
      "genericName": "Chloroquine Phosphate",
      "usage": "Treatment and prevention of malaria.",
      "dosage": "As prescribed based on body weight.",
      "warnings": [
        "Take with food",
        "May cause vision changes"
      ]
    },
    "or": {
      "name": "କ୍ଲୋରୋକୁଇନ୍ ଫସଫେଟ୍ Ointment 100mg",
      "genericName": "କ୍ଲୋରୋକୁଇନ୍ ଫସଫେଟ୍",
      "usage": "ମ୍ୟାଲେରିଆର ଚିକିତ୍ସା ଏବଂ ପ୍ରତିରୋଧ।",
      "dosage": "ଶରୀରର ଓଜନ ଉପରେ ଆଧାର କରି ଡାକ୍ତରଙ୍କ ପରାମର୍ଶ ଅନୁଯାୟୀ।",
      "warnings": [
        "ଖାଦ୍ୟ ସହିତ ଖାଆନ୍ତୁ।",
        "ଦୃଷ୍ଟିଶକ୍ତିରେ ପରିବର୍ତ୍ତନ ଆସିପାରେ।"
      ]
    },
    "janAushadhiAlt": "Jan Aushadhi Chloroquine 100mg",
    "priceCompare": {
      "branded": "₹230 / pack",
      "generic": "₹10 / pack",
      "savings": "95%"
    }
  },
  {
    "id": "med-62",
    "en": {
      "name": "Artesunate Drop 200mg (Malaria Cure) - UtkalMeds",
      "genericName": "Artesunate",
      "usage": "Treatment of severe malaria.",
      "dosage": "Given as injection or as prescribed.",
      "warnings": [
        "Requires medical supervision",
        "Usually given with other antimalarials"
      ]
    },
    "or": {
      "name": "ଆର୍ଟେସୁନେଟ୍ Drop 200mg",
      "genericName": "ଆର୍ଟେସୁନେଟ୍",
      "usage": "ଗୁରୁତର ମ୍ୟାଲେରିଆର ଚିକିତ୍ସା।",
      "dosage": "ଇଞ୍ଜେକ୍ସନ୍ ଭାବରେ କିମ୍ବା ପରାମର୍ଶ ଅନୁଯାୟୀ ଦିଆଯାଏ।",
      "warnings": [
        "ଡାକ୍ତରୀ ତଦାରଖ ଆବଶ୍ୟକ।",
        "ସାଧାରଣତଃ ଅନ୍ୟ ମ୍ୟାଲେରିଆ ଔଷଧ ସହିତ ଦିଆଯାଏ।"
      ]
    },
    "janAushadhiAlt": "Jan Aushadhi Artesunate 200mg",
    "priceCompare": {
      "branded": "₹233 / pack",
      "generic": "₹11 / pack",
      "savings": "95%"
    }
  },
  {
    "id": "med-63",
    "en": {
      "name": "Povidone Iodine Sachet 300mg (Typhoid Care) - KalingaPharma",
      "genericName": "Povidone Iodine Ointment",
      "usage": "Topical antiseptic for minor cuts, wounds, and burns.",
      "dosage": "Apply externally to affected area 1-3 times daily.",
      "warnings": [
        "For external use only",
        "Avoid contact with eyes"
      ]
    },
    "or": {
      "name": "ପୋଭିଡୋନ୍ ଆୟୋଡିନ୍ ମଲମ Sachet 300mg",
      "genericName": "ପୋଭିଡୋନ୍ ଆୟୋଡିନ୍ ମଲମ",
      "usage": "ଛୋଟ କ୍ଷତ, କଟିବା ଏବଂ ପୋଡ଼ିବା ପାଇଁ ଆଣ୍ଟିସେପ୍ଟିକ୍ ମଲମ।",
      "dosage": "ପ୍ରଭାବିତ ସ୍ଥାନରେ ଦିନକୁ ୧-୩ ଥର ଲଗାନ୍ତୁ।",
      "warnings": [
        "କେବଳ ବାହ୍ୟ ବ୍ୟବହାର ପାଇଁ।",
        "ଆଖିରେ ଲଗାନ୍ତୁ ନାହିଁ।"
      ]
    },
    "janAushadhiAlt": "Jan Aushadhi Povidone Iodine 300mg",
    "priceCompare": {
      "branded": "₹236 / pack",
      "generic": "₹12 / pack",
      "savings": "94%"
    }
  },
  {
    "id": "med-64",
    "en": {
      "name": "Diclofenac Tablet 400mg (Fever & Pain) - SathiMed",
      "genericName": "Diclofenac Gel",
      "usage": "Local relief from muscle pain, joint pain, and sprains.",
      "dosage": "Apply a small amount to the affected area 3-4 times a day.",
      "warnings": [
        "Wash hands after application",
        "Do not apply on broken skin"
      ]
    },
    "or": {
      "name": "ଡାଇକ୍ଲୋଫେନାକ୍ ଜେଲ୍ Tablet 400mg",
      "genericName": "ଡାଇକ୍ଲୋଫେନାକ୍ ଜେଲ୍",
      "usage": "ମାଂସପେଶୀ ଯନ୍ତ୍ରଣା, ଗଣ୍ଠି ବିନ୍ଧା ଏବଂ ମୋଚକାରୁ ସ୍ଥାନୀୟ ଉପଶମ।",
      "dosage": "ପ୍ରଭାବିତ ସ୍ଥାନରେ ଦିନକୁ ୩-୪ ଥର ଅଳ୍ପ ପରିମାଣରେ ଲଗାନ୍ତୁ।",
      "warnings": [
        "ଲଗାଇବା ପରେ ହାତ ଧୋଇ ଦିଅନ୍ତୁ।",
        "କଟିଥିବା ଚର୍ମରେ ଲଗାନ୍ତୁ ନାହିଁ।"
      ]
    },
    "janAushadhiAlt": "Jan Aushadhi Diclofenac 400mg",
    "priceCompare": {
      "branded": "₹239 / pack",
      "generic": "₹13 / pack",
      "savings": "94%"
    }
  },
  {
    "id": "med-65",
    "en": {
      "name": "Paracetamol Capsule 500mg (Stomach Infection) - VillageCure",
      "genericName": "Paracetamol / Acetaminophen",
      "usage": "Fever reduction & mild-to-moderate pain relief.",
      "dosage": "500-650mg every 6-8 hours for adults.",
      "warnings": [
        "Do not exceed maximum daily dosage to prevent liver toxicity",
        "Avoid alcohol consumption while on medication"
      ]
    },
    "or": {
      "name": "ପାରାସିଟାମଲ୍ / ଏସିଟାମିନୋଫେନ୍ Capsule 500mg",
      "genericName": "ପାରାସିଟାମଲ୍ / ଏସିଟାମିନୋଫେନ୍",
      "usage": "ଜ୍ୱର ଏବଂ ସାଧାରଣ ଯନ୍ତ୍ରଣା (ମୁଣ୍ଡବିନ୍ଧା, ଦେହବିନ୍ଧା) ରୁ ଉପଶମ।",
      "dosage": "ପ୍ରାପ୍ତବୟସ୍କଙ୍କ ପାଇଁ ୫୦୦-୬୫୦ ମି.ଗ୍ରା. ପ୍ରତି ୬-୮ ଘଣ୍ଟାରେ।",
      "warnings": [
        "ଯକୃତ ସମସ୍ୟାକୁ ରୋକିବା ପାଇଁ ଦୈନିକ ମାତ୍ରା ଅତିକ୍ରମ କରନ୍ତୁ ନାହିଁ।",
        "ଔଷଧ ଖାଉଥିବା ସମୟରେ ମଦ୍ୟପାନ କରନ୍ତୁ ନାହିଁ।"
      ]
    },
    "janAushadhiAlt": "Jan Aushadhi Paracetamol 500mg",
    "priceCompare": {
      "branded": "₹242 / pack",
      "generic": "₹14 / pack",
      "savings": "94%"
    }
  },
  {
    "id": "med-66",
    "en": {
      "name": "Ibuprofen Syrup 100mg (Skin Care) - HealthPlus",
      "genericName": "Ibuprofen",
      "usage": "Pain relief, inflammation reduction, and fever reduction.",
      "dosage": "400mg every 4-6 hours.",
      "warnings": [
        "Take with food to avoid stomach upset",
        "Do not use if pregnant"
      ]
    },
    "or": {
      "name": "ଆଇବୁପ୍ରୋଫେନ୍ Syrup 100mg",
      "genericName": "ଆଇବୁପ୍ରୋଫେନ୍",
      "usage": "ଯନ୍ତ୍ରଣା ଉପଶମ, ଫୁଲା କମାଇବା ଏବଂ ଜ୍ୱର କମାଇବା।",
      "dosage": "ପ୍ରାପ୍ତବୟସ୍କଙ୍କ ପାଇଁ ୪୦୦ ମି.ଗ୍ରା. ପ୍ରତି ୪-୬ ଘଣ୍ଟାରେ।",
      "warnings": [
        "ପେଟ ସମସ୍ୟା ଏଡ଼ାଇବା ପାଇଁ ଖାଦ୍ୟ ସହିତ ଖାଆନ୍ତୁ।",
        "ଗର୍ଭବତୀ ଥିଲେ ବ୍ୟବହାର କରନ୍ତୁ ନାହିଁ।"
      ]
    },
    "janAushadhiAlt": "Jan Aushadhi Ibuprofen 100mg",
    "priceCompare": {
      "branded": "₹245 / pack",
      "generic": "₹10 / pack",
      "savings": "95%"
    }
  },
  {
    "id": "med-67",
    "en": {
      "name": "Amoxicillin Suspension 200mg (Cold & Cough) - JanSeva",
      "genericName": "Amoxicillin Trihydrate",
      "usage": "Bacterial infections such as pneumonia, bronchitis, and infections of the ears, nose, throat.",
      "dosage": "500mg every 8 hours or 875mg every 12 hours.",
      "warnings": [
        "Finish entire prescription",
        "May cause diarrhea"
      ]
    },
    "or": {
      "name": "ଆମୋକ୍ସିସିଲିନ୍ ଟ୍ରାଇହାଇଡ୍ରେଟ୍ Suspension 200mg",
      "genericName": "ଆମୋକ୍ସିସିଲିନ୍ ଟ୍ରାଇହାଇଡ୍ରେଟ୍",
      "usage": "ବ୍ୟାକ୍ଟେରିଆ ସଂକ୍ରମଣ ଯେପରିକି ନିମୋନିଆ, ବ୍ରୋଙ୍କାଇଟିସ୍ ଏବଂ କାନ, ନାକ, ଗଳା ସଂକ୍ରମଣ।",
      "dosage": "ପ୍ରତି ୮ ଘଣ୍ଟାରେ ୫୦୦ ମି.ଗ୍ରା. କିମ୍ବା ପ୍ରତି ୧୨ ଘଣ୍ଟାରେ ୮୭୫ ମି.ଗ୍ରା।",
      "warnings": [
        "ସମ୍ପୂର୍ଣ୍ଣ କୋର୍ସ ଶେଷ କରନ୍ତୁ।",
        "ତରଳ ଝାଡ଼ା ହୋଇପାରେ।"
      ]
    },
    "janAushadhiAlt": "Jan Aushadhi Amoxicillin 200mg",
    "priceCompare": {
      "branded": "₹248 / pack",
      "generic": "₹11 / pack",
      "savings": "95%"
    }
  },
  {
    "id": "med-68",
    "en": {
      "name": "ORS Ointment 300mg (Worm Treatment) - GraminCare",
      "genericName": "Electrolyte Solution",
      "usage": "Prevention and treatment of dehydration caused by diarrhea.",
      "dosage": "Dissolve 1 sachet in 1 Litre of clean water.",
      "warnings": [
        "Use within 24 hours",
        "Do not mix with milk"
      ]
    },
    "or": {
      "name": "ଇଲେକ୍ଟ୍ରୋଲାଇଟ୍ ସଲ୍ୟୁସନ୍ Ointment 300mg",
      "genericName": "ଇଲେକ୍ଟ୍ରୋଲାଇଟ୍ ସଲ୍ୟୁସନ୍",
      "usage": "ଝାଡ଼ା କାରଣରୁ ହେଉଥିବା ଜଳଶୂନ୍ୟତାର ପ୍ରତିରୋଧ ଏବଂ ଚିକିତ୍ସା।",
      "dosage": "୧ ଲିଟର ସଫା ପାଣିରେ ୧ ପ୍ୟାକେଟ୍ ମିଶାନ୍ତୁ।",
      "warnings": [
        "୨୪ ଘଣ୍ଟା ମଧ୍ୟରେ ବ୍ୟବହାର କରନ୍ତୁ।",
        "କ୍ଷୀର ସହିତ ମିଶାନ୍ତୁ ନାହିଁ।"
      ]
    },
    "janAushadhiAlt": "Jan Aushadhi ORS 300mg",
    "priceCompare": {
      "branded": "₹251 / pack",
      "generic": "₹12 / pack",
      "savings": "95%"
    }
  },
  {
    "id": "med-69",
    "en": {
      "name": "Albendazole Drop 400mg (Rehydration) - SwasthyaFirst",
      "genericName": "Albendazole",
      "usage": "Treatment of parasitic worm infections (deworming).",
      "dosage": "400mg as a single dose.",
      "warnings": [
        "Chew tablet completely before swallowing",
        "Do not use during pregnancy"
      ]
    },
    "or": {
      "name": "ଆଲବେଣ୍ଡାଜୋଲ୍ Drop 400mg",
      "genericName": "ଆଲବେଣ୍ଡାଜୋଲ୍",
      "usage": "ପରଜୀବୀ କୃମି ସଂକ୍ରମଣର ଚିକିତ୍ସା (କୃମି ନାଶକ)।",
      "dosage": "ଗୋଟିଏ ମାତ୍ରା ଭାବରେ ୪୦୦ ମି.ଗ୍ରା.।",
      "warnings": [
        "ଗିଳିବା ପୂର୍ବରୁ ବଟିକାକୁ ସମ୍ପୂର୍ଣ୍ଣ ରୂପେ ଚୋବାନ୍ତୁ।",
        "ଗର୍ଭାବସ୍ଥାରେ ବ୍ୟବହାର କରନ୍ତୁ ନାହିଁ।"
      ]
    },
    "janAushadhiAlt": "Jan Aushadhi Albendazole 400mg",
    "priceCompare": {
      "branded": "₹254 / pack",
      "generic": "₹13 / pack",
      "savings": "94%"
    }
  },
  {
    "id": "med-70",
    "en": {
      "name": "Azithromycin Sachet 500mg (Acidity Relief) - ApexOdisha",
      "genericName": "Azithromycin",
      "usage": "Bacterial infections of the respiratory tract, throat, skin, and ear.",
      "dosage": "500mg once daily for 3 days.",
      "warnings": [
        "Take 1 hour before or 2 hours after meals",
        "Complete full course"
      ]
    },
    "or": {
      "name": "ଆଜିଥ୍ରୋମାଇସିନ୍ Sachet 500mg",
      "genericName": "ଆଜିଥ୍ରୋମାଇସିନ୍",
      "usage": "ଶ୍ୱାସକ୍ରିୟା, ଗଳା, ଚର୍ମ ଏବଂ କାନର ବ୍ୟାକ୍ଟେରିଆ ସଂକ୍ରମଣ।",
      "dosage": "ଦିନକୁ ଥରେ ୫୦୦ ମି.ଗ୍ରା. ୩ ଦିନ ପାଇଁ।",
      "warnings": [
        "ଖାଇବାର ୧ ଘଣ୍ଟା ପୂର୍ବରୁ କିମ୍ବା ୨ ଘଣ୍ଟା ପରେ ଖାଆନ୍ତୁ।",
        "ସମ୍ପୂର୍ଣ୍ଣ କୋର୍ସ ଶେଷ କରନ୍ତୁ।"
      ]
    },
    "janAushadhiAlt": "Jan Aushadhi Azithromycin 500mg",
    "priceCompare": {
      "branded": "₹257 / pack",
      "generic": "₹14 / pack",
      "savings": "94%"
    }
  },
  {
    "id": "med-71",
    "en": {
      "name": "Cetirizine Tablet 100mg (Dengue Relief) - OdishaCare",
      "genericName": "Cetirizine Hydrochloride",
      "usage": "Relief of allergy symptoms like runny nose, sneezing, and watery eyes.",
      "dosage": "10mg once daily.",
      "warnings": [
        "May cause drowsiness",
        "Avoid alcohol"
      ]
    },
    "or": {
      "name": "ସେଟିରିଜିନ୍ ହାଇଡ୍ରୋକ୍ଲୋରାଇଡ୍ Tablet 100mg",
      "genericName": "ସେଟିରିଜିନ୍ ହାଇଡ୍ରୋକ୍ଲୋରାଇଡ୍",
      "usage": "ଆଲର୍ଜି ଲକ୍ଷଣ ଯେପରିକି ନାକରୁ ପାଣି ବୋହିବା, ଛିଙ୍କିବା ଏବଂ ଆଖିରୁ ପାଣି ବୋହିବାରୁ ଉପଶମ।",
      "dosage": "ଦିନକୁ ଥରେ ୧୦ ମି.ଗ୍ରା.।",
      "warnings": [
        "ନିଦ ଆସିପାରେ।",
        "ମଦ୍ୟପାନ କରନ୍ତୁ ନାହିଁ।"
      ]
    },
    "janAushadhiAlt": "Jan Aushadhi Cetirizine 100mg",
    "priceCompare": {
      "branded": "₹260 / pack",
      "generic": "₹10 / pack",
      "savings": "96%"
    }
  },
  {
    "id": "med-72",
    "en": {
      "name": "Metronidazole Capsule 200mg (Malaria Cure) - UtkalMeds",
      "genericName": "Metronidazole",
      "usage": "Treatment of certain bacterial and parasitic infections (amoebiasis).",
      "dosage": "400mg three times a day for 5-7 days.",
      "warnings": [
        "Strictly avoid alcohol during and 48 hours after treatment",
        "Take with food"
      ]
    },
    "or": {
      "name": "ମେଟ୍ରୋନିଡାଜୋଲ୍ Capsule 200mg",
      "genericName": "ମେଟ୍ରୋନିଡାଜୋଲ୍",
      "usage": "କେତେକ ବ୍ୟାକ୍ଟେରିଆ ଏବଂ ପରଜୀବୀ ସଂକ୍ରମଣର ଚିକିତ୍ସା (ଆମୋଏବିଆସିସ୍)।",
      "dosage": "୫-୭ ଦିନ ପାଇଁ ଦିନକୁ ତିନିଥର ୪୦୦ ମି.ଗ୍ରା.।",
      "warnings": [
        "ଚିକିତ୍ସା ସମୟରେ ଏବଂ ୪୮ ଘଣ୍ଟା ପରେ ମଦ୍ୟପାନ ସମ୍ପୂର୍ଣ୍ଣ ନିଷେଧ।",
        "ଖାଦ୍ୟ ସହିତ ଖାଆନ୍ତୁ।"
      ]
    },
    "janAushadhiAlt": "Jan Aushadhi Metronidazole 200mg",
    "priceCompare": {
      "branded": "₹263 / pack",
      "generic": "₹11 / pack",
      "savings": "95%"
    }
  },
  {
    "id": "med-73",
    "en": {
      "name": "Ciprofloxacin Syrup 300mg (Typhoid Care) - KalingaPharma",
      "genericName": "Ciprofloxacin",
      "usage": "Broad-spectrum antibiotic for urinary tract infections, typhoid fever.",
      "dosage": "500mg twice daily.",
      "warnings": [
        "Do not take with dairy products",
        "May cause joint issues"
      ]
    },
    "or": {
      "name": "ସିପ୍ରୋଫ୍ଲୋକ୍ସାସିନ୍ Syrup 300mg",
      "genericName": "ସିପ୍ରୋଫ୍ଲୋକ୍ସାସିନ୍",
      "usage": "ପରିସ୍ରା ନଳୀ ସଂକ୍ରମଣ, ଟାଇଫଏଡ୍ ଜ୍ୱର ପାଇଁ ବ୍ୟାପକ ଆଣ୍ଟିବାୟୋଟିକ୍।",
      "dosage": "ଦିନକୁ ଦୁଇଥର ୫୦୦ ମି.ଗ୍ରା.।",
      "warnings": [
        "ଦୁଗ୍ଧଜାତ ଦ୍ରବ୍ୟ ସହିତ ଖାଆନ୍ତୁ ନାହିଁ।",
        "ଗଣ୍ଠି ସମସ୍ୟା ହୋଇପାରେ।"
      ]
    },
    "janAushadhiAlt": "Jan Aushadhi Ciprofloxacin 300mg",
    "priceCompare": {
      "branded": "₹266 / pack",
      "generic": "₹12 / pack",
      "savings": "95%"
    }
  },
  {
    "id": "med-74",
    "en": {
      "name": "Pantoprazole Suspension 400mg (Fever & Pain) - SathiMed",
      "genericName": "Pantoprazole Sodium",
      "usage": "Reduces stomach acid, treats acidity, GERD, and ulcers.",
      "dosage": "40mg once daily before breakfast.",
      "warnings": [
        "Swallow whole, do not crush",
        "Long term use may cause B12 deficiency"
      ]
    },
    "or": {
      "name": "ପାଣ୍ଟୋପ୍ରାଜୋଲ୍ ସୋଡିୟମ୍ Suspension 400mg",
      "genericName": "ପାଣ୍ଟୋପ୍ରାଜୋଲ୍ ସୋଡିୟମ୍",
      "usage": "ପେଟରେ ଏସିଡ୍ କମାଏ, ଏସିଡିଟି, ଗ୍ୟାଷ୍ଟ୍ରିକ୍ ଏବଂ ଅଲସରର ଚିକିତ୍ସା କରେ।",
      "dosage": "ଜଳଖିଆ ପୂର୍ବରୁ ଦିନକୁ ଥରେ ୪୦ ମି.ଗ୍ରା.।",
      "warnings": [
        "ଗୋଟା ଗିଳି ଦିଅନ୍ତୁ, ଗୁଣ୍ଡ କରନ୍ତୁ ନାହିଁ।",
        "ଦୀର୍ଘକାଳୀନ ବ୍ୟବହାର ଦ୍ୱାରା ଭିଟାମିନ୍ B12 ଅଭାବ ହୋଇପାରେ।"
      ]
    },
    "janAushadhiAlt": "Jan Aushadhi Pantoprazole 400mg",
    "priceCompare": {
      "branded": "₹269 / pack",
      "generic": "₹13 / pack",
      "savings": "95%"
    }
  },
  {
    "id": "med-75",
    "en": {
      "name": "Ondansetron Ointment 500mg (Stomach Infection) - VillageCure",
      "genericName": "Ondansetron",
      "usage": "Prevention of nausea and vomiting.",
      "dosage": "4mg or 8mg as needed.",
      "warnings": [
        "May cause headache",
        "Use carefully during pregnancy"
      ]
    },
    "or": {
      "name": "ଓଣ୍ଡାନସେଟ୍ରନ୍ Ointment 500mg",
      "genericName": "ଓଣ୍ଡାନସେଟ୍ରନ୍",
      "usage": "ବାନ୍ତି ଏବଂ ବାନ୍ତି ଲାଗିବାରୁ ପ୍ରତିରୋଧ।",
      "dosage": "ଆବଶ୍ୟକ ଅନୁଯାୟୀ ୪ ମି.ଗ୍ରା. କିମ୍ବା ୮ ମି.ଗ୍ରା.।",
      "warnings": [
        "ମୁଣ୍ଡବିନ୍ଧା ହୋଇପାରେ।",
        "ଗର୍ଭାବସ୍ଥାରେ ସତର୍କତାର ସହ ବ୍ୟବହାର କରନ୍ତୁ।"
      ]
    },
    "janAushadhiAlt": "Jan Aushadhi Ondansetron 500mg",
    "priceCompare": {
      "branded": "₹272 / pack",
      "generic": "₹14 / pack",
      "savings": "94%"
    }
  },
  {
    "id": "med-76",
    "en": {
      "name": "Doxycycline Drop 100mg (Skin Care) - HealthPlus",
      "genericName": "Doxycycline Hyclate",
      "usage": "Treatment of acne, cholera, scrub typhus, and malaria prophylaxis.",
      "dosage": "100mg twice daily.",
      "warnings": [
        "Avoid sun exposure (photosensitivity)",
        "Do not take with antacids"
      ]
    },
    "or": {
      "name": "ଡକ୍ସିସାଇକ୍ଲିନ୍ ହାଇକ୍ଲେଟ୍ Drop 100mg",
      "genericName": "ଡକ୍ସିସାଇକ୍ଲିନ୍ ହାଇକ୍ଲେଟ୍",
      "usage": "ବ୍ରଣ, କଲେରା, ସ୍କ୍ରବ୍ ଟାଇଫସ୍ ଏବଂ ମ୍ୟାଲେରିଆ ପ୍ରତିରୋଧର ଚିକିତ୍ସା।",
      "dosage": "ଦିନକୁ ଦୁଇଥର ୧୦୦ ମି.ଗ୍ରା.।",
      "warnings": [
        "ସୂର୍ଯ୍ୟ କିରଣରୁ ଦୂରେଇ ରୁହନ୍ତୁ।",
        "ଏଣ୍ଟାସିଡ୍ ସହିତ ଖାଆନ୍ତୁ ନାହିଁ।"
      ]
    },
    "janAushadhiAlt": "Jan Aushadhi Doxycycline 100mg",
    "priceCompare": {
      "branded": "₹275 / pack",
      "generic": "₹10 / pack",
      "savings": "96%"
    }
  },
  {
    "id": "med-77",
    "en": {
      "name": "Chloroquine Sachet 200mg (Cold & Cough) - JanSeva",
      "genericName": "Chloroquine Phosphate",
      "usage": "Treatment and prevention of malaria.",
      "dosage": "As prescribed based on body weight.",
      "warnings": [
        "Take with food",
        "May cause vision changes"
      ]
    },
    "or": {
      "name": "କ୍ଲୋରୋକୁଇନ୍ ଫସଫେଟ୍ Sachet 200mg",
      "genericName": "କ୍ଲୋରୋକୁଇନ୍ ଫସଫେଟ୍",
      "usage": "ମ୍ୟାଲେରିଆର ଚିକିତ୍ସା ଏବଂ ପ୍ରତିରୋଧ।",
      "dosage": "ଶରୀରର ଓଜନ ଉପରେ ଆଧାର କରି ଡାକ୍ତରଙ୍କ ପରାମର୍ଶ ଅନୁଯାୟୀ।",
      "warnings": [
        "ଖାଦ୍ୟ ସହିତ ଖାଆନ୍ତୁ।",
        "ଦୃଷ୍ଟିଶକ୍ତିରେ ପରିବର୍ତ୍ତନ ଆସିପାରେ।"
      ]
    },
    "janAushadhiAlt": "Jan Aushadhi Chloroquine 200mg",
    "priceCompare": {
      "branded": "₹278 / pack",
      "generic": "₹11 / pack",
      "savings": "96%"
    }
  },
  {
    "id": "med-78",
    "en": {
      "name": "Artesunate Tablet 300mg (Worm Treatment) - GraminCare",
      "genericName": "Artesunate",
      "usage": "Treatment of severe malaria.",
      "dosage": "Given as injection or as prescribed.",
      "warnings": [
        "Requires medical supervision",
        "Usually given with other antimalarials"
      ]
    },
    "or": {
      "name": "ଆର୍ଟେସୁନେଟ୍ Tablet 300mg",
      "genericName": "ଆର୍ଟେସୁନେଟ୍",
      "usage": "ଗୁରୁତର ମ୍ୟାଲେରିଆର ଚିକିତ୍ସା।",
      "dosage": "ଇଞ୍ଜେକ୍ସନ୍ ଭାବରେ କିମ୍ବା ପରାମର୍ଶ ଅନୁଯାୟୀ ଦିଆଯାଏ।",
      "warnings": [
        "ଡାକ୍ତରୀ ତଦାରଖ ଆବଶ୍ୟକ।",
        "ସାଧାରଣତଃ ଅନ୍ୟ ମ୍ୟାଲେରିଆ ଔଷଧ ସହିତ ଦିଆଯାଏ।"
      ]
    },
    "janAushadhiAlt": "Jan Aushadhi Artesunate 300mg",
    "priceCompare": {
      "branded": "₹281 / pack",
      "generic": "₹12 / pack",
      "savings": "95%"
    }
  },
  {
    "id": "med-79",
    "en": {
      "name": "Povidone Iodine Capsule 400mg (Rehydration) - SwasthyaFirst",
      "genericName": "Povidone Iodine Ointment",
      "usage": "Topical antiseptic for minor cuts, wounds, and burns.",
      "dosage": "Apply externally to affected area 1-3 times daily.",
      "warnings": [
        "For external use only",
        "Avoid contact with eyes"
      ]
    },
    "or": {
      "name": "ପୋଭିଡୋନ୍ ଆୟୋଡିନ୍ ମଲମ Capsule 400mg",
      "genericName": "ପୋଭିଡୋନ୍ ଆୟୋଡିନ୍ ମଲମ",
      "usage": "ଛୋଟ କ୍ଷତ, କଟିବା ଏବଂ ପୋଡ଼ିବା ପାଇଁ ଆଣ୍ଟିସେପ୍ଟିକ୍ ମଲମ।",
      "dosage": "ପ୍ରଭାବିତ ସ୍ଥାନରେ ଦିନକୁ ୧-୩ ଥର ଲଗାନ୍ତୁ।",
      "warnings": [
        "କେବଳ ବାହ୍ୟ ବ୍ୟବହାର ପାଇଁ।",
        "ଆଖିରେ ଲଗାନ୍ତୁ ନାହିଁ।"
      ]
    },
    "janAushadhiAlt": "Jan Aushadhi Povidone Iodine 400mg",
    "priceCompare": {
      "branded": "₹284 / pack",
      "generic": "₹13 / pack",
      "savings": "95%"
    }
  },
  {
    "id": "med-80",
    "en": {
      "name": "Diclofenac Syrup 500mg (Acidity Relief) - ApexOdisha",
      "genericName": "Diclofenac Gel",
      "usage": "Local relief from muscle pain, joint pain, and sprains.",
      "dosage": "Apply a small amount to the affected area 3-4 times a day.",
      "warnings": [
        "Wash hands after application",
        "Do not apply on broken skin"
      ]
    },
    "or": {
      "name": "ଡାଇକ୍ଲୋଫେନାକ୍ ଜେଲ୍ Syrup 500mg",
      "genericName": "ଡାଇକ୍ଲୋଫେନାକ୍ ଜେଲ୍",
      "usage": "ମାଂସପେଶୀ ଯନ୍ତ୍ରଣା, ଗଣ୍ଠି ବିନ୍ଧା ଏବଂ ମୋଚକାରୁ ସ୍ଥାନୀୟ ଉପଶମ।",
      "dosage": "ପ୍ରଭାବିତ ସ୍ଥାନରେ ଦିନକୁ ୩-୪ ଥର ଅଳ୍ପ ପରିମାଣରେ ଲଗାନ୍ତୁ।",
      "warnings": [
        "ଲଗାଇବା ପରେ ହାତ ଧୋଇ ଦିଅନ୍ତୁ।",
        "କଟିଥିବା ଚର୍ମରେ ଲଗାନ୍ତୁ ନାହିଁ।"
      ]
    },
    "janAushadhiAlt": "Jan Aushadhi Diclofenac 500mg",
    "priceCompare": {
      "branded": "₹287 / pack",
      "generic": "₹14 / pack",
      "savings": "95%"
    }
  },
  {
    "id": "med-81",
    "en": {
      "name": "Paracetamol Suspension 100mg (Dengue Relief) - OdishaCare",
      "genericName": "Paracetamol / Acetaminophen",
      "usage": "Fever reduction & mild-to-moderate pain relief.",
      "dosage": "500-650mg every 6-8 hours for adults.",
      "warnings": [
        "Do not exceed maximum daily dosage to prevent liver toxicity",
        "Avoid alcohol consumption while on medication"
      ]
    },
    "or": {
      "name": "ପାରାସିଟାମଲ୍ / ଏସିଟାମିନୋଫେନ୍ Suspension 100mg",
      "genericName": "ପାରାସିଟାମଲ୍ / ଏସିଟାମିନୋଫେନ୍",
      "usage": "ଜ୍ୱର ଏବଂ ସାଧାରଣ ଯନ୍ତ୍ରଣା (ମୁଣ୍ଡବିନ୍ଧା, ଦେହବିନ୍ଧା) ରୁ ଉପଶମ।",
      "dosage": "ପ୍ରାପ୍ତବୟସ୍କଙ୍କ ପାଇଁ ୫୦୦-୬୫୦ ମି.ଗ୍ରା. ପ୍ରତି ୬-୮ ଘଣ୍ଟାରେ।",
      "warnings": [
        "ଯକୃତ ସମସ୍ୟାକୁ ରୋକିବା ପାଇଁ ଦୈନିକ ମାତ୍ରା ଅତିକ୍ରମ କରନ୍ତୁ ନାହିଁ।",
        "ଔଷଧ ଖାଉଥିବା ସମୟରେ ମଦ୍ୟପାନ କରନ୍ତୁ ନାହିଁ।"
      ]
    },
    "janAushadhiAlt": "Jan Aushadhi Paracetamol 100mg",
    "priceCompare": {
      "branded": "₹290 / pack",
      "generic": "₹10 / pack",
      "savings": "96%"
    }
  },
  {
    "id": "med-82",
    "en": {
      "name": "Ibuprofen Ointment 200mg (Malaria Cure) - UtkalMeds",
      "genericName": "Ibuprofen",
      "usage": "Pain relief, inflammation reduction, and fever reduction.",
      "dosage": "400mg every 4-6 hours.",
      "warnings": [
        "Take with food to avoid stomach upset",
        "Do not use if pregnant"
      ]
    },
    "or": {
      "name": "ଆଇବୁପ୍ରୋଫେନ୍ Ointment 200mg",
      "genericName": "ଆଇବୁପ୍ରୋଫେନ୍",
      "usage": "ଯନ୍ତ୍ରଣା ଉପଶମ, ଫୁଲା କମାଇବା ଏବଂ ଜ୍ୱର କମାଇବା।",
      "dosage": "ପ୍ରାପ୍ତବୟସ୍କଙ୍କ ପାଇଁ ୪୦୦ ମି.ଗ୍ରା. ପ୍ରତି ୪-୬ ଘଣ୍ଟାରେ।",
      "warnings": [
        "ପେଟ ସମସ୍ୟା ଏଡ଼ାଇବା ପାଇଁ ଖାଦ୍ୟ ସହିତ ଖାଆନ୍ତୁ।",
        "ଗର୍ଭବତୀ ଥିଲେ ବ୍ୟବହାର କରନ୍ତୁ ନାହିଁ।"
      ]
    },
    "janAushadhiAlt": "Jan Aushadhi Ibuprofen 200mg",
    "priceCompare": {
      "branded": "₹293 / pack",
      "generic": "₹11 / pack",
      "savings": "96%"
    }
  },
  {
    "id": "med-83",
    "en": {
      "name": "Amoxicillin Drop 300mg (Typhoid Care) - KalingaPharma",
      "genericName": "Amoxicillin Trihydrate",
      "usage": "Bacterial infections such as pneumonia, bronchitis, and infections of the ears, nose, throat.",
      "dosage": "500mg every 8 hours or 875mg every 12 hours.",
      "warnings": [
        "Finish entire prescription",
        "May cause diarrhea"
      ]
    },
    "or": {
      "name": "ଆମୋକ୍ସିସିଲିନ୍ ଟ୍ରାଇହାଇଡ୍ରେଟ୍ Drop 300mg",
      "genericName": "ଆମୋକ୍ସିସିଲିନ୍ ଟ୍ରାଇହାଇଡ୍ରେଟ୍",
      "usage": "ବ୍ୟାକ୍ଟେରିଆ ସଂକ୍ରମଣ ଯେପରିକି ନିମୋନିଆ, ବ୍ରୋଙ୍କାଇଟିସ୍ ଏବଂ କାନ, ନାକ, ଗଳା ସଂକ୍ରମଣ।",
      "dosage": "ପ୍ରତି ୮ ଘଣ୍ଟାରେ ୫୦୦ ମି.ଗ୍ରା. କିମ୍ବା ପ୍ରତି ୧୨ ଘଣ୍ଟାରେ ୮୭୫ ମି.ଗ୍ରା।",
      "warnings": [
        "ସମ୍ପୂର୍ଣ୍ଣ କୋର୍ସ ଶେଷ କରନ୍ତୁ।",
        "ତରଳ ଝାଡ଼ା ହୋଇପାରେ।"
      ]
    },
    "janAushadhiAlt": "Jan Aushadhi Amoxicillin 300mg",
    "priceCompare": {
      "branded": "₹296 / pack",
      "generic": "₹12 / pack",
      "savings": "95%"
    }
  },
  {
    "id": "med-84",
    "en": {
      "name": "ORS Sachet 400mg (Fever & Pain) - SathiMed",
      "genericName": "Electrolyte Solution",
      "usage": "Prevention and treatment of dehydration caused by diarrhea.",
      "dosage": "Dissolve 1 sachet in 1 Litre of clean water.",
      "warnings": [
        "Use within 24 hours",
        "Do not mix with milk"
      ]
    },
    "or": {
      "name": "ଇଲେକ୍ଟ୍ରୋଲାଇଟ୍ ସଲ୍ୟୁସନ୍ Sachet 400mg",
      "genericName": "ଇଲେକ୍ଟ୍ରୋଲାଇଟ୍ ସଲ୍ୟୁସନ୍",
      "usage": "ଝାଡ଼ା କାରଣରୁ ହେଉଥିବା ଜଳଶୂନ୍ୟତାର ପ୍ରତିରୋଧ ଏବଂ ଚିକିତ୍ସା।",
      "dosage": "୧ ଲିଟର ସଫା ପାଣିରେ ୧ ପ୍ୟାକେଟ୍ ମିଶାନ୍ତୁ।",
      "warnings": [
        "୨୪ ଘଣ୍ଟା ମଧ୍ୟରେ ବ୍ୟବହାର କରନ୍ତୁ।",
        "କ୍ଷୀର ସହିତ ମିଶାନ୍ତୁ ନାହିଁ।"
      ]
    },
    "janAushadhiAlt": "Jan Aushadhi ORS 400mg",
    "priceCompare": {
      "branded": "₹299 / pack",
      "generic": "₹13 / pack",
      "savings": "95%"
    }
  },
  {
    "id": "med-85",
    "en": {
      "name": "Albendazole Tablet 500mg (Stomach Infection) - VillageCure",
      "genericName": "Albendazole",
      "usage": "Treatment of parasitic worm infections (deworming).",
      "dosage": "400mg as a single dose.",
      "warnings": [
        "Chew tablet completely before swallowing",
        "Do not use during pregnancy"
      ]
    },
    "or": {
      "name": "ଆଲବେଣ୍ଡାଜୋଲ୍ Tablet 500mg",
      "genericName": "ଆଲବେଣ୍ଡାଜୋଲ୍",
      "usage": "ପରଜୀବୀ କୃମି ସଂକ୍ରମଣର ଚିକିତ୍ସା (କୃମି ନାଶକ)।",
      "dosage": "ଗୋଟିଏ ମାତ୍ରା ଭାବରେ ୪୦୦ ମି.ଗ୍ରା.।",
      "warnings": [
        "ଗିଳିବା ପୂର୍ବରୁ ବଟିକାକୁ ସମ୍ପୂର୍ଣ୍ଣ ରୂପେ ଚୋବାନ୍ତୁ।",
        "ଗର୍ଭାବସ୍ଥାରେ ବ୍ୟବହାର କରନ୍ତୁ ନାହିଁ।"
      ]
    },
    "janAushadhiAlt": "Jan Aushadhi Albendazole 500mg",
    "priceCompare": {
      "branded": "₹302 / pack",
      "generic": "₹14 / pack",
      "savings": "95%"
    }
  },
  {
    "id": "med-86",
    "en": {
      "name": "Azithromycin Capsule 100mg (Skin Care) - HealthPlus",
      "genericName": "Azithromycin",
      "usage": "Bacterial infections of the respiratory tract, throat, skin, and ear.",
      "dosage": "500mg once daily for 3 days.",
      "warnings": [
        "Take 1 hour before or 2 hours after meals",
        "Complete full course"
      ]
    },
    "or": {
      "name": "ଆଜିଥ୍ରୋମାଇସିନ୍ Capsule 100mg",
      "genericName": "ଆଜିଥ୍ରୋମାଇସିନ୍",
      "usage": "ଶ୍ୱାସକ୍ରିୟା, ଗଳା, ଚର୍ମ ଏବଂ କାନର ବ୍ୟାକ୍ଟେରିଆ ସଂକ୍ରମଣ।",
      "dosage": "ଦିନକୁ ଥରେ ୫୦୦ ମି.ଗ୍ରା. ୩ ଦିନ ପାଇଁ।",
      "warnings": [
        "ଖାଇବାର ୧ ଘଣ୍ଟା ପୂର୍ବରୁ କିମ୍ବା ୨ ଘଣ୍ଟା ପରେ ଖାଆନ୍ତୁ।",
        "ସମ୍ପୂର୍ଣ୍ଣ କୋର୍ସ ଶେଷ କରନ୍ତୁ।"
      ]
    },
    "janAushadhiAlt": "Jan Aushadhi Azithromycin 100mg",
    "priceCompare": {
      "branded": "₹305 / pack",
      "generic": "₹10 / pack",
      "savings": "96%"
    }
  },
  {
    "id": "med-87",
    "en": {
      "name": "Cetirizine Syrup 200mg (Cold & Cough) - JanSeva",
      "genericName": "Cetirizine Hydrochloride",
      "usage": "Relief of allergy symptoms like runny nose, sneezing, and watery eyes.",
      "dosage": "10mg once daily.",
      "warnings": [
        "May cause drowsiness",
        "Avoid alcohol"
      ]
    },
    "or": {
      "name": "ସେଟିରିଜିନ୍ ହାଇଡ୍ରୋକ୍ଲୋରାଇଡ୍ Syrup 200mg",
      "genericName": "ସେଟିରିଜିନ୍ ହାଇଡ୍ରୋକ୍ଲୋରାଇଡ୍",
      "usage": "ଆଲର୍ଜି ଲକ୍ଷଣ ଯେପରିକି ନାକରୁ ପାଣି ବୋହିବା, ଛିଙ୍କିବା ଏବଂ ଆଖିରୁ ପାଣି ବୋହିବାରୁ ଉପଶମ।",
      "dosage": "ଦିନକୁ ଥରେ ୧୦ ମି.ଗ୍ରା.।",
      "warnings": [
        "ନିଦ ଆସିପାରେ।",
        "ମଦ୍ୟପାନ କରନ୍ତୁ ନାହିଁ।"
      ]
    },
    "janAushadhiAlt": "Jan Aushadhi Cetirizine 200mg",
    "priceCompare": {
      "branded": "₹308 / pack",
      "generic": "₹11 / pack",
      "savings": "96%"
    }
  },
  {
    "id": "med-88",
    "en": {
      "name": "Metronidazole Suspension 300mg (Worm Treatment) - GraminCare",
      "genericName": "Metronidazole",
      "usage": "Treatment of certain bacterial and parasitic infections (amoebiasis).",
      "dosage": "400mg three times a day for 5-7 days.",
      "warnings": [
        "Strictly avoid alcohol during and 48 hours after treatment",
        "Take with food"
      ]
    },
    "or": {
      "name": "ମେଟ୍ରୋନିଡାଜୋଲ୍ Suspension 300mg",
      "genericName": "ମେଟ୍ରୋନିଡାଜୋଲ୍",
      "usage": "କେତେକ ବ୍ୟାକ୍ଟେରିଆ ଏବଂ ପରଜୀବୀ ସଂକ୍ରମଣର ଚିକିତ୍ସା (ଆମୋଏବିଆସିସ୍)।",
      "dosage": "୫-୭ ଦିନ ପାଇଁ ଦିନକୁ ତିନିଥର ୪୦୦ ମି.ଗ୍ରା.।",
      "warnings": [
        "ଚିକିତ୍ସା ସମୟରେ ଏବଂ ୪୮ ଘଣ୍ଟା ପରେ ମଦ୍ୟପାନ ସମ୍ପୂର୍ଣ୍ଣ ନିଷେଧ।",
        "ଖାଦ୍ୟ ସହିତ ଖାଆନ୍ତୁ।"
      ]
    },
    "janAushadhiAlt": "Jan Aushadhi Metronidazole 300mg",
    "priceCompare": {
      "branded": "₹311 / pack",
      "generic": "₹12 / pack",
      "savings": "96%"
    }
  },
  {
    "id": "med-89",
    "en": {
      "name": "Ciprofloxacin Ointment 400mg (Rehydration) - SwasthyaFirst",
      "genericName": "Ciprofloxacin",
      "usage": "Broad-spectrum antibiotic for urinary tract infections, typhoid fever.",
      "dosage": "500mg twice daily.",
      "warnings": [
        "Do not take with dairy products",
        "May cause joint issues"
      ]
    },
    "or": {
      "name": "ସିପ୍ରୋଫ୍ଲୋକ୍ସାସିନ୍ Ointment 400mg",
      "genericName": "ସିପ୍ରୋଫ୍ଲୋକ୍ସାସିନ୍",
      "usage": "ପରିସ୍ରା ନଳୀ ସଂକ୍ରମଣ, ଟାଇଫଏଡ୍ ଜ୍ୱର ପାଇଁ ବ୍ୟାପକ ଆଣ୍ଟିବାୟୋଟିକ୍।",
      "dosage": "ଦିନକୁ ଦୁଇଥର ୫୦୦ ମି.ଗ୍ରା.।",
      "warnings": [
        "ଦୁଗ୍ଧଜାତ ଦ୍ରବ୍ୟ ସହିତ ଖାଆନ୍ତୁ ନାହିଁ।",
        "ଗଣ୍ଠି ସମସ୍ୟା ହୋଇପାରେ।"
      ]
    },
    "janAushadhiAlt": "Jan Aushadhi Ciprofloxacin 400mg",
    "priceCompare": {
      "branded": "₹314 / pack",
      "generic": "₹13 / pack",
      "savings": "95%"
    }
  },
  {
    "id": "med-90",
    "en": {
      "name": "Pantoprazole Drop 500mg (Acidity Relief) - ApexOdisha",
      "genericName": "Pantoprazole Sodium",
      "usage": "Reduces stomach acid, treats acidity, GERD, and ulcers.",
      "dosage": "40mg once daily before breakfast.",
      "warnings": [
        "Swallow whole, do not crush",
        "Long term use may cause B12 deficiency"
      ]
    },
    "or": {
      "name": "ପାଣ୍ଟୋପ୍ରାଜୋଲ୍ ସୋଡିୟମ୍ Drop 500mg",
      "genericName": "ପାଣ୍ଟୋପ୍ରାଜୋଲ୍ ସୋଡିୟମ୍",
      "usage": "ପେଟରେ ଏସିଡ୍ କମାଏ, ଏସିଡିଟି, ଗ୍ୟାଷ୍ଟ୍ରିକ୍ ଏବଂ ଅଲସରର ଚିକିତ୍ସା କରେ।",
      "dosage": "ଜଳଖିଆ ପୂର୍ବରୁ ଦିନକୁ ଥରେ ୪୦ ମି.ଗ୍ରା.।",
      "warnings": [
        "ଗୋଟା ଗିଳି ଦିଅନ୍ତୁ, ଗୁଣ୍ଡ କରନ୍ତୁ ନାହିଁ।",
        "ଦୀର୍ଘକାଳୀନ ବ୍ୟବହାର ଦ୍ୱାରା ଭିଟାମିନ୍ B12 ଅଭାବ ହୋଇପାରେ।"
      ]
    },
    "janAushadhiAlt": "Jan Aushadhi Pantoprazole 500mg",
    "priceCompare": {
      "branded": "₹317 / pack",
      "generic": "₹14 / pack",
      "savings": "95%"
    }
  },
  {
    "id": "med-91",
    "en": {
      "name": "Ondansetron Sachet 100mg (Dengue Relief) - OdishaCare",
      "genericName": "Ondansetron",
      "usage": "Prevention of nausea and vomiting.",
      "dosage": "4mg or 8mg as needed.",
      "warnings": [
        "May cause headache",
        "Use carefully during pregnancy"
      ]
    },
    "or": {
      "name": "ଓଣ୍ଡାନସେଟ୍ରନ୍ Sachet 100mg",
      "genericName": "ଓଣ୍ଡାନସେଟ୍ରନ୍",
      "usage": "ବାନ୍ତି ଏବଂ ବାନ୍ତି ଲାଗିବାରୁ ପ୍ରତିରୋଧ।",
      "dosage": "ଆବଶ୍ୟକ ଅନୁଯାୟୀ ୪ ମି.ଗ୍ରା. କିମ୍ବା ୮ ମି.ଗ୍ରା.।",
      "warnings": [
        "ମୁଣ୍ଡବିନ୍ଧା ହୋଇପାରେ।",
        "ଗର୍ଭାବସ୍ଥାରେ ସତର୍କତାର ସହ ବ୍ୟବହାର କରନ୍ତୁ।"
      ]
    },
    "janAushadhiAlt": "Jan Aushadhi Ondansetron 100mg",
    "priceCompare": {
      "branded": "₹320 / pack",
      "generic": "₹10 / pack",
      "savings": "96%"
    }
  },
  {
    "id": "med-92",
    "en": {
      "name": "Doxycycline Tablet 200mg (Malaria Cure) - UtkalMeds",
      "genericName": "Doxycycline Hyclate",
      "usage": "Treatment of acne, cholera, scrub typhus, and malaria prophylaxis.",
      "dosage": "100mg twice daily.",
      "warnings": [
        "Avoid sun exposure (photosensitivity)",
        "Do not take with antacids"
      ]
    },
    "or": {
      "name": "ଡକ୍ସିସାଇକ୍ଲିନ୍ ହାଇକ୍ଲେଟ୍ Tablet 200mg",
      "genericName": "ଡକ୍ସିସାଇକ୍ଲିନ୍ ହାଇକ୍ଲେଟ୍",
      "usage": "ବ୍ରଣ, କଲେରା, ସ୍କ୍ରବ୍ ଟାଇଫସ୍ ଏବଂ ମ୍ୟାଲେରିଆ ପ୍ରତିରୋଧର ଚିକିତ୍ସା।",
      "dosage": "ଦିନକୁ ଦୁଇଥର ୧୦୦ ମି.ଗ୍ରା.।",
      "warnings": [
        "ସୂର୍ଯ୍ୟ କିରଣରୁ ଦୂରେଇ ରୁହନ୍ତୁ।",
        "ଏଣ୍ଟାସିଡ୍ ସହିତ ଖାଆନ୍ତୁ ନାହିଁ।"
      ]
    },
    "janAushadhiAlt": "Jan Aushadhi Doxycycline 200mg",
    "priceCompare": {
      "branded": "₹323 / pack",
      "generic": "₹11 / pack",
      "savings": "96%"
    }
  },
  {
    "id": "med-93",
    "en": {
      "name": "Chloroquine Capsule 300mg (Typhoid Care) - KalingaPharma",
      "genericName": "Chloroquine Phosphate",
      "usage": "Treatment and prevention of malaria.",
      "dosage": "As prescribed based on body weight.",
      "warnings": [
        "Take with food",
        "May cause vision changes"
      ]
    },
    "or": {
      "name": "କ୍ଲୋରୋକୁଇନ୍ ଫସଫେଟ୍ Capsule 300mg",
      "genericName": "କ୍ଲୋରୋକୁଇନ୍ ଫସଫେଟ୍",
      "usage": "ମ୍ୟାଲେରିଆର ଚିକିତ୍ସା ଏବଂ ପ୍ରତିରୋଧ।",
      "dosage": "ଶରୀରର ଓଜନ ଉପରେ ଆଧାର କରି ଡାକ୍ତରଙ୍କ ପରାମର୍ଶ ଅନୁଯାୟୀ।",
      "warnings": [
        "ଖାଦ୍ୟ ସହିତ ଖାଆନ୍ତୁ।",
        "ଦୃଷ୍ଟିଶକ୍ତିରେ ପରିବର୍ତ୍ତନ ଆସିପାରେ।"
      ]
    },
    "janAushadhiAlt": "Jan Aushadhi Chloroquine 300mg",
    "priceCompare": {
      "branded": "₹326 / pack",
      "generic": "₹12 / pack",
      "savings": "96%"
    }
  },
  {
    "id": "med-94",
    "en": {
      "name": "Artesunate Syrup 400mg (Fever & Pain) - SathiMed",
      "genericName": "Artesunate",
      "usage": "Treatment of severe malaria.",
      "dosage": "Given as injection or as prescribed.",
      "warnings": [
        "Requires medical supervision",
        "Usually given with other antimalarials"
      ]
    },
    "or": {
      "name": "ଆର୍ଟେସୁନେଟ୍ Syrup 400mg",
      "genericName": "ଆର୍ଟେସୁନେଟ୍",
      "usage": "ଗୁରୁତର ମ୍ୟାଲେରିଆର ଚିକିତ୍ସା।",
      "dosage": "ଇଞ୍ଜେକ୍ସନ୍ ଭାବରେ କିମ୍ବା ପରାମର୍ଶ ଅନୁଯାୟୀ ଦିଆଯାଏ।",
      "warnings": [
        "ଡାକ୍ତରୀ ତଦାରଖ ଆବଶ୍ୟକ।",
        "ସାଧାରଣତଃ ଅନ୍ୟ ମ୍ୟାଲେରିଆ ଔଷଧ ସହିତ ଦିଆଯାଏ।"
      ]
    },
    "janAushadhiAlt": "Jan Aushadhi Artesunate 400mg",
    "priceCompare": {
      "branded": "₹329 / pack",
      "generic": "₹13 / pack",
      "savings": "96%"
    }
  },
  {
    "id": "med-95",
    "en": {
      "name": "Povidone Iodine Suspension 500mg (Stomach Infection) - VillageCure",
      "genericName": "Povidone Iodine Ointment",
      "usage": "Topical antiseptic for minor cuts, wounds, and burns.",
      "dosage": "Apply externally to affected area 1-3 times daily.",
      "warnings": [
        "For external use only",
        "Avoid contact with eyes"
      ]
    },
    "or": {
      "name": "ପୋଭିଡୋନ୍ ଆୟୋଡିନ୍ ମଲମ Suspension 500mg",
      "genericName": "ପୋଭିଡୋନ୍ ଆୟୋଡିନ୍ ମଲମ",
      "usage": "ଛୋଟ କ୍ଷତ, କଟିବା ଏବଂ ପୋଡ଼ିବା ପାଇଁ ଆଣ୍ଟିସେପ୍ଟିକ୍ ମଲମ।",
      "dosage": "ପ୍ରଭାବିତ ସ୍ଥାନରେ ଦିନକୁ ୧-୩ ଥର ଲଗାନ୍ତୁ।",
      "warnings": [
        "କେବଳ ବାହ୍ୟ ବ୍ୟବହାର ପାଇଁ।",
        "ଆଖିରେ ଲଗାନ୍ତୁ ନାହିଁ।"
      ]
    },
    "janAushadhiAlt": "Jan Aushadhi Povidone Iodine 500mg",
    "priceCompare": {
      "branded": "₹332 / pack",
      "generic": "₹14 / pack",
      "savings": "95%"
    }
  },
  {
    "id": "med-96",
    "en": {
      "name": "Diclofenac Ointment 100mg (Skin Care) - HealthPlus",
      "genericName": "Diclofenac Gel",
      "usage": "Local relief from muscle pain, joint pain, and sprains.",
      "dosage": "Apply a small amount to the affected area 3-4 times a day.",
      "warnings": [
        "Wash hands after application",
        "Do not apply on broken skin"
      ]
    },
    "or": {
      "name": "ଡାଇକ୍ଲୋଫେନାକ୍ ଜେଲ୍ Ointment 100mg",
      "genericName": "ଡାଇକ୍ଲୋଫେନାକ୍ ଜେଲ୍",
      "usage": "ମାଂସପେଶୀ ଯନ୍ତ୍ରଣା, ଗଣ୍ଠି ବିନ୍ଧା ଏବଂ ମୋଚକାରୁ ସ୍ଥାନୀୟ ଉପଶମ।",
      "dosage": "ପ୍ରଭାବିତ ସ୍ଥାନରେ ଦିନକୁ ୩-୪ ଥର ଅଳ୍ପ ପରିମାଣରେ ଲଗାନ୍ତୁ।",
      "warnings": [
        "ଲଗାଇବା ପରେ ହାତ ଧୋଇ ଦିଅନ୍ତୁ।",
        "କଟିଥିବା ଚର୍ମରେ ଲଗାନ୍ତୁ ନାହିଁ।"
      ]
    },
    "janAushadhiAlt": "Jan Aushadhi Diclofenac 100mg",
    "priceCompare": {
      "branded": "₹335 / pack",
      "generic": "₹10 / pack",
      "savings": "97%"
    }
  },
  {
    "id": "med-97",
    "en": {
      "name": "Paracetamol Drop 200mg (Cold & Cough) - JanSeva",
      "genericName": "Paracetamol / Acetaminophen",
      "usage": "Fever reduction & mild-to-moderate pain relief.",
      "dosage": "500-650mg every 6-8 hours for adults.",
      "warnings": [
        "Do not exceed maximum daily dosage to prevent liver toxicity",
        "Avoid alcohol consumption while on medication"
      ]
    },
    "or": {
      "name": "ପାରାସିଟାମଲ୍ / ଏସିଟାମିନୋଫେନ୍ Drop 200mg",
      "genericName": "ପାରାସିଟାମଲ୍ / ଏସିଟାମିନୋଫେନ୍",
      "usage": "ଜ୍ୱର ଏବଂ ସାଧାରଣ ଯନ୍ତ୍ରଣା (ମୁଣ୍ଡବିନ୍ଧା, ଦେହବିନ୍ଧା) ରୁ ଉପଶମ।",
      "dosage": "ପ୍ରାପ୍ତବୟସ୍କଙ୍କ ପାଇଁ ୫୦୦-୬୫୦ ମି.ଗ୍ରା. ପ୍ରତି ୬-୮ ଘଣ୍ଟାରେ।",
      "warnings": [
        "ଯକୃତ ସମସ୍ୟାକୁ ରୋକିବା ପାଇଁ ଦୈନିକ ମାତ୍ରା ଅତିକ୍ରମ କରନ୍ତୁ ନାହିଁ।",
        "ଔଷଧ ଖାଉଥିବା ସମୟରେ ମଦ୍ୟପାନ କରନ୍ତୁ ନାହିଁ।"
      ]
    },
    "janAushadhiAlt": "Jan Aushadhi Paracetamol 200mg",
    "priceCompare": {
      "branded": "₹338 / pack",
      "generic": "₹11 / pack",
      "savings": "96%"
    }
  },
  {
    "id": "med-98",
    "en": {
      "name": "Ibuprofen Sachet 300mg (Worm Treatment) - GraminCare",
      "genericName": "Ibuprofen",
      "usage": "Pain relief, inflammation reduction, and fever reduction.",
      "dosage": "400mg every 4-6 hours.",
      "warnings": [
        "Take with food to avoid stomach upset",
        "Do not use if pregnant"
      ]
    },
    "or": {
      "name": "ଆଇବୁପ୍ରୋଫେନ୍ Sachet 300mg",
      "genericName": "ଆଇବୁପ୍ରୋଫେନ୍",
      "usage": "ଯନ୍ତ୍ରଣା ଉପଶମ, ଫୁଲା କମାଇବା ଏବଂ ଜ୍ୱର କମାଇବା।",
      "dosage": "ପ୍ରାପ୍ତବୟସ୍କଙ୍କ ପାଇଁ ୪୦୦ ମି.ଗ୍ରା. ପ୍ରତି ୪-୬ ଘଣ୍ଟାରେ।",
      "warnings": [
        "ପେଟ ସମସ୍ୟା ଏଡ଼ାଇବା ପାଇଁ ଖାଦ୍ୟ ସହିତ ଖାଆନ୍ତୁ।",
        "ଗର୍ଭବତୀ ଥିଲେ ବ୍ୟବହାର କରନ୍ତୁ ନାହିଁ।"
      ]
    },
    "janAushadhiAlt": "Jan Aushadhi Ibuprofen 300mg",
    "priceCompare": {
      "branded": "₹341 / pack",
      "generic": "₹12 / pack",
      "savings": "96%"
    }
  },
  {
    "id": "med-99",
    "en": {
      "name": "Amoxicillin Tablet 400mg (Rehydration) - SwasthyaFirst",
      "genericName": "Amoxicillin Trihydrate",
      "usage": "Bacterial infections such as pneumonia, bronchitis, and infections of the ears, nose, throat.",
      "dosage": "500mg every 8 hours or 875mg every 12 hours.",
      "warnings": [
        "Finish entire prescription",
        "May cause diarrhea"
      ]
    },
    "or": {
      "name": "ଆମୋକ୍ସିସିଲିନ୍ ଟ୍ରାଇହାଇଡ୍ରେଟ୍ Tablet 400mg",
      "genericName": "ଆମୋକ୍ସିସିଲିନ୍ ଟ୍ରାଇହାଇଡ୍ରେଟ୍",
      "usage": "ବ୍ୟାକ୍ଟେରିଆ ସଂକ୍ରମଣ ଯେପରିକି ନିମୋନିଆ, ବ୍ରୋଙ୍କାଇଟିସ୍ ଏବଂ କାନ, ନାକ, ଗଳା ସଂକ୍ରମଣ।",
      "dosage": "ପ୍ରତି ୮ ଘଣ୍ଟାରେ ୫୦୦ ମି.ଗ୍ରା. କିମ୍ବା ପ୍ରତି ୧୨ ଘଣ୍ଟାରେ ୮୭୫ ମି.ଗ୍ରା।",
      "warnings": [
        "ସମ୍ପୂର୍ଣ୍ଣ କୋର୍ସ ଶେଷ କରନ୍ତୁ।",
        "ତରଳ ଝାଡ଼ା ହୋଇପାରେ।"
      ]
    },
    "janAushadhiAlt": "Jan Aushadhi Amoxicillin 400mg",
    "priceCompare": {
      "branded": "₹344 / pack",
      "generic": "₹13 / pack",
      "savings": "96%"
    }
  },
  {
    "id": "med-100",
    "en": {
      "name": "ORS Capsule 500mg (Acidity Relief) - ApexOdisha",
      "genericName": "Electrolyte Solution",
      "usage": "Prevention and treatment of dehydration caused by diarrhea.",
      "dosage": "Dissolve 1 sachet in 1 Litre of clean water.",
      "warnings": [
        "Use within 24 hours",
        "Do not mix with milk"
      ]
    },
    "or": {
      "name": "ଇଲେକ୍ଟ୍ରୋଲାଇଟ୍ ସଲ୍ୟୁସନ୍ Capsule 500mg",
      "genericName": "ଇଲେକ୍ଟ୍ରୋଲାଇଟ୍ ସଲ୍ୟୁସନ୍",
      "usage": "ଝାଡ଼ା କାରଣରୁ ହେଉଥିବା ଜଳଶୂନ୍ୟତାର ପ୍ରତିରୋଧ ଏବଂ ଚିକିତ୍ସା।",
      "dosage": "୧ ଲିଟର ସଫା ପାଣିରେ ୧ ପ୍ୟାକେଟ୍ ମିଶାନ୍ତୁ।",
      "warnings": [
        "୨୪ ଘଣ୍ଟା ମଧ୍ୟରେ ବ୍ୟବହାର କରନ୍ତୁ।",
        "କ୍ଷୀର ସହିତ ମିଶାନ୍ତୁ ନାହିଁ।"
      ]
    },
    "janAushadhiAlt": "Jan Aushadhi ORS 500mg",
    "priceCompare": {
      "branded": "₹347 / pack",
      "generic": "₹14 / pack",
      "savings": "95%"
    }
  },
  {
    "id": "med-101",
    "en": {
      "name": "Albendazole Syrup 100mg (Dengue Relief) - OdishaCare",
      "genericName": "Albendazole",
      "usage": "Treatment of parasitic worm infections (deworming).",
      "dosage": "400mg as a single dose.",
      "warnings": [
        "Chew tablet completely before swallowing",
        "Do not use during pregnancy"
      ]
    },
    "or": {
      "name": "ଆଲବେଣ୍ଡାଜୋଲ୍ Syrup 100mg",
      "genericName": "ଆଲବେଣ୍ଡାଜୋଲ୍",
      "usage": "ପରଜୀବୀ କୃମି ସଂକ୍ରମଣର ଚିକିତ୍ସା (କୃମି ନାଶକ)।",
      "dosage": "ଗୋଟିଏ ମାତ୍ରା ଭାବରେ ୪୦୦ ମି.ଗ୍ରା.।",
      "warnings": [
        "ଗିଳିବା ପୂର୍ବରୁ ବଟିକାକୁ ସମ୍ପୂର୍ଣ୍ଣ ରୂପେ ଚୋବାନ୍ତୁ।",
        "ଗର୍ଭାବସ୍ଥାରେ ବ୍ୟବହାର କରନ୍ତୁ ନାହିଁ।"
      ]
    },
    "janAushadhiAlt": "Jan Aushadhi Albendazole 100mg",
    "priceCompare": {
      "branded": "₹350 / pack",
      "generic": "₹10 / pack",
      "savings": "97%"
    }
  },
  {
    "id": "med-102",
    "en": {
      "name": "Azithromycin Suspension 200mg (Malaria Cure) - UtkalMeds",
      "genericName": "Azithromycin",
      "usage": "Bacterial infections of the respiratory tract, throat, skin, and ear.",
      "dosage": "500mg once daily for 3 days.",
      "warnings": [
        "Take 1 hour before or 2 hours after meals",
        "Complete full course"
      ]
    },
    "or": {
      "name": "ଆଜିଥ୍ରୋମାଇସିନ୍ Suspension 200mg",
      "genericName": "ଆଜିଥ୍ରୋମାଇସିନ୍",
      "usage": "ଶ୍ୱାସକ୍ରିୟା, ଗଳା, ଚର୍ମ ଏବଂ କାନର ବ୍ୟାକ୍ଟେରିଆ ସଂକ୍ରମଣ।",
      "dosage": "ଦିନକୁ ଥରେ ୫୦୦ ମି.ଗ୍ରା. ୩ ଦିନ ପାଇଁ।",
      "warnings": [
        "ଖାଇବାର ୧ ଘଣ୍ଟା ପୂର୍ବରୁ କିମ୍ବା ୨ ଘଣ୍ଟା ପରେ ଖାଆନ୍ତୁ।",
        "ସମ୍ପୂର୍ଣ୍ଣ କୋର୍ସ ଶେଷ କରନ୍ତୁ।"
      ]
    },
    "janAushadhiAlt": "Jan Aushadhi Azithromycin 200mg",
    "priceCompare": {
      "branded": "₹353 / pack",
      "generic": "₹11 / pack",
      "savings": "96%"
    }
  },
  {
    "id": "med-103",
    "en": {
      "name": "Cetirizine Ointment 300mg (Typhoid Care) - KalingaPharma",
      "genericName": "Cetirizine Hydrochloride",
      "usage": "Relief of allergy symptoms like runny nose, sneezing, and watery eyes.",
      "dosage": "10mg once daily.",
      "warnings": [
        "May cause drowsiness",
        "Avoid alcohol"
      ]
    },
    "or": {
      "name": "ସେଟିରିଜିନ୍ ହାଇଡ୍ରୋକ୍ଲୋରାଇଡ୍ Ointment 300mg",
      "genericName": "ସେଟିରିଜିନ୍ ହାଇଡ୍ରୋକ୍ଲୋରାଇଡ୍",
      "usage": "ଆଲର୍ଜି ଲକ୍ଷଣ ଯେପରିକି ନାକରୁ ପାଣି ବୋହିବା, ଛିଙ୍କିବା ଏବଂ ଆଖିରୁ ପାଣି ବୋହିବାରୁ ଉପଶମ।",
      "dosage": "ଦିନକୁ ଥରେ ୧୦ ମି.ଗ୍ରା.।",
      "warnings": [
        "ନିଦ ଆସିପାରେ।",
        "ମଦ୍ୟପାନ କରନ୍ତୁ ନାହିଁ।"
      ]
    },
    "janAushadhiAlt": "Jan Aushadhi Cetirizine 300mg",
    "priceCompare": {
      "branded": "₹356 / pack",
      "generic": "₹12 / pack",
      "savings": "96%"
    }
  },
  {
    "id": "med-104",
    "en": {
      "name": "Metronidazole Drop 400mg (Fever & Pain) - SathiMed",
      "genericName": "Metronidazole",
      "usage": "Treatment of certain bacterial and parasitic infections (amoebiasis).",
      "dosage": "400mg three times a day for 5-7 days.",
      "warnings": [
        "Strictly avoid alcohol during and 48 hours after treatment",
        "Take with food"
      ]
    },
    "or": {
      "name": "ମେଟ୍ରୋନିଡାଜୋଲ୍ Drop 400mg",
      "genericName": "ମେଟ୍ରୋନିଡାଜୋଲ୍",
      "usage": "କେତେକ ବ୍ୟାକ୍ଟେରିଆ ଏବଂ ପରଜୀବୀ ସଂକ୍ରମଣର ଚିକିତ୍ସା (ଆମୋଏବିଆସିସ୍)।",
      "dosage": "୫-୭ ଦିନ ପାଇଁ ଦିନକୁ ତିନିଥର ୪୦୦ ମି.ଗ୍ରା.।",
      "warnings": [
        "ଚିକିତ୍ସା ସମୟରେ ଏବଂ ୪୮ ଘଣ୍ଟା ପରେ ମଦ୍ୟପାନ ସମ୍ପୂର୍ଣ୍ଣ ନିଷେଧ।",
        "ଖାଦ୍ୟ ସହିତ ଖାଆନ୍ତୁ।"
      ]
    },
    "janAushadhiAlt": "Jan Aushadhi Metronidazole 400mg",
    "priceCompare": {
      "branded": "₹359 / pack",
      "generic": "₹13 / pack",
      "savings": "96%"
    }
  },
  {
    "id": "med-105",
    "en": {
      "name": "Ciprofloxacin Sachet 500mg (Stomach Infection) - VillageCure",
      "genericName": "Ciprofloxacin",
      "usage": "Broad-spectrum antibiotic for urinary tract infections, typhoid fever.",
      "dosage": "500mg twice daily.",
      "warnings": [
        "Do not take with dairy products",
        "May cause joint issues"
      ]
    },
    "or": {
      "name": "ସିପ୍ରୋଫ୍ଲୋକ୍ସାସିନ୍ Sachet 500mg",
      "genericName": "ସିପ୍ରୋଫ୍ଲୋକ୍ସାସିନ୍",
      "usage": "ପରିସ୍ରା ନଳୀ ସଂକ୍ରମଣ, ଟାଇଫଏଡ୍ ଜ୍ୱର ପାଇଁ ବ୍ୟାପକ ଆଣ୍ଟିବାୟୋଟିକ୍।",
      "dosage": "ଦିନକୁ ଦୁଇଥର ୫୦୦ ମି.ଗ୍ରା.।",
      "warnings": [
        "ଦୁଗ୍ଧଜାତ ଦ୍ରବ୍ୟ ସହିତ ଖାଆନ୍ତୁ ନାହିଁ।",
        "ଗଣ୍ଠି ସମସ୍ୟା ହୋଇପାରେ।"
      ]
    },
    "janAushadhiAlt": "Jan Aushadhi Ciprofloxacin 500mg",
    "priceCompare": {
      "branded": "₹362 / pack",
      "generic": "₹14 / pack",
      "savings": "96%"
    }
  },
  {
    "id": "med-106",
    "en": {
      "name": "Pantoprazole Tablet 100mg (Skin Care) - HealthPlus",
      "genericName": "Pantoprazole Sodium",
      "usage": "Reduces stomach acid, treats acidity, GERD, and ulcers.",
      "dosage": "40mg once daily before breakfast.",
      "warnings": [
        "Swallow whole, do not crush",
        "Long term use may cause B12 deficiency"
      ]
    },
    "or": {
      "name": "ପାଣ୍ଟୋପ୍ରାଜୋଲ୍ ସୋଡିୟମ୍ Tablet 100mg",
      "genericName": "ପାଣ୍ଟୋପ୍ରାଜୋଲ୍ ସୋଡିୟମ୍",
      "usage": "ପେଟରେ ଏସିଡ୍ କମାଏ, ଏସିଡିଟି, ଗ୍ୟାଷ୍ଟ୍ରିକ୍ ଏବଂ ଅଲସରର ଚିକିତ୍ସା କରେ।",
      "dosage": "ଜଳଖିଆ ପୂର୍ବରୁ ଦିନକୁ ଥରେ ୪୦ ମି.ଗ୍ରା.।",
      "warnings": [
        "ଗୋଟା ଗିଳି ଦିଅନ୍ତୁ, ଗୁଣ୍ଡ କରନ୍ତୁ ନାହିଁ।",
        "ଦୀର୍ଘକାଳୀନ ବ୍ୟବହାର ଦ୍ୱାରା ଭିଟାମିନ୍ B12 ଅଭାବ ହୋଇପାରେ।"
      ]
    },
    "janAushadhiAlt": "Jan Aushadhi Pantoprazole 100mg",
    "priceCompare": {
      "branded": "₹365 / pack",
      "generic": "₹10 / pack",
      "savings": "97%"
    }
  },
  {
    "id": "med-107",
    "en": {
      "name": "Ondansetron Capsule 200mg (Cold & Cough) - JanSeva",
      "genericName": "Ondansetron",
      "usage": "Prevention of nausea and vomiting.",
      "dosage": "4mg or 8mg as needed.",
      "warnings": [
        "May cause headache",
        "Use carefully during pregnancy"
      ]
    },
    "or": {
      "name": "ଓଣ୍ଡାନସେଟ୍ରନ୍ Capsule 200mg",
      "genericName": "ଓଣ୍ଡାନସେଟ୍ରନ୍",
      "usage": "ବାନ୍ତି ଏବଂ ବାନ୍ତି ଲାଗିବାରୁ ପ୍ରତିରୋଧ।",
      "dosage": "ଆବଶ୍ୟକ ଅନୁଯାୟୀ ୪ ମି.ଗ୍ରା. କିମ୍ବା ୮ ମି.ଗ୍ରା.।",
      "warnings": [
        "ମୁଣ୍ଡବିନ୍ଧା ହୋଇପାରେ।",
        "ଗର୍ଭାବସ୍ଥାରେ ସତର୍କତାର ସହ ବ୍ୟବହାର କରନ୍ତୁ।"
      ]
    },
    "janAushadhiAlt": "Jan Aushadhi Ondansetron 200mg",
    "priceCompare": {
      "branded": "₹368 / pack",
      "generic": "₹11 / pack",
      "savings": "97%"
    }
  },
  {
    "id": "med-108",
    "en": {
      "name": "Doxycycline Syrup 300mg (Worm Treatment) - GraminCare",
      "genericName": "Doxycycline Hyclate",
      "usage": "Treatment of acne, cholera, scrub typhus, and malaria prophylaxis.",
      "dosage": "100mg twice daily.",
      "warnings": [
        "Avoid sun exposure (photosensitivity)",
        "Do not take with antacids"
      ]
    },
    "or": {
      "name": "ଡକ୍ସିସାଇକ୍ଲିନ୍ ହାଇକ୍ଲେଟ୍ Syrup 300mg",
      "genericName": "ଡକ୍ସିସାଇକ୍ଲିନ୍ ହାଇକ୍ଲେଟ୍",
      "usage": "ବ୍ରଣ, କଲେରା, ସ୍କ୍ରବ୍ ଟାଇଫସ୍ ଏବଂ ମ୍ୟାଲେରିଆ ପ୍ରତିରୋଧର ଚିକିତ୍ସା।",
      "dosage": "ଦିନକୁ ଦୁଇଥର ୧୦୦ ମି.ଗ୍ରା.।",
      "warnings": [
        "ସୂର୍ଯ୍ୟ କିରଣରୁ ଦୂରେଇ ରୁହନ୍ତୁ।",
        "ଏଣ୍ଟାସିଡ୍ ସହିତ ଖାଆନ୍ତୁ ନାହିଁ।"
      ]
    },
    "janAushadhiAlt": "Jan Aushadhi Doxycycline 300mg",
    "priceCompare": {
      "branded": "₹371 / pack",
      "generic": "₹12 / pack",
      "savings": "96%"
    }
  },
  {
    "id": "med-109",
    "en": {
      "name": "Chloroquine Suspension 400mg (Rehydration) - SwasthyaFirst",
      "genericName": "Chloroquine Phosphate",
      "usage": "Treatment and prevention of malaria.",
      "dosage": "As prescribed based on body weight.",
      "warnings": [
        "Take with food",
        "May cause vision changes"
      ]
    },
    "or": {
      "name": "କ୍ଲୋରୋକୁଇନ୍ ଫସଫେଟ୍ Suspension 400mg",
      "genericName": "କ୍ଲୋରୋକୁଇନ୍ ଫସଫେଟ୍",
      "usage": "ମ୍ୟାଲେରିଆର ଚିକିତ୍ସା ଏବଂ ପ୍ରତିରୋଧ।",
      "dosage": "ଶରୀରର ଓଜନ ଉପରେ ଆଧାର କରି ଡାକ୍ତରଙ୍କ ପରାମର୍ଶ ଅନୁଯାୟୀ।",
      "warnings": [
        "ଖାଦ୍ୟ ସହିତ ଖାଆନ୍ତୁ।",
        "ଦୃଷ୍ଟିଶକ୍ତିରେ ପରିବର୍ତ୍ତନ ଆସିପାରେ।"
      ]
    },
    "janAushadhiAlt": "Jan Aushadhi Chloroquine 400mg",
    "priceCompare": {
      "branded": "₹374 / pack",
      "generic": "₹13 / pack",
      "savings": "96%"
    }
  },
  {
    "id": "med-110",
    "en": {
      "name": "Artesunate Ointment 500mg (Acidity Relief) - ApexOdisha",
      "genericName": "Artesunate",
      "usage": "Treatment of severe malaria.",
      "dosage": "Given as injection or as prescribed.",
      "warnings": [
        "Requires medical supervision",
        "Usually given with other antimalarials"
      ]
    },
    "or": {
      "name": "ଆର୍ଟେସୁନେଟ୍ Ointment 500mg",
      "genericName": "ଆର୍ଟେସୁନେଟ୍",
      "usage": "ଗୁରୁତର ମ୍ୟାଲେରିଆର ଚିକିତ୍ସା।",
      "dosage": "ଇଞ୍ଜେକ୍ସନ୍ ଭାବରେ କିମ୍ବା ପରାମର୍ଶ ଅନୁଯାୟୀ ଦିଆଯାଏ।",
      "warnings": [
        "ଡାକ୍ତରୀ ତଦାରଖ ଆବଶ୍ୟକ।",
        "ସାଧାରଣତଃ ଅନ୍ୟ ମ୍ୟାଲେରିଆ ଔଷଧ ସହିତ ଦିଆଯାଏ।"
      ]
    },
    "janAushadhiAlt": "Jan Aushadhi Artesunate 500mg",
    "priceCompare": {
      "branded": "₹377 / pack",
      "generic": "₹14 / pack",
      "savings": "96%"
    }
  },
  {
    "id": "med-111",
    "en": {
      "name": "Povidone Iodine Drop 100mg (Dengue Relief) - OdishaCare",
      "genericName": "Povidone Iodine Ointment",
      "usage": "Topical antiseptic for minor cuts, wounds, and burns.",
      "dosage": "Apply externally to affected area 1-3 times daily.",
      "warnings": [
        "For external use only",
        "Avoid contact with eyes"
      ]
    },
    "or": {
      "name": "ପୋଭିଡୋନ୍ ଆୟୋଡିନ୍ ମଲମ Drop 100mg",
      "genericName": "ପୋଭିଡୋନ୍ ଆୟୋଡିନ୍ ମଲମ",
      "usage": "ଛୋଟ କ୍ଷତ, କଟିବା ଏବଂ ପୋଡ଼ିବା ପାଇଁ ଆଣ୍ଟିସେପ୍ଟିକ୍ ମଲମ।",
      "dosage": "ପ୍ରଭାବିତ ସ୍ଥାନରେ ଦିନକୁ ୧-୩ ଥର ଲଗାନ୍ତୁ।",
      "warnings": [
        "କେବଳ ବାହ୍ୟ ବ୍ୟବହାର ପାଇଁ।",
        "ଆଖିରେ ଲଗାନ୍ତୁ ନାହିଁ।"
      ]
    },
    "janAushadhiAlt": "Jan Aushadhi Povidone Iodine 100mg",
    "priceCompare": {
      "branded": "₹380 / pack",
      "generic": "₹10 / pack",
      "savings": "97%"
    }
  },
  {
    "id": "med-112",
    "en": {
      "name": "Diclofenac Sachet 200mg (Malaria Cure) - UtkalMeds",
      "genericName": "Diclofenac Gel",
      "usage": "Local relief from muscle pain, joint pain, and sprains.",
      "dosage": "Apply a small amount to the affected area 3-4 times a day.",
      "warnings": [
        "Wash hands after application",
        "Do not apply on broken skin"
      ]
    },
    "or": {
      "name": "ଡାଇକ୍ଲୋଫେନାକ୍ ଜେଲ୍ Sachet 200mg",
      "genericName": "ଡାଇକ୍ଲୋଫେନାକ୍ ଜେଲ୍",
      "usage": "ମାଂସପେଶୀ ଯନ୍ତ୍ରଣା, ଗଣ୍ଠି ବିନ୍ଧା ଏବଂ ମୋଚକାରୁ ସ୍ଥାନୀୟ ଉପଶମ।",
      "dosage": "ପ୍ରଭାବିତ ସ୍ଥାନରେ ଦିନକୁ ୩-୪ ଥର ଅଳ୍ପ ପରିମାଣରେ ଲଗାନ୍ତୁ।",
      "warnings": [
        "ଲଗାଇବା ପରେ ହାତ ଧୋଇ ଦିଅନ୍ତୁ।",
        "କଟିଥିବା ଚର୍ମରେ ଲଗାନ୍ତୁ ନାହିଁ।"
      ]
    },
    "janAushadhiAlt": "Jan Aushadhi Diclofenac 200mg",
    "priceCompare": {
      "branded": "₹383 / pack",
      "generic": "₹11 / pack",
      "savings": "97%"
    }
  },
  {
    "id": "med-113",
    "en": {
      "name": "Paracetamol Tablet 300mg (Typhoid Care) - KalingaPharma",
      "genericName": "Paracetamol / Acetaminophen",
      "usage": "Fever reduction & mild-to-moderate pain relief.",
      "dosage": "500-650mg every 6-8 hours for adults.",
      "warnings": [
        "Do not exceed maximum daily dosage to prevent liver toxicity",
        "Avoid alcohol consumption while on medication"
      ]
    },
    "or": {
      "name": "ପାରାସିଟାମଲ୍ / ଏସିଟାମିନୋଫେନ୍ Tablet 300mg",
      "genericName": "ପାରାସିଟାମଲ୍ / ଏସିଟାମିନୋଫେନ୍",
      "usage": "ଜ୍ୱର ଏବଂ ସାଧାରଣ ଯନ୍ତ୍ରଣା (ମୁଣ୍ଡବିନ୍ଧା, ଦେହବିନ୍ଧା) ରୁ ଉପଶମ।",
      "dosage": "ପ୍ରାପ୍ତବୟସ୍କଙ୍କ ପାଇଁ ୫୦୦-୬୫୦ ମି.ଗ୍ରା. ପ୍ରତି ୬-୮ ଘଣ୍ଟାରେ।",
      "warnings": [
        "ଯକୃତ ସମସ୍ୟାକୁ ରୋକିବା ପାଇଁ ଦୈନିକ ମାତ୍ରା ଅତିକ୍ରମ କରନ୍ତୁ ନାହିଁ।",
        "ଔଷଧ ଖାଉଥିବା ସମୟରେ ମଦ୍ୟପାନ କରନ୍ତୁ ନାହିଁ।"
      ]
    },
    "janAushadhiAlt": "Jan Aushadhi Paracetamol 300mg",
    "priceCompare": {
      "branded": "₹386 / pack",
      "generic": "₹12 / pack",
      "savings": "96%"
    }
  },
  {
    "id": "med-114",
    "en": {
      "name": "Ibuprofen Capsule 400mg (Fever & Pain) - SathiMed",
      "genericName": "Ibuprofen",
      "usage": "Pain relief, inflammation reduction, and fever reduction.",
      "dosage": "400mg every 4-6 hours.",
      "warnings": [
        "Take with food to avoid stomach upset",
        "Do not use if pregnant"
      ]
    },
    "or": {
      "name": "ଆଇବୁପ୍ରୋଫେନ୍ Capsule 400mg",
      "genericName": "ଆଇବୁପ୍ରୋଫେନ୍",
      "usage": "ଯନ୍ତ୍ରଣା ଉପଶମ, ଫୁଲା କମାଇବା ଏବଂ ଜ୍ୱର କମାଇବା।",
      "dosage": "ପ୍ରାପ୍ତବୟସ୍କଙ୍କ ପାଇଁ ୪୦୦ ମି.ଗ୍ରା. ପ୍ରତି ୪-୬ ଘଣ୍ଟାରେ।",
      "warnings": [
        "ପେଟ ସମସ୍ୟା ଏଡ଼ାଇବା ପାଇଁ ଖାଦ୍ୟ ସହିତ ଖାଆନ୍ତୁ।",
        "ଗର୍ଭବତୀ ଥିଲେ ବ୍ୟବହାର କରନ୍ତୁ ନାହିଁ।"
      ]
    },
    "janAushadhiAlt": "Jan Aushadhi Ibuprofen 400mg",
    "priceCompare": {
      "branded": "₹389 / pack",
      "generic": "₹13 / pack",
      "savings": "96%"
    }
  },
  {
    "id": "med-115",
    "en": {
      "name": "Amoxicillin Syrup 500mg (Stomach Infection) - VillageCure",
      "genericName": "Amoxicillin Trihydrate",
      "usage": "Bacterial infections such as pneumonia, bronchitis, and infections of the ears, nose, throat.",
      "dosage": "500mg every 8 hours or 875mg every 12 hours.",
      "warnings": [
        "Finish entire prescription",
        "May cause diarrhea"
      ]
    },
    "or": {
      "name": "ଆମୋକ୍ସିସିଲିନ୍ ଟ୍ରାଇହାଇଡ୍ରେଟ୍ Syrup 500mg",
      "genericName": "ଆମୋକ୍ସିସିଲିନ୍ ଟ୍ରାଇହାଇଡ୍ରେଟ୍",
      "usage": "ବ୍ୟାକ୍ଟେରିଆ ସଂକ୍ରମଣ ଯେପରିକି ନିମୋନିଆ, ବ୍ରୋଙ୍କାଇଟିସ୍ ଏବଂ କାନ, ନାକ, ଗଳା ସଂକ୍ରମଣ।",
      "dosage": "ପ୍ରତି ୮ ଘଣ୍ଟାରେ ୫୦୦ ମି.ଗ୍ରା. କିମ୍ବା ପ୍ରତି ୧୨ ଘଣ୍ଟାରେ ୮୭୫ ମି.ଗ୍ରା।",
      "warnings": [
        "ସମ୍ପୂର୍ଣ୍ଣ କୋର୍ସ ଶେଷ କରନ୍ତୁ।",
        "ତରଳ ଝାଡ଼ା ହୋଇପାରେ।"
      ]
    },
    "janAushadhiAlt": "Jan Aushadhi Amoxicillin 500mg",
    "priceCompare": {
      "branded": "₹392 / pack",
      "generic": "₹14 / pack",
      "savings": "96%"
    }
  }
];
