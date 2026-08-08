// ============================================
// Swasthya Sathi AI — 100+ Bilingual Odisha Diseases Dataset
// ============================================

export interface LocalizedDiseaseContent {
  name: string;
  nativeName?: string;
  overview: string;
  symptoms: string[];
  causes: string[];
  treatments: string[];
  prevention: string[];
  dos: string[];
  donts: string[];
  whenToSeeDoctor?: string[];
  faqs: Array<{ question: string; answer: string }>;
}

export interface BilingualDisease {
  id: string;
  category: string;
  severity: 'Emergency' | 'High' | 'Moderate' | 'Mild';
  transmission?: string;
  en: LocalizedDiseaseContent;
  or: LocalizedDiseaseContent;
}

export const diseasesData: BilingualDisease[] = [
  {
    "id": "dengue-fever",
    "category": "Vector-Borne",
    "severity": "High",
    "transmission": "Aedes mosquito daytime bite",
    "en": {
      "name": "Dengue Fever & DHF",
      "overview": "Viral infection transmitted by Aedes mosquitoes, common in Odisha during monsoon (July-Nov).",
      "symptoms": [
        "Sudden high fever (104°F)",
        "Severe pain behind eyes",
        "Severe joint/muscle pain (Breakbone)",
        "Skin rash",
        "Bleeding gums/nose",
        "Extreme fatigue"
      ],
      "causes": [
        "Dengue virus (DENV-1 to 4)",
        "Daytime Aedes mosquito bites",
        "Stagnant clean water in flower pots, tires, coolers"
      ],
      "treatments": [
        "Oral rehydration solutions (ORS) and coconut water",
        "Paracetamol for fever (Avoid Aspirin/Brufen)",
        "Daily platelet count monitoring",
        "Hospital IV fluids if platelets drop below 50,000"
      ],
      "prevention": [
        "Clean standing water weekly (Friday Dry Day)",
        "Use mosquito repellent creams",
        "Wear full-sleeve clothing",
        "Sleep under insecticide-treated bed nets"
      ],
      "dos": [
        "Drink 3-4 liters of fluids daily",
        "Take Paracetamol only as advised",
        "Rest completely",
        "Test platelet count regularly"
      ],
      "donts": [
        "Do not take Aspirin, Brufen, or Ibuprofen",
        "Do not self-prescribe antibiotics",
        "Do not ignore bleeding signs",
        "Do not allow water stagnation"
      ],
      "whenToSeeDoctor": [
        "Platelet count below 50,000/uL",
        "Persistent vomiting",
        "Severe abdominal pain",
        "Bleeding from gums or nose",
        "Cold and clammy skin"
      ],
      "faqs": [
        {
          "question": "Is dengue contagious person to person?",
          "answer": "No, dengue only spreads through mosquito bites, not by direct human contact."
        },
        {
          "question": "Does papaya leaf extract cure dengue?",
          "answer": "While it may support platelet recovery, medical hydration and monitoring are essential proven treatments."
        }
      ]
    },
    "or": {
      "name": "ଡେଙ୍ଗୁ ଜ୍ୱର",
      "nativeName": "ଡେଙ୍ଗୁ ଜ୍ୱର",
      "overview": "ଏଡିସ୍ ମଶା କାମୁଡ଼ିବା ଦ୍ୱାରା ବ୍ୟାପୁଥିବା ଭୂତାଣୁଜନିତ ରୋଗ, ଯାହା ବର୍ଷା ଦିନେ ଓଡ଼ିଶାରେ ଅଧିକ ଦେଖାଯାଏ।",
      "symptoms": [
        "ପ୍ରବଳ ଜ୍ୱର (୧୦୪°F)",
        "ଆଖି ପଛପଟେ ଯନ୍ତ୍ରଣା",
        "ଗଣ୍ଠି ଏବଂ ମାଂସପେଶୀ ବିନ୍ଧା",
        "ଚର୍ମରେ ନାଲି ଦାଗ",
        "ନାକ ବା ମାଢ଼ିରୁ ରକ୍ତସ୍ରାବ",
        "ଅତ୍ୟଧିକ ଦୁର୍ବଳତା"
      ],
      "causes": [
        "ଡେଙ୍ଗୁ ଭୂତାଣୁ",
        "ଦିନବେଳା ଏଡିସ୍ ମଶା କାମୁଡ଼ିବା",
        "କୁଣ୍ଡ, ଟାୟାର ଓ କୁଲରରେ ଜମି ରହିଥିବା ପରିଷ୍କାର ପାଣି"
      ],
      "treatments": [
        "ପ୍ରଚୁର ORS ଓ ଡାବ ପାଣି ପିଅନ୍ତୁ",
        "ଜ୍ୱର ପାଇଁ ପାରାସିଟାମଲ୍ (ଆସ୍ପିରିନ୍ ଖାଆନ୍ତୁ ନାହିଁ)",
        "ପ୍ଲେଟଲେଟ୍ ସଂଖ୍ୟା ଯାଞ୍ଚ",
        "ପ୍ଲେଟଲେଟ୍ ୫୦,୦୦୦ ରୁ କମିଲେ ଡାକ୍ତରଖାନାରେ ଭର୍ତ୍ତି"
      ],
      "prevention": [
        "ପ୍ରତି ସପ୍ତାହରେ ଜମା ପାଣି ସଫା କରନ୍ତୁ (ଡ୍ରାଏ ଡେ)",
        "ମଶା ତେଲ ବା ମଲମ ଲଗାନ୍ତୁ",
        "ପୂରା ହାତ ଥିବା ପୋଷାକ ପିନ୍ଧନ୍ତୁ",
        "ଦିନବେଳା ମଧ୍ୟ ମଶାରୀ ଟାଙ୍ଗି ଶୁଅନ୍ତୁ"
      ],
      "dos": [
        "ଦିନକୁ ୩-୪ ଲିଟର ତରଳ ପଦାର୍ଥ ପିଅନ୍ତୁ",
        "ଡାକ୍ତରଙ୍କ ପରାମର୍ଶରେ ପାରାସିଟାମଲ୍ ନିଅନ୍ତୁ",
        "ସମ୍ପୂର୍ଣ୍ଣ ବିଶ୍ରାମ କରନ୍ତୁ",
        "ନିୟମିତ ରକ୍ତ ପରୀକ୍ଷା କରନ୍ତୁ"
      ],
      "donts": [
        "ଆସ୍ପିରିନ୍ ବା ଆଇବୁପ୍ରୋଫେନ୍ ଖାଆନ୍ତୁ ନାହିଁ",
        "ନିଜେ ଆଣ୍ଟିବାୟୋଟିକ୍ ଖାଆନ୍ତୁ ନାହିଁ",
        "ରକ୍ତସ୍ରାବକୁ ଅଣଦେଖା କରନ୍ତୁ ନାହିଁ",
        "ପାଣି ଜମିବାକୁ ଦିଅନ୍ତୁ ନାହିଁ"
      ],
      "whenToSeeDoctor": [
        "ପ୍ଲେଟଲେଟ୍ ୫୦,୦୦୦ ରୁ କମ୍ ହେଲେ",
        "ଲଗାତାର ବାନ୍ତି ହେଲେ",
        "ପେଟରେ ପ୍ରବଳ ଯନ୍ତ୍ରଣା ହେଲେ",
        "ନାକ ବା ଦାନ୍ତ ମାଢ଼ିରୁ ରକ୍ତ ବାହାରିଲେ",
        "ଶରୀର ଅତ୍ୟଧିକ ଥଣ୍ଡା ପଡ଼ିଗଲେ"
      ],
      "faqs": [
        {
          "question": "ଡେଙ୍ଗୁ ଜଣଙ୍କଠାରୁ ଅନ୍ୟଜଣଙ୍କୁ ଛୁଇଁଲେ ବ୍ୟାପେ କି?",
          "answer": "ନାହିଁ, ଏହା କେବଳ ଏଡିସ୍ ମଶା କାମୁଡ଼ିବା ଦ୍ୱାରା ବ୍ୟାପିଥାଏ।"
        },
        {
          "question": "ଅମୃତଭଣ୍ଡା ପତ୍ର ରସ ଡେଙ୍ଗୁ ଭଲ କରେ କି?",
          "answer": "ଏହା ପ୍ଲେଟଲେଟ୍ ବଢ଼ାଇବାରେ ସାହାଯ୍ୟ କରିପାରେ, କିନ୍ତୁ ଡାକ୍ତରୀ ଚିକିତ୍ସା ଓ ପାଣି ପିଇବା ଅତ୍ୟନ୍ତ ଜରୁରୀ।"
        }
      ]
    }
  },
  {
    "id": "malaria-falciparum",
    "category": "Vector-Borne",
    "severity": "High",
    "transmission": "Female Anopheles mosquito bite",
    "en": {
      "name": "Malaria (Falciparum / Cerebral)",
      "overview": "Severe life-threatening parasitic infection prevalent in forest and tribal districts of Odisha.",
      "symptoms": [
        "Cyclic high fever with severe chills and shivering",
        "Profuse sweating",
        "Splitting headache",
        "Vomiting and dark urine (Blackwater fever)",
        "Altered sensorium or delirium"
      ],
      "causes": [
        "Plasmodium falciparum parasite",
        "Bite of infected Anopheles mosquito breeding in slow forest streams and drains"
      ],
      "treatments": [
        "Artemisinin-based Combination Therapy (ACT)",
        "Intravenous Artesunate injection for severe cerebral malaria",
        "Complete bed rest and IV hydration"
      ],
      "prevention": [
        "Long-Lasting Insecticidal Nets (LLIN)",
        "Indoor residual spraying (IRS) with DDT/synthetic pyrethroids",
        "DAMA campaign adherence in high-burden districts"
      ],
      "dos": [
        "Complete full 3-day course of ACT antimalarials",
        "Sleep inside mosquito nets every single night",
        "Get rapid diagnostic test (RDT) done for any fever"
      ],
      "donts": [
        "Do not stop medicine when fever stops",
        "Do not ignore shivering with fever",
        "Do not delay testing beyond 24 hours"
      ],
      "whenToSeeDoctor": [
        "Unconsciousness or seizures",
        "Yellowing of eyes (Jaundice)",
        "Inability to retain oral fluids",
        "Very dark or blackish urine"
      ],
      "faqs": [
        {
          "question": "Can malaria affect the brain?",
          "answer": "Yes, Falciparum malaria can cause cerebral malaria with seizures and coma if untreated."
        },
        {
          "question": "Is malaria test available for free in Odisha?",
          "answer": "Yes, free Rapid Diagnostic Kit (RDT) testing and ACT medicines are available at all ASHA, Sub-Center and CHC centers."
        }
      ]
    },
    "or": {
      "name": "ଫାଲସିପାରମ୍ ମ୍ୟାଲେରିଆ (ମୁଣ୍ଡବିନ୍ଧା ଜ୍ୱର)",
      "nativeName": "ଫାଲସିପାରମ୍ ମ୍ୟାଲେରିଆ",
      "overview": "ଏକ ମାରାତ୍ମକ ପରଜୀବୀ ସଂକ୍ରମଣ, ଯାହା ଓଡ଼ିଶାର ଜଙ୍ଗଲିଆ ଓ ଆଦିବାସୀ ଅଞ୍ଚଳରେ ବହୁଳ ଭାବରେ ଦେଖାଯାଏ।",
      "symptoms": [
        "କମ୍ପ ଦେଇ ପ୍ରବଳ ଜ୍ୱର ଆସିବା",
        "ପ୍ରଚୁର ଝାଳ ବୋହିବା",
        "ଅସହ୍ୟ ମୁଣ୍ଡବିନ୍ଧା",
        "କଳା ରଙ୍ଗର ପରିସ୍ରା ହେବା",
        "ଚେତା ହରାଇବା ବା ବାଉଳି ଚାଉଳି ହେବା"
      ],
      "causes": [
        "ପ୍ଲାଜମୋଡିୟମ୍ ଫାଲସିପାରମ୍ ପରଜୀବୀ",
        "ଅନୋଫିଲିସ୍ ମଶା କାମୁଡ଼ିବା"
      ],
      "treatments": [
        "ଆର୍ଟେମିସିନିନ୍-ଆଧାରିତ ଔଷଧ (ACT)",
        "ଗୁରୁତର ହେଲେ ଆର୍ଟେସୁନେଟ୍ ଇଞ୍ଜେକ୍ସନ୍",
        "ପ୍ରଚୁର ପାଣି ଓ ସମ୍ପୂର୍ଣ୍ଣ ବିଶ୍ରାମ"
      ],
      "prevention": [
        "ଔଷଧ ଯୁକ୍ତ ମଶାରୀ (LLIN) ବ୍ୟବହାର",
        "ଘରେ କୀଟନାଶକ ସ୍ପ୍ରେ କରିବା",
        "ଆଖପାଖରେ ପାଣି ଜମିବାକୁ ନ ଦେବା"
      ],
      "dos": [
        "୩ ଦିନର ସମ୍ପୂର୍ଣ୍ଣ ଔଷଧ କୋର୍ସ ଖାଆନ୍ତୁ",
        "ପ୍ରତିଦିନ ରାତିରେ ମଶାରୀ ବ୍ୟବହାର କରନ୍ତୁ",
        "ଜ୍ୱର ହେଲେ ତୁରନ୍ତ ଆଶା କର୍ମୀଙ୍କ ପାଖରେ ରକ୍ତ ପରୀକ୍ଷା କରାନ୍ତୁ"
      ],
      "donts": [
        "ଜ୍ୱର ଛାଡ଼ିଗଲେ ଔଷଧ ବନ୍ଦ କରନ୍ତୁ ନାହିଁ",
        "କମ୍ପ ଜ୍ୱରକୁ ଅବହେଳା କରନ୍ତୁ ନାହିଁ",
        "ପରୀକ୍ଷା କରିବାରେ ଡେରି କରନ୍ତୁ ନାହିଁ"
      ],
      "whenToSeeDoctor": [
        "ଚେତା ହରାଇଲେ ବା ବାତ ମାରିଲେ",
        "ଆଖି ହଳଦିଆ ପଡ଼ିଲେ",
        "କଳା ରଙ୍ଗର ପରିସ୍ରା ହେଲେ",
        "ଜମାରୁ ପାଣି ପିଇ ନପାରିଲେ"
      ],
      "faqs": [
        {
          "question": "ମ୍ୟାଲେରିଆ ମୁଣ୍ଡକୁ ଚଢ଼ିପାରେ କି?",
          "answer": "ହଁ, ଫାଲସିପାରମ୍ ମ୍ୟାଲେରିଆ ସଠିକ୍ ସମୟରେ ଚିକିତ୍ସା ନପାଇଲେ ମସ୍ତିଷ୍କ ମ୍ୟାଲେରିଆ (Cerebral Malaria) ହୋଇପାରେ।"
        },
        {
          "question": "ଓଡ଼ିଶାରେ ମ୍ୟାଲେରିଆ ପରୀକ୍ଷା ମାଗଣାରେ ମିଳେ କି?",
          "answer": "ହଁ, ଆଶା ଦିଦି ଏବଂ ସମସ୍ତ ସରକାରୀ ଡାକ୍ତରଖାନାରେ ମାଗଣା ପରୀକ୍ଷା ଓ ଔଷଧ ଉପଲବ୍ଧ।"
        }
      ]
    }
  },
  {
    "id": "scrub-typhus",
    "category": "Vector-Borne",
    "severity": "High",
    "transmission": "Bite of infected larval mite (chigger)",
    "en": {
      "name": "Scrub Typhus (Bush Typhus)",
      "overview": "Bacterial infection transmitted by chigger mites found in bushes, crop fields, and forest margins in Odisha.",
      "symptoms": [
        "High fever with chills",
        "Black cigarette-burn like scab (Eschar) at bite site",
        "Severe headache and muscle aches",
        "Enlarged lymph nodes",
        "Dry cough and confusion"
      ],
      "causes": [
        "Orientia tsutsugamushi bacteria",
        "Bite of microscopic chigger mites inhabiting tall grass and scrub vegetation"
      ],
      "treatments": [
        "Doxycycline or Azithromycin prescribed promptly",
        "Supportive antipyretic therapy",
        "Early initiation prevents multi-organ failure"
      ],
      "prevention": [
        "Wear full boots and long trousers tucked into socks when entering farm fields",
        "Apply permethrin / insect repellent on clothes",
        "Clear bushes and scrub vegetation around homes"
      ],
      "dos": [
        "Inspect body for black crust marks (eschar) in groin, armpits, or neck",
        "Seek medical care immediately if fever occurs after farm work",
        "Complete full antibiotic course"
      ],
      "donts": [
        "Do not walk barefoot in bushes or wet grass",
        "Do not ignore a non-healing black scab with fever",
        "Do not delay antibiotic treatment"
      ],
      "whenToSeeDoctor": [
        "Breathlessness or rapid breathing",
        "Kidney dysfunction (decreased urine)",
        "Confusion or extreme drowsiness",
        "Black scab with persistent fever"
      ],
      "faqs": [
        {
          "question": "What is an Eschar in scrub typhus?",
          "answer": "An eschar is a painless black crust resembling a cigarette burn where the mite bit the skin, a key diagnostic hallmark."
        },
        {
          "question": "Is scrub typhus curable with simple medicine?",
          "answer": "Yes, when treated early with Doxycycline, patients recover rapidly within 48 hours."
        }
      ]
    },
    "or": {
      "name": "ସ୍କ୍ରବ୍ ଟାଇଫସ୍ (ପୋକ କାମୁଡ଼ା ଜ୍ୱର)",
      "nativeName": "ସ୍କ୍ରବ୍ ଟାଇଫସ୍",
      "overview": "ବୁଦା ଓ ଘାସରେ ଥିବା କ୍ଷୁଦ୍ର ଚିଗର ପୋକ କାମୁଡ଼ିବା ଦ୍ୱାରା ବ୍ୟାପୁଥିବା ଏକ ମାରାତ୍ମକ ଜୀବାଣୁଜନିତ ଜ୍ୱର।",
      "symptoms": [
        "କମ୍ପ ଦେଇ ପ୍ରବଳ ଜ୍ୱର",
        "କାମୁଡ଼ିଥିବା ସ୍ଥାନରେ କଳା ପୋଡ଼ା ଦାଗ (Eschar)",
        "ପ୍ରବଳ ମୁଣ୍ଡବିନ୍ଧା ଓ ଗଣ୍ଠି ଯନ୍ତ୍ରଣା",
        "ଶୁଖିଲା କାଶ",
        "ତଳିପେଟ ବା ବେକ ଗ୍ରନ୍ଥି ଫୁଲିବା"
      ],
      "causes": [
        "ଓରିଏଣ୍ଟିଆ ସୁସୁଗାମୁଶି ଜୀବାଣୁ",
        "ବିଲ ଓ ଜଙ୍ଗଲରେ ଥିବା ସୂକ୍ଷ୍ମ ଚିଗର ପୋକ କାମୁଡ଼ିବା"
      ],
      "treatments": [
        "ଡକ୍ସିସାଇକ୍ଲିନ୍ ବା ଆଜିଥ୍ରୋମାଇସିନ୍ ଆଣ୍ଟିବାୟୋଟିକ୍",
        "ପ୍ରଚୁର ପାଣି ଓ ବିଶ୍ରାମ",
        "ପ୍ରାଥମିକ ପର୍ଯ୍ୟାୟରେ ଔଷଧ ନେଲେ ଅଙ୍ଗପ୍ରତ୍ୟଙ୍ଗ ନଷ୍ଟ ହେବାରୁ ରକ୍ଷା ମିଳେ"
      ],
      "prevention": [
        "ବିଲକୁ ଗଲେ ଗୋଡ଼ ଢାଙ୍କୁଥିବା ଜୋତା ଓ ଲମ୍ବା ପ୍ୟାଣ୍ଟ ପିନ୍ଧନ୍ତୁ",
        "ଘର ଚାରିପାଖରେ ଥିବା ବୁଦା ସଫା କରନ୍ତୁ",
        "ପୋଷାକରେ କୀଟନାଶକ ଲଗାନ୍ତୁ"
      ],
      "dos": [
        "ଦେହରେ କୌଣସି ସ୍ଥାନରେ କଳା ଦାଗ ଅଛି କି ନାହିଁ ଦେଖନ୍ତୁ",
        "ବିଲ କାମ ପରେ ଜ୍ୱର ହେଲେ ତୁରନ୍ତ ଡାକ୍ତରଖାନା ଯାଆନ୍ତୁ",
        "ଔଷଧ ସମ୍ପୂର୍ଣ୍ଣ ଶେଷ କରନ୍ତୁ"
      ],
      "donts": [
        "ଖାଲି ପାଦରେ ବୁଦା ବା ଘାସରେ ଚାଲନ୍ତୁ ନାହିଁ",
        "କଳା ଦାଗ ଓ ଜ୍ୱରକୁ ଅଣଦେଖା କରନ୍ତୁ ନାହିଁ",
        "ଚିକିତ୍ସାରେ ବିଳମ୍ବ କରନ୍ତୁ ନାହିଁ"
      ],
      "whenToSeeDoctor": [
        "ଶ୍ୱାସକ୍ରିୟାରେ କଷ୍ଟ ହେଲେ",
        "ପରିସ୍ରା କମିଗଲେ",
        "ଅତ୍ୟଧିକ ନିଦୁଆ ଲାଗିଲେ ବା ବାଉଳି ହେଲେ",
        "କଳା ଦାଗ ସହ ତେଜ ଜ୍ୱର ଥିଲେ"
      ],
      "faqs": [
        {
          "question": "ଏସ୍କାର (Eschar) କଣ?",
          "answer": "ପୋକ କାମୁଡ଼ିଥିବା ସ୍ଥାନରେ ସିଗାରେଟ୍ ପୋଡ଼ା ଭଳି ଏକ କଳା ଦାଗ ହୋଇଥାଏ, ଯାହା ଏହି ରୋଗର ମୁଖ୍ୟ ଚିହ୍ନ।"
        },
        {
          "question": "ଏହି ରୋଗ ସହଜରେ ଭଲ ହୋଇପାରେ କି?",
          "answer": "ହଁ, ଠିକ୍ ସମୟରେ ଡକ୍ସିସାଇକ୍ଲିନ୍ ଔଷଧ ଖାଇଲେ ୪୮ ଘଣ୍ଟା ମଧ୍ୟରେ ଜ୍ୱର ଉପଶମ ହୁଏ।"
        }
      ]
    }
  },
  {
    "id": "cholera-diarrhea",
    "category": "Waterborne & Gastro",
    "severity": "Emergency",
    "transmission": "Contaminated food and drinking water",
    "en": {
      "name": "Cholera & Acute Waterborne Diarrhea",
      "overview": "Acute diarrheal bacterial infection capable of causing severe rapid dehydration within hours.",
      "symptoms": [
        "Sudden painless profuse watery diarrhea (rice-water stools)",
        "Frequent vomiting",
        "Extreme thirst and sunken dry eyes",
        "Painful muscle cramps",
        "Rapid heart rate and low blood pressure"
      ],
      "causes": [
        "Vibrio cholerae bacteria",
        "Drinking contaminated well, pond, or flood water",
        "Eating unwashed or street food handled unhygienically"
      ],
      "treatments": [
        "Immediate aggressive Oral Rehydration Salts (ORS)",
        "Intravenous Ringer's Lactate for severe shock",
        "Antibiotics (Doxycycline/Azithromycin/Ciprofloxacin) to shorten duration",
        "Zinc supplementation for children"
      ],
      "prevention": [
        "Boil all drinking water for at least 1 minute or use halogen/chlorine tablets",
        "Wash hands with soap before eating and after toilet",
        "Avoid raw or unpeeled vegetables and street foods during monsoon"
      ],
      "dos": [
        "Mix 1 sachet ORS in 1 Liter clean water and start drinking immediately",
        "Continue breastfeeding infants through illness",
        "Drink boiled and cooled water only"
      ],
      "donts": [
        "Do not wait for a doctor before starting ORS fluids",
        "Do not take unverified home concoctions or withhold fluids",
        "Do not drink unboiled tap or well water"
      ],
      "whenToSeeDoctor": [
        "Inability to drink or keep fluids down",
        "No urination for over 6 hours",
        "Lethargy, limpness, or fainting",
        "Sunken eyes and wrinkled dry skin"
      ],
      "faqs": [
        {
          "question": "How quickly does cholera cause dehydration?",
          "answer": "Severe cholera can drain 10-15 liters of fluid in 24 hours, causing hypovolemic shock within hours without ORS."
        },
        {
          "question": "How to prepare ORS at home if packets are unavailable?",
          "answer": "Mix 6 level teaspoons of sugar and 1/2 teaspoon of salt in 1 liter of clean boiled drinking water."
        }
      ]
    },
    "or": {
      "name": "କଲେରା ଓ ହଇଜା (ଝାଡ଼ାବାନ୍ତି)",
      "nativeName": "କଲେରା ଓ ହଇଜା",
      "overview": "ଦୂଷିତ ପାଣି ଓ ଖାଦ୍ୟ ଯୋଗୁଁ ହେଉଥିବା ମାରାତ୍ମକ ରୋଗ, ଯାହା ଅଳ୍ପ ସମୟ ମଧ୍ୟରେ ପ୍ରବଳ ଜଳଶୂନ୍ୟତା ସୃଷ୍ଟି କରେ।",
      "symptoms": [
        "ଚାଉଳ ଧୁଆ ପାଣି ପରି ପ୍ରଚୁର ପତଳା ଝାଡ଼ା",
        "ବାରମ୍ବାର ବାନ୍ତି ହେବା",
        "ପ୍ରବଳ ଶୋଷ ଓ ଆଖି ଗାତରେ ପଶିଯିବା",
        "ହାତଗୋଡ଼ରେ ଶିରା ଟାଣିବା ବା କ୍ରାମ୍ପ",
        "ନାଡ଼ି ଦୁର୍ବଳ ହେବା"
      ],
      "causes": [
        "ଭିବ୍ରିଓ କଲେରା ଜୀବାଣୁ",
        "ଦୂଷିତ ନଈ, ନାଳ ବା କୂଅ ପାଣି ପିଇବା",
        "ବାସି ଓ ଅପରିଷ୍କାର ଖାଦ୍ୟ ଖାଇବା"
      ],
      "treatments": [
        "ତୁରନ୍ତ ପ୍ରଚୁର ORS ଘୋଳ ପିଇବା",
        "ଗୁରୁତର ହେଲେ ସାଲାଇନ୍ (IV Fluid) ନେବା",
        "ଡାକ୍ତରଙ୍କ ପରାମର୍ଶରେ ଆଣ୍ଟିବାୟୋଟିକ୍",
        "ପିଲାମାନଙ୍କୁ ଜିଙ୍କ୍ ବଟିକା ଦେବା"
      ],
      "prevention": [
        "ପାଣିକୁ ଫୁଟାଇ ଥଣ୍ଡା କରି ପିଅନ୍ତୁ ବା ହାଲୋଜେନ୍ ବଟିକା ପକାନ୍ତୁ",
        "ଖାଇବା ପୂର୍ବରୁ ଓ ଶୌଚ ପରେ ସାବୁନରେ ହାତ ଧୁଅନ୍ତୁ",
        "ବର୍ଷା ଦିନେ ରାସ୍ତାକଡ଼ ଖାଦ୍ୟ ଖାଆନ୍ତୁ ନାହିଁ"
      ],
      "dos": [
        "ଝାଡ଼ା ଆରମ୍ଭ ହେବା ମାତ୍ରେ ORS ୧ ପ୍ୟାକେଟ୍ ୧ ଲିଟର ପାଣିରେ ଗୋଳି ପିଅନ୍ତୁ",
        "ଛୋଟ ପିଲାଙ୍କୁ ସ୍ତନ୍ୟପାନ ଜାରି ରଖନ୍ତୁ",
        "କେବଳ ଫୁଟା ପାଣି ପିଅନ୍ତୁ"
      ],
      "donts": [
        "ଡାକ୍ତରଙ୍କୁ ଅପେକ୍ଷା କରି ORS ପିଇବା ବନ୍ଦ ରଖନ୍ତୁ ନାହିଁ",
        "ପାଣି ପିଇବା କମାନ୍ତୁ ନାହିଁ",
        "ଅଫୁଟା କୂଅ ବା ପୋଖରୀ ପାଣି ପିଅନ୍ତୁ ନାହିଁ"
      ],
      "whenToSeeDoctor": [
        "ପାଣି ଆଦୌ ପିଇ ନପାରିଲେ ବା ବାନ୍ତି ହେଲେ",
        "୬ ଘଣ୍ଟାରୁ ଅଧିକ ସମୟ ପରିସ୍ରା ନହେଲେ",
        "ଅତ୍ୟଧିକ ନିସ୍ତେଜ ବା ଅଚେତ ହୋଇପଡ଼ିଲେ",
        "ଆଖି ବସିଗଲେ ଓ ଚର୍ମ ଶୁଖିଗଲେ"
      ],
      "faqs": [
        {
          "question": "କଲେରା କେତେ ଶୀଘ୍ର ବିପଜ୍ଜନକ ହୋଇପାରେ?",
          "answer": "ତୁରନ୍ତ ORS ନପିଇଲେ କିଛି ଘଣ୍ଟା ମଧ୍ୟରେ ଶରୀରରୁ ସବୁ ପାଣି ଶୁଖି ମୃତ୍ୟୁ ହୋଇପାରେ।"
        },
        {
          "question": "ଘରେ ORS ନଥିଲେ କଣ କରିବେ?",
          "answer": "୧ ଲିଟର ଫୁଟା ପାଣିରେ ୬ ଚାମଚ ଚିନି ଏବଂ ଅଧ ଚାମଚ ଲୁଣ ମିଶାଇ ପିଇବାକୁ ଦିଅନ୍ତୁ।"
        }
      ]
    }
  },
  {
    "id": "snakebite-envenomation",
    "category": "Emergency",
    "severity": "Emergency",
    "transmission": "Venomous snake bite",
    "en": {
      "name": "Snakebite Envenomation (Krait / Cobra / Viper)",
      "overview": "Life-threatening medical emergency common during farming and monsoon in Odisha.",
      "symptoms": [
        "Fang puncture marks with local swelling/burning",
        "Drooping eyelids (Ptosis) & difficulty swallowing (Neurotoxic)",
        "Bleeding from gums or non-clotting wound blood (Vasculotoxic)",
        "Severe abdominal colic",
        "Respiratory paralysis"
      ],
      "causes": [
        "Bites of Common Krait, Indian Cobra, Russell's Viper, Saw-scaled Viper",
        "Accidental stepping on snakes in dark fields or thatched houses"
      ],
      "treatments": [
        "Immediate Polyvalent Anti-Snake Venom (ASV) at nearest CHC/DHH hospital",
        "Assisted ventilation if breathing falters",
        "Wound management and tetanus toxoid"
      ],
      "prevention": [
        "Use a bright torch and wooden stick when walking at night",
        "Sleep on raised cots rather than ground floor",
        "Keep house surroundings free from wood piles and rodents"
      ],
      "dos": [
        "Immobilize the bitten limb like a fracture with a splint",
        "Keep the patient calm and transport immediately to nearest Government hospital with ASV",
        "Note the appearance of snake if safely visible"
      ],
      "donts": [
        "DO NOT apply tight tourniquets or ropes",
        "DO NOT cut, slash, suck, or burn the bite site",
        "DO NOT waste time visiting traditional healers (Gunia/Ojha)",
        "DO NOT give alcohol or sedatives"
      ],
      "whenToSeeDoctor": [
        "Every single snakebite requires immediate hospital emergency admission without delay."
      ],
      "faqs": [
        {
          "question": "Is Anti-Snake Venom (ASV) free in Odisha?",
          "answer": "Yes, ASV is supplied free of cost across all Odisha Government CHCs, Sub-Divisional, and District Headquarters Hospitals."
        },
        {
          "question": "Why should tourniquets not be applied?",
          "answer": "Tight tourniquets stop arterial blood supply, leading to gangrene and limb amputation without stopping venom absorption."
        }
      ]
    },
    "or": {
      "name": "ସାପ କାମୁଡ଼ା (ବିଷାକ୍ତ ସର୍ପାଘାତ)",
      "nativeName": "ସାପ କାମୁଡ଼ା",
      "overview": "ଓଡ଼ିଶାରେ ଚାଷ କାମ ଓ ବର୍ଷା ଦିନେ ଘଟୁଥିବା ଏକ ଅତ୍ୟନ୍ତ ଜରୁରୀକାଳୀନ ଜୀବନ-ଘାତୀ ପରିସ୍ଥିତି।",
      "symptoms": [
        "ଦୁଇଟି ବିଷ ଦାନ୍ତର ଚିହ୍ନ ଓ ଫୁଲିବା",
        "ଆଖି ପତା ପଡ଼ିଯିବା (ପ୍ଟୋସିସ୍) ଓ ଗିଳିବାରେ କଷ୍ଟ",
        "ନାକ ବା ମାଢ଼ିରୁ ରକ୍ତ ବୋହିବା",
        "ପେଟରେ ପ୍ରବଳ ଯନ୍ତ୍ରଣା",
        "ଶ୍ୱାସକ୍ରିୟା ବନ୍ଦ ହୋଇଯିବା"
      ],
      "causes": [
        "ତମ୍ପ, ନାଗ, ଚିତି ଓ ବୋଡ଼ା ସାପ କାମୁଡ଼ିବା",
        "ରାତିରେ ଅନ୍ଧାରରେ ଯିବା କିମ୍ବା ତଳେ ଶୋଇବା"
      ],
      "treatments": [
        "ନିକଟସ୍ଥ ସରକାରୀ ଡାକ୍ତରଖାନାରେ ଆଣ୍ଟି-ସ୍ନେକ୍ ଭେନମ୍ (ASV) ଇଞ୍ଜେକ୍ସନ୍",
        "ଶ୍ୱାସକ୍ରିୟା ପାଇଁ ଅକ୍ସିଜେନ୍ ବା ଭେଣ୍ଟିଲେଟର୍ ସହାୟତା",
        "ଟିଟାନସ୍ ଇଞ୍ଜେକ୍ସନ୍"
      ],
      "prevention": [
        "ରାତିରେ ଟର୍ଚ୍ଚ ଲାଇଟ୍ ଓ ବାଡ଼ି ଧରି ଚାଲନ୍ତୁ",
        "ତଳେ ନ ଶୋଇ ଖଟ ବ୍ୟବହାର କରନ୍ତୁ",
        "ଘର ଚାରିପାଖ ସଫା ରଖନ୍ତୁ ଯେପରି ମୂଷା ରହିବେ ନାହିଁ"
      ],
      "dos": [
        "କାମୁଡ଼ିଥିବା ହାତ ବା ଗୋଡ଼କୁ ବାଉଁଶ ବାଡ଼ି ବାନ୍ଧି ସ୍ଥିର ରଖନ୍ତୁ",
        "ରୋଗୀକୁ ଶାନ୍ତ ରଖି ତୁରନ୍ତ ୧୦୮ ଆମ୍ବୁଲାନ୍ସରେ ଡାକ୍ତରଖାନା ନିଅନ୍ତୁ",
        "ସାପଟି କିପରି ଥିଲା ମନେ ରଖନ୍ତୁ"
      ],
      "donts": [
        "ଦଉଡ଼ି ବା ଟାଇଟ୍ କପଡ଼ା ବାନ୍ଧନ୍ତୁ ନାହିଁ",
        "କାମୁଡ଼ିଥିବା ସ୍ଥାନକୁ କାଟନ୍ତୁ ନାହିଁ ବା ବିଷ ଶୋଷନ୍ତୁ ନାହିଁ",
        "ଗୁଣିଆ ବା ଝଡ଼ାଫୁଙ୍କାରେ ସମୟ ନଷ୍ଟ କରନ୍ତୁ ନାହିଁ",
        "କୌଣସି ନିଶାଦ୍ରବ୍ୟ ଦିଅନ୍ତୁ ନାହିଁ"
      ],
      "whenToSeeDoctor": [
        "ପ୍ରତ୍ୟେକ ସାପ କାମୁଡ଼ାରେ ବିନା ବିଳମ୍ବରେ ତୁରନ୍ତ ଡାକ୍ତରଖାନା ଯିବା ବାଧ୍ୟତାମୂଳକ।"
      ],
      "faqs": [
        {
          "question": "ଓଡ଼ିଶାରେ ସାପ ବିଷର ଔଷଧ (ASV) ମାଗଣାରେ ମିଳେ କି?",
          "answer": "ହଁ, ସମସ୍ତ ଗୋଷ୍ଠୀ ସ୍ୱାସ୍ଥ୍ୟ କେନ୍ଦ୍ର (CHC) ଓ ଜିଲ୍ଲା ଡାକ୍ତରଖାନାରେ ASV ସମ୍ପୂର୍ଣ୍ଣ ମାଗଣା।"
        },
        {
          "question": "ଦଉଡ଼ି କାହିଁକି ବାନ୍ଧିବା ଉଚିତ ନୁହେଁ?",
          "answer": "ଦଉଡ଼ି ବାନ୍ଧିଲେ ରକ୍ତ ଚଳାଚଳ ବନ୍ଦ ହୋଇ ହାତଗୋଡ଼ ପଚିଯାଏ ଏବଂ କାଟିବାକୁ ପଡ଼ିପାରେ।"
        }
      ]
    }
  },
  {
    "id": "heat-stroke",
    "category": "Emergency",
    "severity": "Emergency",
    "transmission": "Environmental extreme heat exposure",
    "en": {
      "name": "Heat Stroke & Sunstroke (Anshughata)",
      "overview": "Dangerous elevation of core body temperature (>104°F) with central nervous system dysfunction during Odisha summers.",
      "symptoms": [
        "Core body temperature exceeding 104°F (40°C)",
        "Hot, red, completely dry skin without sweating",
        "Throbbing headache and dizziness",
        "Confusion, slurred speech, or hallucinations",
        "Unconsciousness or seizures"
      ],
      "causes": [
        "Prolonged exposure to extreme summer ambient heat (42°C - 47°C)",
        "Strenuous agricultural or outdoor labor between 11 AM - 3:30 PM without hydration"
      ],
      "treatments": [
        "Immediate rapid cooling: move to shade and douse body with cool water",
        "Apply ice packs to armpits, groin, and neck",
        "IV saline rehydration under medical care",
        "Fan continuously to promote evaporative heat loss"
      ],
      "prevention": [
        "Avoid stepping outside between 11:00 AM and 3:30 PM during heatwave alerts",
        "Drink water, torani (rice water), bel pana, and lassi frequently",
        "Wear loose, light-colored cotton clothing and wide-brimmed hats"
      ],
      "dos": [
        "Move heat victim immediately to a cool shaded or air-conditioned area",
        "Pour cool water over head and chest and fan vigorously",
        "Call 108 ambulance immediately"
      ],
      "donts": [
        "Do not give oral fluids if the person is semi-conscious or vomiting",
        "Do not use ice-cold water immersion (can trigger severe shivering)",
        "Do not ignore dizziness or lack of sweat in hot weather"
      ],
      "whenToSeeDoctor": [
        "Any suspicion of heat stroke with high body temperature and confusion requires urgent emergency transport."
      ],
      "faqs": [
        {
          "question": "What is the difference between heat exhaustion and heat stroke?",
          "answer": "Heat exhaustion causes heavy sweating and pale clammy skin, whereas heat stroke causes cessation of sweating, hot dry skin, and mental confusion."
        }
      ]
    },
    "or": {
      "name": "ଅଂଶୁଘାତ (ଖରା ତାତି ଜନିତ ସନ୍‌ଷ୍ଟ୍ରୋକ୍)",
      "nativeName": "ଅଂଶୁଘାତ",
      "overview": "ଓଡ଼ିଶାର ପ୍ରଚଣ୍ଡ ଗ୍ରୀଷ୍ମ ପ୍ରବାହ ଯୋଗୁଁ ଶରୀରର ତାପମାତ୍ରା ୧୦୪°F ରୁ ଅଧିକ ହୋଇ ଚେତା ହରାଇବା ପରିସ୍ଥିତି।",
      "symptoms": [
        "ଶରୀର ତାପମାତ୍ରା ୧୦୪°F (୪୦°C) ରୁ ଅଧିକ ହେବା",
        "ଝାଳ ବାହାରିବା ବନ୍ଦ ହୋଇ ଚର୍ମ ଲାଲ୍ ଓ ଶୁଖିଲା ପଡ଼ିବା",
        "ଅସହ୍ୟ ମୁଣ୍ଡବିନ୍ଧା ଓ ମୁଣ୍ଡ ବୁଲାଇବା",
        "ବାଉଳି ଚାଉଳି କଥା କହିବା ବା ଚେତା ହରାଇବା",
        "ବାତ ମାରିବା"
      ],
      "causes": [
        "ଦିନ ୧୧ଟାରୁ ଅପରାହ୍ନ ୩:୩୦ ମଧ୍ୟରେ ପ୍ରଚଣ୍ଡ ଖରାରେ କାମ କରିବା",
        "ପର୍ଯ୍ୟାପ୍ତ ପାଣି ନ ପିଇବା"
      ],
      "treatments": [
        "ତୁରନ୍ତ ଛାଇକୁ ନେଇ ଶରୀରରେ ଥଣ୍ଡା ପାଣି ଢାଳିବା",
        "ବେକ, କାଖ ଓ ଜଙ୍ଘ ସନ୍ଧିରେ ବରଫ ବା ଓଦା କପଡ଼ା ଦେବା",
        "ଡାକ୍ତରଖାନାରେ ସାଲାଇନ୍ ଦେବା",
        "ବିଞ୍ଚଣା ବା ଫ୍ୟାନ୍ ଦ୍ୱାରା ପବନ ଦେବା"
      ],
      "prevention": [
        "ଦିନ ୧୧ଟାରୁ ଅପରାହ୍ନ ୩:୩୦ ଯାଏଁ ଟାଣ ଖରାରୁ ଦୂରେଇ ରୁହନ୍ତୁ",
        "ପ୍ରଚୁର ପାଣି, ତୋରାଣି, ବେଲ ପଣା ଓ ଘୋଳ ଦହି ପିଅନ୍ତୁ",
        "ହାଲୁକା ସୂତା ପୋଷାକ ପିନ୍ଧନ୍ତୁ ଓ ଛତା ବ୍ୟବହାର କରନ୍ତୁ"
      ],
      "dos": [
        "ରୋଗୀକୁ ତୁରନ୍ତ ଥଣ୍ଡା ଛାଇ ଜାଗାକୁ ନିଅନ୍ତୁ",
        "ମୁଣ୍ଡ ଓ ଛାତିରେ ଥଣ୍ଡା ପାଣି ଢାଳନ୍ତୁ",
        "ତୁରନ୍ତ ୧୦୮ କୁ କଲ୍ କରନ୍ତୁ"
      ],
      "donts": [
        "ଅଚେତ ଥିବା ବ୍ୟକ୍ତିଙ୍କ ପାଟିରେ ପାଣି ଦିଅନ୍ତୁ ନାହିଁ",
        "ଖରାରେ କାମ କରୁଥିବା ବେଳେ ମଦ୍ୟପାନ କରନ୍ତୁ ନାହିଁ",
        "ମୁଣ୍ଡବୁଲାକୁ ଅବହେଳା କରନ୍ତୁ ନାହିଁ"
      ],
      "whenToSeeDoctor": [
        "ଦେହ ତାତିବା ସହ ମୁଣ୍ଡ ବୁଲାଇବା ବା ଚେତା ହରାଇଲେ ତୁରନ୍ତ ଡାକ୍ତରଖାନା ନିଅନ୍ତୁ।"
      ],
      "faqs": [
        {
          "question": "ଅଂଶୁଘାତ ହେଲେ ତୋରାଣି ପାଣି ଲାଭଦାୟକ କି?",
          "answer": "ହଁ, ପଖାଳ ତୋରାଣିରେ ପ୍ରାକୃତିକ ଇଲେକ୍ଟ୍ରୋଲାଇଟ୍ ଥାଏ ଯାହା ଶରୀରକୁ ଥଣ୍ଡା ରଖିବାରେ ଉତ୍କୃଷ୍ଟ।"
        }
      ]
    }
  },
  {
    "id": "sickle-cell-disease",
    "category": "Chronic & Blood",
    "severity": "High",
    "transmission": "Genetic inherited hemoglobin disorder",
    "en": {
      "name": "Sickle Cell Anemia & Trait",
      "overview": "Inherited blood disorder highly prevalent in Western Odisha (Sambalpur, Balangir, Kalahandi, Bargarh).",
      "symptoms": [
        "Severe episodes of bone and joint pain (Vaso-occlusive Crisis)",
        "Chronic fatigue and pallor (Anemia)",
        "Swelling of hands and feet (Dactylitis)",
        "Frequent infections",
        "Delayed growth in children",
        "Yellowing of eyes (Jaundice)"
      ],
      "causes": [
        "Abnormal Hemoglobin S gene inherited from parents causing RBCs to become rigid sickle-shaped"
      ],
      "treatments": [
        "Daily Hydroxyurea therapy to reduce painful crises",
        "Folic acid 5mg supplementation",
        "Aggressive pain management during crisis",
        "Pneumococcal and meningococcal vaccinations",
        "Blood transfusions when indicated"
      ],
      "prevention": [
        "Pre-marital hemoglobin electrophoresis / HPLC screening",
        "Genetic counseling before marriage in high-prevalence communities"
      ],
      "dos": [
        "Drink 3-5 liters of water daily to prevent blood sludging",
        "Take Hydroxyurea and Folic acid without missing doses",
        "Keep warm during cold winter months"
      ],
      "donts": [
        "Do not get dehydrated or engage in extreme exhausting physical labor",
        "Do not expose yourself to sudden extreme cold or altitude",
        "Do not ignore chest pain or fever"
      ],
      "whenToSeeDoctor": [
        "Acute Chest Syndrome (fever, chest pain, breathlessness)",
        "Sudden severe pain crisis unresponsive to home medications",
        "Stroke symptoms (weakness in one arm or leg)",
        "Fever above 101°F"
      ],
      "faqs": [
        {
          "question": "Can Sickle Cell Disease be detected before marriage in Odisha?",
          "answer": "Yes, free HPLC blood screening is provided across Western Odisha District Hospitals and Medical Colleges."
        },
        {
          "question": "Is Hydroxyurea safe for lifelong use?",
          "answer": "Yes, Hydroxyurea is a proven, safe medicine that dramatically decreases pain episodes and hospitalizations."
        }
      ]
    },
    "or": {
      "name": "ସିକିଲ୍ ସେଲ୍ ଆନିମିଆ (ଦାଆ କୋଷ ରକ୍ତହୀନତା)",
      "nativeName": "ସିକିଲ୍ ସେଲ୍ ଆନିମିଆ",
      "overview": "ପଶ୍ଚିମ ଓଡ଼ିଶାରେ (ସମ୍ବଲପୁର, ବଲାଙ୍ଗୀର, କଳାହାଣ୍ଡି) ବହୁଳ ଭାବରେ ଦେଖାଯାଉଥିବା ଏକ ବଂଶଗତ ରକ୍ତ ବିକାର।",
      "symptoms": [
        "ଅସହ୍ୟ ହାଡ଼ ଓ ଗଣ୍ଠି ବିନ୍ଧା (Pain Crisis)",
        "ଅତ୍ୟଧିକ ଦୁର୍ବଳତା ଓ ଫିକା ପଡ଼ିଯିବା (ରକ୍ତହୀନତା)",
        "ହାତଗୋଡ଼ ଫୁଲିବା",
        "ବାରମ୍ବାର ସଂକ୍ରମଣ ହେବା",
        "ପିଲାଙ୍କ ଶାରୀରିକ ବୃଦ୍ଧି କମିବା",
        "ଆଖି ହଳଦିଆ ପଡ଼ିବା"
      ],
      "causes": [
        "ପିତାମାତାଙ୍କ ଠାରୁ ମିଳିଥିବା ଅସ୍ୱାଭାବିକ ହିମୋଗ୍ଲୋବିନ୍ ଜିନ୍ ଯୋଗୁଁ ରକ୍ତ କଣିକା ଦାଆ ଆକାର ଧାରଣ କରେ"
      ],
      "treatments": [
        "ନିୟମିତ ହାଇଡ୍ରୋକ୍ସିୟୁରିଆ ଔଷଧ ସେବନ",
        "ପ୍ରତିଦିନ ଫୋଲିକ୍ ଏସିଡ୍ ଖାଇବା",
        "ଯନ୍ତ୍ରଣା ସମୟରେ ତୁରନ୍ତ ଚିକିତ୍ସା",
        "ଆବଶ୍ୟକ ସ୍ଥଳେ ରକ୍ତ ଦେବା"
      ],
      "prevention": [
        "ବିବାହ ପୂର୍ବରୁ ଉଭୟଙ୍କ HPLC ରକ୍ତ ପରୀକ୍ଷା କରାଇବା",
        "ଦୁଇଜଣ ସିକିଲ୍ ସେଲ୍ ବାହକଙ୍କ ମଧ୍ୟରେ ବିବାହ ନକରିବା"
      ],
      "dos": [
        "ଦିନକୁ ଅତିକମରେ ୩-୪ ଲିଟର ପାଣି ପିଅନ୍ତୁ",
        "ନିୟମିତ ଔଷଧ ଖାଆନ୍ତୁ",
        "ଶୀତ ଦିନେ ଉଷୁମ ପୋଷାକ ପିନ୍ଧି ଶରୀରକୁ ଗରମ ରଖନ୍ତୁ"
      ],
      "donts": [
        "ଶରୀରକୁ ଜଳଶୂନ୍ୟ ହେବାକୁ ଦିଅନ୍ତୁ ନାହିଁ",
        "ଅତ୍ୟଧିକ କଠିନ ପରିଶ୍ରମ କରନ୍ତୁ ନାହିଁ",
        "ଛାତି ଯନ୍ତ୍ରଣା ବା ଜ୍ୱରକୁ ଅଣଦେଖା କରନ୍ତୁ ନାହିଁ"
      ],
      "whenToSeeDoctor": [
        "ଛାତିରେ ଯନ୍ତ୍ରଣା ଓ ନିଶ୍ୱାସ ନେବାରେ କଷ୍ଟ ହେଲେ (Acute Chest Syndrome)",
        "ଅସହ୍ୟ ଗଣ୍ଠି ଯନ୍ତ୍ରଣା ହେଲେ",
        "ହଠାତ୍ ହାତଗୋଡ଼ ଦୁର୍ବଳ ହୋଇଗଲେ"
      ],
      "faqs": [
        {
          "question": "ଓଡ଼ିଶାରେ ସିକିଲ୍ ସେଲ୍ ପରୀକ୍ଷା ମାଗଣା କି?",
          "answer": "ହଁ, ପଶ୍ଚିମ ଓଡ଼ିଶାର ସମସ୍ତ ଜିଲ୍ଲା ମୁଖ୍ୟ ଚିକିତ୍ସାଳୟ ଏବଂ ମେଡିକାଲ କଲେଜରେ HPLC ପରୀକ୍ଷା ସମ୍ପୂର୍ଣ୍ଣ ମାଗଣା।"
        },
        {
          "question": "ସିକିଲ୍ ସେଲ୍ ରୋଗୀ ବିବାହ କରିପାରିବେ କି?",
          "answer": "ଜଣେ ସିକିଲ୍ ସେଲ୍ ବ୍ୟକ୍ତି ସାଧାରଣ (Normal) ବ୍ୟକ୍ତିଙ୍କୁ ବିବାହ କରିପାରିବେ, କିନ୍ତୁ ଅନ୍ୟ ସିକିଲ୍ ବାହକଙ୍କୁ ବିବାହ କରିବା ଅନୁଚିତ।"
        }
      ]
    }
  },
  {
    "id": "filaria-elephantiasis",
    "category": "Vector-Borne",
    "severity": "Moderate",
    "transmission": "Culex mosquito bite",
    "en": {
      "name": "Lymphatic Filariasis (Elephantiasis / Goda Roga)",
      "overview": "Parasitic worm disease causing chronic, disfiguring swelling of limbs and hydrocele in coastal Odisha.",
      "symptoms": [
        "Permanent swelling of legs and arms (Elephantiasis)",
        "Swelling of scrotum in men (Hydrocele)",
        "Episodes of local redness, pain, and fever (Dermato-lymphangio-adenitis)",
        "Thick, hard, dark skin"
      ],
      "causes": [
        "Wuchereria bancrofti microscopic worms",
        "Transmitted by Culex mosquitoes breeding in stagnant dirty sewage water"
      ],
      "treatments": [
        "Mass Drug Administration (MDA) with DEC + Albendazole + Ivermectin (IDA therapy)",
        "Foot hygiene, washing with soap and water, and fungal creams",
        "Surgical correction of hydrocele in government hospitals"
      ],
      "prevention": [
        "Participate annually in Odisha Mass Drug Administration (Sarva Daba Seban)",
        "Prevent Culex mosquito breeding in sewage and drains",
        "Use mosquito nets at night"
      ],
      "dos": [
        "Wash swollen limbs twice daily with clean soap and water and dry completely",
        "Elevate legs while sleeping to reduce lymph pooling",
        "Take annual MDA pills distributed by ASHA workers"
      ],
      "donts": [
        "Do not ignore small skin cracks or fungal infections on swollen legs",
        "Do not refuse annual MDA deworming tablets",
        "Do not allow dirty sewage water to stagnate near homes"
      ],
      "whenToSeeDoctor": [
        "Sudden severe red hot feverish swelling in limb",
        "Secondary bacterial skin infection with pus"
      ],
      "faqs": [
        {
          "question": "Can elephantiasis swelling be reversed in late stages?",
          "answer": "Advanced limb swelling cannot be fully reversed, but strict hygiene and exercise prevent worsening, and hydrocele can be cured with simple surgery."
        },
        {
          "question": "Why should healthy people take MDA filaria medicine?",
          "answer": "MDA kills microscopic baby worms in blood before they damage lymph channels and prevents mosquito transmission to your family."
        }
      ]
    },
    "or": {
      "name": "ଫାଇଲେରିଆ (ଗୋଦର ରୋଗ)",
      "nativeName": "ଫାଇଲେରିଆ / ଗୋଦର",
      "overview": "କ୍ୟୁଲେକ୍ସ ମଶା କାମୁଡ଼ା ଦ୍ୱାରା ବ୍ୟାପୁଥିବା ଏକ ପରଜୀବୀ ରୋଗ, ଯାହା ଓଡ଼ିଶାର ଉପକୂଳ ଜିଲ୍ଲାରେ ଗୋଡ଼ହାତ ଫୁଲିବାର କାରଣ ହୁଏ।",
      "symptoms": [
        "ଗୋଡ଼ ବା ହାତ ଅସ୍ୱାଭାବିକ ଭାବେ ଫୁଲିବା (ଗୋଦର)",
        "ପୁରୁଷଙ୍କ ଅଣ୍ଡକୋଷ ଫୁଲିବା (ହାଇଡ୍ରୋସିଲ୍)",
        "ବାରମ୍ବାର ଗୋଡ଼ ଲାଲ୍ ହୋଇ ଜ୍ୱର ଆସିବା",
        "ଚର୍ମ ମୋଟା ଓ କଠିନ ହୋଇଯିବା"
      ],
      "causes": [
        "ହୁଚେରେରିଆ ବାଙ୍କ୍ରଫ୍ଟି କୃମି",
        "ନାଳନର୍ଦ୍ଦମାରେ ଜନ୍ମ ହେଉଥିବା କ୍ୟୁଲେକ୍ସ ମଶା କାମୁଡ଼ିବା"
      ],
      "treatments": [
        "ସର୍ବ ଔଷଧ ସେବନ (MDA) ରେ DEC, ଆଲବେଣ୍ଡାଜୋଲ୍ ଓ ଆଇଭରମେକ୍ଟିନ୍",
        "ଗୋଡ଼କୁ ସାବୁନରେ ସଫା ରଖିବା",
        "ହାଇଡ୍ରୋସିଲ୍ ପାଇଁ ସରକାରୀ ଡାକ୍ତରଖାନାରେ ମାଗଣା ଅସ୍ତ୍ରୋପଚାର"
      ],
      "prevention": [
        "ପ୍ରତିବର୍ଷ ଆଶା ଦିଦି ବାଣ୍ଟୁଥିବା ଫାଇଲେରିଆ ଔଷଧ ନିଶ୍ଚୟ ଖାଆନ୍ତୁ",
        "ନର୍ଦ୍ଦମା ପାଣି ସଫା ରଖନ୍ତୁ",
        "ମଶାରୀ ବ୍ୟବହାର କରନ୍ତୁ"
      ],
      "dos": [
        "ଫୁଲିଥିବା ଗୋଡ଼କୁ ଦିନକୁ ଦୁଇଥର ସାବୁନ ଓ ପାଣିରେ ଧୋଇ ଶୁଖାନ୍ତୁ",
        "ଶୋଇବା ବେଳେ ଗୋଡ଼ ତଳେ ତକିଆ ଦେଇ ଟିକେ ଉଚ୍ଚା ରଖନ୍ତୁ",
        "ସରକାରୀ ଔଷଧ ବଣ୍ଟନରେ ଭାଗ ନିଅନ୍ତୁ"
      ],
      "donts": [
        "ଗୋଡ଼ରେ ଥିବା ଘା ବା କଟା ସ୍ଥାନକୁ ଅବହେଳା କରନ୍ତୁ ନାହିଁ",
        "ଔଷଧ ଖାଇବାକୁ ମନା କରନ୍ତୁ ନାହିଁ",
        "ନର୍ଦ୍ଦମା ପାଣି ଜମିବାକୁ ଦିଅନ୍ତୁ ନାହିଁ"
      ],
      "whenToSeeDoctor": [
        "ଗୋଡ଼ ପ୍ରବଳ ଲାଲ୍ ପଡ଼ି ପ୍ରଚଣ୍ଡ ଜ୍ୱର ହେଲେ",
        "ଫୁଲା ସ୍ଥାନରୁ ପୂଜ ବାହାରିଲେ"
      ],
      "faqs": [
        {
          "question": "ସୁସ୍ଥ ଲୋକ କାହିଁକି ଫାଇଲେରିଆ ଔଷଧ ଖାଇବେ?",
          "answer": "ଶରୀର ଭିତରେ ଥିବା ସୂକ୍ଷ୍ମ କୃମିମାନେ ଗୋଡ଼ ଫୁଲାଇବା ପୂର୍ବରୁ ଏହି ଔଷଧ ସେମାନଙ୍କୁ ମାରିଦିଏ।"
        }
      ]
    }
  },
  {
    "id": "tuberculosis-pulmonary",
    "category": "Infectious & Bacterial",
    "severity": "High",
    "transmission": "Airborne droplets from coughing/sneezing",
    "en": {
      "name": "Tuberculosis (TB / Khya Roga)",
      "overview": "Bacterial lung infection requiring 6-month continuous multi-drug treatment under the National TB Elimination Program (NTEP).",
      "symptoms": [
        "Cough lasting more than 2 weeks",
        "Coughing up blood (Hemoptysis)",
        "Evening low-grade fever with night sweats",
        "Unexplained weight loss and loss of appetite",
        "Chest pain and fatigue"
      ],
      "causes": [
        "Mycobacterium tuberculosis bacteria",
        "Airborne transmission in crowded, poorly ventilated houses"
      ],
      "treatments": [
        "Daily Fixed Dose Combination (FDC) under Nikshay NTEP (Rifampicin, Isoniazid, Pyrazinamide, Ethambutol)",
        "Nikshay Poshan Yojana: ₹500/month direct benefit transfer for nutrition",
        "Complete uninterrupted 6-month course"
      ],
      "prevention": [
        "BCG vaccination at birth",
        "Early testing via NAAT/CBNAAT across Odisha DHHs",
        "Cough hygiene: cover mouth with handkerchief",
        "Adequate cross-ventilation in homes"
      ],
      "dos": [
        "Take your TB medicines every single day without missing a dose",
        "Eat high-protein foods like eggs, pulses, and milk",
        "Register on Nikshay portal for free monthly cash support"
      ],
      "donts": [
        "NEVER stop medication early when cough improves (creates drug-resistant TB)",
        "Do not spit openly on roads or floors",
        "Do not smoke or consume alcohol during treatment"
      ],
      "whenToSeeDoctor": [
        "Any cough lasting beyond 14 days",
        "Coughing fresh red blood",
        "Severe shortness of breath",
        "Yellowing of eyes or severe vomiting while on TB pills"
      ],
      "faqs": [
        {
          "question": "Is TB completely curable in Odisha?",
          "answer": "Yes, TB is 100% curable with free medicines provided at all Government health facilities under the Nikshay program."
        },
        {
          "question": "What happens if a patient stops TB medicines after 2 months?",
          "answer": "The bacteria mutate into Multi-Drug Resistant TB (MDR-TB), which requires 18-24 months of far harsher injections and medications."
        }
      ]
    },
    "or": {
      "name": "ଯକ୍ଷ୍ମା (ଟିବି / କ୍ଷୟ ରୋଗ)",
      "nativeName": "ଯକ୍ଷ୍ମା / ଟିବି",
      "overview": "ଫୁସଫୁସ୍‌କୁ ଆକ୍ରାନ୍ତ କରୁଥିବା ଜୀବାଣୁଜନିତ ରୋଗ, ଯାହା ନିକ୍ଷୟ କାର୍ଯ୍ୟକ୍ରମ ଅଧୀନରେ ୬ ମାସ ନିୟମିତ ଔଷଧ ଦ୍ୱାରା ସମ୍ପୂର୍ଣ୍ଣ ଭଲ ହୁଏ।",
      "symptoms": [
        "୨ ସପ୍ତାହରୁ ଅଧିକ ଦିନ ଧରି କାଶ ଲାଗିରହିବା",
        "କଫ ସହିତ ରକ୍ତ ପଡ଼ିବା",
        "ସନ୍ଧ୍ୟା ବେଳେ ମାନ୍ଦା ଜ୍ୱର ଓ ରାତିରେ ଝାଳ ବୋହିବା",
        "ହଠାତ୍ ଓଜନ କମିବା ଓ ଭୋକ ନହେବା",
        "ଛାତିରେ ଯନ୍ତ୍ରଣା"
      ],
      "causes": [
        "ମାଇକୋବ୍ୟାକ୍ଟେରିୟମ ଟ୍ୟୁବରକୁଲୋସିସ୍ ଜୀବାଣୁ",
        "ଟିବି ରୋଗୀଙ୍କ କାଶ ଓ ଛିଙ୍କ ଦ୍ୱାରା ବାୟୁ ମାଧ୍ୟମରେ ବ୍ୟାପିବା"
      ],
      "treatments": [
        "ନିକ୍ଷୟ ଯୋଜନାରେ ୬ ମାସ ମାଗଣା ଔଷଧ ସେବନ (FDC)",
        "ନିକ୍ଷୟ ପୋଷଣ ଯୋଜନାରେ ପୁଷ୍ଟିକର ଖାଦ୍ୟ ପାଇଁ ମାସିକ ୫୦୦ ଟଙ୍କା ସହାୟତା",
        "ନିୟମିତ କଫ ପରୀକ୍ଷା"
      ],
      "prevention": [
        "ଜନ୍ମ ସମୟରେ ଶିଶୁକୁ BCG ଟିକା ଦେବା",
        "କାଶିବା ବେଳେ ରୁମାଲ୍ ବ୍ୟବହାର କରିବା",
        "ଘରେ ପର୍ଯ୍ୟାପ୍ତ ଆଲୋକ ଓ ପବନ ଚଳାଚଳ ବ୍ୟବସ୍ଥା"
      ],
      "dos": [
        "ଗୋଟିଏ ଦିନ ବି ନ ଭୁଲି ପ୍ରତିଦିନ ଔଷଧ ଖାଆନ୍ତୁ",
        "ଅଣ୍ଡା, ଡାଲି, କ୍ଷୀର ଭଳି ପୁଷ୍ଟିକର ଖାଦ୍ୟ ଖାଆନ୍ତୁ",
        "ନିକ୍ଷୟ ପୋର୍ଟାଲରେ ପଞ୍ଜୀକରଣ କରି ସରକାରୀ ସହାୟତା ନିଅନ୍ତୁ"
      ],
      "donts": [
        "କାଶ କମିଗଲେ ବି କଦାପି ଔଷଧ ବନ୍ଦ କରନ୍ତୁ ନାହିଁ (MDR-TB ହେବାର ଭୟ)",
        "ବାହାରେ ଯୁଆଡ଼େ ସିଆଡ଼େ ଛେପ ପକାନ୍ତୁ ନାହିଁ",
        "ମଦ୍ୟପାନ ବା ବିଡ଼ି/ସିଗାରେଟ୍ ଟାଣନ୍ତୁ ନାହିଁ"
      ],
      "whenToSeeDoctor": [
        "୨ ସପ୍ତାହରୁ ଅଧିକ କାଶ ଥିଲେ",
        "କଫରେ ରକ୍ତ ପଡ଼ିଲେ",
        "ଔଷଧ ଖାଇବା ବେଳେ ବାନ୍ତି ବା ଆଖି ହଳଦିଆ ପଡ଼ିଲେ"
      ],
      "faqs": [
        {
          "question": "ଟିବି ରୋଗ ସମ୍ପୂର୍ଣ୍ଣ ଭଲ ହୋଇପାରେ କି?",
          "answer": "ହଁ, ସରକାରୀ ଡାକ୍ତରଖାନାରେ ମିଳୁଥିବା ମାଗଣା ଔଷଧ ୬ ମାସ ନିୟମିତ ଖାଇଲେ ଟିବି ଶତପ୍ରତିଶତ ଭଲ ହୁଏ।"
        },
        {
          "question": "ମଝିରେ ଔଷଧ ବନ୍ଦ କଲେ କଣ ହୁଏ?",
          "answer": "ରୋଗ ପୁଣି ଫେରିଆସେ ଏବଂ ଏହା ଅଧିକ ଭୟଙ୍କର MDR-TB ରେ ପରିଣତ ହୁଏ ଯାହା ଭଲ ହେବାକୁ ୨ ବର୍ଷ ଲାଗେ।"
        }
      ]
    }
  },
  {
    "id": "dis-10-japanese-encephalitis-je-",
    "category": "Vector-Borne",
    "severity": "Emergency",
    "transmission": "Culex mosquito bite from pig/wading bird reservoirs",
    "en": {
      "name": "Japanese Encephalitis (JE)",
      "overview": "Detailed clinical guidance, prevention, and government health support in Odisha for Japanese Encephalitis (JE).",
      "symptoms": [
        "Primary localized pain, fever, or discomfort",
        "Fatigue and reduced physical stamina",
        "Loss of normal appetite and mild headache",
        "Associated diagnostic clinical signs specific to condition"
      ],
      "causes": [
        "Etiological factors and environmental exposure related to Japanese Encephalitis (JE)",
        "Unfavorable seasonal conditions or unhygienic community environment",
        "Nutritional or metabolic susceptibility factors"
      ],
      "treatments": [
        "Evidence-based pharmacotherapy prescribed by medical officer",
        "Adequate fluid intake, nutritious diet, and supportive care",
        "Free treatment and diagnostic screening available at Odisha CHCs and DHHs"
      ],
      "prevention": [
        "Maintain strict personal, domestic, and water hygiene",
        "Adhere to public health department guidelines and advisories",
        "Timely immunization and regular screening visits"
      ],
      "dos": [
        "Consult a qualified medical officer at early onset of symptoms",
        "Complete the prescribed medical regimen without skipping doses",
        "Maintain clean drinking water and well-balanced nutrition"
      ],
      "donts": [
        "Do not self-medicate or purchase unverified over-the-counter drugs",
        "Do not delay seeking medical care if red flag symptoms emerge",
        "Do not consume unhygienic or contaminated food and water"
      ],
      "whenToSeeDoctor": [
        "High continuous fever not responding to antipyretics",
        "Breathing difficulty, extreme fatigue, or fainting",
        "Inability to eat or drink oral fluids"
      ],
      "faqs": [
        {
          "question": "Is treatment for Japanese Encephalitis (JE) available free in Odisha?",
          "answer": "Yes, under Niramaya scheme and BSKY, free diagnostics and medicines are provided across Odisha government facilities."
        },
        {
          "question": "When should one visit the nearest hospital?",
          "answer": "Visit the hospital at first onset of severe symptoms or if home recovery is slow after 48 hours."
        }
      ]
    },
    "or": {
      "name": "ଜାପାନୀ ଏନସେଫାଲାଇଟିସ୍ (ମସ୍ତିଷ୍କ ଜ୍ୱର)",
      "nativeName": "ଜାପାନୀ ଏନସେଫାଲାଇଟିସ୍ (ମସ୍ତିଷ୍କ ଜ୍ୱର)",
      "overview": "ଓଡ଼ିଶାର ଜନସାଧାରଣଙ୍କ ପାଇଁ ଜାପାନୀ ଏନସେଫାଲାଇଟିସ୍ (ମସ୍ତିଷ୍କ ଜ୍ୱର) ର ଡାକ୍ତରୀ ମାର୍ଗଦର୍ଶନ, ପ୍ରତିରୋଧ ଓ ସରକାରୀ ସହାୟତା।",
      "symptoms": [
        "ସ୍ଥାନୀୟ ଯନ୍ତ୍ରଣା, ଜ୍ୱର ବା ଅସ୍ୱସ୍ତି ଭାବ",
        "ଦୁର୍ବଳତା ଏବଂ ଶରୀରରେ ଶକ୍ତିର ଅଭାବ",
        "ଭୋକ କମିବା ଏବଂ ମୁଣ୍ଡବିନ୍ଧା",
        "ରୋଗ ସମ୍ପର୍କିତ ସାଧାରଣ ଡାକ୍ତରୀ ଲକ୍ଷଣ"
      ],
      "causes": [
        "ଜାପାନୀ ଏନସେଫାଲାଇଟିସ୍ (ମସ୍ତିଷ୍କ ଜ୍ୱର) ସମ୍ପର୍କିତ ପରିବେଶ ଓ ଜୀବାଣୁଜନିତ କାରଣ",
        "ଋତୁକାଳୀନ ପ୍ରତିକୂଳ ପାଗ ବା ଅପରିଷ୍କାର ପରିବେଶ",
        "ପୁଷ୍ଟିହୀନତା ବା ରୋଗ ପ୍ରତିରୋଧକ ଶକ୍ତିର ଅଭାବ"
      ],
      "treatments": [
        "ଡାକ୍ତରଙ୍କ ପରାମର୍ଶ ଅନୁଯାୟୀ ପ୍ରମାଣିତ ଔଷଧ ସେବନ",
        "ପର୍ଯ୍ୟାପ୍ତ ପାଣି ପିଇବା, ପୁଷ୍ଟିକର ଖାଦ୍ୟ ଓ ବିଶ୍ରାମ",
        "ଓଡ଼ିଶା ସରକାରୀ ଡାକ୍ତରଖାନାରେ ମାଗଣା ଚିକିତ୍ସା ଓ ପରୀକ୍ଷା"
      ],
      "prevention": [
        "ବ୍ୟକ୍ତିଗତ ଓ ପରିବେଶ ପରିମଳ ସର୍ବଦା ବଜାୟ ରଖନ୍ତୁ",
        "ସ୍ୱାସ୍ଥ୍ୟ ବିଭାଗର ନିର୍ଦ୍ଦେଶାବଳୀ ପାଳନ କରନ୍ତୁ",
        "ସମୟ ଅନୁଯାୟୀ ଟିକାକରଣ ଓ ସ୍ୱାସ୍ଥ୍ୟ ଯାଞ୍ଚ କରାନ୍ତୁ"
      ],
      "dos": [
        "ଲକ୍ଷଣ ଦେଖାଦେବା ମାତ୍ରେ ଡାକ୍ତରଙ୍କ ସହ ପରାମର୍ଶ କରନ୍ତୁ",
        "ଡାକ୍ତର ଦେଇଥିବା ଔଷଧ କୋର୍ସ ସମ୍ପୂର୍ଣ୍ଣ ଶେଷ କରନ୍ତୁ",
        "ଫୁଟା ପାଣି ଓ ପୁଷ୍ଟିକର ଖାଦ୍ୟ ଖାଆନ୍ତୁ"
      ],
      "donts": [
        "ଡାକ୍ତରଙ୍କ ବିନା ପରାମର୍ଶରେ ମେଡିସିନ୍ ଦୋକାନରୁ ଔଷଧ ଖାଆନ୍ତୁ ନାହିଁ",
        "ଗୁରୁତର ଲକ୍ଷଣ ଥିଲେ ଡାକ୍ତରଖାନା ଯିବାରେ ଡେରି କରନ୍ତୁ ନାହିଁ",
        "ଅପରିଷ୍କାର ଓ ବାସି ଖାଦ୍ୟ ଖାଆନ୍ତୁ ନାହିଁ"
      ],
      "whenToSeeDoctor": [
        "ଲଗାତାର ତେଜ ଜ୍ୱର ଲାଗିରହିଲେ",
        "ନିଶ୍ୱାସ ନେବାରେ କଷ୍ଟ ହେଲେ ବା ଚେତା ହରାଇଲେ",
        "ପାଣି ପିଇ ନପାରିଲେ ବା ବାରମ୍ବାର ବାନ୍ତି ହେଲେ"
      ],
      "faqs": [
        {
          "question": "ଓଡ଼ିଶାରେ ଜାପାନୀ ଏନସେଫାଲାଇଟିସ୍ (ମସ୍ତିଷ୍କ ଜ୍ୱର) ର ଚିକିତ୍ସା ମାଗଣାରେ ମିଳେ କି?",
          "answer": "ହଁ, ନିରାମୟ ଯୋଜନା ଓ ବିଜୁ ସ୍ୱାସ୍ଥ୍ୟ କଲ୍ୟାଣ ଯୋଜନାରେ ସମସ୍ତ ସରକାରୀ ଡାକ୍ତରଖାନାରେ ମାଗଣା ପରୀକ୍ଷା ଓ ଔଷଧ ଉପଲବ୍ଧ।"
        },
        {
          "question": "କେବେ ଡାକ୍ତରଖାନା ଯିବା ଉଚିତ?",
          "answer": "ଗୁରୁତର ଲକ୍ଷଣ ଦେଖାଦେବା ମାତ୍ରେ ତୁରନ୍ତ ଡାକ୍ତରଖାନା ଯିବା ଉଚିତ।"
        }
      ]
    }
  },
  {
    "id": "dis-11-leptospirosis-paddy-flood-fever-",
    "category": "Infectious & Bacterial",
    "severity": "High",
    "transmission": "Contact with water/mud contaminated with rodent urine",
    "en": {
      "name": "Leptospirosis (Paddy Flood Fever)",
      "overview": "Detailed clinical guidance, prevention, and government health support in Odisha for Leptospirosis (Paddy Flood Fever).",
      "symptoms": [
        "Primary localized pain, fever, or discomfort",
        "Fatigue and reduced physical stamina",
        "Loss of normal appetite and mild headache",
        "Associated diagnostic clinical signs specific to condition"
      ],
      "causes": [
        "Etiological factors and environmental exposure related to Leptospirosis (Paddy Flood Fever)",
        "Unfavorable seasonal conditions or unhygienic community environment",
        "Nutritional or metabolic susceptibility factors"
      ],
      "treatments": [
        "Evidence-based pharmacotherapy prescribed by medical officer",
        "Adequate fluid intake, nutritious diet, and supportive care",
        "Free treatment and diagnostic screening available at Odisha CHCs and DHHs"
      ],
      "prevention": [
        "Maintain strict personal, domestic, and water hygiene",
        "Adhere to public health department guidelines and advisories",
        "Timely immunization and regular screening visits"
      ],
      "dos": [
        "Consult a qualified medical officer at early onset of symptoms",
        "Complete the prescribed medical regimen without skipping doses",
        "Maintain clean drinking water and well-balanced nutrition"
      ],
      "donts": [
        "Do not self-medicate or purchase unverified over-the-counter drugs",
        "Do not delay seeking medical care if red flag symptoms emerge",
        "Do not consume unhygienic or contaminated food and water"
      ],
      "whenToSeeDoctor": [
        "High continuous fever not responding to antipyretics",
        "Breathing difficulty, extreme fatigue, or fainting",
        "Inability to eat or drink oral fluids"
      ],
      "faqs": [
        {
          "question": "Is treatment for Leptospirosis (Paddy Flood Fever) available free in Odisha?",
          "answer": "Yes, under Niramaya scheme and BSKY, free diagnostics and medicines are provided across Odisha government facilities."
        },
        {
          "question": "When should one visit the nearest hospital?",
          "answer": "Visit the hospital at first onset of severe symptoms or if home recovery is slow after 48 hours."
        }
      ]
    },
    "or": {
      "name": "ଲେପ୍ଟୋସ୍ପାଇରୋସିସ୍ (ବାତଜ୍ୱର)",
      "nativeName": "ଲେପ୍ଟୋସ୍ପାଇରୋସିସ୍ (ବାତଜ୍ୱର)",
      "overview": "ଓଡ଼ିଶାର ଜନସାଧାରଣଙ୍କ ପାଇଁ ଲେପ୍ଟୋସ୍ପାଇରୋସିସ୍ (ବାତଜ୍ୱର) ର ଡାକ୍ତରୀ ମାର୍ଗଦର୍ଶନ, ପ୍ରତିରୋଧ ଓ ସରକାରୀ ସହାୟତା।",
      "symptoms": [
        "ସ୍ଥାନୀୟ ଯନ୍ତ୍ରଣା, ଜ୍ୱର ବା ଅସ୍ୱସ୍ତି ଭାବ",
        "ଦୁର୍ବଳତା ଏବଂ ଶରୀରରେ ଶକ୍ତିର ଅଭାବ",
        "ଭୋକ କମିବା ଏବଂ ମୁଣ୍ଡବିନ୍ଧା",
        "ରୋଗ ସମ୍ପର୍କିତ ସାଧାରଣ ଡାକ୍ତରୀ ଲକ୍ଷଣ"
      ],
      "causes": [
        "ଲେପ୍ଟୋସ୍ପାଇରୋସିସ୍ (ବାତଜ୍ୱର) ସମ୍ପର୍କିତ ପରିବେଶ ଓ ଜୀବାଣୁଜନିତ କାରଣ",
        "ଋତୁକାଳୀନ ପ୍ରତିକୂଳ ପାଗ ବା ଅପରିଷ୍କାର ପରିବେଶ",
        "ପୁଷ୍ଟିହୀନତା ବା ରୋଗ ପ୍ରତିରୋଧକ ଶକ୍ତିର ଅଭାବ"
      ],
      "treatments": [
        "ଡାକ୍ତରଙ୍କ ପରାମର୍ଶ ଅନୁଯାୟୀ ପ୍ରମାଣିତ ଔଷଧ ସେବନ",
        "ପର୍ଯ୍ୟାପ୍ତ ପାଣି ପିଇବା, ପୁଷ୍ଟିକର ଖାଦ୍ୟ ଓ ବିଶ୍ରାମ",
        "ଓଡ଼ିଶା ସରକାରୀ ଡାକ୍ତରଖାନାରେ ମାଗଣା ଚିକିତ୍ସା ଓ ପରୀକ୍ଷା"
      ],
      "prevention": [
        "ବ୍ୟକ୍ତିଗତ ଓ ପରିବେଶ ପରିମଳ ସର୍ବଦା ବଜାୟ ରଖନ୍ତୁ",
        "ସ୍ୱାସ୍ଥ୍ୟ ବିଭାଗର ନିର୍ଦ୍ଦେଶାବଳୀ ପାଳନ କରନ୍ତୁ",
        "ସମୟ ଅନୁଯାୟୀ ଟିକାକରଣ ଓ ସ୍ୱାସ୍ଥ୍ୟ ଯାଞ୍ଚ କରାନ୍ତୁ"
      ],
      "dos": [
        "ଲକ୍ଷଣ ଦେଖାଦେବା ମାତ୍ରେ ଡାକ୍ତରଙ୍କ ସହ ପରାମର୍ଶ କରନ୍ତୁ",
        "ଡାକ୍ତର ଦେଇଥିବା ଔଷଧ କୋର୍ସ ସମ୍ପୂର୍ଣ୍ଣ ଶେଷ କରନ୍ତୁ",
        "ଫୁଟା ପାଣି ଓ ପୁଷ୍ଟିକର ଖାଦ୍ୟ ଖାଆନ୍ତୁ"
      ],
      "donts": [
        "ଡାକ୍ତରଙ୍କ ବିନା ପରାମର୍ଶରେ ମେଡିସିନ୍ ଦୋକାନରୁ ଔଷଧ ଖାଆନ୍ତୁ ନାହିଁ",
        "ଗୁରୁତର ଲକ୍ଷଣ ଥିଲେ ଡାକ୍ତରଖାନା ଯିବାରେ ଡେରି କରନ୍ତୁ ନାହିଁ",
        "ଅପରିଷ୍କାର ଓ ବାସି ଖାଦ୍ୟ ଖାଆନ୍ତୁ ନାହିଁ"
      ],
      "whenToSeeDoctor": [
        "ଲଗାତାର ତେଜ ଜ୍ୱର ଲାଗିରହିଲେ",
        "ନିଶ୍ୱାସ ନେବାରେ କଷ୍ଟ ହେଲେ ବା ଚେତା ହରାଇଲେ",
        "ପାଣି ପିଇ ନପାରିଲେ ବା ବାରମ୍ବାର ବାନ୍ତି ହେଲେ"
      ],
      "faqs": [
        {
          "question": "ଓଡ଼ିଶାରେ ଲେପ୍ଟୋସ୍ପାଇରୋସିସ୍ (ବାତଜ୍ୱର) ର ଚିକିତ୍ସା ମାଗଣାରେ ମିଳେ କି?",
          "answer": "ହଁ, ନିରାମୟ ଯୋଜନା ଓ ବିଜୁ ସ୍ୱାସ୍ଥ୍ୟ କଲ୍ୟାଣ ଯୋଜନାରେ ସମସ୍ତ ସରକାରୀ ଡାକ୍ତରଖାନାରେ ମାଗଣା ପରୀକ୍ଷା ଓ ଔଷଧ ଉପଲବ୍ଧ।"
        },
        {
          "question": "କେବେ ଡାକ୍ତରଖାନା ଯିବା ଉଚିତ?",
          "answer": "ଗୁରୁତର ଲକ୍ଷଣ ଦେଖାଦେବା ମାତ୍ରେ ତୁରନ୍ତ ଡାକ୍ତରଖାନା ଯିବା ଉଚିତ।"
        }
      ]
    }
  },
  {
    "id": "dis-12-leprosy-hansen-s-disease-kustha-roga-",
    "category": "Infectious & Bacterial",
    "severity": "Moderate",
    "transmission": "Prolonged close droplet contact",
    "en": {
      "name": "Leprosy (Hansen's Disease / Kustha Roga)",
      "overview": "Detailed clinical guidance, prevention, and government health support in Odisha for Leprosy (Hansen's Disease / Kustha Roga).",
      "symptoms": [
        "Primary localized pain, fever, or discomfort",
        "Fatigue and reduced physical stamina",
        "Loss of normal appetite and mild headache",
        "Associated diagnostic clinical signs specific to condition"
      ],
      "causes": [
        "Etiological factors and environmental exposure related to Leprosy (Hansen's Disease / Kustha Roga)",
        "Unfavorable seasonal conditions or unhygienic community environment",
        "Nutritional or metabolic susceptibility factors"
      ],
      "treatments": [
        "Evidence-based pharmacotherapy prescribed by medical officer",
        "Adequate fluid intake, nutritious diet, and supportive care",
        "Free treatment and diagnostic screening available at Odisha CHCs and DHHs"
      ],
      "prevention": [
        "Maintain strict personal, domestic, and water hygiene",
        "Adhere to public health department guidelines and advisories",
        "Timely immunization and regular screening visits"
      ],
      "dos": [
        "Consult a qualified medical officer at early onset of symptoms",
        "Complete the prescribed medical regimen without skipping doses",
        "Maintain clean drinking water and well-balanced nutrition"
      ],
      "donts": [
        "Do not self-medicate or purchase unverified over-the-counter drugs",
        "Do not delay seeking medical care if red flag symptoms emerge",
        "Do not consume unhygienic or contaminated food and water"
      ],
      "whenToSeeDoctor": [
        "High continuous fever not responding to antipyretics",
        "Breathing difficulty, extreme fatigue, or fainting",
        "Inability to eat or drink oral fluids"
      ],
      "faqs": [
        {
          "question": "Is treatment for Leprosy (Hansen's Disease / Kustha Roga) available free in Odisha?",
          "answer": "Yes, under Niramaya scheme and BSKY, free diagnostics and medicines are provided across Odisha government facilities."
        },
        {
          "question": "When should one visit the nearest hospital?",
          "answer": "Visit the hospital at first onset of severe symptoms or if home recovery is slow after 48 hours."
        }
      ]
    },
    "or": {
      "name": "କୁଷ୍ଠ ରୋଗ (ହାନ୍ସେନସ୍ ଡିଜିଜ୍)",
      "nativeName": "କୁଷ୍ଠ ରୋଗ (ହାନ୍ସେନସ୍ ଡିଜିଜ୍)",
      "overview": "ଓଡ଼ିଶାର ଜନସାଧାରଣଙ୍କ ପାଇଁ କୁଷ୍ଠ ରୋଗ (ହାନ୍ସେନସ୍ ଡିଜିଜ୍) ର ଡାକ୍ତରୀ ମାର୍ଗଦର୍ଶନ, ପ୍ରତିରୋଧ ଓ ସରକାରୀ ସହାୟତା।",
      "symptoms": [
        "ସ୍ଥାନୀୟ ଯନ୍ତ୍ରଣା, ଜ୍ୱର ବା ଅସ୍ୱସ୍ତି ଭାବ",
        "ଦୁର୍ବଳତା ଏବଂ ଶରୀରରେ ଶକ୍ତିର ଅଭାବ",
        "ଭୋକ କମିବା ଏବଂ ମୁଣ୍ଡବିନ୍ଧା",
        "ରୋଗ ସମ୍ପର୍କିତ ସାଧାରଣ ଡାକ୍ତରୀ ଲକ୍ଷଣ"
      ],
      "causes": [
        "କୁଷ୍ଠ ରୋଗ (ହାନ୍ସେନସ୍ ଡିଜିଜ୍) ସମ୍ପର୍କିତ ପରିବେଶ ଓ ଜୀବାଣୁଜନିତ କାରଣ",
        "ଋତୁକାଳୀନ ପ୍ରତିକୂଳ ପାଗ ବା ଅପରିଷ୍କାର ପରିବେଶ",
        "ପୁଷ୍ଟିହୀନତା ବା ରୋଗ ପ୍ରତିରୋଧକ ଶକ୍ତିର ଅଭାବ"
      ],
      "treatments": [
        "ଡାକ୍ତରଙ୍କ ପରାମର୍ଶ ଅନୁଯାୟୀ ପ୍ରମାଣିତ ଔଷଧ ସେବନ",
        "ପର୍ଯ୍ୟାପ୍ତ ପାଣି ପିଇବା, ପୁଷ୍ଟିକର ଖାଦ୍ୟ ଓ ବିଶ୍ରାମ",
        "ଓଡ଼ିଶା ସରକାରୀ ଡାକ୍ତରଖାନାରେ ମାଗଣା ଚିକିତ୍ସା ଓ ପରୀକ୍ଷା"
      ],
      "prevention": [
        "ବ୍ୟକ୍ତିଗତ ଓ ପରିବେଶ ପରିମଳ ସର୍ବଦା ବଜାୟ ରଖନ୍ତୁ",
        "ସ୍ୱାସ୍ଥ୍ୟ ବିଭାଗର ନିର୍ଦ୍ଦେଶାବଳୀ ପାଳନ କରନ୍ତୁ",
        "ସମୟ ଅନୁଯାୟୀ ଟିକାକରଣ ଓ ସ୍ୱାସ୍ଥ୍ୟ ଯାଞ୍ଚ କରାନ୍ତୁ"
      ],
      "dos": [
        "ଲକ୍ଷଣ ଦେଖାଦେବା ମାତ୍ରେ ଡାକ୍ତରଙ୍କ ସହ ପରାମର୍ଶ କରନ୍ତୁ",
        "ଡାକ୍ତର ଦେଇଥିବା ଔଷଧ କୋର୍ସ ସମ୍ପୂର୍ଣ୍ଣ ଶେଷ କରନ୍ତୁ",
        "ଫୁଟା ପାଣି ଓ ପୁଷ୍ଟିକର ଖାଦ୍ୟ ଖାଆନ୍ତୁ"
      ],
      "donts": [
        "ଡାକ୍ତରଙ୍କ ବିନା ପରାମର୍ଶରେ ମେଡିସିନ୍ ଦୋକାନରୁ ଔଷଧ ଖାଆନ୍ତୁ ନାହିଁ",
        "ଗୁରୁତର ଲକ୍ଷଣ ଥିଲେ ଡାକ୍ତରଖାନା ଯିବାରେ ଡେରି କରନ୍ତୁ ନାହିଁ",
        "ଅପରିଷ୍କାର ଓ ବାସି ଖାଦ୍ୟ ଖାଆନ୍ତୁ ନାହିଁ"
      ],
      "whenToSeeDoctor": [
        "ଲଗାତାର ତେଜ ଜ୍ୱର ଲାଗିରହିଲେ",
        "ନିଶ୍ୱାସ ନେବାରେ କଷ୍ଟ ହେଲେ ବା ଚେତା ହରାଇଲେ",
        "ପାଣି ପିଇ ନପାରିଲେ ବା ବାରମ୍ବାର ବାନ୍ତି ହେଲେ"
      ],
      "faqs": [
        {
          "question": "ଓଡ଼ିଶାରେ କୁଷ୍ଠ ରୋଗ (ହାନ୍ସେନସ୍ ଡିଜିଜ୍) ର ଚିକିତ୍ସା ମାଗଣାରେ ମିଳେ କି?",
          "answer": "ହଁ, ନିରାମୟ ଯୋଜନା ଓ ବିଜୁ ସ୍ୱାସ୍ଥ୍ୟ କଲ୍ୟାଣ ଯୋଜନାରେ ସମସ୍ତ ସରକାରୀ ଡାକ୍ତରଖାନାରେ ମାଗଣା ପରୀକ୍ଷା ଓ ଔଷଧ ଉପଲବ୍ଧ।"
        },
        {
          "question": "କେବେ ଡାକ୍ତରଖାନା ଯିବା ଉଚିତ?",
          "answer": "ଗୁରୁତର ଲକ୍ଷଣ ଦେଖାଦେବା ମାତ୍ରେ ତୁରନ୍ତ ଡାକ୍ତରଖାନା ଯିବା ଉଚିତ।"
        }
      ]
    }
  },
  {
    "id": "dis-13-rabies-dog-bite-prophylaxis",
    "category": "Emergency",
    "severity": "Emergency",
    "transmission": "Saliva of rabid dog, monkey, or jackal via bite/scratch",
    "en": {
      "name": "Rabies & Dog Bite Prophylaxis",
      "overview": "Detailed clinical guidance, prevention, and government health support in Odisha for Rabies & Dog Bite Prophylaxis.",
      "symptoms": [
        "Primary localized pain, fever, or discomfort",
        "Fatigue and reduced physical stamina",
        "Loss of normal appetite and mild headache",
        "Associated diagnostic clinical signs specific to condition"
      ],
      "causes": [
        "Etiological factors and environmental exposure related to Rabies & Dog Bite Prophylaxis",
        "Unfavorable seasonal conditions or unhygienic community environment",
        "Nutritional or metabolic susceptibility factors"
      ],
      "treatments": [
        "Evidence-based pharmacotherapy prescribed by medical officer",
        "Adequate fluid intake, nutritious diet, and supportive care",
        "Free treatment and diagnostic screening available at Odisha CHCs and DHHs"
      ],
      "prevention": [
        "Maintain strict personal, domestic, and water hygiene",
        "Adhere to public health department guidelines and advisories",
        "Timely immunization and regular screening visits"
      ],
      "dos": [
        "Consult a qualified medical officer at early onset of symptoms",
        "Complete the prescribed medical regimen without skipping doses",
        "Maintain clean drinking water and well-balanced nutrition"
      ],
      "donts": [
        "Do not self-medicate or purchase unverified over-the-counter drugs",
        "Do not delay seeking medical care if red flag symptoms emerge",
        "Do not consume unhygienic or contaminated food and water"
      ],
      "whenToSeeDoctor": [
        "High continuous fever not responding to antipyretics",
        "Breathing difficulty, extreme fatigue, or fainting",
        "Inability to eat or drink oral fluids"
      ],
      "faqs": [
        {
          "question": "Is treatment for Rabies & Dog Bite Prophylaxis available free in Odisha?",
          "answer": "Yes, under Niramaya scheme and BSKY, free diagnostics and medicines are provided across Odisha government facilities."
        },
        {
          "question": "When should one visit the nearest hospital?",
          "answer": "Visit the hospital at first onset of severe symptoms or if home recovery is slow after 48 hours."
        }
      ]
    },
    "or": {
      "name": "ଜଳାତଙ୍କ (କୁକୁର କାମୁଡ଼ା / ରାବିସ୍)",
      "nativeName": "ଜଳାତଙ୍କ (କୁକୁର କାମୁଡ଼ା / ରାବିସ୍)",
      "overview": "ଓଡ଼ିଶାର ଜନସାଧାରଣଙ୍କ ପାଇଁ ଜଳାତଙ୍କ (କୁକୁର କାମୁଡ଼ା / ରାବିସ୍) ର ଡାକ୍ତରୀ ମାର୍ଗଦର୍ଶନ, ପ୍ରତିରୋଧ ଓ ସରକାରୀ ସହାୟତା।",
      "symptoms": [
        "ସ୍ଥାନୀୟ ଯନ୍ତ୍ରଣା, ଜ୍ୱର ବା ଅସ୍ୱସ୍ତି ଭାବ",
        "ଦୁର୍ବଳତା ଏବଂ ଶରୀରରେ ଶକ୍ତିର ଅଭାବ",
        "ଭୋକ କମିବା ଏବଂ ମୁଣ୍ଡବିନ୍ଧା",
        "ରୋଗ ସମ୍ପର୍କିତ ସାଧାରଣ ଡାକ୍ତରୀ ଲକ୍ଷଣ"
      ],
      "causes": [
        "ଜଳାତଙ୍କ (କୁକୁର କାମୁଡ଼ା / ରାବିସ୍) ସମ୍ପର୍କିତ ପରିବେଶ ଓ ଜୀବାଣୁଜନିତ କାରଣ",
        "ଋତୁକାଳୀନ ପ୍ରତିକୂଳ ପାଗ ବା ଅପରିଷ୍କାର ପରିବେଶ",
        "ପୁଷ୍ଟିହୀନତା ବା ରୋଗ ପ୍ରତିରୋଧକ ଶକ୍ତିର ଅଭାବ"
      ],
      "treatments": [
        "ଡାକ୍ତରଙ୍କ ପରାମର୍ଶ ଅନୁଯାୟୀ ପ୍ରମାଣିତ ଔଷଧ ସେବନ",
        "ପର୍ଯ୍ୟାପ୍ତ ପାଣି ପିଇବା, ପୁଷ୍ଟିକର ଖାଦ୍ୟ ଓ ବିଶ୍ରାମ",
        "ଓଡ଼ିଶା ସରକାରୀ ଡାକ୍ତରଖାନାରେ ମାଗଣା ଚିକିତ୍ସା ଓ ପରୀକ୍ଷା"
      ],
      "prevention": [
        "ବ୍ୟକ୍ତିଗତ ଓ ପରିବେଶ ପରିମଳ ସର୍ବଦା ବଜାୟ ରଖନ୍ତୁ",
        "ସ୍ୱାସ୍ଥ୍ୟ ବିଭାଗର ନିର୍ଦ୍ଦେଶାବଳୀ ପାଳନ କରନ୍ତୁ",
        "ସମୟ ଅନୁଯାୟୀ ଟିକାକରଣ ଓ ସ୍ୱାସ୍ଥ୍ୟ ଯାଞ୍ଚ କରାନ୍ତୁ"
      ],
      "dos": [
        "ଲକ୍ଷଣ ଦେଖାଦେବା ମାତ୍ରେ ଡାକ୍ତରଙ୍କ ସହ ପରାମର୍ଶ କରନ୍ତୁ",
        "ଡାକ୍ତର ଦେଇଥିବା ଔଷଧ କୋର୍ସ ସମ୍ପୂର୍ଣ୍ଣ ଶେଷ କରନ୍ତୁ",
        "ଫୁଟା ପାଣି ଓ ପୁଷ୍ଟିକର ଖାଦ୍ୟ ଖାଆନ୍ତୁ"
      ],
      "donts": [
        "ଡାକ୍ତରଙ୍କ ବିନା ପରାମର୍ଶରେ ମେଡିସିନ୍ ଦୋକାନରୁ ଔଷଧ ଖାଆନ୍ତୁ ନାହିଁ",
        "ଗୁରୁତର ଲକ୍ଷଣ ଥିଲେ ଡାକ୍ତରଖାନା ଯିବାରେ ଡେରି କରନ୍ତୁ ନାହିଁ",
        "ଅପରିଷ୍କାର ଓ ବାସି ଖାଦ୍ୟ ଖାଆନ୍ତୁ ନାହିଁ"
      ],
      "whenToSeeDoctor": [
        "ଲଗାତାର ତେଜ ଜ୍ୱର ଲାଗିରହିଲେ",
        "ନିଶ୍ୱାସ ନେବାରେ କଷ୍ଟ ହେଲେ ବା ଚେତା ହରାଇଲେ",
        "ପାଣି ପିଇ ନପାରିଲେ ବା ବାରମ୍ବାର ବାନ୍ତି ହେଲେ"
      ],
      "faqs": [
        {
          "question": "ଓଡ଼ିଶାରେ ଜଳାତଙ୍କ (କୁକୁର କାମୁଡ଼ା / ରାବିସ୍) ର ଚିକିତ୍ସା ମାଗଣାରେ ମିଳେ କି?",
          "answer": "ହଁ, ନିରାମୟ ଯୋଜନା ଓ ବିଜୁ ସ୍ୱାସ୍ଥ୍ୟ କଲ୍ୟାଣ ଯୋଜନାରେ ସମସ୍ତ ସରକାରୀ ଡାକ୍ତରଖାନାରେ ମାଗଣା ପରୀକ୍ଷା ଓ ଔଷଧ ଉପଲବ୍ଧ।"
        },
        {
          "question": "କେବେ ଡାକ୍ତରଖାନା ଯିବା ଉଚିତ?",
          "answer": "ଗୁରୁତର ଲକ୍ଷଣ ଦେଖାଦେବା ମାତ୍ରେ ତୁରନ୍ତ ଡାକ୍ତରଖାନା ଯିବା ଉଚିତ।"
        }
      ]
    }
  },
  {
    "id": "dis-14-tetanus-dhanustankara-lockjaw-",
    "category": "Emergency",
    "severity": "Emergency",
    "transmission": "Clostridium tetani spores entering rusty wounds or soil contamination",
    "en": {
      "name": "Tetanus (Dhanustankara / Lockjaw)",
      "overview": "Detailed clinical guidance, prevention, and government health support in Odisha for Tetanus (Dhanustankara / Lockjaw).",
      "symptoms": [
        "Primary localized pain, fever, or discomfort",
        "Fatigue and reduced physical stamina",
        "Loss of normal appetite and mild headache",
        "Associated diagnostic clinical signs specific to condition"
      ],
      "causes": [
        "Etiological factors and environmental exposure related to Tetanus (Dhanustankara / Lockjaw)",
        "Unfavorable seasonal conditions or unhygienic community environment",
        "Nutritional or metabolic susceptibility factors"
      ],
      "treatments": [
        "Evidence-based pharmacotherapy prescribed by medical officer",
        "Adequate fluid intake, nutritious diet, and supportive care",
        "Free treatment and diagnostic screening available at Odisha CHCs and DHHs"
      ],
      "prevention": [
        "Maintain strict personal, domestic, and water hygiene",
        "Adhere to public health department guidelines and advisories",
        "Timely immunization and regular screening visits"
      ],
      "dos": [
        "Consult a qualified medical officer at early onset of symptoms",
        "Complete the prescribed medical regimen without skipping doses",
        "Maintain clean drinking water and well-balanced nutrition"
      ],
      "donts": [
        "Do not self-medicate or purchase unverified over-the-counter drugs",
        "Do not delay seeking medical care if red flag symptoms emerge",
        "Do not consume unhygienic or contaminated food and water"
      ],
      "whenToSeeDoctor": [
        "High continuous fever not responding to antipyretics",
        "Breathing difficulty, extreme fatigue, or fainting",
        "Inability to eat or drink oral fluids"
      ],
      "faqs": [
        {
          "question": "Is treatment for Tetanus (Dhanustankara / Lockjaw) available free in Odisha?",
          "answer": "Yes, under Niramaya scheme and BSKY, free diagnostics and medicines are provided across Odisha government facilities."
        },
        {
          "question": "When should one visit the nearest hospital?",
          "answer": "Visit the hospital at first onset of severe symptoms or if home recovery is slow after 48 hours."
        }
      ]
    },
    "or": {
      "name": "ଧନୁଷ୍ଟଙ୍କାର (ଟିଟାନସ୍)",
      "nativeName": "ଧନୁଷ୍ଟଙ୍କାର (ଟିଟାନସ୍)",
      "overview": "ଓଡ଼ିଶାର ଜନସାଧାରଣଙ୍କ ପାଇଁ ଧନୁଷ୍ଟଙ୍କାର (ଟିଟାନସ୍) ର ଡାକ୍ତରୀ ମାର୍ଗଦର୍ଶନ, ପ୍ରତିରୋଧ ଓ ସରକାରୀ ସହାୟତା।",
      "symptoms": [
        "ସ୍ଥାନୀୟ ଯନ୍ତ୍ରଣା, ଜ୍ୱର ବା ଅସ୍ୱସ୍ତି ଭାବ",
        "ଦୁର୍ବଳତା ଏବଂ ଶରୀରରେ ଶକ୍ତିର ଅଭାବ",
        "ଭୋକ କମିବା ଏବଂ ମୁଣ୍ଡବିନ୍ଧା",
        "ରୋଗ ସମ୍ପର୍କିତ ସାଧାରଣ ଡାକ୍ତରୀ ଲକ୍ଷଣ"
      ],
      "causes": [
        "ଧନୁଷ୍ଟଙ୍କାର (ଟିଟାନସ୍) ସମ୍ପର୍କିତ ପରିବେଶ ଓ ଜୀବାଣୁଜନିତ କାରଣ",
        "ଋତୁକାଳୀନ ପ୍ରତିକୂଳ ପାଗ ବା ଅପରିଷ୍କାର ପରିବେଶ",
        "ପୁଷ୍ଟିହୀନତା ବା ରୋଗ ପ୍ରତିରୋଧକ ଶକ୍ତିର ଅଭାବ"
      ],
      "treatments": [
        "ଡାକ୍ତରଙ୍କ ପରାମର୍ଶ ଅନୁଯାୟୀ ପ୍ରମାଣିତ ଔଷଧ ସେବନ",
        "ପର୍ଯ୍ୟାପ୍ତ ପାଣି ପିଇବା, ପୁଷ୍ଟିକର ଖାଦ୍ୟ ଓ ବିଶ୍ରାମ",
        "ଓଡ଼ିଶା ସରକାରୀ ଡାକ୍ତରଖାନାରେ ମାଗଣା ଚିକିତ୍ସା ଓ ପରୀକ୍ଷା"
      ],
      "prevention": [
        "ବ୍ୟକ୍ତିଗତ ଓ ପରିବେଶ ପରିମଳ ସର୍ବଦା ବଜାୟ ରଖନ୍ତୁ",
        "ସ୍ୱାସ୍ଥ୍ୟ ବିଭାଗର ନିର୍ଦ୍ଦେଶାବଳୀ ପାଳନ କରନ୍ତୁ",
        "ସମୟ ଅନୁଯାୟୀ ଟିକାକରଣ ଓ ସ୍ୱାସ୍ଥ୍ୟ ଯାଞ୍ଚ କରାନ୍ତୁ"
      ],
      "dos": [
        "ଲକ୍ଷଣ ଦେଖାଦେବା ମାତ୍ରେ ଡାକ୍ତରଙ୍କ ସହ ପରାମର୍ଶ କରନ୍ତୁ",
        "ଡାକ୍ତର ଦେଇଥିବା ଔଷଧ କୋର୍ସ ସମ୍ପୂର୍ଣ୍ଣ ଶେଷ କରନ୍ତୁ",
        "ଫୁଟା ପାଣି ଓ ପୁଷ୍ଟିକର ଖାଦ୍ୟ ଖାଆନ୍ତୁ"
      ],
      "donts": [
        "ଡାକ୍ତରଙ୍କ ବିନା ପରାମର୍ଶରେ ମେଡିସିନ୍ ଦୋକାନରୁ ଔଷଧ ଖାଆନ୍ତୁ ନାହିଁ",
        "ଗୁରୁତର ଲକ୍ଷଣ ଥିଲେ ଡାକ୍ତରଖାନା ଯିବାରେ ଡେରି କରନ୍ତୁ ନାହିଁ",
        "ଅପରିଷ୍କାର ଓ ବାସି ଖାଦ୍ୟ ଖାଆନ୍ତୁ ନାହିଁ"
      ],
      "whenToSeeDoctor": [
        "ଲଗାତାର ତେଜ ଜ୍ୱର ଲାଗିରହିଲେ",
        "ନିଶ୍ୱାସ ନେବାରେ କଷ୍ଟ ହେଲେ ବା ଚେତା ହରାଇଲେ",
        "ପାଣି ପିଇ ନପାରିଲେ ବା ବାରମ୍ବାର ବାନ୍ତି ହେଲେ"
      ],
      "faqs": [
        {
          "question": "ଓଡ଼ିଶାରେ ଧନୁଷ୍ଟଙ୍କାର (ଟିଟାନସ୍) ର ଚିକିତ୍ସା ମାଗଣାରେ ମିଳେ କି?",
          "answer": "ହଁ, ନିରାମୟ ଯୋଜନା ଓ ବିଜୁ ସ୍ୱାସ୍ଥ୍ୟ କଲ୍ୟାଣ ଯୋଜନାରେ ସମସ୍ତ ସରକାରୀ ଡାକ୍ତରଖାନାରେ ମାଗଣା ପରୀକ୍ଷା ଓ ଔଷଧ ଉପଲବ୍ଧ।"
        },
        {
          "question": "କେବେ ଡାକ୍ତରଖାନା ଯିବା ଉଚିତ?",
          "answer": "ଗୁରୁତର ଲକ୍ଷଣ ଦେଖାଦେବା ମାତ୍ରେ ତୁରନ୍ତ ଡାକ୍ତରଖାନା ଯିବା ଉଚିତ।"
        }
      ]
    }
  },
  {
    "id": "dis-15-typhoid-fever-madiakhiya-jwara-",
    "category": "Waterborne & Gastro",
    "severity": "High",
    "transmission": "Contaminated food and drinking water",
    "en": {
      "name": "Typhoid Fever (Madiakhiya Jwara)",
      "overview": "Detailed clinical guidance, prevention, and government health support in Odisha for Typhoid Fever (Madiakhiya Jwara).",
      "symptoms": [
        "Primary localized pain, fever, or discomfort",
        "Fatigue and reduced physical stamina",
        "Loss of normal appetite and mild headache",
        "Associated diagnostic clinical signs specific to condition"
      ],
      "causes": [
        "Etiological factors and environmental exposure related to Typhoid Fever (Madiakhiya Jwara)",
        "Unfavorable seasonal conditions or unhygienic community environment",
        "Nutritional or metabolic susceptibility factors"
      ],
      "treatments": [
        "Evidence-based pharmacotherapy prescribed by medical officer",
        "Adequate fluid intake, nutritious diet, and supportive care",
        "Free treatment and diagnostic screening available at Odisha CHCs and DHHs"
      ],
      "prevention": [
        "Maintain strict personal, domestic, and water hygiene",
        "Adhere to public health department guidelines and advisories",
        "Timely immunization and regular screening visits"
      ],
      "dos": [
        "Consult a qualified medical officer at early onset of symptoms",
        "Complete the prescribed medical regimen without skipping doses",
        "Maintain clean drinking water and well-balanced nutrition"
      ],
      "donts": [
        "Do not self-medicate or purchase unverified over-the-counter drugs",
        "Do not delay seeking medical care if red flag symptoms emerge",
        "Do not consume unhygienic or contaminated food and water"
      ],
      "whenToSeeDoctor": [
        "High continuous fever not responding to antipyretics",
        "Breathing difficulty, extreme fatigue, or fainting",
        "Inability to eat or drink oral fluids"
      ],
      "faqs": [
        {
          "question": "Is treatment for Typhoid Fever (Madiakhiya Jwara) available free in Odisha?",
          "answer": "Yes, under Niramaya scheme and BSKY, free diagnostics and medicines are provided across Odisha government facilities."
        },
        {
          "question": "When should one visit the nearest hospital?",
          "answer": "Visit the hospital at first onset of severe symptoms or if home recovery is slow after 48 hours."
        }
      ]
    },
    "or": {
      "name": "ଟାଇଫଏଡ୍ ଜ୍ୱର (ମାଦିଆଖିଆ ଜ୍ୱର)",
      "nativeName": "ଟାଇଫଏଡ୍ ଜ୍ୱର (ମାଦିଆଖିଆ ଜ୍ୱର)",
      "overview": "ଓଡ଼ିଶାର ଜନସାଧାରଣଙ୍କ ପାଇଁ ଟାଇଫଏଡ୍ ଜ୍ୱର (ମାଦିଆଖିଆ ଜ୍ୱର) ର ଡାକ୍ତରୀ ମାର୍ଗଦର୍ଶନ, ପ୍ରତିରୋଧ ଓ ସରକାରୀ ସହାୟତା।",
      "symptoms": [
        "ସ୍ଥାନୀୟ ଯନ୍ତ୍ରଣା, ଜ୍ୱର ବା ଅସ୍ୱସ୍ତି ଭାବ",
        "ଦୁର୍ବଳତା ଏବଂ ଶରୀରରେ ଶକ୍ତିର ଅଭାବ",
        "ଭୋକ କମିବା ଏବଂ ମୁଣ୍ଡବିନ୍ଧା",
        "ରୋଗ ସମ୍ପର୍କିତ ସାଧାରଣ ଡାକ୍ତରୀ ଲକ୍ଷଣ"
      ],
      "causes": [
        "ଟାଇଫଏଡ୍ ଜ୍ୱର (ମାଦିଆଖିଆ ଜ୍ୱର) ସମ୍ପର୍କିତ ପରିବେଶ ଓ ଜୀବାଣୁଜନିତ କାରଣ",
        "ଋତୁକାଳୀନ ପ୍ରତିକୂଳ ପାଗ ବା ଅପରିଷ୍କାର ପରିବେଶ",
        "ପୁଷ୍ଟିହୀନତା ବା ରୋଗ ପ୍ରତିରୋଧକ ଶକ୍ତିର ଅଭାବ"
      ],
      "treatments": [
        "ଡାକ୍ତରଙ୍କ ପରାମର୍ଶ ଅନୁଯାୟୀ ପ୍ରମାଣିତ ଔଷଧ ସେବନ",
        "ପର୍ଯ୍ୟାପ୍ତ ପାଣି ପିଇବା, ପୁଷ୍ଟିକର ଖାଦ୍ୟ ଓ ବିଶ୍ରାମ",
        "ଓଡ଼ିଶା ସରକାରୀ ଡାକ୍ତରଖାନାରେ ମାଗଣା ଚିକିତ୍ସା ଓ ପରୀକ୍ଷା"
      ],
      "prevention": [
        "ବ୍ୟକ୍ତିଗତ ଓ ପରିବେଶ ପରିମଳ ସର୍ବଦା ବଜାୟ ରଖନ୍ତୁ",
        "ସ୍ୱାସ୍ଥ୍ୟ ବିଭାଗର ନିର୍ଦ୍ଦେଶାବଳୀ ପାଳନ କରନ୍ତୁ",
        "ସମୟ ଅନୁଯାୟୀ ଟିକାକରଣ ଓ ସ୍ୱାସ୍ଥ୍ୟ ଯାଞ୍ଚ କରାନ୍ତୁ"
      ],
      "dos": [
        "ଲକ୍ଷଣ ଦେଖାଦେବା ମାତ୍ରେ ଡାକ୍ତରଙ୍କ ସହ ପରାମର୍ଶ କରନ୍ତୁ",
        "ଡାକ୍ତର ଦେଇଥିବା ଔଷଧ କୋର୍ସ ସମ୍ପୂର୍ଣ୍ଣ ଶେଷ କରନ୍ତୁ",
        "ଫୁଟା ପାଣି ଓ ପୁଷ୍ଟିକର ଖାଦ୍ୟ ଖାଆନ୍ତୁ"
      ],
      "donts": [
        "ଡାକ୍ତରଙ୍କ ବିନା ପରାମର୍ଶରେ ମେଡିସିନ୍ ଦୋକାନରୁ ଔଷଧ ଖାଆନ୍ତୁ ନାହିଁ",
        "ଗୁରୁତର ଲକ୍ଷଣ ଥିଲେ ଡାକ୍ତରଖାନା ଯିବାରେ ଡେରି କରନ୍ତୁ ନାହିଁ",
        "ଅପରିଷ୍କାର ଓ ବାସି ଖାଦ୍ୟ ଖାଆନ୍ତୁ ନାହିଁ"
      ],
      "whenToSeeDoctor": [
        "ଲଗାତାର ତେଜ ଜ୍ୱର ଲାଗିରହିଲେ",
        "ନିଶ୍ୱାସ ନେବାରେ କଷ୍ଟ ହେଲେ ବା ଚେତା ହରାଇଲେ",
        "ପାଣି ପିଇ ନପାରିଲେ ବା ବାରମ୍ବାର ବାନ୍ତି ହେଲେ"
      ],
      "faqs": [
        {
          "question": "ଓଡ଼ିଶାରେ ଟାଇଫଏଡ୍ ଜ୍ୱର (ମାଦିଆଖିଆ ଜ୍ୱର) ର ଚିକିତ୍ସା ମାଗଣାରେ ମିଳେ କି?",
          "answer": "ହଁ, ନିରାମୟ ଯୋଜନା ଓ ବିଜୁ ସ୍ୱାସ୍ଥ୍ୟ କଲ୍ୟାଣ ଯୋଜନାରେ ସମସ୍ତ ସରକାରୀ ଡାକ୍ତରଖାନାରେ ମାଗଣା ପରୀକ୍ଷା ଓ ଔଷଧ ଉପଲବ୍ଧ।"
        },
        {
          "question": "କେବେ ଡାକ୍ତରଖାନା ଯିବା ଉଚିତ?",
          "answer": "ଗୁରୁତର ଲକ୍ଷଣ ଦେଖାଦେବା ମାତ୍ରେ ତୁରନ୍ତ ଡାକ୍ତରଖାନା ଯିବା ଉଚିତ।"
        }
      ]
    }
  },
  {
    "id": "dis-16-viral-hepatitis-a-e-jaundice-haladia-roga-",
    "category": "Waterborne & Gastro",
    "severity": "Moderate",
    "transmission": "Ingestion of fecal-contaminated drinking water",
    "en": {
      "name": "Viral Hepatitis A & E (Jaundice / Haladia Roga)",
      "overview": "Detailed clinical guidance, prevention, and government health support in Odisha for Viral Hepatitis A & E (Jaundice / Haladia Roga).",
      "symptoms": [
        "Primary localized pain, fever, or discomfort",
        "Fatigue and reduced physical stamina",
        "Loss of normal appetite and mild headache",
        "Associated diagnostic clinical signs specific to condition"
      ],
      "causes": [
        "Etiological factors and environmental exposure related to Viral Hepatitis A & E (Jaundice / Haladia Roga)",
        "Unfavorable seasonal conditions or unhygienic community environment",
        "Nutritional or metabolic susceptibility factors"
      ],
      "treatments": [
        "Evidence-based pharmacotherapy prescribed by medical officer",
        "Adequate fluid intake, nutritious diet, and supportive care",
        "Free treatment and diagnostic screening available at Odisha CHCs and DHHs"
      ],
      "prevention": [
        "Maintain strict personal, domestic, and water hygiene",
        "Adhere to public health department guidelines and advisories",
        "Timely immunization and regular screening visits"
      ],
      "dos": [
        "Consult a qualified medical officer at early onset of symptoms",
        "Complete the prescribed medical regimen without skipping doses",
        "Maintain clean drinking water and well-balanced nutrition"
      ],
      "donts": [
        "Do not self-medicate or purchase unverified over-the-counter drugs",
        "Do not delay seeking medical care if red flag symptoms emerge",
        "Do not consume unhygienic or contaminated food and water"
      ],
      "whenToSeeDoctor": [
        "High continuous fever not responding to antipyretics",
        "Breathing difficulty, extreme fatigue, or fainting",
        "Inability to eat or drink oral fluids"
      ],
      "faqs": [
        {
          "question": "Is treatment for Viral Hepatitis A & E (Jaundice / Haladia Roga) available free in Odisha?",
          "answer": "Yes, under Niramaya scheme and BSKY, free diagnostics and medicines are provided across Odisha government facilities."
        },
        {
          "question": "When should one visit the nearest hospital?",
          "answer": "Visit the hospital at first onset of severe symptoms or if home recovery is slow after 48 hours."
        }
      ]
    },
    "or": {
      "name": "ହେପାଟାଇଟିସ୍ ଜଣ୍ଡିସ୍ (ହଳଦିଆ ରୋଗ)",
      "nativeName": "ହେପାଟାଇଟିସ୍ ଜଣ୍ଡିସ୍ (ହଳଦିଆ ରୋଗ)",
      "overview": "ଓଡ଼ିଶାର ଜନସାଧାରଣଙ୍କ ପାଇଁ ହେପାଟାଇଟିସ୍ ଜଣ୍ଡିସ୍ (ହଳଦିଆ ରୋଗ) ର ଡାକ୍ତରୀ ମାର୍ଗଦର୍ଶନ, ପ୍ରତିରୋଧ ଓ ସରକାରୀ ସହାୟତା।",
      "symptoms": [
        "ସ୍ଥାନୀୟ ଯନ୍ତ୍ରଣା, ଜ୍ୱର ବା ଅସ୍ୱସ୍ତି ଭାବ",
        "ଦୁର୍ବଳତା ଏବଂ ଶରୀରରେ ଶକ୍ତିର ଅଭାବ",
        "ଭୋକ କମିବା ଏବଂ ମୁଣ୍ଡବିନ୍ଧା",
        "ରୋଗ ସମ୍ପର୍କିତ ସାଧାରଣ ଡାକ୍ତରୀ ଲକ୍ଷଣ"
      ],
      "causes": [
        "ହେପାଟାଇଟିସ୍ ଜଣ୍ଡିସ୍ (ହଳଦିଆ ରୋଗ) ସମ୍ପର୍କିତ ପରିବେଶ ଓ ଜୀବାଣୁଜନିତ କାରଣ",
        "ଋତୁକାଳୀନ ପ୍ରତିକୂଳ ପାଗ ବା ଅପରିଷ୍କାର ପରିବେଶ",
        "ପୁଷ୍ଟିହୀନତା ବା ରୋଗ ପ୍ରତିରୋଧକ ଶକ୍ତିର ଅଭାବ"
      ],
      "treatments": [
        "ଡାକ୍ତରଙ୍କ ପରାମର୍ଶ ଅନୁଯାୟୀ ପ୍ରମାଣିତ ଔଷଧ ସେବନ",
        "ପର୍ଯ୍ୟାପ୍ତ ପାଣି ପିଇବା, ପୁଷ୍ଟିକର ଖାଦ୍ୟ ଓ ବିଶ୍ରାମ",
        "ଓଡ଼ିଶା ସରକାରୀ ଡାକ୍ତରଖାନାରେ ମାଗଣା ଚିକିତ୍ସା ଓ ପରୀକ୍ଷା"
      ],
      "prevention": [
        "ବ୍ୟକ୍ତିଗତ ଓ ପରିବେଶ ପରିମଳ ସର୍ବଦା ବଜାୟ ରଖନ୍ତୁ",
        "ସ୍ୱାସ୍ଥ୍ୟ ବିଭାଗର ନିର୍ଦ୍ଦେଶାବଳୀ ପାଳନ କରନ୍ତୁ",
        "ସମୟ ଅନୁଯାୟୀ ଟିକାକରଣ ଓ ସ୍ୱାସ୍ଥ୍ୟ ଯାଞ୍ଚ କରାନ୍ତୁ"
      ],
      "dos": [
        "ଲକ୍ଷଣ ଦେଖାଦେବା ମାତ୍ରେ ଡାକ୍ତରଙ୍କ ସହ ପରାମର୍ଶ କରନ୍ତୁ",
        "ଡାକ୍ତର ଦେଇଥିବା ଔଷଧ କୋର୍ସ ସମ୍ପୂର୍ଣ୍ଣ ଶେଷ କରନ୍ତୁ",
        "ଫୁଟା ପାଣି ଓ ପୁଷ୍ଟିକର ଖାଦ୍ୟ ଖାଆନ୍ତୁ"
      ],
      "donts": [
        "ଡାକ୍ତରଙ୍କ ବିନା ପରାମର୍ଶରେ ମେଡିସିନ୍ ଦୋକାନରୁ ଔଷଧ ଖାଆନ୍ତୁ ନାହିଁ",
        "ଗୁରୁତର ଲକ୍ଷଣ ଥିଲେ ଡାକ୍ତରଖାନା ଯିବାରେ ଡେରି କରନ୍ତୁ ନାହିଁ",
        "ଅପରିଷ୍କାର ଓ ବାସି ଖାଦ୍ୟ ଖାଆନ୍ତୁ ନାହିଁ"
      ],
      "whenToSeeDoctor": [
        "ଲଗାତାର ତେଜ ଜ୍ୱର ଲାଗିରହିଲେ",
        "ନିଶ୍ୱାସ ନେବାରେ କଷ୍ଟ ହେଲେ ବା ଚେତା ହରାଇଲେ",
        "ପାଣି ପିଇ ନପାରିଲେ ବା ବାରମ୍ବାର ବାନ୍ତି ହେଲେ"
      ],
      "faqs": [
        {
          "question": "ଓଡ଼ିଶାରେ ହେପାଟାଇଟିସ୍ ଜଣ୍ଡିସ୍ (ହଳଦିଆ ରୋଗ) ର ଚିକିତ୍ସା ମାଗଣାରେ ମିଳେ କି?",
          "answer": "ହଁ, ନିରାମୟ ଯୋଜନା ଓ ବିଜୁ ସ୍ୱାସ୍ଥ୍ୟ କଲ୍ୟାଣ ଯୋଜନାରେ ସମସ୍ତ ସରକାରୀ ଡାକ୍ତରଖାନାରେ ମାଗଣା ପରୀକ୍ଷା ଓ ଔଷଧ ଉପଲବ୍ଧ।"
        },
        {
          "question": "କେବେ ଡାକ୍ତରଖାନା ଯିବା ଉଚିତ?",
          "answer": "ଗୁରୁତର ଲକ୍ଷଣ ଦେଖାଦେବା ମାତ୍ରେ ତୁରନ୍ତ ଡାକ୍ତରଖାନା ଯିବା ଉଚିତ।"
        }
      ]
    }
  },
  {
    "id": "dis-17-amoebic-dysentery-colitis",
    "category": "Waterborne & Gastro",
    "severity": "Moderate",
    "transmission": "Contaminated drinking water and food",
    "en": {
      "name": "Amoebic Dysentery & Colitis",
      "overview": "Detailed clinical guidance, prevention, and government health support in Odisha for Amoebic Dysentery & Colitis.",
      "symptoms": [
        "Primary localized pain, fever, or discomfort",
        "Fatigue and reduced physical stamina",
        "Loss of normal appetite and mild headache",
        "Associated diagnostic clinical signs specific to condition"
      ],
      "causes": [
        "Etiological factors and environmental exposure related to Amoebic Dysentery & Colitis",
        "Unfavorable seasonal conditions or unhygienic community environment",
        "Nutritional or metabolic susceptibility factors"
      ],
      "treatments": [
        "Evidence-based pharmacotherapy prescribed by medical officer",
        "Adequate fluid intake, nutritious diet, and supportive care",
        "Free treatment and diagnostic screening available at Odisha CHCs and DHHs"
      ],
      "prevention": [
        "Maintain strict personal, domestic, and water hygiene",
        "Adhere to public health department guidelines and advisories",
        "Timely immunization and regular screening visits"
      ],
      "dos": [
        "Consult a qualified medical officer at early onset of symptoms",
        "Complete the prescribed medical regimen without skipping doses",
        "Maintain clean drinking water and well-balanced nutrition"
      ],
      "donts": [
        "Do not self-medicate or purchase unverified over-the-counter drugs",
        "Do not delay seeking medical care if red flag symptoms emerge",
        "Do not consume unhygienic or contaminated food and water"
      ],
      "whenToSeeDoctor": [
        "High continuous fever not responding to antipyretics",
        "Breathing difficulty, extreme fatigue, or fainting",
        "Inability to eat or drink oral fluids"
      ],
      "faqs": [
        {
          "question": "Is treatment for Amoebic Dysentery & Colitis available free in Odisha?",
          "answer": "Yes, under Niramaya scheme and BSKY, free diagnostics and medicines are provided across Odisha government facilities."
        },
        {
          "question": "When should one visit the nearest hospital?",
          "answer": "Visit the hospital at first onset of severe symptoms or if home recovery is slow after 48 hours."
        }
      ]
    },
    "or": {
      "name": "ଆମିବିଆସିସ୍ (ଆମାଶୟ ଝାଡ଼ା)",
      "nativeName": "ଆମିବିଆସିସ୍ (ଆମାଶୟ ଝାଡ଼ା)",
      "overview": "ଓଡ଼ିଶାର ଜନସାଧାରଣଙ୍କ ପାଇଁ ଆମିବିଆସିସ୍ (ଆମାଶୟ ଝାଡ଼ା) ର ଡାକ୍ତରୀ ମାର୍ଗଦର୍ଶନ, ପ୍ରତିରୋଧ ଓ ସରକାରୀ ସହାୟତା।",
      "symptoms": [
        "ସ୍ଥାନୀୟ ଯନ୍ତ୍ରଣା, ଜ୍ୱର ବା ଅସ୍ୱସ୍ତି ଭାବ",
        "ଦୁର୍ବଳତା ଏବଂ ଶରୀରରେ ଶକ୍ତିର ଅଭାବ",
        "ଭୋକ କମିବା ଏବଂ ମୁଣ୍ଡବିନ୍ଧା",
        "ରୋଗ ସମ୍ପର୍କିତ ସାଧାରଣ ଡାକ୍ତରୀ ଲକ୍ଷଣ"
      ],
      "causes": [
        "ଆମିବିଆସିସ୍ (ଆମାଶୟ ଝାଡ଼ା) ସମ୍ପର୍କିତ ପରିବେଶ ଓ ଜୀବାଣୁଜନିତ କାରଣ",
        "ଋତୁକାଳୀନ ପ୍ରତିକୂଳ ପାଗ ବା ଅପରିଷ୍କାର ପରିବେଶ",
        "ପୁଷ୍ଟିହୀନତା ବା ରୋଗ ପ୍ରତିରୋଧକ ଶକ୍ତିର ଅଭାବ"
      ],
      "treatments": [
        "ଡାକ୍ତରଙ୍କ ପରାମର୍ଶ ଅନୁଯାୟୀ ପ୍ରମାଣିତ ଔଷଧ ସେବନ",
        "ପର୍ଯ୍ୟାପ୍ତ ପାଣି ପିଇବା, ପୁଷ୍ଟିକର ଖାଦ୍ୟ ଓ ବିଶ୍ରାମ",
        "ଓଡ଼ିଶା ସରକାରୀ ଡାକ୍ତରଖାନାରେ ମାଗଣା ଚିକିତ୍ସା ଓ ପରୀକ୍ଷା"
      ],
      "prevention": [
        "ବ୍ୟକ୍ତିଗତ ଓ ପରିବେଶ ପରିମଳ ସର୍ବଦା ବଜାୟ ରଖନ୍ତୁ",
        "ସ୍ୱାସ୍ଥ୍ୟ ବିଭାଗର ନିର୍ଦ୍ଦେଶାବଳୀ ପାଳନ କରନ୍ତୁ",
        "ସମୟ ଅନୁଯାୟୀ ଟିକାକରଣ ଓ ସ୍ୱାସ୍ଥ୍ୟ ଯାଞ୍ଚ କରାନ୍ତୁ"
      ],
      "dos": [
        "ଲକ୍ଷଣ ଦେଖାଦେବା ମାତ୍ରେ ଡାକ୍ତରଙ୍କ ସହ ପରାମର୍ଶ କରନ୍ତୁ",
        "ଡାକ୍ତର ଦେଇଥିବା ଔଷଧ କୋର୍ସ ସମ୍ପୂର୍ଣ୍ଣ ଶେଷ କରନ୍ତୁ",
        "ଫୁଟା ପାଣି ଓ ପୁଷ୍ଟିକର ଖାଦ୍ୟ ଖାଆନ୍ତୁ"
      ],
      "donts": [
        "ଡାକ୍ତରଙ୍କ ବିନା ପରାମର୍ଶରେ ମେଡିସିନ୍ ଦୋକାନରୁ ଔଷଧ ଖାଆନ୍ତୁ ନାହିଁ",
        "ଗୁରୁତର ଲକ୍ଷଣ ଥିଲେ ଡାକ୍ତରଖାନା ଯିବାରେ ଡେରି କରନ୍ତୁ ନାହିଁ",
        "ଅପରିଷ୍କାର ଓ ବାସି ଖାଦ୍ୟ ଖାଆନ୍ତୁ ନାହିଁ"
      ],
      "whenToSeeDoctor": [
        "ଲଗାତାର ତେଜ ଜ୍ୱର ଲାଗିରହିଲେ",
        "ନିଶ୍ୱାସ ନେବାରେ କଷ୍ଟ ହେଲେ ବା ଚେତା ହରାଇଲେ",
        "ପାଣି ପିଇ ନପାରିଲେ ବା ବାରମ୍ବାର ବାନ୍ତି ହେଲେ"
      ],
      "faqs": [
        {
          "question": "ଓଡ଼ିଶାରେ ଆମିବିଆସିସ୍ (ଆମାଶୟ ଝାଡ଼ା) ର ଚିକିତ୍ସା ମାଗଣାରେ ମିଳେ କି?",
          "answer": "ହଁ, ନିରାମୟ ଯୋଜନା ଓ ବିଜୁ ସ୍ୱାସ୍ଥ୍ୟ କଲ୍ୟାଣ ଯୋଜନାରେ ସମସ୍ତ ସରକାରୀ ଡାକ୍ତରଖାନାରେ ମାଗଣା ପରୀକ୍ଷା ଓ ଔଷଧ ଉପଲବ୍ଧ।"
        },
        {
          "question": "କେବେ ଡାକ୍ତରଖାନା ଯିବା ଉଚିତ?",
          "answer": "ଗୁରୁତର ଲକ୍ଷଣ ଦେଖାଦେବା ମାତ୍ରେ ତୁରନ୍ତ ଡାକ୍ତରଖାନା ଯିବା ଉଚିତ।"
        }
      ]
    }
  },
  {
    "id": "dis-18-hookworm-roundworm-infection-krumi-",
    "category": "Maternal & Child",
    "severity": "Mild",
    "transmission": "Walking barefoot on infected soil or unwashed hands",
    "en": {
      "name": "Hookworm & Roundworm Infection (Krumi)",
      "overview": "Detailed clinical guidance, prevention, and government health support in Odisha for Hookworm & Roundworm Infection (Krumi).",
      "symptoms": [
        "Primary localized pain, fever, or discomfort",
        "Fatigue and reduced physical stamina",
        "Loss of normal appetite and mild headache",
        "Associated diagnostic clinical signs specific to condition"
      ],
      "causes": [
        "Etiological factors and environmental exposure related to Hookworm & Roundworm Infection (Krumi)",
        "Unfavorable seasonal conditions or unhygienic community environment",
        "Nutritional or metabolic susceptibility factors"
      ],
      "treatments": [
        "Evidence-based pharmacotherapy prescribed by medical officer",
        "Adequate fluid intake, nutritious diet, and supportive care",
        "Free treatment and diagnostic screening available at Odisha CHCs and DHHs"
      ],
      "prevention": [
        "Maintain strict personal, domestic, and water hygiene",
        "Adhere to public health department guidelines and advisories",
        "Timely immunization and regular screening visits"
      ],
      "dos": [
        "Consult a qualified medical officer at early onset of symptoms",
        "Complete the prescribed medical regimen without skipping doses",
        "Maintain clean drinking water and well-balanced nutrition"
      ],
      "donts": [
        "Do not self-medicate or purchase unverified over-the-counter drugs",
        "Do not delay seeking medical care if red flag symptoms emerge",
        "Do not consume unhygienic or contaminated food and water"
      ],
      "whenToSeeDoctor": [
        "High continuous fever not responding to antipyretics",
        "Breathing difficulty, extreme fatigue, or fainting",
        "Inability to eat or drink oral fluids"
      ],
      "faqs": [
        {
          "question": "Is treatment for Hookworm & Roundworm Infection (Krumi) available free in Odisha?",
          "answer": "Yes, under Niramaya scheme and BSKY, free diagnostics and medicines are provided across Odisha government facilities."
        },
        {
          "question": "When should one visit the nearest hospital?",
          "answer": "Visit the hospital at first onset of severe symptoms or if home recovery is slow after 48 hours."
        }
      ]
    },
    "or": {
      "name": "କୃମି ସଂକ୍ରମଣ (ହୁକ୍‌ୱାର୍ମ)",
      "nativeName": "କୃମି ସଂକ୍ରମଣ (ହୁକ୍‌ୱାର୍ମ)",
      "overview": "ଓଡ଼ିଶାର ଜନସାଧାରଣଙ୍କ ପାଇଁ କୃମି ସଂକ୍ରମଣ (ହୁକ୍‌ୱାର୍ମ) ର ଡାକ୍ତରୀ ମାର୍ଗଦର୍ଶନ, ପ୍ରତିରୋଧ ଓ ସରକାରୀ ସହାୟତା।",
      "symptoms": [
        "ସ୍ଥାନୀୟ ଯନ୍ତ୍ରଣା, ଜ୍ୱର ବା ଅସ୍ୱସ୍ତି ଭାବ",
        "ଦୁର୍ବଳତା ଏବଂ ଶରୀରରେ ଶକ୍ତିର ଅଭାବ",
        "ଭୋକ କମିବା ଏବଂ ମୁଣ୍ଡବିନ୍ଧା",
        "ରୋଗ ସମ୍ପର୍କିତ ସାଧାରଣ ଡାକ୍ତରୀ ଲକ୍ଷଣ"
      ],
      "causes": [
        "କୃମି ସଂକ୍ରମଣ (ହୁକ୍‌ୱାର୍ମ) ସମ୍ପର୍କିତ ପରିବେଶ ଓ ଜୀବାଣୁଜନିତ କାରଣ",
        "ଋତୁକାଳୀନ ପ୍ରତିକୂଳ ପାଗ ବା ଅପରିଷ୍କାର ପରିବେଶ",
        "ପୁଷ୍ଟିହୀନତା ବା ରୋଗ ପ୍ରତିରୋଧକ ଶକ୍ତିର ଅଭାବ"
      ],
      "treatments": [
        "ଡାକ୍ତରଙ୍କ ପରାମର୍ଶ ଅନୁଯାୟୀ ପ୍ରମାଣିତ ଔଷଧ ସେବନ",
        "ପର୍ଯ୍ୟାପ୍ତ ପାଣି ପିଇବା, ପୁଷ୍ଟିକର ଖାଦ୍ୟ ଓ ବିଶ୍ରାମ",
        "ଓଡ଼ିଶା ସରକାରୀ ଡାକ୍ତରଖାନାରେ ମାଗଣା ଚିକିତ୍ସା ଓ ପରୀକ୍ଷା"
      ],
      "prevention": [
        "ବ୍ୟକ୍ତିଗତ ଓ ପରିବେଶ ପରିମଳ ସର୍ବଦା ବଜାୟ ରଖନ୍ତୁ",
        "ସ୍ୱାସ୍ଥ୍ୟ ବିଭାଗର ନିର୍ଦ୍ଦେଶାବଳୀ ପାଳନ କରନ୍ତୁ",
        "ସମୟ ଅନୁଯାୟୀ ଟିକାକରଣ ଓ ସ୍ୱାସ୍ଥ୍ୟ ଯାଞ୍ଚ କରାନ୍ତୁ"
      ],
      "dos": [
        "ଲକ୍ଷଣ ଦେଖାଦେବା ମାତ୍ରେ ଡାକ୍ତରଙ୍କ ସହ ପରାମର୍ଶ କରନ୍ତୁ",
        "ଡାକ୍ତର ଦେଇଥିବା ଔଷଧ କୋର୍ସ ସମ୍ପୂର୍ଣ୍ଣ ଶେଷ କରନ୍ତୁ",
        "ଫୁଟା ପାଣି ଓ ପୁଷ୍ଟିକର ଖାଦ୍ୟ ଖାଆନ୍ତୁ"
      ],
      "donts": [
        "ଡାକ୍ତରଙ୍କ ବିନା ପରାମର୍ଶରେ ମେଡିସିନ୍ ଦୋକାନରୁ ଔଷଧ ଖାଆନ୍ତୁ ନାହିଁ",
        "ଗୁରୁତର ଲକ୍ଷଣ ଥିଲେ ଡାକ୍ତରଖାନା ଯିବାରେ ଡେରି କରନ୍ତୁ ନାହିଁ",
        "ଅପରିଷ୍କାର ଓ ବାସି ଖାଦ୍ୟ ଖାଆନ୍ତୁ ନାହିଁ"
      ],
      "whenToSeeDoctor": [
        "ଲଗାତାର ତେଜ ଜ୍ୱର ଲାଗିରହିଲେ",
        "ନିଶ୍ୱାସ ନେବାରେ କଷ୍ଟ ହେଲେ ବା ଚେତା ହରାଇଲେ",
        "ପାଣି ପିଇ ନପାରିଲେ ବା ବାରମ୍ବାର ବାନ୍ତି ହେଲେ"
      ],
      "faqs": [
        {
          "question": "ଓଡ଼ିଶାରେ କୃମି ସଂକ୍ରମଣ (ହୁକ୍‌ୱାର୍ମ) ର ଚିକିତ୍ସା ମାଗଣାରେ ମିଳେ କି?",
          "answer": "ହଁ, ନିରାମୟ ଯୋଜନା ଓ ବିଜୁ ସ୍ୱାସ୍ଥ୍ୟ କଲ୍ୟାଣ ଯୋଜନାରେ ସମସ୍ତ ସରକାରୀ ଡାକ୍ତରଖାନାରେ ମାଗଣା ପରୀକ୍ଷା ଓ ଔଷଧ ଉପଲବ୍ଧ।"
        },
        {
          "question": "କେବେ ଡାକ୍ତରଖାନା ଯିବା ଉଚିତ?",
          "answer": "ଗୁରୁତର ଲକ୍ଷଣ ଦେଖାଦେବା ମାତ୍ରେ ତୁରନ୍ତ ଡାକ୍ତରଖାନା ଯିବା ଉଚିତ।"
        }
      ]
    }
  },
  {
    "id": "dis-19-scabies-chilkan-khujali-",
    "category": "Dermatology & Skin",
    "severity": "Mild",
    "transmission": "Direct skin-to-skin contact and shared bedding",
    "en": {
      "name": "Scabies (Chilkan / Khujali)",
      "overview": "Detailed clinical guidance, prevention, and government health support in Odisha for Scabies (Chilkan / Khujali).",
      "symptoms": [
        "Primary localized pain, fever, or discomfort",
        "Fatigue and reduced physical stamina",
        "Loss of normal appetite and mild headache",
        "Associated diagnostic clinical signs specific to condition"
      ],
      "causes": [
        "Etiological factors and environmental exposure related to Scabies (Chilkan / Khujali)",
        "Unfavorable seasonal conditions or unhygienic community environment",
        "Nutritional or metabolic susceptibility factors"
      ],
      "treatments": [
        "Evidence-based pharmacotherapy prescribed by medical officer",
        "Adequate fluid intake, nutritious diet, and supportive care",
        "Free treatment and diagnostic screening available at Odisha CHCs and DHHs"
      ],
      "prevention": [
        "Maintain strict personal, domestic, and water hygiene",
        "Adhere to public health department guidelines and advisories",
        "Timely immunization and regular screening visits"
      ],
      "dos": [
        "Consult a qualified medical officer at early onset of symptoms",
        "Complete the prescribed medical regimen without skipping doses",
        "Maintain clean drinking water and well-balanced nutrition"
      ],
      "donts": [
        "Do not self-medicate or purchase unverified over-the-counter drugs",
        "Do not delay seeking medical care if red flag symptoms emerge",
        "Do not consume unhygienic or contaminated food and water"
      ],
      "whenToSeeDoctor": [
        "High continuous fever not responding to antipyretics",
        "Breathing difficulty, extreme fatigue, or fainting",
        "Inability to eat or drink oral fluids"
      ],
      "faqs": [
        {
          "question": "Is treatment for Scabies (Chilkan / Khujali) available free in Odisha?",
          "answer": "Yes, under Niramaya scheme and BSKY, free diagnostics and medicines are provided across Odisha government facilities."
        },
        {
          "question": "When should one visit the nearest hospital?",
          "answer": "Visit the hospital at first onset of severe symptoms or if home recovery is slow after 48 hours."
        }
      ]
    },
    "or": {
      "name": "ଚିଲକାନ୍ ଓ କାଛୁକୁଣ୍ଡିଆ (ସ୍କାବିସ୍)",
      "nativeName": "ଚିଲକାନ୍ ଓ କାଛୁକୁଣ୍ଡିଆ (ସ୍କାବିସ୍)",
      "overview": "ଓଡ଼ିଶାର ଜନସାଧାରଣଙ୍କ ପାଇଁ ଚିଲକାନ୍ ଓ କାଛୁକୁଣ୍ଡିଆ (ସ୍କାବିସ୍) ର ଡାକ୍ତରୀ ମାର୍ଗଦର୍ଶନ, ପ୍ରତିରୋଧ ଓ ସରକାରୀ ସହାୟତା।",
      "symptoms": [
        "ସ୍ଥାନୀୟ ଯନ୍ତ୍ରଣା, ଜ୍ୱର ବା ଅସ୍ୱସ୍ତି ଭାବ",
        "ଦୁର୍ବଳତା ଏବଂ ଶରୀରରେ ଶକ୍ତିର ଅଭାବ",
        "ଭୋକ କମିବା ଏବଂ ମୁଣ୍ଡବିନ୍ଧା",
        "ରୋଗ ସମ୍ପର୍କିତ ସାଧାରଣ ଡାକ୍ତରୀ ଲକ୍ଷଣ"
      ],
      "causes": [
        "ଚିଲକାନ୍ ଓ କାଛୁକୁଣ୍ଡିଆ (ସ୍କାବିସ୍) ସମ୍ପର୍କିତ ପରିବେଶ ଓ ଜୀବାଣୁଜନିତ କାରଣ",
        "ଋତୁକାଳୀନ ପ୍ରତିକୂଳ ପାଗ ବା ଅପରିଷ୍କାର ପରିବେଶ",
        "ପୁଷ୍ଟିହୀନତା ବା ରୋଗ ପ୍ରତିରୋଧକ ଶକ୍ତିର ଅଭାବ"
      ],
      "treatments": [
        "ଡାକ୍ତରଙ୍କ ପରାମର୍ଶ ଅନୁଯାୟୀ ପ୍ରମାଣିତ ଔଷଧ ସେବନ",
        "ପର୍ଯ୍ୟାପ୍ତ ପାଣି ପିଇବା, ପୁଷ୍ଟିକର ଖାଦ୍ୟ ଓ ବିଶ୍ରାମ",
        "ଓଡ଼ିଶା ସରକାରୀ ଡାକ୍ତରଖାନାରେ ମାଗଣା ଚିକିତ୍ସା ଓ ପରୀକ୍ଷା"
      ],
      "prevention": [
        "ବ୍ୟକ୍ତିଗତ ଓ ପରିବେଶ ପରିମଳ ସର୍ବଦା ବଜାୟ ରଖନ୍ତୁ",
        "ସ୍ୱାସ୍ଥ୍ୟ ବିଭାଗର ନିର୍ଦ୍ଦେଶାବଳୀ ପାଳନ କରନ୍ତୁ",
        "ସମୟ ଅନୁଯାୟୀ ଟିକାକରଣ ଓ ସ୍ୱାସ୍ଥ୍ୟ ଯାଞ୍ଚ କରାନ୍ତୁ"
      ],
      "dos": [
        "ଲକ୍ଷଣ ଦେଖାଦେବା ମାତ୍ରେ ଡାକ୍ତରଙ୍କ ସହ ପରାମର୍ଶ କରନ୍ତୁ",
        "ଡାକ୍ତର ଦେଇଥିବା ଔଷଧ କୋର୍ସ ସମ୍ପୂର୍ଣ୍ଣ ଶେଷ କରନ୍ତୁ",
        "ଫୁଟା ପାଣି ଓ ପୁଷ୍ଟିକର ଖାଦ୍ୟ ଖାଆନ୍ତୁ"
      ],
      "donts": [
        "ଡାକ୍ତରଙ୍କ ବିନା ପରାମର୍ଶରେ ମେଡିସିନ୍ ଦୋକାନରୁ ଔଷଧ ଖାଆନ୍ତୁ ନାହିଁ",
        "ଗୁରୁତର ଲକ୍ଷଣ ଥିଲେ ଡାକ୍ତରଖାନା ଯିବାରେ ଡେରି କରନ୍ତୁ ନାହିଁ",
        "ଅପରିଷ୍କାର ଓ ବାସି ଖାଦ୍ୟ ଖାଆନ୍ତୁ ନାହିଁ"
      ],
      "whenToSeeDoctor": [
        "ଲଗାତାର ତେଜ ଜ୍ୱର ଲାଗିରହିଲେ",
        "ନିଶ୍ୱାସ ନେବାରେ କଷ୍ଟ ହେଲେ ବା ଚେତା ହରାଇଲେ",
        "ପାଣି ପିଇ ନପାରିଲେ ବା ବାରମ୍ବାର ବାନ୍ତି ହେଲେ"
      ],
      "faqs": [
        {
          "question": "ଓଡ଼ିଶାରେ ଚିଲକାନ୍ ଓ କାଛୁକୁଣ୍ଡିଆ (ସ୍କାବିସ୍) ର ଚିକିତ୍ସା ମାଗଣାରେ ମିଳେ କି?",
          "answer": "ହଁ, ନିରାମୟ ଯୋଜନା ଓ ବିଜୁ ସ୍ୱାସ୍ଥ୍ୟ କଲ୍ୟାଣ ଯୋଜନାରେ ସମସ୍ତ ସରକାରୀ ଡାକ୍ତରଖାନାରେ ମାଗଣା ପରୀକ୍ଷା ଓ ଔଷଧ ଉପଲବ୍ଧ।"
        },
        {
          "question": "କେବେ ଡାକ୍ତରଖାନା ଯିବା ଉଚିତ?",
          "answer": "ଗୁରୁତର ଲକ୍ଷଣ ଦେଖାଦେବା ମାତ୍ରେ ତୁରନ୍ତ ଡାକ୍ତରଖାନା ଯିବା ଉଚିତ।"
        }
      ]
    }
  },
  {
    "id": "dis-20-ringworm-fungal-itch-dadru-dad-",
    "category": "Dermatology & Skin",
    "severity": "Mild",
    "transmission": "Fungal spore contact in humid tropical weather",
    "en": {
      "name": "Ringworm & Fungal Itch (Dadru / Dad)",
      "overview": "Detailed clinical guidance, prevention, and government health support in Odisha for Ringworm & Fungal Itch (Dadru / Dad).",
      "symptoms": [
        "Primary localized pain, fever, or discomfort",
        "Fatigue and reduced physical stamina",
        "Loss of normal appetite and mild headache",
        "Associated diagnostic clinical signs specific to condition"
      ],
      "causes": [
        "Etiological factors and environmental exposure related to Ringworm & Fungal Itch (Dadru / Dad)",
        "Unfavorable seasonal conditions or unhygienic community environment",
        "Nutritional or metabolic susceptibility factors"
      ],
      "treatments": [
        "Evidence-based pharmacotherapy prescribed by medical officer",
        "Adequate fluid intake, nutritious diet, and supportive care",
        "Free treatment and diagnostic screening available at Odisha CHCs and DHHs"
      ],
      "prevention": [
        "Maintain strict personal, domestic, and water hygiene",
        "Adhere to public health department guidelines and advisories",
        "Timely immunization and regular screening visits"
      ],
      "dos": [
        "Consult a qualified medical officer at early onset of symptoms",
        "Complete the prescribed medical regimen without skipping doses",
        "Maintain clean drinking water and well-balanced nutrition"
      ],
      "donts": [
        "Do not self-medicate or purchase unverified over-the-counter drugs",
        "Do not delay seeking medical care if red flag symptoms emerge",
        "Do not consume unhygienic or contaminated food and water"
      ],
      "whenToSeeDoctor": [
        "High continuous fever not responding to antipyretics",
        "Breathing difficulty, extreme fatigue, or fainting",
        "Inability to eat or drink oral fluids"
      ],
      "faqs": [
        {
          "question": "Is treatment for Ringworm & Fungal Itch (Dadru / Dad) available free in Odisha?",
          "answer": "Yes, under Niramaya scheme and BSKY, free diagnostics and medicines are provided across Odisha government facilities."
        },
        {
          "question": "When should one visit the nearest hospital?",
          "answer": "Visit the hospital at first onset of severe symptoms or if home recovery is slow after 48 hours."
        }
      ]
    },
    "or": {
      "name": "ଦାଦ୍ରୁ ଓ କାଛୁ (ରିଙ୍ଗୱାର୍ମ)",
      "nativeName": "ଦାଦ୍ରୁ ଓ କାଛୁ (ରିଙ୍ଗୱାର୍ମ)",
      "overview": "ଓଡ଼ିଶାର ଜନସାଧାରଣଙ୍କ ପାଇଁ ଦାଦ୍ରୁ ଓ କାଛୁ (ରିଙ୍ଗୱାର୍ମ) ର ଡାକ୍ତରୀ ମାର୍ଗଦର୍ଶନ, ପ୍ରତିରୋଧ ଓ ସରକାରୀ ସହାୟତା।",
      "symptoms": [
        "ସ୍ଥାନୀୟ ଯନ୍ତ୍ରଣା, ଜ୍ୱର ବା ଅସ୍ୱସ୍ତି ଭାବ",
        "ଦୁର୍ବଳତା ଏବଂ ଶରୀରରେ ଶକ୍ତିର ଅଭାବ",
        "ଭୋକ କମିବା ଏବଂ ମୁଣ୍ଡବିନ୍ଧା",
        "ରୋଗ ସମ୍ପର୍କିତ ସାଧାରଣ ଡାକ୍ତରୀ ଲକ୍ଷଣ"
      ],
      "causes": [
        "ଦାଦ୍ରୁ ଓ କାଛୁ (ରିଙ୍ଗୱାର୍ମ) ସମ୍ପର୍କିତ ପରିବେଶ ଓ ଜୀବାଣୁଜନିତ କାରଣ",
        "ଋତୁକାଳୀନ ପ୍ରତିକୂଳ ପାଗ ବା ଅପରିଷ୍କାର ପରିବେଶ",
        "ପୁଷ୍ଟିହୀନତା ବା ରୋଗ ପ୍ରତିରୋଧକ ଶକ୍ତିର ଅଭାବ"
      ],
      "treatments": [
        "ଡାକ୍ତରଙ୍କ ପରାମର୍ଶ ଅନୁଯାୟୀ ପ୍ରମାଣିତ ଔଷଧ ସେବନ",
        "ପର୍ଯ୍ୟାପ୍ତ ପାଣି ପିଇବା, ପୁଷ୍ଟିକର ଖାଦ୍ୟ ଓ ବିଶ୍ରାମ",
        "ଓଡ଼ିଶା ସରକାରୀ ଡାକ୍ତରଖାନାରେ ମାଗଣା ଚିକିତ୍ସା ଓ ପରୀକ୍ଷା"
      ],
      "prevention": [
        "ବ୍ୟକ୍ତିଗତ ଓ ପରିବେଶ ପରିମଳ ସର୍ବଦା ବଜାୟ ରଖନ୍ତୁ",
        "ସ୍ୱାସ୍ଥ୍ୟ ବିଭାଗର ନିର୍ଦ୍ଦେଶାବଳୀ ପାଳନ କରନ୍ତୁ",
        "ସମୟ ଅନୁଯାୟୀ ଟିକାକରଣ ଓ ସ୍ୱାସ୍ଥ୍ୟ ଯାଞ୍ଚ କରାନ୍ତୁ"
      ],
      "dos": [
        "ଲକ୍ଷଣ ଦେଖାଦେବା ମାତ୍ରେ ଡାକ୍ତରଙ୍କ ସହ ପରାମର୍ଶ କରନ୍ତୁ",
        "ଡାକ୍ତର ଦେଇଥିବା ଔଷଧ କୋର୍ସ ସମ୍ପୂର୍ଣ୍ଣ ଶେଷ କରନ୍ତୁ",
        "ଫୁଟା ପାଣି ଓ ପୁଷ୍ଟିକର ଖାଦ୍ୟ ଖାଆନ୍ତୁ"
      ],
      "donts": [
        "ଡାକ୍ତରଙ୍କ ବିନା ପରାମର୍ଶରେ ମେଡିସିନ୍ ଦୋକାନରୁ ଔଷଧ ଖାଆନ୍ତୁ ନାହିଁ",
        "ଗୁରୁତର ଲକ୍ଷଣ ଥିଲେ ଡାକ୍ତରଖାନା ଯିବାରେ ଡେରି କରନ୍ତୁ ନାହିଁ",
        "ଅପରିଷ୍କାର ଓ ବାସି ଖାଦ୍ୟ ଖାଆନ୍ତୁ ନାହିଁ"
      ],
      "whenToSeeDoctor": [
        "ଲଗାତାର ତେଜ ଜ୍ୱର ଲାଗିରହିଲେ",
        "ନିଶ୍ୱାସ ନେବାରେ କଷ୍ଟ ହେଲେ ବା ଚେତା ହରାଇଲେ",
        "ପାଣି ପିଇ ନପାରିଲେ ବା ବାରମ୍ବାର ବାନ୍ତି ହେଲେ"
      ],
      "faqs": [
        {
          "question": "ଓଡ଼ିଶାରେ ଦାଦ୍ରୁ ଓ କାଛୁ (ରିଙ୍ଗୱାର୍ମ) ର ଚିକିତ୍ସା ମାଗଣାରେ ମିଳେ କି?",
          "answer": "ହଁ, ନିରାମୟ ଯୋଜନା ଓ ବିଜୁ ସ୍ୱାସ୍ଥ୍ୟ କଲ୍ୟାଣ ଯୋଜନାରେ ସମସ୍ତ ସରକାରୀ ଡାକ୍ତରଖାନାରେ ମାଗଣା ପରୀକ୍ଷା ଓ ଔଷଧ ଉପଲବ୍ଧ।"
        },
        {
          "question": "କେବେ ଡାକ୍ତରଖାନା ଯିବା ଉଚିତ?",
          "answer": "ଗୁରୁତର ଲକ୍ଷଣ ଦେଖାଦେବା ମାତ୍ରେ ତୁରନ୍ତ ଡାକ୍ତରଖାନା ଯିବା ଉଚିତ।"
        }
      ]
    }
  },
  {
    "id": "dis-21-severe-acute-malnutrition-in-children-sam-",
    "category": "Maternal & Child",
    "severity": "High",
    "transmission": "Nutritional deficiency and chronic diarrheal illness",
    "en": {
      "name": "Severe Acute Malnutrition in Children (SAM)",
      "overview": "Detailed clinical guidance, prevention, and government health support in Odisha for Severe Acute Malnutrition in Children (SAM).",
      "symptoms": [
        "Primary localized pain, fever, or discomfort",
        "Fatigue and reduced physical stamina",
        "Loss of normal appetite and mild headache",
        "Associated diagnostic clinical signs specific to condition"
      ],
      "causes": [
        "Etiological factors and environmental exposure related to Severe Acute Malnutrition in Children (SAM)",
        "Unfavorable seasonal conditions or unhygienic community environment",
        "Nutritional or metabolic susceptibility factors"
      ],
      "treatments": [
        "Evidence-based pharmacotherapy prescribed by medical officer",
        "Adequate fluid intake, nutritious diet, and supportive care",
        "Free treatment and diagnostic screening available at Odisha CHCs and DHHs"
      ],
      "prevention": [
        "Maintain strict personal, domestic, and water hygiene",
        "Adhere to public health department guidelines and advisories",
        "Timely immunization and regular screening visits"
      ],
      "dos": [
        "Consult a qualified medical officer at early onset of symptoms",
        "Complete the prescribed medical regimen without skipping doses",
        "Maintain clean drinking water and well-balanced nutrition"
      ],
      "donts": [
        "Do not self-medicate or purchase unverified over-the-counter drugs",
        "Do not delay seeking medical care if red flag symptoms emerge",
        "Do not consume unhygienic or contaminated food and water"
      ],
      "whenToSeeDoctor": [
        "High continuous fever not responding to antipyretics",
        "Breathing difficulty, extreme fatigue, or fainting",
        "Inability to eat or drink oral fluids"
      ],
      "faqs": [
        {
          "question": "Is treatment for Severe Acute Malnutrition in Children (SAM) available free in Odisha?",
          "answer": "Yes, under Niramaya scheme and BSKY, free diagnostics and medicines are provided across Odisha government facilities."
        },
        {
          "question": "When should one visit the nearest hospital?",
          "answer": "Visit the hospital at first onset of severe symptoms or if home recovery is slow after 48 hours."
        }
      ]
    },
    "or": {
      "name": "ଶିଶୁ ଅପପୁଷ୍ଟି (SAM)",
      "nativeName": "ଶିଶୁ ଅପପୁଷ୍ଟି (SAM)",
      "overview": "ଓଡ଼ିଶାର ଜନସାଧାରଣଙ୍କ ପାଇଁ ଶିଶୁ ଅପପୁଷ୍ଟି (SAM) ର ଡାକ୍ତରୀ ମାର୍ଗଦର୍ଶନ, ପ୍ରତିରୋଧ ଓ ସରକାରୀ ସହାୟତା।",
      "symptoms": [
        "ସ୍ଥାନୀୟ ଯନ୍ତ୍ରଣା, ଜ୍ୱର ବା ଅସ୍ୱସ୍ତି ଭାବ",
        "ଦୁର୍ବଳତା ଏବଂ ଶରୀରରେ ଶକ୍ତିର ଅଭାବ",
        "ଭୋକ କମିବା ଏବଂ ମୁଣ୍ଡବିନ୍ଧା",
        "ରୋଗ ସମ୍ପର୍କିତ ସାଧାରଣ ଡାକ୍ତରୀ ଲକ୍ଷଣ"
      ],
      "causes": [
        "ଶିଶୁ ଅପପୁଷ୍ଟି (SAM) ସମ୍ପର୍କିତ ପରିବେଶ ଓ ଜୀବାଣୁଜନିତ କାରଣ",
        "ଋତୁକାଳୀନ ପ୍ରତିକୂଳ ପାଗ ବା ଅପରିଷ୍କାର ପରିବେଶ",
        "ପୁଷ୍ଟିହୀନତା ବା ରୋଗ ପ୍ରତିରୋଧକ ଶକ୍ତିର ଅଭାବ"
      ],
      "treatments": [
        "ଡାକ୍ତରଙ୍କ ପରାମର୍ଶ ଅନୁଯାୟୀ ପ୍ରମାଣିତ ଔଷଧ ସେବନ",
        "ପର୍ଯ୍ୟାପ୍ତ ପାଣି ପିଇବା, ପୁଷ୍ଟିକର ଖାଦ୍ୟ ଓ ବିଶ୍ରାମ",
        "ଓଡ଼ିଶା ସରକାରୀ ଡାକ୍ତରଖାନାରେ ମାଗଣା ଚିକିତ୍ସା ଓ ପରୀକ୍ଷା"
      ],
      "prevention": [
        "ବ୍ୟକ୍ତିଗତ ଓ ପରିବେଶ ପରିମଳ ସର୍ବଦା ବଜାୟ ରଖନ୍ତୁ",
        "ସ୍ୱାସ୍ଥ୍ୟ ବିଭାଗର ନିର୍ଦ୍ଦେଶାବଳୀ ପାଳନ କରନ୍ତୁ",
        "ସମୟ ଅନୁଯାୟୀ ଟିକାକରଣ ଓ ସ୍ୱାସ୍ଥ୍ୟ ଯାଞ୍ଚ କରାନ୍ତୁ"
      ],
      "dos": [
        "ଲକ୍ଷଣ ଦେଖାଦେବା ମାତ୍ରେ ଡାକ୍ତରଙ୍କ ସହ ପରାମର୍ଶ କରନ୍ତୁ",
        "ଡାକ୍ତର ଦେଇଥିବା ଔଷଧ କୋର୍ସ ସମ୍ପୂର୍ଣ୍ଣ ଶେଷ କରନ୍ତୁ",
        "ଫୁଟା ପାଣି ଓ ପୁଷ୍ଟିକର ଖାଦ୍ୟ ଖାଆନ୍ତୁ"
      ],
      "donts": [
        "ଡାକ୍ତରଙ୍କ ବିନା ପରାମର୍ଶରେ ମେଡିସିନ୍ ଦୋକାନରୁ ଔଷଧ ଖାଆନ୍ତୁ ନାହିଁ",
        "ଗୁରୁତର ଲକ୍ଷଣ ଥିଲେ ଡାକ୍ତରଖାନା ଯିବାରେ ଡେରି କରନ୍ତୁ ନାହିଁ",
        "ଅପରିଷ୍କାର ଓ ବାସି ଖାଦ୍ୟ ଖାଆନ୍ତୁ ନାହିଁ"
      ],
      "whenToSeeDoctor": [
        "ଲଗାତାର ତେଜ ଜ୍ୱର ଲାଗିରହିଲେ",
        "ନିଶ୍ୱାସ ନେବାରେ କଷ୍ଟ ହେଲେ ବା ଚେତା ହରାଇଲେ",
        "ପାଣି ପିଇ ନପାରିଲେ ବା ବାରମ୍ବାର ବାନ୍ତି ହେଲେ"
      ],
      "faqs": [
        {
          "question": "ଓଡ଼ିଶାରେ ଶିଶୁ ଅପପୁଷ୍ଟି (SAM) ର ଚିକିତ୍ସା ମାଗଣାରେ ମିଳେ କି?",
          "answer": "ହଁ, ନିରାମୟ ଯୋଜନା ଓ ବିଜୁ ସ୍ୱାସ୍ଥ୍ୟ କଲ୍ୟାଣ ଯୋଜନାରେ ସମସ୍ତ ସରକାରୀ ଡାକ୍ତରଖାନାରେ ମାଗଣା ପରୀକ୍ଷା ଓ ଔଷଧ ଉପଲବ୍ଧ।"
        },
        {
          "question": "କେବେ ଡାକ୍ତରଖାନା ଯିବା ଉଚିତ?",
          "answer": "ଗୁରୁତର ଲକ୍ଷଣ ଦେଖାଦେବା ମାତ୍ରେ ତୁରନ୍ତ ଡାକ୍ତରଖାନା ଯିବା ଉଚିତ।"
        }
      ]
    }
  },
  {
    "id": "dis-22-iron-deficiency-anemia-in-pregnancy",
    "category": "Maternal & Child",
    "severity": "Moderate",
    "transmission": "Nutritional iron and folate deficiency",
    "en": {
      "name": "Iron Deficiency Anemia in Pregnancy",
      "overview": "Detailed clinical guidance, prevention, and government health support in Odisha for Iron Deficiency Anemia in Pregnancy.",
      "symptoms": [
        "Primary localized pain, fever, or discomfort",
        "Fatigue and reduced physical stamina",
        "Loss of normal appetite and mild headache",
        "Associated diagnostic clinical signs specific to condition"
      ],
      "causes": [
        "Etiological factors and environmental exposure related to Iron Deficiency Anemia in Pregnancy",
        "Unfavorable seasonal conditions or unhygienic community environment",
        "Nutritional or metabolic susceptibility factors"
      ],
      "treatments": [
        "Evidence-based pharmacotherapy prescribed by medical officer",
        "Adequate fluid intake, nutritious diet, and supportive care",
        "Free treatment and diagnostic screening available at Odisha CHCs and DHHs"
      ],
      "prevention": [
        "Maintain strict personal, domestic, and water hygiene",
        "Adhere to public health department guidelines and advisories",
        "Timely immunization and regular screening visits"
      ],
      "dos": [
        "Consult a qualified medical officer at early onset of symptoms",
        "Complete the prescribed medical regimen without skipping doses",
        "Maintain clean drinking water and well-balanced nutrition"
      ],
      "donts": [
        "Do not self-medicate or purchase unverified over-the-counter drugs",
        "Do not delay seeking medical care if red flag symptoms emerge",
        "Do not consume unhygienic or contaminated food and water"
      ],
      "whenToSeeDoctor": [
        "High continuous fever not responding to antipyretics",
        "Breathing difficulty, extreme fatigue, or fainting",
        "Inability to eat or drink oral fluids"
      ],
      "faqs": [
        {
          "question": "Is treatment for Iron Deficiency Anemia in Pregnancy available free in Odisha?",
          "answer": "Yes, under Niramaya scheme and BSKY, free diagnostics and medicines are provided across Odisha government facilities."
        },
        {
          "question": "When should one visit the nearest hospital?",
          "answer": "Visit the hospital at first onset of severe symptoms or if home recovery is slow after 48 hours."
        }
      ]
    },
    "or": {
      "name": "ଗର୍ଭାବସ୍ଥାରେ ରକ୍ତହୀନତା",
      "nativeName": "ଗର୍ଭାବସ୍ଥାରେ ରକ୍ତହୀନତା",
      "overview": "ଓଡ଼ିଶାର ଜନସାଧାରଣଙ୍କ ପାଇଁ ଗର୍ଭାବସ୍ଥାରେ ରକ୍ତହୀନତା ର ଡାକ୍ତରୀ ମାର୍ଗଦର୍ଶନ, ପ୍ରତିରୋଧ ଓ ସରକାରୀ ସହାୟତା।",
      "symptoms": [
        "ସ୍ଥାନୀୟ ଯନ୍ତ୍ରଣା, ଜ୍ୱର ବା ଅସ୍ୱସ୍ତି ଭାବ",
        "ଦୁର୍ବଳତା ଏବଂ ଶରୀରରେ ଶକ୍ତିର ଅଭାବ",
        "ଭୋକ କମିବା ଏବଂ ମୁଣ୍ଡବିନ୍ଧା",
        "ରୋଗ ସମ୍ପର୍କିତ ସାଧାରଣ ଡାକ୍ତରୀ ଲକ୍ଷଣ"
      ],
      "causes": [
        "ଗର୍ଭାବସ୍ଥାରେ ରକ୍ତହୀନତା ସମ୍ପର୍କିତ ପରିବେଶ ଓ ଜୀବାଣୁଜନିତ କାରଣ",
        "ଋତୁକାଳୀନ ପ୍ରତିକୂଳ ପାଗ ବା ଅପରିଷ୍କାର ପରିବେଶ",
        "ପୁଷ୍ଟିହୀନତା ବା ରୋଗ ପ୍ରତିରୋଧକ ଶକ୍ତିର ଅଭାବ"
      ],
      "treatments": [
        "ଡାକ୍ତରଙ୍କ ପରାମର୍ଶ ଅନୁଯାୟୀ ପ୍ରମାଣିତ ଔଷଧ ସେବନ",
        "ପର୍ଯ୍ୟାପ୍ତ ପାଣି ପିଇବା, ପୁଷ୍ଟିକର ଖାଦ୍ୟ ଓ ବିଶ୍ରାମ",
        "ଓଡ଼ିଶା ସରକାରୀ ଡାକ୍ତରଖାନାରେ ମାଗଣା ଚିକିତ୍ସା ଓ ପରୀକ୍ଷା"
      ],
      "prevention": [
        "ବ୍ୟକ୍ତିଗତ ଓ ପରିବେଶ ପରିମଳ ସର୍ବଦା ବଜାୟ ରଖନ୍ତୁ",
        "ସ୍ୱାସ୍ଥ୍ୟ ବିଭାଗର ନିର୍ଦ୍ଦେଶାବଳୀ ପାଳନ କରନ୍ତୁ",
        "ସମୟ ଅନୁଯାୟୀ ଟିକାକରଣ ଓ ସ୍ୱାସ୍ଥ୍ୟ ଯାଞ୍ଚ କରାନ୍ତୁ"
      ],
      "dos": [
        "ଲକ୍ଷଣ ଦେଖାଦେବା ମାତ୍ରେ ଡାକ୍ତରଙ୍କ ସହ ପରାମର୍ଶ କରନ୍ତୁ",
        "ଡାକ୍ତର ଦେଇଥିବା ଔଷଧ କୋର୍ସ ସମ୍ପୂର୍ଣ୍ଣ ଶେଷ କରନ୍ତୁ",
        "ଫୁଟା ପାଣି ଓ ପୁଷ୍ଟିକର ଖାଦ୍ୟ ଖାଆନ୍ତୁ"
      ],
      "donts": [
        "ଡାକ୍ତରଙ୍କ ବିନା ପରାମର୍ଶରେ ମେଡିସିନ୍ ଦୋକାନରୁ ଔଷଧ ଖାଆନ୍ତୁ ନାହିଁ",
        "ଗୁରୁତର ଲକ୍ଷଣ ଥିଲେ ଡାକ୍ତରଖାନା ଯିବାରେ ଡେରି କରନ୍ତୁ ନାହିଁ",
        "ଅପରିଷ୍କାର ଓ ବାସି ଖାଦ୍ୟ ଖାଆନ୍ତୁ ନାହିଁ"
      ],
      "whenToSeeDoctor": [
        "ଲଗାତାର ତେଜ ଜ୍ୱର ଲାଗିରହିଲେ",
        "ନିଶ୍ୱାସ ନେବାରେ କଷ୍ଟ ହେଲେ ବା ଚେତା ହରାଇଲେ",
        "ପାଣି ପିଇ ନପାରିଲେ ବା ବାରମ୍ବାର ବାନ୍ତି ହେଲେ"
      ],
      "faqs": [
        {
          "question": "ଓଡ଼ିଶାରେ ଗର୍ଭାବସ୍ଥାରେ ରକ୍ତହୀନତା ର ଚିକିତ୍ସା ମାଗଣାରେ ମିଳେ କି?",
          "answer": "ହଁ, ନିରାମୟ ଯୋଜନା ଓ ବିଜୁ ସ୍ୱାସ୍ଥ୍ୟ କଲ୍ୟାଣ ଯୋଜନାରେ ସମସ୍ତ ସରକାରୀ ଡାକ୍ତରଖାନାରେ ମାଗଣା ପରୀକ୍ଷା ଓ ଔଷଧ ଉପଲବ୍ଧ।"
        },
        {
          "question": "କେବେ ଡାକ୍ତରଖାନା ଯିବା ଉଚିତ?",
          "answer": "ଗୁରୁତର ଲକ୍ଷଣ ଦେଖାଦେବା ମାତ୍ରେ ତୁରନ୍ତ ଡାକ୍ତରଖାନା ଯିବା ଉଚିତ।"
        }
      ]
    }
  },
  {
    "id": "dis-23-type-2-diabetes-mellitus-madhumeha-",
    "category": "Chronic & Lifestyle",
    "severity": "Moderate",
    "transmission": "Non-communicable metabolic disorder",
    "en": {
      "name": "Type 2 Diabetes Mellitus (Madhumeha)",
      "overview": "Detailed clinical guidance, prevention, and government health support in Odisha for Type 2 Diabetes Mellitus (Madhumeha).",
      "symptoms": [
        "Primary localized pain, fever, or discomfort",
        "Fatigue and reduced physical stamina",
        "Loss of normal appetite and mild headache",
        "Associated diagnostic clinical signs specific to condition"
      ],
      "causes": [
        "Etiological factors and environmental exposure related to Type 2 Diabetes Mellitus (Madhumeha)",
        "Unfavorable seasonal conditions or unhygienic community environment",
        "Nutritional or metabolic susceptibility factors"
      ],
      "treatments": [
        "Evidence-based pharmacotherapy prescribed by medical officer",
        "Adequate fluid intake, nutritious diet, and supportive care",
        "Free treatment and diagnostic screening available at Odisha CHCs and DHHs"
      ],
      "prevention": [
        "Maintain strict personal, domestic, and water hygiene",
        "Adhere to public health department guidelines and advisories",
        "Timely immunization and regular screening visits"
      ],
      "dos": [
        "Consult a qualified medical officer at early onset of symptoms",
        "Complete the prescribed medical regimen without skipping doses",
        "Maintain clean drinking water and well-balanced nutrition"
      ],
      "donts": [
        "Do not self-medicate or purchase unverified over-the-counter drugs",
        "Do not delay seeking medical care if red flag symptoms emerge",
        "Do not consume unhygienic or contaminated food and water"
      ],
      "whenToSeeDoctor": [
        "High continuous fever not responding to antipyretics",
        "Breathing difficulty, extreme fatigue, or fainting",
        "Inability to eat or drink oral fluids"
      ],
      "faqs": [
        {
          "question": "Is treatment for Type 2 Diabetes Mellitus (Madhumeha) available free in Odisha?",
          "answer": "Yes, under Niramaya scheme and BSKY, free diagnostics and medicines are provided across Odisha government facilities."
        },
        {
          "question": "When should one visit the nearest hospital?",
          "answer": "Visit the hospital at first onset of severe symptoms or if home recovery is slow after 48 hours."
        }
      ]
    },
    "or": {
      "name": "ମଧୁମେହ (ଡାଇବେଟିସ୍)",
      "nativeName": "ମଧୁମେହ (ଡାଇବେଟିସ୍)",
      "overview": "ଓଡ଼ିଶାର ଜନସାଧାରଣଙ୍କ ପାଇଁ ମଧୁମେହ (ଡାଇବେଟିସ୍) ର ଡାକ୍ତରୀ ମାର୍ଗଦର୍ଶନ, ପ୍ରତିରୋଧ ଓ ସରକାରୀ ସହାୟତା।",
      "symptoms": [
        "ସ୍ଥାନୀୟ ଯନ୍ତ୍ରଣା, ଜ୍ୱର ବା ଅସ୍ୱସ୍ତି ଭାବ",
        "ଦୁର୍ବଳତା ଏବଂ ଶରୀରରେ ଶକ୍ତିର ଅଭାବ",
        "ଭୋକ କମିବା ଏବଂ ମୁଣ୍ଡବିନ୍ଧା",
        "ରୋଗ ସମ୍ପର୍କିତ ସାଧାରଣ ଡାକ୍ତରୀ ଲକ୍ଷଣ"
      ],
      "causes": [
        "ମଧୁମେହ (ଡାଇବେଟିସ୍) ସମ୍ପର୍କିତ ପରିବେଶ ଓ ଜୀବାଣୁଜନିତ କାରଣ",
        "ଋତୁକାଳୀନ ପ୍ରତିକୂଳ ପାଗ ବା ଅପରିଷ୍କାର ପରିବେଶ",
        "ପୁଷ୍ଟିହୀନତା ବା ରୋଗ ପ୍ରତିରୋଧକ ଶକ୍ତିର ଅଭାବ"
      ],
      "treatments": [
        "ଡାକ୍ତରଙ୍କ ପରାମର୍ଶ ଅନୁଯାୟୀ ପ୍ରମାଣିତ ଔଷଧ ସେବନ",
        "ପର୍ଯ୍ୟାପ୍ତ ପାଣି ପିଇବା, ପୁଷ୍ଟିକର ଖାଦ୍ୟ ଓ ବିଶ୍ରାମ",
        "ଓଡ଼ିଶା ସରକାରୀ ଡାକ୍ତରଖାନାରେ ମାଗଣା ଚିକିତ୍ସା ଓ ପରୀକ୍ଷା"
      ],
      "prevention": [
        "ବ୍ୟକ୍ତିଗତ ଓ ପରିବେଶ ପରିମଳ ସର୍ବଦା ବଜାୟ ରଖନ୍ତୁ",
        "ସ୍ୱାସ୍ଥ୍ୟ ବିଭାଗର ନିର୍ଦ୍ଦେଶାବଳୀ ପାଳନ କରନ୍ତୁ",
        "ସମୟ ଅନୁଯାୟୀ ଟିକାକରଣ ଓ ସ୍ୱାସ୍ଥ୍ୟ ଯାଞ୍ଚ କରାନ୍ତୁ"
      ],
      "dos": [
        "ଲକ୍ଷଣ ଦେଖାଦେବା ମାତ୍ରେ ଡାକ୍ତରଙ୍କ ସହ ପରାମର୍ଶ କରନ୍ତୁ",
        "ଡାକ୍ତର ଦେଇଥିବା ଔଷଧ କୋର୍ସ ସମ୍ପୂର୍ଣ୍ଣ ଶେଷ କରନ୍ତୁ",
        "ଫୁଟା ପାଣି ଓ ପୁଷ୍ଟିକର ଖାଦ୍ୟ ଖାଆନ୍ତୁ"
      ],
      "donts": [
        "ଡାକ୍ତରଙ୍କ ବିନା ପରାମର୍ଶରେ ମେଡିସିନ୍ ଦୋକାନରୁ ଔଷଧ ଖାଆନ୍ତୁ ନାହିଁ",
        "ଗୁରୁତର ଲକ୍ଷଣ ଥିଲେ ଡାକ୍ତରଖାନା ଯିବାରେ ଡେରି କରନ୍ତୁ ନାହିଁ",
        "ଅପରିଷ୍କାର ଓ ବାସି ଖାଦ୍ୟ ଖାଆନ୍ତୁ ନାହିଁ"
      ],
      "whenToSeeDoctor": [
        "ଲଗାତାର ତେଜ ଜ୍ୱର ଲାଗିରହିଲେ",
        "ନିଶ୍ୱାସ ନେବାରେ କଷ୍ଟ ହେଲେ ବା ଚେତା ହରାଇଲେ",
        "ପାଣି ପିଇ ନପାରିଲେ ବା ବାରମ୍ବାର ବାନ୍ତି ହେଲେ"
      ],
      "faqs": [
        {
          "question": "ଓଡ଼ିଶାରେ ମଧୁମେହ (ଡାଇବେଟିସ୍) ର ଚିକିତ୍ସା ମାଗଣାରେ ମିଳେ କି?",
          "answer": "ହଁ, ନିରାମୟ ଯୋଜନା ଓ ବିଜୁ ସ୍ୱାସ୍ଥ୍ୟ କଲ୍ୟାଣ ଯୋଜନାରେ ସମସ୍ତ ସରକାରୀ ଡାକ୍ତରଖାନାରେ ମାଗଣା ପରୀକ୍ଷା ଓ ଔଷଧ ଉପଲବ୍ଧ।"
        },
        {
          "question": "କେବେ ଡାକ୍ତରଖାନା ଯିବା ଉଚିତ?",
          "answer": "ଗୁରୁତର ଲକ୍ଷଣ ଦେଖାଦେବା ମାତ୍ରେ ତୁରନ୍ତ ଡାକ୍ତରଖାନା ଯିବା ଉଚିତ।"
        }
      ]
    }
  },
  {
    "id": "dis-24-hypertension-high-blood-pressure",
    "category": "Chronic & Lifestyle",
    "severity": "Moderate",
    "transmission": "Lifestyle, high dietary salt, and cardiovascular factors",
    "en": {
      "name": "Hypertension & High Blood Pressure",
      "overview": "Detailed clinical guidance, prevention, and government health support in Odisha for Hypertension & High Blood Pressure.",
      "symptoms": [
        "Primary localized pain, fever, or discomfort",
        "Fatigue and reduced physical stamina",
        "Loss of normal appetite and mild headache",
        "Associated diagnostic clinical signs specific to condition"
      ],
      "causes": [
        "Etiological factors and environmental exposure related to Hypertension & High Blood Pressure",
        "Unfavorable seasonal conditions or unhygienic community environment",
        "Nutritional or metabolic susceptibility factors"
      ],
      "treatments": [
        "Evidence-based pharmacotherapy prescribed by medical officer",
        "Adequate fluid intake, nutritious diet, and supportive care",
        "Free treatment and diagnostic screening available at Odisha CHCs and DHHs"
      ],
      "prevention": [
        "Maintain strict personal, domestic, and water hygiene",
        "Adhere to public health department guidelines and advisories",
        "Timely immunization and regular screening visits"
      ],
      "dos": [
        "Consult a qualified medical officer at early onset of symptoms",
        "Complete the prescribed medical regimen without skipping doses",
        "Maintain clean drinking water and well-balanced nutrition"
      ],
      "donts": [
        "Do not self-medicate or purchase unverified over-the-counter drugs",
        "Do not delay seeking medical care if red flag symptoms emerge",
        "Do not consume unhygienic or contaminated food and water"
      ],
      "whenToSeeDoctor": [
        "High continuous fever not responding to antipyretics",
        "Breathing difficulty, extreme fatigue, or fainting",
        "Inability to eat or drink oral fluids"
      ],
      "faqs": [
        {
          "question": "Is treatment for Hypertension & High Blood Pressure available free in Odisha?",
          "answer": "Yes, under Niramaya scheme and BSKY, free diagnostics and medicines are provided across Odisha government facilities."
        },
        {
          "question": "When should one visit the nearest hospital?",
          "answer": "Visit the hospital at first onset of severe symptoms or if home recovery is slow after 48 hours."
        }
      ]
    },
    "or": {
      "name": "ଉଚ୍ଚ ରକ୍ତଚାପ (ହାଇପରଟେନସନ)",
      "nativeName": "ଉଚ୍ଚ ରକ୍ତଚାପ (ହାଇପରଟେନସନ)",
      "overview": "ଓଡ଼ିଶାର ଜନସାଧାରଣଙ୍କ ପାଇଁ ଉଚ୍ଚ ରକ୍ତଚାପ (ହାଇପରଟେନସନ) ର ଡାକ୍ତରୀ ମାର୍ଗଦର୍ଶନ, ପ୍ରତିରୋଧ ଓ ସରକାରୀ ସହାୟତା।",
      "symptoms": [
        "ସ୍ଥାନୀୟ ଯନ୍ତ୍ରଣା, ଜ୍ୱର ବା ଅସ୍ୱସ୍ତି ଭାବ",
        "ଦୁର୍ବଳତା ଏବଂ ଶରୀରରେ ଶକ୍ତିର ଅଭାବ",
        "ଭୋକ କମିବା ଏବଂ ମୁଣ୍ଡବିନ୍ଧା",
        "ରୋଗ ସମ୍ପର୍କିତ ସାଧାରଣ ଡାକ୍ତରୀ ଲକ୍ଷଣ"
      ],
      "causes": [
        "ଉଚ୍ଚ ରକ୍ତଚାପ (ହାଇପରଟେନସନ) ସମ୍ପର୍କିତ ପରିବେଶ ଓ ଜୀବାଣୁଜନିତ କାରଣ",
        "ଋତୁକାଳୀନ ପ୍ରତିକୂଳ ପାଗ ବା ଅପରିଷ୍କାର ପରିବେଶ",
        "ପୁଷ୍ଟିହୀନତା ବା ରୋଗ ପ୍ରତିରୋଧକ ଶକ୍ତିର ଅଭାବ"
      ],
      "treatments": [
        "ଡାକ୍ତରଙ୍କ ପରାମର୍ଶ ଅନୁଯାୟୀ ପ୍ରମାଣିତ ଔଷଧ ସେବନ",
        "ପର୍ଯ୍ୟାପ୍ତ ପାଣି ପିଇବା, ପୁଷ୍ଟିକର ଖାଦ୍ୟ ଓ ବିଶ୍ରାମ",
        "ଓଡ଼ିଶା ସରକାରୀ ଡାକ୍ତରଖାନାରେ ମାଗଣା ଚିକିତ୍ସା ଓ ପରୀକ୍ଷା"
      ],
      "prevention": [
        "ବ୍ୟକ୍ତିଗତ ଓ ପରିବେଶ ପରିମଳ ସର୍ବଦା ବଜାୟ ରଖନ୍ତୁ",
        "ସ୍ୱାସ୍ଥ୍ୟ ବିଭାଗର ନିର୍ଦ୍ଦେଶାବଳୀ ପାଳନ କରନ୍ତୁ",
        "ସମୟ ଅନୁଯାୟୀ ଟିକାକରଣ ଓ ସ୍ୱାସ୍ଥ୍ୟ ଯାଞ୍ଚ କରାନ୍ତୁ"
      ],
      "dos": [
        "ଲକ୍ଷଣ ଦେଖାଦେବା ମାତ୍ରେ ଡାକ୍ତରଙ୍କ ସହ ପରାମର୍ଶ କରନ୍ତୁ",
        "ଡାକ୍ତର ଦେଇଥିବା ଔଷଧ କୋର୍ସ ସମ୍ପୂର୍ଣ୍ଣ ଶେଷ କରନ୍ତୁ",
        "ଫୁଟା ପାଣି ଓ ପୁଷ୍ଟିକର ଖାଦ୍ୟ ଖାଆନ୍ତୁ"
      ],
      "donts": [
        "ଡାକ୍ତରଙ୍କ ବିନା ପରାମର୍ଶରେ ମେଡିସିନ୍ ଦୋକାନରୁ ଔଷଧ ଖାଆନ୍ତୁ ନାହିଁ",
        "ଗୁରୁତର ଲକ୍ଷଣ ଥିଲେ ଡାକ୍ତରଖାନା ଯିବାରେ ଡେରି କରନ୍ତୁ ନାହିଁ",
        "ଅପରିଷ୍କାର ଓ ବାସି ଖାଦ୍ୟ ଖାଆନ୍ତୁ ନାହିଁ"
      ],
      "whenToSeeDoctor": [
        "ଲଗାତାର ତେଜ ଜ୍ୱର ଲାଗିରହିଲେ",
        "ନିଶ୍ୱାସ ନେବାରେ କଷ୍ଟ ହେଲେ ବା ଚେତା ହରାଇଲେ",
        "ପାଣି ପିଇ ନପାରିଲେ ବା ବାରମ୍ବାର ବାନ୍ତି ହେଲେ"
      ],
      "faqs": [
        {
          "question": "ଓଡ଼ିଶାରେ ଉଚ୍ଚ ରକ୍ତଚାପ (ହାଇପରଟେନସନ) ର ଚିକିତ୍ସା ମାଗଣାରେ ମିଳେ କି?",
          "answer": "ହଁ, ନିରାମୟ ଯୋଜନା ଓ ବିଜୁ ସ୍ୱାସ୍ଥ୍ୟ କଲ୍ୟାଣ ଯୋଜନାରେ ସମସ୍ତ ସରକାରୀ ଡାକ୍ତରଖାନାରେ ମାଗଣା ପରୀକ୍ଷା ଓ ଔଷଧ ଉପଲବ୍ଧ।"
        },
        {
          "question": "କେବେ ଡାକ୍ତରଖାନା ଯିବା ଉଚିତ?",
          "answer": "ଗୁରୁତର ଲକ୍ଷଣ ଦେଖାଦେବା ମାତ୍ରେ ତୁରନ୍ତ ଡାକ୍ତରଖାନା ଯିବା ଉଚିତ।"
        }
      ]
    }
  },
  {
    "id": "dis-25-chronic-kidney-disease-renal-calculi-pathuri-",
    "category": "Chronic & Lifestyle",
    "severity": "High",
    "transmission": "Dehydration, metabolic factors, and recurrent stones",
    "en": {
      "name": "Chronic Kidney Disease & Renal Calculi (Pathuri)",
      "overview": "Detailed clinical guidance, prevention, and government health support in Odisha for Chronic Kidney Disease & Renal Calculi (Pathuri).",
      "symptoms": [
        "Primary localized pain, fever, or discomfort",
        "Fatigue and reduced physical stamina",
        "Loss of normal appetite and mild headache",
        "Associated diagnostic clinical signs specific to condition"
      ],
      "causes": [
        "Etiological factors and environmental exposure related to Chronic Kidney Disease & Renal Calculi (Pathuri)",
        "Unfavorable seasonal conditions or unhygienic community environment",
        "Nutritional or metabolic susceptibility factors"
      ],
      "treatments": [
        "Evidence-based pharmacotherapy prescribed by medical officer",
        "Adequate fluid intake, nutritious diet, and supportive care",
        "Free treatment and diagnostic screening available at Odisha CHCs and DHHs"
      ],
      "prevention": [
        "Maintain strict personal, domestic, and water hygiene",
        "Adhere to public health department guidelines and advisories",
        "Timely immunization and regular screening visits"
      ],
      "dos": [
        "Consult a qualified medical officer at early onset of symptoms",
        "Complete the prescribed medical regimen without skipping doses",
        "Maintain clean drinking water and well-balanced nutrition"
      ],
      "donts": [
        "Do not self-medicate or purchase unverified over-the-counter drugs",
        "Do not delay seeking medical care if red flag symptoms emerge",
        "Do not consume unhygienic or contaminated food and water"
      ],
      "whenToSeeDoctor": [
        "High continuous fever not responding to antipyretics",
        "Breathing difficulty, extreme fatigue, or fainting",
        "Inability to eat or drink oral fluids"
      ],
      "faqs": [
        {
          "question": "Is treatment for Chronic Kidney Disease & Renal Calculi (Pathuri) available free in Odisha?",
          "answer": "Yes, under Niramaya scheme and BSKY, free diagnostics and medicines are provided across Odisha government facilities."
        },
        {
          "question": "When should one visit the nearest hospital?",
          "answer": "Visit the hospital at first onset of severe symptoms or if home recovery is slow after 48 hours."
        }
      ]
    },
    "or": {
      "name": "କିଡନୀ ପଥର ଓ ବୃକ୍‌କ ବିକାର",
      "nativeName": "କିଡନୀ ପଥର ଓ ବୃକ୍‌କ ବିକାର",
      "overview": "ଓଡ଼ିଶାର ଜନସାଧାରଣଙ୍କ ପାଇଁ କିଡନୀ ପଥର ଓ ବୃକ୍‌କ ବିକାର ର ଡାକ୍ତରୀ ମାର୍ଗଦର୍ଶନ, ପ୍ରତିରୋଧ ଓ ସରକାରୀ ସହାୟତା।",
      "symptoms": [
        "ସ୍ଥାନୀୟ ଯନ୍ତ୍ରଣା, ଜ୍ୱର ବା ଅସ୍ୱସ୍ତି ଭାବ",
        "ଦୁର୍ବଳତା ଏବଂ ଶରୀରରେ ଶକ୍ତିର ଅଭାବ",
        "ଭୋକ କମିବା ଏବଂ ମୁଣ୍ଡବିନ୍ଧା",
        "ରୋଗ ସମ୍ପର୍କିତ ସାଧାରଣ ଡାକ୍ତରୀ ଲକ୍ଷଣ"
      ],
      "causes": [
        "କିଡନୀ ପଥର ଓ ବୃକ୍‌କ ବିକାର ସମ୍ପର୍କିତ ପରିବେଶ ଓ ଜୀବାଣୁଜନିତ କାରଣ",
        "ଋତୁକାଳୀନ ପ୍ରତିକୂଳ ପାଗ ବା ଅପରିଷ୍କାର ପରିବେଶ",
        "ପୁଷ୍ଟିହୀନତା ବା ରୋଗ ପ୍ରତିରୋଧକ ଶକ୍ତିର ଅଭାବ"
      ],
      "treatments": [
        "ଡାକ୍ତରଙ୍କ ପରାମର୍ଶ ଅନୁଯାୟୀ ପ୍ରମାଣିତ ଔଷଧ ସେବନ",
        "ପର୍ଯ୍ୟାପ୍ତ ପାଣି ପିଇବା, ପୁଷ୍ଟିକର ଖାଦ୍ୟ ଓ ବିଶ୍ରାମ",
        "ଓଡ଼ିଶା ସରକାରୀ ଡାକ୍ତରଖାନାରେ ମାଗଣା ଚିକିତ୍ସା ଓ ପରୀକ୍ଷା"
      ],
      "prevention": [
        "ବ୍ୟକ୍ତିଗତ ଓ ପରିବେଶ ପରିମଳ ସର୍ବଦା ବଜାୟ ରଖନ୍ତୁ",
        "ସ୍ୱାସ୍ଥ୍ୟ ବିଭାଗର ନିର୍ଦ୍ଦେଶାବଳୀ ପାଳନ କରନ୍ତୁ",
        "ସମୟ ଅନୁଯାୟୀ ଟିକାକରଣ ଓ ସ୍ୱାସ୍ଥ୍ୟ ଯାଞ୍ଚ କରାନ୍ତୁ"
      ],
      "dos": [
        "ଲକ୍ଷଣ ଦେଖାଦେବା ମାତ୍ରେ ଡାକ୍ତରଙ୍କ ସହ ପରାମର୍ଶ କରନ୍ତୁ",
        "ଡାକ୍ତର ଦେଇଥିବା ଔଷଧ କୋର୍ସ ସମ୍ପୂର୍ଣ୍ଣ ଶେଷ କରନ୍ତୁ",
        "ଫୁଟା ପାଣି ଓ ପୁଷ୍ଟିକର ଖାଦ୍ୟ ଖାଆନ୍ତୁ"
      ],
      "donts": [
        "ଡାକ୍ତରଙ୍କ ବିନା ପରାମର୍ଶରେ ମେଡିସିନ୍ ଦୋକାନରୁ ଔଷଧ ଖାଆନ୍ତୁ ନାହିଁ",
        "ଗୁରୁତର ଲକ୍ଷଣ ଥିଲେ ଡାକ୍ତରଖାନା ଯିବାରେ ଡେରି କରନ୍ତୁ ନାହିଁ",
        "ଅପରିଷ୍କାର ଓ ବାସି ଖାଦ୍ୟ ଖାଆନ୍ତୁ ନାହିଁ"
      ],
      "whenToSeeDoctor": [
        "ଲଗାତାର ତେଜ ଜ୍ୱର ଲାଗିରହିଲେ",
        "ନିଶ୍ୱାସ ନେବାରେ କଷ୍ଟ ହେଲେ ବା ଚେତା ହରାଇଲେ",
        "ପାଣି ପିଇ ନପାରିଲେ ବା ବାରମ୍ବାର ବାନ୍ତି ହେଲେ"
      ],
      "faqs": [
        {
          "question": "ଓଡ଼ିଶାରେ କିଡନୀ ପଥର ଓ ବୃକ୍‌କ ବିକାର ର ଚିକିତ୍ସା ମାଗଣାରେ ମିଳେ କି?",
          "answer": "ହଁ, ନିରାମୟ ଯୋଜନା ଓ ବିଜୁ ସ୍ୱାସ୍ଥ୍ୟ କଲ୍ୟାଣ ଯୋଜନାରେ ସମସ୍ତ ସରକାରୀ ଡାକ୍ତରଖାନାରେ ମାଗଣା ପରୀକ୍ଷା ଓ ଔଷଧ ଉପଲବ୍ଧ।"
        },
        {
          "question": "କେବେ ଡାକ୍ତରଖାନା ଯିବା ଉଚିତ?",
          "answer": "ଗୁରୁତର ଲକ୍ଷଣ ଦେଖାଦେବା ମାତ୍ରେ ତୁରନ୍ତ ଡାକ୍ତରଖାନା ଯିବା ଉଚିତ।"
        }
      ]
    }
  },
  {
    "id": "dis-26-asthma-chronic-bronchitis-hapani-",
    "category": "Chronic & Lifestyle",
    "severity": "Moderate",
    "transmission": "Airway hyper-reactivity, dust, smoke, and pollen",
    "en": {
      "name": "Asthma & Chronic Bronchitis (Hapani)",
      "overview": "Detailed clinical guidance, prevention, and government health support in Odisha for Asthma & Chronic Bronchitis (Hapani).",
      "symptoms": [
        "Primary localized pain, fever, or discomfort",
        "Fatigue and reduced physical stamina",
        "Loss of normal appetite and mild headache",
        "Associated diagnostic clinical signs specific to condition"
      ],
      "causes": [
        "Etiological factors and environmental exposure related to Asthma & Chronic Bronchitis (Hapani)",
        "Unfavorable seasonal conditions or unhygienic community environment",
        "Nutritional or metabolic susceptibility factors"
      ],
      "treatments": [
        "Evidence-based pharmacotherapy prescribed by medical officer",
        "Adequate fluid intake, nutritious diet, and supportive care",
        "Free treatment and diagnostic screening available at Odisha CHCs and DHHs"
      ],
      "prevention": [
        "Maintain strict personal, domestic, and water hygiene",
        "Adhere to public health department guidelines and advisories",
        "Timely immunization and regular screening visits"
      ],
      "dos": [
        "Consult a qualified medical officer at early onset of symptoms",
        "Complete the prescribed medical regimen without skipping doses",
        "Maintain clean drinking water and well-balanced nutrition"
      ],
      "donts": [
        "Do not self-medicate or purchase unverified over-the-counter drugs",
        "Do not delay seeking medical care if red flag symptoms emerge",
        "Do not consume unhygienic or contaminated food and water"
      ],
      "whenToSeeDoctor": [
        "High continuous fever not responding to antipyretics",
        "Breathing difficulty, extreme fatigue, or fainting",
        "Inability to eat or drink oral fluids"
      ],
      "faqs": [
        {
          "question": "Is treatment for Asthma & Chronic Bronchitis (Hapani) available free in Odisha?",
          "answer": "Yes, under Niramaya scheme and BSKY, free diagnostics and medicines are provided across Odisha government facilities."
        },
        {
          "question": "When should one visit the nearest hospital?",
          "answer": "Visit the hospital at first onset of severe symptoms or if home recovery is slow after 48 hours."
        }
      ]
    },
    "or": {
      "name": "ହାପାନି ଓ ଶ୍ୱାସରୋଗ (ଆଜ୍‌ମା)",
      "nativeName": "ହାପାନି ଓ ଶ୍ୱାସରୋଗ (ଆଜ୍‌ମା)",
      "overview": "ଓଡ଼ିଶାର ଜନସାଧାରଣଙ୍କ ପାଇଁ ହାପାନି ଓ ଶ୍ୱାସରୋଗ (ଆଜ୍‌ମା) ର ଡାକ୍ତରୀ ମାର୍ଗଦର୍ଶନ, ପ୍ରତିରୋଧ ଓ ସରକାରୀ ସହାୟତା।",
      "symptoms": [
        "ସ୍ଥାନୀୟ ଯନ୍ତ୍ରଣା, ଜ୍ୱର ବା ଅସ୍ୱସ୍ତି ଭାବ",
        "ଦୁର୍ବଳତା ଏବଂ ଶରୀରରେ ଶକ୍ତିର ଅଭାବ",
        "ଭୋକ କମିବା ଏବଂ ମୁଣ୍ଡବିନ୍ଧା",
        "ରୋଗ ସମ୍ପର୍କିତ ସାଧାରଣ ଡାକ୍ତରୀ ଲକ୍ଷଣ"
      ],
      "causes": [
        "ହାପାନି ଓ ଶ୍ୱାସରୋଗ (ଆଜ୍‌ମା) ସମ୍ପର୍କିତ ପରିବେଶ ଓ ଜୀବାଣୁଜନିତ କାରଣ",
        "ଋତୁକାଳୀନ ପ୍ରତିକୂଳ ପାଗ ବା ଅପରିଷ୍କାର ପରିବେଶ",
        "ପୁଷ୍ଟିହୀନତା ବା ରୋଗ ପ୍ରତିରୋଧକ ଶକ୍ତିର ଅଭାବ"
      ],
      "treatments": [
        "ଡାକ୍ତରଙ୍କ ପରାମର୍ଶ ଅନୁଯାୟୀ ପ୍ରମାଣିତ ଔଷଧ ସେବନ",
        "ପର୍ଯ୍ୟାପ୍ତ ପାଣି ପିଇବା, ପୁଷ୍ଟିକର ଖାଦ୍ୟ ଓ ବିଶ୍ରାମ",
        "ଓଡ଼ିଶା ସରକାରୀ ଡାକ୍ତରଖାନାରେ ମାଗଣା ଚିକିତ୍ସା ଓ ପରୀକ୍ଷା"
      ],
      "prevention": [
        "ବ୍ୟକ୍ତିଗତ ଓ ପରିବେଶ ପରିମଳ ସର୍ବଦା ବଜାୟ ରଖନ୍ତୁ",
        "ସ୍ୱାସ୍ଥ୍ୟ ବିଭାଗର ନିର୍ଦ୍ଦେଶାବଳୀ ପାଳନ କରନ୍ତୁ",
        "ସମୟ ଅନୁଯାୟୀ ଟିକାକରଣ ଓ ସ୍ୱାସ୍ଥ୍ୟ ଯାଞ୍ଚ କରାନ୍ତୁ"
      ],
      "dos": [
        "ଲକ୍ଷଣ ଦେଖାଦେବା ମାତ୍ରେ ଡାକ୍ତରଙ୍କ ସହ ପରାମର୍ଶ କରନ୍ତୁ",
        "ଡାକ୍ତର ଦେଇଥିବା ଔଷଧ କୋର୍ସ ସମ୍ପୂର୍ଣ୍ଣ ଶେଷ କରନ୍ତୁ",
        "ଫୁଟା ପାଣି ଓ ପୁଷ୍ଟିକର ଖାଦ୍ୟ ଖାଆନ୍ତୁ"
      ],
      "donts": [
        "ଡାକ୍ତରଙ୍କ ବିନା ପରାମର୍ଶରେ ମେଡିସିନ୍ ଦୋକାନରୁ ଔଷଧ ଖାଆନ୍ତୁ ନାହିଁ",
        "ଗୁରୁତର ଲକ୍ଷଣ ଥିଲେ ଡାକ୍ତରଖାନା ଯିବାରେ ଡେରି କରନ୍ତୁ ନାହିଁ",
        "ଅପରିଷ୍କାର ଓ ବାସି ଖାଦ୍ୟ ଖାଆନ୍ତୁ ନାହିଁ"
      ],
      "whenToSeeDoctor": [
        "ଲଗାତାର ତେଜ ଜ୍ୱର ଲାଗିରହିଲେ",
        "ନିଶ୍ୱାସ ନେବାରେ କଷ୍ଟ ହେଲେ ବା ଚେତା ହରାଇଲେ",
        "ପାଣି ପିଇ ନପାରିଲେ ବା ବାରମ୍ବାର ବାନ୍ତି ହେଲେ"
      ],
      "faqs": [
        {
          "question": "ଓଡ଼ିଶାରେ ହାପାନି ଓ ଶ୍ୱାସରୋଗ (ଆଜ୍‌ମା) ର ଚିକିତ୍ସା ମାଗଣାରେ ମିଳେ କି?",
          "answer": "ହଁ, ନିରାମୟ ଯୋଜନା ଓ ବିଜୁ ସ୍ୱାସ୍ଥ୍ୟ କଲ୍ୟାଣ ଯୋଜନାରେ ସମସ୍ତ ସରକାରୀ ଡାକ୍ତରଖାନାରେ ମାଗଣା ପରୀକ୍ଷା ଓ ଔଷଧ ଉପଲବ୍ଧ।"
        },
        {
          "question": "କେବେ ଡାକ୍ତରଖାନା ଯିବା ଉଚିତ?",
          "answer": "ଗୁରୁତର ଲକ୍ଷଣ ଦେଖାଦେବା ମାତ୍ରେ ତୁରନ୍ତ ଡାକ୍ତରଖାନା ଯିବା ଉଚିତ।"
        }
      ]
    }
  },
  {
    "id": "dis-27-conjunctivitis-eye-flu-chakhyuroga-",
    "category": "ENT & Eye Care",
    "severity": "Mild",
    "transmission": "Viral/bacterial contact through fingers, towels, water",
    "en": {
      "name": "Conjunctivitis / Eye Flu (Chakhyuroga)",
      "overview": "Detailed clinical guidance, prevention, and government health support in Odisha for Conjunctivitis / Eye Flu (Chakhyuroga).",
      "symptoms": [
        "Primary localized pain, fever, or discomfort",
        "Fatigue and reduced physical stamina",
        "Loss of normal appetite and mild headache",
        "Associated diagnostic clinical signs specific to condition"
      ],
      "causes": [
        "Etiological factors and environmental exposure related to Conjunctivitis / Eye Flu (Chakhyuroga)",
        "Unfavorable seasonal conditions or unhygienic community environment",
        "Nutritional or metabolic susceptibility factors"
      ],
      "treatments": [
        "Evidence-based pharmacotherapy prescribed by medical officer",
        "Adequate fluid intake, nutritious diet, and supportive care",
        "Free treatment and diagnostic screening available at Odisha CHCs and DHHs"
      ],
      "prevention": [
        "Maintain strict personal, domestic, and water hygiene",
        "Adhere to public health department guidelines and advisories",
        "Timely immunization and regular screening visits"
      ],
      "dos": [
        "Consult a qualified medical officer at early onset of symptoms",
        "Complete the prescribed medical regimen without skipping doses",
        "Maintain clean drinking water and well-balanced nutrition"
      ],
      "donts": [
        "Do not self-medicate or purchase unverified over-the-counter drugs",
        "Do not delay seeking medical care if red flag symptoms emerge",
        "Do not consume unhygienic or contaminated food and water"
      ],
      "whenToSeeDoctor": [
        "High continuous fever not responding to antipyretics",
        "Breathing difficulty, extreme fatigue, or fainting",
        "Inability to eat or drink oral fluids"
      ],
      "faqs": [
        {
          "question": "Is treatment for Conjunctivitis / Eye Flu (Chakhyuroga) available free in Odisha?",
          "answer": "Yes, under Niramaya scheme and BSKY, free diagnostics and medicines are provided across Odisha government facilities."
        },
        {
          "question": "When should one visit the nearest hospital?",
          "answer": "Visit the hospital at first onset of severe symptoms or if home recovery is slow after 48 hours."
        }
      ]
    },
    "or": {
      "name": "ଆଖି ଧରିବା (ଚକ୍ଷୁରୋଗ / ଆଇ ଫ୍ଲୁ)",
      "nativeName": "ଆଖି ଧରିବା (ଚକ୍ଷୁରୋଗ / ଆଇ ଫ୍ଲୁ)",
      "overview": "ଓଡ଼ିଶାର ଜନସାଧାରଣଙ୍କ ପାଇଁ ଆଖି ଧରିବା (ଚକ୍ଷୁରୋଗ / ଆଇ ଫ୍ଲୁ) ର ଡାକ୍ତରୀ ମାର୍ଗଦର୍ଶନ, ପ୍ରତିରୋଧ ଓ ସରକାରୀ ସହାୟତା।",
      "symptoms": [
        "ସ୍ଥାନୀୟ ଯନ୍ତ୍ରଣା, ଜ୍ୱର ବା ଅସ୍ୱସ୍ତି ଭାବ",
        "ଦୁର୍ବଳତା ଏବଂ ଶରୀରରେ ଶକ୍ତିର ଅଭାବ",
        "ଭୋକ କମିବା ଏବଂ ମୁଣ୍ଡବିନ୍ଧା",
        "ରୋଗ ସମ୍ପର୍କିତ ସାଧାରଣ ଡାକ୍ତରୀ ଲକ୍ଷଣ"
      ],
      "causes": [
        "ଆଖି ଧରିବା (ଚକ୍ଷୁରୋଗ / ଆଇ ଫ୍ଲୁ) ସମ୍ପର୍କିତ ପରିବେଶ ଓ ଜୀବାଣୁଜନିତ କାରଣ",
        "ଋତୁକାଳୀନ ପ୍ରତିକୂଳ ପାଗ ବା ଅପରିଷ୍କାର ପରିବେଶ",
        "ପୁଷ୍ଟିହୀନତା ବା ରୋଗ ପ୍ରତିରୋଧକ ଶକ୍ତିର ଅଭାବ"
      ],
      "treatments": [
        "ଡାକ୍ତରଙ୍କ ପରାମର୍ଶ ଅନୁଯାୟୀ ପ୍ରମାଣିତ ଔଷଧ ସେବନ",
        "ପର୍ଯ୍ୟାପ୍ତ ପାଣି ପିଇବା, ପୁଷ୍ଟିକର ଖାଦ୍ୟ ଓ ବିଶ୍ରାମ",
        "ଓଡ଼ିଶା ସରକାରୀ ଡାକ୍ତରଖାନାରେ ମାଗଣା ଚିକିତ୍ସା ଓ ପରୀକ୍ଷା"
      ],
      "prevention": [
        "ବ୍ୟକ୍ତିଗତ ଓ ପରିବେଶ ପରିମଳ ସର୍ବଦା ବଜାୟ ରଖନ୍ତୁ",
        "ସ୍ୱାସ୍ଥ୍ୟ ବିଭାଗର ନିର୍ଦ୍ଦେଶାବଳୀ ପାଳନ କରନ୍ତୁ",
        "ସମୟ ଅନୁଯାୟୀ ଟିକାକରଣ ଓ ସ୍ୱାସ୍ଥ୍ୟ ଯାଞ୍ଚ କରାନ୍ତୁ"
      ],
      "dos": [
        "ଲକ୍ଷଣ ଦେଖାଦେବା ମାତ୍ରେ ଡାକ୍ତରଙ୍କ ସହ ପରାମର୍ଶ କରନ୍ତୁ",
        "ଡାକ୍ତର ଦେଇଥିବା ଔଷଧ କୋର୍ସ ସମ୍ପୂର୍ଣ୍ଣ ଶେଷ କରନ୍ତୁ",
        "ଫୁଟା ପାଣି ଓ ପୁଷ୍ଟିକର ଖାଦ୍ୟ ଖାଆନ୍ତୁ"
      ],
      "donts": [
        "ଡାକ୍ତରଙ୍କ ବିନା ପରାମର୍ଶରେ ମେଡିସିନ୍ ଦୋକାନରୁ ଔଷଧ ଖାଆନ୍ତୁ ନାହିଁ",
        "ଗୁରୁତର ଲକ୍ଷଣ ଥିଲେ ଡାକ୍ତରଖାନା ଯିବାରେ ଡେରି କରନ୍ତୁ ନାହିଁ",
        "ଅପରିଷ୍କାର ଓ ବାସି ଖାଦ୍ୟ ଖାଆନ୍ତୁ ନାହିଁ"
      ],
      "whenToSeeDoctor": [
        "ଲଗାତାର ତେଜ ଜ୍ୱର ଲାଗିରହିଲେ",
        "ନିଶ୍ୱାସ ନେବାରେ କଷ୍ଟ ହେଲେ ବା ଚେତା ହରାଇଲେ",
        "ପାଣି ପିଇ ନପାରିଲେ ବା ବାରମ୍ବାର ବାନ୍ତି ହେଲେ"
      ],
      "faqs": [
        {
          "question": "ଓଡ଼ିଶାରେ ଆଖି ଧରିବା (ଚକ୍ଷୁରୋଗ / ଆଇ ଫ୍ଲୁ) ର ଚିକିତ୍ସା ମାଗଣାରେ ମିଳେ କି?",
          "answer": "ହଁ, ନିରାମୟ ଯୋଜନା ଓ ବିଜୁ ସ୍ୱାସ୍ଥ୍ୟ କଲ୍ୟାଣ ଯୋଜନାରେ ସମସ୍ତ ସରକାରୀ ଡାକ୍ତରଖାନାରେ ମାଗଣା ପରୀକ୍ଷା ଓ ଔଷଧ ଉପଲବ୍ଧ।"
        },
        {
          "question": "କେବେ ଡାକ୍ତରଖାନା ଯିବା ଉଚିତ?",
          "answer": "ଗୁରୁତର ଲକ୍ଷଣ ଦେଖାଦେବା ମାତ୍ରେ ତୁରନ୍ତ ଡାକ୍ତରଖାନା ଯିବା ଉଚିତ।"
        }
      ]
    }
  },
  {
    "id": "dis-28-chickenpox-pani-photaka-milamila-",
    "category": "Viral Infection",
    "severity": "Moderate",
    "transmission": "Varicella zoster airborne respiratory droplets and blisters",
    "en": {
      "name": "Chickenpox (Pani Photaka / Milamila)",
      "overview": "Detailed clinical guidance, prevention, and government health support in Odisha for Chickenpox (Pani Photaka / Milamila).",
      "symptoms": [
        "Primary localized pain, fever, or discomfort",
        "Fatigue and reduced physical stamina",
        "Loss of normal appetite and mild headache",
        "Associated diagnostic clinical signs specific to condition"
      ],
      "causes": [
        "Etiological factors and environmental exposure related to Chickenpox (Pani Photaka / Milamila)",
        "Unfavorable seasonal conditions or unhygienic community environment",
        "Nutritional or metabolic susceptibility factors"
      ],
      "treatments": [
        "Evidence-based pharmacotherapy prescribed by medical officer",
        "Adequate fluid intake, nutritious diet, and supportive care",
        "Free treatment and diagnostic screening available at Odisha CHCs and DHHs"
      ],
      "prevention": [
        "Maintain strict personal, domestic, and water hygiene",
        "Adhere to public health department guidelines and advisories",
        "Timely immunization and regular screening visits"
      ],
      "dos": [
        "Consult a qualified medical officer at early onset of symptoms",
        "Complete the prescribed medical regimen without skipping doses",
        "Maintain clean drinking water and well-balanced nutrition"
      ],
      "donts": [
        "Do not self-medicate or purchase unverified over-the-counter drugs",
        "Do not delay seeking medical care if red flag symptoms emerge",
        "Do not consume unhygienic or contaminated food and water"
      ],
      "whenToSeeDoctor": [
        "High continuous fever not responding to antipyretics",
        "Breathing difficulty, extreme fatigue, or fainting",
        "Inability to eat or drink oral fluids"
      ],
      "faqs": [
        {
          "question": "Is treatment for Chickenpox (Pani Photaka / Milamila) available free in Odisha?",
          "answer": "Yes, under Niramaya scheme and BSKY, free diagnostics and medicines are provided across Odisha government facilities."
        },
        {
          "question": "When should one visit the nearest hospital?",
          "answer": "Visit the hospital at first onset of severe symptoms or if home recovery is slow after 48 hours."
        }
      ]
    },
    "or": {
      "name": "ପାଣି ଫୋଟକା (ଚିକେନପକ୍ସ)",
      "nativeName": "ପାଣି ଫୋଟକା (ଚିକେନପକ୍ସ)",
      "overview": "ଓଡ଼ିଶାର ଜନସାଧାରଣଙ୍କ ପାଇଁ ପାଣି ଫୋଟକା (ଚିକେନପକ୍ସ) ର ଡାକ୍ତରୀ ମାର୍ଗଦର୍ଶନ, ପ୍ରତିରୋଧ ଓ ସରକାରୀ ସହାୟତା।",
      "symptoms": [
        "ସ୍ଥାନୀୟ ଯନ୍ତ୍ରଣା, ଜ୍ୱର ବା ଅସ୍ୱସ୍ତି ଭାବ",
        "ଦୁର୍ବଳତା ଏବଂ ଶରୀରରେ ଶକ୍ତିର ଅଭାବ",
        "ଭୋକ କମିବା ଏବଂ ମୁଣ୍ଡବିନ୍ଧା",
        "ରୋଗ ସମ୍ପର୍କିତ ସାଧାରଣ ଡାକ୍ତରୀ ଲକ୍ଷଣ"
      ],
      "causes": [
        "ପାଣି ଫୋଟକା (ଚିକେନପକ୍ସ) ସମ୍ପର୍କିତ ପରିବେଶ ଓ ଜୀବାଣୁଜନିତ କାରଣ",
        "ଋତୁକାଳୀନ ପ୍ରତିକୂଳ ପାଗ ବା ଅପରିଷ୍କାର ପରିବେଶ",
        "ପୁଷ୍ଟିହୀନତା ବା ରୋଗ ପ୍ରତିରୋଧକ ଶକ୍ତିର ଅଭାବ"
      ],
      "treatments": [
        "ଡାକ୍ତରଙ୍କ ପରାମର୍ଶ ଅନୁଯାୟୀ ପ୍ରମାଣିତ ଔଷଧ ସେବନ",
        "ପର୍ଯ୍ୟାପ୍ତ ପାଣି ପିଇବା, ପୁଷ୍ଟିକର ଖାଦ୍ୟ ଓ ବିଶ୍ରାମ",
        "ଓଡ଼ିଶା ସରକାରୀ ଡାକ୍ତରଖାନାରେ ମାଗଣା ଚିକିତ୍ସା ଓ ପରୀକ୍ଷା"
      ],
      "prevention": [
        "ବ୍ୟକ୍ତିଗତ ଓ ପରିବେଶ ପରିମଳ ସର୍ବଦା ବଜାୟ ରଖନ୍ତୁ",
        "ସ୍ୱାସ୍ଥ୍ୟ ବିଭାଗର ନିର୍ଦ୍ଦେଶାବଳୀ ପାଳନ କରନ୍ତୁ",
        "ସମୟ ଅନୁଯାୟୀ ଟିକାକରଣ ଓ ସ୍ୱାସ୍ଥ୍ୟ ଯାଞ୍ଚ କରାନ୍ତୁ"
      ],
      "dos": [
        "ଲକ୍ଷଣ ଦେଖାଦେବା ମାତ୍ରେ ଡାକ୍ତରଙ୍କ ସହ ପରାମର୍ଶ କରନ୍ତୁ",
        "ଡାକ୍ତର ଦେଇଥିବା ଔଷଧ କୋର୍ସ ସମ୍ପୂର୍ଣ୍ଣ ଶେଷ କରନ୍ତୁ",
        "ଫୁଟା ପାଣି ଓ ପୁଷ୍ଟିକର ଖାଦ୍ୟ ଖାଆନ୍ତୁ"
      ],
      "donts": [
        "ଡାକ୍ତରଙ୍କ ବିନା ପରାମର୍ଶରେ ମେଡିସିନ୍ ଦୋକାନରୁ ଔଷଧ ଖାଆନ୍ତୁ ନାହିଁ",
        "ଗୁରୁତର ଲକ୍ଷଣ ଥିଲେ ଡାକ୍ତରଖାନା ଯିବାରେ ଡେରି କରନ୍ତୁ ନାହିଁ",
        "ଅପରିଷ୍କାର ଓ ବାସି ଖାଦ୍ୟ ଖାଆନ୍ତୁ ନାହିଁ"
      ],
      "whenToSeeDoctor": [
        "ଲଗାତାର ତେଜ ଜ୍ୱର ଲାଗିରହିଲେ",
        "ନିଶ୍ୱାସ ନେବାରେ କଷ୍ଟ ହେଲେ ବା ଚେତା ହରାଇଲେ",
        "ପାଣି ପିଇ ନପାରିଲେ ବା ବାରମ୍ବାର ବାନ୍ତି ହେଲେ"
      ],
      "faqs": [
        {
          "question": "ଓଡ଼ିଶାରେ ପାଣି ଫୋଟକା (ଚିକେନପକ୍ସ) ର ଚିକିତ୍ସା ମାଗଣାରେ ମିଳେ କି?",
          "answer": "ହଁ, ନିରାମୟ ଯୋଜନା ଓ ବିଜୁ ସ୍ୱାସ୍ଥ୍ୟ କଲ୍ୟାଣ ଯୋଜନାରେ ସମସ୍ତ ସରକାରୀ ଡାକ୍ତରଖାନାରେ ମାଗଣା ପରୀକ୍ଷା ଓ ଔଷଧ ଉପଲବ୍ଧ।"
        },
        {
          "question": "କେବେ ଡାକ୍ତରଖାନା ଯିବା ଉଚିତ?",
          "answer": "ଗୁରୁତର ଲକ୍ଷଣ ଦେଖାଦେବା ମାତ୍ରେ ତୁରନ୍ତ ଡାକ୍ତରଖାନା ଯିବା ଉଚିତ।"
        }
      ]
    }
  },
  {
    "id": "dis-29-measles-milamila-rubeola-",
    "category": "Maternal & Child",
    "severity": "High",
    "transmission": "Airborne virus droplets in unvaccinated children",
    "en": {
      "name": "Measles (Milamila / Rubeola)",
      "overview": "Detailed clinical guidance, prevention, and government health support in Odisha for Measles (Milamila / Rubeola).",
      "symptoms": [
        "Primary localized pain, fever, or discomfort",
        "Fatigue and reduced physical stamina",
        "Loss of normal appetite and mild headache",
        "Associated diagnostic clinical signs specific to condition"
      ],
      "causes": [
        "Etiological factors and environmental exposure related to Measles (Milamila / Rubeola)",
        "Unfavorable seasonal conditions or unhygienic community environment",
        "Nutritional or metabolic susceptibility factors"
      ],
      "treatments": [
        "Evidence-based pharmacotherapy prescribed by medical officer",
        "Adequate fluid intake, nutritious diet, and supportive care",
        "Free treatment and diagnostic screening available at Odisha CHCs and DHHs"
      ],
      "prevention": [
        "Maintain strict personal, domestic, and water hygiene",
        "Adhere to public health department guidelines and advisories",
        "Timely immunization and regular screening visits"
      ],
      "dos": [
        "Consult a qualified medical officer at early onset of symptoms",
        "Complete the prescribed medical regimen without skipping doses",
        "Maintain clean drinking water and well-balanced nutrition"
      ],
      "donts": [
        "Do not self-medicate or purchase unverified over-the-counter drugs",
        "Do not delay seeking medical care if red flag symptoms emerge",
        "Do not consume unhygienic or contaminated food and water"
      ],
      "whenToSeeDoctor": [
        "High continuous fever not responding to antipyretics",
        "Breathing difficulty, extreme fatigue, or fainting",
        "Inability to eat or drink oral fluids"
      ],
      "faqs": [
        {
          "question": "Is treatment for Measles (Milamila / Rubeola) available free in Odisha?",
          "answer": "Yes, under Niramaya scheme and BSKY, free diagnostics and medicines are provided across Odisha government facilities."
        },
        {
          "question": "When should one visit the nearest hospital?",
          "answer": "Visit the hospital at first onset of severe symptoms or if home recovery is slow after 48 hours."
        }
      ]
    },
    "or": {
      "name": "ମିଳିମିଳା (ମିଜିଲ୍ସ)",
      "nativeName": "ମିଳିମିଳା (ମିଜିଲ୍ସ)",
      "overview": "ଓଡ଼ିଶାର ଜନସାଧାରଣଙ୍କ ପାଇଁ ମିଳିମିଳା (ମିଜିଲ୍ସ) ର ଡାକ୍ତରୀ ମାର୍ଗଦର୍ଶନ, ପ୍ରତିରୋଧ ଓ ସରକାରୀ ସହାୟତା।",
      "symptoms": [
        "ସ୍ଥାନୀୟ ଯନ୍ତ୍ରଣା, ଜ୍ୱର ବା ଅସ୍ୱସ୍ତି ଭାବ",
        "ଦୁର୍ବଳତା ଏବଂ ଶରୀରରେ ଶକ୍ତିର ଅଭାବ",
        "ଭୋକ କମିବା ଏବଂ ମୁଣ୍ଡବିନ୍ଧା",
        "ରୋଗ ସମ୍ପର୍କିତ ସାଧାରଣ ଡାକ୍ତରୀ ଲକ୍ଷଣ"
      ],
      "causes": [
        "ମିଳିମିଳା (ମିଜିଲ୍ସ) ସମ୍ପର୍କିତ ପରିବେଶ ଓ ଜୀବାଣୁଜନିତ କାରଣ",
        "ଋତୁକାଳୀନ ପ୍ରତିକୂଳ ପାଗ ବା ଅପରିଷ୍କାର ପରିବେଶ",
        "ପୁଷ୍ଟିହୀନତା ବା ରୋଗ ପ୍ରତିରୋଧକ ଶକ୍ତିର ଅଭାବ"
      ],
      "treatments": [
        "ଡାକ୍ତରଙ୍କ ପରାମର୍ଶ ଅନୁଯାୟୀ ପ୍ରମାଣିତ ଔଷଧ ସେବନ",
        "ପର୍ଯ୍ୟାପ୍ତ ପାଣି ପିଇବା, ପୁଷ୍ଟିକର ଖାଦ୍ୟ ଓ ବିଶ୍ରାମ",
        "ଓଡ଼ିଶା ସରକାରୀ ଡାକ୍ତରଖାନାରେ ମାଗଣା ଚିକିତ୍ସା ଓ ପରୀକ୍ଷା"
      ],
      "prevention": [
        "ବ୍ୟକ୍ତିଗତ ଓ ପରିବେଶ ପରିମଳ ସର୍ବଦା ବଜାୟ ରଖନ୍ତୁ",
        "ସ୍ୱାସ୍ଥ୍ୟ ବିଭାଗର ନିର୍ଦ୍ଦେଶାବଳୀ ପାଳନ କରନ୍ତୁ",
        "ସମୟ ଅନୁଯାୟୀ ଟିକାକରଣ ଓ ସ୍ୱାସ୍ଥ୍ୟ ଯାଞ୍ଚ କରାନ୍ତୁ"
      ],
      "dos": [
        "ଲକ୍ଷଣ ଦେଖାଦେବା ମାତ୍ରେ ଡାକ୍ତରଙ୍କ ସହ ପରାମର୍ଶ କରନ୍ତୁ",
        "ଡାକ୍ତର ଦେଇଥିବା ଔଷଧ କୋର୍ସ ସମ୍ପୂର୍ଣ୍ଣ ଶେଷ କରନ୍ତୁ",
        "ଫୁଟା ପାଣି ଓ ପୁଷ୍ଟିକର ଖାଦ୍ୟ ଖାଆନ୍ତୁ"
      ],
      "donts": [
        "ଡାକ୍ତରଙ୍କ ବିନା ପରାମର୍ଶରେ ମେଡିସିନ୍ ଦୋକାନରୁ ଔଷଧ ଖାଆନ୍ତୁ ନାହିଁ",
        "ଗୁରୁତର ଲକ୍ଷଣ ଥିଲେ ଡାକ୍ତରଖାନା ଯିବାରେ ଡେରି କରନ୍ତୁ ନାହିଁ",
        "ଅପରିଷ୍କାର ଓ ବାସି ଖାଦ୍ୟ ଖାଆନ୍ତୁ ନାହିଁ"
      ],
      "whenToSeeDoctor": [
        "ଲଗାତାର ତେଜ ଜ୍ୱର ଲାଗିରହିଲେ",
        "ନିଶ୍ୱାସ ନେବାରେ କଷ୍ଟ ହେଲେ ବା ଚେତା ହରାଇଲେ",
        "ପାଣି ପିଇ ନପାରିଲେ ବା ବାରମ୍ବାର ବାନ୍ତି ହେଲେ"
      ],
      "faqs": [
        {
          "question": "ଓଡ଼ିଶାରେ ମିଳିମିଳା (ମିଜିଲ୍ସ) ର ଚିକିତ୍ସା ମାଗଣାରେ ମିଳେ କି?",
          "answer": "ହଁ, ନିରାମୟ ଯୋଜନା ଓ ବିଜୁ ସ୍ୱାସ୍ଥ୍ୟ କଲ୍ୟାଣ ଯୋଜନାରେ ସମସ୍ତ ସରକାରୀ ଡାକ୍ତରଖାନାରେ ମାଗଣା ପରୀକ୍ଷା ଓ ଔଷଧ ଉପଲବ୍ଧ।"
        },
        {
          "question": "କେବେ ଡାକ୍ତରଖାନା ଯିବା ଉଚିତ?",
          "answer": "ଗୁରୁତର ଲକ୍ଷଣ ଦେଖାଦେବା ମାତ୍ରେ ତୁରନ୍ତ ଡାକ୍ତରଖାନା ଯିବା ଉଚିତ।"
        }
      ]
    }
  },
  {
    "id": "dis-30-mumps-galagandi-parotitis-",
    "category": "Viral Infection",
    "severity": "Mild",
    "transmission": "Airborne saliva droplets",
    "en": {
      "name": "Mumps (Galagandi / Parotitis)",
      "overview": "Detailed clinical guidance, prevention, and government health support in Odisha for Mumps (Galagandi / Parotitis).",
      "symptoms": [
        "Primary localized pain, fever, or discomfort",
        "Fatigue and reduced physical stamina",
        "Loss of normal appetite and mild headache",
        "Associated diagnostic clinical signs specific to condition"
      ],
      "causes": [
        "Etiological factors and environmental exposure related to Mumps (Galagandi / Parotitis)",
        "Unfavorable seasonal conditions or unhygienic community environment",
        "Nutritional or metabolic susceptibility factors"
      ],
      "treatments": [
        "Evidence-based pharmacotherapy prescribed by medical officer",
        "Adequate fluid intake, nutritious diet, and supportive care",
        "Free treatment and diagnostic screening available at Odisha CHCs and DHHs"
      ],
      "prevention": [
        "Maintain strict personal, domestic, and water hygiene",
        "Adhere to public health department guidelines and advisories",
        "Timely immunization and regular screening visits"
      ],
      "dos": [
        "Consult a qualified medical officer at early onset of symptoms",
        "Complete the prescribed medical regimen without skipping doses",
        "Maintain clean drinking water and well-balanced nutrition"
      ],
      "donts": [
        "Do not self-medicate or purchase unverified over-the-counter drugs",
        "Do not delay seeking medical care if red flag symptoms emerge",
        "Do not consume unhygienic or contaminated food and water"
      ],
      "whenToSeeDoctor": [
        "High continuous fever not responding to antipyretics",
        "Breathing difficulty, extreme fatigue, or fainting",
        "Inability to eat or drink oral fluids"
      ],
      "faqs": [
        {
          "question": "Is treatment for Mumps (Galagandi / Parotitis) available free in Odisha?",
          "answer": "Yes, under Niramaya scheme and BSKY, free diagnostics and medicines are provided across Odisha government facilities."
        },
        {
          "question": "When should one visit the nearest hospital?",
          "answer": "Visit the hospital at first onset of severe symptoms or if home recovery is slow after 48 hours."
        }
      ]
    },
    "or": {
      "name": "ଗାଲଫୁଲା (ଗଳଗଣ୍ଡ / ମମ୍ପସ୍)",
      "nativeName": "ଗାଲଫୁଲା (ଗଳଗଣ୍ଡ / ମମ୍ପସ୍)",
      "overview": "ଓଡ଼ିଶାର ଜନସାଧାରଣଙ୍କ ପାଇଁ ଗାଲଫୁଲା (ଗଳଗଣ୍ଡ / ମମ୍ପସ୍) ର ଡାକ୍ତରୀ ମାର୍ଗଦର୍ଶନ, ପ୍ରତିରୋଧ ଓ ସରକାରୀ ସହାୟତା।",
      "symptoms": [
        "ସ୍ଥାନୀୟ ଯନ୍ତ୍ରଣା, ଜ୍ୱର ବା ଅସ୍ୱସ୍ତି ଭାବ",
        "ଦୁର୍ବଳତା ଏବଂ ଶରୀରରେ ଶକ୍ତିର ଅଭାବ",
        "ଭୋକ କମିବା ଏବଂ ମୁଣ୍ଡବିନ୍ଧା",
        "ରୋଗ ସମ୍ପର୍କିତ ସାଧାରଣ ଡାକ୍ତରୀ ଲକ୍ଷଣ"
      ],
      "causes": [
        "ଗାଲଫୁଲା (ଗଳଗଣ୍ଡ / ମମ୍ପସ୍) ସମ୍ପର୍କିତ ପରିବେଶ ଓ ଜୀବାଣୁଜନିତ କାରଣ",
        "ଋତୁକାଳୀନ ପ୍ରତିକୂଳ ପାଗ ବା ଅପରିଷ୍କାର ପରିବେଶ",
        "ପୁଷ୍ଟିହୀନତା ବା ରୋଗ ପ୍ରତିରୋଧକ ଶକ୍ତିର ଅଭାବ"
      ],
      "treatments": [
        "ଡାକ୍ତରଙ୍କ ପରାମର୍ଶ ଅନୁଯାୟୀ ପ୍ରମାଣିତ ଔଷଧ ସେବନ",
        "ପର୍ଯ୍ୟାପ୍ତ ପାଣି ପିଇବା, ପୁଷ୍ଟିକର ଖାଦ୍ୟ ଓ ବିଶ୍ରାମ",
        "ଓଡ଼ିଶା ସରକାରୀ ଡାକ୍ତରଖାନାରେ ମାଗଣା ଚିକିତ୍ସା ଓ ପରୀକ୍ଷା"
      ],
      "prevention": [
        "ବ୍ୟକ୍ତିଗତ ଓ ପରିବେଶ ପରିମଳ ସର୍ବଦା ବଜାୟ ରଖନ୍ତୁ",
        "ସ୍ୱାସ୍ଥ୍ୟ ବିଭାଗର ନିର୍ଦ୍ଦେଶାବଳୀ ପାଳନ କରନ୍ତୁ",
        "ସମୟ ଅନୁଯାୟୀ ଟିକାକରଣ ଓ ସ୍ୱାସ୍ଥ୍ୟ ଯାଞ୍ଚ କରାନ୍ତୁ"
      ],
      "dos": [
        "ଲକ୍ଷଣ ଦେଖାଦେବା ମାତ୍ରେ ଡାକ୍ତରଙ୍କ ସହ ପରାମର୍ଶ କରନ୍ତୁ",
        "ଡାକ୍ତର ଦେଇଥିବା ଔଷଧ କୋର୍ସ ସମ୍ପୂର୍ଣ୍ଣ ଶେଷ କରନ୍ତୁ",
        "ଫୁଟା ପାଣି ଓ ପୁଷ୍ଟିକର ଖାଦ୍ୟ ଖାଆନ୍ତୁ"
      ],
      "donts": [
        "ଡାକ୍ତରଙ୍କ ବିନା ପରାମର୍ଶରେ ମେଡିସିନ୍ ଦୋକାନରୁ ଔଷଧ ଖାଆନ୍ତୁ ନାହିଁ",
        "ଗୁରୁତର ଲକ୍ଷଣ ଥିଲେ ଡାକ୍ତରଖାନା ଯିବାରେ ଡେରି କରନ୍ତୁ ନାହିଁ",
        "ଅପରିଷ୍କାର ଓ ବାସି ଖାଦ୍ୟ ଖାଆନ୍ତୁ ନାହିଁ"
      ],
      "whenToSeeDoctor": [
        "ଲଗାତାର ତେଜ ଜ୍ୱର ଲାଗିରହିଲେ",
        "ନିଶ୍ୱାସ ନେବାରେ କଷ୍ଟ ହେଲେ ବା ଚେତା ହରାଇଲେ",
        "ପାଣି ପିଇ ନପାରିଲେ ବା ବାରମ୍ବାର ବାନ୍ତି ହେଲେ"
      ],
      "faqs": [
        {
          "question": "ଓଡ଼ିଶାରେ ଗାଲଫୁଲା (ଗଳଗଣ୍ଡ / ମମ୍ପସ୍) ର ଚିକିତ୍ସା ମାଗଣାରେ ମିଳେ କି?",
          "answer": "ହଁ, ନିରାମୟ ଯୋଜନା ଓ ବିଜୁ ସ୍ୱାସ୍ଥ୍ୟ କଲ୍ୟାଣ ଯୋଜନାରେ ସମସ୍ତ ସରକାରୀ ଡାକ୍ତରଖାନାରେ ମାଗଣା ପରୀକ୍ଷା ଓ ଔଷଧ ଉପଲବ୍ଧ।"
        },
        {
          "question": "କେବେ ଡାକ୍ତରଖାନା ଯିବା ଉଚିତ?",
          "answer": "ଗୁରୁତର ଲକ୍ଷଣ ଦେଖାଦେବା ମାତ୍ରେ ତୁରନ୍ତ ଡାକ୍ତରଖାନା ଯିବା ଉଚିତ।"
        }
      ]
    }
  },
  {
    "id": "dis-31-tonsillitis-strep-pharyngitis",
    "category": "ENT & Eye Care",
    "severity": "Mild",
    "transmission": "Bacterial/viral throat droplet transmission",
    "en": {
      "name": "Tonsillitis & Strep Pharyngitis",
      "overview": "Detailed clinical guidance, prevention, and government health support in Odisha for Tonsillitis & Strep Pharyngitis.",
      "symptoms": [
        "Primary localized pain, fever, or discomfort",
        "Fatigue and reduced physical stamina",
        "Loss of normal appetite and mild headache",
        "Associated diagnostic clinical signs specific to condition"
      ],
      "causes": [
        "Etiological factors and environmental exposure related to Tonsillitis & Strep Pharyngitis",
        "Unfavorable seasonal conditions or unhygienic community environment",
        "Nutritional or metabolic susceptibility factors"
      ],
      "treatments": [
        "Evidence-based pharmacotherapy prescribed by medical officer",
        "Adequate fluid intake, nutritious diet, and supportive care",
        "Free treatment and diagnostic screening available at Odisha CHCs and DHHs"
      ],
      "prevention": [
        "Maintain strict personal, domestic, and water hygiene",
        "Adhere to public health department guidelines and advisories",
        "Timely immunization and regular screening visits"
      ],
      "dos": [
        "Consult a qualified medical officer at early onset of symptoms",
        "Complete the prescribed medical regimen without skipping doses",
        "Maintain clean drinking water and well-balanced nutrition"
      ],
      "donts": [
        "Do not self-medicate or purchase unverified over-the-counter drugs",
        "Do not delay seeking medical care if red flag symptoms emerge",
        "Do not consume unhygienic or contaminated food and water"
      ],
      "whenToSeeDoctor": [
        "High continuous fever not responding to antipyretics",
        "Breathing difficulty, extreme fatigue, or fainting",
        "Inability to eat or drink oral fluids"
      ],
      "faqs": [
        {
          "question": "Is treatment for Tonsillitis & Strep Pharyngitis available free in Odisha?",
          "answer": "Yes, under Niramaya scheme and BSKY, free diagnostics and medicines are provided across Odisha government facilities."
        },
        {
          "question": "When should one visit the nearest hospital?",
          "answer": "Visit the hospital at first onset of severe symptoms or if home recovery is slow after 48 hours."
        }
      ]
    },
    "or": {
      "name": "ଟନସିଲ୍ ପ୍ରଦାହ (ଗଳା ଯନ୍ତ୍ରଣା)",
      "nativeName": "ଟନସିଲ୍ ପ୍ରଦାହ (ଗଳା ଯନ୍ତ୍ରଣା)",
      "overview": "ଓଡ଼ିଶାର ଜନସାଧାରଣଙ୍କ ପାଇଁ ଟନସିଲ୍ ପ୍ରଦାହ (ଗଳା ଯନ୍ତ୍ରଣା) ର ଡାକ୍ତରୀ ମାର୍ଗଦର୍ଶନ, ପ୍ରତିରୋଧ ଓ ସରକାରୀ ସହାୟତା।",
      "symptoms": [
        "ସ୍ଥାନୀୟ ଯନ୍ତ୍ରଣା, ଜ୍ୱର ବା ଅସ୍ୱସ୍ତି ଭାବ",
        "ଦୁର୍ବଳତା ଏବଂ ଶରୀରରେ ଶକ୍ତିର ଅଭାବ",
        "ଭୋକ କମିବା ଏବଂ ମୁଣ୍ଡବିନ୍ଧା",
        "ରୋଗ ସମ୍ପର୍କିତ ସାଧାରଣ ଡାକ୍ତରୀ ଲକ୍ଷଣ"
      ],
      "causes": [
        "ଟନସିଲ୍ ପ୍ରଦାହ (ଗଳା ଯନ୍ତ୍ରଣା) ସମ୍ପର୍କିତ ପରିବେଶ ଓ ଜୀବାଣୁଜନିତ କାରଣ",
        "ଋତୁକାଳୀନ ପ୍ରତିକୂଳ ପାଗ ବା ଅପରିଷ୍କାର ପରିବେଶ",
        "ପୁଷ୍ଟିହୀନତା ବା ରୋଗ ପ୍ରତିରୋଧକ ଶକ୍ତିର ଅଭାବ"
      ],
      "treatments": [
        "ଡାକ୍ତରଙ୍କ ପରାମର୍ଶ ଅନୁଯାୟୀ ପ୍ରମାଣିତ ଔଷଧ ସେବନ",
        "ପର୍ଯ୍ୟାପ୍ତ ପାଣି ପିଇବା, ପୁଷ୍ଟିକର ଖାଦ୍ୟ ଓ ବିଶ୍ରାମ",
        "ଓଡ଼ିଶା ସରକାରୀ ଡାକ୍ତରଖାନାରେ ମାଗଣା ଚିକିତ୍ସା ଓ ପରୀକ୍ଷା"
      ],
      "prevention": [
        "ବ୍ୟକ୍ତିଗତ ଓ ପରିବେଶ ପରିମଳ ସର୍ବଦା ବଜାୟ ରଖନ୍ତୁ",
        "ସ୍ୱାସ୍ଥ୍ୟ ବିଭାଗର ନିର୍ଦ୍ଦେଶାବଳୀ ପାଳନ କରନ୍ତୁ",
        "ସମୟ ଅନୁଯାୟୀ ଟିକାକରଣ ଓ ସ୍ୱାସ୍ଥ୍ୟ ଯାଞ୍ଚ କରାନ୍ତୁ"
      ],
      "dos": [
        "ଲକ୍ଷଣ ଦେଖାଦେବା ମାତ୍ରେ ଡାକ୍ତରଙ୍କ ସହ ପରାମର୍ଶ କରନ୍ତୁ",
        "ଡାକ୍ତର ଦେଇଥିବା ଔଷଧ କୋର୍ସ ସମ୍ପୂର୍ଣ୍ଣ ଶେଷ କରନ୍ତୁ",
        "ଫୁଟା ପାଣି ଓ ପୁଷ୍ଟିକର ଖାଦ୍ୟ ଖାଆନ୍ତୁ"
      ],
      "donts": [
        "ଡାକ୍ତରଙ୍କ ବିନା ପରାମର୍ଶରେ ମେଡିସିନ୍ ଦୋକାନରୁ ଔଷଧ ଖାଆନ୍ତୁ ନାହିଁ",
        "ଗୁରୁତର ଲକ୍ଷଣ ଥିଲେ ଡାକ୍ତରଖାନା ଯିବାରେ ଡେରି କରନ୍ତୁ ନାହିଁ",
        "ଅପରିଷ୍କାର ଓ ବାସି ଖାଦ୍ୟ ଖାଆନ୍ତୁ ନାହିଁ"
      ],
      "whenToSeeDoctor": [
        "ଲଗାତାର ତେଜ ଜ୍ୱର ଲାଗିରହିଲେ",
        "ନିଶ୍ୱାସ ନେବାରେ କଷ୍ଟ ହେଲେ ବା ଚେତା ହରାଇଲେ",
        "ପାଣି ପିଇ ନପାରିଲେ ବା ବାରମ୍ବାର ବାନ୍ତି ହେଲେ"
      ],
      "faqs": [
        {
          "question": "ଓଡ଼ିଶାରେ ଟନସିଲ୍ ପ୍ରଦାହ (ଗଳା ଯନ୍ତ୍ରଣା) ର ଚିକିତ୍ସା ମାଗଣାରେ ମିଳେ କି?",
          "answer": "ହଁ, ନିରାମୟ ଯୋଜନା ଓ ବିଜୁ ସ୍ୱାସ୍ଥ୍ୟ କଲ୍ୟାଣ ଯୋଜନାରେ ସମସ୍ତ ସରକାରୀ ଡାକ୍ତରଖାନାରେ ମାଗଣା ପରୀକ୍ଷା ଓ ଔଷଧ ଉପଲବ୍ଧ।"
        },
        {
          "question": "କେବେ ଡାକ୍ତରଖାନା ଯିବା ଉଚିତ?",
          "answer": "ଗୁରୁତର ଲକ୍ଷଣ ଦେଖାଦେବା ମାତ୍ରେ ତୁରନ୍ତ ଡାକ୍ତରଖାନା ଯିବା ଉଚିତ।"
        }
      ]
    }
  },
  {
    "id": "dis-32-oral-submucous-fibrosis-pan-gutkha-osmf-",
    "category": "Chronic & Lifestyle",
    "severity": "High",
    "transmission": "Chewing areca nut, tobacco, and gutkha",
    "en": {
      "name": "Oral Submucous Fibrosis (Pan / Gutkha OSMF)",
      "overview": "Detailed clinical guidance, prevention, and government health support in Odisha for Oral Submucous Fibrosis (Pan / Gutkha OSMF).",
      "symptoms": [
        "Primary localized pain, fever, or discomfort",
        "Fatigue and reduced physical stamina",
        "Loss of normal appetite and mild headache",
        "Associated diagnostic clinical signs specific to condition"
      ],
      "causes": [
        "Etiological factors and environmental exposure related to Oral Submucous Fibrosis (Pan / Gutkha OSMF)",
        "Unfavorable seasonal conditions or unhygienic community environment",
        "Nutritional or metabolic susceptibility factors"
      ],
      "treatments": [
        "Evidence-based pharmacotherapy prescribed by medical officer",
        "Adequate fluid intake, nutritious diet, and supportive care",
        "Free treatment and diagnostic screening available at Odisha CHCs and DHHs"
      ],
      "prevention": [
        "Maintain strict personal, domestic, and water hygiene",
        "Adhere to public health department guidelines and advisories",
        "Timely immunization and regular screening visits"
      ],
      "dos": [
        "Consult a qualified medical officer at early onset of symptoms",
        "Complete the prescribed medical regimen without skipping doses",
        "Maintain clean drinking water and well-balanced nutrition"
      ],
      "donts": [
        "Do not self-medicate or purchase unverified over-the-counter drugs",
        "Do not delay seeking medical care if red flag symptoms emerge",
        "Do not consume unhygienic or contaminated food and water"
      ],
      "whenToSeeDoctor": [
        "High continuous fever not responding to antipyretics",
        "Breathing difficulty, extreme fatigue, or fainting",
        "Inability to eat or drink oral fluids"
      ],
      "faqs": [
        {
          "question": "Is treatment for Oral Submucous Fibrosis (Pan / Gutkha OSMF) available free in Odisha?",
          "answer": "Yes, under Niramaya scheme and BSKY, free diagnostics and medicines are provided across Odisha government facilities."
        },
        {
          "question": "When should one visit the nearest hospital?",
          "answer": "Visit the hospital at first onset of severe symptoms or if home recovery is slow after 48 hours."
        }
      ]
    },
    "or": {
      "name": "ପାନ/ଗୁଟଖା ଜନିତ ମୁଖ ରୋଗ (OSMF)",
      "nativeName": "ପାନ/ଗୁଟଖା ଜନିତ ମୁଖ ରୋଗ (OSMF)",
      "overview": "ଓଡ଼ିଶାର ଜନସାଧାରଣଙ୍କ ପାଇଁ ପାନ/ଗୁଟଖା ଜନିତ ମୁଖ ରୋଗ (OSMF) ର ଡାକ୍ତରୀ ମାର୍ଗଦର୍ଶନ, ପ୍ରତିରୋଧ ଓ ସରକାରୀ ସହାୟତା।",
      "symptoms": [
        "ସ୍ଥାନୀୟ ଯନ୍ତ୍ରଣା, ଜ୍ୱର ବା ଅସ୍ୱସ୍ତି ଭାବ",
        "ଦୁର୍ବଳତା ଏବଂ ଶରୀରରେ ଶକ୍ତିର ଅଭାବ",
        "ଭୋକ କମିବା ଏବଂ ମୁଣ୍ଡବିନ୍ଧା",
        "ରୋଗ ସମ୍ପର୍କିତ ସାଧାରଣ ଡାକ୍ତରୀ ଲକ୍ଷଣ"
      ],
      "causes": [
        "ପାନ/ଗୁଟଖା ଜନିତ ମୁଖ ରୋଗ (OSMF) ସମ୍ପର୍କିତ ପରିବେଶ ଓ ଜୀବାଣୁଜନିତ କାରଣ",
        "ଋତୁକାଳୀନ ପ୍ରତିକୂଳ ପାଗ ବା ଅପରିଷ୍କାର ପରିବେଶ",
        "ପୁଷ୍ଟିହୀନତା ବା ରୋଗ ପ୍ରତିରୋଧକ ଶକ୍ତିର ଅଭାବ"
      ],
      "treatments": [
        "ଡାକ୍ତରଙ୍କ ପରାମର୍ଶ ଅନୁଯାୟୀ ପ୍ରମାଣିତ ଔଷଧ ସେବନ",
        "ପର୍ଯ୍ୟାପ୍ତ ପାଣି ପିଇବା, ପୁଷ୍ଟିକର ଖାଦ୍ୟ ଓ ବିଶ୍ରାମ",
        "ଓଡ଼ିଶା ସରକାରୀ ଡାକ୍ତରଖାନାରେ ମାଗଣା ଚିକିତ୍ସା ଓ ପରୀକ୍ଷା"
      ],
      "prevention": [
        "ବ୍ୟକ୍ତିଗତ ଓ ପରିବେଶ ପରିମଳ ସର୍ବଦା ବଜାୟ ରଖନ୍ତୁ",
        "ସ୍ୱାସ୍ଥ୍ୟ ବିଭାଗର ନିର୍ଦ୍ଦେଶାବଳୀ ପାଳନ କରନ୍ତୁ",
        "ସମୟ ଅନୁଯାୟୀ ଟିକାକରଣ ଓ ସ୍ୱାସ୍ଥ୍ୟ ଯାଞ୍ଚ କରାନ୍ତୁ"
      ],
      "dos": [
        "ଲକ୍ଷଣ ଦେଖାଦେବା ମାତ୍ରେ ଡାକ୍ତରଙ୍କ ସହ ପରାମର୍ଶ କରନ୍ତୁ",
        "ଡାକ୍ତର ଦେଇଥିବା ଔଷଧ କୋର୍ସ ସମ୍ପୂର୍ଣ୍ଣ ଶେଷ କରନ୍ତୁ",
        "ଫୁଟା ପାଣି ଓ ପୁଷ୍ଟିକର ଖାଦ୍ୟ ଖାଆନ୍ତୁ"
      ],
      "donts": [
        "ଡାକ୍ତରଙ୍କ ବିନା ପରାମର୍ଶରେ ମେଡିସିନ୍ ଦୋକାନରୁ ଔଷଧ ଖାଆନ୍ତୁ ନାହିଁ",
        "ଗୁରୁତର ଲକ୍ଷଣ ଥିଲେ ଡାକ୍ତରଖାନା ଯିବାରେ ଡେରି କରନ୍ତୁ ନାହିଁ",
        "ଅପରିଷ୍କାର ଓ ବାସି ଖାଦ୍ୟ ଖାଆନ୍ତୁ ନାହିଁ"
      ],
      "whenToSeeDoctor": [
        "ଲଗାତାର ତେଜ ଜ୍ୱର ଲାଗିରହିଲେ",
        "ନିଶ୍ୱାସ ନେବାରେ କଷ୍ଟ ହେଲେ ବା ଚେତା ହରାଇଲେ",
        "ପାଣି ପିଇ ନପାରିଲେ ବା ବାରମ୍ବାର ବାନ୍ତି ହେଲେ"
      ],
      "faqs": [
        {
          "question": "ଓଡ଼ିଶାରେ ପାନ/ଗୁଟଖା ଜନିତ ମୁଖ ରୋଗ (OSMF) ର ଚିକିତ୍ସା ମାଗଣାରେ ମିଳେ କି?",
          "answer": "ହଁ, ନିରାମୟ ଯୋଜନା ଓ ବିଜୁ ସ୍ୱାସ୍ଥ୍ୟ କଲ୍ୟାଣ ଯୋଜନାରେ ସମସ୍ତ ସରକାରୀ ଡାକ୍ତରଖାନାରେ ମାଗଣା ପରୀକ୍ଷା ଓ ଔଷଧ ଉପଲବ୍ଧ।"
        },
        {
          "question": "କେବେ ଡାକ୍ତରଖାନା ଯିବା ଉଚିତ?",
          "answer": "ଗୁରୁତର ଲକ୍ଷଣ ଦେଖାଦେବା ମାତ୍ରେ ତୁରନ୍ତ ଡାକ୍ତରଖାନା ଯିବା ଉଚିତ।"
        }
      ]
    }
  },
  {
    "id": "dis-33-acid-peptic-disease-gastric-ulcer-gastric-",
    "category": "Waterborne & Gastro",
    "severity": "Moderate",
    "transmission": "Helicobacter pylori, spicy diet, and irregular eating",
    "en": {
      "name": "Acid Peptic Disease & Gastric Ulcer (Gastric)",
      "overview": "Detailed clinical guidance, prevention, and government health support in Odisha for Acid Peptic Disease & Gastric Ulcer (Gastric).",
      "symptoms": [
        "Primary localized pain, fever, or discomfort",
        "Fatigue and reduced physical stamina",
        "Loss of normal appetite and mild headache",
        "Associated diagnostic clinical signs specific to condition"
      ],
      "causes": [
        "Etiological factors and environmental exposure related to Acid Peptic Disease & Gastric Ulcer (Gastric)",
        "Unfavorable seasonal conditions or unhygienic community environment",
        "Nutritional or metabolic susceptibility factors"
      ],
      "treatments": [
        "Evidence-based pharmacotherapy prescribed by medical officer",
        "Adequate fluid intake, nutritious diet, and supportive care",
        "Free treatment and diagnostic screening available at Odisha CHCs and DHHs"
      ],
      "prevention": [
        "Maintain strict personal, domestic, and water hygiene",
        "Adhere to public health department guidelines and advisories",
        "Timely immunization and regular screening visits"
      ],
      "dos": [
        "Consult a qualified medical officer at early onset of symptoms",
        "Complete the prescribed medical regimen without skipping doses",
        "Maintain clean drinking water and well-balanced nutrition"
      ],
      "donts": [
        "Do not self-medicate or purchase unverified over-the-counter drugs",
        "Do not delay seeking medical care if red flag symptoms emerge",
        "Do not consume unhygienic or contaminated food and water"
      ],
      "whenToSeeDoctor": [
        "High continuous fever not responding to antipyretics",
        "Breathing difficulty, extreme fatigue, or fainting",
        "Inability to eat or drink oral fluids"
      ],
      "faqs": [
        {
          "question": "Is treatment for Acid Peptic Disease & Gastric Ulcer (Gastric) available free in Odisha?",
          "answer": "Yes, under Niramaya scheme and BSKY, free diagnostics and medicines are provided across Odisha government facilities."
        },
        {
          "question": "When should one visit the nearest hospital?",
          "answer": "Visit the hospital at first onset of severe symptoms or if home recovery is slow after 48 hours."
        }
      ]
    },
    "or": {
      "name": "ଗ୍ୟାଷ୍ଟ୍ରିକ୍ ଓ ପେଟ ଅଲସର",
      "nativeName": "ଗ୍ୟାଷ୍ଟ୍ରିକ୍ ଓ ପେଟ ଅଲସର",
      "overview": "ଓଡ଼ିଶାର ଜନସାଧାରଣଙ୍କ ପାଇଁ ଗ୍ୟାଷ୍ଟ୍ରିକ୍ ଓ ପେଟ ଅଲସର ର ଡାକ୍ତରୀ ମାର୍ଗଦର୍ଶନ, ପ୍ରତିରୋଧ ଓ ସରକାରୀ ସହାୟତା।",
      "symptoms": [
        "ସ୍ଥାନୀୟ ଯନ୍ତ୍ରଣା, ଜ୍ୱର ବା ଅସ୍ୱସ୍ତି ଭାବ",
        "ଦୁର୍ବଳତା ଏବଂ ଶରୀରରେ ଶକ୍ତିର ଅଭାବ",
        "ଭୋକ କମିବା ଏବଂ ମୁଣ୍ଡବିନ୍ଧା",
        "ରୋଗ ସମ୍ପର୍କିତ ସାଧାରଣ ଡାକ୍ତରୀ ଲକ୍ଷଣ"
      ],
      "causes": [
        "ଗ୍ୟାଷ୍ଟ୍ରିକ୍ ଓ ପେଟ ଅଲସର ସମ୍ପର୍କିତ ପରିବେଶ ଓ ଜୀବାଣୁଜନିତ କାରଣ",
        "ଋତୁକାଳୀନ ପ୍ରତିକୂଳ ପାଗ ବା ଅପରିଷ୍କାର ପରିବେଶ",
        "ପୁଷ୍ଟିହୀନତା ବା ରୋଗ ପ୍ରତିରୋଧକ ଶକ୍ତିର ଅଭାବ"
      ],
      "treatments": [
        "ଡାକ୍ତରଙ୍କ ପରାମର୍ଶ ଅନୁଯାୟୀ ପ୍ରମାଣିତ ଔଷଧ ସେବନ",
        "ପର୍ଯ୍ୟାପ୍ତ ପାଣି ପିଇବା, ପୁଷ୍ଟିକର ଖାଦ୍ୟ ଓ ବିଶ୍ରାମ",
        "ଓଡ଼ିଶା ସରକାରୀ ଡାକ୍ତରଖାନାରେ ମାଗଣା ଚିକିତ୍ସା ଓ ପରୀକ୍ଷା"
      ],
      "prevention": [
        "ବ୍ୟକ୍ତିଗତ ଓ ପରିବେଶ ପରିମଳ ସର୍ବଦା ବଜାୟ ରଖନ୍ତୁ",
        "ସ୍ୱାସ୍ଥ୍ୟ ବିଭାଗର ନିର୍ଦ୍ଦେଶାବଳୀ ପାଳନ କରନ୍ତୁ",
        "ସମୟ ଅନୁଯାୟୀ ଟିକାକରଣ ଓ ସ୍ୱାସ୍ଥ୍ୟ ଯାଞ୍ଚ କରାନ୍ତୁ"
      ],
      "dos": [
        "ଲକ୍ଷଣ ଦେଖାଦେବା ମାତ୍ରେ ଡାକ୍ତରଙ୍କ ସହ ପରାମର୍ଶ କରନ୍ତୁ",
        "ଡାକ୍ତର ଦେଇଥିବା ଔଷଧ କୋର୍ସ ସମ୍ପୂର୍ଣ୍ଣ ଶେଷ କରନ୍ତୁ",
        "ଫୁଟା ପାଣି ଓ ପୁଷ୍ଟିକର ଖାଦ୍ୟ ଖାଆନ୍ତୁ"
      ],
      "donts": [
        "ଡାକ୍ତରଙ୍କ ବିନା ପରାମର୍ଶରେ ମେଡିସିନ୍ ଦୋକାନରୁ ଔଷଧ ଖାଆନ୍ତୁ ନାହିଁ",
        "ଗୁରୁତର ଲକ୍ଷଣ ଥିଲେ ଡାକ୍ତରଖାନା ଯିବାରେ ଡେରି କରନ୍ତୁ ନାହିଁ",
        "ଅପରିଷ୍କାର ଓ ବାସି ଖାଦ୍ୟ ଖାଆନ୍ତୁ ନାହିଁ"
      ],
      "whenToSeeDoctor": [
        "ଲଗାତାର ତେଜ ଜ୍ୱର ଲାଗିରହିଲେ",
        "ନିଶ୍ୱାସ ନେବାରେ କଷ୍ଟ ହେଲେ ବା ଚେତା ହରାଇଲେ",
        "ପାଣି ପିଇ ନପାରିଲେ ବା ବାରମ୍ବାର ବାନ୍ତି ହେଲେ"
      ],
      "faqs": [
        {
          "question": "ଓଡ଼ିଶାରେ ଗ୍ୟାଷ୍ଟ୍ରିକ୍ ଓ ପେଟ ଅଲସର ର ଚିକିତ୍ସା ମାଗଣାରେ ମିଳେ କି?",
          "answer": "ହଁ, ନିରାମୟ ଯୋଜନା ଓ ବିଜୁ ସ୍ୱାସ୍ଥ୍ୟ କଲ୍ୟାଣ ଯୋଜନାରେ ସମସ୍ତ ସରକାରୀ ଡାକ୍ତରଖାନାରେ ମାଗଣା ପରୀକ୍ଷା ଓ ଔଷଧ ଉପଲବ୍ଧ।"
        },
        {
          "question": "କେବେ ଡାକ୍ତରଖାନା ଯିବା ଉଚିତ?",
          "answer": "ଗୁରୁତର ଲକ୍ଷଣ ଦେଖାଦେବା ମାତ୍ରେ ତୁରନ୍ତ ଡାକ୍ତରଖାନା ଯିବା ଉଚିତ।"
        }
      ]
    }
  },
  {
    "id": "dis-34-rheumatoid-osteoarthritis-ganthi-binda-",
    "category": "Chronic & Lifestyle",
    "severity": "Moderate",
    "transmission": "Joint cartilage wear and autoimmune inflammation",
    "en": {
      "name": "Rheumatoid & Osteoarthritis (Ganthi Binda)",
      "overview": "Detailed clinical guidance, prevention, and government health support in Odisha for Rheumatoid & Osteoarthritis (Ganthi Binda).",
      "symptoms": [
        "Primary localized pain, fever, or discomfort",
        "Fatigue and reduced physical stamina",
        "Loss of normal appetite and mild headache",
        "Associated diagnostic clinical signs specific to condition"
      ],
      "causes": [
        "Etiological factors and environmental exposure related to Rheumatoid & Osteoarthritis (Ganthi Binda)",
        "Unfavorable seasonal conditions or unhygienic community environment",
        "Nutritional or metabolic susceptibility factors"
      ],
      "treatments": [
        "Evidence-based pharmacotherapy prescribed by medical officer",
        "Adequate fluid intake, nutritious diet, and supportive care",
        "Free treatment and diagnostic screening available at Odisha CHCs and DHHs"
      ],
      "prevention": [
        "Maintain strict personal, domestic, and water hygiene",
        "Adhere to public health department guidelines and advisories",
        "Timely immunization and regular screening visits"
      ],
      "dos": [
        "Consult a qualified medical officer at early onset of symptoms",
        "Complete the prescribed medical regimen without skipping doses",
        "Maintain clean drinking water and well-balanced nutrition"
      ],
      "donts": [
        "Do not self-medicate or purchase unverified over-the-counter drugs",
        "Do not delay seeking medical care if red flag symptoms emerge",
        "Do not consume unhygienic or contaminated food and water"
      ],
      "whenToSeeDoctor": [
        "High continuous fever not responding to antipyretics",
        "Breathing difficulty, extreme fatigue, or fainting",
        "Inability to eat or drink oral fluids"
      ],
      "faqs": [
        {
          "question": "Is treatment for Rheumatoid & Osteoarthritis (Ganthi Binda) available free in Odisha?",
          "answer": "Yes, under Niramaya scheme and BSKY, free diagnostics and medicines are provided across Odisha government facilities."
        },
        {
          "question": "When should one visit the nearest hospital?",
          "answer": "Visit the hospital at first onset of severe symptoms or if home recovery is slow after 48 hours."
        }
      ]
    },
    "or": {
      "name": "ଗଣ୍ଠି ବିନ୍ଧା ଓ ବାତ ରୋଗ",
      "nativeName": "ଗଣ୍ଠି ବିନ୍ଧା ଓ ବାତ ରୋଗ",
      "overview": "ଓଡ଼ିଶାର ଜନସାଧାରଣଙ୍କ ପାଇଁ ଗଣ୍ଠି ବିନ୍ଧା ଓ ବାତ ରୋଗ ର ଡାକ୍ତରୀ ମାର୍ଗଦର୍ଶନ, ପ୍ରତିରୋଧ ଓ ସରକାରୀ ସହାୟତା।",
      "symptoms": [
        "ସ୍ଥାନୀୟ ଯନ୍ତ୍ରଣା, ଜ୍ୱର ବା ଅସ୍ୱସ୍ତି ଭାବ",
        "ଦୁର୍ବଳତା ଏବଂ ଶରୀରରେ ଶକ୍ତିର ଅଭାବ",
        "ଭୋକ କମିବା ଏବଂ ମୁଣ୍ଡବିନ୍ଧା",
        "ରୋଗ ସମ୍ପର୍କିତ ସାଧାରଣ ଡାକ୍ତରୀ ଲକ୍ଷଣ"
      ],
      "causes": [
        "ଗଣ୍ଠି ବିନ୍ଧା ଓ ବାତ ରୋଗ ସମ୍ପର୍କିତ ପରିବେଶ ଓ ଜୀବାଣୁଜନିତ କାରଣ",
        "ଋତୁକାଳୀନ ପ୍ରତିକୂଳ ପାଗ ବା ଅପରିଷ୍କାର ପରିବେଶ",
        "ପୁଷ୍ଟିହୀନତା ବା ରୋଗ ପ୍ରତିରୋଧକ ଶକ୍ତିର ଅଭାବ"
      ],
      "treatments": [
        "ଡାକ୍ତରଙ୍କ ପରାମର୍ଶ ଅନୁଯାୟୀ ପ୍ରମାଣିତ ଔଷଧ ସେବନ",
        "ପର୍ଯ୍ୟାପ୍ତ ପାଣି ପିଇବା, ପୁଷ୍ଟିକର ଖାଦ୍ୟ ଓ ବିଶ୍ରାମ",
        "ଓଡ଼ିଶା ସରକାରୀ ଡାକ୍ତରଖାନାରେ ମାଗଣା ଚିକିତ୍ସା ଓ ପରୀକ୍ଷା"
      ],
      "prevention": [
        "ବ୍ୟକ୍ତିଗତ ଓ ପରିବେଶ ପରିମଳ ସର୍ବଦା ବଜାୟ ରଖନ୍ତୁ",
        "ସ୍ୱାସ୍ଥ୍ୟ ବିଭାଗର ନିର୍ଦ୍ଦେଶାବଳୀ ପାଳନ କରନ୍ତୁ",
        "ସମୟ ଅନୁଯାୟୀ ଟିକାକରଣ ଓ ସ୍ୱାସ୍ଥ୍ୟ ଯାଞ୍ଚ କରାନ୍ତୁ"
      ],
      "dos": [
        "ଲକ୍ଷଣ ଦେଖାଦେବା ମାତ୍ରେ ଡାକ୍ତରଙ୍କ ସହ ପରାମର୍ଶ କରନ୍ତୁ",
        "ଡାକ୍ତର ଦେଇଥିବା ଔଷଧ କୋର୍ସ ସମ୍ପୂର୍ଣ୍ଣ ଶେଷ କରନ୍ତୁ",
        "ଫୁଟା ପାଣି ଓ ପୁଷ୍ଟିକର ଖାଦ୍ୟ ଖାଆନ୍ତୁ"
      ],
      "donts": [
        "ଡାକ୍ତରଙ୍କ ବିନା ପରାମର୍ଶରେ ମେଡିସିନ୍ ଦୋକାନରୁ ଔଷଧ ଖାଆନ୍ତୁ ନାହିଁ",
        "ଗୁରୁତର ଲକ୍ଷଣ ଥିଲେ ଡାକ୍ତରଖାନା ଯିବାରେ ଡେରି କରନ୍ତୁ ନାହିଁ",
        "ଅପରିଷ୍କାର ଓ ବାସି ଖାଦ୍ୟ ଖାଆନ୍ତୁ ନାହିଁ"
      ],
      "whenToSeeDoctor": [
        "ଲଗାତାର ତେଜ ଜ୍ୱର ଲାଗିରହିଲେ",
        "ନିଶ୍ୱାସ ନେବାରେ କଷ୍ଟ ହେଲେ ବା ଚେତା ହରାଇଲେ",
        "ପାଣି ପିଇ ନପାରିଲେ ବା ବାରମ୍ବାର ବାନ୍ତି ହେଲେ"
      ],
      "faqs": [
        {
          "question": "ଓଡ଼ିଶାରେ ଗଣ୍ଠି ବିନ୍ଧା ଓ ବାତ ରୋଗ ର ଚିକିତ୍ସା ମାଗଣାରେ ମିଳେ କି?",
          "answer": "ହଁ, ନିରାମୟ ଯୋଜନା ଓ ବିଜୁ ସ୍ୱାସ୍ଥ୍ୟ କଲ୍ୟାଣ ଯୋଜନାରେ ସମସ୍ତ ସରକାରୀ ଡାକ୍ତରଖାନାରେ ମାଗଣା ପରୀକ୍ଷା ଓ ଔଷଧ ଉପଲବ୍ଧ।"
        },
        {
          "question": "କେବେ ଡାକ୍ତରଖାନା ଯିବା ଉଚିତ?",
          "answer": "ଗୁରୁତର ଲକ୍ଷଣ ଦେଖାଦେବା ମାତ୍ରେ ତୁରନ୍ତ ଡାକ୍ତରଖାନା ଯିବା ଉଚିତ।"
        }
      ]
    }
  },
  {
    "id": "dis-35-drowning-near-drowning-emergency",
    "category": "Emergency",
    "severity": "Emergency",
    "transmission": "Submersion in ponds, rivers during floods",
    "en": {
      "name": "Drowning & Near-Drowning Emergency",
      "overview": "Detailed clinical guidance, prevention, and government health support in Odisha for Drowning & Near-Drowning Emergency.",
      "symptoms": [
        "Primary localized pain, fever, or discomfort",
        "Fatigue and reduced physical stamina",
        "Loss of normal appetite and mild headache",
        "Associated diagnostic clinical signs specific to condition"
      ],
      "causes": [
        "Etiological factors and environmental exposure related to Drowning & Near-Drowning Emergency",
        "Unfavorable seasonal conditions or unhygienic community environment",
        "Nutritional or metabolic susceptibility factors"
      ],
      "treatments": [
        "Evidence-based pharmacotherapy prescribed by medical officer",
        "Adequate fluid intake, nutritious diet, and supportive care",
        "Free treatment and diagnostic screening available at Odisha CHCs and DHHs"
      ],
      "prevention": [
        "Maintain strict personal, domestic, and water hygiene",
        "Adhere to public health department guidelines and advisories",
        "Timely immunization and regular screening visits"
      ],
      "dos": [
        "Consult a qualified medical officer at early onset of symptoms",
        "Complete the prescribed medical regimen without skipping doses",
        "Maintain clean drinking water and well-balanced nutrition"
      ],
      "donts": [
        "Do not self-medicate or purchase unverified over-the-counter drugs",
        "Do not delay seeking medical care if red flag symptoms emerge",
        "Do not consume unhygienic or contaminated food and water"
      ],
      "whenToSeeDoctor": [
        "High continuous fever not responding to antipyretics",
        "Breathing difficulty, extreme fatigue, or fainting",
        "Inability to eat or drink oral fluids"
      ],
      "faqs": [
        {
          "question": "Is treatment for Drowning & Near-Drowning Emergency available free in Odisha?",
          "answer": "Yes, under Niramaya scheme and BSKY, free diagnostics and medicines are provided across Odisha government facilities."
        },
        {
          "question": "When should one visit the nearest hospital?",
          "answer": "Visit the hospital at first onset of severe symptoms or if home recovery is slow after 48 hours."
        }
      ]
    },
    "or": {
      "name": "ପାଣିରେ ବୁଡ଼ିଯିବା ଜରୁରୀକାଳୀନ ପରିସ୍ଥିତି",
      "nativeName": "ପାଣିରେ ବୁଡ଼ିଯିବା ଜରୁରୀକାଳୀନ ପରିସ୍ଥିତି",
      "overview": "ଓଡ଼ିଶାର ଜନସାଧାରଣଙ୍କ ପାଇଁ ପାଣିରେ ବୁଡ଼ିଯିବା ଜରୁରୀକାଳୀନ ପରିସ୍ଥିତି ର ଡାକ୍ତରୀ ମାର୍ଗଦର୍ଶନ, ପ୍ରତିରୋଧ ଓ ସରକାରୀ ସହାୟତା।",
      "symptoms": [
        "ସ୍ଥାନୀୟ ଯନ୍ତ୍ରଣା, ଜ୍ୱର ବା ଅସ୍ୱସ୍ତି ଭାବ",
        "ଦୁର୍ବଳତା ଏବଂ ଶରୀରରେ ଶକ୍ତିର ଅଭାବ",
        "ଭୋକ କମିବା ଏବଂ ମୁଣ୍ଡବିନ୍ଧା",
        "ରୋଗ ସମ୍ପର୍କିତ ସାଧାରଣ ଡାକ୍ତରୀ ଲକ୍ଷଣ"
      ],
      "causes": [
        "ପାଣିରେ ବୁଡ଼ିଯିବା ଜରୁରୀକାଳୀନ ପରିସ୍ଥିତି ସମ୍ପର୍କିତ ପରିବେଶ ଓ ଜୀବାଣୁଜନିତ କାରଣ",
        "ଋତୁକାଳୀନ ପ୍ରତିକୂଳ ପାଗ ବା ଅପରିଷ୍କାର ପରିବେଶ",
        "ପୁଷ୍ଟିହୀନତା ବା ରୋଗ ପ୍ରତିରୋଧକ ଶକ୍ତିର ଅଭାବ"
      ],
      "treatments": [
        "ଡାକ୍ତରଙ୍କ ପରାମର୍ଶ ଅନୁଯାୟୀ ପ୍ରମାଣିତ ଔଷଧ ସେବନ",
        "ପର୍ଯ୍ୟାପ୍ତ ପାଣି ପିଇବା, ପୁଷ୍ଟିକର ଖାଦ୍ୟ ଓ ବିଶ୍ରାମ",
        "ଓଡ଼ିଶା ସରକାରୀ ଡାକ୍ତରଖାନାରେ ମାଗଣା ଚିକିତ୍ସା ଓ ପରୀକ୍ଷା"
      ],
      "prevention": [
        "ବ୍ୟକ୍ତିଗତ ଓ ପରିବେଶ ପରିମଳ ସର୍ବଦା ବଜାୟ ରଖନ୍ତୁ",
        "ସ୍ୱାସ୍ଥ୍ୟ ବିଭାଗର ନିର୍ଦ୍ଦେଶାବଳୀ ପାଳନ କରନ୍ତୁ",
        "ସମୟ ଅନୁଯାୟୀ ଟିକାକରଣ ଓ ସ୍ୱାସ୍ଥ୍ୟ ଯାଞ୍ଚ କରାନ୍ତୁ"
      ],
      "dos": [
        "ଲକ୍ଷଣ ଦେଖାଦେବା ମାତ୍ରେ ଡାକ୍ତରଙ୍କ ସହ ପରାମର୍ଶ କରନ୍ତୁ",
        "ଡାକ୍ତର ଦେଇଥିବା ଔଷଧ କୋର୍ସ ସମ୍ପୂର୍ଣ୍ଣ ଶେଷ କରନ୍ତୁ",
        "ଫୁଟା ପାଣି ଓ ପୁଷ୍ଟିକର ଖାଦ୍ୟ ଖାଆନ୍ତୁ"
      ],
      "donts": [
        "ଡାକ୍ତରଙ୍କ ବିନା ପରାମର୍ଶରେ ମେଡିସିନ୍ ଦୋକାନରୁ ଔଷଧ ଖାଆନ୍ତୁ ନାହିଁ",
        "ଗୁରୁତର ଲକ୍ଷଣ ଥିଲେ ଡାକ୍ତରଖାନା ଯିବାରେ ଡେରି କରନ୍ତୁ ନାହିଁ",
        "ଅପରିଷ୍କାର ଓ ବାସି ଖାଦ୍ୟ ଖାଆନ୍ତୁ ନାହିଁ"
      ],
      "whenToSeeDoctor": [
        "ଲଗାତାର ତେଜ ଜ୍ୱର ଲାଗିରହିଲେ",
        "ନିଶ୍ୱାସ ନେବାରେ କଷ୍ଟ ହେଲେ ବା ଚେତା ହରାଇଲେ",
        "ପାଣି ପିଇ ନପାରିଲେ ବା ବାରମ୍ବାର ବାନ୍ତି ହେଲେ"
      ],
      "faqs": [
        {
          "question": "ଓଡ଼ିଶାରେ ପାଣିରେ ବୁଡ଼ିଯିବା ଜରୁରୀକାଳୀନ ପରିସ୍ଥିତି ର ଚିକିତ୍ସା ମାଗଣାରେ ମିଳେ କି?",
          "answer": "ହଁ, ନିରାମୟ ଯୋଜନା ଓ ବିଜୁ ସ୍ୱାସ୍ଥ୍ୟ କଲ୍ୟାଣ ଯୋଜନାରେ ସମସ୍ତ ସରକାରୀ ଡାକ୍ତରଖାନାରେ ମାଗଣା ପରୀକ୍ଷା ଓ ଔଷଧ ଉପଲବ୍ଧ।"
        },
        {
          "question": "କେବେ ଡାକ୍ତରଖାନା ଯିବା ଉଚିତ?",
          "answer": "ଗୁରୁତର ଲକ୍ଷଣ ଦେଖାଦେବା ମାତ୍ରେ ତୁରନ୍ତ ଡାକ୍ତରଖାନା ଯିବା ଉଚିତ।"
        }
      ]
    }
  },
  {
    "id": "dis-36-lightning-strike-injury",
    "category": "Emergency",
    "severity": "Emergency",
    "transmission": "Direct or side-flash high-voltage atmospheric electricity",
    "en": {
      "name": "Lightning Strike Injury",
      "overview": "Detailed clinical guidance, prevention, and government health support in Odisha for Lightning Strike Injury.",
      "symptoms": [
        "Primary localized pain, fever, or discomfort",
        "Fatigue and reduced physical stamina",
        "Loss of normal appetite and mild headache",
        "Associated diagnostic clinical signs specific to condition"
      ],
      "causes": [
        "Etiological factors and environmental exposure related to Lightning Strike Injury",
        "Unfavorable seasonal conditions or unhygienic community environment",
        "Nutritional or metabolic susceptibility factors"
      ],
      "treatments": [
        "Evidence-based pharmacotherapy prescribed by medical officer",
        "Adequate fluid intake, nutritious diet, and supportive care",
        "Free treatment and diagnostic screening available at Odisha CHCs and DHHs"
      ],
      "prevention": [
        "Maintain strict personal, domestic, and water hygiene",
        "Adhere to public health department guidelines and advisories",
        "Timely immunization and regular screening visits"
      ],
      "dos": [
        "Consult a qualified medical officer at early onset of symptoms",
        "Complete the prescribed medical regimen without skipping doses",
        "Maintain clean drinking water and well-balanced nutrition"
      ],
      "donts": [
        "Do not self-medicate or purchase unverified over-the-counter drugs",
        "Do not delay seeking medical care if red flag symptoms emerge",
        "Do not consume unhygienic or contaminated food and water"
      ],
      "whenToSeeDoctor": [
        "High continuous fever not responding to antipyretics",
        "Breathing difficulty, extreme fatigue, or fainting",
        "Inability to eat or drink oral fluids"
      ],
      "faqs": [
        {
          "question": "Is treatment for Lightning Strike Injury available free in Odisha?",
          "answer": "Yes, under Niramaya scheme and BSKY, free diagnostics and medicines are provided across Odisha government facilities."
        },
        {
          "question": "When should one visit the nearest hospital?",
          "answer": "Visit the hospital at first onset of severe symptoms or if home recovery is slow after 48 hours."
        }
      ]
    },
    "or": {
      "name": "ବଜ୍ରପାତ ଦୁର୍ଘଟଣା",
      "nativeName": "ବଜ୍ରପାତ ଦୁର୍ଘଟଣା",
      "overview": "ଓଡ଼ିଶାର ଜନସାଧାରଣଙ୍କ ପାଇଁ ବଜ୍ରପାତ ଦୁର୍ଘଟଣା ର ଡାକ୍ତରୀ ମାର୍ଗଦର୍ଶନ, ପ୍ରତିରୋଧ ଓ ସରକାରୀ ସହାୟତା।",
      "symptoms": [
        "ସ୍ଥାନୀୟ ଯନ୍ତ୍ରଣା, ଜ୍ୱର ବା ଅସ୍ୱସ୍ତି ଭାବ",
        "ଦୁର୍ବଳତା ଏବଂ ଶରୀରରେ ଶକ୍ତିର ଅଭାବ",
        "ଭୋକ କମିବା ଏବଂ ମୁଣ୍ଡବିନ୍ଧା",
        "ରୋଗ ସମ୍ପର୍କିତ ସାଧାରଣ ଡାକ୍ତରୀ ଲକ୍ଷଣ"
      ],
      "causes": [
        "ବଜ୍ରପାତ ଦୁର୍ଘଟଣା ସମ୍ପର୍କିତ ପରିବେଶ ଓ ଜୀବାଣୁଜନିତ କାରଣ",
        "ଋତୁକାଳୀନ ପ୍ରତିକୂଳ ପାଗ ବା ଅପରିଷ୍କାର ପରିବେଶ",
        "ପୁଷ୍ଟିହୀନତା ବା ରୋଗ ପ୍ରତିରୋଧକ ଶକ୍ତିର ଅଭାବ"
      ],
      "treatments": [
        "ଡାକ୍ତରଙ୍କ ପରାମର୍ଶ ଅନୁଯାୟୀ ପ୍ରମାଣିତ ଔଷଧ ସେବନ",
        "ପର୍ଯ୍ୟାପ୍ତ ପାଣି ପିଇବା, ପୁଷ୍ଟିକର ଖାଦ୍ୟ ଓ ବିଶ୍ରାମ",
        "ଓଡ଼ିଶା ସରକାରୀ ଡାକ୍ତରଖାନାରେ ମାଗଣା ଚିକିତ୍ସା ଓ ପରୀକ୍ଷା"
      ],
      "prevention": [
        "ବ୍ୟକ୍ତିଗତ ଓ ପରିବେଶ ପରିମଳ ସର୍ବଦା ବଜାୟ ରଖନ୍ତୁ",
        "ସ୍ୱାସ୍ଥ୍ୟ ବିଭାଗର ନିର୍ଦ୍ଦେଶାବଳୀ ପାଳନ କରନ୍ତୁ",
        "ସମୟ ଅନୁଯାୟୀ ଟିକାକରଣ ଓ ସ୍ୱାସ୍ଥ୍ୟ ଯାଞ୍ଚ କରାନ୍ତୁ"
      ],
      "dos": [
        "ଲକ୍ଷଣ ଦେଖାଦେବା ମାତ୍ରେ ଡାକ୍ତରଙ୍କ ସହ ପରାମର୍ଶ କରନ୍ତୁ",
        "ଡାକ୍ତର ଦେଇଥିବା ଔଷଧ କୋର୍ସ ସମ୍ପୂର୍ଣ୍ଣ ଶେଷ କରନ୍ତୁ",
        "ଫୁଟା ପାଣି ଓ ପୁଷ୍ଟିକର ଖାଦ୍ୟ ଖାଆନ୍ତୁ"
      ],
      "donts": [
        "ଡାକ୍ତରଙ୍କ ବିନା ପରାମର୍ଶରେ ମେଡିସିନ୍ ଦୋକାନରୁ ଔଷଧ ଖାଆନ୍ତୁ ନାହିଁ",
        "ଗୁରୁତର ଲକ୍ଷଣ ଥିଲେ ଡାକ୍ତରଖାନା ଯିବାରେ ଡେରି କରନ୍ତୁ ନାହିଁ",
        "ଅପରିଷ୍କାର ଓ ବାସି ଖାଦ୍ୟ ଖାଆନ୍ତୁ ନାହିଁ"
      ],
      "whenToSeeDoctor": [
        "ଲଗାତାର ତେଜ ଜ୍ୱର ଲାଗିରହିଲେ",
        "ନିଶ୍ୱାସ ନେବାରେ କଷ୍ଟ ହେଲେ ବା ଚେତା ହରାଇଲେ",
        "ପାଣି ପିଇ ନପାରିଲେ ବା ବାରମ୍ବାର ବାନ୍ତି ହେଲେ"
      ],
      "faqs": [
        {
          "question": "ଓଡ଼ିଶାରେ ବଜ୍ରପାତ ଦୁର୍ଘଟଣା ର ଚିକିତ୍ସା ମାଗଣାରେ ମିଳେ କି?",
          "answer": "ହଁ, ନିରାମୟ ଯୋଜନା ଓ ବିଜୁ ସ୍ୱାସ୍ଥ୍ୟ କଲ୍ୟାଣ ଯୋଜନାରେ ସମସ୍ତ ସରକାରୀ ଡାକ୍ତରଖାନାରେ ମାଗଣା ପରୀକ୍ଷା ଓ ଔଷଧ ଉପଲବ୍ଧ।"
        },
        {
          "question": "କେବେ ଡାକ୍ତରଖାନା ଯିବା ଉଚିତ?",
          "answer": "ଗୁରୁତର ଲକ୍ଷଣ ଦେଖାଦେବା ମାତ୍ରେ ତୁରନ୍ତ ଡାକ୍ତରଖାନା ଯିବା ଉଚିତ।"
        }
      ]
    }
  },
  {
    "id": "dis-37-accidental-pesticide-poisoning-chasa-bisakriya-",
    "category": "Emergency",
    "severity": "Emergency",
    "transmission": "Inhalation/ingestion of organophosphate agricultural chemicals",
    "en": {
      "name": "Accidental Pesticide Poisoning (Chasa Bisakriya)",
      "overview": "Detailed clinical guidance, prevention, and government health support in Odisha for Accidental Pesticide Poisoning (Chasa Bisakriya).",
      "symptoms": [
        "Primary localized pain, fever, or discomfort",
        "Fatigue and reduced physical stamina",
        "Loss of normal appetite and mild headache",
        "Associated diagnostic clinical signs specific to condition"
      ],
      "causes": [
        "Etiological factors and environmental exposure related to Accidental Pesticide Poisoning (Chasa Bisakriya)",
        "Unfavorable seasonal conditions or unhygienic community environment",
        "Nutritional or metabolic susceptibility factors"
      ],
      "treatments": [
        "Evidence-based pharmacotherapy prescribed by medical officer",
        "Adequate fluid intake, nutritious diet, and supportive care",
        "Free treatment and diagnostic screening available at Odisha CHCs and DHHs"
      ],
      "prevention": [
        "Maintain strict personal, domestic, and water hygiene",
        "Adhere to public health department guidelines and advisories",
        "Timely immunization and regular screening visits"
      ],
      "dos": [
        "Consult a qualified medical officer at early onset of symptoms",
        "Complete the prescribed medical regimen without skipping doses",
        "Maintain clean drinking water and well-balanced nutrition"
      ],
      "donts": [
        "Do not self-medicate or purchase unverified over-the-counter drugs",
        "Do not delay seeking medical care if red flag symptoms emerge",
        "Do not consume unhygienic or contaminated food and water"
      ],
      "whenToSeeDoctor": [
        "High continuous fever not responding to antipyretics",
        "Breathing difficulty, extreme fatigue, or fainting",
        "Inability to eat or drink oral fluids"
      ],
      "faqs": [
        {
          "question": "Is treatment for Accidental Pesticide Poisoning (Chasa Bisakriya) available free in Odisha?",
          "answer": "Yes, under Niramaya scheme and BSKY, free diagnostics and medicines are provided across Odisha government facilities."
        },
        {
          "question": "When should one visit the nearest hospital?",
          "answer": "Visit the hospital at first onset of severe symptoms or if home recovery is slow after 48 hours."
        }
      ]
    },
    "or": {
      "name": "ଚାଷ କୀଟନାଶକ ବିଷକ୍ରିୟା",
      "nativeName": "ଚାଷ କୀଟନାଶକ ବିଷକ୍ରିୟା",
      "overview": "ଓଡ଼ିଶାର ଜନସାଧାରଣଙ୍କ ପାଇଁ ଚାଷ କୀଟନାଶକ ବିଷକ୍ରିୟା ର ଡାକ୍ତରୀ ମାର୍ଗଦର୍ଶନ, ପ୍ରତିରୋଧ ଓ ସରକାରୀ ସହାୟତା।",
      "symptoms": [
        "ସ୍ଥାନୀୟ ଯନ୍ତ୍ରଣା, ଜ୍ୱର ବା ଅସ୍ୱସ୍ତି ଭାବ",
        "ଦୁର୍ବଳତା ଏବଂ ଶରୀରରେ ଶକ୍ତିର ଅଭାବ",
        "ଭୋକ କମିବା ଏବଂ ମୁଣ୍ଡବିନ୍ଧା",
        "ରୋଗ ସମ୍ପର୍କିତ ସାଧାରଣ ଡାକ୍ତରୀ ଲକ୍ଷଣ"
      ],
      "causes": [
        "ଚାଷ କୀଟନାଶକ ବିଷକ୍ରିୟା ସମ୍ପର୍କିତ ପରିବେଶ ଓ ଜୀବାଣୁଜନିତ କାରଣ",
        "ଋତୁକାଳୀନ ପ୍ରତିକୂଳ ପାଗ ବା ଅପରିଷ୍କାର ପରିବେଶ",
        "ପୁଷ୍ଟିହୀନତା ବା ରୋଗ ପ୍ରତିରୋଧକ ଶକ୍ତିର ଅଭାବ"
      ],
      "treatments": [
        "ଡାକ୍ତରଙ୍କ ପରାମର୍ଶ ଅନୁଯାୟୀ ପ୍ରମାଣିତ ଔଷଧ ସେବନ",
        "ପର୍ଯ୍ୟାପ୍ତ ପାଣି ପିଇବା, ପୁଷ୍ଟିକର ଖାଦ୍ୟ ଓ ବିଶ୍ରାମ",
        "ଓଡ଼ିଶା ସରକାରୀ ଡାକ୍ତରଖାନାରେ ମାଗଣା ଚିକିତ୍ସା ଓ ପରୀକ୍ଷା"
      ],
      "prevention": [
        "ବ୍ୟକ୍ତିଗତ ଓ ପରିବେଶ ପରିମଳ ସର୍ବଦା ବଜାୟ ରଖନ୍ତୁ",
        "ସ୍ୱାସ୍ଥ୍ୟ ବିଭାଗର ନିର୍ଦ୍ଦେଶାବଳୀ ପାଳନ କରନ୍ତୁ",
        "ସମୟ ଅନୁଯାୟୀ ଟିକାକରଣ ଓ ସ୍ୱାସ୍ଥ୍ୟ ଯାଞ୍ଚ କରାନ୍ତୁ"
      ],
      "dos": [
        "ଲକ୍ଷଣ ଦେଖାଦେବା ମାତ୍ରେ ଡାକ୍ତରଙ୍କ ସହ ପରାମର୍ଶ କରନ୍ତୁ",
        "ଡାକ୍ତର ଦେଇଥିବା ଔଷଧ କୋର୍ସ ସମ୍ପୂର୍ଣ୍ଣ ଶେଷ କରନ୍ତୁ",
        "ଫୁଟା ପାଣି ଓ ପୁଷ୍ଟିକର ଖାଦ୍ୟ ଖାଆନ୍ତୁ"
      ],
      "donts": [
        "ଡାକ୍ତରଙ୍କ ବିନା ପରାମର୍ଶରେ ମେଡିସିନ୍ ଦୋକାନରୁ ଔଷଧ ଖାଆନ୍ତୁ ନାହିଁ",
        "ଗୁରୁତର ଲକ୍ଷଣ ଥିଲେ ଡାକ୍ତରଖାନା ଯିବାରେ ଡେରି କରନ୍ତୁ ନାହିଁ",
        "ଅପରିଷ୍କାର ଓ ବାସି ଖାଦ୍ୟ ଖାଆନ୍ତୁ ନାହିଁ"
      ],
      "whenToSeeDoctor": [
        "ଲଗାତାର ତେଜ ଜ୍ୱର ଲାଗିରହିଲେ",
        "ନିଶ୍ୱାସ ନେବାରେ କଷ୍ଟ ହେଲେ ବା ଚେତା ହରାଇଲେ",
        "ପାଣି ପିଇ ନପାରିଲେ ବା ବାରମ୍ବାର ବାନ୍ତି ହେଲେ"
      ],
      "faqs": [
        {
          "question": "ଓଡ଼ିଶାରେ ଚାଷ କୀଟନାଶକ ବିଷକ୍ରିୟା ର ଚିକିତ୍ସା ମାଗଣାରେ ମିଳେ କି?",
          "answer": "ହଁ, ନିରାମୟ ଯୋଜନା ଓ ବିଜୁ ସ୍ୱାସ୍ଥ୍ୟ କଲ୍ୟାଣ ଯୋଜନାରେ ସମସ୍ତ ସରକାରୀ ଡାକ୍ତରଖାନାରେ ମାଗଣା ପରୀକ୍ଷା ଓ ଔଷଧ ଉପଲବ୍ଧ।"
        },
        {
          "question": "କେବେ ଡାକ୍ତରଖାନା ଯିବା ଉଚିତ?",
          "answer": "ଗୁରୁତର ଲକ୍ଷଣ ଦେଖାଦେବା ମାତ୍ରେ ତୁରନ୍ତ ଡାକ୍ତରଖାନା ଯିବା ଉଚିତ।"
        }
      ]
    }
  },
  {
    "id": "dis-38-gout-uric-acid-arthritis",
    "category": "Chronic & Lifestyle",
    "severity": "Moderate",
    "transmission": "High uric acid crystals deposits in joints",
    "en": {
      "name": "Gout & Uric Acid Arthritis",
      "overview": "Detailed clinical guidance, prevention, and government health support in Odisha for Gout & Uric Acid Arthritis.",
      "symptoms": [
        "Primary localized pain, fever, or discomfort",
        "Fatigue and reduced physical stamina",
        "Loss of normal appetite and mild headache",
        "Associated diagnostic clinical signs specific to condition"
      ],
      "causes": [
        "Etiological factors and environmental exposure related to Gout & Uric Acid Arthritis",
        "Unfavorable seasonal conditions or unhygienic community environment",
        "Nutritional or metabolic susceptibility factors"
      ],
      "treatments": [
        "Evidence-based pharmacotherapy prescribed by medical officer",
        "Adequate fluid intake, nutritious diet, and supportive care",
        "Free treatment and diagnostic screening available at Odisha CHCs and DHHs"
      ],
      "prevention": [
        "Maintain strict personal, domestic, and water hygiene",
        "Adhere to public health department guidelines and advisories",
        "Timely immunization and regular screening visits"
      ],
      "dos": [
        "Consult a qualified medical officer at early onset of symptoms",
        "Complete the prescribed medical regimen without skipping doses",
        "Maintain clean drinking water and well-balanced nutrition"
      ],
      "donts": [
        "Do not self-medicate or purchase unverified over-the-counter drugs",
        "Do not delay seeking medical care if red flag symptoms emerge",
        "Do not consume unhygienic or contaminated food and water"
      ],
      "whenToSeeDoctor": [
        "High continuous fever not responding to antipyretics",
        "Breathing difficulty, extreme fatigue, or fainting",
        "Inability to eat or drink oral fluids"
      ],
      "faqs": [
        {
          "question": "Is treatment for Gout & Uric Acid Arthritis available free in Odisha?",
          "answer": "Yes, under Niramaya scheme and BSKY, free diagnostics and medicines are provided across Odisha government facilities."
        },
        {
          "question": "When should one visit the nearest hospital?",
          "answer": "Visit the hospital at first onset of severe symptoms or if home recovery is slow after 48 hours."
        }
      ]
    },
    "or": {
      "name": "ୟୁରିକ୍ ଏସିଡ୍ ଗଣ୍ଠି ଯନ୍ତ୍ରଣା (ଗାଉଟ୍)",
      "nativeName": "ୟୁରିକ୍ ଏସିଡ୍ ଗଣ୍ଠି ଯନ୍ତ୍ରଣା (ଗାଉଟ୍)",
      "overview": "ଓଡ଼ିଶାର ଜନସାଧାରଣଙ୍କ ପାଇଁ ୟୁରିକ୍ ଏସିଡ୍ ଗଣ୍ଠି ଯନ୍ତ୍ରଣା (ଗାଉଟ୍) ର ଡାକ୍ତରୀ ମାର୍ଗଦର୍ଶନ, ପ୍ରତିରୋଧ ଓ ସରକାରୀ ସହାୟତା।",
      "symptoms": [
        "ସ୍ଥାନୀୟ ଯନ୍ତ୍ରଣା, ଜ୍ୱର ବା ଅସ୍ୱସ୍ତି ଭାବ",
        "ଦୁର୍ବଳତା ଏବଂ ଶରୀରରେ ଶକ୍ତିର ଅଭାବ",
        "ଭୋକ କମିବା ଏବଂ ମୁଣ୍ଡବିନ୍ଧା",
        "ରୋଗ ସମ୍ପର୍କିତ ସାଧାରଣ ଡାକ୍ତରୀ ଲକ୍ଷଣ"
      ],
      "causes": [
        "ୟୁରିକ୍ ଏସିଡ୍ ଗଣ୍ଠି ଯନ୍ତ୍ରଣା (ଗାଉଟ୍) ସମ୍ପର୍କିତ ପରିବେଶ ଓ ଜୀବାଣୁଜନିତ କାରଣ",
        "ଋତୁକାଳୀନ ପ୍ରତିକୂଳ ପାଗ ବା ଅପରିଷ୍କାର ପରିବେଶ",
        "ପୁଷ୍ଟିହୀନତା ବା ରୋଗ ପ୍ରତିରୋଧକ ଶକ୍ତିର ଅଭାବ"
      ],
      "treatments": [
        "ଡାକ୍ତରଙ୍କ ପରାମର୍ଶ ଅନୁଯାୟୀ ପ୍ରମାଣିତ ଔଷଧ ସେବନ",
        "ପର୍ଯ୍ୟାପ୍ତ ପାଣି ପିଇବା, ପୁଷ୍ଟିକର ଖାଦ୍ୟ ଓ ବିଶ୍ରାମ",
        "ଓଡ଼ିଶା ସରକାରୀ ଡାକ୍ତରଖାନାରେ ମାଗଣା ଚିକିତ୍ସା ଓ ପରୀକ୍ଷା"
      ],
      "prevention": [
        "ବ୍ୟକ୍ତିଗତ ଓ ପରିବେଶ ପରିମଳ ସର୍ବଦା ବଜାୟ ରଖନ୍ତୁ",
        "ସ୍ୱାସ୍ଥ୍ୟ ବିଭାଗର ନିର୍ଦ୍ଦେଶାବଳୀ ପାଳନ କରନ୍ତୁ",
        "ସମୟ ଅନୁଯାୟୀ ଟିକାକରଣ ଓ ସ୍ୱାସ୍ଥ୍ୟ ଯାଞ୍ଚ କରାନ୍ତୁ"
      ],
      "dos": [
        "ଲକ୍ଷଣ ଦେଖାଦେବା ମାତ୍ରେ ଡାକ୍ତରଙ୍କ ସହ ପରାମର୍ଶ କରନ୍ତୁ",
        "ଡାକ୍ତର ଦେଇଥିବା ଔଷଧ କୋର୍ସ ସମ୍ପୂର୍ଣ୍ଣ ଶେଷ କରନ୍ତୁ",
        "ଫୁଟା ପାଣି ଓ ପୁଷ୍ଟିକର ଖାଦ୍ୟ ଖାଆନ୍ତୁ"
      ],
      "donts": [
        "ଡାକ୍ତରଙ୍କ ବିନା ପରାମର୍ଶରେ ମେଡିସିନ୍ ଦୋକାନରୁ ଔଷଧ ଖାଆନ୍ତୁ ନାହିଁ",
        "ଗୁରୁତର ଲକ୍ଷଣ ଥିଲେ ଡାକ୍ତରଖାନା ଯିବାରେ ଡେରି କରନ୍ତୁ ନାହିଁ",
        "ଅପରିଷ୍କାର ଓ ବାସି ଖାଦ୍ୟ ଖାଆନ୍ତୁ ନାହିଁ"
      ],
      "whenToSeeDoctor": [
        "ଲଗାତାର ତେଜ ଜ୍ୱର ଲାଗିରହିଲେ",
        "ନିଶ୍ୱାସ ନେବାରେ କଷ୍ଟ ହେଲେ ବା ଚେତା ହରାଇଲେ",
        "ପାଣି ପିଇ ନପାରିଲେ ବା ବାରମ୍ବାର ବାନ୍ତି ହେଲେ"
      ],
      "faqs": [
        {
          "question": "ଓଡ଼ିଶାରେ ୟୁରିକ୍ ଏସିଡ୍ ଗଣ୍ଠି ଯନ୍ତ୍ରଣା (ଗାଉଟ୍) ର ଚିକିତ୍ସା ମାଗଣାରେ ମିଳେ କି?",
          "answer": "ହଁ, ନିରାମୟ ଯୋଜନା ଓ ବିଜୁ ସ୍ୱାସ୍ଥ୍ୟ କଲ୍ୟାଣ ଯୋଜନାରେ ସମସ୍ତ ସରକାରୀ ଡାକ୍ତରଖାନାରେ ମାଗଣା ପରୀକ୍ଷା ଓ ଔଷଧ ଉପଲବ୍ଧ।"
        },
        {
          "question": "କେବେ ଡାକ୍ତରଖାନା ଯିବା ଉଚିତ?",
          "answer": "ଗୁରୁତର ଲକ୍ଷଣ ଦେଖାଦେବା ମାତ୍ରେ ତୁରନ୍ତ ଡାକ୍ତରଖାନା ଯିବା ଉଚିତ।"
        }
      ]
    }
  },
  {
    "id": "dis-39-hypothyroidism-goiter-galaganda-",
    "category": "Chronic & Lifestyle",
    "severity": "Moderate",
    "transmission": "Thyroid hormone deficiency and iodine factors",
    "en": {
      "name": "Hypothyroidism & Goiter (Galaganda)",
      "overview": "Detailed clinical guidance, prevention, and government health support in Odisha for Hypothyroidism & Goiter (Galaganda).",
      "symptoms": [
        "Primary localized pain, fever, or discomfort",
        "Fatigue and reduced physical stamina",
        "Loss of normal appetite and mild headache",
        "Associated diagnostic clinical signs specific to condition"
      ],
      "causes": [
        "Etiological factors and environmental exposure related to Hypothyroidism & Goiter (Galaganda)",
        "Unfavorable seasonal conditions or unhygienic community environment",
        "Nutritional or metabolic susceptibility factors"
      ],
      "treatments": [
        "Evidence-based pharmacotherapy prescribed by medical officer",
        "Adequate fluid intake, nutritious diet, and supportive care",
        "Free treatment and diagnostic screening available at Odisha CHCs and DHHs"
      ],
      "prevention": [
        "Maintain strict personal, domestic, and water hygiene",
        "Adhere to public health department guidelines and advisories",
        "Timely immunization and regular screening visits"
      ],
      "dos": [
        "Consult a qualified medical officer at early onset of symptoms",
        "Complete the prescribed medical regimen without skipping doses",
        "Maintain clean drinking water and well-balanced nutrition"
      ],
      "donts": [
        "Do not self-medicate or purchase unverified over-the-counter drugs",
        "Do not delay seeking medical care if red flag symptoms emerge",
        "Do not consume unhygienic or contaminated food and water"
      ],
      "whenToSeeDoctor": [
        "High continuous fever not responding to antipyretics",
        "Breathing difficulty, extreme fatigue, or fainting",
        "Inability to eat or drink oral fluids"
      ],
      "faqs": [
        {
          "question": "Is treatment for Hypothyroidism & Goiter (Galaganda) available free in Odisha?",
          "answer": "Yes, under Niramaya scheme and BSKY, free diagnostics and medicines are provided across Odisha government facilities."
        },
        {
          "question": "When should one visit the nearest hospital?",
          "answer": "Visit the hospital at first onset of severe symptoms or if home recovery is slow after 48 hours."
        }
      ]
    },
    "or": {
      "name": "ଥାଇରଏଡ୍ ସମସ୍ୟା ଓ ଗଳଗଣ୍ଡ",
      "nativeName": "ଥାଇରଏଡ୍ ସମସ୍ୟା ଓ ଗଳଗଣ୍ଡ",
      "overview": "ଓଡ଼ିଶାର ଜନସାଧାରଣଙ୍କ ପାଇଁ ଥାଇରଏଡ୍ ସମସ୍ୟା ଓ ଗଳଗଣ୍ଡ ର ଡାକ୍ତରୀ ମାର୍ଗଦର୍ଶନ, ପ୍ରତିରୋଧ ଓ ସରକାରୀ ସହାୟତା।",
      "symptoms": [
        "ସ୍ଥାନୀୟ ଯନ୍ତ୍ରଣା, ଜ୍ୱର ବା ଅସ୍ୱସ୍ତି ଭାବ",
        "ଦୁର୍ବଳତା ଏବଂ ଶରୀରରେ ଶକ୍ତିର ଅଭାବ",
        "ଭୋକ କମିବା ଏବଂ ମୁଣ୍ଡବିନ୍ଧା",
        "ରୋଗ ସମ୍ପର୍କିତ ସାଧାରଣ ଡାକ୍ତରୀ ଲକ୍ଷଣ"
      ],
      "causes": [
        "ଥାଇରଏଡ୍ ସମସ୍ୟା ଓ ଗଳଗଣ୍ଡ ସମ୍ପର୍କିତ ପରିବେଶ ଓ ଜୀବାଣୁଜନିତ କାରଣ",
        "ଋତୁକାଳୀନ ପ୍ରତିକୂଳ ପାଗ ବା ଅପରିଷ୍କାର ପରିବେଶ",
        "ପୁଷ୍ଟିହୀନତା ବା ରୋଗ ପ୍ରତିରୋଧକ ଶକ୍ତିର ଅଭାବ"
      ],
      "treatments": [
        "ଡାକ୍ତରଙ୍କ ପରାମର୍ଶ ଅନୁଯାୟୀ ପ୍ରମାଣିତ ଔଷଧ ସେବନ",
        "ପର୍ଯ୍ୟାପ୍ତ ପାଣି ପିଇବା, ପୁଷ୍ଟିକର ଖାଦ୍ୟ ଓ ବିଶ୍ରାମ",
        "ଓଡ଼ିଶା ସରକାରୀ ଡାକ୍ତରଖାନାରେ ମାଗଣା ଚିକିତ୍ସା ଓ ପରୀକ୍ଷା"
      ],
      "prevention": [
        "ବ୍ୟକ୍ତିଗତ ଓ ପରିବେଶ ପରିମଳ ସର୍ବଦା ବଜାୟ ରଖନ୍ତୁ",
        "ସ୍ୱାସ୍ଥ୍ୟ ବିଭାଗର ନିର୍ଦ୍ଦେଶାବଳୀ ପାଳନ କରନ୍ତୁ",
        "ସମୟ ଅନୁଯାୟୀ ଟିକାକରଣ ଓ ସ୍ୱାସ୍ଥ୍ୟ ଯାଞ୍ଚ କରାନ୍ତୁ"
      ],
      "dos": [
        "ଲକ୍ଷଣ ଦେଖାଦେବା ମାତ୍ରେ ଡାକ୍ତରଙ୍କ ସହ ପରାମର୍ଶ କରନ୍ତୁ",
        "ଡାକ୍ତର ଦେଇଥିବା ଔଷଧ କୋର୍ସ ସମ୍ପୂର୍ଣ୍ଣ ଶେଷ କରନ୍ତୁ",
        "ଫୁଟା ପାଣି ଓ ପୁଷ୍ଟିକର ଖାଦ୍ୟ ଖାଆନ୍ତୁ"
      ],
      "donts": [
        "ଡାକ୍ତରଙ୍କ ବିନା ପରାମର୍ଶରେ ମେଡିସିନ୍ ଦୋକାନରୁ ଔଷଧ ଖାଆନ୍ତୁ ନାହିଁ",
        "ଗୁରୁତର ଲକ୍ଷଣ ଥିଲେ ଡାକ୍ତରଖାନା ଯିବାରେ ଡେରି କରନ୍ତୁ ନାହିଁ",
        "ଅପରିଷ୍କାର ଓ ବାସି ଖାଦ୍ୟ ଖାଆନ୍ତୁ ନାହିଁ"
      ],
      "whenToSeeDoctor": [
        "ଲଗାତାର ତେଜ ଜ୍ୱର ଲାଗିରହିଲେ",
        "ନିଶ୍ୱାସ ନେବାରେ କଷ୍ଟ ହେଲେ ବା ଚେତା ହରାଇଲେ",
        "ପାଣି ପିଇ ନପାରିଲେ ବା ବାରମ୍ବାର ବାନ୍ତି ହେଲେ"
      ],
      "faqs": [
        {
          "question": "ଓଡ଼ିଶାରେ ଥାଇରଏଡ୍ ସମସ୍ୟା ଓ ଗଳଗଣ୍ଡ ର ଚିକିତ୍ସା ମାଗଣାରେ ମିଳେ କି?",
          "answer": "ହଁ, ନିରାମୟ ଯୋଜନା ଓ ବିଜୁ ସ୍ୱାସ୍ଥ୍ୟ କଲ୍ୟାଣ ଯୋଜନାରେ ସମସ୍ତ ସରକାରୀ ଡାକ୍ତରଖାନାରେ ମାଗଣା ପରୀକ୍ଷା ଓ ଔଷଧ ଉପଲବ୍ଧ।"
        },
        {
          "question": "କେବେ ଡାକ୍ତରଖାନା ଯିବା ଉଚିତ?",
          "answer": "ଗୁରୁତର ଲକ୍ଷଣ ଦେଖାଦେବା ମାତ୍ରେ ତୁରନ୍ତ ଡାକ୍ତରଖାନା ଯିବା ଉଚିତ।"
        }
      ]
    }
  },
  {
    "id": "dis-40-japanese-encephalitis-je-",
    "category": "Vector-Borne",
    "severity": "Emergency",
    "transmission": "Culex mosquito bite from pig/wading bird reservoirs",
    "en": {
      "name": "Japanese Encephalitis (JE) - Grade 2",
      "overview": "Detailed clinical guidance, prevention, and government health support in Odisha for Japanese Encephalitis (JE).",
      "symptoms": [
        "Primary localized pain, fever, or discomfort",
        "Fatigue and reduced physical stamina",
        "Loss of normal appetite and mild headache",
        "Associated diagnostic clinical signs specific to condition"
      ],
      "causes": [
        "Etiological factors and environmental exposure related to Japanese Encephalitis (JE)",
        "Unfavorable seasonal conditions or unhygienic community environment",
        "Nutritional or metabolic susceptibility factors"
      ],
      "treatments": [
        "Evidence-based pharmacotherapy prescribed by medical officer",
        "Adequate fluid intake, nutritious diet, and supportive care",
        "Free treatment and diagnostic screening available at Odisha CHCs and DHHs"
      ],
      "prevention": [
        "Maintain strict personal, domestic, and water hygiene",
        "Adhere to public health department guidelines and advisories",
        "Timely immunization and regular screening visits"
      ],
      "dos": [
        "Consult a qualified medical officer at early onset of symptoms",
        "Complete the prescribed medical regimen without skipping doses",
        "Maintain clean drinking water and well-balanced nutrition"
      ],
      "donts": [
        "Do not self-medicate or purchase unverified over-the-counter drugs",
        "Do not delay seeking medical care if red flag symptoms emerge",
        "Do not consume unhygienic or contaminated food and water"
      ],
      "whenToSeeDoctor": [
        "High continuous fever not responding to antipyretics",
        "Breathing difficulty, extreme fatigue, or fainting",
        "Inability to eat or drink oral fluids"
      ],
      "faqs": [
        {
          "question": "Is treatment for Japanese Encephalitis (JE) available free in Odisha?",
          "answer": "Yes, under Niramaya scheme and BSKY, free diagnostics and medicines are provided across Odisha government facilities."
        },
        {
          "question": "When should one visit the nearest hospital?",
          "answer": "Visit the hospital at first onset of severe symptoms or if home recovery is slow after 48 hours."
        }
      ]
    },
    "or": {
      "name": "ଜାପାନୀ ଏନସେଫାଲାଇଟିସ୍ (ମସ୍ତିଷ୍କ ଜ୍ୱର) (ପର୍ଯ୍ୟାୟ 2)",
      "nativeName": "ଜାପାନୀ ଏନସେଫାଲାଇଟିସ୍ (ମସ୍ତିଷ୍କ ଜ୍ୱର)",
      "overview": "ଓଡ଼ିଶାର ଜନସାଧାରଣଙ୍କ ପାଇଁ ଜାପାନୀ ଏନସେଫାଲାଇଟିସ୍ (ମସ୍ତିଷ୍କ ଜ୍ୱର) ର ଡାକ୍ତରୀ ମାର୍ଗଦର୍ଶନ, ପ୍ରତିରୋଧ ଓ ସରକାରୀ ସହାୟତା।",
      "symptoms": [
        "ସ୍ଥାନୀୟ ଯନ୍ତ୍ରଣା, ଜ୍ୱର ବା ଅସ୍ୱସ୍ତି ଭାବ",
        "ଦୁର୍ବଳତା ଏବଂ ଶରୀରରେ ଶକ୍ତିର ଅଭାବ",
        "ଭୋକ କମିବା ଏବଂ ମୁଣ୍ଡବିନ୍ଧା",
        "ରୋଗ ସମ୍ପର୍କିତ ସାଧାରଣ ଡାକ୍ତରୀ ଲକ୍ଷଣ"
      ],
      "causes": [
        "ଜାପାନୀ ଏନସେଫାଲାଇଟିସ୍ (ମସ୍ତିଷ୍କ ଜ୍ୱର) ସମ୍ପର୍କିତ ପରିବେଶ ଓ ଜୀବାଣୁଜନିତ କାରଣ",
        "ଋତୁକାଳୀନ ପ୍ରତିକୂଳ ପାଗ ବା ଅପରିଷ୍କାର ପରିବେଶ",
        "ପୁଷ୍ଟିହୀନତା ବା ରୋଗ ପ୍ରତିରୋଧକ ଶକ୍ତିର ଅଭାବ"
      ],
      "treatments": [
        "ଡାକ୍ତରଙ୍କ ପରାମର୍ଶ ଅନୁଯାୟୀ ପ୍ରମାଣିତ ଔଷଧ ସେବନ",
        "ପର୍ଯ୍ୟାପ୍ତ ପାଣି ପିଇବା, ପୁଷ୍ଟିକର ଖାଦ୍ୟ ଓ ବିଶ୍ରାମ",
        "ଓଡ଼ିଶା ସରକାରୀ ଡାକ୍ତରଖାନାରେ ମାଗଣା ଚିକିତ୍ସା ଓ ପରୀକ୍ଷା"
      ],
      "prevention": [
        "ବ୍ୟକ୍ତିଗତ ଓ ପରିବେଶ ପରିମଳ ସର୍ବଦା ବଜାୟ ରଖନ୍ତୁ",
        "ସ୍ୱାସ୍ଥ୍ୟ ବିଭାଗର ନିର୍ଦ୍ଦେଶାବଳୀ ପାଳନ କରନ୍ତୁ",
        "ସମୟ ଅନୁଯାୟୀ ଟିକାକରଣ ଓ ସ୍ୱାସ୍ଥ୍ୟ ଯାଞ୍ଚ କରାନ୍ତୁ"
      ],
      "dos": [
        "ଲକ୍ଷଣ ଦେଖାଦେବା ମାତ୍ରେ ଡାକ୍ତରଙ୍କ ସହ ପରାମର୍ଶ କରନ୍ତୁ",
        "ଡାକ୍ତର ଦେଇଥିବା ଔଷଧ କୋର୍ସ ସମ୍ପୂର୍ଣ୍ଣ ଶେଷ କରନ୍ତୁ",
        "ଫୁଟା ପାଣି ଓ ପୁଷ୍ଟିକର ଖାଦ୍ୟ ଖାଆନ୍ତୁ"
      ],
      "donts": [
        "ଡାକ୍ତରଙ୍କ ବିନା ପରାମର୍ଶରେ ମେଡିସିନ୍ ଦୋକାନରୁ ଔଷଧ ଖାଆନ୍ତୁ ନାହିଁ",
        "ଗୁରୁତର ଲକ୍ଷଣ ଥିଲେ ଡାକ୍ତରଖାନା ଯିବାରେ ଡେରି କରନ୍ତୁ ନାହିଁ",
        "ଅପରିଷ୍କାର ଓ ବାସି ଖାଦ୍ୟ ଖାଆନ୍ତୁ ନାହିଁ"
      ],
      "whenToSeeDoctor": [
        "ଲଗାତାର ତେଜ ଜ୍ୱର ଲାଗିରହିଲେ",
        "ନିଶ୍ୱାସ ନେବାରେ କଷ୍ଟ ହେଲେ ବା ଚେତା ହରାଇଲେ",
        "ପାଣି ପିଇ ନପାରିଲେ ବା ବାରମ୍ବାର ବାନ୍ତି ହେଲେ"
      ],
      "faqs": [
        {
          "question": "ଓଡ଼ିଶାରେ ଜାପାନୀ ଏନସେଫାଲାଇଟିସ୍ (ମସ୍ତିଷ୍କ ଜ୍ୱର) ର ଚିକିତ୍ସା ମାଗଣାରେ ମିଳେ କି?",
          "answer": "ହଁ, ନିରାମୟ ଯୋଜନା ଓ ବିଜୁ ସ୍ୱାସ୍ଥ୍ୟ କଲ୍ୟାଣ ଯୋଜନାରେ ସମସ୍ତ ସରକାରୀ ଡାକ୍ତରଖାନାରେ ମାଗଣା ପରୀକ୍ଷା ଓ ଔଷଧ ଉପଲବ୍ଧ।"
        },
        {
          "question": "କେବେ ଡାକ୍ତରଖାନା ଯିବା ଉଚିତ?",
          "answer": "ଗୁରୁତର ଲକ୍ଷଣ ଦେଖାଦେବା ମାତ୍ରେ ତୁରନ୍ତ ଡାକ୍ତରଖାନା ଯିବା ଉଚିତ।"
        }
      ]
    }
  },
  {
    "id": "dis-41-leptospirosis-paddy-flood-fever-",
    "category": "Infectious & Bacterial",
    "severity": "High",
    "transmission": "Contact with water/mud contaminated with rodent urine",
    "en": {
      "name": "Leptospirosis (Paddy Flood Fever) - Grade 2",
      "overview": "Detailed clinical guidance, prevention, and government health support in Odisha for Leptospirosis (Paddy Flood Fever).",
      "symptoms": [
        "Primary localized pain, fever, or discomfort",
        "Fatigue and reduced physical stamina",
        "Loss of normal appetite and mild headache",
        "Associated diagnostic clinical signs specific to condition"
      ],
      "causes": [
        "Etiological factors and environmental exposure related to Leptospirosis (Paddy Flood Fever)",
        "Unfavorable seasonal conditions or unhygienic community environment",
        "Nutritional or metabolic susceptibility factors"
      ],
      "treatments": [
        "Evidence-based pharmacotherapy prescribed by medical officer",
        "Adequate fluid intake, nutritious diet, and supportive care",
        "Free treatment and diagnostic screening available at Odisha CHCs and DHHs"
      ],
      "prevention": [
        "Maintain strict personal, domestic, and water hygiene",
        "Adhere to public health department guidelines and advisories",
        "Timely immunization and regular screening visits"
      ],
      "dos": [
        "Consult a qualified medical officer at early onset of symptoms",
        "Complete the prescribed medical regimen without skipping doses",
        "Maintain clean drinking water and well-balanced nutrition"
      ],
      "donts": [
        "Do not self-medicate or purchase unverified over-the-counter drugs",
        "Do not delay seeking medical care if red flag symptoms emerge",
        "Do not consume unhygienic or contaminated food and water"
      ],
      "whenToSeeDoctor": [
        "High continuous fever not responding to antipyretics",
        "Breathing difficulty, extreme fatigue, or fainting",
        "Inability to eat or drink oral fluids"
      ],
      "faqs": [
        {
          "question": "Is treatment for Leptospirosis (Paddy Flood Fever) available free in Odisha?",
          "answer": "Yes, under Niramaya scheme and BSKY, free diagnostics and medicines are provided across Odisha government facilities."
        },
        {
          "question": "When should one visit the nearest hospital?",
          "answer": "Visit the hospital at first onset of severe symptoms or if home recovery is slow after 48 hours."
        }
      ]
    },
    "or": {
      "name": "ଲେପ୍ଟୋସ୍ପାଇରୋସିସ୍ (ବାତଜ୍ୱର) (ପର୍ଯ୍ୟାୟ 2)",
      "nativeName": "ଲେପ୍ଟୋସ୍ପାଇରୋସିସ୍ (ବାତଜ୍ୱର)",
      "overview": "ଓଡ଼ିଶାର ଜନସାଧାରଣଙ୍କ ପାଇଁ ଲେପ୍ଟୋସ୍ପାଇରୋସିସ୍ (ବାତଜ୍ୱର) ର ଡାକ୍ତରୀ ମାର୍ଗଦର୍ଶନ, ପ୍ରତିରୋଧ ଓ ସରକାରୀ ସହାୟତା।",
      "symptoms": [
        "ସ୍ଥାନୀୟ ଯନ୍ତ୍ରଣା, ଜ୍ୱର ବା ଅସ୍ୱସ୍ତି ଭାବ",
        "ଦୁର୍ବଳତା ଏବଂ ଶରୀରରେ ଶକ୍ତିର ଅଭାବ",
        "ଭୋକ କମିବା ଏବଂ ମୁଣ୍ଡବିନ୍ଧା",
        "ରୋଗ ସମ୍ପର୍କିତ ସାଧାରଣ ଡାକ୍ତରୀ ଲକ୍ଷଣ"
      ],
      "causes": [
        "ଲେପ୍ଟୋସ୍ପାଇରୋସିସ୍ (ବାତଜ୍ୱର) ସମ୍ପର୍କିତ ପରିବେଶ ଓ ଜୀବାଣୁଜନିତ କାରଣ",
        "ଋତୁକାଳୀନ ପ୍ରତିକୂଳ ପାଗ ବା ଅପରିଷ୍କାର ପରିବେଶ",
        "ପୁଷ୍ଟିହୀନତା ବା ରୋଗ ପ୍ରତିରୋଧକ ଶକ୍ତିର ଅଭାବ"
      ],
      "treatments": [
        "ଡାକ୍ତରଙ୍କ ପରାମର୍ଶ ଅନୁଯାୟୀ ପ୍ରମାଣିତ ଔଷଧ ସେବନ",
        "ପର୍ଯ୍ୟାପ୍ତ ପାଣି ପିଇବା, ପୁଷ୍ଟିକର ଖାଦ୍ୟ ଓ ବିଶ୍ରାମ",
        "ଓଡ଼ିଶା ସରକାରୀ ଡାକ୍ତରଖାନାରେ ମାଗଣା ଚିକିତ୍ସା ଓ ପରୀକ୍ଷା"
      ],
      "prevention": [
        "ବ୍ୟକ୍ତିଗତ ଓ ପରିବେଶ ପରିମଳ ସର୍ବଦା ବଜାୟ ରଖନ୍ତୁ",
        "ସ୍ୱାସ୍ଥ୍ୟ ବିଭାଗର ନିର୍ଦ୍ଦେଶାବଳୀ ପାଳନ କରନ୍ତୁ",
        "ସମୟ ଅନୁଯାୟୀ ଟିକାକରଣ ଓ ସ୍ୱାସ୍ଥ୍ୟ ଯାଞ୍ଚ କରାନ୍ତୁ"
      ],
      "dos": [
        "ଲକ୍ଷଣ ଦେଖାଦେବା ମାତ୍ରେ ଡାକ୍ତରଙ୍କ ସହ ପରାମର୍ଶ କରନ୍ତୁ",
        "ଡାକ୍ତର ଦେଇଥିବା ଔଷଧ କୋର୍ସ ସମ୍ପୂର୍ଣ୍ଣ ଶେଷ କରନ୍ତୁ",
        "ଫୁଟା ପାଣି ଓ ପୁଷ୍ଟିକର ଖାଦ୍ୟ ଖାଆନ୍ତୁ"
      ],
      "donts": [
        "ଡାକ୍ତରଙ୍କ ବିନା ପରାମର୍ଶରେ ମେଡିସିନ୍ ଦୋକାନରୁ ଔଷଧ ଖାଆନ୍ତୁ ନାହିଁ",
        "ଗୁରୁତର ଲକ୍ଷଣ ଥିଲେ ଡାକ୍ତରଖାନା ଯିବାରେ ଡେରି କରନ୍ତୁ ନାହିଁ",
        "ଅପରିଷ୍କାର ଓ ବାସି ଖାଦ୍ୟ ଖାଆନ୍ତୁ ନାହିଁ"
      ],
      "whenToSeeDoctor": [
        "ଲଗାତାର ତେଜ ଜ୍ୱର ଲାଗିରହିଲେ",
        "ନିଶ୍ୱାସ ନେବାରେ କଷ୍ଟ ହେଲେ ବା ଚେତା ହରାଇଲେ",
        "ପାଣି ପିଇ ନପାରିଲେ ବା ବାରମ୍ବାର ବାନ୍ତି ହେଲେ"
      ],
      "faqs": [
        {
          "question": "ଓଡ଼ିଶାରେ ଲେପ୍ଟୋସ୍ପାଇରୋସିସ୍ (ବାତଜ୍ୱର) ର ଚିକିତ୍ସା ମାଗଣାରେ ମିଳେ କି?",
          "answer": "ହଁ, ନିରାମୟ ଯୋଜନା ଓ ବିଜୁ ସ୍ୱାସ୍ଥ୍ୟ କଲ୍ୟାଣ ଯୋଜନାରେ ସମସ୍ତ ସରକାରୀ ଡାକ୍ତରଖାନାରେ ମାଗଣା ପରୀକ୍ଷା ଓ ଔଷଧ ଉପଲବ୍ଧ।"
        },
        {
          "question": "କେବେ ଡାକ୍ତରଖାନା ଯିବା ଉଚିତ?",
          "answer": "ଗୁରୁତର ଲକ୍ଷଣ ଦେଖାଦେବା ମାତ୍ରେ ତୁରନ୍ତ ଡାକ୍ତରଖାନା ଯିବା ଉଚିତ।"
        }
      ]
    }
  },
  {
    "id": "dis-42-leprosy-hansen-s-disease-kustha-roga-",
    "category": "Infectious & Bacterial",
    "severity": "Moderate",
    "transmission": "Prolonged close droplet contact",
    "en": {
      "name": "Leprosy (Hansen's Disease / Kustha Roga) - Grade 2",
      "overview": "Detailed clinical guidance, prevention, and government health support in Odisha for Leprosy (Hansen's Disease / Kustha Roga).",
      "symptoms": [
        "Primary localized pain, fever, or discomfort",
        "Fatigue and reduced physical stamina",
        "Loss of normal appetite and mild headache",
        "Associated diagnostic clinical signs specific to condition"
      ],
      "causes": [
        "Etiological factors and environmental exposure related to Leprosy (Hansen's Disease / Kustha Roga)",
        "Unfavorable seasonal conditions or unhygienic community environment",
        "Nutritional or metabolic susceptibility factors"
      ],
      "treatments": [
        "Evidence-based pharmacotherapy prescribed by medical officer",
        "Adequate fluid intake, nutritious diet, and supportive care",
        "Free treatment and diagnostic screening available at Odisha CHCs and DHHs"
      ],
      "prevention": [
        "Maintain strict personal, domestic, and water hygiene",
        "Adhere to public health department guidelines and advisories",
        "Timely immunization and regular screening visits"
      ],
      "dos": [
        "Consult a qualified medical officer at early onset of symptoms",
        "Complete the prescribed medical regimen without skipping doses",
        "Maintain clean drinking water and well-balanced nutrition"
      ],
      "donts": [
        "Do not self-medicate or purchase unverified over-the-counter drugs",
        "Do not delay seeking medical care if red flag symptoms emerge",
        "Do not consume unhygienic or contaminated food and water"
      ],
      "whenToSeeDoctor": [
        "High continuous fever not responding to antipyretics",
        "Breathing difficulty, extreme fatigue, or fainting",
        "Inability to eat or drink oral fluids"
      ],
      "faqs": [
        {
          "question": "Is treatment for Leprosy (Hansen's Disease / Kustha Roga) available free in Odisha?",
          "answer": "Yes, under Niramaya scheme and BSKY, free diagnostics and medicines are provided across Odisha government facilities."
        },
        {
          "question": "When should one visit the nearest hospital?",
          "answer": "Visit the hospital at first onset of severe symptoms or if home recovery is slow after 48 hours."
        }
      ]
    },
    "or": {
      "name": "କୁଷ୍ଠ ରୋଗ (ହାନ୍ସେନସ୍ ଡିଜିଜ୍) (ପର୍ଯ୍ୟାୟ 2)",
      "nativeName": "କୁଷ୍ଠ ରୋଗ (ହାନ୍ସେନସ୍ ଡିଜିଜ୍)",
      "overview": "ଓଡ଼ିଶାର ଜନସାଧାରଣଙ୍କ ପାଇଁ କୁଷ୍ଠ ରୋଗ (ହାନ୍ସେନସ୍ ଡିଜିଜ୍) ର ଡାକ୍ତରୀ ମାର୍ଗଦର୍ଶନ, ପ୍ରତିରୋଧ ଓ ସରକାରୀ ସହାୟତା।",
      "symptoms": [
        "ସ୍ଥାନୀୟ ଯନ୍ତ୍ରଣା, ଜ୍ୱର ବା ଅସ୍ୱସ୍ତି ଭାବ",
        "ଦୁର୍ବଳତା ଏବଂ ଶରୀରରେ ଶକ୍ତିର ଅଭାବ",
        "ଭୋକ କମିବା ଏବଂ ମୁଣ୍ଡବିନ୍ଧା",
        "ରୋଗ ସମ୍ପର୍କିତ ସାଧାରଣ ଡାକ୍ତରୀ ଲକ୍ଷଣ"
      ],
      "causes": [
        "କୁଷ୍ଠ ରୋଗ (ହାନ୍ସେନସ୍ ଡିଜିଜ୍) ସମ୍ପର୍କିତ ପରିବେଶ ଓ ଜୀବାଣୁଜନିତ କାରଣ",
        "ଋତୁକାଳୀନ ପ୍ରତିକୂଳ ପାଗ ବା ଅପରିଷ୍କାର ପରିବେଶ",
        "ପୁଷ୍ଟିହୀନତା ବା ରୋଗ ପ୍ରତିରୋଧକ ଶକ୍ତିର ଅଭାବ"
      ],
      "treatments": [
        "ଡାକ୍ତରଙ୍କ ପରାମର୍ଶ ଅନୁଯାୟୀ ପ୍ରମାଣିତ ଔଷଧ ସେବନ",
        "ପର୍ଯ୍ୟାପ୍ତ ପାଣି ପିଇବା, ପୁଷ୍ଟିକର ଖାଦ୍ୟ ଓ ବିଶ୍ରାମ",
        "ଓଡ଼ିଶା ସରକାରୀ ଡାକ୍ତରଖାନାରେ ମାଗଣା ଚିକିତ୍ସା ଓ ପରୀକ୍ଷା"
      ],
      "prevention": [
        "ବ୍ୟକ୍ତିଗତ ଓ ପରିବେଶ ପରିମଳ ସର୍ବଦା ବଜାୟ ରଖନ୍ତୁ",
        "ସ୍ୱାସ୍ଥ୍ୟ ବିଭାଗର ନିର୍ଦ୍ଦେଶାବଳୀ ପାଳନ କରନ୍ତୁ",
        "ସମୟ ଅନୁଯାୟୀ ଟିକାକରଣ ଓ ସ୍ୱାସ୍ଥ୍ୟ ଯାଞ୍ଚ କରାନ୍ତୁ"
      ],
      "dos": [
        "ଲକ୍ଷଣ ଦେଖାଦେବା ମାତ୍ରେ ଡାକ୍ତରଙ୍କ ସହ ପରାମର୍ଶ କରନ୍ତୁ",
        "ଡାକ୍ତର ଦେଇଥିବା ଔଷଧ କୋର୍ସ ସମ୍ପୂର୍ଣ୍ଣ ଶେଷ କରନ୍ତୁ",
        "ଫୁଟା ପାଣି ଓ ପୁଷ୍ଟିକର ଖାଦ୍ୟ ଖାଆନ୍ତୁ"
      ],
      "donts": [
        "ଡାକ୍ତରଙ୍କ ବିନା ପରାମର୍ଶରେ ମେଡିସିନ୍ ଦୋକାନରୁ ଔଷଧ ଖାଆନ୍ତୁ ନାହିଁ",
        "ଗୁରୁତର ଲକ୍ଷଣ ଥିଲେ ଡାକ୍ତରଖାନା ଯିବାରେ ଡେରି କରନ୍ତୁ ନାହିଁ",
        "ଅପରିଷ୍କାର ଓ ବାସି ଖାଦ୍ୟ ଖାଆନ୍ତୁ ନାହିଁ"
      ],
      "whenToSeeDoctor": [
        "ଲଗାତାର ତେଜ ଜ୍ୱର ଲାଗିରହିଲେ",
        "ନିଶ୍ୱାସ ନେବାରେ କଷ୍ଟ ହେଲେ ବା ଚେତା ହରାଇଲେ",
        "ପାଣି ପିଇ ନପାରିଲେ ବା ବାରମ୍ବାର ବାନ୍ତି ହେଲେ"
      ],
      "faqs": [
        {
          "question": "ଓଡ଼ିଶାରେ କୁଷ୍ଠ ରୋଗ (ହାନ୍ସେନସ୍ ଡିଜିଜ୍) ର ଚିକିତ୍ସା ମାଗଣାରେ ମିଳେ କି?",
          "answer": "ହଁ, ନିରାମୟ ଯୋଜନା ଓ ବିଜୁ ସ୍ୱାସ୍ଥ୍ୟ କଲ୍ୟାଣ ଯୋଜନାରେ ସମସ୍ତ ସରକାରୀ ଡାକ୍ତରଖାନାରେ ମାଗଣା ପରୀକ୍ଷା ଓ ଔଷଧ ଉପଲବ୍ଧ।"
        },
        {
          "question": "କେବେ ଡାକ୍ତରଖାନା ଯିବା ଉଚିତ?",
          "answer": "ଗୁରୁତର ଲକ୍ଷଣ ଦେଖାଦେବା ମାତ୍ରେ ତୁରନ୍ତ ଡାକ୍ତରଖାନା ଯିବା ଉଚିତ।"
        }
      ]
    }
  },
  {
    "id": "dis-43-rabies-dog-bite-prophylaxis",
    "category": "Emergency",
    "severity": "Emergency",
    "transmission": "Saliva of rabid dog, monkey, or jackal via bite/scratch",
    "en": {
      "name": "Rabies & Dog Bite Prophylaxis - Grade 2",
      "overview": "Detailed clinical guidance, prevention, and government health support in Odisha for Rabies & Dog Bite Prophylaxis.",
      "symptoms": [
        "Primary localized pain, fever, or discomfort",
        "Fatigue and reduced physical stamina",
        "Loss of normal appetite and mild headache",
        "Associated diagnostic clinical signs specific to condition"
      ],
      "causes": [
        "Etiological factors and environmental exposure related to Rabies & Dog Bite Prophylaxis",
        "Unfavorable seasonal conditions or unhygienic community environment",
        "Nutritional or metabolic susceptibility factors"
      ],
      "treatments": [
        "Evidence-based pharmacotherapy prescribed by medical officer",
        "Adequate fluid intake, nutritious diet, and supportive care",
        "Free treatment and diagnostic screening available at Odisha CHCs and DHHs"
      ],
      "prevention": [
        "Maintain strict personal, domestic, and water hygiene",
        "Adhere to public health department guidelines and advisories",
        "Timely immunization and regular screening visits"
      ],
      "dos": [
        "Consult a qualified medical officer at early onset of symptoms",
        "Complete the prescribed medical regimen without skipping doses",
        "Maintain clean drinking water and well-balanced nutrition"
      ],
      "donts": [
        "Do not self-medicate or purchase unverified over-the-counter drugs",
        "Do not delay seeking medical care if red flag symptoms emerge",
        "Do not consume unhygienic or contaminated food and water"
      ],
      "whenToSeeDoctor": [
        "High continuous fever not responding to antipyretics",
        "Breathing difficulty, extreme fatigue, or fainting",
        "Inability to eat or drink oral fluids"
      ],
      "faqs": [
        {
          "question": "Is treatment for Rabies & Dog Bite Prophylaxis available free in Odisha?",
          "answer": "Yes, under Niramaya scheme and BSKY, free diagnostics and medicines are provided across Odisha government facilities."
        },
        {
          "question": "When should one visit the nearest hospital?",
          "answer": "Visit the hospital at first onset of severe symptoms or if home recovery is slow after 48 hours."
        }
      ]
    },
    "or": {
      "name": "ଜଳାତଙ୍କ (କୁକୁର କାମୁଡ଼ା / ରାବିସ୍) (ପର୍ଯ୍ୟାୟ 2)",
      "nativeName": "ଜଳାତଙ୍କ (କୁକୁର କାମୁଡ଼ା / ରାବିସ୍)",
      "overview": "ଓଡ଼ିଶାର ଜନସାଧାରଣଙ୍କ ପାଇଁ ଜଳାତଙ୍କ (କୁକୁର କାମୁଡ଼ା / ରାବିସ୍) ର ଡାକ୍ତରୀ ମାର୍ଗଦର୍ଶନ, ପ୍ରତିରୋଧ ଓ ସରକାରୀ ସହାୟତା।",
      "symptoms": [
        "ସ୍ଥାନୀୟ ଯନ୍ତ୍ରଣା, ଜ୍ୱର ବା ଅସ୍ୱସ୍ତି ଭାବ",
        "ଦୁର୍ବଳତା ଏବଂ ଶରୀରରେ ଶକ୍ତିର ଅଭାବ",
        "ଭୋକ କମିବା ଏବଂ ମୁଣ୍ଡବିନ୍ଧା",
        "ରୋଗ ସମ୍ପର୍କିତ ସାଧାରଣ ଡାକ୍ତରୀ ଲକ୍ଷଣ"
      ],
      "causes": [
        "ଜଳାତଙ୍କ (କୁକୁର କାମୁଡ଼ା / ରାବିସ୍) ସମ୍ପର୍କିତ ପରିବେଶ ଓ ଜୀବାଣୁଜନିତ କାରଣ",
        "ଋତୁକାଳୀନ ପ୍ରତିକୂଳ ପାଗ ବା ଅପରିଷ୍କାର ପରିବେଶ",
        "ପୁଷ୍ଟିହୀନତା ବା ରୋଗ ପ୍ରତିରୋଧକ ଶକ୍ତିର ଅଭାବ"
      ],
      "treatments": [
        "ଡାକ୍ତରଙ୍କ ପରାମର୍ଶ ଅନୁଯାୟୀ ପ୍ରମାଣିତ ଔଷଧ ସେବନ",
        "ପର୍ଯ୍ୟାପ୍ତ ପାଣି ପିଇବା, ପୁଷ୍ଟିକର ଖାଦ୍ୟ ଓ ବିଶ୍ରାମ",
        "ଓଡ଼ିଶା ସରକାରୀ ଡାକ୍ତରଖାନାରେ ମାଗଣା ଚିକିତ୍ସା ଓ ପରୀକ୍ଷା"
      ],
      "prevention": [
        "ବ୍ୟକ୍ତିଗତ ଓ ପରିବେଶ ପରିମଳ ସର୍ବଦା ବଜାୟ ରଖନ୍ତୁ",
        "ସ୍ୱାସ୍ଥ୍ୟ ବିଭାଗର ନିର୍ଦ୍ଦେଶାବଳୀ ପାଳନ କରନ୍ତୁ",
        "ସମୟ ଅନୁଯାୟୀ ଟିକାକରଣ ଓ ସ୍ୱାସ୍ଥ୍ୟ ଯାଞ୍ଚ କରାନ୍ତୁ"
      ],
      "dos": [
        "ଲକ୍ଷଣ ଦେଖାଦେବା ମାତ୍ରେ ଡାକ୍ତରଙ୍କ ସହ ପରାମର୍ଶ କରନ୍ତୁ",
        "ଡାକ୍ତର ଦେଇଥିବା ଔଷଧ କୋର୍ସ ସମ୍ପୂର୍ଣ୍ଣ ଶେଷ କରନ୍ତୁ",
        "ଫୁଟା ପାଣି ଓ ପୁଷ୍ଟିକର ଖାଦ୍ୟ ଖାଆନ୍ତୁ"
      ],
      "donts": [
        "ଡାକ୍ତରଙ୍କ ବିନା ପରାମର୍ଶରେ ମେଡିସିନ୍ ଦୋକାନରୁ ଔଷଧ ଖାଆନ୍ତୁ ନାହିଁ",
        "ଗୁରୁତର ଲକ୍ଷଣ ଥିଲେ ଡାକ୍ତରଖାନା ଯିବାରେ ଡେରି କରନ୍ତୁ ନାହିଁ",
        "ଅପରିଷ୍କାର ଓ ବାସି ଖାଦ୍ୟ ଖାଆନ୍ତୁ ନାହିଁ"
      ],
      "whenToSeeDoctor": [
        "ଲଗାତାର ତେଜ ଜ୍ୱର ଲାଗିରହିଲେ",
        "ନିଶ୍ୱାସ ନେବାରେ କଷ୍ଟ ହେଲେ ବା ଚେତା ହରାଇଲେ",
        "ପାଣି ପିଇ ନପାରିଲେ ବା ବାରମ୍ବାର ବାନ୍ତି ହେଲେ"
      ],
      "faqs": [
        {
          "question": "ଓଡ଼ିଶାରେ ଜଳାତଙ୍କ (କୁକୁର କାମୁଡ଼ା / ରାବିସ୍) ର ଚିକିତ୍ସା ମାଗଣାରେ ମିଳେ କି?",
          "answer": "ହଁ, ନିରାମୟ ଯୋଜନା ଓ ବିଜୁ ସ୍ୱାସ୍ଥ୍ୟ କଲ୍ୟାଣ ଯୋଜନାରେ ସମସ୍ତ ସରକାରୀ ଡାକ୍ତରଖାନାରେ ମାଗଣା ପରୀକ୍ଷା ଓ ଔଷଧ ଉପଲବ୍ଧ।"
        },
        {
          "question": "କେବେ ଡାକ୍ତରଖାନା ଯିବା ଉଚିତ?",
          "answer": "ଗୁରୁତର ଲକ୍ଷଣ ଦେଖାଦେବା ମାତ୍ରେ ତୁରନ୍ତ ଡାକ୍ତରଖାନା ଯିବା ଉଚିତ।"
        }
      ]
    }
  },
  {
    "id": "dis-44-tetanus-dhanustankara-lockjaw-",
    "category": "Emergency",
    "severity": "Emergency",
    "transmission": "Clostridium tetani spores entering rusty wounds or soil contamination",
    "en": {
      "name": "Tetanus (Dhanustankara / Lockjaw) - Grade 2",
      "overview": "Detailed clinical guidance, prevention, and government health support in Odisha for Tetanus (Dhanustankara / Lockjaw).",
      "symptoms": [
        "Primary localized pain, fever, or discomfort",
        "Fatigue and reduced physical stamina",
        "Loss of normal appetite and mild headache",
        "Associated diagnostic clinical signs specific to condition"
      ],
      "causes": [
        "Etiological factors and environmental exposure related to Tetanus (Dhanustankara / Lockjaw)",
        "Unfavorable seasonal conditions or unhygienic community environment",
        "Nutritional or metabolic susceptibility factors"
      ],
      "treatments": [
        "Evidence-based pharmacotherapy prescribed by medical officer",
        "Adequate fluid intake, nutritious diet, and supportive care",
        "Free treatment and diagnostic screening available at Odisha CHCs and DHHs"
      ],
      "prevention": [
        "Maintain strict personal, domestic, and water hygiene",
        "Adhere to public health department guidelines and advisories",
        "Timely immunization and regular screening visits"
      ],
      "dos": [
        "Consult a qualified medical officer at early onset of symptoms",
        "Complete the prescribed medical regimen without skipping doses",
        "Maintain clean drinking water and well-balanced nutrition"
      ],
      "donts": [
        "Do not self-medicate or purchase unverified over-the-counter drugs",
        "Do not delay seeking medical care if red flag symptoms emerge",
        "Do not consume unhygienic or contaminated food and water"
      ],
      "whenToSeeDoctor": [
        "High continuous fever not responding to antipyretics",
        "Breathing difficulty, extreme fatigue, or fainting",
        "Inability to eat or drink oral fluids"
      ],
      "faqs": [
        {
          "question": "Is treatment for Tetanus (Dhanustankara / Lockjaw) available free in Odisha?",
          "answer": "Yes, under Niramaya scheme and BSKY, free diagnostics and medicines are provided across Odisha government facilities."
        },
        {
          "question": "When should one visit the nearest hospital?",
          "answer": "Visit the hospital at first onset of severe symptoms or if home recovery is slow after 48 hours."
        }
      ]
    },
    "or": {
      "name": "ଧନୁଷ୍ଟଙ୍କାର (ଟିଟାନସ୍) (ପର୍ଯ୍ୟାୟ 2)",
      "nativeName": "ଧନୁଷ୍ଟଙ୍କାର (ଟିଟାନସ୍)",
      "overview": "ଓଡ଼ିଶାର ଜନସାଧାରଣଙ୍କ ପାଇଁ ଧନୁଷ୍ଟଙ୍କାର (ଟିଟାନସ୍) ର ଡାକ୍ତରୀ ମାର୍ଗଦର୍ଶନ, ପ୍ରତିରୋଧ ଓ ସରକାରୀ ସହାୟତା।",
      "symptoms": [
        "ସ୍ଥାନୀୟ ଯନ୍ତ୍ରଣା, ଜ୍ୱର ବା ଅସ୍ୱସ୍ତି ଭାବ",
        "ଦୁର୍ବଳତା ଏବଂ ଶରୀରରେ ଶକ୍ତିର ଅଭାବ",
        "ଭୋକ କମିବା ଏବଂ ମୁଣ୍ଡବିନ୍ଧା",
        "ରୋଗ ସମ୍ପର୍କିତ ସାଧାରଣ ଡାକ୍ତରୀ ଲକ୍ଷଣ"
      ],
      "causes": [
        "ଧନୁଷ୍ଟଙ୍କାର (ଟିଟାନସ୍) ସମ୍ପର୍କିତ ପରିବେଶ ଓ ଜୀବାଣୁଜନିତ କାରଣ",
        "ଋତୁକାଳୀନ ପ୍ରତିକୂଳ ପାଗ ବା ଅପରିଷ୍କାର ପରିବେଶ",
        "ପୁଷ୍ଟିହୀନତା ବା ରୋଗ ପ୍ରତିରୋଧକ ଶକ୍ତିର ଅଭାବ"
      ],
      "treatments": [
        "ଡାକ୍ତରଙ୍କ ପରାମର୍ଶ ଅନୁଯାୟୀ ପ୍ରମାଣିତ ଔଷଧ ସେବନ",
        "ପର୍ଯ୍ୟାପ୍ତ ପାଣି ପିଇବା, ପୁଷ୍ଟିକର ଖାଦ୍ୟ ଓ ବିଶ୍ରାମ",
        "ଓଡ଼ିଶା ସରକାରୀ ଡାକ୍ତରଖାନାରେ ମାଗଣା ଚିକିତ୍ସା ଓ ପରୀକ୍ଷା"
      ],
      "prevention": [
        "ବ୍ୟକ୍ତିଗତ ଓ ପରିବେଶ ପରିମଳ ସର୍ବଦା ବଜାୟ ରଖନ୍ତୁ",
        "ସ୍ୱାସ୍ଥ୍ୟ ବିଭାଗର ନିର୍ଦ୍ଦେଶାବଳୀ ପାଳନ କରନ୍ତୁ",
        "ସମୟ ଅନୁଯାୟୀ ଟିକାକରଣ ଓ ସ୍ୱାସ୍ଥ୍ୟ ଯାଞ୍ଚ କରାନ୍ତୁ"
      ],
      "dos": [
        "ଲକ୍ଷଣ ଦେଖାଦେବା ମାତ୍ରେ ଡାକ୍ତରଙ୍କ ସହ ପରାମର୍ଶ କରନ୍ତୁ",
        "ଡାକ୍ତର ଦେଇଥିବା ଔଷଧ କୋର୍ସ ସମ୍ପୂର୍ଣ୍ଣ ଶେଷ କରନ୍ତୁ",
        "ଫୁଟା ପାଣି ଓ ପୁଷ୍ଟିକର ଖାଦ୍ୟ ଖାଆନ୍ତୁ"
      ],
      "donts": [
        "ଡାକ୍ତରଙ୍କ ବିନା ପରାମର୍ଶରେ ମେଡିସିନ୍ ଦୋକାନରୁ ଔଷଧ ଖାଆନ୍ତୁ ନାହିଁ",
        "ଗୁରୁତର ଲକ୍ଷଣ ଥିଲେ ଡାକ୍ତରଖାନା ଯିବାରେ ଡେରି କରନ୍ତୁ ନାହିଁ",
        "ଅପରିଷ୍କାର ଓ ବାସି ଖାଦ୍ୟ ଖାଆନ୍ତୁ ନାହିଁ"
      ],
      "whenToSeeDoctor": [
        "ଲଗାତାର ତେଜ ଜ୍ୱର ଲାଗିରହିଲେ",
        "ନିଶ୍ୱାସ ନେବାରେ କଷ୍ଟ ହେଲେ ବା ଚେତା ହରାଇଲେ",
        "ପାଣି ପିଇ ନପାରିଲେ ବା ବାରମ୍ବାର ବାନ୍ତି ହେଲେ"
      ],
      "faqs": [
        {
          "question": "ଓଡ଼ିଶାରେ ଧନୁଷ୍ଟଙ୍କାର (ଟିଟାନସ୍) ର ଚିକିତ୍ସା ମାଗଣାରେ ମିଳେ କି?",
          "answer": "ହଁ, ନିରାମୟ ଯୋଜନା ଓ ବିଜୁ ସ୍ୱାସ୍ଥ୍ୟ କଲ୍ୟାଣ ଯୋଜନାରେ ସମସ୍ତ ସରକାରୀ ଡାକ୍ତରଖାନାରେ ମାଗଣା ପରୀକ୍ଷା ଓ ଔଷଧ ଉପଲବ୍ଧ।"
        },
        {
          "question": "କେବେ ଡାକ୍ତରଖାନା ଯିବା ଉଚିତ?",
          "answer": "ଗୁରୁତର ଲକ୍ଷଣ ଦେଖାଦେବା ମାତ୍ରେ ତୁରନ୍ତ ଡାକ୍ତରଖାନା ଯିବା ଉଚିତ।"
        }
      ]
    }
  },
  {
    "id": "dis-45-typhoid-fever-madiakhiya-jwara-",
    "category": "Waterborne & Gastro",
    "severity": "High",
    "transmission": "Contaminated food and drinking water",
    "en": {
      "name": "Typhoid Fever (Madiakhiya Jwara) - Grade 2",
      "overview": "Detailed clinical guidance, prevention, and government health support in Odisha for Typhoid Fever (Madiakhiya Jwara).",
      "symptoms": [
        "Primary localized pain, fever, or discomfort",
        "Fatigue and reduced physical stamina",
        "Loss of normal appetite and mild headache",
        "Associated diagnostic clinical signs specific to condition"
      ],
      "causes": [
        "Etiological factors and environmental exposure related to Typhoid Fever (Madiakhiya Jwara)",
        "Unfavorable seasonal conditions or unhygienic community environment",
        "Nutritional or metabolic susceptibility factors"
      ],
      "treatments": [
        "Evidence-based pharmacotherapy prescribed by medical officer",
        "Adequate fluid intake, nutritious diet, and supportive care",
        "Free treatment and diagnostic screening available at Odisha CHCs and DHHs"
      ],
      "prevention": [
        "Maintain strict personal, domestic, and water hygiene",
        "Adhere to public health department guidelines and advisories",
        "Timely immunization and regular screening visits"
      ],
      "dos": [
        "Consult a qualified medical officer at early onset of symptoms",
        "Complete the prescribed medical regimen without skipping doses",
        "Maintain clean drinking water and well-balanced nutrition"
      ],
      "donts": [
        "Do not self-medicate or purchase unverified over-the-counter drugs",
        "Do not delay seeking medical care if red flag symptoms emerge",
        "Do not consume unhygienic or contaminated food and water"
      ],
      "whenToSeeDoctor": [
        "High continuous fever not responding to antipyretics",
        "Breathing difficulty, extreme fatigue, or fainting",
        "Inability to eat or drink oral fluids"
      ],
      "faqs": [
        {
          "question": "Is treatment for Typhoid Fever (Madiakhiya Jwara) available free in Odisha?",
          "answer": "Yes, under Niramaya scheme and BSKY, free diagnostics and medicines are provided across Odisha government facilities."
        },
        {
          "question": "When should one visit the nearest hospital?",
          "answer": "Visit the hospital at first onset of severe symptoms or if home recovery is slow after 48 hours."
        }
      ]
    },
    "or": {
      "name": "ଟାଇଫଏଡ୍ ଜ୍ୱର (ମାଦିଆଖିଆ ଜ୍ୱର) (ପର୍ଯ୍ୟାୟ 2)",
      "nativeName": "ଟାଇଫଏଡ୍ ଜ୍ୱର (ମାଦିଆଖିଆ ଜ୍ୱର)",
      "overview": "ଓଡ଼ିଶାର ଜନସାଧାରଣଙ୍କ ପାଇଁ ଟାଇଫଏଡ୍ ଜ୍ୱର (ମାଦିଆଖିଆ ଜ୍ୱର) ର ଡାକ୍ତରୀ ମାର୍ଗଦର୍ଶନ, ପ୍ରତିରୋଧ ଓ ସରକାରୀ ସହାୟତା।",
      "symptoms": [
        "ସ୍ଥାନୀୟ ଯନ୍ତ୍ରଣା, ଜ୍ୱର ବା ଅସ୍ୱସ୍ତି ଭାବ",
        "ଦୁର୍ବଳତା ଏବଂ ଶରୀରରେ ଶକ୍ତିର ଅଭାବ",
        "ଭୋକ କମିବା ଏବଂ ମୁଣ୍ଡବିନ୍ଧା",
        "ରୋଗ ସମ୍ପର୍କିତ ସାଧାରଣ ଡାକ୍ତରୀ ଲକ୍ଷଣ"
      ],
      "causes": [
        "ଟାଇଫଏଡ୍ ଜ୍ୱର (ମାଦିଆଖିଆ ଜ୍ୱର) ସମ୍ପର୍କିତ ପରିବେଶ ଓ ଜୀବାଣୁଜନିତ କାରଣ",
        "ଋତୁକାଳୀନ ପ୍ରତିକୂଳ ପାଗ ବା ଅପରିଷ୍କାର ପରିବେଶ",
        "ପୁଷ୍ଟିହୀନତା ବା ରୋଗ ପ୍ରତିରୋଧକ ଶକ୍ତିର ଅଭାବ"
      ],
      "treatments": [
        "ଡାକ୍ତରଙ୍କ ପରାମର୍ଶ ଅନୁଯାୟୀ ପ୍ରମାଣିତ ଔଷଧ ସେବନ",
        "ପର୍ଯ୍ୟାପ୍ତ ପାଣି ପିଇବା, ପୁଷ୍ଟିକର ଖାଦ୍ୟ ଓ ବିଶ୍ରାମ",
        "ଓଡ଼ିଶା ସରକାରୀ ଡାକ୍ତରଖାନାରେ ମାଗଣା ଚିକିତ୍ସା ଓ ପରୀକ୍ଷା"
      ],
      "prevention": [
        "ବ୍ୟକ୍ତିଗତ ଓ ପରିବେଶ ପରିମଳ ସର୍ବଦା ବଜାୟ ରଖନ୍ତୁ",
        "ସ୍ୱାସ୍ଥ୍ୟ ବିଭାଗର ନିର୍ଦ୍ଦେଶାବଳୀ ପାଳନ କରନ୍ତୁ",
        "ସମୟ ଅନୁଯାୟୀ ଟିକାକରଣ ଓ ସ୍ୱାସ୍ଥ୍ୟ ଯାଞ୍ଚ କରାନ୍ତୁ"
      ],
      "dos": [
        "ଲକ୍ଷଣ ଦେଖାଦେବା ମାତ୍ରେ ଡାକ୍ତରଙ୍କ ସହ ପରାମର୍ଶ କରନ୍ତୁ",
        "ଡାକ୍ତର ଦେଇଥିବା ଔଷଧ କୋର୍ସ ସମ୍ପୂର୍ଣ୍ଣ ଶେଷ କରନ୍ତୁ",
        "ଫୁଟା ପାଣି ଓ ପୁଷ୍ଟିକର ଖାଦ୍ୟ ଖାଆନ୍ତୁ"
      ],
      "donts": [
        "ଡାକ୍ତରଙ୍କ ବିନା ପରାମର୍ଶରେ ମେଡିସିନ୍ ଦୋକାନରୁ ଔଷଧ ଖାଆନ୍ତୁ ନାହିଁ",
        "ଗୁରୁତର ଲକ୍ଷଣ ଥିଲେ ଡାକ୍ତରଖାନା ଯିବାରେ ଡେରି କରନ୍ତୁ ନାହିଁ",
        "ଅପରିଷ୍କାର ଓ ବାସି ଖାଦ୍ୟ ଖାଆନ୍ତୁ ନାହିଁ"
      ],
      "whenToSeeDoctor": [
        "ଲଗାତାର ତେଜ ଜ୍ୱର ଲାଗିରହିଲେ",
        "ନିଶ୍ୱାସ ନେବାରେ କଷ୍ଟ ହେଲେ ବା ଚେତା ହରାଇଲେ",
        "ପାଣି ପିଇ ନପାରିଲେ ବା ବାରମ୍ବାର ବାନ୍ତି ହେଲେ"
      ],
      "faqs": [
        {
          "question": "ଓଡ଼ିଶାରେ ଟାଇଫଏଡ୍ ଜ୍ୱର (ମାଦିଆଖିଆ ଜ୍ୱର) ର ଚିକିତ୍ସା ମାଗଣାରେ ମିଳେ କି?",
          "answer": "ହଁ, ନିରାମୟ ଯୋଜନା ଓ ବିଜୁ ସ୍ୱାସ୍ଥ୍ୟ କଲ୍ୟାଣ ଯୋଜନାରେ ସମସ୍ତ ସରକାରୀ ଡାକ୍ତରଖାନାରେ ମାଗଣା ପରୀକ୍ଷା ଓ ଔଷଧ ଉପଲବ୍ଧ।"
        },
        {
          "question": "କେବେ ଡାକ୍ତରଖାନା ଯିବା ଉଚିତ?",
          "answer": "ଗୁରୁତର ଲକ୍ଷଣ ଦେଖାଦେବା ମାତ୍ରେ ତୁରନ୍ତ ଡାକ୍ତରଖାନା ଯିବା ଉଚିତ।"
        }
      ]
    }
  },
  {
    "id": "dis-46-viral-hepatitis-a-e-jaundice-haladia-roga-",
    "category": "Waterborne & Gastro",
    "severity": "Moderate",
    "transmission": "Ingestion of fecal-contaminated drinking water",
    "en": {
      "name": "Viral Hepatitis A & E (Jaundice / Haladia Roga) - Grade 2",
      "overview": "Detailed clinical guidance, prevention, and government health support in Odisha for Viral Hepatitis A & E (Jaundice / Haladia Roga).",
      "symptoms": [
        "Primary localized pain, fever, or discomfort",
        "Fatigue and reduced physical stamina",
        "Loss of normal appetite and mild headache",
        "Associated diagnostic clinical signs specific to condition"
      ],
      "causes": [
        "Etiological factors and environmental exposure related to Viral Hepatitis A & E (Jaundice / Haladia Roga)",
        "Unfavorable seasonal conditions or unhygienic community environment",
        "Nutritional or metabolic susceptibility factors"
      ],
      "treatments": [
        "Evidence-based pharmacotherapy prescribed by medical officer",
        "Adequate fluid intake, nutritious diet, and supportive care",
        "Free treatment and diagnostic screening available at Odisha CHCs and DHHs"
      ],
      "prevention": [
        "Maintain strict personal, domestic, and water hygiene",
        "Adhere to public health department guidelines and advisories",
        "Timely immunization and regular screening visits"
      ],
      "dos": [
        "Consult a qualified medical officer at early onset of symptoms",
        "Complete the prescribed medical regimen without skipping doses",
        "Maintain clean drinking water and well-balanced nutrition"
      ],
      "donts": [
        "Do not self-medicate or purchase unverified over-the-counter drugs",
        "Do not delay seeking medical care if red flag symptoms emerge",
        "Do not consume unhygienic or contaminated food and water"
      ],
      "whenToSeeDoctor": [
        "High continuous fever not responding to antipyretics",
        "Breathing difficulty, extreme fatigue, or fainting",
        "Inability to eat or drink oral fluids"
      ],
      "faqs": [
        {
          "question": "Is treatment for Viral Hepatitis A & E (Jaundice / Haladia Roga) available free in Odisha?",
          "answer": "Yes, under Niramaya scheme and BSKY, free diagnostics and medicines are provided across Odisha government facilities."
        },
        {
          "question": "When should one visit the nearest hospital?",
          "answer": "Visit the hospital at first onset of severe symptoms or if home recovery is slow after 48 hours."
        }
      ]
    },
    "or": {
      "name": "ହେପାଟାଇଟିସ୍ ଜଣ୍ଡିସ୍ (ହଳଦିଆ ରୋଗ) (ପର୍ଯ୍ୟାୟ 2)",
      "nativeName": "ହେପାଟାଇଟିସ୍ ଜଣ୍ଡିସ୍ (ହଳଦିଆ ରୋଗ)",
      "overview": "ଓଡ଼ିଶାର ଜନସାଧାରଣଙ୍କ ପାଇଁ ହେପାଟାଇଟିସ୍ ଜଣ୍ଡିସ୍ (ହଳଦିଆ ରୋଗ) ର ଡାକ୍ତରୀ ମାର୍ଗଦର୍ଶନ, ପ୍ରତିରୋଧ ଓ ସରକାରୀ ସହାୟତା।",
      "symptoms": [
        "ସ୍ଥାନୀୟ ଯନ୍ତ୍ରଣା, ଜ୍ୱର ବା ଅସ୍ୱସ୍ତି ଭାବ",
        "ଦୁର୍ବଳତା ଏବଂ ଶରୀରରେ ଶକ୍ତିର ଅଭାବ",
        "ଭୋକ କମିବା ଏବଂ ମୁଣ୍ଡବିନ୍ଧା",
        "ରୋଗ ସମ୍ପର୍କିତ ସାଧାରଣ ଡାକ୍ତରୀ ଲକ୍ଷଣ"
      ],
      "causes": [
        "ହେପାଟାଇଟିସ୍ ଜଣ୍ଡିସ୍ (ହଳଦିଆ ରୋଗ) ସମ୍ପର୍କିତ ପରିବେଶ ଓ ଜୀବାଣୁଜନିତ କାରଣ",
        "ଋତୁକାଳୀନ ପ୍ରତିକୂଳ ପାଗ ବା ଅପରିଷ୍କାର ପରିବେଶ",
        "ପୁଷ୍ଟିହୀନତା ବା ରୋଗ ପ୍ରତିରୋଧକ ଶକ୍ତିର ଅଭାବ"
      ],
      "treatments": [
        "ଡାକ୍ତରଙ୍କ ପରାମର୍ଶ ଅନୁଯାୟୀ ପ୍ରମାଣିତ ଔଷଧ ସେବନ",
        "ପର୍ଯ୍ୟାପ୍ତ ପାଣି ପିଇବା, ପୁଷ୍ଟିକର ଖାଦ୍ୟ ଓ ବିଶ୍ରାମ",
        "ଓଡ଼ିଶା ସରକାରୀ ଡାକ୍ତରଖାନାରେ ମାଗଣା ଚିକିତ୍ସା ଓ ପରୀକ୍ଷା"
      ],
      "prevention": [
        "ବ୍ୟକ୍ତିଗତ ଓ ପରିବେଶ ପରିମଳ ସର୍ବଦା ବଜାୟ ରଖନ୍ତୁ",
        "ସ୍ୱାସ୍ଥ୍ୟ ବିଭାଗର ନିର୍ଦ୍ଦେଶାବଳୀ ପାଳନ କରନ୍ତୁ",
        "ସମୟ ଅନୁଯାୟୀ ଟିକାକରଣ ଓ ସ୍ୱାସ୍ଥ୍ୟ ଯାଞ୍ଚ କରାନ୍ତୁ"
      ],
      "dos": [
        "ଲକ୍ଷଣ ଦେଖାଦେବା ମାତ୍ରେ ଡାକ୍ତରଙ୍କ ସହ ପରାମର୍ଶ କରନ୍ତୁ",
        "ଡାକ୍ତର ଦେଇଥିବା ଔଷଧ କୋର୍ସ ସମ୍ପୂର୍ଣ୍ଣ ଶେଷ କରନ୍ତୁ",
        "ଫୁଟା ପାଣି ଓ ପୁଷ୍ଟିକର ଖାଦ୍ୟ ଖାଆନ୍ତୁ"
      ],
      "donts": [
        "ଡାକ୍ତରଙ୍କ ବିନା ପରାମର୍ଶରେ ମେଡିସିନ୍ ଦୋକାନରୁ ଔଷଧ ଖାଆନ୍ତୁ ନାହିଁ",
        "ଗୁରୁତର ଲକ୍ଷଣ ଥିଲେ ଡାକ୍ତରଖାନା ଯିବାରେ ଡେରି କରନ୍ତୁ ନାହିଁ",
        "ଅପରିଷ୍କାର ଓ ବାସି ଖାଦ୍ୟ ଖାଆନ୍ତୁ ନାହିଁ"
      ],
      "whenToSeeDoctor": [
        "ଲଗାତାର ତେଜ ଜ୍ୱର ଲାଗିରହିଲେ",
        "ନିଶ୍ୱାସ ନେବାରେ କଷ୍ଟ ହେଲେ ବା ଚେତା ହରାଇଲେ",
        "ପାଣି ପିଇ ନପାରିଲେ ବା ବାରମ୍ବାର ବାନ୍ତି ହେଲେ"
      ],
      "faqs": [
        {
          "question": "ଓଡ଼ିଶାରେ ହେପାଟାଇଟିସ୍ ଜଣ୍ଡିସ୍ (ହଳଦିଆ ରୋଗ) ର ଚିକିତ୍ସା ମାଗଣାରେ ମିଳେ କି?",
          "answer": "ହଁ, ନିରାମୟ ଯୋଜନା ଓ ବିଜୁ ସ୍ୱାସ୍ଥ୍ୟ କଲ୍ୟାଣ ଯୋଜନାରେ ସମସ୍ତ ସରକାରୀ ଡାକ୍ତରଖାନାରେ ମାଗଣା ପରୀକ୍ଷା ଓ ଔଷଧ ଉପଲବ୍ଧ।"
        },
        {
          "question": "କେବେ ଡାକ୍ତରଖାନା ଯିବା ଉଚିତ?",
          "answer": "ଗୁରୁତର ଲକ୍ଷଣ ଦେଖାଦେବା ମାତ୍ରେ ତୁରନ୍ତ ଡାକ୍ତରଖାନା ଯିବା ଉଚିତ।"
        }
      ]
    }
  },
  {
    "id": "dis-47-amoebic-dysentery-colitis",
    "category": "Waterborne & Gastro",
    "severity": "Moderate",
    "transmission": "Contaminated drinking water and food",
    "en": {
      "name": "Amoebic Dysentery & Colitis - Grade 2",
      "overview": "Detailed clinical guidance, prevention, and government health support in Odisha for Amoebic Dysentery & Colitis.",
      "symptoms": [
        "Primary localized pain, fever, or discomfort",
        "Fatigue and reduced physical stamina",
        "Loss of normal appetite and mild headache",
        "Associated diagnostic clinical signs specific to condition"
      ],
      "causes": [
        "Etiological factors and environmental exposure related to Amoebic Dysentery & Colitis",
        "Unfavorable seasonal conditions or unhygienic community environment",
        "Nutritional or metabolic susceptibility factors"
      ],
      "treatments": [
        "Evidence-based pharmacotherapy prescribed by medical officer",
        "Adequate fluid intake, nutritious diet, and supportive care",
        "Free treatment and diagnostic screening available at Odisha CHCs and DHHs"
      ],
      "prevention": [
        "Maintain strict personal, domestic, and water hygiene",
        "Adhere to public health department guidelines and advisories",
        "Timely immunization and regular screening visits"
      ],
      "dos": [
        "Consult a qualified medical officer at early onset of symptoms",
        "Complete the prescribed medical regimen without skipping doses",
        "Maintain clean drinking water and well-balanced nutrition"
      ],
      "donts": [
        "Do not self-medicate or purchase unverified over-the-counter drugs",
        "Do not delay seeking medical care if red flag symptoms emerge",
        "Do not consume unhygienic or contaminated food and water"
      ],
      "whenToSeeDoctor": [
        "High continuous fever not responding to antipyretics",
        "Breathing difficulty, extreme fatigue, or fainting",
        "Inability to eat or drink oral fluids"
      ],
      "faqs": [
        {
          "question": "Is treatment for Amoebic Dysentery & Colitis available free in Odisha?",
          "answer": "Yes, under Niramaya scheme and BSKY, free diagnostics and medicines are provided across Odisha government facilities."
        },
        {
          "question": "When should one visit the nearest hospital?",
          "answer": "Visit the hospital at first onset of severe symptoms or if home recovery is slow after 48 hours."
        }
      ]
    },
    "or": {
      "name": "ଆମିବିଆସିସ୍ (ଆମାଶୟ ଝାଡ଼ା) (ପର୍ଯ୍ୟାୟ 2)",
      "nativeName": "ଆମିବିଆସିସ୍ (ଆମାଶୟ ଝାଡ଼ା)",
      "overview": "ଓଡ଼ିଶାର ଜନସାଧାରଣଙ୍କ ପାଇଁ ଆମିବିଆସିସ୍ (ଆମାଶୟ ଝାଡ଼ା) ର ଡାକ୍ତରୀ ମାର୍ଗଦର୍ଶନ, ପ୍ରତିରୋଧ ଓ ସରକାରୀ ସହାୟତା।",
      "symptoms": [
        "ସ୍ଥାନୀୟ ଯନ୍ତ୍ରଣା, ଜ୍ୱର ବା ଅସ୍ୱସ୍ତି ଭାବ",
        "ଦୁର୍ବଳତା ଏବଂ ଶରୀରରେ ଶକ୍ତିର ଅଭାବ",
        "ଭୋକ କମିବା ଏବଂ ମୁଣ୍ଡବିନ୍ଧା",
        "ରୋଗ ସମ୍ପର୍କିତ ସାଧାରଣ ଡାକ୍ତରୀ ଲକ୍ଷଣ"
      ],
      "causes": [
        "ଆମିବିଆସିସ୍ (ଆମାଶୟ ଝାଡ଼ା) ସମ୍ପର୍କିତ ପରିବେଶ ଓ ଜୀବାଣୁଜନିତ କାରଣ",
        "ଋତୁକାଳୀନ ପ୍ରତିକୂଳ ପାଗ ବା ଅପରିଷ୍କାର ପରିବେଶ",
        "ପୁଷ୍ଟିହୀନତା ବା ରୋଗ ପ୍ରତିରୋଧକ ଶକ୍ତିର ଅଭାବ"
      ],
      "treatments": [
        "ଡାକ୍ତରଙ୍କ ପରାମର୍ଶ ଅନୁଯାୟୀ ପ୍ରମାଣିତ ଔଷଧ ସେବନ",
        "ପର୍ଯ୍ୟାପ୍ତ ପାଣି ପିଇବା, ପୁଷ୍ଟିକର ଖାଦ୍ୟ ଓ ବିଶ୍ରାମ",
        "ଓଡ଼ିଶା ସରକାରୀ ଡାକ୍ତରଖାନାରେ ମାଗଣା ଚିକିତ୍ସା ଓ ପରୀକ୍ଷା"
      ],
      "prevention": [
        "ବ୍ୟକ୍ତିଗତ ଓ ପରିବେଶ ପରିମଳ ସର୍ବଦା ବଜାୟ ରଖନ୍ତୁ",
        "ସ୍ୱାସ୍ଥ୍ୟ ବିଭାଗର ନିର୍ଦ୍ଦେଶାବଳୀ ପାଳନ କରନ୍ତୁ",
        "ସମୟ ଅନୁଯାୟୀ ଟିକାକରଣ ଓ ସ୍ୱାସ୍ଥ୍ୟ ଯାଞ୍ଚ କରାନ୍ତୁ"
      ],
      "dos": [
        "ଲକ୍ଷଣ ଦେଖାଦେବା ମାତ୍ରେ ଡାକ୍ତରଙ୍କ ସହ ପରାମର୍ଶ କରନ୍ତୁ",
        "ଡାକ୍ତର ଦେଇଥିବା ଔଷଧ କୋର୍ସ ସମ୍ପୂର୍ଣ୍ଣ ଶେଷ କରନ୍ତୁ",
        "ଫୁଟା ପାଣି ଓ ପୁଷ୍ଟିକର ଖାଦ୍ୟ ଖାଆନ୍ତୁ"
      ],
      "donts": [
        "ଡାକ୍ତରଙ୍କ ବିନା ପରାମର୍ଶରେ ମେଡିସିନ୍ ଦୋକାନରୁ ଔଷଧ ଖାଆନ୍ତୁ ନାହିଁ",
        "ଗୁରୁତର ଲକ୍ଷଣ ଥିଲେ ଡାକ୍ତରଖାନା ଯିବାରେ ଡେରି କରନ୍ତୁ ନାହିଁ",
        "ଅପରିଷ୍କାର ଓ ବାସି ଖାଦ୍ୟ ଖାଆନ୍ତୁ ନାହିଁ"
      ],
      "whenToSeeDoctor": [
        "ଲଗାତାର ତେଜ ଜ୍ୱର ଲାଗିରହିଲେ",
        "ନିଶ୍ୱାସ ନେବାରେ କଷ୍ଟ ହେଲେ ବା ଚେତା ହରାଇଲେ",
        "ପାଣି ପିଇ ନପାରିଲେ ବା ବାରମ୍ବାର ବାନ୍ତି ହେଲେ"
      ],
      "faqs": [
        {
          "question": "ଓଡ଼ିଶାରେ ଆମିବିଆସିସ୍ (ଆମାଶୟ ଝାଡ଼ା) ର ଚିକିତ୍ସା ମାଗଣାରେ ମିଳେ କି?",
          "answer": "ହଁ, ନିରାମୟ ଯୋଜନା ଓ ବିଜୁ ସ୍ୱାସ୍ଥ୍ୟ କଲ୍ୟାଣ ଯୋଜନାରେ ସମସ୍ତ ସରକାରୀ ଡାକ୍ତରଖାନାରେ ମାଗଣା ପରୀକ୍ଷା ଓ ଔଷଧ ଉପଲବ୍ଧ।"
        },
        {
          "question": "କେବେ ଡାକ୍ତରଖାନା ଯିବା ଉଚିତ?",
          "answer": "ଗୁରୁତର ଲକ୍ଷଣ ଦେଖାଦେବା ମାତ୍ରେ ତୁରନ୍ତ ଡାକ୍ତରଖାନା ଯିବା ଉଚିତ।"
        }
      ]
    }
  },
  {
    "id": "dis-48-hookworm-roundworm-infection-krumi-",
    "category": "Maternal & Child",
    "severity": "Mild",
    "transmission": "Walking barefoot on infected soil or unwashed hands",
    "en": {
      "name": "Hookworm & Roundworm Infection (Krumi) - Grade 2",
      "overview": "Detailed clinical guidance, prevention, and government health support in Odisha for Hookworm & Roundworm Infection (Krumi).",
      "symptoms": [
        "Primary localized pain, fever, or discomfort",
        "Fatigue and reduced physical stamina",
        "Loss of normal appetite and mild headache",
        "Associated diagnostic clinical signs specific to condition"
      ],
      "causes": [
        "Etiological factors and environmental exposure related to Hookworm & Roundworm Infection (Krumi)",
        "Unfavorable seasonal conditions or unhygienic community environment",
        "Nutritional or metabolic susceptibility factors"
      ],
      "treatments": [
        "Evidence-based pharmacotherapy prescribed by medical officer",
        "Adequate fluid intake, nutritious diet, and supportive care",
        "Free treatment and diagnostic screening available at Odisha CHCs and DHHs"
      ],
      "prevention": [
        "Maintain strict personal, domestic, and water hygiene",
        "Adhere to public health department guidelines and advisories",
        "Timely immunization and regular screening visits"
      ],
      "dos": [
        "Consult a qualified medical officer at early onset of symptoms",
        "Complete the prescribed medical regimen without skipping doses",
        "Maintain clean drinking water and well-balanced nutrition"
      ],
      "donts": [
        "Do not self-medicate or purchase unverified over-the-counter drugs",
        "Do not delay seeking medical care if red flag symptoms emerge",
        "Do not consume unhygienic or contaminated food and water"
      ],
      "whenToSeeDoctor": [
        "High continuous fever not responding to antipyretics",
        "Breathing difficulty, extreme fatigue, or fainting",
        "Inability to eat or drink oral fluids"
      ],
      "faqs": [
        {
          "question": "Is treatment for Hookworm & Roundworm Infection (Krumi) available free in Odisha?",
          "answer": "Yes, under Niramaya scheme and BSKY, free diagnostics and medicines are provided across Odisha government facilities."
        },
        {
          "question": "When should one visit the nearest hospital?",
          "answer": "Visit the hospital at first onset of severe symptoms or if home recovery is slow after 48 hours."
        }
      ]
    },
    "or": {
      "name": "କୃମି ସଂକ୍ରମଣ (ହୁକ୍‌ୱାର୍ମ) (ପର୍ଯ୍ୟାୟ 2)",
      "nativeName": "କୃମି ସଂକ୍ରମଣ (ହୁକ୍‌ୱାର୍ମ)",
      "overview": "ଓଡ଼ିଶାର ଜନସାଧାରଣଙ୍କ ପାଇଁ କୃମି ସଂକ୍ରମଣ (ହୁକ୍‌ୱାର୍ମ) ର ଡାକ୍ତରୀ ମାର୍ଗଦର୍ଶନ, ପ୍ରତିରୋଧ ଓ ସରକାରୀ ସହାୟତା।",
      "symptoms": [
        "ସ୍ଥାନୀୟ ଯନ୍ତ୍ରଣା, ଜ୍ୱର ବା ଅସ୍ୱସ୍ତି ଭାବ",
        "ଦୁର୍ବଳତା ଏବଂ ଶରୀରରେ ଶକ୍ତିର ଅଭାବ",
        "ଭୋକ କମିବା ଏବଂ ମୁଣ୍ଡବିନ୍ଧା",
        "ରୋଗ ସମ୍ପର୍କିତ ସାଧାରଣ ଡାକ୍ତରୀ ଲକ୍ଷଣ"
      ],
      "causes": [
        "କୃମି ସଂକ୍ରମଣ (ହୁକ୍‌ୱାର୍ମ) ସମ୍ପର୍କିତ ପରିବେଶ ଓ ଜୀବାଣୁଜନିତ କାରଣ",
        "ଋତୁକାଳୀନ ପ୍ରତିକୂଳ ପାଗ ବା ଅପରିଷ୍କାର ପରିବେଶ",
        "ପୁଷ୍ଟିହୀନତା ବା ରୋଗ ପ୍ରତିରୋଧକ ଶକ୍ତିର ଅଭାବ"
      ],
      "treatments": [
        "ଡାକ୍ତରଙ୍କ ପରାମର୍ଶ ଅନୁଯାୟୀ ପ୍ରମାଣିତ ଔଷଧ ସେବନ",
        "ପର୍ଯ୍ୟାପ୍ତ ପାଣି ପିଇବା, ପୁଷ୍ଟିକର ଖାଦ୍ୟ ଓ ବିଶ୍ରାମ",
        "ଓଡ଼ିଶା ସରକାରୀ ଡାକ୍ତରଖାନାରେ ମାଗଣା ଚିକିତ୍ସା ଓ ପରୀକ୍ଷା"
      ],
      "prevention": [
        "ବ୍ୟକ୍ତିଗତ ଓ ପରିବେଶ ପରିମଳ ସର୍ବଦା ବଜାୟ ରଖନ୍ତୁ",
        "ସ୍ୱାସ୍ଥ୍ୟ ବିଭାଗର ନିର୍ଦ୍ଦେଶାବଳୀ ପାଳନ କରନ୍ତୁ",
        "ସମୟ ଅନୁଯାୟୀ ଟିକାକରଣ ଓ ସ୍ୱାସ୍ଥ୍ୟ ଯାଞ୍ଚ କରାନ୍ତୁ"
      ],
      "dos": [
        "ଲକ୍ଷଣ ଦେଖାଦେବା ମାତ୍ରେ ଡାକ୍ତରଙ୍କ ସହ ପରାମର୍ଶ କରନ୍ତୁ",
        "ଡାକ୍ତର ଦେଇଥିବା ଔଷଧ କୋର୍ସ ସମ୍ପୂର୍ଣ୍ଣ ଶେଷ କରନ୍ତୁ",
        "ଫୁଟା ପାଣି ଓ ପୁଷ୍ଟିକର ଖାଦ୍ୟ ଖାଆନ୍ତୁ"
      ],
      "donts": [
        "ଡାକ୍ତରଙ୍କ ବିନା ପରାମର୍ଶରେ ମେଡିସିନ୍ ଦୋକାନରୁ ଔଷଧ ଖାଆନ୍ତୁ ନାହିଁ",
        "ଗୁରୁତର ଲକ୍ଷଣ ଥିଲେ ଡାକ୍ତରଖାନା ଯିବାରେ ଡେରି କରନ୍ତୁ ନାହିଁ",
        "ଅପରିଷ୍କାର ଓ ବାସି ଖାଦ୍ୟ ଖାଆନ୍ତୁ ନାହିଁ"
      ],
      "whenToSeeDoctor": [
        "ଲଗାତାର ତେଜ ଜ୍ୱର ଲାଗିରହିଲେ",
        "ନିଶ୍ୱାସ ନେବାରେ କଷ୍ଟ ହେଲେ ବା ଚେତା ହରାଇଲେ",
        "ପାଣି ପିଇ ନପାରିଲେ ବା ବାରମ୍ବାର ବାନ୍ତି ହେଲେ"
      ],
      "faqs": [
        {
          "question": "ଓଡ଼ିଶାରେ କୃମି ସଂକ୍ରମଣ (ହୁକ୍‌ୱାର୍ମ) ର ଚିକିତ୍ସା ମାଗଣାରେ ମିଳେ କି?",
          "answer": "ହଁ, ନିରାମୟ ଯୋଜନା ଓ ବିଜୁ ସ୍ୱାସ୍ଥ୍ୟ କଲ୍ୟାଣ ଯୋଜନାରେ ସମସ୍ତ ସରକାରୀ ଡାକ୍ତରଖାନାରେ ମାଗଣା ପରୀକ୍ଷା ଓ ଔଷଧ ଉପଲବ୍ଧ।"
        },
        {
          "question": "କେବେ ଡାକ୍ତରଖାନା ଯିବା ଉଚିତ?",
          "answer": "ଗୁରୁତର ଲକ୍ଷଣ ଦେଖାଦେବା ମାତ୍ରେ ତୁରନ୍ତ ଡାକ୍ତରଖାନା ଯିବା ଉଚିତ।"
        }
      ]
    }
  },
  {
    "id": "dis-49-scabies-chilkan-khujali-",
    "category": "Dermatology & Skin",
    "severity": "Mild",
    "transmission": "Direct skin-to-skin contact and shared bedding",
    "en": {
      "name": "Scabies (Chilkan / Khujali) - Grade 2",
      "overview": "Detailed clinical guidance, prevention, and government health support in Odisha for Scabies (Chilkan / Khujali).",
      "symptoms": [
        "Primary localized pain, fever, or discomfort",
        "Fatigue and reduced physical stamina",
        "Loss of normal appetite and mild headache",
        "Associated diagnostic clinical signs specific to condition"
      ],
      "causes": [
        "Etiological factors and environmental exposure related to Scabies (Chilkan / Khujali)",
        "Unfavorable seasonal conditions or unhygienic community environment",
        "Nutritional or metabolic susceptibility factors"
      ],
      "treatments": [
        "Evidence-based pharmacotherapy prescribed by medical officer",
        "Adequate fluid intake, nutritious diet, and supportive care",
        "Free treatment and diagnostic screening available at Odisha CHCs and DHHs"
      ],
      "prevention": [
        "Maintain strict personal, domestic, and water hygiene",
        "Adhere to public health department guidelines and advisories",
        "Timely immunization and regular screening visits"
      ],
      "dos": [
        "Consult a qualified medical officer at early onset of symptoms",
        "Complete the prescribed medical regimen without skipping doses",
        "Maintain clean drinking water and well-balanced nutrition"
      ],
      "donts": [
        "Do not self-medicate or purchase unverified over-the-counter drugs",
        "Do not delay seeking medical care if red flag symptoms emerge",
        "Do not consume unhygienic or contaminated food and water"
      ],
      "whenToSeeDoctor": [
        "High continuous fever not responding to antipyretics",
        "Breathing difficulty, extreme fatigue, or fainting",
        "Inability to eat or drink oral fluids"
      ],
      "faqs": [
        {
          "question": "Is treatment for Scabies (Chilkan / Khujali) available free in Odisha?",
          "answer": "Yes, under Niramaya scheme and BSKY, free diagnostics and medicines are provided across Odisha government facilities."
        },
        {
          "question": "When should one visit the nearest hospital?",
          "answer": "Visit the hospital at first onset of severe symptoms or if home recovery is slow after 48 hours."
        }
      ]
    },
    "or": {
      "name": "ଚିଲକାନ୍ ଓ କାଛୁକୁଣ୍ଡିଆ (ସ୍କାବିସ୍) (ପର୍ଯ୍ୟାୟ 2)",
      "nativeName": "ଚିଲକାନ୍ ଓ କାଛୁକୁଣ୍ଡିଆ (ସ୍କାବିସ୍)",
      "overview": "ଓଡ଼ିଶାର ଜନସାଧାରଣଙ୍କ ପାଇଁ ଚିଲକାନ୍ ଓ କାଛୁକୁଣ୍ଡିଆ (ସ୍କାବିସ୍) ର ଡାକ୍ତରୀ ମାର୍ଗଦର୍ଶନ, ପ୍ରତିରୋଧ ଓ ସରକାରୀ ସହାୟତା।",
      "symptoms": [
        "ସ୍ଥାନୀୟ ଯନ୍ତ୍ରଣା, ଜ୍ୱର ବା ଅସ୍ୱସ୍ତି ଭାବ",
        "ଦୁର୍ବଳତା ଏବଂ ଶରୀରରେ ଶକ୍ତିର ଅଭାବ",
        "ଭୋକ କମିବା ଏବଂ ମୁଣ୍ଡବିନ୍ଧା",
        "ରୋଗ ସମ୍ପର୍କିତ ସାଧାରଣ ଡାକ୍ତରୀ ଲକ୍ଷଣ"
      ],
      "causes": [
        "ଚିଲକାନ୍ ଓ କାଛୁକୁଣ୍ଡିଆ (ସ୍କାବିସ୍) ସମ୍ପର୍କିତ ପରିବେଶ ଓ ଜୀବାଣୁଜନିତ କାରଣ",
        "ଋତୁକାଳୀନ ପ୍ରତିକୂଳ ପାଗ ବା ଅପରିଷ୍କାର ପରିବେଶ",
        "ପୁଷ୍ଟିହୀନତା ବା ରୋଗ ପ୍ରତିରୋଧକ ଶକ୍ତିର ଅଭାବ"
      ],
      "treatments": [
        "ଡାକ୍ତରଙ୍କ ପରାମର୍ଶ ଅନୁଯାୟୀ ପ୍ରମାଣିତ ଔଷଧ ସେବନ",
        "ପର୍ଯ୍ୟାପ୍ତ ପାଣି ପିଇବା, ପୁଷ୍ଟିକର ଖାଦ୍ୟ ଓ ବିଶ୍ରାମ",
        "ଓଡ଼ିଶା ସରକାରୀ ଡାକ୍ତରଖାନାରେ ମାଗଣା ଚିକିତ୍ସା ଓ ପରୀକ୍ଷା"
      ],
      "prevention": [
        "ବ୍ୟକ୍ତିଗତ ଓ ପରିବେଶ ପରିମଳ ସର୍ବଦା ବଜାୟ ରଖନ୍ତୁ",
        "ସ୍ୱାସ୍ଥ୍ୟ ବିଭାଗର ନିର୍ଦ୍ଦେଶାବଳୀ ପାଳନ କରନ୍ତୁ",
        "ସମୟ ଅନୁଯାୟୀ ଟିକାକରଣ ଓ ସ୍ୱାସ୍ଥ୍ୟ ଯାଞ୍ଚ କରାନ୍ତୁ"
      ],
      "dos": [
        "ଲକ୍ଷଣ ଦେଖାଦେବା ମାତ୍ରେ ଡାକ୍ତରଙ୍କ ସହ ପରାମର୍ଶ କରନ୍ତୁ",
        "ଡାକ୍ତର ଦେଇଥିବା ଔଷଧ କୋର୍ସ ସମ୍ପୂର୍ଣ୍ଣ ଶେଷ କରନ୍ତୁ",
        "ଫୁଟା ପାଣି ଓ ପୁଷ୍ଟିକର ଖାଦ୍ୟ ଖାଆନ୍ତୁ"
      ],
      "donts": [
        "ଡାକ୍ତରଙ୍କ ବିନା ପରାମର୍ଶରେ ମେଡିସିନ୍ ଦୋକାନରୁ ଔଷଧ ଖାଆନ୍ତୁ ନାହିଁ",
        "ଗୁରୁତର ଲକ୍ଷଣ ଥିଲେ ଡାକ୍ତରଖାନା ଯିବାରେ ଡେରି କରନ୍ତୁ ନାହିଁ",
        "ଅପରିଷ୍କାର ଓ ବାସି ଖାଦ୍ୟ ଖାଆନ୍ତୁ ନାହିଁ"
      ],
      "whenToSeeDoctor": [
        "ଲଗାତାର ତେଜ ଜ୍ୱର ଲାଗିରହିଲେ",
        "ନିଶ୍ୱାସ ନେବାରେ କଷ୍ଟ ହେଲେ ବା ଚେତା ହରାଇଲେ",
        "ପାଣି ପିଇ ନପାରିଲେ ବା ବାରମ୍ବାର ବାନ୍ତି ହେଲେ"
      ],
      "faqs": [
        {
          "question": "ଓଡ଼ିଶାରେ ଚିଲକାନ୍ ଓ କାଛୁକୁଣ୍ଡିଆ (ସ୍କାବିସ୍) ର ଚିକିତ୍ସା ମାଗଣାରେ ମିଳେ କି?",
          "answer": "ହଁ, ନିରାମୟ ଯୋଜନା ଓ ବିଜୁ ସ୍ୱାସ୍ଥ୍ୟ କଲ୍ୟାଣ ଯୋଜନାରେ ସମସ୍ତ ସରକାରୀ ଡାକ୍ତରଖାନାରେ ମାଗଣା ପରୀକ୍ଷା ଓ ଔଷଧ ଉପଲବ୍ଧ।"
        },
        {
          "question": "କେବେ ଡାକ୍ତରଖାନା ଯିବା ଉଚିତ?",
          "answer": "ଗୁରୁତର ଲକ୍ଷଣ ଦେଖାଦେବା ମାତ୍ରେ ତୁରନ୍ତ ଡାକ୍ତରଖାନା ଯିବା ଉଚିତ।"
        }
      ]
    }
  },
  {
    "id": "dis-50-ringworm-fungal-itch-dadru-dad-",
    "category": "Dermatology & Skin",
    "severity": "Mild",
    "transmission": "Fungal spore contact in humid tropical weather",
    "en": {
      "name": "Ringworm & Fungal Itch (Dadru / Dad) - Grade 2",
      "overview": "Detailed clinical guidance, prevention, and government health support in Odisha for Ringworm & Fungal Itch (Dadru / Dad).",
      "symptoms": [
        "Primary localized pain, fever, or discomfort",
        "Fatigue and reduced physical stamina",
        "Loss of normal appetite and mild headache",
        "Associated diagnostic clinical signs specific to condition"
      ],
      "causes": [
        "Etiological factors and environmental exposure related to Ringworm & Fungal Itch (Dadru / Dad)",
        "Unfavorable seasonal conditions or unhygienic community environment",
        "Nutritional or metabolic susceptibility factors"
      ],
      "treatments": [
        "Evidence-based pharmacotherapy prescribed by medical officer",
        "Adequate fluid intake, nutritious diet, and supportive care",
        "Free treatment and diagnostic screening available at Odisha CHCs and DHHs"
      ],
      "prevention": [
        "Maintain strict personal, domestic, and water hygiene",
        "Adhere to public health department guidelines and advisories",
        "Timely immunization and regular screening visits"
      ],
      "dos": [
        "Consult a qualified medical officer at early onset of symptoms",
        "Complete the prescribed medical regimen without skipping doses",
        "Maintain clean drinking water and well-balanced nutrition"
      ],
      "donts": [
        "Do not self-medicate or purchase unverified over-the-counter drugs",
        "Do not delay seeking medical care if red flag symptoms emerge",
        "Do not consume unhygienic or contaminated food and water"
      ],
      "whenToSeeDoctor": [
        "High continuous fever not responding to antipyretics",
        "Breathing difficulty, extreme fatigue, or fainting",
        "Inability to eat or drink oral fluids"
      ],
      "faqs": [
        {
          "question": "Is treatment for Ringworm & Fungal Itch (Dadru / Dad) available free in Odisha?",
          "answer": "Yes, under Niramaya scheme and BSKY, free diagnostics and medicines are provided across Odisha government facilities."
        },
        {
          "question": "When should one visit the nearest hospital?",
          "answer": "Visit the hospital at first onset of severe symptoms or if home recovery is slow after 48 hours."
        }
      ]
    },
    "or": {
      "name": "ଦାଦ୍ରୁ ଓ କାଛୁ (ରିଙ୍ଗୱାର୍ମ) (ପର୍ଯ୍ୟାୟ 2)",
      "nativeName": "ଦାଦ୍ରୁ ଓ କାଛୁ (ରିଙ୍ଗୱାର୍ମ)",
      "overview": "ଓଡ଼ିଶାର ଜନସାଧାରଣଙ୍କ ପାଇଁ ଦାଦ୍ରୁ ଓ କାଛୁ (ରିଙ୍ଗୱାର୍ମ) ର ଡାକ୍ତରୀ ମାର୍ଗଦର୍ଶନ, ପ୍ରତିରୋଧ ଓ ସରକାରୀ ସହାୟତା।",
      "symptoms": [
        "ସ୍ଥାନୀୟ ଯନ୍ତ୍ରଣା, ଜ୍ୱର ବା ଅସ୍ୱସ୍ତି ଭାବ",
        "ଦୁର୍ବଳତା ଏବଂ ଶରୀରରେ ଶକ୍ତିର ଅଭାବ",
        "ଭୋକ କମିବା ଏବଂ ମୁଣ୍ଡବିନ୍ଧା",
        "ରୋଗ ସମ୍ପର୍କିତ ସାଧାରଣ ଡାକ୍ତରୀ ଲକ୍ଷଣ"
      ],
      "causes": [
        "ଦାଦ୍ରୁ ଓ କାଛୁ (ରିଙ୍ଗୱାର୍ମ) ସମ୍ପର୍କିତ ପରିବେଶ ଓ ଜୀବାଣୁଜନିତ କାରଣ",
        "ଋତୁକାଳୀନ ପ୍ରତିକୂଳ ପାଗ ବା ଅପରିଷ୍କାର ପରିବେଶ",
        "ପୁଷ୍ଟିହୀନତା ବା ରୋଗ ପ୍ରତିରୋଧକ ଶକ୍ତିର ଅଭାବ"
      ],
      "treatments": [
        "ଡାକ୍ତରଙ୍କ ପରାମର୍ଶ ଅନୁଯାୟୀ ପ୍ରମାଣିତ ଔଷଧ ସେବନ",
        "ପର୍ଯ୍ୟାପ୍ତ ପାଣି ପିଇବା, ପୁଷ୍ଟିକର ଖାଦ୍ୟ ଓ ବିଶ୍ରାମ",
        "ଓଡ଼ିଶା ସରକାରୀ ଡାକ୍ତରଖାନାରେ ମାଗଣା ଚିକିତ୍ସା ଓ ପରୀକ୍ଷା"
      ],
      "prevention": [
        "ବ୍ୟକ୍ତିଗତ ଓ ପରିବେଶ ପରିମଳ ସର୍ବଦା ବଜାୟ ରଖନ୍ତୁ",
        "ସ୍ୱାସ୍ଥ୍ୟ ବିଭାଗର ନିର୍ଦ୍ଦେଶାବଳୀ ପାଳନ କରନ୍ତୁ",
        "ସମୟ ଅନୁଯାୟୀ ଟିକାକରଣ ଓ ସ୍ୱାସ୍ଥ୍ୟ ଯାଞ୍ଚ କରାନ୍ତୁ"
      ],
      "dos": [
        "ଲକ୍ଷଣ ଦେଖାଦେବା ମାତ୍ରେ ଡାକ୍ତରଙ୍କ ସହ ପରାମର୍ଶ କରନ୍ତୁ",
        "ଡାକ୍ତର ଦେଇଥିବା ଔଷଧ କୋର୍ସ ସମ୍ପୂର୍ଣ୍ଣ ଶେଷ କରନ୍ତୁ",
        "ଫୁଟା ପାଣି ଓ ପୁଷ୍ଟିକର ଖାଦ୍ୟ ଖାଆନ୍ତୁ"
      ],
      "donts": [
        "ଡାକ୍ତରଙ୍କ ବିନା ପରାମର୍ଶରେ ମେଡିସିନ୍ ଦୋକାନରୁ ଔଷଧ ଖାଆନ୍ତୁ ନାହିଁ",
        "ଗୁରୁତର ଲକ୍ଷଣ ଥିଲେ ଡାକ୍ତରଖାନା ଯିବାରେ ଡେରି କରନ୍ତୁ ନାହିଁ",
        "ଅପରିଷ୍କାର ଓ ବାସି ଖାଦ୍ୟ ଖାଆନ୍ତୁ ନାହିଁ"
      ],
      "whenToSeeDoctor": [
        "ଲଗାତାର ତେଜ ଜ୍ୱର ଲାଗିରହିଲେ",
        "ନିଶ୍ୱାସ ନେବାରେ କଷ୍ଟ ହେଲେ ବା ଚେତା ହରାଇଲେ",
        "ପାଣି ପିଇ ନପାରିଲେ ବା ବାରମ୍ବାର ବାନ୍ତି ହେଲେ"
      ],
      "faqs": [
        {
          "question": "ଓଡ଼ିଶାରେ ଦାଦ୍ରୁ ଓ କାଛୁ (ରିଙ୍ଗୱାର୍ମ) ର ଚିକିତ୍ସା ମାଗଣାରେ ମିଳେ କି?",
          "answer": "ହଁ, ନିରାମୟ ଯୋଜନା ଓ ବିଜୁ ସ୍ୱାସ୍ଥ୍ୟ କଲ୍ୟାଣ ଯୋଜନାରେ ସମସ୍ତ ସରକାରୀ ଡାକ୍ତରଖାନାରେ ମାଗଣା ପରୀକ୍ଷା ଓ ଔଷଧ ଉପଲବ୍ଧ।"
        },
        {
          "question": "କେବେ ଡାକ୍ତରଖାନା ଯିବା ଉଚିତ?",
          "answer": "ଗୁରୁତର ଲକ୍ଷଣ ଦେଖାଦେବା ମାତ୍ରେ ତୁରନ୍ତ ଡାକ୍ତରଖାନା ଯିବା ଉଚିତ।"
        }
      ]
    }
  },
  {
    "id": "dis-51-severe-acute-malnutrition-in-children-sam-",
    "category": "Maternal & Child",
    "severity": "High",
    "transmission": "Nutritional deficiency and chronic diarrheal illness",
    "en": {
      "name": "Severe Acute Malnutrition in Children (SAM) - Grade 2",
      "overview": "Detailed clinical guidance, prevention, and government health support in Odisha for Severe Acute Malnutrition in Children (SAM).",
      "symptoms": [
        "Primary localized pain, fever, or discomfort",
        "Fatigue and reduced physical stamina",
        "Loss of normal appetite and mild headache",
        "Associated diagnostic clinical signs specific to condition"
      ],
      "causes": [
        "Etiological factors and environmental exposure related to Severe Acute Malnutrition in Children (SAM)",
        "Unfavorable seasonal conditions or unhygienic community environment",
        "Nutritional or metabolic susceptibility factors"
      ],
      "treatments": [
        "Evidence-based pharmacotherapy prescribed by medical officer",
        "Adequate fluid intake, nutritious diet, and supportive care",
        "Free treatment and diagnostic screening available at Odisha CHCs and DHHs"
      ],
      "prevention": [
        "Maintain strict personal, domestic, and water hygiene",
        "Adhere to public health department guidelines and advisories",
        "Timely immunization and regular screening visits"
      ],
      "dos": [
        "Consult a qualified medical officer at early onset of symptoms",
        "Complete the prescribed medical regimen without skipping doses",
        "Maintain clean drinking water and well-balanced nutrition"
      ],
      "donts": [
        "Do not self-medicate or purchase unverified over-the-counter drugs",
        "Do not delay seeking medical care if red flag symptoms emerge",
        "Do not consume unhygienic or contaminated food and water"
      ],
      "whenToSeeDoctor": [
        "High continuous fever not responding to antipyretics",
        "Breathing difficulty, extreme fatigue, or fainting",
        "Inability to eat or drink oral fluids"
      ],
      "faqs": [
        {
          "question": "Is treatment for Severe Acute Malnutrition in Children (SAM) available free in Odisha?",
          "answer": "Yes, under Niramaya scheme and BSKY, free diagnostics and medicines are provided across Odisha government facilities."
        },
        {
          "question": "When should one visit the nearest hospital?",
          "answer": "Visit the hospital at first onset of severe symptoms or if home recovery is slow after 48 hours."
        }
      ]
    },
    "or": {
      "name": "ଶିଶୁ ଅପପୁଷ୍ଟି (SAM) (ପର୍ଯ୍ୟାୟ 2)",
      "nativeName": "ଶିଶୁ ଅପପୁଷ୍ଟି (SAM)",
      "overview": "ଓଡ଼ିଶାର ଜନସାଧାରଣଙ୍କ ପାଇଁ ଶିଶୁ ଅପପୁଷ୍ଟି (SAM) ର ଡାକ୍ତରୀ ମାର୍ଗଦର୍ଶନ, ପ୍ରତିରୋଧ ଓ ସରକାରୀ ସହାୟତା।",
      "symptoms": [
        "ସ୍ଥାନୀୟ ଯନ୍ତ୍ରଣା, ଜ୍ୱର ବା ଅସ୍ୱସ୍ତି ଭାବ",
        "ଦୁର୍ବଳତା ଏବଂ ଶରୀରରେ ଶକ୍ତିର ଅଭାବ",
        "ଭୋକ କମିବା ଏବଂ ମୁଣ୍ଡବିନ୍ଧା",
        "ରୋଗ ସମ୍ପର୍କିତ ସାଧାରଣ ଡାକ୍ତରୀ ଲକ୍ଷଣ"
      ],
      "causes": [
        "ଶିଶୁ ଅପପୁଷ୍ଟି (SAM) ସମ୍ପର୍କିତ ପରିବେଶ ଓ ଜୀବାଣୁଜନିତ କାରଣ",
        "ଋତୁକାଳୀନ ପ୍ରତିକୂଳ ପାଗ ବା ଅପରିଷ୍କାର ପରିବେଶ",
        "ପୁଷ୍ଟିହୀନତା ବା ରୋଗ ପ୍ରତିରୋଧକ ଶକ୍ତିର ଅଭାବ"
      ],
      "treatments": [
        "ଡାକ୍ତରଙ୍କ ପରାମର୍ଶ ଅନୁଯାୟୀ ପ୍ରମାଣିତ ଔଷଧ ସେବନ",
        "ପର୍ଯ୍ୟାପ୍ତ ପାଣି ପିଇବା, ପୁଷ୍ଟିକର ଖାଦ୍ୟ ଓ ବିଶ୍ରାମ",
        "ଓଡ଼ିଶା ସରକାରୀ ଡାକ୍ତରଖାନାରେ ମାଗଣା ଚିକିତ୍ସା ଓ ପରୀକ୍ଷା"
      ],
      "prevention": [
        "ବ୍ୟକ୍ତିଗତ ଓ ପରିବେଶ ପରିମଳ ସର୍ବଦା ବଜାୟ ରଖନ୍ତୁ",
        "ସ୍ୱାସ୍ଥ୍ୟ ବିଭାଗର ନିର୍ଦ୍ଦେଶାବଳୀ ପାଳନ କରନ୍ତୁ",
        "ସମୟ ଅନୁଯାୟୀ ଟିକାକରଣ ଓ ସ୍ୱାସ୍ଥ୍ୟ ଯାଞ୍ଚ କରାନ୍ତୁ"
      ],
      "dos": [
        "ଲକ୍ଷଣ ଦେଖାଦେବା ମାତ୍ରେ ଡାକ୍ତରଙ୍କ ସହ ପରାମର୍ଶ କରନ୍ତୁ",
        "ଡାକ୍ତର ଦେଇଥିବା ଔଷଧ କୋର୍ସ ସମ୍ପୂର୍ଣ୍ଣ ଶେଷ କରନ୍ତୁ",
        "ଫୁଟା ପାଣି ଓ ପୁଷ୍ଟିକର ଖାଦ୍ୟ ଖାଆନ୍ତୁ"
      ],
      "donts": [
        "ଡାକ୍ତରଙ୍କ ବିନା ପରାମର୍ଶରେ ମେଡିସିନ୍ ଦୋକାନରୁ ଔଷଧ ଖାଆନ୍ତୁ ନାହିଁ",
        "ଗୁରୁତର ଲକ୍ଷଣ ଥିଲେ ଡାକ୍ତରଖାନା ଯିବାରେ ଡେରି କରନ୍ତୁ ନାହିଁ",
        "ଅପରିଷ୍କାର ଓ ବାସି ଖାଦ୍ୟ ଖାଆନ୍ତୁ ନାହିଁ"
      ],
      "whenToSeeDoctor": [
        "ଲଗାତାର ତେଜ ଜ୍ୱର ଲାଗିରହିଲେ",
        "ନିଶ୍ୱାସ ନେବାରେ କଷ୍ଟ ହେଲେ ବା ଚେତା ହରାଇଲେ",
        "ପାଣି ପିଇ ନପାରିଲେ ବା ବାରମ୍ବାର ବାନ୍ତି ହେଲେ"
      ],
      "faqs": [
        {
          "question": "ଓଡ଼ିଶାରେ ଶିଶୁ ଅପପୁଷ୍ଟି (SAM) ର ଚିକିତ୍ସା ମାଗଣାରେ ମିଳେ କି?",
          "answer": "ହଁ, ନିରାମୟ ଯୋଜନା ଓ ବିଜୁ ସ୍ୱାସ୍ଥ୍ୟ କଲ୍ୟାଣ ଯୋଜନାରେ ସମସ୍ତ ସରକାରୀ ଡାକ୍ତରଖାନାରେ ମାଗଣା ପରୀକ୍ଷା ଓ ଔଷଧ ଉପଲବ୍ଧ।"
        },
        {
          "question": "କେବେ ଡାକ୍ତରଖାନା ଯିବା ଉଚିତ?",
          "answer": "ଗୁରୁତର ଲକ୍ଷଣ ଦେଖାଦେବା ମାତ୍ରେ ତୁରନ୍ତ ଡାକ୍ତରଖାନା ଯିବା ଉଚିତ।"
        }
      ]
    }
  },
  {
    "id": "dis-52-iron-deficiency-anemia-in-pregnancy",
    "category": "Maternal & Child",
    "severity": "Moderate",
    "transmission": "Nutritional iron and folate deficiency",
    "en": {
      "name": "Iron Deficiency Anemia in Pregnancy - Grade 2",
      "overview": "Detailed clinical guidance, prevention, and government health support in Odisha for Iron Deficiency Anemia in Pregnancy.",
      "symptoms": [
        "Primary localized pain, fever, or discomfort",
        "Fatigue and reduced physical stamina",
        "Loss of normal appetite and mild headache",
        "Associated diagnostic clinical signs specific to condition"
      ],
      "causes": [
        "Etiological factors and environmental exposure related to Iron Deficiency Anemia in Pregnancy",
        "Unfavorable seasonal conditions or unhygienic community environment",
        "Nutritional or metabolic susceptibility factors"
      ],
      "treatments": [
        "Evidence-based pharmacotherapy prescribed by medical officer",
        "Adequate fluid intake, nutritious diet, and supportive care",
        "Free treatment and diagnostic screening available at Odisha CHCs and DHHs"
      ],
      "prevention": [
        "Maintain strict personal, domestic, and water hygiene",
        "Adhere to public health department guidelines and advisories",
        "Timely immunization and regular screening visits"
      ],
      "dos": [
        "Consult a qualified medical officer at early onset of symptoms",
        "Complete the prescribed medical regimen without skipping doses",
        "Maintain clean drinking water and well-balanced nutrition"
      ],
      "donts": [
        "Do not self-medicate or purchase unverified over-the-counter drugs",
        "Do not delay seeking medical care if red flag symptoms emerge",
        "Do not consume unhygienic or contaminated food and water"
      ],
      "whenToSeeDoctor": [
        "High continuous fever not responding to antipyretics",
        "Breathing difficulty, extreme fatigue, or fainting",
        "Inability to eat or drink oral fluids"
      ],
      "faqs": [
        {
          "question": "Is treatment for Iron Deficiency Anemia in Pregnancy available free in Odisha?",
          "answer": "Yes, under Niramaya scheme and BSKY, free diagnostics and medicines are provided across Odisha government facilities."
        },
        {
          "question": "When should one visit the nearest hospital?",
          "answer": "Visit the hospital at first onset of severe symptoms or if home recovery is slow after 48 hours."
        }
      ]
    },
    "or": {
      "name": "ଗର୍ଭାବସ୍ଥାରେ ରକ୍ତହୀନତା (ପର୍ଯ୍ୟାୟ 2)",
      "nativeName": "ଗର୍ଭାବସ୍ଥାରେ ରକ୍ତହୀନତା",
      "overview": "ଓଡ଼ିଶାର ଜନସାଧାରଣଙ୍କ ପାଇଁ ଗର୍ଭାବସ୍ଥାରେ ରକ୍ତହୀନତା ର ଡାକ୍ତରୀ ମାର୍ଗଦର୍ଶନ, ପ୍ରତିରୋଧ ଓ ସରକାରୀ ସହାୟତା।",
      "symptoms": [
        "ସ୍ଥାନୀୟ ଯନ୍ତ୍ରଣା, ଜ୍ୱର ବା ଅସ୍ୱସ୍ତି ଭାବ",
        "ଦୁର୍ବଳତା ଏବଂ ଶରୀରରେ ଶକ୍ତିର ଅଭାବ",
        "ଭୋକ କମିବା ଏବଂ ମୁଣ୍ଡବିନ୍ଧା",
        "ରୋଗ ସମ୍ପର୍କିତ ସାଧାରଣ ଡାକ୍ତରୀ ଲକ୍ଷଣ"
      ],
      "causes": [
        "ଗର୍ଭାବସ୍ଥାରେ ରକ୍ତହୀନତା ସମ୍ପର୍କିତ ପରିବେଶ ଓ ଜୀବାଣୁଜନିତ କାରଣ",
        "ଋତୁକାଳୀନ ପ୍ରତିକୂଳ ପାଗ ବା ଅପରିଷ୍କାର ପରିବେଶ",
        "ପୁଷ୍ଟିହୀନତା ବା ରୋଗ ପ୍ରତିରୋଧକ ଶକ୍ତିର ଅଭାବ"
      ],
      "treatments": [
        "ଡାକ୍ତରଙ୍କ ପରାମର୍ଶ ଅନୁଯାୟୀ ପ୍ରମାଣିତ ଔଷଧ ସେବନ",
        "ପର୍ଯ୍ୟାପ୍ତ ପାଣି ପିଇବା, ପୁଷ୍ଟିକର ଖାଦ୍ୟ ଓ ବିଶ୍ରାମ",
        "ଓଡ଼ିଶା ସରକାରୀ ଡାକ୍ତରଖାନାରେ ମାଗଣା ଚିକିତ୍ସା ଓ ପରୀକ୍ଷା"
      ],
      "prevention": [
        "ବ୍ୟକ୍ତିଗତ ଓ ପରିବେଶ ପରିମଳ ସର୍ବଦା ବଜାୟ ରଖନ୍ତୁ",
        "ସ୍ୱାସ୍ଥ୍ୟ ବିଭାଗର ନିର୍ଦ୍ଦେଶାବଳୀ ପାଳନ କରନ୍ତୁ",
        "ସମୟ ଅନୁଯାୟୀ ଟିକାକରଣ ଓ ସ୍ୱାସ୍ଥ୍ୟ ଯାଞ୍ଚ କରାନ୍ତୁ"
      ],
      "dos": [
        "ଲକ୍ଷଣ ଦେଖାଦେବା ମାତ୍ରେ ଡାକ୍ତରଙ୍କ ସହ ପରାମର୍ଶ କରନ୍ତୁ",
        "ଡାକ୍ତର ଦେଇଥିବା ଔଷଧ କୋର୍ସ ସମ୍ପୂର୍ଣ୍ଣ ଶେଷ କରନ୍ତୁ",
        "ଫୁଟା ପାଣି ଓ ପୁଷ୍ଟିକର ଖାଦ୍ୟ ଖାଆନ୍ତୁ"
      ],
      "donts": [
        "ଡାକ୍ତରଙ୍କ ବିନା ପରାମର୍ଶରେ ମେଡିସିନ୍ ଦୋକାନରୁ ଔଷଧ ଖାଆନ୍ତୁ ନାହିଁ",
        "ଗୁରୁତର ଲକ୍ଷଣ ଥିଲେ ଡାକ୍ତରଖାନା ଯିବାରେ ଡେରି କରନ୍ତୁ ନାହିଁ",
        "ଅପରିଷ୍କାର ଓ ବାସି ଖାଦ୍ୟ ଖାଆନ୍ତୁ ନାହିଁ"
      ],
      "whenToSeeDoctor": [
        "ଲଗାତାର ତେଜ ଜ୍ୱର ଲାଗିରହିଲେ",
        "ନିଶ୍ୱାସ ନେବାରେ କଷ୍ଟ ହେଲେ ବା ଚେତା ହରାଇଲେ",
        "ପାଣି ପିଇ ନପାରିଲେ ବା ବାରମ୍ବାର ବାନ୍ତି ହେଲେ"
      ],
      "faqs": [
        {
          "question": "ଓଡ଼ିଶାରେ ଗର୍ଭାବସ୍ଥାରେ ରକ୍ତହୀନତା ର ଚିକିତ୍ସା ମାଗଣାରେ ମିଳେ କି?",
          "answer": "ହଁ, ନିରାମୟ ଯୋଜନା ଓ ବିଜୁ ସ୍ୱାସ୍ଥ୍ୟ କଲ୍ୟାଣ ଯୋଜନାରେ ସମସ୍ତ ସରକାରୀ ଡାକ୍ତରଖାନାରେ ମାଗଣା ପରୀକ୍ଷା ଓ ଔଷଧ ଉପଲବ୍ଧ।"
        },
        {
          "question": "କେବେ ଡାକ୍ତରଖାନା ଯିବା ଉଚିତ?",
          "answer": "ଗୁରୁତର ଲକ୍ଷଣ ଦେଖାଦେବା ମାତ୍ରେ ତୁରନ୍ତ ଡାକ୍ତରଖାନା ଯିବା ଉଚିତ।"
        }
      ]
    }
  },
  {
    "id": "dis-53-type-2-diabetes-mellitus-madhumeha-",
    "category": "Chronic & Lifestyle",
    "severity": "Moderate",
    "transmission": "Non-communicable metabolic disorder",
    "en": {
      "name": "Type 2 Diabetes Mellitus (Madhumeha) - Grade 2",
      "overview": "Detailed clinical guidance, prevention, and government health support in Odisha for Type 2 Diabetes Mellitus (Madhumeha).",
      "symptoms": [
        "Primary localized pain, fever, or discomfort",
        "Fatigue and reduced physical stamina",
        "Loss of normal appetite and mild headache",
        "Associated diagnostic clinical signs specific to condition"
      ],
      "causes": [
        "Etiological factors and environmental exposure related to Type 2 Diabetes Mellitus (Madhumeha)",
        "Unfavorable seasonal conditions or unhygienic community environment",
        "Nutritional or metabolic susceptibility factors"
      ],
      "treatments": [
        "Evidence-based pharmacotherapy prescribed by medical officer",
        "Adequate fluid intake, nutritious diet, and supportive care",
        "Free treatment and diagnostic screening available at Odisha CHCs and DHHs"
      ],
      "prevention": [
        "Maintain strict personal, domestic, and water hygiene",
        "Adhere to public health department guidelines and advisories",
        "Timely immunization and regular screening visits"
      ],
      "dos": [
        "Consult a qualified medical officer at early onset of symptoms",
        "Complete the prescribed medical regimen without skipping doses",
        "Maintain clean drinking water and well-balanced nutrition"
      ],
      "donts": [
        "Do not self-medicate or purchase unverified over-the-counter drugs",
        "Do not delay seeking medical care if red flag symptoms emerge",
        "Do not consume unhygienic or contaminated food and water"
      ],
      "whenToSeeDoctor": [
        "High continuous fever not responding to antipyretics",
        "Breathing difficulty, extreme fatigue, or fainting",
        "Inability to eat or drink oral fluids"
      ],
      "faqs": [
        {
          "question": "Is treatment for Type 2 Diabetes Mellitus (Madhumeha) available free in Odisha?",
          "answer": "Yes, under Niramaya scheme and BSKY, free diagnostics and medicines are provided across Odisha government facilities."
        },
        {
          "question": "When should one visit the nearest hospital?",
          "answer": "Visit the hospital at first onset of severe symptoms or if home recovery is slow after 48 hours."
        }
      ]
    },
    "or": {
      "name": "ମଧୁମେହ (ଡାଇବେଟିସ୍) (ପର୍ଯ୍ୟାୟ 2)",
      "nativeName": "ମଧୁମେହ (ଡାଇବେଟିସ୍)",
      "overview": "ଓଡ଼ିଶାର ଜନସାଧାରଣଙ୍କ ପାଇଁ ମଧୁମେହ (ଡାଇବେଟିସ୍) ର ଡାକ୍ତରୀ ମାର୍ଗଦର୍ଶନ, ପ୍ରତିରୋଧ ଓ ସରକାରୀ ସହାୟତା।",
      "symptoms": [
        "ସ୍ଥାନୀୟ ଯନ୍ତ୍ରଣା, ଜ୍ୱର ବା ଅସ୍ୱସ୍ତି ଭାବ",
        "ଦୁର୍ବଳତା ଏବଂ ଶରୀରରେ ଶକ୍ତିର ଅଭାବ",
        "ଭୋକ କମିବା ଏବଂ ମୁଣ୍ଡବିନ୍ଧା",
        "ରୋଗ ସମ୍ପର୍କିତ ସାଧାରଣ ଡାକ୍ତରୀ ଲକ୍ଷଣ"
      ],
      "causes": [
        "ମଧୁମେହ (ଡାଇବେଟିସ୍) ସମ୍ପର୍କିତ ପରିବେଶ ଓ ଜୀବାଣୁଜନିତ କାରଣ",
        "ଋତୁକାଳୀନ ପ୍ରତିକୂଳ ପାଗ ବା ଅପରିଷ୍କାର ପରିବେଶ",
        "ପୁଷ୍ଟିହୀନତା ବା ରୋଗ ପ୍ରତିରୋଧକ ଶକ୍ତିର ଅଭାବ"
      ],
      "treatments": [
        "ଡାକ୍ତରଙ୍କ ପରାମର୍ଶ ଅନୁଯାୟୀ ପ୍ରମାଣିତ ଔଷଧ ସେବନ",
        "ପର୍ଯ୍ୟାପ୍ତ ପାଣି ପିଇବା, ପୁଷ୍ଟିକର ଖାଦ୍ୟ ଓ ବିଶ୍ରାମ",
        "ଓଡ଼ିଶା ସରକାରୀ ଡାକ୍ତରଖାନାରେ ମାଗଣା ଚିକିତ୍ସା ଓ ପରୀକ୍ଷା"
      ],
      "prevention": [
        "ବ୍ୟକ୍ତିଗତ ଓ ପରିବେଶ ପରିମଳ ସର୍ବଦା ବଜାୟ ରଖନ୍ତୁ",
        "ସ୍ୱାସ୍ଥ୍ୟ ବିଭାଗର ନିର୍ଦ୍ଦେଶାବଳୀ ପାଳନ କରନ୍ତୁ",
        "ସମୟ ଅନୁଯାୟୀ ଟିକାକରଣ ଓ ସ୍ୱାସ୍ଥ୍ୟ ଯାଞ୍ଚ କରାନ୍ତୁ"
      ],
      "dos": [
        "ଲକ୍ଷଣ ଦେଖାଦେବା ମାତ୍ରେ ଡାକ୍ତରଙ୍କ ସହ ପରାମର୍ଶ କରନ୍ତୁ",
        "ଡାକ୍ତର ଦେଇଥିବା ଔଷଧ କୋର୍ସ ସମ୍ପୂର୍ଣ୍ଣ ଶେଷ କରନ୍ତୁ",
        "ଫୁଟା ପାଣି ଓ ପୁଷ୍ଟିକର ଖାଦ୍ୟ ଖାଆନ୍ତୁ"
      ],
      "donts": [
        "ଡାକ୍ତରଙ୍କ ବିନା ପରାମର୍ଶରେ ମେଡିସିନ୍ ଦୋକାନରୁ ଔଷଧ ଖାଆନ୍ତୁ ନାହିଁ",
        "ଗୁରୁତର ଲକ୍ଷଣ ଥିଲେ ଡାକ୍ତରଖାନା ଯିବାରେ ଡେରି କରନ୍ତୁ ନାହିଁ",
        "ଅପରିଷ୍କାର ଓ ବାସି ଖାଦ୍ୟ ଖାଆନ୍ତୁ ନାହିଁ"
      ],
      "whenToSeeDoctor": [
        "ଲଗାତାର ତେଜ ଜ୍ୱର ଲାଗିରହିଲେ",
        "ନିଶ୍ୱାସ ନେବାରେ କଷ୍ଟ ହେଲେ ବା ଚେତା ହରାଇଲେ",
        "ପାଣି ପିଇ ନପାରିଲେ ବା ବାରମ୍ବାର ବାନ୍ତି ହେଲେ"
      ],
      "faqs": [
        {
          "question": "ଓଡ଼ିଶାରେ ମଧୁମେହ (ଡାଇବେଟିସ୍) ର ଚିକିତ୍ସା ମାଗଣାରେ ମିଳେ କି?",
          "answer": "ହଁ, ନିରାମୟ ଯୋଜନା ଓ ବିଜୁ ସ୍ୱାସ୍ଥ୍ୟ କଲ୍ୟାଣ ଯୋଜନାରେ ସମସ୍ତ ସରକାରୀ ଡାକ୍ତରଖାନାରେ ମାଗଣା ପରୀକ୍ଷା ଓ ଔଷଧ ଉପଲବ୍ଧ।"
        },
        {
          "question": "କେବେ ଡାକ୍ତରଖାନା ଯିବା ଉଚିତ?",
          "answer": "ଗୁରୁତର ଲକ୍ଷଣ ଦେଖାଦେବା ମାତ୍ରେ ତୁରନ୍ତ ଡାକ୍ତରଖାନା ଯିବା ଉଚିତ।"
        }
      ]
    }
  },
  {
    "id": "dis-54-hypertension-high-blood-pressure",
    "category": "Chronic & Lifestyle",
    "severity": "Moderate",
    "transmission": "Lifestyle, high dietary salt, and cardiovascular factors",
    "en": {
      "name": "Hypertension & High Blood Pressure - Grade 2",
      "overview": "Detailed clinical guidance, prevention, and government health support in Odisha for Hypertension & High Blood Pressure.",
      "symptoms": [
        "Primary localized pain, fever, or discomfort",
        "Fatigue and reduced physical stamina",
        "Loss of normal appetite and mild headache",
        "Associated diagnostic clinical signs specific to condition"
      ],
      "causes": [
        "Etiological factors and environmental exposure related to Hypertension & High Blood Pressure",
        "Unfavorable seasonal conditions or unhygienic community environment",
        "Nutritional or metabolic susceptibility factors"
      ],
      "treatments": [
        "Evidence-based pharmacotherapy prescribed by medical officer",
        "Adequate fluid intake, nutritious diet, and supportive care",
        "Free treatment and diagnostic screening available at Odisha CHCs and DHHs"
      ],
      "prevention": [
        "Maintain strict personal, domestic, and water hygiene",
        "Adhere to public health department guidelines and advisories",
        "Timely immunization and regular screening visits"
      ],
      "dos": [
        "Consult a qualified medical officer at early onset of symptoms",
        "Complete the prescribed medical regimen without skipping doses",
        "Maintain clean drinking water and well-balanced nutrition"
      ],
      "donts": [
        "Do not self-medicate or purchase unverified over-the-counter drugs",
        "Do not delay seeking medical care if red flag symptoms emerge",
        "Do not consume unhygienic or contaminated food and water"
      ],
      "whenToSeeDoctor": [
        "High continuous fever not responding to antipyretics",
        "Breathing difficulty, extreme fatigue, or fainting",
        "Inability to eat or drink oral fluids"
      ],
      "faqs": [
        {
          "question": "Is treatment for Hypertension & High Blood Pressure available free in Odisha?",
          "answer": "Yes, under Niramaya scheme and BSKY, free diagnostics and medicines are provided across Odisha government facilities."
        },
        {
          "question": "When should one visit the nearest hospital?",
          "answer": "Visit the hospital at first onset of severe symptoms or if home recovery is slow after 48 hours."
        }
      ]
    },
    "or": {
      "name": "ଉଚ୍ଚ ରକ୍ତଚାପ (ହାଇପରଟେନସନ) (ପର୍ଯ୍ୟାୟ 2)",
      "nativeName": "ଉଚ୍ଚ ରକ୍ତଚାପ (ହାଇପରଟେନସନ)",
      "overview": "ଓଡ଼ିଶାର ଜନସାଧାରଣଙ୍କ ପାଇଁ ଉଚ୍ଚ ରକ୍ତଚାପ (ହାଇପରଟେନସନ) ର ଡାକ୍ତରୀ ମାର୍ଗଦର୍ଶନ, ପ୍ରତିରୋଧ ଓ ସରକାରୀ ସହାୟତା।",
      "symptoms": [
        "ସ୍ଥାନୀୟ ଯନ୍ତ୍ରଣା, ଜ୍ୱର ବା ଅସ୍ୱସ୍ତି ଭାବ",
        "ଦୁର୍ବଳତା ଏବଂ ଶରୀରରେ ଶକ୍ତିର ଅଭାବ",
        "ଭୋକ କମିବା ଏବଂ ମୁଣ୍ଡବିନ୍ଧା",
        "ରୋଗ ସମ୍ପର୍କିତ ସାଧାରଣ ଡାକ୍ତରୀ ଲକ୍ଷଣ"
      ],
      "causes": [
        "ଉଚ୍ଚ ରକ୍ତଚାପ (ହାଇପରଟେନସନ) ସମ୍ପର୍କିତ ପରିବେଶ ଓ ଜୀବାଣୁଜନିତ କାରଣ",
        "ଋତୁକାଳୀନ ପ୍ରତିକୂଳ ପାଗ ବା ଅପରିଷ୍କାର ପରିବେଶ",
        "ପୁଷ୍ଟିହୀନତା ବା ରୋଗ ପ୍ରତିରୋଧକ ଶକ୍ତିର ଅଭାବ"
      ],
      "treatments": [
        "ଡାକ୍ତରଙ୍କ ପରାମର୍ଶ ଅନୁଯାୟୀ ପ୍ରମାଣିତ ଔଷଧ ସେବନ",
        "ପର୍ଯ୍ୟାପ୍ତ ପାଣି ପିଇବା, ପୁଷ୍ଟିକର ଖାଦ୍ୟ ଓ ବିଶ୍ରାମ",
        "ଓଡ଼ିଶା ସରକାରୀ ଡାକ୍ତରଖାନାରେ ମାଗଣା ଚିକିତ୍ସା ଓ ପରୀକ୍ଷା"
      ],
      "prevention": [
        "ବ୍ୟକ୍ତିଗତ ଓ ପରିବେଶ ପରିମଳ ସର୍ବଦା ବଜାୟ ରଖନ୍ତୁ",
        "ସ୍ୱାସ୍ଥ୍ୟ ବିଭାଗର ନିର୍ଦ୍ଦେଶାବଳୀ ପାଳନ କରନ୍ତୁ",
        "ସମୟ ଅନୁଯାୟୀ ଟିକାକରଣ ଓ ସ୍ୱାସ୍ଥ୍ୟ ଯାଞ୍ଚ କରାନ୍ତୁ"
      ],
      "dos": [
        "ଲକ୍ଷଣ ଦେଖାଦେବା ମାତ୍ରେ ଡାକ୍ତରଙ୍କ ସହ ପରାମର୍ଶ କରନ୍ତୁ",
        "ଡାକ୍ତର ଦେଇଥିବା ଔଷଧ କୋର୍ସ ସମ୍ପୂର୍ଣ୍ଣ ଶେଷ କରନ୍ତୁ",
        "ଫୁଟା ପାଣି ଓ ପୁଷ୍ଟିକର ଖାଦ୍ୟ ଖାଆନ୍ତୁ"
      ],
      "donts": [
        "ଡାକ୍ତରଙ୍କ ବିନା ପରାମର୍ଶରେ ମେଡିସିନ୍ ଦୋକାନରୁ ଔଷଧ ଖାଆନ୍ତୁ ନାହିଁ",
        "ଗୁରୁତର ଲକ୍ଷଣ ଥିଲେ ଡାକ୍ତରଖାନା ଯିବାରେ ଡେରି କରନ୍ତୁ ନାହିଁ",
        "ଅପରିଷ୍କାର ଓ ବାସି ଖାଦ୍ୟ ଖାଆନ୍ତୁ ନାହିଁ"
      ],
      "whenToSeeDoctor": [
        "ଲଗାତାର ତେଜ ଜ୍ୱର ଲାଗିରହିଲେ",
        "ନିଶ୍ୱାସ ନେବାରେ କଷ୍ଟ ହେଲେ ବା ଚେତା ହରାଇଲେ",
        "ପାଣି ପିଇ ନପାରିଲେ ବା ବାରମ୍ବାର ବାନ୍ତି ହେଲେ"
      ],
      "faqs": [
        {
          "question": "ଓଡ଼ିଶାରେ ଉଚ୍ଚ ରକ୍ତଚାପ (ହାଇପରଟେନସନ) ର ଚିକିତ୍ସା ମାଗଣାରେ ମିଳେ କି?",
          "answer": "ହଁ, ନିରାମୟ ଯୋଜନା ଓ ବିଜୁ ସ୍ୱାସ୍ଥ୍ୟ କଲ୍ୟାଣ ଯୋଜନାରେ ସମସ୍ତ ସରକାରୀ ଡାକ୍ତରଖାନାରେ ମାଗଣା ପରୀକ୍ଷା ଓ ଔଷଧ ଉପଲବ୍ଧ।"
        },
        {
          "question": "କେବେ ଡାକ୍ତରଖାନା ଯିବା ଉଚିତ?",
          "answer": "ଗୁରୁତର ଲକ୍ଷଣ ଦେଖାଦେବା ମାତ୍ରେ ତୁରନ୍ତ ଡାକ୍ତରଖାନା ଯିବା ଉଚିତ।"
        }
      ]
    }
  },
  {
    "id": "dis-55-chronic-kidney-disease-renal-calculi-pathuri-",
    "category": "Chronic & Lifestyle",
    "severity": "High",
    "transmission": "Dehydration, metabolic factors, and recurrent stones",
    "en": {
      "name": "Chronic Kidney Disease & Renal Calculi (Pathuri) - Grade 2",
      "overview": "Detailed clinical guidance, prevention, and government health support in Odisha for Chronic Kidney Disease & Renal Calculi (Pathuri).",
      "symptoms": [
        "Primary localized pain, fever, or discomfort",
        "Fatigue and reduced physical stamina",
        "Loss of normal appetite and mild headache",
        "Associated diagnostic clinical signs specific to condition"
      ],
      "causes": [
        "Etiological factors and environmental exposure related to Chronic Kidney Disease & Renal Calculi (Pathuri)",
        "Unfavorable seasonal conditions or unhygienic community environment",
        "Nutritional or metabolic susceptibility factors"
      ],
      "treatments": [
        "Evidence-based pharmacotherapy prescribed by medical officer",
        "Adequate fluid intake, nutritious diet, and supportive care",
        "Free treatment and diagnostic screening available at Odisha CHCs and DHHs"
      ],
      "prevention": [
        "Maintain strict personal, domestic, and water hygiene",
        "Adhere to public health department guidelines and advisories",
        "Timely immunization and regular screening visits"
      ],
      "dos": [
        "Consult a qualified medical officer at early onset of symptoms",
        "Complete the prescribed medical regimen without skipping doses",
        "Maintain clean drinking water and well-balanced nutrition"
      ],
      "donts": [
        "Do not self-medicate or purchase unverified over-the-counter drugs",
        "Do not delay seeking medical care if red flag symptoms emerge",
        "Do not consume unhygienic or contaminated food and water"
      ],
      "whenToSeeDoctor": [
        "High continuous fever not responding to antipyretics",
        "Breathing difficulty, extreme fatigue, or fainting",
        "Inability to eat or drink oral fluids"
      ],
      "faqs": [
        {
          "question": "Is treatment for Chronic Kidney Disease & Renal Calculi (Pathuri) available free in Odisha?",
          "answer": "Yes, under Niramaya scheme and BSKY, free diagnostics and medicines are provided across Odisha government facilities."
        },
        {
          "question": "When should one visit the nearest hospital?",
          "answer": "Visit the hospital at first onset of severe symptoms or if home recovery is slow after 48 hours."
        }
      ]
    },
    "or": {
      "name": "କିଡନୀ ପଥର ଓ ବୃକ୍‌କ ବିକାର (ପର୍ଯ୍ୟାୟ 2)",
      "nativeName": "କିଡନୀ ପଥର ଓ ବୃକ୍‌କ ବିକାର",
      "overview": "ଓଡ଼ିଶାର ଜନସାଧାରଣଙ୍କ ପାଇଁ କିଡନୀ ପଥର ଓ ବୃକ୍‌କ ବିକାର ର ଡାକ୍ତରୀ ମାର୍ଗଦର୍ଶନ, ପ୍ରତିରୋଧ ଓ ସରକାରୀ ସହାୟତା।",
      "symptoms": [
        "ସ୍ଥାନୀୟ ଯନ୍ତ୍ରଣା, ଜ୍ୱର ବା ଅସ୍ୱସ୍ତି ଭାବ",
        "ଦୁର୍ବଳତା ଏବଂ ଶରୀରରେ ଶକ୍ତିର ଅଭାବ",
        "ଭୋକ କମିବା ଏବଂ ମୁଣ୍ଡବିନ୍ଧା",
        "ରୋଗ ସମ୍ପର୍କିତ ସାଧାରଣ ଡାକ୍ତରୀ ଲକ୍ଷଣ"
      ],
      "causes": [
        "କିଡନୀ ପଥର ଓ ବୃକ୍‌କ ବିକାର ସମ୍ପର୍କିତ ପରିବେଶ ଓ ଜୀବାଣୁଜନିତ କାରଣ",
        "ଋତୁକାଳୀନ ପ୍ରତିକୂଳ ପାଗ ବା ଅପରିଷ୍କାର ପରିବେଶ",
        "ପୁଷ୍ଟିହୀନତା ବା ରୋଗ ପ୍ରତିରୋଧକ ଶକ୍ତିର ଅଭାବ"
      ],
      "treatments": [
        "ଡାକ୍ତରଙ୍କ ପରାମର୍ଶ ଅନୁଯାୟୀ ପ୍ରମାଣିତ ଔଷଧ ସେବନ",
        "ପର୍ଯ୍ୟାପ୍ତ ପାଣି ପିଇବା, ପୁଷ୍ଟିକର ଖାଦ୍ୟ ଓ ବିଶ୍ରାମ",
        "ଓଡ଼ିଶା ସରକାରୀ ଡାକ୍ତରଖାନାରେ ମାଗଣା ଚିକିତ୍ସା ଓ ପରୀକ୍ଷା"
      ],
      "prevention": [
        "ବ୍ୟକ୍ତିଗତ ଓ ପରିବେଶ ପରିମଳ ସର୍ବଦା ବଜାୟ ରଖନ୍ତୁ",
        "ସ୍ୱାସ୍ଥ୍ୟ ବିଭାଗର ନିର୍ଦ୍ଦେଶାବଳୀ ପାଳନ କରନ୍ତୁ",
        "ସମୟ ଅନୁଯାୟୀ ଟିକାକରଣ ଓ ସ୍ୱାସ୍ଥ୍ୟ ଯାଞ୍ଚ କରାନ୍ତୁ"
      ],
      "dos": [
        "ଲକ୍ଷଣ ଦେଖାଦେବା ମାତ୍ରେ ଡାକ୍ତରଙ୍କ ସହ ପରାମର୍ଶ କରନ୍ତୁ",
        "ଡାକ୍ତର ଦେଇଥିବା ଔଷଧ କୋର୍ସ ସମ୍ପୂର୍ଣ୍ଣ ଶେଷ କରନ୍ତୁ",
        "ଫୁଟା ପାଣି ଓ ପୁଷ୍ଟିକର ଖାଦ୍ୟ ଖାଆନ୍ତୁ"
      ],
      "donts": [
        "ଡାକ୍ତରଙ୍କ ବିନା ପରାମର୍ଶରେ ମେଡିସିନ୍ ଦୋକାନରୁ ଔଷଧ ଖାଆନ୍ତୁ ନାହିଁ",
        "ଗୁରୁତର ଲକ୍ଷଣ ଥିଲେ ଡାକ୍ତରଖାନା ଯିବାରେ ଡେରି କରନ୍ତୁ ନାହିଁ",
        "ଅପରିଷ୍କାର ଓ ବାସି ଖାଦ୍ୟ ଖାଆନ୍ତୁ ନାହିଁ"
      ],
      "whenToSeeDoctor": [
        "ଲଗାତାର ତେଜ ଜ୍ୱର ଲାଗିରହିଲେ",
        "ନିଶ୍ୱାସ ନେବାରେ କଷ୍ଟ ହେଲେ ବା ଚେତା ହରାଇଲେ",
        "ପାଣି ପିଇ ନପାରିଲେ ବା ବାରମ୍ବାର ବାନ୍ତି ହେଲେ"
      ],
      "faqs": [
        {
          "question": "ଓଡ଼ିଶାରେ କିଡନୀ ପଥର ଓ ବୃକ୍‌କ ବିକାର ର ଚିକିତ୍ସା ମାଗଣାରେ ମିଳେ କି?",
          "answer": "ହଁ, ନିରାମୟ ଯୋଜନା ଓ ବିଜୁ ସ୍ୱାସ୍ଥ୍ୟ କଲ୍ୟାଣ ଯୋଜନାରେ ସମସ୍ତ ସରକାରୀ ଡାକ୍ତରଖାନାରେ ମାଗଣା ପରୀକ୍ଷା ଓ ଔଷଧ ଉପଲବ୍ଧ।"
        },
        {
          "question": "କେବେ ଡାକ୍ତରଖାନା ଯିବା ଉଚିତ?",
          "answer": "ଗୁରୁତର ଲକ୍ଷଣ ଦେଖାଦେବା ମାତ୍ରେ ତୁରନ୍ତ ଡାକ୍ତରଖାନା ଯିବା ଉଚିତ।"
        }
      ]
    }
  },
  {
    "id": "dis-56-asthma-chronic-bronchitis-hapani-",
    "category": "Chronic & Lifestyle",
    "severity": "Moderate",
    "transmission": "Airway hyper-reactivity, dust, smoke, and pollen",
    "en": {
      "name": "Asthma & Chronic Bronchitis (Hapani) - Grade 2",
      "overview": "Detailed clinical guidance, prevention, and government health support in Odisha for Asthma & Chronic Bronchitis (Hapani).",
      "symptoms": [
        "Primary localized pain, fever, or discomfort",
        "Fatigue and reduced physical stamina",
        "Loss of normal appetite and mild headache",
        "Associated diagnostic clinical signs specific to condition"
      ],
      "causes": [
        "Etiological factors and environmental exposure related to Asthma & Chronic Bronchitis (Hapani)",
        "Unfavorable seasonal conditions or unhygienic community environment",
        "Nutritional or metabolic susceptibility factors"
      ],
      "treatments": [
        "Evidence-based pharmacotherapy prescribed by medical officer",
        "Adequate fluid intake, nutritious diet, and supportive care",
        "Free treatment and diagnostic screening available at Odisha CHCs and DHHs"
      ],
      "prevention": [
        "Maintain strict personal, domestic, and water hygiene",
        "Adhere to public health department guidelines and advisories",
        "Timely immunization and regular screening visits"
      ],
      "dos": [
        "Consult a qualified medical officer at early onset of symptoms",
        "Complete the prescribed medical regimen without skipping doses",
        "Maintain clean drinking water and well-balanced nutrition"
      ],
      "donts": [
        "Do not self-medicate or purchase unverified over-the-counter drugs",
        "Do not delay seeking medical care if red flag symptoms emerge",
        "Do not consume unhygienic or contaminated food and water"
      ],
      "whenToSeeDoctor": [
        "High continuous fever not responding to antipyretics",
        "Breathing difficulty, extreme fatigue, or fainting",
        "Inability to eat or drink oral fluids"
      ],
      "faqs": [
        {
          "question": "Is treatment for Asthma & Chronic Bronchitis (Hapani) available free in Odisha?",
          "answer": "Yes, under Niramaya scheme and BSKY, free diagnostics and medicines are provided across Odisha government facilities."
        },
        {
          "question": "When should one visit the nearest hospital?",
          "answer": "Visit the hospital at first onset of severe symptoms or if home recovery is slow after 48 hours."
        }
      ]
    },
    "or": {
      "name": "ହାପାନି ଓ ଶ୍ୱାସରୋଗ (ଆଜ୍‌ମା) (ପର୍ଯ୍ୟାୟ 2)",
      "nativeName": "ହାପାନି ଓ ଶ୍ୱାସରୋଗ (ଆଜ୍‌ମା)",
      "overview": "ଓଡ଼ିଶାର ଜନସାଧାରଣଙ୍କ ପାଇଁ ହାପାନି ଓ ଶ୍ୱାସରୋଗ (ଆଜ୍‌ମା) ର ଡାକ୍ତରୀ ମାର୍ଗଦର୍ଶନ, ପ୍ରତିରୋଧ ଓ ସରକାରୀ ସହାୟତା।",
      "symptoms": [
        "ସ୍ଥାନୀୟ ଯନ୍ତ୍ରଣା, ଜ୍ୱର ବା ଅସ୍ୱସ୍ତି ଭାବ",
        "ଦୁର୍ବଳତା ଏବଂ ଶରୀରରେ ଶକ୍ତିର ଅଭାବ",
        "ଭୋକ କମିବା ଏବଂ ମୁଣ୍ଡବିନ୍ଧା",
        "ରୋଗ ସମ୍ପର୍କିତ ସାଧାରଣ ଡାକ୍ତରୀ ଲକ୍ଷଣ"
      ],
      "causes": [
        "ହାପାନି ଓ ଶ୍ୱାସରୋଗ (ଆଜ୍‌ମା) ସମ୍ପର୍କିତ ପରିବେଶ ଓ ଜୀବାଣୁଜନିତ କାରଣ",
        "ଋତୁକାଳୀନ ପ୍ରତିକୂଳ ପାଗ ବା ଅପରିଷ୍କାର ପରିବେଶ",
        "ପୁଷ୍ଟିହୀନତା ବା ରୋଗ ପ୍ରତିରୋଧକ ଶକ୍ତିର ଅଭାବ"
      ],
      "treatments": [
        "ଡାକ୍ତରଙ୍କ ପରାମର୍ଶ ଅନୁଯାୟୀ ପ୍ରମାଣିତ ଔଷଧ ସେବନ",
        "ପର୍ଯ୍ୟାପ୍ତ ପାଣି ପିଇବା, ପୁଷ୍ଟିକର ଖାଦ୍ୟ ଓ ବିଶ୍ରାମ",
        "ଓଡ଼ିଶା ସରକାରୀ ଡାକ୍ତରଖାନାରେ ମାଗଣା ଚିକିତ୍ସା ଓ ପରୀକ୍ଷା"
      ],
      "prevention": [
        "ବ୍ୟକ୍ତିଗତ ଓ ପରିବେଶ ପରିମଳ ସର୍ବଦା ବଜାୟ ରଖନ୍ତୁ",
        "ସ୍ୱାସ୍ଥ୍ୟ ବିଭାଗର ନିର୍ଦ୍ଦେଶାବଳୀ ପାଳନ କରନ୍ତୁ",
        "ସମୟ ଅନୁଯାୟୀ ଟିକାକରଣ ଓ ସ୍ୱାସ୍ଥ୍ୟ ଯାଞ୍ଚ କରାନ୍ତୁ"
      ],
      "dos": [
        "ଲକ୍ଷଣ ଦେଖାଦେବା ମାତ୍ରେ ଡାକ୍ତରଙ୍କ ସହ ପରାମର୍ଶ କରନ୍ତୁ",
        "ଡାକ୍ତର ଦେଇଥିବା ଔଷଧ କୋର୍ସ ସମ୍ପୂର୍ଣ୍ଣ ଶେଷ କରନ୍ତୁ",
        "ଫୁଟା ପାଣି ଓ ପୁଷ୍ଟିକର ଖାଦ୍ୟ ଖାଆନ୍ତୁ"
      ],
      "donts": [
        "ଡାକ୍ତରଙ୍କ ବିନା ପରାମର୍ଶରେ ମେଡିସିନ୍ ଦୋକାନରୁ ଔଷଧ ଖାଆନ୍ତୁ ନାହିଁ",
        "ଗୁରୁତର ଲକ୍ଷଣ ଥିଲେ ଡାକ୍ତରଖାନା ଯିବାରେ ଡେରି କରନ୍ତୁ ନାହିଁ",
        "ଅପରିଷ୍କାର ଓ ବାସି ଖାଦ୍ୟ ଖାଆନ୍ତୁ ନାହିଁ"
      ],
      "whenToSeeDoctor": [
        "ଲଗାତାର ତେଜ ଜ୍ୱର ଲାଗିରହିଲେ",
        "ନିଶ୍ୱାସ ନେବାରେ କଷ୍ଟ ହେଲେ ବା ଚେତା ହରାଇଲେ",
        "ପାଣି ପିଇ ନପାରିଲେ ବା ବାରମ୍ବାର ବାନ୍ତି ହେଲେ"
      ],
      "faqs": [
        {
          "question": "ଓଡ଼ିଶାରେ ହାପାନି ଓ ଶ୍ୱାସରୋଗ (ଆଜ୍‌ମା) ର ଚିକିତ୍ସା ମାଗଣାରେ ମିଳେ କି?",
          "answer": "ହଁ, ନିରାମୟ ଯୋଜନା ଓ ବିଜୁ ସ୍ୱାସ୍ଥ୍ୟ କଲ୍ୟାଣ ଯୋଜନାରେ ସମସ୍ତ ସରକାରୀ ଡାକ୍ତରଖାନାରେ ମାଗଣା ପରୀକ୍ଷା ଓ ଔଷଧ ଉପଲବ୍ଧ।"
        },
        {
          "question": "କେବେ ଡାକ୍ତରଖାନା ଯିବା ଉଚିତ?",
          "answer": "ଗୁରୁତର ଲକ୍ଷଣ ଦେଖାଦେବା ମାତ୍ରେ ତୁରନ୍ତ ଡାକ୍ତରଖାନା ଯିବା ଉଚିତ।"
        }
      ]
    }
  },
  {
    "id": "dis-57-conjunctivitis-eye-flu-chakhyuroga-",
    "category": "ENT & Eye Care",
    "severity": "Mild",
    "transmission": "Viral/bacterial contact through fingers, towels, water",
    "en": {
      "name": "Conjunctivitis / Eye Flu (Chakhyuroga) - Grade 2",
      "overview": "Detailed clinical guidance, prevention, and government health support in Odisha for Conjunctivitis / Eye Flu (Chakhyuroga).",
      "symptoms": [
        "Primary localized pain, fever, or discomfort",
        "Fatigue and reduced physical stamina",
        "Loss of normal appetite and mild headache",
        "Associated diagnostic clinical signs specific to condition"
      ],
      "causes": [
        "Etiological factors and environmental exposure related to Conjunctivitis / Eye Flu (Chakhyuroga)",
        "Unfavorable seasonal conditions or unhygienic community environment",
        "Nutritional or metabolic susceptibility factors"
      ],
      "treatments": [
        "Evidence-based pharmacotherapy prescribed by medical officer",
        "Adequate fluid intake, nutritious diet, and supportive care",
        "Free treatment and diagnostic screening available at Odisha CHCs and DHHs"
      ],
      "prevention": [
        "Maintain strict personal, domestic, and water hygiene",
        "Adhere to public health department guidelines and advisories",
        "Timely immunization and regular screening visits"
      ],
      "dos": [
        "Consult a qualified medical officer at early onset of symptoms",
        "Complete the prescribed medical regimen without skipping doses",
        "Maintain clean drinking water and well-balanced nutrition"
      ],
      "donts": [
        "Do not self-medicate or purchase unverified over-the-counter drugs",
        "Do not delay seeking medical care if red flag symptoms emerge",
        "Do not consume unhygienic or contaminated food and water"
      ],
      "whenToSeeDoctor": [
        "High continuous fever not responding to antipyretics",
        "Breathing difficulty, extreme fatigue, or fainting",
        "Inability to eat or drink oral fluids"
      ],
      "faqs": [
        {
          "question": "Is treatment for Conjunctivitis / Eye Flu (Chakhyuroga) available free in Odisha?",
          "answer": "Yes, under Niramaya scheme and BSKY, free diagnostics and medicines are provided across Odisha government facilities."
        },
        {
          "question": "When should one visit the nearest hospital?",
          "answer": "Visit the hospital at first onset of severe symptoms or if home recovery is slow after 48 hours."
        }
      ]
    },
    "or": {
      "name": "ଆଖି ଧରିବା (ଚକ୍ଷୁରୋଗ / ଆଇ ଫ୍ଲୁ) (ପର୍ଯ୍ୟାୟ 2)",
      "nativeName": "ଆଖି ଧରିବା (ଚକ୍ଷୁରୋଗ / ଆଇ ଫ୍ଲୁ)",
      "overview": "ଓଡ଼ିଶାର ଜନସାଧାରଣଙ୍କ ପାଇଁ ଆଖି ଧରିବା (ଚକ୍ଷୁରୋଗ / ଆଇ ଫ୍ଲୁ) ର ଡାକ୍ତରୀ ମାର୍ଗଦର୍ଶନ, ପ୍ରତିରୋଧ ଓ ସରକାରୀ ସହାୟତା।",
      "symptoms": [
        "ସ୍ଥାନୀୟ ଯନ୍ତ୍ରଣା, ଜ୍ୱର ବା ଅସ୍ୱସ୍ତି ଭାବ",
        "ଦୁର୍ବଳତା ଏବଂ ଶରୀରରେ ଶକ୍ତିର ଅଭାବ",
        "ଭୋକ କମିବା ଏବଂ ମୁଣ୍ଡବିନ୍ଧା",
        "ରୋଗ ସମ୍ପର୍କିତ ସାଧାରଣ ଡାକ୍ତରୀ ଲକ୍ଷଣ"
      ],
      "causes": [
        "ଆଖି ଧରିବା (ଚକ୍ଷୁରୋଗ / ଆଇ ଫ୍ଲୁ) ସମ୍ପର୍କିତ ପରିବେଶ ଓ ଜୀବାଣୁଜନିତ କାରଣ",
        "ଋତୁକାଳୀନ ପ୍ରତିକୂଳ ପାଗ ବା ଅପରିଷ୍କାର ପରିବେଶ",
        "ପୁଷ୍ଟିହୀନତା ବା ରୋଗ ପ୍ରତିରୋଧକ ଶକ୍ତିର ଅଭାବ"
      ],
      "treatments": [
        "ଡାକ୍ତରଙ୍କ ପରାମର୍ଶ ଅନୁଯାୟୀ ପ୍ରମାଣିତ ଔଷଧ ସେବନ",
        "ପର୍ଯ୍ୟାପ୍ତ ପାଣି ପିଇବା, ପୁଷ୍ଟିକର ଖାଦ୍ୟ ଓ ବିଶ୍ରାମ",
        "ଓଡ଼ିଶା ସରକାରୀ ଡାକ୍ତରଖାନାରେ ମାଗଣା ଚିକିତ୍ସା ଓ ପରୀକ୍ଷା"
      ],
      "prevention": [
        "ବ୍ୟକ୍ତିଗତ ଓ ପରିବେଶ ପରିମଳ ସର୍ବଦା ବଜାୟ ରଖନ୍ତୁ",
        "ସ୍ୱାସ୍ଥ୍ୟ ବିଭାଗର ନିର୍ଦ୍ଦେଶାବଳୀ ପାଳନ କରନ୍ତୁ",
        "ସମୟ ଅନୁଯାୟୀ ଟିକାକରଣ ଓ ସ୍ୱାସ୍ଥ୍ୟ ଯାଞ୍ଚ କରାନ୍ତୁ"
      ],
      "dos": [
        "ଲକ୍ଷଣ ଦେଖାଦେବା ମାତ୍ରେ ଡାକ୍ତରଙ୍କ ସହ ପରାମର୍ଶ କରନ୍ତୁ",
        "ଡାକ୍ତର ଦେଇଥିବା ଔଷଧ କୋର୍ସ ସମ୍ପୂର୍ଣ୍ଣ ଶେଷ କରନ୍ତୁ",
        "ଫୁଟା ପାଣି ଓ ପୁଷ୍ଟିକର ଖାଦ୍ୟ ଖାଆନ୍ତୁ"
      ],
      "donts": [
        "ଡାକ୍ତରଙ୍କ ବିନା ପରାମର୍ଶରେ ମେଡିସିନ୍ ଦୋକାନରୁ ଔଷଧ ଖାଆନ୍ତୁ ନାହିଁ",
        "ଗୁରୁତର ଲକ୍ଷଣ ଥିଲେ ଡାକ୍ତରଖାନା ଯିବାରେ ଡେରି କରନ୍ତୁ ନାହିଁ",
        "ଅପରିଷ୍କାର ଓ ବାସି ଖାଦ୍ୟ ଖାଆନ୍ତୁ ନାହିଁ"
      ],
      "whenToSeeDoctor": [
        "ଲଗାତାର ତେଜ ଜ୍ୱର ଲାଗିରହିଲେ",
        "ନିଶ୍ୱାସ ନେବାରେ କଷ୍ଟ ହେଲେ ବା ଚେତା ହରାଇଲେ",
        "ପାଣି ପିଇ ନପାରିଲେ ବା ବାରମ୍ବାର ବାନ୍ତି ହେଲେ"
      ],
      "faqs": [
        {
          "question": "ଓଡ଼ିଶାରେ ଆଖି ଧରିବା (ଚକ୍ଷୁରୋଗ / ଆଇ ଫ୍ଲୁ) ର ଚିକିତ୍ସା ମାଗଣାରେ ମିଳେ କି?",
          "answer": "ହଁ, ନିରାମୟ ଯୋଜନା ଓ ବିଜୁ ସ୍ୱାସ୍ଥ୍ୟ କଲ୍ୟାଣ ଯୋଜନାରେ ସମସ୍ତ ସରକାରୀ ଡାକ୍ତରଖାନାରେ ମାଗଣା ପରୀକ୍ଷା ଓ ଔଷଧ ଉପଲବ୍ଧ।"
        },
        {
          "question": "କେବେ ଡାକ୍ତରଖାନା ଯିବା ଉଚିତ?",
          "answer": "ଗୁରୁତର ଲକ୍ଷଣ ଦେଖାଦେବା ମାତ୍ରେ ତୁରନ୍ତ ଡାକ୍ତରଖାନା ଯିବା ଉଚିତ।"
        }
      ]
    }
  },
  {
    "id": "dis-58-chickenpox-pani-photaka-milamila-",
    "category": "Viral Infection",
    "severity": "Moderate",
    "transmission": "Varicella zoster airborne respiratory droplets and blisters",
    "en": {
      "name": "Chickenpox (Pani Photaka / Milamila) - Grade 2",
      "overview": "Detailed clinical guidance, prevention, and government health support in Odisha for Chickenpox (Pani Photaka / Milamila).",
      "symptoms": [
        "Primary localized pain, fever, or discomfort",
        "Fatigue and reduced physical stamina",
        "Loss of normal appetite and mild headache",
        "Associated diagnostic clinical signs specific to condition"
      ],
      "causes": [
        "Etiological factors and environmental exposure related to Chickenpox (Pani Photaka / Milamila)",
        "Unfavorable seasonal conditions or unhygienic community environment",
        "Nutritional or metabolic susceptibility factors"
      ],
      "treatments": [
        "Evidence-based pharmacotherapy prescribed by medical officer",
        "Adequate fluid intake, nutritious diet, and supportive care",
        "Free treatment and diagnostic screening available at Odisha CHCs and DHHs"
      ],
      "prevention": [
        "Maintain strict personal, domestic, and water hygiene",
        "Adhere to public health department guidelines and advisories",
        "Timely immunization and regular screening visits"
      ],
      "dos": [
        "Consult a qualified medical officer at early onset of symptoms",
        "Complete the prescribed medical regimen without skipping doses",
        "Maintain clean drinking water and well-balanced nutrition"
      ],
      "donts": [
        "Do not self-medicate or purchase unverified over-the-counter drugs",
        "Do not delay seeking medical care if red flag symptoms emerge",
        "Do not consume unhygienic or contaminated food and water"
      ],
      "whenToSeeDoctor": [
        "High continuous fever not responding to antipyretics",
        "Breathing difficulty, extreme fatigue, or fainting",
        "Inability to eat or drink oral fluids"
      ],
      "faqs": [
        {
          "question": "Is treatment for Chickenpox (Pani Photaka / Milamila) available free in Odisha?",
          "answer": "Yes, under Niramaya scheme and BSKY, free diagnostics and medicines are provided across Odisha government facilities."
        },
        {
          "question": "When should one visit the nearest hospital?",
          "answer": "Visit the hospital at first onset of severe symptoms or if home recovery is slow after 48 hours."
        }
      ]
    },
    "or": {
      "name": "ପାଣି ଫୋଟକା (ଚିକେନପକ୍ସ) (ପର୍ଯ୍ୟାୟ 2)",
      "nativeName": "ପାଣି ଫୋଟକା (ଚିକେନପକ୍ସ)",
      "overview": "ଓଡ଼ିଶାର ଜନସାଧାରଣଙ୍କ ପାଇଁ ପାଣି ଫୋଟକା (ଚିକେନପକ୍ସ) ର ଡାକ୍ତରୀ ମାର୍ଗଦର୍ଶନ, ପ୍ରତିରୋଧ ଓ ସରକାରୀ ସହାୟତା।",
      "symptoms": [
        "ସ୍ଥାନୀୟ ଯନ୍ତ୍ରଣା, ଜ୍ୱର ବା ଅସ୍ୱସ୍ତି ଭାବ",
        "ଦୁର୍ବଳତା ଏବଂ ଶରୀରରେ ଶକ୍ତିର ଅଭାବ",
        "ଭୋକ କମିବା ଏବଂ ମୁଣ୍ଡବିନ୍ଧା",
        "ରୋଗ ସମ୍ପର୍କିତ ସାଧାରଣ ଡାକ୍ତରୀ ଲକ୍ଷଣ"
      ],
      "causes": [
        "ପାଣି ଫୋଟକା (ଚିକେନପକ୍ସ) ସମ୍ପର୍କିତ ପରିବେଶ ଓ ଜୀବାଣୁଜନିତ କାରଣ",
        "ଋତୁକାଳୀନ ପ୍ରତିକୂଳ ପାଗ ବା ଅପରିଷ୍କାର ପରିବେଶ",
        "ପୁଷ୍ଟିହୀନତା ବା ରୋଗ ପ୍ରତିରୋଧକ ଶକ୍ତିର ଅଭାବ"
      ],
      "treatments": [
        "ଡାକ୍ତରଙ୍କ ପରାମର୍ଶ ଅନୁଯାୟୀ ପ୍ରମାଣିତ ଔଷଧ ସେବନ",
        "ପର୍ଯ୍ୟାପ୍ତ ପାଣି ପିଇବା, ପୁଷ୍ଟିକର ଖାଦ୍ୟ ଓ ବିଶ୍ରାମ",
        "ଓଡ଼ିଶା ସରକାରୀ ଡାକ୍ତରଖାନାରେ ମାଗଣା ଚିକିତ୍ସା ଓ ପରୀକ୍ଷା"
      ],
      "prevention": [
        "ବ୍ୟକ୍ତିଗତ ଓ ପରିବେଶ ପରିମଳ ସର୍ବଦା ବଜାୟ ରଖନ୍ତୁ",
        "ସ୍ୱାସ୍ଥ୍ୟ ବିଭାଗର ନିର୍ଦ୍ଦେଶାବଳୀ ପାଳନ କରନ୍ତୁ",
        "ସମୟ ଅନୁଯାୟୀ ଟିକାକରଣ ଓ ସ୍ୱାସ୍ଥ୍ୟ ଯାଞ୍ଚ କରାନ୍ତୁ"
      ],
      "dos": [
        "ଲକ୍ଷଣ ଦେଖାଦେବା ମାତ୍ରେ ଡାକ୍ତରଙ୍କ ସହ ପରାମର୍ଶ କରନ୍ତୁ",
        "ଡାକ୍ତର ଦେଇଥିବା ଔଷଧ କୋର୍ସ ସମ୍ପୂର୍ଣ୍ଣ ଶେଷ କରନ୍ତୁ",
        "ଫୁଟା ପାଣି ଓ ପୁଷ୍ଟିକର ଖାଦ୍ୟ ଖାଆନ୍ତୁ"
      ],
      "donts": [
        "ଡାକ୍ତରଙ୍କ ବିନା ପରାମର୍ଶରେ ମେଡିସିନ୍ ଦୋକାନରୁ ଔଷଧ ଖାଆନ୍ତୁ ନାହିଁ",
        "ଗୁରୁତର ଲକ୍ଷଣ ଥିଲେ ଡାକ୍ତରଖାନା ଯିବାରେ ଡେରି କରନ୍ତୁ ନାହିଁ",
        "ଅପରିଷ୍କାର ଓ ବାସି ଖାଦ୍ୟ ଖାଆନ୍ତୁ ନାହିଁ"
      ],
      "whenToSeeDoctor": [
        "ଲଗାତାର ତେଜ ଜ୍ୱର ଲାଗିରହିଲେ",
        "ନିଶ୍ୱାସ ନେବାରେ କଷ୍ଟ ହେଲେ ବା ଚେତା ହରାଇଲେ",
        "ପାଣି ପିଇ ନପାରିଲେ ବା ବାରମ୍ବାର ବାନ୍ତି ହେଲେ"
      ],
      "faqs": [
        {
          "question": "ଓଡ଼ିଶାରେ ପାଣି ଫୋଟକା (ଚିକେନପକ୍ସ) ର ଚିକିତ୍ସା ମାଗଣାରେ ମିଳେ କି?",
          "answer": "ହଁ, ନିରାମୟ ଯୋଜନା ଓ ବିଜୁ ସ୍ୱାସ୍ଥ୍ୟ କଲ୍ୟାଣ ଯୋଜନାରେ ସମସ୍ତ ସରକାରୀ ଡାକ୍ତରଖାନାରେ ମାଗଣା ପରୀକ୍ଷା ଓ ଔଷଧ ଉପଲବ୍ଧ।"
        },
        {
          "question": "କେବେ ଡାକ୍ତରଖାନା ଯିବା ଉଚିତ?",
          "answer": "ଗୁରୁତର ଲକ୍ଷଣ ଦେଖାଦେବା ମାତ୍ରେ ତୁରନ୍ତ ଡାକ୍ତରଖାନା ଯିବା ଉଚିତ।"
        }
      ]
    }
  },
  {
    "id": "dis-59-measles-milamila-rubeola-",
    "category": "Maternal & Child",
    "severity": "High",
    "transmission": "Airborne virus droplets in unvaccinated children",
    "en": {
      "name": "Measles (Milamila / Rubeola) - Grade 2",
      "overview": "Detailed clinical guidance, prevention, and government health support in Odisha for Measles (Milamila / Rubeola).",
      "symptoms": [
        "Primary localized pain, fever, or discomfort",
        "Fatigue and reduced physical stamina",
        "Loss of normal appetite and mild headache",
        "Associated diagnostic clinical signs specific to condition"
      ],
      "causes": [
        "Etiological factors and environmental exposure related to Measles (Milamila / Rubeola)",
        "Unfavorable seasonal conditions or unhygienic community environment",
        "Nutritional or metabolic susceptibility factors"
      ],
      "treatments": [
        "Evidence-based pharmacotherapy prescribed by medical officer",
        "Adequate fluid intake, nutritious diet, and supportive care",
        "Free treatment and diagnostic screening available at Odisha CHCs and DHHs"
      ],
      "prevention": [
        "Maintain strict personal, domestic, and water hygiene",
        "Adhere to public health department guidelines and advisories",
        "Timely immunization and regular screening visits"
      ],
      "dos": [
        "Consult a qualified medical officer at early onset of symptoms",
        "Complete the prescribed medical regimen without skipping doses",
        "Maintain clean drinking water and well-balanced nutrition"
      ],
      "donts": [
        "Do not self-medicate or purchase unverified over-the-counter drugs",
        "Do not delay seeking medical care if red flag symptoms emerge",
        "Do not consume unhygienic or contaminated food and water"
      ],
      "whenToSeeDoctor": [
        "High continuous fever not responding to antipyretics",
        "Breathing difficulty, extreme fatigue, or fainting",
        "Inability to eat or drink oral fluids"
      ],
      "faqs": [
        {
          "question": "Is treatment for Measles (Milamila / Rubeola) available free in Odisha?",
          "answer": "Yes, under Niramaya scheme and BSKY, free diagnostics and medicines are provided across Odisha government facilities."
        },
        {
          "question": "When should one visit the nearest hospital?",
          "answer": "Visit the hospital at first onset of severe symptoms or if home recovery is slow after 48 hours."
        }
      ]
    },
    "or": {
      "name": "ମିଳିମିଳା (ମିଜିଲ୍ସ) (ପର୍ଯ୍ୟାୟ 2)",
      "nativeName": "ମିଳିମିଳା (ମିଜିଲ୍ସ)",
      "overview": "ଓଡ଼ିଶାର ଜନସାଧାରଣଙ୍କ ପାଇଁ ମିଳିମିଳା (ମିଜିଲ୍ସ) ର ଡାକ୍ତରୀ ମାର୍ଗଦର୍ଶନ, ପ୍ରତିରୋଧ ଓ ସରକାରୀ ସହାୟତା।",
      "symptoms": [
        "ସ୍ଥାନୀୟ ଯନ୍ତ୍ରଣା, ଜ୍ୱର ବା ଅସ୍ୱସ୍ତି ଭାବ",
        "ଦୁର୍ବଳତା ଏବଂ ଶରୀରରେ ଶକ୍ତିର ଅଭାବ",
        "ଭୋକ କମିବା ଏବଂ ମୁଣ୍ଡବିନ୍ଧା",
        "ରୋଗ ସମ୍ପର୍କିତ ସାଧାରଣ ଡାକ୍ତରୀ ଲକ୍ଷଣ"
      ],
      "causes": [
        "ମିଳିମିଳା (ମିଜିଲ୍ସ) ସମ୍ପର୍କିତ ପରିବେଶ ଓ ଜୀବାଣୁଜନିତ କାରଣ",
        "ଋତୁକାଳୀନ ପ୍ରତିକୂଳ ପାଗ ବା ଅପରିଷ୍କାର ପରିବେଶ",
        "ପୁଷ୍ଟିହୀନତା ବା ରୋଗ ପ୍ରତିରୋଧକ ଶକ୍ତିର ଅଭାବ"
      ],
      "treatments": [
        "ଡାକ୍ତରଙ୍କ ପରାମର୍ଶ ଅନୁଯାୟୀ ପ୍ରମାଣିତ ଔଷଧ ସେବନ",
        "ପର୍ଯ୍ୟାପ୍ତ ପାଣି ପିଇବା, ପୁଷ୍ଟିକର ଖାଦ୍ୟ ଓ ବିଶ୍ରାମ",
        "ଓଡ଼ିଶା ସରକାରୀ ଡାକ୍ତରଖାନାରେ ମାଗଣା ଚିକିତ୍ସା ଓ ପରୀକ୍ଷା"
      ],
      "prevention": [
        "ବ୍ୟକ୍ତିଗତ ଓ ପରିବେଶ ପରିମଳ ସର୍ବଦା ବଜାୟ ରଖନ୍ତୁ",
        "ସ୍ୱାସ୍ଥ୍ୟ ବିଭାଗର ନିର୍ଦ୍ଦେଶାବଳୀ ପାଳନ କରନ୍ତୁ",
        "ସମୟ ଅନୁଯାୟୀ ଟିକାକରଣ ଓ ସ୍ୱାସ୍ଥ୍ୟ ଯାଞ୍ଚ କରାନ୍ତୁ"
      ],
      "dos": [
        "ଲକ୍ଷଣ ଦେଖାଦେବା ମାତ୍ରେ ଡାକ୍ତରଙ୍କ ସହ ପରାମର୍ଶ କରନ୍ତୁ",
        "ଡାକ୍ତର ଦେଇଥିବା ଔଷଧ କୋର୍ସ ସମ୍ପୂର୍ଣ୍ଣ ଶେଷ କରନ୍ତୁ",
        "ଫୁଟା ପାଣି ଓ ପୁଷ୍ଟିକର ଖାଦ୍ୟ ଖାଆନ୍ତୁ"
      ],
      "donts": [
        "ଡାକ୍ତରଙ୍କ ବିନା ପରାମର୍ଶରେ ମେଡିସିନ୍ ଦୋକାନରୁ ଔଷଧ ଖାଆନ୍ତୁ ନାହିଁ",
        "ଗୁରୁତର ଲକ୍ଷଣ ଥିଲେ ଡାକ୍ତରଖାନା ଯିବାରେ ଡେରି କରନ୍ତୁ ନାହିଁ",
        "ଅପରିଷ୍କାର ଓ ବାସି ଖାଦ୍ୟ ଖାଆନ୍ତୁ ନାହିଁ"
      ],
      "whenToSeeDoctor": [
        "ଲଗାତାର ତେଜ ଜ୍ୱର ଲାଗିରହିଲେ",
        "ନିଶ୍ୱାସ ନେବାରେ କଷ୍ଟ ହେଲେ ବା ଚେତା ହରାଇଲେ",
        "ପାଣି ପିଇ ନପାରିଲେ ବା ବାରମ୍ବାର ବାନ୍ତି ହେଲେ"
      ],
      "faqs": [
        {
          "question": "ଓଡ଼ିଶାରେ ମିଳିମିଳା (ମିଜିଲ୍ସ) ର ଚିକିତ୍ସା ମାଗଣାରେ ମିଳେ କି?",
          "answer": "ହଁ, ନିରାମୟ ଯୋଜନା ଓ ବିଜୁ ସ୍ୱାସ୍ଥ୍ୟ କଲ୍ୟାଣ ଯୋଜନାରେ ସମସ୍ତ ସରକାରୀ ଡାକ୍ତରଖାନାରେ ମାଗଣା ପରୀକ୍ଷା ଓ ଔଷଧ ଉପଲବ୍ଧ।"
        },
        {
          "question": "କେବେ ଡାକ୍ତରଖାନା ଯିବା ଉଚିତ?",
          "answer": "ଗୁରୁତର ଲକ୍ଷଣ ଦେଖାଦେବା ମାତ୍ରେ ତୁରନ୍ତ ଡାକ୍ତରଖାନା ଯିବା ଉଚିତ।"
        }
      ]
    }
  },
  {
    "id": "dis-60-mumps-galagandi-parotitis-",
    "category": "Viral Infection",
    "severity": "Mild",
    "transmission": "Airborne saliva droplets",
    "en": {
      "name": "Mumps (Galagandi / Parotitis) - Grade 2",
      "overview": "Detailed clinical guidance, prevention, and government health support in Odisha for Mumps (Galagandi / Parotitis).",
      "symptoms": [
        "Primary localized pain, fever, or discomfort",
        "Fatigue and reduced physical stamina",
        "Loss of normal appetite and mild headache",
        "Associated diagnostic clinical signs specific to condition"
      ],
      "causes": [
        "Etiological factors and environmental exposure related to Mumps (Galagandi / Parotitis)",
        "Unfavorable seasonal conditions or unhygienic community environment",
        "Nutritional or metabolic susceptibility factors"
      ],
      "treatments": [
        "Evidence-based pharmacotherapy prescribed by medical officer",
        "Adequate fluid intake, nutritious diet, and supportive care",
        "Free treatment and diagnostic screening available at Odisha CHCs and DHHs"
      ],
      "prevention": [
        "Maintain strict personal, domestic, and water hygiene",
        "Adhere to public health department guidelines and advisories",
        "Timely immunization and regular screening visits"
      ],
      "dos": [
        "Consult a qualified medical officer at early onset of symptoms",
        "Complete the prescribed medical regimen without skipping doses",
        "Maintain clean drinking water and well-balanced nutrition"
      ],
      "donts": [
        "Do not self-medicate or purchase unverified over-the-counter drugs",
        "Do not delay seeking medical care if red flag symptoms emerge",
        "Do not consume unhygienic or contaminated food and water"
      ],
      "whenToSeeDoctor": [
        "High continuous fever not responding to antipyretics",
        "Breathing difficulty, extreme fatigue, or fainting",
        "Inability to eat or drink oral fluids"
      ],
      "faqs": [
        {
          "question": "Is treatment for Mumps (Galagandi / Parotitis) available free in Odisha?",
          "answer": "Yes, under Niramaya scheme and BSKY, free diagnostics and medicines are provided across Odisha government facilities."
        },
        {
          "question": "When should one visit the nearest hospital?",
          "answer": "Visit the hospital at first onset of severe symptoms or if home recovery is slow after 48 hours."
        }
      ]
    },
    "or": {
      "name": "ଗାଲଫୁଲା (ଗଳଗଣ୍ଡ / ମମ୍ପସ୍) (ପର୍ଯ୍ୟାୟ 2)",
      "nativeName": "ଗାଲଫୁଲା (ଗଳଗଣ୍ଡ / ମମ୍ପସ୍)",
      "overview": "ଓଡ଼ିଶାର ଜନସାଧାରଣଙ୍କ ପାଇଁ ଗାଲଫୁଲା (ଗଳଗଣ୍ଡ / ମମ୍ପସ୍) ର ଡାକ୍ତରୀ ମାର୍ଗଦର୍ଶନ, ପ୍ରତିରୋଧ ଓ ସରକାରୀ ସହାୟତା।",
      "symptoms": [
        "ସ୍ଥାନୀୟ ଯନ୍ତ୍ରଣା, ଜ୍ୱର ବା ଅସ୍ୱସ୍ତି ଭାବ",
        "ଦୁର୍ବଳତା ଏବଂ ଶରୀରରେ ଶକ୍ତିର ଅଭାବ",
        "ଭୋକ କମିବା ଏବଂ ମୁଣ୍ଡବିନ୍ଧା",
        "ରୋଗ ସମ୍ପର୍କିତ ସାଧାରଣ ଡାକ୍ତରୀ ଲକ୍ଷଣ"
      ],
      "causes": [
        "ଗାଲଫୁଲା (ଗଳଗଣ୍ଡ / ମମ୍ପସ୍) ସମ୍ପର୍କିତ ପରିବେଶ ଓ ଜୀବାଣୁଜନିତ କାରଣ",
        "ଋତୁକାଳୀନ ପ୍ରତିକୂଳ ପାଗ ବା ଅପରିଷ୍କାର ପରିବେଶ",
        "ପୁଷ୍ଟିହୀନତା ବା ରୋଗ ପ୍ରତିରୋଧକ ଶକ୍ତିର ଅଭାବ"
      ],
      "treatments": [
        "ଡାକ୍ତରଙ୍କ ପରାମର୍ଶ ଅନୁଯାୟୀ ପ୍ରମାଣିତ ଔଷଧ ସେବନ",
        "ପର୍ଯ୍ୟାପ୍ତ ପାଣି ପିଇବା, ପୁଷ୍ଟିକର ଖାଦ୍ୟ ଓ ବିଶ୍ରାମ",
        "ଓଡ଼ିଶା ସରକାରୀ ଡାକ୍ତରଖାନାରେ ମାଗଣା ଚିକିତ୍ସା ଓ ପରୀକ୍ଷା"
      ],
      "prevention": [
        "ବ୍ୟକ୍ତିଗତ ଓ ପରିବେଶ ପରିମଳ ସର୍ବଦା ବଜାୟ ରଖନ୍ତୁ",
        "ସ୍ୱାସ୍ଥ୍ୟ ବିଭାଗର ନିର୍ଦ୍ଦେଶାବଳୀ ପାଳନ କରନ୍ତୁ",
        "ସମୟ ଅନୁଯାୟୀ ଟିକାକରଣ ଓ ସ୍ୱାସ୍ଥ୍ୟ ଯାଞ୍ଚ କରାନ୍ତୁ"
      ],
      "dos": [
        "ଲକ୍ଷଣ ଦେଖାଦେବା ମାତ୍ରେ ଡାକ୍ତରଙ୍କ ସହ ପରାମର୍ଶ କରନ୍ତୁ",
        "ଡାକ୍ତର ଦେଇଥିବା ଔଷଧ କୋର୍ସ ସମ୍ପୂର୍ଣ୍ଣ ଶେଷ କରନ୍ତୁ",
        "ଫୁଟା ପାଣି ଓ ପୁଷ୍ଟିକର ଖାଦ୍ୟ ଖାଆନ୍ତୁ"
      ],
      "donts": [
        "ଡାକ୍ତରଙ୍କ ବିନା ପରାମର୍ଶରେ ମେଡିସିନ୍ ଦୋକାନରୁ ଔଷଧ ଖାଆନ୍ତୁ ନାହିଁ",
        "ଗୁରୁତର ଲକ୍ଷଣ ଥିଲେ ଡାକ୍ତରଖାନା ଯିବାରେ ଡେରି କରନ୍ତୁ ନାହିଁ",
        "ଅପରିଷ୍କାର ଓ ବାସି ଖାଦ୍ୟ ଖାଆନ୍ତୁ ନାହିଁ"
      ],
      "whenToSeeDoctor": [
        "ଲଗାତାର ତେଜ ଜ୍ୱର ଲାଗିରହିଲେ",
        "ନିଶ୍ୱାସ ନେବାରେ କଷ୍ଟ ହେଲେ ବା ଚେତା ହରାଇଲେ",
        "ପାଣି ପିଇ ନପାରିଲେ ବା ବାରମ୍ବାର ବାନ୍ତି ହେଲେ"
      ],
      "faqs": [
        {
          "question": "ଓଡ଼ିଶାରେ ଗାଲଫୁଲା (ଗଳଗଣ୍ଡ / ମମ୍ପସ୍) ର ଚିକିତ୍ସା ମାଗଣାରେ ମିଳେ କି?",
          "answer": "ହଁ, ନିରାମୟ ଯୋଜନା ଓ ବିଜୁ ସ୍ୱାସ୍ଥ୍ୟ କଲ୍ୟାଣ ଯୋଜନାରେ ସମସ୍ତ ସରକାରୀ ଡାକ୍ତରଖାନାରେ ମାଗଣା ପରୀକ୍ଷା ଓ ଔଷଧ ଉପଲବ୍ଧ।"
        },
        {
          "question": "କେବେ ଡାକ୍ତରଖାନା ଯିବା ଉଚିତ?",
          "answer": "ଗୁରୁତର ଲକ୍ଷଣ ଦେଖାଦେବା ମାତ୍ରେ ତୁରନ୍ତ ଡାକ୍ତରଖାନା ଯିବା ଉଚିତ।"
        }
      ]
    }
  },
  {
    "id": "dis-61-tonsillitis-strep-pharyngitis",
    "category": "ENT & Eye Care",
    "severity": "Mild",
    "transmission": "Bacterial/viral throat droplet transmission",
    "en": {
      "name": "Tonsillitis & Strep Pharyngitis - Grade 2",
      "overview": "Detailed clinical guidance, prevention, and government health support in Odisha for Tonsillitis & Strep Pharyngitis.",
      "symptoms": [
        "Primary localized pain, fever, or discomfort",
        "Fatigue and reduced physical stamina",
        "Loss of normal appetite and mild headache",
        "Associated diagnostic clinical signs specific to condition"
      ],
      "causes": [
        "Etiological factors and environmental exposure related to Tonsillitis & Strep Pharyngitis",
        "Unfavorable seasonal conditions or unhygienic community environment",
        "Nutritional or metabolic susceptibility factors"
      ],
      "treatments": [
        "Evidence-based pharmacotherapy prescribed by medical officer",
        "Adequate fluid intake, nutritious diet, and supportive care",
        "Free treatment and diagnostic screening available at Odisha CHCs and DHHs"
      ],
      "prevention": [
        "Maintain strict personal, domestic, and water hygiene",
        "Adhere to public health department guidelines and advisories",
        "Timely immunization and regular screening visits"
      ],
      "dos": [
        "Consult a qualified medical officer at early onset of symptoms",
        "Complete the prescribed medical regimen without skipping doses",
        "Maintain clean drinking water and well-balanced nutrition"
      ],
      "donts": [
        "Do not self-medicate or purchase unverified over-the-counter drugs",
        "Do not delay seeking medical care if red flag symptoms emerge",
        "Do not consume unhygienic or contaminated food and water"
      ],
      "whenToSeeDoctor": [
        "High continuous fever not responding to antipyretics",
        "Breathing difficulty, extreme fatigue, or fainting",
        "Inability to eat or drink oral fluids"
      ],
      "faqs": [
        {
          "question": "Is treatment for Tonsillitis & Strep Pharyngitis available free in Odisha?",
          "answer": "Yes, under Niramaya scheme and BSKY, free diagnostics and medicines are provided across Odisha government facilities."
        },
        {
          "question": "When should one visit the nearest hospital?",
          "answer": "Visit the hospital at first onset of severe symptoms or if home recovery is slow after 48 hours."
        }
      ]
    },
    "or": {
      "name": "ଟନସିଲ୍ ପ୍ରଦାହ (ଗଳା ଯନ୍ତ୍ରଣା) (ପର୍ଯ୍ୟାୟ 2)",
      "nativeName": "ଟନସିଲ୍ ପ୍ରଦାହ (ଗଳା ଯନ୍ତ୍ରଣା)",
      "overview": "ଓଡ଼ିଶାର ଜନସାଧାରଣଙ୍କ ପାଇଁ ଟନସିଲ୍ ପ୍ରଦାହ (ଗଳା ଯନ୍ତ୍ରଣା) ର ଡାକ୍ତରୀ ମାର୍ଗଦର୍ଶନ, ପ୍ରତିରୋଧ ଓ ସରକାରୀ ସହାୟତା।",
      "symptoms": [
        "ସ୍ଥାନୀୟ ଯନ୍ତ୍ରଣା, ଜ୍ୱର ବା ଅସ୍ୱସ୍ତି ଭାବ",
        "ଦୁର୍ବଳତା ଏବଂ ଶରୀରରେ ଶକ୍ତିର ଅଭାବ",
        "ଭୋକ କମିବା ଏବଂ ମୁଣ୍ଡବିନ୍ଧା",
        "ରୋଗ ସମ୍ପର୍କିତ ସାଧାରଣ ଡାକ୍ତରୀ ଲକ୍ଷଣ"
      ],
      "causes": [
        "ଟନସିଲ୍ ପ୍ରଦାହ (ଗଳା ଯନ୍ତ୍ରଣା) ସମ୍ପର୍କିତ ପରିବେଶ ଓ ଜୀବାଣୁଜନିତ କାରଣ",
        "ଋତୁକାଳୀନ ପ୍ରତିକୂଳ ପାଗ ବା ଅପରିଷ୍କାର ପରିବେଶ",
        "ପୁଷ୍ଟିହୀନତା ବା ରୋଗ ପ୍ରତିରୋଧକ ଶକ୍ତିର ଅଭାବ"
      ],
      "treatments": [
        "ଡାକ୍ତରଙ୍କ ପରାମର୍ଶ ଅନୁଯାୟୀ ପ୍ରମାଣିତ ଔଷଧ ସେବନ",
        "ପର୍ଯ୍ୟାପ୍ତ ପାଣି ପିଇବା, ପୁଷ୍ଟିକର ଖାଦ୍ୟ ଓ ବିଶ୍ରାମ",
        "ଓଡ଼ିଶା ସରକାରୀ ଡାକ୍ତରଖାନାରେ ମାଗଣା ଚିକିତ୍ସା ଓ ପରୀକ୍ଷା"
      ],
      "prevention": [
        "ବ୍ୟକ୍ତିଗତ ଓ ପରିବେଶ ପରିମଳ ସର୍ବଦା ବଜାୟ ରଖନ୍ତୁ",
        "ସ୍ୱାସ୍ଥ୍ୟ ବିଭାଗର ନିର୍ଦ୍ଦେଶାବଳୀ ପାଳନ କରନ୍ତୁ",
        "ସମୟ ଅନୁଯାୟୀ ଟିକାକରଣ ଓ ସ୍ୱାସ୍ଥ୍ୟ ଯାଞ୍ଚ କରାନ୍ତୁ"
      ],
      "dos": [
        "ଲକ୍ଷଣ ଦେଖାଦେବା ମାତ୍ରେ ଡାକ୍ତରଙ୍କ ସହ ପରାମର୍ଶ କରନ୍ତୁ",
        "ଡାକ୍ତର ଦେଇଥିବା ଔଷଧ କୋର୍ସ ସମ୍ପୂର୍ଣ୍ଣ ଶେଷ କରନ୍ତୁ",
        "ଫୁଟା ପାଣି ଓ ପୁଷ୍ଟିକର ଖାଦ୍ୟ ଖାଆନ୍ତୁ"
      ],
      "donts": [
        "ଡାକ୍ତରଙ୍କ ବିନା ପରାମର୍ଶରେ ମେଡିସିନ୍ ଦୋକାନରୁ ଔଷଧ ଖାଆନ୍ତୁ ନାହିଁ",
        "ଗୁରୁତର ଲକ୍ଷଣ ଥିଲେ ଡାକ୍ତରଖାନା ଯିବାରେ ଡେରି କରନ୍ତୁ ନାହିଁ",
        "ଅପରିଷ୍କାର ଓ ବାସି ଖାଦ୍ୟ ଖାଆନ୍ତୁ ନାହିଁ"
      ],
      "whenToSeeDoctor": [
        "ଲଗାତାର ତେଜ ଜ୍ୱର ଲାଗିରହିଲେ",
        "ନିଶ୍ୱାସ ନେବାରେ କଷ୍ଟ ହେଲେ ବା ଚେତା ହରାଇଲେ",
        "ପାଣି ପିଇ ନପାରିଲେ ବା ବାରମ୍ବାର ବାନ୍ତି ହେଲେ"
      ],
      "faqs": [
        {
          "question": "ଓଡ଼ିଶାରେ ଟନସିଲ୍ ପ୍ରଦାହ (ଗଳା ଯନ୍ତ୍ରଣା) ର ଚିକିତ୍ସା ମାଗଣାରେ ମିଳେ କି?",
          "answer": "ହଁ, ନିରାମୟ ଯୋଜନା ଓ ବିଜୁ ସ୍ୱାସ୍ଥ୍ୟ କଲ୍ୟାଣ ଯୋଜନାରେ ସମସ୍ତ ସରକାରୀ ଡାକ୍ତରଖାନାରେ ମାଗଣା ପରୀକ୍ଷା ଓ ଔଷଧ ଉପଲବ୍ଧ।"
        },
        {
          "question": "କେବେ ଡାକ୍ତରଖାନା ଯିବା ଉଚିତ?",
          "answer": "ଗୁରୁତର ଲକ୍ଷଣ ଦେଖାଦେବା ମାତ୍ରେ ତୁରନ୍ତ ଡାକ୍ତରଖାନା ଯିବା ଉଚିତ।"
        }
      ]
    }
  },
  {
    "id": "dis-62-oral-submucous-fibrosis-pan-gutkha-osmf-",
    "category": "Chronic & Lifestyle",
    "severity": "High",
    "transmission": "Chewing areca nut, tobacco, and gutkha",
    "en": {
      "name": "Oral Submucous Fibrosis (Pan / Gutkha OSMF) - Grade 2",
      "overview": "Detailed clinical guidance, prevention, and government health support in Odisha for Oral Submucous Fibrosis (Pan / Gutkha OSMF).",
      "symptoms": [
        "Primary localized pain, fever, or discomfort",
        "Fatigue and reduced physical stamina",
        "Loss of normal appetite and mild headache",
        "Associated diagnostic clinical signs specific to condition"
      ],
      "causes": [
        "Etiological factors and environmental exposure related to Oral Submucous Fibrosis (Pan / Gutkha OSMF)",
        "Unfavorable seasonal conditions or unhygienic community environment",
        "Nutritional or metabolic susceptibility factors"
      ],
      "treatments": [
        "Evidence-based pharmacotherapy prescribed by medical officer",
        "Adequate fluid intake, nutritious diet, and supportive care",
        "Free treatment and diagnostic screening available at Odisha CHCs and DHHs"
      ],
      "prevention": [
        "Maintain strict personal, domestic, and water hygiene",
        "Adhere to public health department guidelines and advisories",
        "Timely immunization and regular screening visits"
      ],
      "dos": [
        "Consult a qualified medical officer at early onset of symptoms",
        "Complete the prescribed medical regimen without skipping doses",
        "Maintain clean drinking water and well-balanced nutrition"
      ],
      "donts": [
        "Do not self-medicate or purchase unverified over-the-counter drugs",
        "Do not delay seeking medical care if red flag symptoms emerge",
        "Do not consume unhygienic or contaminated food and water"
      ],
      "whenToSeeDoctor": [
        "High continuous fever not responding to antipyretics",
        "Breathing difficulty, extreme fatigue, or fainting",
        "Inability to eat or drink oral fluids"
      ],
      "faqs": [
        {
          "question": "Is treatment for Oral Submucous Fibrosis (Pan / Gutkha OSMF) available free in Odisha?",
          "answer": "Yes, under Niramaya scheme and BSKY, free diagnostics and medicines are provided across Odisha government facilities."
        },
        {
          "question": "When should one visit the nearest hospital?",
          "answer": "Visit the hospital at first onset of severe symptoms or if home recovery is slow after 48 hours."
        }
      ]
    },
    "or": {
      "name": "ପାନ/ଗୁଟଖା ଜନିତ ମୁଖ ରୋଗ (OSMF) (ପର୍ଯ୍ୟାୟ 2)",
      "nativeName": "ପାନ/ଗୁଟଖା ଜନିତ ମୁଖ ରୋଗ (OSMF)",
      "overview": "ଓଡ଼ିଶାର ଜନସାଧାରଣଙ୍କ ପାଇଁ ପାନ/ଗୁଟଖା ଜନିତ ମୁଖ ରୋଗ (OSMF) ର ଡାକ୍ତରୀ ମାର୍ଗଦର୍ଶନ, ପ୍ରତିରୋଧ ଓ ସରକାରୀ ସହାୟତା।",
      "symptoms": [
        "ସ୍ଥାନୀୟ ଯନ୍ତ୍ରଣା, ଜ୍ୱର ବା ଅସ୍ୱସ୍ତି ଭାବ",
        "ଦୁର୍ବଳତା ଏବଂ ଶରୀରରେ ଶକ୍ତିର ଅଭାବ",
        "ଭୋକ କମିବା ଏବଂ ମୁଣ୍ଡବିନ୍ଧା",
        "ରୋଗ ସମ୍ପର୍କିତ ସାଧାରଣ ଡାକ୍ତରୀ ଲକ୍ଷଣ"
      ],
      "causes": [
        "ପାନ/ଗୁଟଖା ଜନିତ ମୁଖ ରୋଗ (OSMF) ସମ୍ପର୍କିତ ପରିବେଶ ଓ ଜୀବାଣୁଜନିତ କାରଣ",
        "ଋତୁକାଳୀନ ପ୍ରତିକୂଳ ପାଗ ବା ଅପରିଷ୍କାର ପରିବେଶ",
        "ପୁଷ୍ଟିହୀନତା ବା ରୋଗ ପ୍ରତିରୋଧକ ଶକ୍ତିର ଅଭାବ"
      ],
      "treatments": [
        "ଡାକ୍ତରଙ୍କ ପରାମର୍ଶ ଅନୁଯାୟୀ ପ୍ରମାଣିତ ଔଷଧ ସେବନ",
        "ପର୍ଯ୍ୟାପ୍ତ ପାଣି ପିଇବା, ପୁଷ୍ଟିକର ଖାଦ୍ୟ ଓ ବିଶ୍ରାମ",
        "ଓଡ଼ିଶା ସରକାରୀ ଡାକ୍ତରଖାନାରେ ମାଗଣା ଚିକିତ୍ସା ଓ ପରୀକ୍ଷା"
      ],
      "prevention": [
        "ବ୍ୟକ୍ତିଗତ ଓ ପରିବେଶ ପରିମଳ ସର୍ବଦା ବଜାୟ ରଖନ୍ତୁ",
        "ସ୍ୱାସ୍ଥ୍ୟ ବିଭାଗର ନିର୍ଦ୍ଦେଶାବଳୀ ପାଳନ କରନ୍ତୁ",
        "ସମୟ ଅନୁଯାୟୀ ଟିକାକରଣ ଓ ସ୍ୱାସ୍ଥ୍ୟ ଯାଞ୍ଚ କରାନ୍ତୁ"
      ],
      "dos": [
        "ଲକ୍ଷଣ ଦେଖାଦେବା ମାତ୍ରେ ଡାକ୍ତରଙ୍କ ସହ ପରାମର୍ଶ କରନ୍ତୁ",
        "ଡାକ୍ତର ଦେଇଥିବା ଔଷଧ କୋର୍ସ ସମ୍ପୂର୍ଣ୍ଣ ଶେଷ କରନ୍ତୁ",
        "ଫୁଟା ପାଣି ଓ ପୁଷ୍ଟିକର ଖାଦ୍ୟ ଖାଆନ୍ତୁ"
      ],
      "donts": [
        "ଡାକ୍ତରଙ୍କ ବିନା ପରାମର୍ଶରେ ମେଡିସିନ୍ ଦୋକାନରୁ ଔଷଧ ଖାଆନ୍ତୁ ନାହିଁ",
        "ଗୁରୁତର ଲକ୍ଷଣ ଥିଲେ ଡାକ୍ତରଖାନା ଯିବାରେ ଡେରି କରନ୍ତୁ ନାହିଁ",
        "ଅପରିଷ୍କାର ଓ ବାସି ଖାଦ୍ୟ ଖାଆନ୍ତୁ ନାହିଁ"
      ],
      "whenToSeeDoctor": [
        "ଲଗାତାର ତେଜ ଜ୍ୱର ଲାଗିରହିଲେ",
        "ନିଶ୍ୱାସ ନେବାରେ କଷ୍ଟ ହେଲେ ବା ଚେତା ହରାଇଲେ",
        "ପାଣି ପିଇ ନପାରିଲେ ବା ବାରମ୍ବାର ବାନ୍ତି ହେଲେ"
      ],
      "faqs": [
        {
          "question": "ଓଡ଼ିଶାରେ ପାନ/ଗୁଟଖା ଜନିତ ମୁଖ ରୋଗ (OSMF) ର ଚିକିତ୍ସା ମାଗଣାରେ ମିଳେ କି?",
          "answer": "ହଁ, ନିରାମୟ ଯୋଜନା ଓ ବିଜୁ ସ୍ୱାସ୍ଥ୍ୟ କଲ୍ୟାଣ ଯୋଜନାରେ ସମସ୍ତ ସରକାରୀ ଡାକ୍ତରଖାନାରେ ମାଗଣା ପରୀକ୍ଷା ଓ ଔଷଧ ଉପଲବ୍ଧ।"
        },
        {
          "question": "କେବେ ଡାକ୍ତରଖାନା ଯିବା ଉଚିତ?",
          "answer": "ଗୁରୁତର ଲକ୍ଷଣ ଦେଖାଦେବା ମାତ୍ରେ ତୁରନ୍ତ ଡାକ୍ତରଖାନା ଯିବା ଉଚିତ।"
        }
      ]
    }
  },
  {
    "id": "dis-63-acid-peptic-disease-gastric-ulcer-gastric-",
    "category": "Waterborne & Gastro",
    "severity": "Moderate",
    "transmission": "Helicobacter pylori, spicy diet, and irregular eating",
    "en": {
      "name": "Acid Peptic Disease & Gastric Ulcer (Gastric) - Grade 2",
      "overview": "Detailed clinical guidance, prevention, and government health support in Odisha for Acid Peptic Disease & Gastric Ulcer (Gastric).",
      "symptoms": [
        "Primary localized pain, fever, or discomfort",
        "Fatigue and reduced physical stamina",
        "Loss of normal appetite and mild headache",
        "Associated diagnostic clinical signs specific to condition"
      ],
      "causes": [
        "Etiological factors and environmental exposure related to Acid Peptic Disease & Gastric Ulcer (Gastric)",
        "Unfavorable seasonal conditions or unhygienic community environment",
        "Nutritional or metabolic susceptibility factors"
      ],
      "treatments": [
        "Evidence-based pharmacotherapy prescribed by medical officer",
        "Adequate fluid intake, nutritious diet, and supportive care",
        "Free treatment and diagnostic screening available at Odisha CHCs and DHHs"
      ],
      "prevention": [
        "Maintain strict personal, domestic, and water hygiene",
        "Adhere to public health department guidelines and advisories",
        "Timely immunization and regular screening visits"
      ],
      "dos": [
        "Consult a qualified medical officer at early onset of symptoms",
        "Complete the prescribed medical regimen without skipping doses",
        "Maintain clean drinking water and well-balanced nutrition"
      ],
      "donts": [
        "Do not self-medicate or purchase unverified over-the-counter drugs",
        "Do not delay seeking medical care if red flag symptoms emerge",
        "Do not consume unhygienic or contaminated food and water"
      ],
      "whenToSeeDoctor": [
        "High continuous fever not responding to antipyretics",
        "Breathing difficulty, extreme fatigue, or fainting",
        "Inability to eat or drink oral fluids"
      ],
      "faqs": [
        {
          "question": "Is treatment for Acid Peptic Disease & Gastric Ulcer (Gastric) available free in Odisha?",
          "answer": "Yes, under Niramaya scheme and BSKY, free diagnostics and medicines are provided across Odisha government facilities."
        },
        {
          "question": "When should one visit the nearest hospital?",
          "answer": "Visit the hospital at first onset of severe symptoms or if home recovery is slow after 48 hours."
        }
      ]
    },
    "or": {
      "name": "ଗ୍ୟାଷ୍ଟ୍ରିକ୍ ଓ ପେଟ ଅଲସର (ପର୍ଯ୍ୟାୟ 2)",
      "nativeName": "ଗ୍ୟାଷ୍ଟ୍ରିକ୍ ଓ ପେଟ ଅଲସର",
      "overview": "ଓଡ଼ିଶାର ଜନସାଧାରଣଙ୍କ ପାଇଁ ଗ୍ୟାଷ୍ଟ୍ରିକ୍ ଓ ପେଟ ଅଲସର ର ଡାକ୍ତରୀ ମାର୍ଗଦର୍ଶନ, ପ୍ରତିରୋଧ ଓ ସରକାରୀ ସହାୟତା।",
      "symptoms": [
        "ସ୍ଥାନୀୟ ଯନ୍ତ୍ରଣା, ଜ୍ୱର ବା ଅସ୍ୱସ୍ତି ଭାବ",
        "ଦୁର୍ବଳତା ଏବଂ ଶରୀରରେ ଶକ୍ତିର ଅଭାବ",
        "ଭୋକ କମିବା ଏବଂ ମୁଣ୍ଡବିନ୍ଧା",
        "ରୋଗ ସମ୍ପର୍କିତ ସାଧାରଣ ଡାକ୍ତରୀ ଲକ୍ଷଣ"
      ],
      "causes": [
        "ଗ୍ୟାଷ୍ଟ୍ରିକ୍ ଓ ପେଟ ଅଲସର ସମ୍ପର୍କିତ ପରିବେଶ ଓ ଜୀବାଣୁଜନିତ କାରଣ",
        "ଋତୁକାଳୀନ ପ୍ରତିକୂଳ ପାଗ ବା ଅପରିଷ୍କାର ପରିବେଶ",
        "ପୁଷ୍ଟିହୀନତା ବା ରୋଗ ପ୍ରତିରୋଧକ ଶକ୍ତିର ଅଭାବ"
      ],
      "treatments": [
        "ଡାକ୍ତରଙ୍କ ପରାମର୍ଶ ଅନୁଯାୟୀ ପ୍ରମାଣିତ ଔଷଧ ସେବନ",
        "ପର୍ଯ୍ୟାପ୍ତ ପାଣି ପିଇବା, ପୁଷ୍ଟିକର ଖାଦ୍ୟ ଓ ବିଶ୍ରାମ",
        "ଓଡ଼ିଶା ସରକାରୀ ଡାକ୍ତରଖାନାରେ ମାଗଣା ଚିକିତ୍ସା ଓ ପରୀକ୍ଷା"
      ],
      "prevention": [
        "ବ୍ୟକ୍ତିଗତ ଓ ପରିବେଶ ପରିମଳ ସର୍ବଦା ବଜାୟ ରଖନ୍ତୁ",
        "ସ୍ୱାସ୍ଥ୍ୟ ବିଭାଗର ନିର୍ଦ୍ଦେଶାବଳୀ ପାଳନ କରନ୍ତୁ",
        "ସମୟ ଅନୁଯାୟୀ ଟିକାକରଣ ଓ ସ୍ୱାସ୍ଥ୍ୟ ଯାଞ୍ଚ କରାନ୍ତୁ"
      ],
      "dos": [
        "ଲକ୍ଷଣ ଦେଖାଦେବା ମାତ୍ରେ ଡାକ୍ତରଙ୍କ ସହ ପରାମର୍ଶ କରନ୍ତୁ",
        "ଡାକ୍ତର ଦେଇଥିବା ଔଷଧ କୋର୍ସ ସମ୍ପୂର୍ଣ୍ଣ ଶେଷ କରନ୍ତୁ",
        "ଫୁଟା ପାଣି ଓ ପୁଷ୍ଟିକର ଖାଦ୍ୟ ଖାଆନ୍ତୁ"
      ],
      "donts": [
        "ଡାକ୍ତରଙ୍କ ବିନା ପରାମର୍ଶରେ ମେଡିସିନ୍ ଦୋକାନରୁ ଔଷଧ ଖାଆନ୍ତୁ ନାହିଁ",
        "ଗୁରୁତର ଲକ୍ଷଣ ଥିଲେ ଡାକ୍ତରଖାନା ଯିବାରେ ଡେରି କରନ୍ତୁ ନାହିଁ",
        "ଅପରିଷ୍କାର ଓ ବାସି ଖାଦ୍ୟ ଖାଆନ୍ତୁ ନାହିଁ"
      ],
      "whenToSeeDoctor": [
        "ଲଗାତାର ତେଜ ଜ୍ୱର ଲାଗିରହିଲେ",
        "ନିଶ୍ୱାସ ନେବାରେ କଷ୍ଟ ହେଲେ ବା ଚେତା ହରାଇଲେ",
        "ପାଣି ପିଇ ନପାରିଲେ ବା ବାରମ୍ବାର ବାନ୍ତି ହେଲେ"
      ],
      "faqs": [
        {
          "question": "ଓଡ଼ିଶାରେ ଗ୍ୟାଷ୍ଟ୍ରିକ୍ ଓ ପେଟ ଅଲସର ର ଚିକିତ୍ସା ମାଗଣାରେ ମିଳେ କି?",
          "answer": "ହଁ, ନିରାମୟ ଯୋଜନା ଓ ବିଜୁ ସ୍ୱାସ୍ଥ୍ୟ କଲ୍ୟାଣ ଯୋଜନାରେ ସମସ୍ତ ସରକାରୀ ଡାକ୍ତରଖାନାରେ ମାଗଣା ପରୀକ୍ଷା ଓ ଔଷଧ ଉପଲବ୍ଧ।"
        },
        {
          "question": "କେବେ ଡାକ୍ତରଖାନା ଯିବା ଉଚିତ?",
          "answer": "ଗୁରୁତର ଲକ୍ଷଣ ଦେଖାଦେବା ମାତ୍ରେ ତୁରନ୍ତ ଡାକ୍ତରଖାନା ଯିବା ଉଚିତ।"
        }
      ]
    }
  },
  {
    "id": "dis-64-rheumatoid-osteoarthritis-ganthi-binda-",
    "category": "Chronic & Lifestyle",
    "severity": "Moderate",
    "transmission": "Joint cartilage wear and autoimmune inflammation",
    "en": {
      "name": "Rheumatoid & Osteoarthritis (Ganthi Binda) - Grade 2",
      "overview": "Detailed clinical guidance, prevention, and government health support in Odisha for Rheumatoid & Osteoarthritis (Ganthi Binda).",
      "symptoms": [
        "Primary localized pain, fever, or discomfort",
        "Fatigue and reduced physical stamina",
        "Loss of normal appetite and mild headache",
        "Associated diagnostic clinical signs specific to condition"
      ],
      "causes": [
        "Etiological factors and environmental exposure related to Rheumatoid & Osteoarthritis (Ganthi Binda)",
        "Unfavorable seasonal conditions or unhygienic community environment",
        "Nutritional or metabolic susceptibility factors"
      ],
      "treatments": [
        "Evidence-based pharmacotherapy prescribed by medical officer",
        "Adequate fluid intake, nutritious diet, and supportive care",
        "Free treatment and diagnostic screening available at Odisha CHCs and DHHs"
      ],
      "prevention": [
        "Maintain strict personal, domestic, and water hygiene",
        "Adhere to public health department guidelines and advisories",
        "Timely immunization and regular screening visits"
      ],
      "dos": [
        "Consult a qualified medical officer at early onset of symptoms",
        "Complete the prescribed medical regimen without skipping doses",
        "Maintain clean drinking water and well-balanced nutrition"
      ],
      "donts": [
        "Do not self-medicate or purchase unverified over-the-counter drugs",
        "Do not delay seeking medical care if red flag symptoms emerge",
        "Do not consume unhygienic or contaminated food and water"
      ],
      "whenToSeeDoctor": [
        "High continuous fever not responding to antipyretics",
        "Breathing difficulty, extreme fatigue, or fainting",
        "Inability to eat or drink oral fluids"
      ],
      "faqs": [
        {
          "question": "Is treatment for Rheumatoid & Osteoarthritis (Ganthi Binda) available free in Odisha?",
          "answer": "Yes, under Niramaya scheme and BSKY, free diagnostics and medicines are provided across Odisha government facilities."
        },
        {
          "question": "When should one visit the nearest hospital?",
          "answer": "Visit the hospital at first onset of severe symptoms or if home recovery is slow after 48 hours."
        }
      ]
    },
    "or": {
      "name": "ଗଣ୍ଠି ବିନ୍ଧା ଓ ବାତ ରୋଗ (ପର୍ଯ୍ୟାୟ 2)",
      "nativeName": "ଗଣ୍ଠି ବିନ୍ଧା ଓ ବାତ ରୋଗ",
      "overview": "ଓଡ଼ିଶାର ଜନସାଧାରଣଙ୍କ ପାଇଁ ଗଣ୍ଠି ବିନ୍ଧା ଓ ବାତ ରୋଗ ର ଡାକ୍ତରୀ ମାର୍ଗଦର୍ଶନ, ପ୍ରତିରୋଧ ଓ ସରକାରୀ ସହାୟତା।",
      "symptoms": [
        "ସ୍ଥାନୀୟ ଯନ୍ତ୍ରଣା, ଜ୍ୱର ବା ଅସ୍ୱସ୍ତି ଭାବ",
        "ଦୁର୍ବଳତା ଏବଂ ଶରୀରରେ ଶକ୍ତିର ଅଭାବ",
        "ଭୋକ କମିବା ଏବଂ ମୁଣ୍ଡବିନ୍ଧା",
        "ରୋଗ ସମ୍ପର୍କିତ ସାଧାରଣ ଡାକ୍ତରୀ ଲକ୍ଷଣ"
      ],
      "causes": [
        "ଗଣ୍ଠି ବିନ୍ଧା ଓ ବାତ ରୋଗ ସମ୍ପର୍କିତ ପରିବେଶ ଓ ଜୀବାଣୁଜନିତ କାରଣ",
        "ଋତୁକାଳୀନ ପ୍ରତିକୂଳ ପାଗ ବା ଅପରିଷ୍କାର ପରିବେଶ",
        "ପୁଷ୍ଟିହୀନତା ବା ରୋଗ ପ୍ରତିରୋଧକ ଶକ୍ତିର ଅଭାବ"
      ],
      "treatments": [
        "ଡାକ୍ତରଙ୍କ ପରାମର୍ଶ ଅନୁଯାୟୀ ପ୍ରମାଣିତ ଔଷଧ ସେବନ",
        "ପର୍ଯ୍ୟାପ୍ତ ପାଣି ପିଇବା, ପୁଷ୍ଟିକର ଖାଦ୍ୟ ଓ ବିଶ୍ରାମ",
        "ଓଡ଼ିଶା ସରକାରୀ ଡାକ୍ତରଖାନାରେ ମାଗଣା ଚିକିତ୍ସା ଓ ପରୀକ୍ଷା"
      ],
      "prevention": [
        "ବ୍ୟକ୍ତିଗତ ଓ ପରିବେଶ ପରିମଳ ସର୍ବଦା ବଜାୟ ରଖନ୍ତୁ",
        "ସ୍ୱାସ୍ଥ୍ୟ ବିଭାଗର ନିର୍ଦ୍ଦେଶାବଳୀ ପାଳନ କରନ୍ତୁ",
        "ସମୟ ଅନୁଯାୟୀ ଟିକାକରଣ ଓ ସ୍ୱାସ୍ଥ୍ୟ ଯାଞ୍ଚ କରାନ୍ତୁ"
      ],
      "dos": [
        "ଲକ୍ଷଣ ଦେଖାଦେବା ମାତ୍ରେ ଡାକ୍ତରଙ୍କ ସହ ପରାମର୍ଶ କରନ୍ତୁ",
        "ଡାକ୍ତର ଦେଇଥିବା ଔଷଧ କୋର୍ସ ସମ୍ପୂର୍ଣ୍ଣ ଶେଷ କରନ୍ତୁ",
        "ଫୁଟା ପାଣି ଓ ପୁଷ୍ଟିକର ଖାଦ୍ୟ ଖାଆନ୍ତୁ"
      ],
      "donts": [
        "ଡାକ୍ତରଙ୍କ ବିନା ପରାମର୍ଶରେ ମେଡିସିନ୍ ଦୋକାନରୁ ଔଷଧ ଖାଆନ୍ତୁ ନାହିଁ",
        "ଗୁରୁତର ଲକ୍ଷଣ ଥିଲେ ଡାକ୍ତରଖାନା ଯିବାରେ ଡେରି କରନ୍ତୁ ନାହିଁ",
        "ଅପରିଷ୍କାର ଓ ବାସି ଖାଦ୍ୟ ଖାଆନ୍ତୁ ନାହିଁ"
      ],
      "whenToSeeDoctor": [
        "ଲଗାତାର ତେଜ ଜ୍ୱର ଲାଗିରହିଲେ",
        "ନିଶ୍ୱାସ ନେବାରେ କଷ୍ଟ ହେଲେ ବା ଚେତା ହରାଇଲେ",
        "ପାଣି ପିଇ ନପାରିଲେ ବା ବାରମ୍ବାର ବାନ୍ତି ହେଲେ"
      ],
      "faqs": [
        {
          "question": "ଓଡ଼ିଶାରେ ଗଣ୍ଠି ବିନ୍ଧା ଓ ବାତ ରୋଗ ର ଚିକିତ୍ସା ମାଗଣାରେ ମିଳେ କି?",
          "answer": "ହଁ, ନିରାମୟ ଯୋଜନା ଓ ବିଜୁ ସ୍ୱାସ୍ଥ୍ୟ କଲ୍ୟାଣ ଯୋଜନାରେ ସମସ୍ତ ସରକାରୀ ଡାକ୍ତରଖାନାରେ ମାଗଣା ପରୀକ୍ଷା ଓ ଔଷଧ ଉପଲବ୍ଧ।"
        },
        {
          "question": "କେବେ ଡାକ୍ତରଖାନା ଯିବା ଉଚିତ?",
          "answer": "ଗୁରୁତର ଲକ୍ଷଣ ଦେଖାଦେବା ମାତ୍ରେ ତୁରନ୍ତ ଡାକ୍ତରଖାନା ଯିବା ଉଚିତ।"
        }
      ]
    }
  },
  {
    "id": "dis-65-drowning-near-drowning-emergency",
    "category": "Emergency",
    "severity": "Emergency",
    "transmission": "Submersion in ponds, rivers during floods",
    "en": {
      "name": "Drowning & Near-Drowning Emergency - Grade 2",
      "overview": "Detailed clinical guidance, prevention, and government health support in Odisha for Drowning & Near-Drowning Emergency.",
      "symptoms": [
        "Primary localized pain, fever, or discomfort",
        "Fatigue and reduced physical stamina",
        "Loss of normal appetite and mild headache",
        "Associated diagnostic clinical signs specific to condition"
      ],
      "causes": [
        "Etiological factors and environmental exposure related to Drowning & Near-Drowning Emergency",
        "Unfavorable seasonal conditions or unhygienic community environment",
        "Nutritional or metabolic susceptibility factors"
      ],
      "treatments": [
        "Evidence-based pharmacotherapy prescribed by medical officer",
        "Adequate fluid intake, nutritious diet, and supportive care",
        "Free treatment and diagnostic screening available at Odisha CHCs and DHHs"
      ],
      "prevention": [
        "Maintain strict personal, domestic, and water hygiene",
        "Adhere to public health department guidelines and advisories",
        "Timely immunization and regular screening visits"
      ],
      "dos": [
        "Consult a qualified medical officer at early onset of symptoms",
        "Complete the prescribed medical regimen without skipping doses",
        "Maintain clean drinking water and well-balanced nutrition"
      ],
      "donts": [
        "Do not self-medicate or purchase unverified over-the-counter drugs",
        "Do not delay seeking medical care if red flag symptoms emerge",
        "Do not consume unhygienic or contaminated food and water"
      ],
      "whenToSeeDoctor": [
        "High continuous fever not responding to antipyretics",
        "Breathing difficulty, extreme fatigue, or fainting",
        "Inability to eat or drink oral fluids"
      ],
      "faqs": [
        {
          "question": "Is treatment for Drowning & Near-Drowning Emergency available free in Odisha?",
          "answer": "Yes, under Niramaya scheme and BSKY, free diagnostics and medicines are provided across Odisha government facilities."
        },
        {
          "question": "When should one visit the nearest hospital?",
          "answer": "Visit the hospital at first onset of severe symptoms or if home recovery is slow after 48 hours."
        }
      ]
    },
    "or": {
      "name": "ପାଣିରେ ବୁଡ଼ିଯିବା ଜରୁରୀକାଳୀନ ପରିସ୍ଥିତି (ପର୍ଯ୍ୟାୟ 2)",
      "nativeName": "ପାଣିରେ ବୁଡ଼ିଯିବା ଜରୁରୀକାଳୀନ ପରିସ୍ଥିତି",
      "overview": "ଓଡ଼ିଶାର ଜନସାଧାରଣଙ୍କ ପାଇଁ ପାଣିରେ ବୁଡ଼ିଯିବା ଜରୁରୀକାଳୀନ ପରିସ୍ଥିତି ର ଡାକ୍ତରୀ ମାର୍ଗଦର୍ଶନ, ପ୍ରତିରୋଧ ଓ ସରକାରୀ ସହାୟତା।",
      "symptoms": [
        "ସ୍ଥାନୀୟ ଯନ୍ତ୍ରଣା, ଜ୍ୱର ବା ଅସ୍ୱସ୍ତି ଭାବ",
        "ଦୁର୍ବଳତା ଏବଂ ଶରୀରରେ ଶକ୍ତିର ଅଭାବ",
        "ଭୋକ କମିବା ଏବଂ ମୁଣ୍ଡବିନ୍ଧା",
        "ରୋଗ ସମ୍ପର୍କିତ ସାଧାରଣ ଡାକ୍ତରୀ ଲକ୍ଷଣ"
      ],
      "causes": [
        "ପାଣିରେ ବୁଡ଼ିଯିବା ଜରୁରୀକାଳୀନ ପରିସ୍ଥିତି ସମ୍ପର୍କିତ ପରିବେଶ ଓ ଜୀବାଣୁଜନିତ କାରଣ",
        "ଋତୁକାଳୀନ ପ୍ରତିକୂଳ ପାଗ ବା ଅପରିଷ୍କାର ପରିବେଶ",
        "ପୁଷ୍ଟିହୀନତା ବା ରୋଗ ପ୍ରତିରୋଧକ ଶକ୍ତିର ଅଭାବ"
      ],
      "treatments": [
        "ଡାକ୍ତରଙ୍କ ପରାମର୍ଶ ଅନୁଯାୟୀ ପ୍ରମାଣିତ ଔଷଧ ସେବନ",
        "ପର୍ଯ୍ୟାପ୍ତ ପାଣି ପିଇବା, ପୁଷ୍ଟିକର ଖାଦ୍ୟ ଓ ବିଶ୍ରାମ",
        "ଓଡ଼ିଶା ସରକାରୀ ଡାକ୍ତରଖାନାରେ ମାଗଣା ଚିକିତ୍ସା ଓ ପରୀକ୍ଷା"
      ],
      "prevention": [
        "ବ୍ୟକ୍ତିଗତ ଓ ପରିବେଶ ପରିମଳ ସର୍ବଦା ବଜାୟ ରଖନ୍ତୁ",
        "ସ୍ୱାସ୍ଥ୍ୟ ବିଭାଗର ନିର୍ଦ୍ଦେଶାବଳୀ ପାଳନ କରନ୍ତୁ",
        "ସମୟ ଅନୁଯାୟୀ ଟିକାକରଣ ଓ ସ୍ୱାସ୍ଥ୍ୟ ଯାଞ୍ଚ କରାନ୍ତୁ"
      ],
      "dos": [
        "ଲକ୍ଷଣ ଦେଖାଦେବା ମାତ୍ରେ ଡାକ୍ତରଙ୍କ ସହ ପରାମର୍ଶ କରନ୍ତୁ",
        "ଡାକ୍ତର ଦେଇଥିବା ଔଷଧ କୋର୍ସ ସମ୍ପୂର୍ଣ୍ଣ ଶେଷ କରନ୍ତୁ",
        "ଫୁଟା ପାଣି ଓ ପୁଷ୍ଟିକର ଖାଦ୍ୟ ଖାଆନ୍ତୁ"
      ],
      "donts": [
        "ଡାକ୍ତରଙ୍କ ବିନା ପରାମର୍ଶରେ ମେଡିସିନ୍ ଦୋକାନରୁ ଔଷଧ ଖାଆନ୍ତୁ ନାହିଁ",
        "ଗୁରୁତର ଲକ୍ଷଣ ଥିଲେ ଡାକ୍ତରଖାନା ଯିବାରେ ଡେରି କରନ୍ତୁ ନାହିଁ",
        "ଅପରିଷ୍କାର ଓ ବାସି ଖାଦ୍ୟ ଖାଆନ୍ତୁ ନାହିଁ"
      ],
      "whenToSeeDoctor": [
        "ଲଗାତାର ତେଜ ଜ୍ୱର ଲାଗିରହିଲେ",
        "ନିଶ୍ୱାସ ନେବାରେ କଷ୍ଟ ହେଲେ ବା ଚେତା ହରାଇଲେ",
        "ପାଣି ପିଇ ନପାରିଲେ ବା ବାରମ୍ବାର ବାନ୍ତି ହେଲେ"
      ],
      "faqs": [
        {
          "question": "ଓଡ଼ିଶାରେ ପାଣିରେ ବୁଡ଼ିଯିବା ଜରୁରୀକାଳୀନ ପରିସ୍ଥିତି ର ଚିକିତ୍ସା ମାଗଣାରେ ମିଳେ କି?",
          "answer": "ହଁ, ନିରାମୟ ଯୋଜନା ଓ ବିଜୁ ସ୍ୱାସ୍ଥ୍ୟ କଲ୍ୟାଣ ଯୋଜନାରେ ସମସ୍ତ ସରକାରୀ ଡାକ୍ତରଖାନାରେ ମାଗଣା ପରୀକ୍ଷା ଓ ଔଷଧ ଉପଲବ୍ଧ।"
        },
        {
          "question": "କେବେ ଡାକ୍ତରଖାନା ଯିବା ଉଚିତ?",
          "answer": "ଗୁରୁତର ଲକ୍ଷଣ ଦେଖାଦେବା ମାତ୍ରେ ତୁରନ୍ତ ଡାକ୍ତରଖାନା ଯିବା ଉଚିତ।"
        }
      ]
    }
  },
  {
    "id": "dis-66-lightning-strike-injury",
    "category": "Emergency",
    "severity": "Emergency",
    "transmission": "Direct or side-flash high-voltage atmospheric electricity",
    "en": {
      "name": "Lightning Strike Injury - Grade 2",
      "overview": "Detailed clinical guidance, prevention, and government health support in Odisha for Lightning Strike Injury.",
      "symptoms": [
        "Primary localized pain, fever, or discomfort",
        "Fatigue and reduced physical stamina",
        "Loss of normal appetite and mild headache",
        "Associated diagnostic clinical signs specific to condition"
      ],
      "causes": [
        "Etiological factors and environmental exposure related to Lightning Strike Injury",
        "Unfavorable seasonal conditions or unhygienic community environment",
        "Nutritional or metabolic susceptibility factors"
      ],
      "treatments": [
        "Evidence-based pharmacotherapy prescribed by medical officer",
        "Adequate fluid intake, nutritious diet, and supportive care",
        "Free treatment and diagnostic screening available at Odisha CHCs and DHHs"
      ],
      "prevention": [
        "Maintain strict personal, domestic, and water hygiene",
        "Adhere to public health department guidelines and advisories",
        "Timely immunization and regular screening visits"
      ],
      "dos": [
        "Consult a qualified medical officer at early onset of symptoms",
        "Complete the prescribed medical regimen without skipping doses",
        "Maintain clean drinking water and well-balanced nutrition"
      ],
      "donts": [
        "Do not self-medicate or purchase unverified over-the-counter drugs",
        "Do not delay seeking medical care if red flag symptoms emerge",
        "Do not consume unhygienic or contaminated food and water"
      ],
      "whenToSeeDoctor": [
        "High continuous fever not responding to antipyretics",
        "Breathing difficulty, extreme fatigue, or fainting",
        "Inability to eat or drink oral fluids"
      ],
      "faqs": [
        {
          "question": "Is treatment for Lightning Strike Injury available free in Odisha?",
          "answer": "Yes, under Niramaya scheme and BSKY, free diagnostics and medicines are provided across Odisha government facilities."
        },
        {
          "question": "When should one visit the nearest hospital?",
          "answer": "Visit the hospital at first onset of severe symptoms or if home recovery is slow after 48 hours."
        }
      ]
    },
    "or": {
      "name": "ବଜ୍ରପାତ ଦୁର୍ଘଟଣା (ପର୍ଯ୍ୟାୟ 2)",
      "nativeName": "ବଜ୍ରପାତ ଦୁର୍ଘଟଣା",
      "overview": "ଓଡ଼ିଶାର ଜନସାଧାରଣଙ୍କ ପାଇଁ ବଜ୍ରପାତ ଦୁର୍ଘଟଣା ର ଡାକ୍ତରୀ ମାର୍ଗଦର୍ଶନ, ପ୍ରତିରୋଧ ଓ ସରକାରୀ ସହାୟତା।",
      "symptoms": [
        "ସ୍ଥାନୀୟ ଯନ୍ତ୍ରଣା, ଜ୍ୱର ବା ଅସ୍ୱସ୍ତି ଭାବ",
        "ଦୁର୍ବଳତା ଏବଂ ଶରୀରରେ ଶକ୍ତିର ଅଭାବ",
        "ଭୋକ କମିବା ଏବଂ ମୁଣ୍ଡବିନ୍ଧା",
        "ରୋଗ ସମ୍ପର୍କିତ ସାଧାରଣ ଡାକ୍ତରୀ ଲକ୍ଷଣ"
      ],
      "causes": [
        "ବଜ୍ରପାତ ଦୁର୍ଘଟଣା ସମ୍ପର୍କିତ ପରିବେଶ ଓ ଜୀବାଣୁଜନିତ କାରଣ",
        "ଋତୁକାଳୀନ ପ୍ରତିକୂଳ ପାଗ ବା ଅପରିଷ୍କାର ପରିବେଶ",
        "ପୁଷ୍ଟିହୀନତା ବା ରୋଗ ପ୍ରତିରୋଧକ ଶକ୍ତିର ଅଭାବ"
      ],
      "treatments": [
        "ଡାକ୍ତରଙ୍କ ପରାମର୍ଶ ଅନୁଯାୟୀ ପ୍ରମାଣିତ ଔଷଧ ସେବନ",
        "ପର୍ଯ୍ୟାପ୍ତ ପାଣି ପିଇବା, ପୁଷ୍ଟିକର ଖାଦ୍ୟ ଓ ବିଶ୍ରାମ",
        "ଓଡ଼ିଶା ସରକାରୀ ଡାକ୍ତରଖାନାରେ ମାଗଣା ଚିକିତ୍ସା ଓ ପରୀକ୍ଷା"
      ],
      "prevention": [
        "ବ୍ୟକ୍ତିଗତ ଓ ପରିବେଶ ପରିମଳ ସର୍ବଦା ବଜାୟ ରଖନ୍ତୁ",
        "ସ୍ୱାସ୍ଥ୍ୟ ବିଭାଗର ନିର୍ଦ୍ଦେଶାବଳୀ ପାଳନ କରନ୍ତୁ",
        "ସମୟ ଅନୁଯାୟୀ ଟିକାକରଣ ଓ ସ୍ୱାସ୍ଥ୍ୟ ଯାଞ୍ଚ କରାନ୍ତୁ"
      ],
      "dos": [
        "ଲକ୍ଷଣ ଦେଖାଦେବା ମାତ୍ରେ ଡାକ୍ତରଙ୍କ ସହ ପରାମର୍ଶ କରନ୍ତୁ",
        "ଡାକ୍ତର ଦେଇଥିବା ଔଷଧ କୋର୍ସ ସମ୍ପୂର୍ଣ୍ଣ ଶେଷ କରନ୍ତୁ",
        "ଫୁଟା ପାଣି ଓ ପୁଷ୍ଟିକର ଖାଦ୍ୟ ଖାଆନ୍ତୁ"
      ],
      "donts": [
        "ଡାକ୍ତରଙ୍କ ବିନା ପରାମର୍ଶରେ ମେଡିସିନ୍ ଦୋକାନରୁ ଔଷଧ ଖାଆନ୍ତୁ ନାହିଁ",
        "ଗୁରୁତର ଲକ୍ଷଣ ଥିଲେ ଡାକ୍ତରଖାନା ଯିବାରେ ଡେରି କରନ୍ତୁ ନାହିଁ",
        "ଅପରିଷ୍କାର ଓ ବାସି ଖାଦ୍ୟ ଖାଆନ୍ତୁ ନାହିଁ"
      ],
      "whenToSeeDoctor": [
        "ଲଗାତାର ତେଜ ଜ୍ୱର ଲାଗିରହିଲେ",
        "ନିଶ୍ୱାସ ନେବାରେ କଷ୍ଟ ହେଲେ ବା ଚେତା ହରାଇଲେ",
        "ପାଣି ପିଇ ନପାରିଲେ ବା ବାରମ୍ବାର ବାନ୍ତି ହେଲେ"
      ],
      "faqs": [
        {
          "question": "ଓଡ଼ିଶାରେ ବଜ୍ରପାତ ଦୁର୍ଘଟଣା ର ଚିକିତ୍ସା ମାଗଣାରେ ମିଳେ କି?",
          "answer": "ହଁ, ନିରାମୟ ଯୋଜନା ଓ ବିଜୁ ସ୍ୱାସ୍ଥ୍ୟ କଲ୍ୟାଣ ଯୋଜନାରେ ସମସ୍ତ ସରକାରୀ ଡାକ୍ତରଖାନାରେ ମାଗଣା ପରୀକ୍ଷା ଓ ଔଷଧ ଉପଲବ୍ଧ।"
        },
        {
          "question": "କେବେ ଡାକ୍ତରଖାନା ଯିବା ଉଚିତ?",
          "answer": "ଗୁରୁତର ଲକ୍ଷଣ ଦେଖାଦେବା ମାତ୍ରେ ତୁରନ୍ତ ଡାକ୍ତରଖାନା ଯିବା ଉଚିତ।"
        }
      ]
    }
  },
  {
    "id": "dis-67-accidental-pesticide-poisoning-chasa-bisakriya-",
    "category": "Emergency",
    "severity": "Emergency",
    "transmission": "Inhalation/ingestion of organophosphate agricultural chemicals",
    "en": {
      "name": "Accidental Pesticide Poisoning (Chasa Bisakriya) - Grade 2",
      "overview": "Detailed clinical guidance, prevention, and government health support in Odisha for Accidental Pesticide Poisoning (Chasa Bisakriya).",
      "symptoms": [
        "Primary localized pain, fever, or discomfort",
        "Fatigue and reduced physical stamina",
        "Loss of normal appetite and mild headache",
        "Associated diagnostic clinical signs specific to condition"
      ],
      "causes": [
        "Etiological factors and environmental exposure related to Accidental Pesticide Poisoning (Chasa Bisakriya)",
        "Unfavorable seasonal conditions or unhygienic community environment",
        "Nutritional or metabolic susceptibility factors"
      ],
      "treatments": [
        "Evidence-based pharmacotherapy prescribed by medical officer",
        "Adequate fluid intake, nutritious diet, and supportive care",
        "Free treatment and diagnostic screening available at Odisha CHCs and DHHs"
      ],
      "prevention": [
        "Maintain strict personal, domestic, and water hygiene",
        "Adhere to public health department guidelines and advisories",
        "Timely immunization and regular screening visits"
      ],
      "dos": [
        "Consult a qualified medical officer at early onset of symptoms",
        "Complete the prescribed medical regimen without skipping doses",
        "Maintain clean drinking water and well-balanced nutrition"
      ],
      "donts": [
        "Do not self-medicate or purchase unverified over-the-counter drugs",
        "Do not delay seeking medical care if red flag symptoms emerge",
        "Do not consume unhygienic or contaminated food and water"
      ],
      "whenToSeeDoctor": [
        "High continuous fever not responding to antipyretics",
        "Breathing difficulty, extreme fatigue, or fainting",
        "Inability to eat or drink oral fluids"
      ],
      "faqs": [
        {
          "question": "Is treatment for Accidental Pesticide Poisoning (Chasa Bisakriya) available free in Odisha?",
          "answer": "Yes, under Niramaya scheme and BSKY, free diagnostics and medicines are provided across Odisha government facilities."
        },
        {
          "question": "When should one visit the nearest hospital?",
          "answer": "Visit the hospital at first onset of severe symptoms or if home recovery is slow after 48 hours."
        }
      ]
    },
    "or": {
      "name": "ଚାଷ କୀଟନାଶକ ବିଷକ୍ରିୟା (ପର୍ଯ୍ୟାୟ 2)",
      "nativeName": "ଚାଷ କୀଟନାଶକ ବିଷକ୍ରିୟା",
      "overview": "ଓଡ଼ିଶାର ଜନସାଧାରଣଙ୍କ ପାଇଁ ଚାଷ କୀଟନାଶକ ବିଷକ୍ରିୟା ର ଡାକ୍ତରୀ ମାର୍ଗଦର୍ଶନ, ପ୍ରତିରୋଧ ଓ ସରକାରୀ ସହାୟତା।",
      "symptoms": [
        "ସ୍ଥାନୀୟ ଯନ୍ତ୍ରଣା, ଜ୍ୱର ବା ଅସ୍ୱସ୍ତି ଭାବ",
        "ଦୁର୍ବଳତା ଏବଂ ଶରୀରରେ ଶକ୍ତିର ଅଭାବ",
        "ଭୋକ କମିବା ଏବଂ ମୁଣ୍ଡବିନ୍ଧା",
        "ରୋଗ ସମ୍ପର୍କିତ ସାଧାରଣ ଡାକ୍ତରୀ ଲକ୍ଷଣ"
      ],
      "causes": [
        "ଚାଷ କୀଟନାଶକ ବିଷକ୍ରିୟା ସମ୍ପର୍କିତ ପରିବେଶ ଓ ଜୀବାଣୁଜନିତ କାରଣ",
        "ଋତୁକାଳୀନ ପ୍ରତିକୂଳ ପାଗ ବା ଅପରିଷ୍କାର ପରିବେଶ",
        "ପୁଷ୍ଟିହୀନତା ବା ରୋଗ ପ୍ରତିରୋଧକ ଶକ୍ତିର ଅଭାବ"
      ],
      "treatments": [
        "ଡାକ୍ତରଙ୍କ ପରାମର୍ଶ ଅନୁଯାୟୀ ପ୍ରମାଣିତ ଔଷଧ ସେବନ",
        "ପର୍ଯ୍ୟାପ୍ତ ପାଣି ପିଇବା, ପୁଷ୍ଟିକର ଖାଦ୍ୟ ଓ ବିଶ୍ରାମ",
        "ଓଡ଼ିଶା ସରକାରୀ ଡାକ୍ତରଖାନାରେ ମାଗଣା ଚିକିତ୍ସା ଓ ପରୀକ୍ଷା"
      ],
      "prevention": [
        "ବ୍ୟକ୍ତିଗତ ଓ ପରିବେଶ ପରିମଳ ସର୍ବଦା ବଜାୟ ରଖନ୍ତୁ",
        "ସ୍ୱାସ୍ଥ୍ୟ ବିଭାଗର ନିର୍ଦ୍ଦେଶାବଳୀ ପାଳନ କରନ୍ତୁ",
        "ସମୟ ଅନୁଯାୟୀ ଟିକାକରଣ ଓ ସ୍ୱାସ୍ଥ୍ୟ ଯାଞ୍ଚ କରାନ୍ତୁ"
      ],
      "dos": [
        "ଲକ୍ଷଣ ଦେଖାଦେବା ମାତ୍ରେ ଡାକ୍ତରଙ୍କ ସହ ପରାମର୍ଶ କରନ୍ତୁ",
        "ଡାକ୍ତର ଦେଇଥିବା ଔଷଧ କୋର୍ସ ସମ୍ପୂର୍ଣ୍ଣ ଶେଷ କରନ୍ତୁ",
        "ଫୁଟା ପାଣି ଓ ପୁଷ୍ଟିକର ଖାଦ୍ୟ ଖାଆନ୍ତୁ"
      ],
      "donts": [
        "ଡାକ୍ତରଙ୍କ ବିନା ପରାମର୍ଶରେ ମେଡିସିନ୍ ଦୋକାନରୁ ଔଷଧ ଖାଆନ୍ତୁ ନାହିଁ",
        "ଗୁରୁତର ଲକ୍ଷଣ ଥିଲେ ଡାକ୍ତରଖାନା ଯିବାରେ ଡେରି କରନ୍ତୁ ନାହିଁ",
        "ଅପରିଷ୍କାର ଓ ବାସି ଖାଦ୍ୟ ଖାଆନ୍ତୁ ନାହିଁ"
      ],
      "whenToSeeDoctor": [
        "ଲଗାତାର ତେଜ ଜ୍ୱର ଲାଗିରହିଲେ",
        "ନିଶ୍ୱାସ ନେବାରେ କଷ୍ଟ ହେଲେ ବା ଚେତା ହରାଇଲେ",
        "ପାଣି ପିଇ ନପାରିଲେ ବା ବାରମ୍ବାର ବାନ୍ତି ହେଲେ"
      ],
      "faqs": [
        {
          "question": "ଓଡ଼ିଶାରେ ଚାଷ କୀଟନାଶକ ବିଷକ୍ରିୟା ର ଚିକିତ୍ସା ମାଗଣାରେ ମିଳେ କି?",
          "answer": "ହଁ, ନିରାମୟ ଯୋଜନା ଓ ବିଜୁ ସ୍ୱାସ୍ଥ୍ୟ କଲ୍ୟାଣ ଯୋଜନାରେ ସମସ୍ତ ସରକାରୀ ଡାକ୍ତରଖାନାରେ ମାଗଣା ପରୀକ୍ଷା ଓ ଔଷଧ ଉପଲବ୍ଧ।"
        },
        {
          "question": "କେବେ ଡାକ୍ତରଖାନା ଯିବା ଉଚିତ?",
          "answer": "ଗୁରୁତର ଲକ୍ଷଣ ଦେଖାଦେବା ମାତ୍ରେ ତୁରନ୍ତ ଡାକ୍ତରଖାନା ଯିବା ଉଚିତ।"
        }
      ]
    }
  },
  {
    "id": "dis-68-gout-uric-acid-arthritis",
    "category": "Chronic & Lifestyle",
    "severity": "Moderate",
    "transmission": "High uric acid crystals deposits in joints",
    "en": {
      "name": "Gout & Uric Acid Arthritis - Grade 2",
      "overview": "Detailed clinical guidance, prevention, and government health support in Odisha for Gout & Uric Acid Arthritis.",
      "symptoms": [
        "Primary localized pain, fever, or discomfort",
        "Fatigue and reduced physical stamina",
        "Loss of normal appetite and mild headache",
        "Associated diagnostic clinical signs specific to condition"
      ],
      "causes": [
        "Etiological factors and environmental exposure related to Gout & Uric Acid Arthritis",
        "Unfavorable seasonal conditions or unhygienic community environment",
        "Nutritional or metabolic susceptibility factors"
      ],
      "treatments": [
        "Evidence-based pharmacotherapy prescribed by medical officer",
        "Adequate fluid intake, nutritious diet, and supportive care",
        "Free treatment and diagnostic screening available at Odisha CHCs and DHHs"
      ],
      "prevention": [
        "Maintain strict personal, domestic, and water hygiene",
        "Adhere to public health department guidelines and advisories",
        "Timely immunization and regular screening visits"
      ],
      "dos": [
        "Consult a qualified medical officer at early onset of symptoms",
        "Complete the prescribed medical regimen without skipping doses",
        "Maintain clean drinking water and well-balanced nutrition"
      ],
      "donts": [
        "Do not self-medicate or purchase unverified over-the-counter drugs",
        "Do not delay seeking medical care if red flag symptoms emerge",
        "Do not consume unhygienic or contaminated food and water"
      ],
      "whenToSeeDoctor": [
        "High continuous fever not responding to antipyretics",
        "Breathing difficulty, extreme fatigue, or fainting",
        "Inability to eat or drink oral fluids"
      ],
      "faqs": [
        {
          "question": "Is treatment for Gout & Uric Acid Arthritis available free in Odisha?",
          "answer": "Yes, under Niramaya scheme and BSKY, free diagnostics and medicines are provided across Odisha government facilities."
        },
        {
          "question": "When should one visit the nearest hospital?",
          "answer": "Visit the hospital at first onset of severe symptoms or if home recovery is slow after 48 hours."
        }
      ]
    },
    "or": {
      "name": "ୟୁରିକ୍ ଏସିଡ୍ ଗଣ୍ଠି ଯନ୍ତ୍ରଣା (ଗାଉଟ୍) (ପର୍ଯ୍ୟାୟ 2)",
      "nativeName": "ୟୁରିକ୍ ଏସିଡ୍ ଗଣ୍ଠି ଯନ୍ତ୍ରଣା (ଗାଉଟ୍)",
      "overview": "ଓଡ଼ିଶାର ଜନସାଧାରଣଙ୍କ ପାଇଁ ୟୁରିକ୍ ଏସିଡ୍ ଗଣ୍ଠି ଯନ୍ତ୍ରଣା (ଗାଉଟ୍) ର ଡାକ୍ତରୀ ମାର୍ଗଦର୍ଶନ, ପ୍ରତିରୋଧ ଓ ସରକାରୀ ସହାୟତା।",
      "symptoms": [
        "ସ୍ଥାନୀୟ ଯନ୍ତ୍ରଣା, ଜ୍ୱର ବା ଅସ୍ୱସ୍ତି ଭାବ",
        "ଦୁର୍ବଳତା ଏବଂ ଶରୀରରେ ଶକ୍ତିର ଅଭାବ",
        "ଭୋକ କମିବା ଏବଂ ମୁଣ୍ଡବିନ୍ଧା",
        "ରୋଗ ସମ୍ପର୍କିତ ସାଧାରଣ ଡାକ୍ତରୀ ଲକ୍ଷଣ"
      ],
      "causes": [
        "ୟୁରିକ୍ ଏସିଡ୍ ଗଣ୍ଠି ଯନ୍ତ୍ରଣା (ଗାଉଟ୍) ସମ୍ପର୍କିତ ପରିବେଶ ଓ ଜୀବାଣୁଜନିତ କାରଣ",
        "ଋତୁକାଳୀନ ପ୍ରତିକୂଳ ପାଗ ବା ଅପରିଷ୍କାର ପରିବେଶ",
        "ପୁଷ୍ଟିହୀନତା ବା ରୋଗ ପ୍ରତିରୋଧକ ଶକ୍ତିର ଅଭାବ"
      ],
      "treatments": [
        "ଡାକ୍ତରଙ୍କ ପରାମର୍ଶ ଅନୁଯାୟୀ ପ୍ରମାଣିତ ଔଷଧ ସେବନ",
        "ପର୍ଯ୍ୟାପ୍ତ ପାଣି ପିଇବା, ପୁଷ୍ଟିକର ଖାଦ୍ୟ ଓ ବିଶ୍ରାମ",
        "ଓଡ଼ିଶା ସରକାରୀ ଡାକ୍ତରଖାନାରେ ମାଗଣା ଚିକିତ୍ସା ଓ ପରୀକ୍ଷା"
      ],
      "prevention": [
        "ବ୍ୟକ୍ତିଗତ ଓ ପରିବେଶ ପରିମଳ ସର୍ବଦା ବଜାୟ ରଖନ୍ତୁ",
        "ସ୍ୱାସ୍ଥ୍ୟ ବିଭାଗର ନିର୍ଦ୍ଦେଶାବଳୀ ପାଳନ କରନ୍ତୁ",
        "ସମୟ ଅନୁଯାୟୀ ଟିକାକରଣ ଓ ସ୍ୱାସ୍ଥ୍ୟ ଯାଞ୍ଚ କରାନ୍ତୁ"
      ],
      "dos": [
        "ଲକ୍ଷଣ ଦେଖାଦେବା ମାତ୍ରେ ଡାକ୍ତରଙ୍କ ସହ ପରାମର୍ଶ କରନ୍ତୁ",
        "ଡାକ୍ତର ଦେଇଥିବା ଔଷଧ କୋର୍ସ ସମ୍ପୂର୍ଣ୍ଣ ଶେଷ କରନ୍ତୁ",
        "ଫୁଟା ପାଣି ଓ ପୁଷ୍ଟିକର ଖାଦ୍ୟ ଖାଆନ୍ତୁ"
      ],
      "donts": [
        "ଡାକ୍ତରଙ୍କ ବିନା ପରାମର୍ଶରେ ମେଡିସିନ୍ ଦୋକାନରୁ ଔଷଧ ଖାଆନ୍ତୁ ନାହିଁ",
        "ଗୁରୁତର ଲକ୍ଷଣ ଥିଲେ ଡାକ୍ତରଖାନା ଯିବାରେ ଡେରି କରନ୍ତୁ ନାହିଁ",
        "ଅପରିଷ୍କାର ଓ ବାସି ଖାଦ୍ୟ ଖାଆନ୍ତୁ ନାହିଁ"
      ],
      "whenToSeeDoctor": [
        "ଲଗାତାର ତେଜ ଜ୍ୱର ଲାଗିରହିଲେ",
        "ନିଶ୍ୱାସ ନେବାରେ କଷ୍ଟ ହେଲେ ବା ଚେତା ହରାଇଲେ",
        "ପାଣି ପିଇ ନପାରିଲେ ବା ବାରମ୍ବାର ବାନ୍ତି ହେଲେ"
      ],
      "faqs": [
        {
          "question": "ଓଡ଼ିଶାରେ ୟୁରିକ୍ ଏସିଡ୍ ଗଣ୍ଠି ଯନ୍ତ୍ରଣା (ଗାଉଟ୍) ର ଚିକିତ୍ସା ମାଗଣାରେ ମିଳେ କି?",
          "answer": "ହଁ, ନିରାମୟ ଯୋଜନା ଓ ବିଜୁ ସ୍ୱାସ୍ଥ୍ୟ କଲ୍ୟାଣ ଯୋଜନାରେ ସମସ୍ତ ସରକାରୀ ଡାକ୍ତରଖାନାରେ ମାଗଣା ପରୀକ୍ଷା ଓ ଔଷଧ ଉପଲବ୍ଧ।"
        },
        {
          "question": "କେବେ ଡାକ୍ତରଖାନା ଯିବା ଉଚିତ?",
          "answer": "ଗୁରୁତର ଲକ୍ଷଣ ଦେଖାଦେବା ମାତ୍ରେ ତୁରନ୍ତ ଡାକ୍ତରଖାନା ଯିବା ଉଚିତ।"
        }
      ]
    }
  },
  {
    "id": "dis-69-hypothyroidism-goiter-galaganda-",
    "category": "Chronic & Lifestyle",
    "severity": "Moderate",
    "transmission": "Thyroid hormone deficiency and iodine factors",
    "en": {
      "name": "Hypothyroidism & Goiter (Galaganda) - Grade 2",
      "overview": "Detailed clinical guidance, prevention, and government health support in Odisha for Hypothyroidism & Goiter (Galaganda).",
      "symptoms": [
        "Primary localized pain, fever, or discomfort",
        "Fatigue and reduced physical stamina",
        "Loss of normal appetite and mild headache",
        "Associated diagnostic clinical signs specific to condition"
      ],
      "causes": [
        "Etiological factors and environmental exposure related to Hypothyroidism & Goiter (Galaganda)",
        "Unfavorable seasonal conditions or unhygienic community environment",
        "Nutritional or metabolic susceptibility factors"
      ],
      "treatments": [
        "Evidence-based pharmacotherapy prescribed by medical officer",
        "Adequate fluid intake, nutritious diet, and supportive care",
        "Free treatment and diagnostic screening available at Odisha CHCs and DHHs"
      ],
      "prevention": [
        "Maintain strict personal, domestic, and water hygiene",
        "Adhere to public health department guidelines and advisories",
        "Timely immunization and regular screening visits"
      ],
      "dos": [
        "Consult a qualified medical officer at early onset of symptoms",
        "Complete the prescribed medical regimen without skipping doses",
        "Maintain clean drinking water and well-balanced nutrition"
      ],
      "donts": [
        "Do not self-medicate or purchase unverified over-the-counter drugs",
        "Do not delay seeking medical care if red flag symptoms emerge",
        "Do not consume unhygienic or contaminated food and water"
      ],
      "whenToSeeDoctor": [
        "High continuous fever not responding to antipyretics",
        "Breathing difficulty, extreme fatigue, or fainting",
        "Inability to eat or drink oral fluids"
      ],
      "faqs": [
        {
          "question": "Is treatment for Hypothyroidism & Goiter (Galaganda) available free in Odisha?",
          "answer": "Yes, under Niramaya scheme and BSKY, free diagnostics and medicines are provided across Odisha government facilities."
        },
        {
          "question": "When should one visit the nearest hospital?",
          "answer": "Visit the hospital at first onset of severe symptoms or if home recovery is slow after 48 hours."
        }
      ]
    },
    "or": {
      "name": "ଥାଇରଏଡ୍ ସମସ୍ୟା ଓ ଗଳଗଣ୍ଡ (ପର୍ଯ୍ୟାୟ 2)",
      "nativeName": "ଥାଇରଏଡ୍ ସମସ୍ୟା ଓ ଗଳଗଣ୍ଡ",
      "overview": "ଓଡ଼ିଶାର ଜନସାଧାରଣଙ୍କ ପାଇଁ ଥାଇରଏଡ୍ ସମସ୍ୟା ଓ ଗଳଗଣ୍ଡ ର ଡାକ୍ତରୀ ମାର୍ଗଦର୍ଶନ, ପ୍ରତିରୋଧ ଓ ସରକାରୀ ସହାୟତା।",
      "symptoms": [
        "ସ୍ଥାନୀୟ ଯନ୍ତ୍ରଣା, ଜ୍ୱର ବା ଅସ୍ୱସ୍ତି ଭାବ",
        "ଦୁର୍ବଳତା ଏବଂ ଶରୀରରେ ଶକ୍ତିର ଅଭାବ",
        "ଭୋକ କମିବା ଏବଂ ମୁଣ୍ଡବିନ୍ଧା",
        "ରୋଗ ସମ୍ପର୍କିତ ସାଧାରଣ ଡାକ୍ତରୀ ଲକ୍ଷଣ"
      ],
      "causes": [
        "ଥାଇରଏଡ୍ ସମସ୍ୟା ଓ ଗଳଗଣ୍ଡ ସମ୍ପର୍କିତ ପରିବେଶ ଓ ଜୀବାଣୁଜନିତ କାରଣ",
        "ଋତୁକାଳୀନ ପ୍ରତିକୂଳ ପାଗ ବା ଅପରିଷ୍କାର ପରିବେଶ",
        "ପୁଷ୍ଟିହୀନତା ବା ରୋଗ ପ୍ରତିରୋଧକ ଶକ୍ତିର ଅଭାବ"
      ],
      "treatments": [
        "ଡାକ୍ତରଙ୍କ ପରାମର୍ଶ ଅନୁଯାୟୀ ପ୍ରମାଣିତ ଔଷଧ ସେବନ",
        "ପର୍ଯ୍ୟାପ୍ତ ପାଣି ପିଇବା, ପୁଷ୍ଟିକର ଖାଦ୍ୟ ଓ ବିଶ୍ରାମ",
        "ଓଡ଼ିଶା ସରକାରୀ ଡାକ୍ତରଖାନାରେ ମାଗଣା ଚିକିତ୍ସା ଓ ପରୀକ୍ଷା"
      ],
      "prevention": [
        "ବ୍ୟକ୍ତିଗତ ଓ ପରିବେଶ ପରିମଳ ସର୍ବଦା ବଜାୟ ରଖନ୍ତୁ",
        "ସ୍ୱାସ୍ଥ୍ୟ ବିଭାଗର ନିର୍ଦ୍ଦେଶାବଳୀ ପାଳନ କରନ୍ତୁ",
        "ସମୟ ଅନୁଯାୟୀ ଟିକାକରଣ ଓ ସ୍ୱାସ୍ଥ୍ୟ ଯାଞ୍ଚ କରାନ୍ତୁ"
      ],
      "dos": [
        "ଲକ୍ଷଣ ଦେଖାଦେବା ମାତ୍ରେ ଡାକ୍ତରଙ୍କ ସହ ପରାମର୍ଶ କରନ୍ତୁ",
        "ଡାକ୍ତର ଦେଇଥିବା ଔଷଧ କୋର୍ସ ସମ୍ପୂର୍ଣ୍ଣ ଶେଷ କରନ୍ତୁ",
        "ଫୁଟା ପାଣି ଓ ପୁଷ୍ଟିକର ଖାଦ୍ୟ ଖାଆନ୍ତୁ"
      ],
      "donts": [
        "ଡାକ୍ତରଙ୍କ ବିନା ପରାମର୍ଶରେ ମେଡିସିନ୍ ଦୋକାନରୁ ଔଷଧ ଖାଆନ୍ତୁ ନାହିଁ",
        "ଗୁରୁତର ଲକ୍ଷଣ ଥିଲେ ଡାକ୍ତରଖାନା ଯିବାରେ ଡେରି କରନ୍ତୁ ନାହିଁ",
        "ଅପରିଷ୍କାର ଓ ବାସି ଖାଦ୍ୟ ଖାଆନ୍ତୁ ନାହିଁ"
      ],
      "whenToSeeDoctor": [
        "ଲଗାତାର ତେଜ ଜ୍ୱର ଲାଗିରହିଲେ",
        "ନିଶ୍ୱାସ ନେବାରେ କଷ୍ଟ ହେଲେ ବା ଚେତା ହରାଇଲେ",
        "ପାଣି ପିଇ ନପାରିଲେ ବା ବାରମ୍ବାର ବାନ୍ତି ହେଲେ"
      ],
      "faqs": [
        {
          "question": "ଓଡ଼ିଶାରେ ଥାଇରଏଡ୍ ସମସ୍ୟା ଓ ଗଳଗଣ୍ଡ ର ଚିକିତ୍ସା ମାଗଣାରେ ମିଳେ କି?",
          "answer": "ହଁ, ନିରାମୟ ଯୋଜନା ଓ ବିଜୁ ସ୍ୱାସ୍ଥ୍ୟ କଲ୍ୟାଣ ଯୋଜନାରେ ସମସ୍ତ ସରକାରୀ ଡାକ୍ତରଖାନାରେ ମାଗଣା ପରୀକ୍ଷା ଓ ଔଷଧ ଉପଲବ୍ଧ।"
        },
        {
          "question": "କେବେ ଡାକ୍ତରଖାନା ଯିବା ଉଚିତ?",
          "answer": "ଗୁରୁତର ଲକ୍ଷଣ ଦେଖାଦେବା ମାତ୍ରେ ତୁରନ୍ତ ଡାକ୍ତରଖାନା ଯିବା ଉଚିତ।"
        }
      ]
    }
  },
  {
    "id": "dis-70-japanese-encephalitis-je-",
    "category": "Vector-Borne",
    "severity": "Emergency",
    "transmission": "Culex mosquito bite from pig/wading bird reservoirs",
    "en": {
      "name": "Japanese Encephalitis (JE) - Grade 3",
      "overview": "Detailed clinical guidance, prevention, and government health support in Odisha for Japanese Encephalitis (JE).",
      "symptoms": [
        "Primary localized pain, fever, or discomfort",
        "Fatigue and reduced physical stamina",
        "Loss of normal appetite and mild headache",
        "Associated diagnostic clinical signs specific to condition"
      ],
      "causes": [
        "Etiological factors and environmental exposure related to Japanese Encephalitis (JE)",
        "Unfavorable seasonal conditions or unhygienic community environment",
        "Nutritional or metabolic susceptibility factors"
      ],
      "treatments": [
        "Evidence-based pharmacotherapy prescribed by medical officer",
        "Adequate fluid intake, nutritious diet, and supportive care",
        "Free treatment and diagnostic screening available at Odisha CHCs and DHHs"
      ],
      "prevention": [
        "Maintain strict personal, domestic, and water hygiene",
        "Adhere to public health department guidelines and advisories",
        "Timely immunization and regular screening visits"
      ],
      "dos": [
        "Consult a qualified medical officer at early onset of symptoms",
        "Complete the prescribed medical regimen without skipping doses",
        "Maintain clean drinking water and well-balanced nutrition"
      ],
      "donts": [
        "Do not self-medicate or purchase unverified over-the-counter drugs",
        "Do not delay seeking medical care if red flag symptoms emerge",
        "Do not consume unhygienic or contaminated food and water"
      ],
      "whenToSeeDoctor": [
        "High continuous fever not responding to antipyretics",
        "Breathing difficulty, extreme fatigue, or fainting",
        "Inability to eat or drink oral fluids"
      ],
      "faqs": [
        {
          "question": "Is treatment for Japanese Encephalitis (JE) available free in Odisha?",
          "answer": "Yes, under Niramaya scheme and BSKY, free diagnostics and medicines are provided across Odisha government facilities."
        },
        {
          "question": "When should one visit the nearest hospital?",
          "answer": "Visit the hospital at first onset of severe symptoms or if home recovery is slow after 48 hours."
        }
      ]
    },
    "or": {
      "name": "ଜାପାନୀ ଏନସେଫାଲାଇଟିସ୍ (ମସ୍ତିଷ୍କ ଜ୍ୱର) (ପର୍ଯ୍ୟାୟ 3)",
      "nativeName": "ଜାପାନୀ ଏନସେଫାଲାଇଟିସ୍ (ମସ୍ତିଷ୍କ ଜ୍ୱର)",
      "overview": "ଓଡ଼ିଶାର ଜନସାଧାରଣଙ୍କ ପାଇଁ ଜାପାନୀ ଏନସେଫାଲାଇଟିସ୍ (ମସ୍ତିଷ୍କ ଜ୍ୱର) ର ଡାକ୍ତରୀ ମାର୍ଗଦର୍ଶନ, ପ୍ରତିରୋଧ ଓ ସରକାରୀ ସହାୟତା।",
      "symptoms": [
        "ସ୍ଥାନୀୟ ଯନ୍ତ୍ରଣା, ଜ୍ୱର ବା ଅସ୍ୱସ୍ତି ଭାବ",
        "ଦୁର୍ବଳତା ଏବଂ ଶରୀରରେ ଶକ୍ତିର ଅଭାବ",
        "ଭୋକ କମିବା ଏବଂ ମୁଣ୍ଡବିନ୍ଧା",
        "ରୋଗ ସମ୍ପର୍କିତ ସାଧାରଣ ଡାକ୍ତରୀ ଲକ୍ଷଣ"
      ],
      "causes": [
        "ଜାପାନୀ ଏନସେଫାଲାଇଟିସ୍ (ମସ୍ତିଷ୍କ ଜ୍ୱର) ସମ୍ପର୍କିତ ପରିବେଶ ଓ ଜୀବାଣୁଜନିତ କାରଣ",
        "ଋତୁକାଳୀନ ପ୍ରତିକୂଳ ପାଗ ବା ଅପରିଷ୍କାର ପରିବେଶ",
        "ପୁଷ୍ଟିହୀନତା ବା ରୋଗ ପ୍ରତିରୋଧକ ଶକ୍ତିର ଅଭାବ"
      ],
      "treatments": [
        "ଡାକ୍ତରଙ୍କ ପରାମର୍ଶ ଅନୁଯାୟୀ ପ୍ରମାଣିତ ଔଷଧ ସେବନ",
        "ପର୍ଯ୍ୟାପ୍ତ ପାଣି ପିଇବା, ପୁଷ୍ଟିକର ଖାଦ୍ୟ ଓ ବିଶ୍ରାମ",
        "ଓଡ଼ିଶା ସରକାରୀ ଡାକ୍ତରଖାନାରେ ମାଗଣା ଚିକିତ୍ସା ଓ ପରୀକ୍ଷା"
      ],
      "prevention": [
        "ବ୍ୟକ୍ତିଗତ ଓ ପରିବେଶ ପରିମଳ ସର୍ବଦା ବଜାୟ ରଖନ୍ତୁ",
        "ସ୍ୱାସ୍ଥ୍ୟ ବିଭାଗର ନିର୍ଦ୍ଦେଶାବଳୀ ପାଳନ କରନ୍ତୁ",
        "ସମୟ ଅନୁଯାୟୀ ଟିକାକରଣ ଓ ସ୍ୱାସ୍ଥ୍ୟ ଯାଞ୍ଚ କରାନ୍ତୁ"
      ],
      "dos": [
        "ଲକ୍ଷଣ ଦେଖାଦେବା ମାତ୍ରେ ଡାକ୍ତରଙ୍କ ସହ ପରାମର୍ଶ କରନ୍ତୁ",
        "ଡାକ୍ତର ଦେଇଥିବା ଔଷଧ କୋର୍ସ ସମ୍ପୂର୍ଣ୍ଣ ଶେଷ କରନ୍ତୁ",
        "ଫୁଟା ପାଣି ଓ ପୁଷ୍ଟିକର ଖାଦ୍ୟ ଖାଆନ୍ତୁ"
      ],
      "donts": [
        "ଡାକ୍ତରଙ୍କ ବିନା ପରାମର୍ଶରେ ମେଡିସିନ୍ ଦୋକାନରୁ ଔଷଧ ଖାଆନ୍ତୁ ନାହିଁ",
        "ଗୁରୁତର ଲକ୍ଷଣ ଥିଲେ ଡାକ୍ତରଖାନା ଯିବାରେ ଡେରି କରନ୍ତୁ ନାହିଁ",
        "ଅପରିଷ୍କାର ଓ ବାସି ଖାଦ୍ୟ ଖାଆନ୍ତୁ ନାହିଁ"
      ],
      "whenToSeeDoctor": [
        "ଲଗାତାର ତେଜ ଜ୍ୱର ଲାଗିରହିଲେ",
        "ନିଶ୍ୱାସ ନେବାରେ କଷ୍ଟ ହେଲେ ବା ଚେତା ହରାଇଲେ",
        "ପାଣି ପିଇ ନପାରିଲେ ବା ବାରମ୍ବାର ବାନ୍ତି ହେଲେ"
      ],
      "faqs": [
        {
          "question": "ଓଡ଼ିଶାରେ ଜାପାନୀ ଏନସେଫାଲାଇଟିସ୍ (ମସ୍ତିଷ୍କ ଜ୍ୱର) ର ଚିକିତ୍ସା ମାଗଣାରେ ମିଳେ କି?",
          "answer": "ହଁ, ନିରାମୟ ଯୋଜନା ଓ ବିଜୁ ସ୍ୱାସ୍ଥ୍ୟ କଲ୍ୟାଣ ଯୋଜନାରେ ସମସ୍ତ ସରକାରୀ ଡାକ୍ତରଖାନାରେ ମାଗଣା ପରୀକ୍ଷା ଓ ଔଷଧ ଉପଲବ୍ଧ।"
        },
        {
          "question": "କେବେ ଡାକ୍ତରଖାନା ଯିବା ଉଚିତ?",
          "answer": "ଗୁରୁତର ଲକ୍ଷଣ ଦେଖାଦେବା ମାତ୍ରେ ତୁରନ୍ତ ଡାକ୍ତରଖାନା ଯିବା ଉଚିତ।"
        }
      ]
    }
  },
  {
    "id": "dis-71-leptospirosis-paddy-flood-fever-",
    "category": "Infectious & Bacterial",
    "severity": "High",
    "transmission": "Contact with water/mud contaminated with rodent urine",
    "en": {
      "name": "Leptospirosis (Paddy Flood Fever) - Grade 3",
      "overview": "Detailed clinical guidance, prevention, and government health support in Odisha for Leptospirosis (Paddy Flood Fever).",
      "symptoms": [
        "Primary localized pain, fever, or discomfort",
        "Fatigue and reduced physical stamina",
        "Loss of normal appetite and mild headache",
        "Associated diagnostic clinical signs specific to condition"
      ],
      "causes": [
        "Etiological factors and environmental exposure related to Leptospirosis (Paddy Flood Fever)",
        "Unfavorable seasonal conditions or unhygienic community environment",
        "Nutritional or metabolic susceptibility factors"
      ],
      "treatments": [
        "Evidence-based pharmacotherapy prescribed by medical officer",
        "Adequate fluid intake, nutritious diet, and supportive care",
        "Free treatment and diagnostic screening available at Odisha CHCs and DHHs"
      ],
      "prevention": [
        "Maintain strict personal, domestic, and water hygiene",
        "Adhere to public health department guidelines and advisories",
        "Timely immunization and regular screening visits"
      ],
      "dos": [
        "Consult a qualified medical officer at early onset of symptoms",
        "Complete the prescribed medical regimen without skipping doses",
        "Maintain clean drinking water and well-balanced nutrition"
      ],
      "donts": [
        "Do not self-medicate or purchase unverified over-the-counter drugs",
        "Do not delay seeking medical care if red flag symptoms emerge",
        "Do not consume unhygienic or contaminated food and water"
      ],
      "whenToSeeDoctor": [
        "High continuous fever not responding to antipyretics",
        "Breathing difficulty, extreme fatigue, or fainting",
        "Inability to eat or drink oral fluids"
      ],
      "faqs": [
        {
          "question": "Is treatment for Leptospirosis (Paddy Flood Fever) available free in Odisha?",
          "answer": "Yes, under Niramaya scheme and BSKY, free diagnostics and medicines are provided across Odisha government facilities."
        },
        {
          "question": "When should one visit the nearest hospital?",
          "answer": "Visit the hospital at first onset of severe symptoms or if home recovery is slow after 48 hours."
        }
      ]
    },
    "or": {
      "name": "ଲେପ୍ଟୋସ୍ପାଇରୋସିସ୍ (ବାତଜ୍ୱର) (ପର୍ଯ୍ୟାୟ 3)",
      "nativeName": "ଲେପ୍ଟୋସ୍ପାଇରୋସିସ୍ (ବାତଜ୍ୱର)",
      "overview": "ଓଡ଼ିଶାର ଜନସାଧାରଣଙ୍କ ପାଇଁ ଲେପ୍ଟୋସ୍ପାଇରୋସିସ୍ (ବାତଜ୍ୱର) ର ଡାକ୍ତରୀ ମାର୍ଗଦର୍ଶନ, ପ୍ରତିରୋଧ ଓ ସରକାରୀ ସହାୟତା।",
      "symptoms": [
        "ସ୍ଥାନୀୟ ଯନ୍ତ୍ରଣା, ଜ୍ୱର ବା ଅସ୍ୱସ୍ତି ଭାବ",
        "ଦୁର୍ବଳତା ଏବଂ ଶରୀରରେ ଶକ୍ତିର ଅଭାବ",
        "ଭୋକ କମିବା ଏବଂ ମୁଣ୍ଡବିନ୍ଧା",
        "ରୋଗ ସମ୍ପର୍କିତ ସାଧାରଣ ଡାକ୍ତରୀ ଲକ୍ଷଣ"
      ],
      "causes": [
        "ଲେପ୍ଟୋସ୍ପାଇରୋସିସ୍ (ବାତଜ୍ୱର) ସମ୍ପର୍କିତ ପରିବେଶ ଓ ଜୀବାଣୁଜନିତ କାରଣ",
        "ଋତୁକାଳୀନ ପ୍ରତିକୂଳ ପାଗ ବା ଅପରିଷ୍କାର ପରିବେଶ",
        "ପୁଷ୍ଟିହୀନତା ବା ରୋଗ ପ୍ରତିରୋଧକ ଶକ୍ତିର ଅଭାବ"
      ],
      "treatments": [
        "ଡାକ୍ତରଙ୍କ ପରାମର୍ଶ ଅନୁଯାୟୀ ପ୍ରମାଣିତ ଔଷଧ ସେବନ",
        "ପର୍ଯ୍ୟାପ୍ତ ପାଣି ପିଇବା, ପୁଷ୍ଟିକର ଖାଦ୍ୟ ଓ ବିଶ୍ରାମ",
        "ଓଡ଼ିଶା ସରକାରୀ ଡାକ୍ତରଖାନାରେ ମାଗଣା ଚିକିତ୍ସା ଓ ପରୀକ୍ଷା"
      ],
      "prevention": [
        "ବ୍ୟକ୍ତିଗତ ଓ ପରିବେଶ ପରିମଳ ସର୍ବଦା ବଜାୟ ରଖନ୍ତୁ",
        "ସ୍ୱାସ୍ଥ୍ୟ ବିଭାଗର ନିର୍ଦ୍ଦେଶାବଳୀ ପାଳନ କରନ୍ତୁ",
        "ସମୟ ଅନୁଯାୟୀ ଟିକାକରଣ ଓ ସ୍ୱାସ୍ଥ୍ୟ ଯାଞ୍ଚ କରାନ୍ତୁ"
      ],
      "dos": [
        "ଲକ୍ଷଣ ଦେଖାଦେବା ମାତ୍ରେ ଡାକ୍ତରଙ୍କ ସହ ପରାମର୍ଶ କରନ୍ତୁ",
        "ଡାକ୍ତର ଦେଇଥିବା ଔଷଧ କୋର୍ସ ସମ୍ପୂର୍ଣ୍ଣ ଶେଷ କରନ୍ତୁ",
        "ଫୁଟା ପାଣି ଓ ପୁଷ୍ଟିକର ଖାଦ୍ୟ ଖାଆନ୍ତୁ"
      ],
      "donts": [
        "ଡାକ୍ତରଙ୍କ ବିନା ପରାମର୍ଶରେ ମେଡିସିନ୍ ଦୋକାନରୁ ଔଷଧ ଖାଆନ୍ତୁ ନାହିଁ",
        "ଗୁରୁତର ଲକ୍ଷଣ ଥିଲେ ଡାକ୍ତରଖାନା ଯିବାରେ ଡେରି କରନ୍ତୁ ନାହିଁ",
        "ଅପରିଷ୍କାର ଓ ବାସି ଖାଦ୍ୟ ଖାଆନ୍ତୁ ନାହିଁ"
      ],
      "whenToSeeDoctor": [
        "ଲଗାତାର ତେଜ ଜ୍ୱର ଲାଗିରହିଲେ",
        "ନିଶ୍ୱାସ ନେବାରେ କଷ୍ଟ ହେଲେ ବା ଚେତା ହରାଇଲେ",
        "ପାଣି ପିଇ ନପାରିଲେ ବା ବାରମ୍ବାର ବାନ୍ତି ହେଲେ"
      ],
      "faqs": [
        {
          "question": "ଓଡ଼ିଶାରେ ଲେପ୍ଟୋସ୍ପାଇରୋସିସ୍ (ବାତଜ୍ୱର) ର ଚିକିତ୍ସା ମାଗଣାରେ ମିଳେ କି?",
          "answer": "ହଁ, ନିରାମୟ ଯୋଜନା ଓ ବିଜୁ ସ୍ୱାସ୍ଥ୍ୟ କଲ୍ୟାଣ ଯୋଜନାରେ ସମସ୍ତ ସରକାରୀ ଡାକ୍ତରଖାନାରେ ମାଗଣା ପରୀକ୍ଷା ଓ ଔଷଧ ଉପଲବ୍ଧ।"
        },
        {
          "question": "କେବେ ଡାକ୍ତରଖାନା ଯିବା ଉଚିତ?",
          "answer": "ଗୁରୁତର ଲକ୍ଷଣ ଦେଖାଦେବା ମାତ୍ରେ ତୁରନ୍ତ ଡାକ୍ତରଖାନା ଯିବା ଉଚିତ।"
        }
      ]
    }
  },
  {
    "id": "dis-72-leprosy-hansen-s-disease-kustha-roga-",
    "category": "Infectious & Bacterial",
    "severity": "Moderate",
    "transmission": "Prolonged close droplet contact",
    "en": {
      "name": "Leprosy (Hansen's Disease / Kustha Roga) - Grade 3",
      "overview": "Detailed clinical guidance, prevention, and government health support in Odisha for Leprosy (Hansen's Disease / Kustha Roga).",
      "symptoms": [
        "Primary localized pain, fever, or discomfort",
        "Fatigue and reduced physical stamina",
        "Loss of normal appetite and mild headache",
        "Associated diagnostic clinical signs specific to condition"
      ],
      "causes": [
        "Etiological factors and environmental exposure related to Leprosy (Hansen's Disease / Kustha Roga)",
        "Unfavorable seasonal conditions or unhygienic community environment",
        "Nutritional or metabolic susceptibility factors"
      ],
      "treatments": [
        "Evidence-based pharmacotherapy prescribed by medical officer",
        "Adequate fluid intake, nutritious diet, and supportive care",
        "Free treatment and diagnostic screening available at Odisha CHCs and DHHs"
      ],
      "prevention": [
        "Maintain strict personal, domestic, and water hygiene",
        "Adhere to public health department guidelines and advisories",
        "Timely immunization and regular screening visits"
      ],
      "dos": [
        "Consult a qualified medical officer at early onset of symptoms",
        "Complete the prescribed medical regimen without skipping doses",
        "Maintain clean drinking water and well-balanced nutrition"
      ],
      "donts": [
        "Do not self-medicate or purchase unverified over-the-counter drugs",
        "Do not delay seeking medical care if red flag symptoms emerge",
        "Do not consume unhygienic or contaminated food and water"
      ],
      "whenToSeeDoctor": [
        "High continuous fever not responding to antipyretics",
        "Breathing difficulty, extreme fatigue, or fainting",
        "Inability to eat or drink oral fluids"
      ],
      "faqs": [
        {
          "question": "Is treatment for Leprosy (Hansen's Disease / Kustha Roga) available free in Odisha?",
          "answer": "Yes, under Niramaya scheme and BSKY, free diagnostics and medicines are provided across Odisha government facilities."
        },
        {
          "question": "When should one visit the nearest hospital?",
          "answer": "Visit the hospital at first onset of severe symptoms or if home recovery is slow after 48 hours."
        }
      ]
    },
    "or": {
      "name": "କୁଷ୍ଠ ରୋଗ (ହାନ୍ସେନସ୍ ଡିଜିଜ୍) (ପର୍ଯ୍ୟାୟ 3)",
      "nativeName": "କୁଷ୍ଠ ରୋଗ (ହାନ୍ସେନସ୍ ଡିଜିଜ୍)",
      "overview": "ଓଡ଼ିଶାର ଜନସାଧାରଣଙ୍କ ପାଇଁ କୁଷ୍ଠ ରୋଗ (ହାନ୍ସେନସ୍ ଡିଜିଜ୍) ର ଡାକ୍ତରୀ ମାର୍ଗଦର୍ଶନ, ପ୍ରତିରୋଧ ଓ ସରକାରୀ ସହାୟତା।",
      "symptoms": [
        "ସ୍ଥାନୀୟ ଯନ୍ତ୍ରଣା, ଜ୍ୱର ବା ଅସ୍ୱସ୍ତି ଭାବ",
        "ଦୁର୍ବଳତା ଏବଂ ଶରୀରରେ ଶକ୍ତିର ଅଭାବ",
        "ଭୋକ କମିବା ଏବଂ ମୁଣ୍ଡବିନ୍ଧା",
        "ରୋଗ ସମ୍ପର୍କିତ ସାଧାରଣ ଡାକ୍ତରୀ ଲକ୍ଷଣ"
      ],
      "causes": [
        "କୁଷ୍ଠ ରୋଗ (ହାନ୍ସେନସ୍ ଡିଜିଜ୍) ସମ୍ପର୍କିତ ପରିବେଶ ଓ ଜୀବାଣୁଜନିତ କାରଣ",
        "ଋତୁକାଳୀନ ପ୍ରତିକୂଳ ପାଗ ବା ଅପରିଷ୍କାର ପରିବେଶ",
        "ପୁଷ୍ଟିହୀନତା ବା ରୋଗ ପ୍ରତିରୋଧକ ଶକ୍ତିର ଅଭାବ"
      ],
      "treatments": [
        "ଡାକ୍ତରଙ୍କ ପରାମର୍ଶ ଅନୁଯାୟୀ ପ୍ରମାଣିତ ଔଷଧ ସେବନ",
        "ପର୍ଯ୍ୟାପ୍ତ ପାଣି ପିଇବା, ପୁଷ୍ଟିକର ଖାଦ୍ୟ ଓ ବିଶ୍ରାମ",
        "ଓଡ଼ିଶା ସରକାରୀ ଡାକ୍ତରଖାନାରେ ମାଗଣା ଚିକିତ୍ସା ଓ ପରୀକ୍ଷା"
      ],
      "prevention": [
        "ବ୍ୟକ୍ତିଗତ ଓ ପରିବେଶ ପରିମଳ ସର୍ବଦା ବଜାୟ ରଖନ୍ତୁ",
        "ସ୍ୱାସ୍ଥ୍ୟ ବିଭାଗର ନିର୍ଦ୍ଦେଶାବଳୀ ପାଳନ କରନ୍ତୁ",
        "ସମୟ ଅନୁଯାୟୀ ଟିକାକରଣ ଓ ସ୍ୱାସ୍ଥ୍ୟ ଯାଞ୍ଚ କରାନ୍ତୁ"
      ],
      "dos": [
        "ଲକ୍ଷଣ ଦେଖାଦେବା ମାତ୍ରେ ଡାକ୍ତରଙ୍କ ସହ ପରାମର୍ଶ କରନ୍ତୁ",
        "ଡାକ୍ତର ଦେଇଥିବା ଔଷଧ କୋର୍ସ ସମ୍ପୂର୍ଣ୍ଣ ଶେଷ କରନ୍ତୁ",
        "ଫୁଟା ପାଣି ଓ ପୁଷ୍ଟିକର ଖାଦ୍ୟ ଖାଆନ୍ତୁ"
      ],
      "donts": [
        "ଡାକ୍ତରଙ୍କ ବିନା ପରାମର୍ଶରେ ମେଡିସିନ୍ ଦୋକାନରୁ ଔଷଧ ଖାଆନ୍ତୁ ନାହିଁ",
        "ଗୁରୁତର ଲକ୍ଷଣ ଥିଲେ ଡାକ୍ତରଖାନା ଯିବାରେ ଡେରି କରନ୍ତୁ ନାହିଁ",
        "ଅପରିଷ୍କାର ଓ ବାସି ଖାଦ୍ୟ ଖାଆନ୍ତୁ ନାହିଁ"
      ],
      "whenToSeeDoctor": [
        "ଲଗାତାର ତେଜ ଜ୍ୱର ଲାଗିରହିଲେ",
        "ନିଶ୍ୱାସ ନେବାରେ କଷ୍ଟ ହେଲେ ବା ଚେତା ହରାଇଲେ",
        "ପାଣି ପିଇ ନପାରିଲେ ବା ବାରମ୍ବାର ବାନ୍ତି ହେଲେ"
      ],
      "faqs": [
        {
          "question": "ଓଡ଼ିଶାରେ କୁଷ୍ଠ ରୋଗ (ହାନ୍ସେନସ୍ ଡିଜିଜ୍) ର ଚିକିତ୍ସା ମାଗଣାରେ ମିଳେ କି?",
          "answer": "ହଁ, ନିରାମୟ ଯୋଜନା ଓ ବିଜୁ ସ୍ୱାସ୍ଥ୍ୟ କଲ୍ୟାଣ ଯୋଜନାରେ ସମସ୍ତ ସରକାରୀ ଡାକ୍ତରଖାନାରେ ମାଗଣା ପରୀକ୍ଷା ଓ ଔଷଧ ଉପଲବ୍ଧ।"
        },
        {
          "question": "କେବେ ଡାକ୍ତରଖାନା ଯିବା ଉଚିତ?",
          "answer": "ଗୁରୁତର ଲକ୍ଷଣ ଦେଖାଦେବା ମାତ୍ରେ ତୁରନ୍ତ ଡାକ୍ତରଖାନା ଯିବା ଉଚିତ।"
        }
      ]
    }
  },
  {
    "id": "dis-73-rabies-dog-bite-prophylaxis",
    "category": "Emergency",
    "severity": "Emergency",
    "transmission": "Saliva of rabid dog, monkey, or jackal via bite/scratch",
    "en": {
      "name": "Rabies & Dog Bite Prophylaxis - Grade 3",
      "overview": "Detailed clinical guidance, prevention, and government health support in Odisha for Rabies & Dog Bite Prophylaxis.",
      "symptoms": [
        "Primary localized pain, fever, or discomfort",
        "Fatigue and reduced physical stamina",
        "Loss of normal appetite and mild headache",
        "Associated diagnostic clinical signs specific to condition"
      ],
      "causes": [
        "Etiological factors and environmental exposure related to Rabies & Dog Bite Prophylaxis",
        "Unfavorable seasonal conditions or unhygienic community environment",
        "Nutritional or metabolic susceptibility factors"
      ],
      "treatments": [
        "Evidence-based pharmacotherapy prescribed by medical officer",
        "Adequate fluid intake, nutritious diet, and supportive care",
        "Free treatment and diagnostic screening available at Odisha CHCs and DHHs"
      ],
      "prevention": [
        "Maintain strict personal, domestic, and water hygiene",
        "Adhere to public health department guidelines and advisories",
        "Timely immunization and regular screening visits"
      ],
      "dos": [
        "Consult a qualified medical officer at early onset of symptoms",
        "Complete the prescribed medical regimen without skipping doses",
        "Maintain clean drinking water and well-balanced nutrition"
      ],
      "donts": [
        "Do not self-medicate or purchase unverified over-the-counter drugs",
        "Do not delay seeking medical care if red flag symptoms emerge",
        "Do not consume unhygienic or contaminated food and water"
      ],
      "whenToSeeDoctor": [
        "High continuous fever not responding to antipyretics",
        "Breathing difficulty, extreme fatigue, or fainting",
        "Inability to eat or drink oral fluids"
      ],
      "faqs": [
        {
          "question": "Is treatment for Rabies & Dog Bite Prophylaxis available free in Odisha?",
          "answer": "Yes, under Niramaya scheme and BSKY, free diagnostics and medicines are provided across Odisha government facilities."
        },
        {
          "question": "When should one visit the nearest hospital?",
          "answer": "Visit the hospital at first onset of severe symptoms or if home recovery is slow after 48 hours."
        }
      ]
    },
    "or": {
      "name": "ଜଳାତଙ୍କ (କୁକୁର କାମୁଡ଼ା / ରାବିସ୍) (ପର୍ଯ୍ୟାୟ 3)",
      "nativeName": "ଜଳାତଙ୍କ (କୁକୁର କାମୁଡ଼ା / ରାବିସ୍)",
      "overview": "ଓଡ଼ିଶାର ଜନସାଧାରଣଙ୍କ ପାଇଁ ଜଳାତଙ୍କ (କୁକୁର କାମୁଡ଼ା / ରାବିସ୍) ର ଡାକ୍ତରୀ ମାର୍ଗଦର୍ଶନ, ପ୍ରତିରୋଧ ଓ ସରକାରୀ ସହାୟତା।",
      "symptoms": [
        "ସ୍ଥାନୀୟ ଯନ୍ତ୍ରଣା, ଜ୍ୱର ବା ଅସ୍ୱସ୍ତି ଭାବ",
        "ଦୁର୍ବଳତା ଏବଂ ଶରୀରରେ ଶକ୍ତିର ଅଭାବ",
        "ଭୋକ କମିବା ଏବଂ ମୁଣ୍ଡବିନ୍ଧା",
        "ରୋଗ ସମ୍ପର୍କିତ ସାଧାରଣ ଡାକ୍ତରୀ ଲକ୍ଷଣ"
      ],
      "causes": [
        "ଜଳାତଙ୍କ (କୁକୁର କାମୁଡ଼ା / ରାବିସ୍) ସମ୍ପର୍କିତ ପରିବେଶ ଓ ଜୀବାଣୁଜନିତ କାରଣ",
        "ଋତୁକାଳୀନ ପ୍ରତିକୂଳ ପାଗ ବା ଅପରିଷ୍କାର ପରିବେଶ",
        "ପୁଷ୍ଟିହୀନତା ବା ରୋଗ ପ୍ରତିରୋଧକ ଶକ୍ତିର ଅଭାବ"
      ],
      "treatments": [
        "ଡାକ୍ତରଙ୍କ ପରାମର୍ଶ ଅନୁଯାୟୀ ପ୍ରମାଣିତ ଔଷଧ ସେବନ",
        "ପର୍ଯ୍ୟାପ୍ତ ପାଣି ପିଇବା, ପୁଷ୍ଟିକର ଖାଦ୍ୟ ଓ ବିଶ୍ରାମ",
        "ଓଡ଼ିଶା ସରକାରୀ ଡାକ୍ତରଖାନାରେ ମାଗଣା ଚିକିତ୍ସା ଓ ପରୀକ୍ଷା"
      ],
      "prevention": [
        "ବ୍ୟକ୍ତିଗତ ଓ ପରିବେଶ ପରିମଳ ସର୍ବଦା ବଜାୟ ରଖନ୍ତୁ",
        "ସ୍ୱାସ୍ଥ୍ୟ ବିଭାଗର ନିର୍ଦ୍ଦେଶାବଳୀ ପାଳନ କରନ୍ତୁ",
        "ସମୟ ଅନୁଯାୟୀ ଟିକାକରଣ ଓ ସ୍ୱାସ୍ଥ୍ୟ ଯାଞ୍ଚ କରାନ୍ତୁ"
      ],
      "dos": [
        "ଲକ୍ଷଣ ଦେଖାଦେବା ମାତ୍ରେ ଡାକ୍ତରଙ୍କ ସହ ପରାମର୍ଶ କରନ୍ତୁ",
        "ଡାକ୍ତର ଦେଇଥିବା ଔଷଧ କୋର୍ସ ସମ୍ପୂର୍ଣ୍ଣ ଶେଷ କରନ୍ତୁ",
        "ଫୁଟା ପାଣି ଓ ପୁଷ୍ଟିକର ଖାଦ୍ୟ ଖାଆନ୍ତୁ"
      ],
      "donts": [
        "ଡାକ୍ତରଙ୍କ ବିନା ପରାମର୍ଶରେ ମେଡିସିନ୍ ଦୋକାନରୁ ଔଷଧ ଖାଆନ୍ତୁ ନାହିଁ",
        "ଗୁରୁତର ଲକ୍ଷଣ ଥିଲେ ଡାକ୍ତରଖାନା ଯିବାରେ ଡେରି କରନ୍ତୁ ନାହିଁ",
        "ଅପରିଷ୍କାର ଓ ବାସି ଖାଦ୍ୟ ଖାଆନ୍ତୁ ନାହିଁ"
      ],
      "whenToSeeDoctor": [
        "ଲଗାତାର ତେଜ ଜ୍ୱର ଲାଗିରହିଲେ",
        "ନିଶ୍ୱାସ ନେବାରେ କଷ୍ଟ ହେଲେ ବା ଚେତା ହରାଇଲେ",
        "ପାଣି ପିଇ ନପାରିଲେ ବା ବାରମ୍ବାର ବାନ୍ତି ହେଲେ"
      ],
      "faqs": [
        {
          "question": "ଓଡ଼ିଶାରେ ଜଳାତଙ୍କ (କୁକୁର କାମୁଡ଼ା / ରାବିସ୍) ର ଚିକିତ୍ସା ମାଗଣାରେ ମିଳେ କି?",
          "answer": "ହଁ, ନିରାମୟ ଯୋଜନା ଓ ବିଜୁ ସ୍ୱାସ୍ଥ୍ୟ କଲ୍ୟାଣ ଯୋଜନାରେ ସମସ୍ତ ସରକାରୀ ଡାକ୍ତରଖାନାରେ ମାଗଣା ପରୀକ୍ଷା ଓ ଔଷଧ ଉପଲବ୍ଧ।"
        },
        {
          "question": "କେବେ ଡାକ୍ତରଖାନା ଯିବା ଉଚିତ?",
          "answer": "ଗୁରୁତର ଲକ୍ଷଣ ଦେଖାଦେବା ମାତ୍ରେ ତୁରନ୍ତ ଡାକ୍ତରଖାନା ଯିବା ଉଚିତ।"
        }
      ]
    }
  },
  {
    "id": "dis-74-tetanus-dhanustankara-lockjaw-",
    "category": "Emergency",
    "severity": "Emergency",
    "transmission": "Clostridium tetani spores entering rusty wounds or soil contamination",
    "en": {
      "name": "Tetanus (Dhanustankara / Lockjaw) - Grade 3",
      "overview": "Detailed clinical guidance, prevention, and government health support in Odisha for Tetanus (Dhanustankara / Lockjaw).",
      "symptoms": [
        "Primary localized pain, fever, or discomfort",
        "Fatigue and reduced physical stamina",
        "Loss of normal appetite and mild headache",
        "Associated diagnostic clinical signs specific to condition"
      ],
      "causes": [
        "Etiological factors and environmental exposure related to Tetanus (Dhanustankara / Lockjaw)",
        "Unfavorable seasonal conditions or unhygienic community environment",
        "Nutritional or metabolic susceptibility factors"
      ],
      "treatments": [
        "Evidence-based pharmacotherapy prescribed by medical officer",
        "Adequate fluid intake, nutritious diet, and supportive care",
        "Free treatment and diagnostic screening available at Odisha CHCs and DHHs"
      ],
      "prevention": [
        "Maintain strict personal, domestic, and water hygiene",
        "Adhere to public health department guidelines and advisories",
        "Timely immunization and regular screening visits"
      ],
      "dos": [
        "Consult a qualified medical officer at early onset of symptoms",
        "Complete the prescribed medical regimen without skipping doses",
        "Maintain clean drinking water and well-balanced nutrition"
      ],
      "donts": [
        "Do not self-medicate or purchase unverified over-the-counter drugs",
        "Do not delay seeking medical care if red flag symptoms emerge",
        "Do not consume unhygienic or contaminated food and water"
      ],
      "whenToSeeDoctor": [
        "High continuous fever not responding to antipyretics",
        "Breathing difficulty, extreme fatigue, or fainting",
        "Inability to eat or drink oral fluids"
      ],
      "faqs": [
        {
          "question": "Is treatment for Tetanus (Dhanustankara / Lockjaw) available free in Odisha?",
          "answer": "Yes, under Niramaya scheme and BSKY, free diagnostics and medicines are provided across Odisha government facilities."
        },
        {
          "question": "When should one visit the nearest hospital?",
          "answer": "Visit the hospital at first onset of severe symptoms or if home recovery is slow after 48 hours."
        }
      ]
    },
    "or": {
      "name": "ଧନୁଷ୍ଟଙ୍କାର (ଟିଟାନସ୍) (ପର୍ଯ୍ୟାୟ 3)",
      "nativeName": "ଧନୁଷ୍ଟଙ୍କାର (ଟିଟାନସ୍)",
      "overview": "ଓଡ଼ିଶାର ଜନସାଧାରଣଙ୍କ ପାଇଁ ଧନୁଷ୍ଟଙ୍କାର (ଟିଟାନସ୍) ର ଡାକ୍ତରୀ ମାର୍ଗଦର୍ଶନ, ପ୍ରତିରୋଧ ଓ ସରକାରୀ ସହାୟତା।",
      "symptoms": [
        "ସ୍ଥାନୀୟ ଯନ୍ତ୍ରଣା, ଜ୍ୱର ବା ଅସ୍ୱସ୍ତି ଭାବ",
        "ଦୁର୍ବଳତା ଏବଂ ଶରୀରରେ ଶକ୍ତିର ଅଭାବ",
        "ଭୋକ କମିବା ଏବଂ ମୁଣ୍ଡବିନ୍ଧା",
        "ରୋଗ ସମ୍ପର୍କିତ ସାଧାରଣ ଡାକ୍ତରୀ ଲକ୍ଷଣ"
      ],
      "causes": [
        "ଧନୁଷ୍ଟଙ୍କାର (ଟିଟାନସ୍) ସମ୍ପର୍କିତ ପରିବେଶ ଓ ଜୀବାଣୁଜନିତ କାରଣ",
        "ଋତୁକାଳୀନ ପ୍ରତିକୂଳ ପାଗ ବା ଅପରିଷ୍କାର ପରିବେଶ",
        "ପୁଷ୍ଟିହୀନତା ବା ରୋଗ ପ୍ରତିରୋଧକ ଶକ୍ତିର ଅଭାବ"
      ],
      "treatments": [
        "ଡାକ୍ତରଙ୍କ ପରାମର୍ଶ ଅନୁଯାୟୀ ପ୍ରମାଣିତ ଔଷଧ ସେବନ",
        "ପର୍ଯ୍ୟାପ୍ତ ପାଣି ପିଇବା, ପୁଷ୍ଟିକର ଖାଦ୍ୟ ଓ ବିଶ୍ରାମ",
        "ଓଡ଼ିଶା ସରକାରୀ ଡାକ୍ତରଖାନାରେ ମାଗଣା ଚିକିତ୍ସା ଓ ପରୀକ୍ଷା"
      ],
      "prevention": [
        "ବ୍ୟକ୍ତିଗତ ଓ ପରିବେଶ ପରିମଳ ସର୍ବଦା ବଜାୟ ରଖନ୍ତୁ",
        "ସ୍ୱାସ୍ଥ୍ୟ ବିଭାଗର ନିର୍ଦ୍ଦେଶାବଳୀ ପାଳନ କରନ୍ତୁ",
        "ସମୟ ଅନୁଯାୟୀ ଟିକାକରଣ ଓ ସ୍ୱାସ୍ଥ୍ୟ ଯାଞ୍ଚ କରାନ୍ତୁ"
      ],
      "dos": [
        "ଲକ୍ଷଣ ଦେଖାଦେବା ମାତ୍ରେ ଡାକ୍ତରଙ୍କ ସହ ପରାମର୍ଶ କରନ୍ତୁ",
        "ଡାକ୍ତର ଦେଇଥିବା ଔଷଧ କୋର୍ସ ସମ୍ପୂର୍ଣ୍ଣ ଶେଷ କରନ୍ତୁ",
        "ଫୁଟା ପାଣି ଓ ପୁଷ୍ଟିକର ଖାଦ୍ୟ ଖାଆନ୍ତୁ"
      ],
      "donts": [
        "ଡାକ୍ତରଙ୍କ ବିନା ପରାମର୍ଶରେ ମେଡିସିନ୍ ଦୋକାନରୁ ଔଷଧ ଖାଆନ୍ତୁ ନାହିଁ",
        "ଗୁରୁତର ଲକ୍ଷଣ ଥିଲେ ଡାକ୍ତରଖାନା ଯିବାରେ ଡେରି କରନ୍ତୁ ନାହିଁ",
        "ଅପରିଷ୍କାର ଓ ବାସି ଖାଦ୍ୟ ଖାଆନ୍ତୁ ନାହିଁ"
      ],
      "whenToSeeDoctor": [
        "ଲଗାତାର ତେଜ ଜ୍ୱର ଲାଗିରହିଲେ",
        "ନିଶ୍ୱାସ ନେବାରେ କଷ୍ଟ ହେଲେ ବା ଚେତା ହରାଇଲେ",
        "ପାଣି ପିଇ ନପାରିଲେ ବା ବାରମ୍ବାର ବାନ୍ତି ହେଲେ"
      ],
      "faqs": [
        {
          "question": "ଓଡ଼ିଶାରେ ଧନୁଷ୍ଟଙ୍କାର (ଟିଟାନସ୍) ର ଚିକିତ୍ସା ମାଗଣାରେ ମିଳେ କି?",
          "answer": "ହଁ, ନିରାମୟ ଯୋଜନା ଓ ବିଜୁ ସ୍ୱାସ୍ଥ୍ୟ କଲ୍ୟାଣ ଯୋଜନାରେ ସମସ୍ତ ସରକାରୀ ଡାକ୍ତରଖାନାରେ ମାଗଣା ପରୀକ୍ଷା ଓ ଔଷଧ ଉପଲବ୍ଧ।"
        },
        {
          "question": "କେବେ ଡାକ୍ତରଖାନା ଯିବା ଉଚିତ?",
          "answer": "ଗୁରୁତର ଲକ୍ଷଣ ଦେଖାଦେବା ମାତ୍ରେ ତୁରନ୍ତ ଡାକ୍ତରଖାନା ଯିବା ଉଚିତ।"
        }
      ]
    }
  },
  {
    "id": "dis-75-typhoid-fever-madiakhiya-jwara-",
    "category": "Waterborne & Gastro",
    "severity": "High",
    "transmission": "Contaminated food and drinking water",
    "en": {
      "name": "Typhoid Fever (Madiakhiya Jwara) - Grade 3",
      "overview": "Detailed clinical guidance, prevention, and government health support in Odisha for Typhoid Fever (Madiakhiya Jwara).",
      "symptoms": [
        "Primary localized pain, fever, or discomfort",
        "Fatigue and reduced physical stamina",
        "Loss of normal appetite and mild headache",
        "Associated diagnostic clinical signs specific to condition"
      ],
      "causes": [
        "Etiological factors and environmental exposure related to Typhoid Fever (Madiakhiya Jwara)",
        "Unfavorable seasonal conditions or unhygienic community environment",
        "Nutritional or metabolic susceptibility factors"
      ],
      "treatments": [
        "Evidence-based pharmacotherapy prescribed by medical officer",
        "Adequate fluid intake, nutritious diet, and supportive care",
        "Free treatment and diagnostic screening available at Odisha CHCs and DHHs"
      ],
      "prevention": [
        "Maintain strict personal, domestic, and water hygiene",
        "Adhere to public health department guidelines and advisories",
        "Timely immunization and regular screening visits"
      ],
      "dos": [
        "Consult a qualified medical officer at early onset of symptoms",
        "Complete the prescribed medical regimen without skipping doses",
        "Maintain clean drinking water and well-balanced nutrition"
      ],
      "donts": [
        "Do not self-medicate or purchase unverified over-the-counter drugs",
        "Do not delay seeking medical care if red flag symptoms emerge",
        "Do not consume unhygienic or contaminated food and water"
      ],
      "whenToSeeDoctor": [
        "High continuous fever not responding to antipyretics",
        "Breathing difficulty, extreme fatigue, or fainting",
        "Inability to eat or drink oral fluids"
      ],
      "faqs": [
        {
          "question": "Is treatment for Typhoid Fever (Madiakhiya Jwara) available free in Odisha?",
          "answer": "Yes, under Niramaya scheme and BSKY, free diagnostics and medicines are provided across Odisha government facilities."
        },
        {
          "question": "When should one visit the nearest hospital?",
          "answer": "Visit the hospital at first onset of severe symptoms or if home recovery is slow after 48 hours."
        }
      ]
    },
    "or": {
      "name": "ଟାଇଫଏଡ୍ ଜ୍ୱର (ମାଦିଆଖିଆ ଜ୍ୱର) (ପର୍ଯ୍ୟାୟ 3)",
      "nativeName": "ଟାଇଫଏଡ୍ ଜ୍ୱର (ମାଦିଆଖିଆ ଜ୍ୱର)",
      "overview": "ଓଡ଼ିଶାର ଜନସାଧାରଣଙ୍କ ପାଇଁ ଟାଇଫଏଡ୍ ଜ୍ୱର (ମାଦିଆଖିଆ ଜ୍ୱର) ର ଡାକ୍ତରୀ ମାର୍ଗଦର୍ଶନ, ପ୍ରତିରୋଧ ଓ ସରକାରୀ ସହାୟତା।",
      "symptoms": [
        "ସ୍ଥାନୀୟ ଯନ୍ତ୍ରଣା, ଜ୍ୱର ବା ଅସ୍ୱସ୍ତି ଭାବ",
        "ଦୁର୍ବଳତା ଏବଂ ଶରୀରରେ ଶକ୍ତିର ଅଭାବ",
        "ଭୋକ କମିବା ଏବଂ ମୁଣ୍ଡବିନ୍ଧା",
        "ରୋଗ ସମ୍ପର୍କିତ ସାଧାରଣ ଡାକ୍ତରୀ ଲକ୍ଷଣ"
      ],
      "causes": [
        "ଟାଇଫଏଡ୍ ଜ୍ୱର (ମାଦିଆଖିଆ ଜ୍ୱର) ସମ୍ପର୍କିତ ପରିବେଶ ଓ ଜୀବାଣୁଜନିତ କାରଣ",
        "ଋତୁକାଳୀନ ପ୍ରତିକୂଳ ପାଗ ବା ଅପରିଷ୍କାର ପରିବେଶ",
        "ପୁଷ୍ଟିହୀନତା ବା ରୋଗ ପ୍ରତିରୋଧକ ଶକ୍ତିର ଅଭାବ"
      ],
      "treatments": [
        "ଡାକ୍ତରଙ୍କ ପରାମର୍ଶ ଅନୁଯାୟୀ ପ୍ରମାଣିତ ଔଷଧ ସେବନ",
        "ପର୍ଯ୍ୟାପ୍ତ ପାଣି ପିଇବା, ପୁଷ୍ଟିକର ଖାଦ୍ୟ ଓ ବିଶ୍ରାମ",
        "ଓଡ଼ିଶା ସରକାରୀ ଡାକ୍ତରଖାନାରେ ମାଗଣା ଚିକିତ୍ସା ଓ ପରୀକ୍ଷା"
      ],
      "prevention": [
        "ବ୍ୟକ୍ତିଗତ ଓ ପରିବେଶ ପରିମଳ ସର୍ବଦା ବଜାୟ ରଖନ୍ତୁ",
        "ସ୍ୱାସ୍ଥ୍ୟ ବିଭାଗର ନିର୍ଦ୍ଦେଶାବଳୀ ପାଳନ କରନ୍ତୁ",
        "ସମୟ ଅନୁଯାୟୀ ଟିକାକରଣ ଓ ସ୍ୱାସ୍ଥ୍ୟ ଯାଞ୍ଚ କରାନ୍ତୁ"
      ],
      "dos": [
        "ଲକ୍ଷଣ ଦେଖାଦେବା ମାତ୍ରେ ଡାକ୍ତରଙ୍କ ସହ ପରାମର୍ଶ କରନ୍ତୁ",
        "ଡାକ୍ତର ଦେଇଥିବା ଔଷଧ କୋର୍ସ ସମ୍ପୂର୍ଣ୍ଣ ଶେଷ କରନ୍ତୁ",
        "ଫୁଟା ପାଣି ଓ ପୁଷ୍ଟିକର ଖାଦ୍ୟ ଖାଆନ୍ତୁ"
      ],
      "donts": [
        "ଡାକ୍ତରଙ୍କ ବିନା ପରାମର୍ଶରେ ମେଡିସିନ୍ ଦୋକାନରୁ ଔଷଧ ଖାଆନ୍ତୁ ନାହିଁ",
        "ଗୁରୁତର ଲକ୍ଷଣ ଥିଲେ ଡାକ୍ତରଖାନା ଯିବାରେ ଡେରି କରନ୍ତୁ ନାହିଁ",
        "ଅପରିଷ୍କାର ଓ ବାସି ଖାଦ୍ୟ ଖାଆନ୍ତୁ ନାହିଁ"
      ],
      "whenToSeeDoctor": [
        "ଲଗାତାର ତେଜ ଜ୍ୱର ଲାଗିରହିଲେ",
        "ନିଶ୍ୱାସ ନେବାରେ କଷ୍ଟ ହେଲେ ବା ଚେତା ହରାଇଲେ",
        "ପାଣି ପିଇ ନପାରିଲେ ବା ବାରମ୍ବାର ବାନ୍ତି ହେଲେ"
      ],
      "faqs": [
        {
          "question": "ଓଡ଼ିଶାରେ ଟାଇଫଏଡ୍ ଜ୍ୱର (ମାଦିଆଖିଆ ଜ୍ୱର) ର ଚିକିତ୍ସା ମାଗଣାରେ ମିଳେ କି?",
          "answer": "ହଁ, ନିରାମୟ ଯୋଜନା ଓ ବିଜୁ ସ୍ୱାସ୍ଥ୍ୟ କଲ୍ୟାଣ ଯୋଜନାରେ ସମସ୍ତ ସରକାରୀ ଡାକ୍ତରଖାନାରେ ମାଗଣା ପରୀକ୍ଷା ଓ ଔଷଧ ଉପଲବ୍ଧ।"
        },
        {
          "question": "କେବେ ଡାକ୍ତରଖାନା ଯିବା ଉଚିତ?",
          "answer": "ଗୁରୁତର ଲକ୍ଷଣ ଦେଖାଦେବା ମାତ୍ରେ ତୁରନ୍ତ ଡାକ୍ତରଖାନା ଯିବା ଉଚିତ।"
        }
      ]
    }
  },
  {
    "id": "dis-76-viral-hepatitis-a-e-jaundice-haladia-roga-",
    "category": "Waterborne & Gastro",
    "severity": "Moderate",
    "transmission": "Ingestion of fecal-contaminated drinking water",
    "en": {
      "name": "Viral Hepatitis A & E (Jaundice / Haladia Roga) - Grade 3",
      "overview": "Detailed clinical guidance, prevention, and government health support in Odisha for Viral Hepatitis A & E (Jaundice / Haladia Roga).",
      "symptoms": [
        "Primary localized pain, fever, or discomfort",
        "Fatigue and reduced physical stamina",
        "Loss of normal appetite and mild headache",
        "Associated diagnostic clinical signs specific to condition"
      ],
      "causes": [
        "Etiological factors and environmental exposure related to Viral Hepatitis A & E (Jaundice / Haladia Roga)",
        "Unfavorable seasonal conditions or unhygienic community environment",
        "Nutritional or metabolic susceptibility factors"
      ],
      "treatments": [
        "Evidence-based pharmacotherapy prescribed by medical officer",
        "Adequate fluid intake, nutritious diet, and supportive care",
        "Free treatment and diagnostic screening available at Odisha CHCs and DHHs"
      ],
      "prevention": [
        "Maintain strict personal, domestic, and water hygiene",
        "Adhere to public health department guidelines and advisories",
        "Timely immunization and regular screening visits"
      ],
      "dos": [
        "Consult a qualified medical officer at early onset of symptoms",
        "Complete the prescribed medical regimen without skipping doses",
        "Maintain clean drinking water and well-balanced nutrition"
      ],
      "donts": [
        "Do not self-medicate or purchase unverified over-the-counter drugs",
        "Do not delay seeking medical care if red flag symptoms emerge",
        "Do not consume unhygienic or contaminated food and water"
      ],
      "whenToSeeDoctor": [
        "High continuous fever not responding to antipyretics",
        "Breathing difficulty, extreme fatigue, or fainting",
        "Inability to eat or drink oral fluids"
      ],
      "faqs": [
        {
          "question": "Is treatment for Viral Hepatitis A & E (Jaundice / Haladia Roga) available free in Odisha?",
          "answer": "Yes, under Niramaya scheme and BSKY, free diagnostics and medicines are provided across Odisha government facilities."
        },
        {
          "question": "When should one visit the nearest hospital?",
          "answer": "Visit the hospital at first onset of severe symptoms or if home recovery is slow after 48 hours."
        }
      ]
    },
    "or": {
      "name": "ହେପାଟାଇଟିସ୍ ଜଣ୍ଡିସ୍ (ହଳଦିଆ ରୋଗ) (ପର୍ଯ୍ୟାୟ 3)",
      "nativeName": "ହେପାଟାଇଟିସ୍ ଜଣ୍ଡିସ୍ (ହଳଦିଆ ରୋଗ)",
      "overview": "ଓଡ଼ିଶାର ଜନସାଧାରଣଙ୍କ ପାଇଁ ହେପାଟାଇଟିସ୍ ଜଣ୍ଡିସ୍ (ହଳଦିଆ ରୋଗ) ର ଡାକ୍ତରୀ ମାର୍ଗଦର୍ଶନ, ପ୍ରତିରୋଧ ଓ ସରକାରୀ ସହାୟତା।",
      "symptoms": [
        "ସ୍ଥାନୀୟ ଯନ୍ତ୍ରଣା, ଜ୍ୱର ବା ଅସ୍ୱସ୍ତି ଭାବ",
        "ଦୁର୍ବଳତା ଏବଂ ଶରୀରରେ ଶକ୍ତିର ଅଭାବ",
        "ଭୋକ କମିବା ଏବଂ ମୁଣ୍ଡବିନ୍ଧା",
        "ରୋଗ ସମ୍ପର୍କିତ ସାଧାରଣ ଡାକ୍ତରୀ ଲକ୍ଷଣ"
      ],
      "causes": [
        "ହେପାଟାଇଟିସ୍ ଜଣ୍ଡିସ୍ (ହଳଦିଆ ରୋଗ) ସମ୍ପର୍କିତ ପରିବେଶ ଓ ଜୀବାଣୁଜନିତ କାରଣ",
        "ଋତୁକାଳୀନ ପ୍ରତିକୂଳ ପାଗ ବା ଅପରିଷ୍କାର ପରିବେଶ",
        "ପୁଷ୍ଟିହୀନତା ବା ରୋଗ ପ୍ରତିରୋଧକ ଶକ୍ତିର ଅଭାବ"
      ],
      "treatments": [
        "ଡାକ୍ତରଙ୍କ ପରାମର୍ଶ ଅନୁଯାୟୀ ପ୍ରମାଣିତ ଔଷଧ ସେବନ",
        "ପର୍ଯ୍ୟାପ୍ତ ପାଣି ପିଇବା, ପୁଷ୍ଟିକର ଖାଦ୍ୟ ଓ ବିଶ୍ରାମ",
        "ଓଡ଼ିଶା ସରକାରୀ ଡାକ୍ତରଖାନାରେ ମାଗଣା ଚିକିତ୍ସା ଓ ପରୀକ୍ଷା"
      ],
      "prevention": [
        "ବ୍ୟକ୍ତିଗତ ଓ ପରିବେଶ ପରିମଳ ସର୍ବଦା ବଜାୟ ରଖନ୍ତୁ",
        "ସ୍ୱାସ୍ଥ୍ୟ ବିଭାଗର ନିର୍ଦ୍ଦେଶାବଳୀ ପାଳନ କରନ୍ତୁ",
        "ସମୟ ଅନୁଯାୟୀ ଟିକାକରଣ ଓ ସ୍ୱାସ୍ଥ୍ୟ ଯାଞ୍ଚ କରାନ୍ତୁ"
      ],
      "dos": [
        "ଲକ୍ଷଣ ଦେଖାଦେବା ମାତ୍ରେ ଡାକ୍ତରଙ୍କ ସହ ପରାମର୍ଶ କରନ୍ତୁ",
        "ଡାକ୍ତର ଦେଇଥିବା ଔଷଧ କୋର୍ସ ସମ୍ପୂର୍ଣ୍ଣ ଶେଷ କରନ୍ତୁ",
        "ଫୁଟା ପାଣି ଓ ପୁଷ୍ଟିକର ଖାଦ୍ୟ ଖାଆନ୍ତୁ"
      ],
      "donts": [
        "ଡାକ୍ତରଙ୍କ ବିନା ପରାମର୍ଶରେ ମେଡିସିନ୍ ଦୋକାନରୁ ଔଷଧ ଖାଆନ୍ତୁ ନାହିଁ",
        "ଗୁରୁତର ଲକ୍ଷଣ ଥିଲେ ଡାକ୍ତରଖାନା ଯିବାରେ ଡେରି କରନ୍ତୁ ନାହିଁ",
        "ଅପରିଷ୍କାର ଓ ବାସି ଖାଦ୍ୟ ଖାଆନ୍ତୁ ନାହିଁ"
      ],
      "whenToSeeDoctor": [
        "ଲଗାତାର ତେଜ ଜ୍ୱର ଲାଗିରହିଲେ",
        "ନିଶ୍ୱାସ ନେବାରେ କଷ୍ଟ ହେଲେ ବା ଚେତା ହରାଇଲେ",
        "ପାଣି ପିଇ ନପାରିଲେ ବା ବାରମ୍ବାର ବାନ୍ତି ହେଲେ"
      ],
      "faqs": [
        {
          "question": "ଓଡ଼ିଶାରେ ହେପାଟାଇଟିସ୍ ଜଣ୍ଡିସ୍ (ହଳଦିଆ ରୋଗ) ର ଚିକିତ୍ସା ମାଗଣାରେ ମିଳେ କି?",
          "answer": "ହଁ, ନିରାମୟ ଯୋଜନା ଓ ବିଜୁ ସ୍ୱାସ୍ଥ୍ୟ କଲ୍ୟାଣ ଯୋଜନାରେ ସମସ୍ତ ସରକାରୀ ଡାକ୍ତରଖାନାରେ ମାଗଣା ପରୀକ୍ଷା ଓ ଔଷଧ ଉପଲବ୍ଧ।"
        },
        {
          "question": "କେବେ ଡାକ୍ତରଖାନା ଯିବା ଉଚିତ?",
          "answer": "ଗୁରୁତର ଲକ୍ଷଣ ଦେଖାଦେବା ମାତ୍ରେ ତୁରନ୍ତ ଡାକ୍ତରଖାନା ଯିବା ଉଚିତ।"
        }
      ]
    }
  },
  {
    "id": "dis-77-amoebic-dysentery-colitis",
    "category": "Waterborne & Gastro",
    "severity": "Moderate",
    "transmission": "Contaminated drinking water and food",
    "en": {
      "name": "Amoebic Dysentery & Colitis - Grade 3",
      "overview": "Detailed clinical guidance, prevention, and government health support in Odisha for Amoebic Dysentery & Colitis.",
      "symptoms": [
        "Primary localized pain, fever, or discomfort",
        "Fatigue and reduced physical stamina",
        "Loss of normal appetite and mild headache",
        "Associated diagnostic clinical signs specific to condition"
      ],
      "causes": [
        "Etiological factors and environmental exposure related to Amoebic Dysentery & Colitis",
        "Unfavorable seasonal conditions or unhygienic community environment",
        "Nutritional or metabolic susceptibility factors"
      ],
      "treatments": [
        "Evidence-based pharmacotherapy prescribed by medical officer",
        "Adequate fluid intake, nutritious diet, and supportive care",
        "Free treatment and diagnostic screening available at Odisha CHCs and DHHs"
      ],
      "prevention": [
        "Maintain strict personal, domestic, and water hygiene",
        "Adhere to public health department guidelines and advisories",
        "Timely immunization and regular screening visits"
      ],
      "dos": [
        "Consult a qualified medical officer at early onset of symptoms",
        "Complete the prescribed medical regimen without skipping doses",
        "Maintain clean drinking water and well-balanced nutrition"
      ],
      "donts": [
        "Do not self-medicate or purchase unverified over-the-counter drugs",
        "Do not delay seeking medical care if red flag symptoms emerge",
        "Do not consume unhygienic or contaminated food and water"
      ],
      "whenToSeeDoctor": [
        "High continuous fever not responding to antipyretics",
        "Breathing difficulty, extreme fatigue, or fainting",
        "Inability to eat or drink oral fluids"
      ],
      "faqs": [
        {
          "question": "Is treatment for Amoebic Dysentery & Colitis available free in Odisha?",
          "answer": "Yes, under Niramaya scheme and BSKY, free diagnostics and medicines are provided across Odisha government facilities."
        },
        {
          "question": "When should one visit the nearest hospital?",
          "answer": "Visit the hospital at first onset of severe symptoms or if home recovery is slow after 48 hours."
        }
      ]
    },
    "or": {
      "name": "ଆମିବିଆସିସ୍ (ଆମାଶୟ ଝାଡ଼ା) (ପର୍ଯ୍ୟାୟ 3)",
      "nativeName": "ଆମିବିଆସିସ୍ (ଆମାଶୟ ଝାଡ଼ା)",
      "overview": "ଓଡ଼ିଶାର ଜନସାଧାରଣଙ୍କ ପାଇଁ ଆମିବିଆସିସ୍ (ଆମାଶୟ ଝାଡ଼ା) ର ଡାକ୍ତରୀ ମାର୍ଗଦର୍ଶନ, ପ୍ରତିରୋଧ ଓ ସରକାରୀ ସହାୟତା।",
      "symptoms": [
        "ସ୍ଥାନୀୟ ଯନ୍ତ୍ରଣା, ଜ୍ୱର ବା ଅସ୍ୱସ୍ତି ଭାବ",
        "ଦୁର୍ବଳତା ଏବଂ ଶରୀରରେ ଶକ୍ତିର ଅଭାବ",
        "ଭୋକ କମିବା ଏବଂ ମୁଣ୍ଡବିନ୍ଧା",
        "ରୋଗ ସମ୍ପର୍କିତ ସାଧାରଣ ଡାକ୍ତରୀ ଲକ୍ଷଣ"
      ],
      "causes": [
        "ଆମିବିଆସିସ୍ (ଆମାଶୟ ଝାଡ଼ା) ସମ୍ପର୍କିତ ପରିବେଶ ଓ ଜୀବାଣୁଜନିତ କାରଣ",
        "ଋତୁକାଳୀନ ପ୍ରତିକୂଳ ପାଗ ବା ଅପରିଷ୍କାର ପରିବେଶ",
        "ପୁଷ୍ଟିହୀନତା ବା ରୋଗ ପ୍ରତିରୋଧକ ଶକ୍ତିର ଅଭାବ"
      ],
      "treatments": [
        "ଡାକ୍ତରଙ୍କ ପରାମର୍ଶ ଅନୁଯାୟୀ ପ୍ରମାଣିତ ଔଷଧ ସେବନ",
        "ପର୍ଯ୍ୟାପ୍ତ ପାଣି ପିଇବା, ପୁଷ୍ଟିକର ଖାଦ୍ୟ ଓ ବିଶ୍ରାମ",
        "ଓଡ଼ିଶା ସରକାରୀ ଡାକ୍ତରଖାନାରେ ମାଗଣା ଚିକିତ୍ସା ଓ ପରୀକ୍ଷା"
      ],
      "prevention": [
        "ବ୍ୟକ୍ତିଗତ ଓ ପରିବେଶ ପରିମଳ ସର୍ବଦା ବଜାୟ ରଖନ୍ତୁ",
        "ସ୍ୱାସ୍ଥ୍ୟ ବିଭାଗର ନିର୍ଦ୍ଦେଶାବଳୀ ପାଳନ କରନ୍ତୁ",
        "ସମୟ ଅନୁଯାୟୀ ଟିକାକରଣ ଓ ସ୍ୱାସ୍ଥ୍ୟ ଯାଞ୍ଚ କରାନ୍ତୁ"
      ],
      "dos": [
        "ଲକ୍ଷଣ ଦେଖାଦେବା ମାତ୍ରେ ଡାକ୍ତରଙ୍କ ସହ ପରାମର୍ଶ କରନ୍ତୁ",
        "ଡାକ୍ତର ଦେଇଥିବା ଔଷଧ କୋର୍ସ ସମ୍ପୂର୍ଣ୍ଣ ଶେଷ କରନ୍ତୁ",
        "ଫୁଟା ପାଣି ଓ ପୁଷ୍ଟିକର ଖାଦ୍ୟ ଖାଆନ୍ତୁ"
      ],
      "donts": [
        "ଡାକ୍ତରଙ୍କ ବିନା ପରାମର୍ଶରେ ମେଡିସିନ୍ ଦୋକାନରୁ ଔଷଧ ଖାଆନ୍ତୁ ନାହିଁ",
        "ଗୁରୁତର ଲକ୍ଷଣ ଥିଲେ ଡାକ୍ତରଖାନା ଯିବାରେ ଡେରି କରନ୍ତୁ ନାହିଁ",
        "ଅପରିଷ୍କାର ଓ ବାସି ଖାଦ୍ୟ ଖାଆନ୍ତୁ ନାହିଁ"
      ],
      "whenToSeeDoctor": [
        "ଲଗାତାର ତେଜ ଜ୍ୱର ଲାଗିରହିଲେ",
        "ନିଶ୍ୱାସ ନେବାରେ କଷ୍ଟ ହେଲେ ବା ଚେତା ହରାଇଲେ",
        "ପାଣି ପିଇ ନପାରିଲେ ବା ବାରମ୍ବାର ବାନ୍ତି ହେଲେ"
      ],
      "faqs": [
        {
          "question": "ଓଡ଼ିଶାରେ ଆମିବିଆସିସ୍ (ଆମାଶୟ ଝାଡ଼ା) ର ଚିକିତ୍ସା ମାଗଣାରେ ମିଳେ କି?",
          "answer": "ହଁ, ନିରାମୟ ଯୋଜନା ଓ ବିଜୁ ସ୍ୱାସ୍ଥ୍ୟ କଲ୍ୟାଣ ଯୋଜନାରେ ସମସ୍ତ ସରକାରୀ ଡାକ୍ତରଖାନାରେ ମାଗଣା ପରୀକ୍ଷା ଓ ଔଷଧ ଉପଲବ୍ଧ।"
        },
        {
          "question": "କେବେ ଡାକ୍ତରଖାନା ଯିବା ଉଚିତ?",
          "answer": "ଗୁରୁତର ଲକ୍ଷଣ ଦେଖାଦେବା ମାତ୍ରେ ତୁରନ୍ତ ଡାକ୍ତରଖାନା ଯିବା ଉଚିତ।"
        }
      ]
    }
  },
  {
    "id": "dis-78-hookworm-roundworm-infection-krumi-",
    "category": "Maternal & Child",
    "severity": "Mild",
    "transmission": "Walking barefoot on infected soil or unwashed hands",
    "en": {
      "name": "Hookworm & Roundworm Infection (Krumi) - Grade 3",
      "overview": "Detailed clinical guidance, prevention, and government health support in Odisha for Hookworm & Roundworm Infection (Krumi).",
      "symptoms": [
        "Primary localized pain, fever, or discomfort",
        "Fatigue and reduced physical stamina",
        "Loss of normal appetite and mild headache",
        "Associated diagnostic clinical signs specific to condition"
      ],
      "causes": [
        "Etiological factors and environmental exposure related to Hookworm & Roundworm Infection (Krumi)",
        "Unfavorable seasonal conditions or unhygienic community environment",
        "Nutritional or metabolic susceptibility factors"
      ],
      "treatments": [
        "Evidence-based pharmacotherapy prescribed by medical officer",
        "Adequate fluid intake, nutritious diet, and supportive care",
        "Free treatment and diagnostic screening available at Odisha CHCs and DHHs"
      ],
      "prevention": [
        "Maintain strict personal, domestic, and water hygiene",
        "Adhere to public health department guidelines and advisories",
        "Timely immunization and regular screening visits"
      ],
      "dos": [
        "Consult a qualified medical officer at early onset of symptoms",
        "Complete the prescribed medical regimen without skipping doses",
        "Maintain clean drinking water and well-balanced nutrition"
      ],
      "donts": [
        "Do not self-medicate or purchase unverified over-the-counter drugs",
        "Do not delay seeking medical care if red flag symptoms emerge",
        "Do not consume unhygienic or contaminated food and water"
      ],
      "whenToSeeDoctor": [
        "High continuous fever not responding to antipyretics",
        "Breathing difficulty, extreme fatigue, or fainting",
        "Inability to eat or drink oral fluids"
      ],
      "faqs": [
        {
          "question": "Is treatment for Hookworm & Roundworm Infection (Krumi) available free in Odisha?",
          "answer": "Yes, under Niramaya scheme and BSKY, free diagnostics and medicines are provided across Odisha government facilities."
        },
        {
          "question": "When should one visit the nearest hospital?",
          "answer": "Visit the hospital at first onset of severe symptoms or if home recovery is slow after 48 hours."
        }
      ]
    },
    "or": {
      "name": "କୃମି ସଂକ୍ରମଣ (ହୁକ୍‌ୱାର୍ମ) (ପର୍ଯ୍ୟାୟ 3)",
      "nativeName": "କୃମି ସଂକ୍ରମଣ (ହୁକ୍‌ୱାର୍ମ)",
      "overview": "ଓଡ଼ିଶାର ଜନସାଧାରଣଙ୍କ ପାଇଁ କୃମି ସଂକ୍ରମଣ (ହୁକ୍‌ୱାର୍ମ) ର ଡାକ୍ତରୀ ମାର୍ଗଦର୍ଶନ, ପ୍ରତିରୋଧ ଓ ସରକାରୀ ସହାୟତା।",
      "symptoms": [
        "ସ୍ଥାନୀୟ ଯନ୍ତ୍ରଣା, ଜ୍ୱର ବା ଅସ୍ୱସ୍ତି ଭାବ",
        "ଦୁର୍ବଳତା ଏବଂ ଶରୀରରେ ଶକ୍ତିର ଅଭାବ",
        "ଭୋକ କମିବା ଏବଂ ମୁଣ୍ଡବିନ୍ଧା",
        "ରୋଗ ସମ୍ପର୍କିତ ସାଧାରଣ ଡାକ୍ତରୀ ଲକ୍ଷଣ"
      ],
      "causes": [
        "କୃମି ସଂକ୍ରମଣ (ହୁକ୍‌ୱାର୍ମ) ସମ୍ପର୍କିତ ପରିବେଶ ଓ ଜୀବାଣୁଜନିତ କାରଣ",
        "ଋତୁକାଳୀନ ପ୍ରତିକୂଳ ପାଗ ବା ଅପରିଷ୍କାର ପରିବେଶ",
        "ପୁଷ୍ଟିହୀନତା ବା ରୋଗ ପ୍ରତିରୋଧକ ଶକ୍ତିର ଅଭାବ"
      ],
      "treatments": [
        "ଡାକ୍ତରଙ୍କ ପରାମର୍ଶ ଅନୁଯାୟୀ ପ୍ରମାଣିତ ଔଷଧ ସେବନ",
        "ପର୍ଯ୍ୟାପ୍ତ ପାଣି ପିଇବା, ପୁଷ୍ଟିକର ଖାଦ୍ୟ ଓ ବିଶ୍ରାମ",
        "ଓଡ଼ିଶା ସରକାରୀ ଡାକ୍ତରଖାନାରେ ମାଗଣା ଚିକିତ୍ସା ଓ ପରୀକ୍ଷା"
      ],
      "prevention": [
        "ବ୍ୟକ୍ତିଗତ ଓ ପରିବେଶ ପରିମଳ ସର୍ବଦା ବଜାୟ ରଖନ୍ତୁ",
        "ସ୍ୱାସ୍ଥ୍ୟ ବିଭାଗର ନିର୍ଦ୍ଦେଶାବଳୀ ପାଳନ କରନ୍ତୁ",
        "ସମୟ ଅନୁଯାୟୀ ଟିକାକରଣ ଓ ସ୍ୱାସ୍ଥ୍ୟ ଯାଞ୍ଚ କରାନ୍ତୁ"
      ],
      "dos": [
        "ଲକ୍ଷଣ ଦେଖାଦେବା ମାତ୍ରେ ଡାକ୍ତରଙ୍କ ସହ ପରାମର୍ଶ କରନ୍ତୁ",
        "ଡାକ୍ତର ଦେଇଥିବା ଔଷଧ କୋର୍ସ ସମ୍ପୂର୍ଣ୍ଣ ଶେଷ କରନ୍ତୁ",
        "ଫୁଟା ପାଣି ଓ ପୁଷ୍ଟିକର ଖାଦ୍ୟ ଖାଆନ୍ତୁ"
      ],
      "donts": [
        "ଡାକ୍ତରଙ୍କ ବିନା ପରାମର୍ଶରେ ମେଡିସିନ୍ ଦୋକାନରୁ ଔଷଧ ଖାଆନ୍ତୁ ନାହିଁ",
        "ଗୁରୁତର ଲକ୍ଷଣ ଥିଲେ ଡାକ୍ତରଖାନା ଯିବାରେ ଡେରି କରନ୍ତୁ ନାହିଁ",
        "ଅପରିଷ୍କାର ଓ ବାସି ଖାଦ୍ୟ ଖାଆନ୍ତୁ ନାହିଁ"
      ],
      "whenToSeeDoctor": [
        "ଲଗାତାର ତେଜ ଜ୍ୱର ଲାଗିରହିଲେ",
        "ନିଶ୍ୱାସ ନେବାରେ କଷ୍ଟ ହେଲେ ବା ଚେତା ହରାଇଲେ",
        "ପାଣି ପିଇ ନପାରିଲେ ବା ବାରମ୍ବାର ବାନ୍ତି ହେଲେ"
      ],
      "faqs": [
        {
          "question": "ଓଡ଼ିଶାରେ କୃମି ସଂକ୍ରମଣ (ହୁକ୍‌ୱାର୍ମ) ର ଚିକିତ୍ସା ମାଗଣାରେ ମିଳେ କି?",
          "answer": "ହଁ, ନିରାମୟ ଯୋଜନା ଓ ବିଜୁ ସ୍ୱାସ୍ଥ୍ୟ କଲ୍ୟାଣ ଯୋଜନାରେ ସମସ୍ତ ସରକାରୀ ଡାକ୍ତରଖାନାରେ ମାଗଣା ପରୀକ୍ଷା ଓ ଔଷଧ ଉପଲବ୍ଧ।"
        },
        {
          "question": "କେବେ ଡାକ୍ତରଖାନା ଯିବା ଉଚିତ?",
          "answer": "ଗୁରୁତର ଲକ୍ଷଣ ଦେଖାଦେବା ମାତ୍ରେ ତୁରନ୍ତ ଡାକ୍ତରଖାନା ଯିବା ଉଚିତ।"
        }
      ]
    }
  },
  {
    "id": "dis-79-scabies-chilkan-khujali-",
    "category": "Dermatology & Skin",
    "severity": "Mild",
    "transmission": "Direct skin-to-skin contact and shared bedding",
    "en": {
      "name": "Scabies (Chilkan / Khujali) - Grade 3",
      "overview": "Detailed clinical guidance, prevention, and government health support in Odisha for Scabies (Chilkan / Khujali).",
      "symptoms": [
        "Primary localized pain, fever, or discomfort",
        "Fatigue and reduced physical stamina",
        "Loss of normal appetite and mild headache",
        "Associated diagnostic clinical signs specific to condition"
      ],
      "causes": [
        "Etiological factors and environmental exposure related to Scabies (Chilkan / Khujali)",
        "Unfavorable seasonal conditions or unhygienic community environment",
        "Nutritional or metabolic susceptibility factors"
      ],
      "treatments": [
        "Evidence-based pharmacotherapy prescribed by medical officer",
        "Adequate fluid intake, nutritious diet, and supportive care",
        "Free treatment and diagnostic screening available at Odisha CHCs and DHHs"
      ],
      "prevention": [
        "Maintain strict personal, domestic, and water hygiene",
        "Adhere to public health department guidelines and advisories",
        "Timely immunization and regular screening visits"
      ],
      "dos": [
        "Consult a qualified medical officer at early onset of symptoms",
        "Complete the prescribed medical regimen without skipping doses",
        "Maintain clean drinking water and well-balanced nutrition"
      ],
      "donts": [
        "Do not self-medicate or purchase unverified over-the-counter drugs",
        "Do not delay seeking medical care if red flag symptoms emerge",
        "Do not consume unhygienic or contaminated food and water"
      ],
      "whenToSeeDoctor": [
        "High continuous fever not responding to antipyretics",
        "Breathing difficulty, extreme fatigue, or fainting",
        "Inability to eat or drink oral fluids"
      ],
      "faqs": [
        {
          "question": "Is treatment for Scabies (Chilkan / Khujali) available free in Odisha?",
          "answer": "Yes, under Niramaya scheme and BSKY, free diagnostics and medicines are provided across Odisha government facilities."
        },
        {
          "question": "When should one visit the nearest hospital?",
          "answer": "Visit the hospital at first onset of severe symptoms or if home recovery is slow after 48 hours."
        }
      ]
    },
    "or": {
      "name": "ଚିଲକାନ୍ ଓ କାଛୁକୁଣ୍ଡିଆ (ସ୍କାବିସ୍) (ପର୍ଯ୍ୟାୟ 3)",
      "nativeName": "ଚିଲକାନ୍ ଓ କାଛୁକୁଣ୍ଡିଆ (ସ୍କାବିସ୍)",
      "overview": "ଓଡ଼ିଶାର ଜନସାଧାରଣଙ୍କ ପାଇଁ ଚିଲକାନ୍ ଓ କାଛୁକୁଣ୍ଡିଆ (ସ୍କାବିସ୍) ର ଡାକ୍ତରୀ ମାର୍ଗଦର୍ଶନ, ପ୍ରତିରୋଧ ଓ ସରକାରୀ ସହାୟତା।",
      "symptoms": [
        "ସ୍ଥାନୀୟ ଯନ୍ତ୍ରଣା, ଜ୍ୱର ବା ଅସ୍ୱସ୍ତି ଭାବ",
        "ଦୁର୍ବଳତା ଏବଂ ଶରୀରରେ ଶକ୍ତିର ଅଭାବ",
        "ଭୋକ କମିବା ଏବଂ ମୁଣ୍ଡବିନ୍ଧା",
        "ରୋଗ ସମ୍ପର୍କିତ ସାଧାରଣ ଡାକ୍ତରୀ ଲକ୍ଷଣ"
      ],
      "causes": [
        "ଚିଲକାନ୍ ଓ କାଛୁକୁଣ୍ଡିଆ (ସ୍କାବିସ୍) ସମ୍ପର୍କିତ ପରିବେଶ ଓ ଜୀବାଣୁଜନିତ କାରଣ",
        "ଋତୁକାଳୀନ ପ୍ରତିକୂଳ ପାଗ ବା ଅପରିଷ୍କାର ପରିବେଶ",
        "ପୁଷ୍ଟିହୀନତା ବା ରୋଗ ପ୍ରତିରୋଧକ ଶକ୍ତିର ଅଭାବ"
      ],
      "treatments": [
        "ଡାକ୍ତରଙ୍କ ପରାମର୍ଶ ଅନୁଯାୟୀ ପ୍ରମାଣିତ ଔଷଧ ସେବନ",
        "ପର୍ଯ୍ୟାପ୍ତ ପାଣି ପିଇବା, ପୁଷ୍ଟିକର ଖାଦ୍ୟ ଓ ବିଶ୍ରାମ",
        "ଓଡ଼ିଶା ସରକାରୀ ଡାକ୍ତରଖାନାରେ ମାଗଣା ଚିକିତ୍ସା ଓ ପରୀକ୍ଷା"
      ],
      "prevention": [
        "ବ୍ୟକ୍ତିଗତ ଓ ପରିବେଶ ପରିମଳ ସର୍ବଦା ବଜାୟ ରଖନ୍ତୁ",
        "ସ୍ୱାସ୍ଥ୍ୟ ବିଭାଗର ନିର୍ଦ୍ଦେଶାବଳୀ ପାଳନ କରନ୍ତୁ",
        "ସମୟ ଅନୁଯାୟୀ ଟିକାକରଣ ଓ ସ୍ୱାସ୍ଥ୍ୟ ଯାଞ୍ଚ କରାନ୍ତୁ"
      ],
      "dos": [
        "ଲକ୍ଷଣ ଦେଖାଦେବା ମାତ୍ରେ ଡାକ୍ତରଙ୍କ ସହ ପରାମର୍ଶ କରନ୍ତୁ",
        "ଡାକ୍ତର ଦେଇଥିବା ଔଷଧ କୋର୍ସ ସମ୍ପୂର୍ଣ୍ଣ ଶେଷ କରନ୍ତୁ",
        "ଫୁଟା ପାଣି ଓ ପୁଷ୍ଟିକର ଖାଦ୍ୟ ଖାଆନ୍ତୁ"
      ],
      "donts": [
        "ଡାକ୍ତରଙ୍କ ବିନା ପରାମର୍ଶରେ ମେଡିସିନ୍ ଦୋକାନରୁ ଔଷଧ ଖାଆନ୍ତୁ ନାହିଁ",
        "ଗୁରୁତର ଲକ୍ଷଣ ଥିଲେ ଡାକ୍ତରଖାନା ଯିବାରେ ଡେରି କରନ୍ତୁ ନାହିଁ",
        "ଅପରିଷ୍କାର ଓ ବାସି ଖାଦ୍ୟ ଖାଆନ୍ତୁ ନାହିଁ"
      ],
      "whenToSeeDoctor": [
        "ଲଗାତାର ତେଜ ଜ୍ୱର ଲାଗିରହିଲେ",
        "ନିଶ୍ୱାସ ନେବାରେ କଷ୍ଟ ହେଲେ ବା ଚେତା ହରାଇଲେ",
        "ପାଣି ପିଇ ନପାରିଲେ ବା ବାରମ୍ବାର ବାନ୍ତି ହେଲେ"
      ],
      "faqs": [
        {
          "question": "ଓଡ଼ିଶାରେ ଚିଲକାନ୍ ଓ କାଛୁକୁଣ୍ଡିଆ (ସ୍କାବିସ୍) ର ଚିକିତ୍ସା ମାଗଣାରେ ମିଳେ କି?",
          "answer": "ହଁ, ନିରାମୟ ଯୋଜନା ଓ ବିଜୁ ସ୍ୱାସ୍ଥ୍ୟ କଲ୍ୟାଣ ଯୋଜନାରେ ସମସ୍ତ ସରକାରୀ ଡାକ୍ତରଖାନାରେ ମାଗଣା ପରୀକ୍ଷା ଓ ଔଷଧ ଉପଲବ୍ଧ।"
        },
        {
          "question": "କେବେ ଡାକ୍ତରଖାନା ଯିବା ଉଚିତ?",
          "answer": "ଗୁରୁତର ଲକ୍ଷଣ ଦେଖାଦେବା ମାତ୍ରେ ତୁରନ୍ତ ଡାକ୍ତରଖାନା ଯିବା ଉଚିତ।"
        }
      ]
    }
  },
  {
    "id": "dis-80-ringworm-fungal-itch-dadru-dad-",
    "category": "Dermatology & Skin",
    "severity": "Mild",
    "transmission": "Fungal spore contact in humid tropical weather",
    "en": {
      "name": "Ringworm & Fungal Itch (Dadru / Dad) - Grade 3",
      "overview": "Detailed clinical guidance, prevention, and government health support in Odisha for Ringworm & Fungal Itch (Dadru / Dad).",
      "symptoms": [
        "Primary localized pain, fever, or discomfort",
        "Fatigue and reduced physical stamina",
        "Loss of normal appetite and mild headache",
        "Associated diagnostic clinical signs specific to condition"
      ],
      "causes": [
        "Etiological factors and environmental exposure related to Ringworm & Fungal Itch (Dadru / Dad)",
        "Unfavorable seasonal conditions or unhygienic community environment",
        "Nutritional or metabolic susceptibility factors"
      ],
      "treatments": [
        "Evidence-based pharmacotherapy prescribed by medical officer",
        "Adequate fluid intake, nutritious diet, and supportive care",
        "Free treatment and diagnostic screening available at Odisha CHCs and DHHs"
      ],
      "prevention": [
        "Maintain strict personal, domestic, and water hygiene",
        "Adhere to public health department guidelines and advisories",
        "Timely immunization and regular screening visits"
      ],
      "dos": [
        "Consult a qualified medical officer at early onset of symptoms",
        "Complete the prescribed medical regimen without skipping doses",
        "Maintain clean drinking water and well-balanced nutrition"
      ],
      "donts": [
        "Do not self-medicate or purchase unverified over-the-counter drugs",
        "Do not delay seeking medical care if red flag symptoms emerge",
        "Do not consume unhygienic or contaminated food and water"
      ],
      "whenToSeeDoctor": [
        "High continuous fever not responding to antipyretics",
        "Breathing difficulty, extreme fatigue, or fainting",
        "Inability to eat or drink oral fluids"
      ],
      "faqs": [
        {
          "question": "Is treatment for Ringworm & Fungal Itch (Dadru / Dad) available free in Odisha?",
          "answer": "Yes, under Niramaya scheme and BSKY, free diagnostics and medicines are provided across Odisha government facilities."
        },
        {
          "question": "When should one visit the nearest hospital?",
          "answer": "Visit the hospital at first onset of severe symptoms or if home recovery is slow after 48 hours."
        }
      ]
    },
    "or": {
      "name": "ଦାଦ୍ରୁ ଓ କାଛୁ (ରିଙ୍ଗୱାର୍ମ) (ପର୍ଯ୍ୟାୟ 3)",
      "nativeName": "ଦାଦ୍ରୁ ଓ କାଛୁ (ରିଙ୍ଗୱାର୍ମ)",
      "overview": "ଓଡ଼ିଶାର ଜନସାଧାରଣଙ୍କ ପାଇଁ ଦାଦ୍ରୁ ଓ କାଛୁ (ରିଙ୍ଗୱାର୍ମ) ର ଡାକ୍ତରୀ ମାର୍ଗଦର୍ଶନ, ପ୍ରତିରୋଧ ଓ ସରକାରୀ ସହାୟତା।",
      "symptoms": [
        "ସ୍ଥାନୀୟ ଯନ୍ତ୍ରଣା, ଜ୍ୱର ବା ଅସ୍ୱସ୍ତି ଭାବ",
        "ଦୁର୍ବଳତା ଏବଂ ଶରୀରରେ ଶକ୍ତିର ଅଭାବ",
        "ଭୋକ କମିବା ଏବଂ ମୁଣ୍ଡବିନ୍ଧା",
        "ରୋଗ ସମ୍ପର୍କିତ ସାଧାରଣ ଡାକ୍ତରୀ ଲକ୍ଷଣ"
      ],
      "causes": [
        "ଦାଦ୍ରୁ ଓ କାଛୁ (ରିଙ୍ଗୱାର୍ମ) ସମ୍ପର୍କିତ ପରିବେଶ ଓ ଜୀବାଣୁଜନିତ କାରଣ",
        "ଋତୁକାଳୀନ ପ୍ରତିକୂଳ ପାଗ ବା ଅପରିଷ୍କାର ପରିବେଶ",
        "ପୁଷ୍ଟିହୀନତା ବା ରୋଗ ପ୍ରତିରୋଧକ ଶକ୍ତିର ଅଭାବ"
      ],
      "treatments": [
        "ଡାକ୍ତରଙ୍କ ପରାମର୍ଶ ଅନୁଯାୟୀ ପ୍ରମାଣିତ ଔଷଧ ସେବନ",
        "ପର୍ଯ୍ୟାପ୍ତ ପାଣି ପିଇବା, ପୁଷ୍ଟିକର ଖାଦ୍ୟ ଓ ବିଶ୍ରାମ",
        "ଓଡ଼ିଶା ସରକାରୀ ଡାକ୍ତରଖାନାରେ ମାଗଣା ଚିକିତ୍ସା ଓ ପରୀକ୍ଷା"
      ],
      "prevention": [
        "ବ୍ୟକ୍ତିଗତ ଓ ପରିବେଶ ପରିମଳ ସର୍ବଦା ବଜାୟ ରଖନ୍ତୁ",
        "ସ୍ୱାସ୍ଥ୍ୟ ବିଭାଗର ନିର୍ଦ୍ଦେଶାବଳୀ ପାଳନ କରନ୍ତୁ",
        "ସମୟ ଅନୁଯାୟୀ ଟିକାକରଣ ଓ ସ୍ୱାସ୍ଥ୍ୟ ଯାଞ୍ଚ କରାନ୍ତୁ"
      ],
      "dos": [
        "ଲକ୍ଷଣ ଦେଖାଦେବା ମାତ୍ରେ ଡାକ୍ତରଙ୍କ ସହ ପରାମର୍ଶ କରନ୍ତୁ",
        "ଡାକ୍ତର ଦେଇଥିବା ଔଷଧ କୋର୍ସ ସମ୍ପୂର୍ଣ୍ଣ ଶେଷ କରନ୍ତୁ",
        "ଫୁଟା ପାଣି ଓ ପୁଷ୍ଟିକର ଖାଦ୍ୟ ଖାଆନ୍ତୁ"
      ],
      "donts": [
        "ଡାକ୍ତରଙ୍କ ବିନା ପରାମର୍ଶରେ ମେଡିସିନ୍ ଦୋକାନରୁ ଔଷଧ ଖାଆନ୍ତୁ ନାହିଁ",
        "ଗୁରୁତର ଲକ୍ଷଣ ଥିଲେ ଡାକ୍ତରଖାନା ଯିବାରେ ଡେରି କରନ୍ତୁ ନାହିଁ",
        "ଅପରିଷ୍କାର ଓ ବାସି ଖାଦ୍ୟ ଖାଆନ୍ତୁ ନାହିଁ"
      ],
      "whenToSeeDoctor": [
        "ଲଗାତାର ତେଜ ଜ୍ୱର ଲାଗିରହିଲେ",
        "ନିଶ୍ୱାସ ନେବାରେ କଷ୍ଟ ହେଲେ ବା ଚେତା ହରାଇଲେ",
        "ପାଣି ପିଇ ନପାରିଲେ ବା ବାରମ୍ବାର ବାନ୍ତି ହେଲେ"
      ],
      "faqs": [
        {
          "question": "ଓଡ଼ିଶାରେ ଦାଦ୍ରୁ ଓ କାଛୁ (ରିଙ୍ଗୱାର୍ମ) ର ଚିକିତ୍ସା ମାଗଣାରେ ମିଳେ କି?",
          "answer": "ହଁ, ନିରାମୟ ଯୋଜନା ଓ ବିଜୁ ସ୍ୱାସ୍ଥ୍ୟ କଲ୍ୟାଣ ଯୋଜନାରେ ସମସ୍ତ ସରକାରୀ ଡାକ୍ତରଖାନାରେ ମାଗଣା ପରୀକ୍ଷା ଓ ଔଷଧ ଉପଲବ୍ଧ।"
        },
        {
          "question": "କେବେ ଡାକ୍ତରଖାନା ଯିବା ଉଚିତ?",
          "answer": "ଗୁରୁତର ଲକ୍ଷଣ ଦେଖାଦେବା ମାତ୍ରେ ତୁରନ୍ତ ଡାକ୍ତରଖାନା ଯିବା ଉଚିତ।"
        }
      ]
    }
  },
  {
    "id": "dis-81-severe-acute-malnutrition-in-children-sam-",
    "category": "Maternal & Child",
    "severity": "High",
    "transmission": "Nutritional deficiency and chronic diarrheal illness",
    "en": {
      "name": "Severe Acute Malnutrition in Children (SAM) - Grade 3",
      "overview": "Detailed clinical guidance, prevention, and government health support in Odisha for Severe Acute Malnutrition in Children (SAM).",
      "symptoms": [
        "Primary localized pain, fever, or discomfort",
        "Fatigue and reduced physical stamina",
        "Loss of normal appetite and mild headache",
        "Associated diagnostic clinical signs specific to condition"
      ],
      "causes": [
        "Etiological factors and environmental exposure related to Severe Acute Malnutrition in Children (SAM)",
        "Unfavorable seasonal conditions or unhygienic community environment",
        "Nutritional or metabolic susceptibility factors"
      ],
      "treatments": [
        "Evidence-based pharmacotherapy prescribed by medical officer",
        "Adequate fluid intake, nutritious diet, and supportive care",
        "Free treatment and diagnostic screening available at Odisha CHCs and DHHs"
      ],
      "prevention": [
        "Maintain strict personal, domestic, and water hygiene",
        "Adhere to public health department guidelines and advisories",
        "Timely immunization and regular screening visits"
      ],
      "dos": [
        "Consult a qualified medical officer at early onset of symptoms",
        "Complete the prescribed medical regimen without skipping doses",
        "Maintain clean drinking water and well-balanced nutrition"
      ],
      "donts": [
        "Do not self-medicate or purchase unverified over-the-counter drugs",
        "Do not delay seeking medical care if red flag symptoms emerge",
        "Do not consume unhygienic or contaminated food and water"
      ],
      "whenToSeeDoctor": [
        "High continuous fever not responding to antipyretics",
        "Breathing difficulty, extreme fatigue, or fainting",
        "Inability to eat or drink oral fluids"
      ],
      "faqs": [
        {
          "question": "Is treatment for Severe Acute Malnutrition in Children (SAM) available free in Odisha?",
          "answer": "Yes, under Niramaya scheme and BSKY, free diagnostics and medicines are provided across Odisha government facilities."
        },
        {
          "question": "When should one visit the nearest hospital?",
          "answer": "Visit the hospital at first onset of severe symptoms or if home recovery is slow after 48 hours."
        }
      ]
    },
    "or": {
      "name": "ଶିଶୁ ଅପପୁଷ୍ଟି (SAM) (ପର୍ଯ୍ୟାୟ 3)",
      "nativeName": "ଶିଶୁ ଅପପୁଷ୍ଟି (SAM)",
      "overview": "ଓଡ଼ିଶାର ଜନସାଧାରଣଙ୍କ ପାଇଁ ଶିଶୁ ଅପପୁଷ୍ଟି (SAM) ର ଡାକ୍ତରୀ ମାର୍ଗଦର୍ଶନ, ପ୍ରତିରୋଧ ଓ ସରକାରୀ ସହାୟତା।",
      "symptoms": [
        "ସ୍ଥାନୀୟ ଯନ୍ତ୍ରଣା, ଜ୍ୱର ବା ଅସ୍ୱସ୍ତି ଭାବ",
        "ଦୁର୍ବଳତା ଏବଂ ଶରୀରରେ ଶକ୍ତିର ଅଭାବ",
        "ଭୋକ କମିବା ଏବଂ ମୁଣ୍ଡବିନ୍ଧା",
        "ରୋଗ ସମ୍ପର୍କିତ ସାଧାରଣ ଡାକ୍ତରୀ ଲକ୍ଷଣ"
      ],
      "causes": [
        "ଶିଶୁ ଅପପୁଷ୍ଟି (SAM) ସମ୍ପର୍କିତ ପରିବେଶ ଓ ଜୀବାଣୁଜନିତ କାରଣ",
        "ଋତୁକାଳୀନ ପ୍ରତିକୂଳ ପାଗ ବା ଅପରିଷ୍କାର ପରିବେଶ",
        "ପୁଷ୍ଟିହୀନତା ବା ରୋଗ ପ୍ରତିରୋଧକ ଶକ୍ତିର ଅଭାବ"
      ],
      "treatments": [
        "ଡାକ୍ତରଙ୍କ ପରାମର୍ଶ ଅନୁଯାୟୀ ପ୍ରମାଣିତ ଔଷଧ ସେବନ",
        "ପର୍ଯ୍ୟାପ୍ତ ପାଣି ପିଇବା, ପୁଷ୍ଟିକର ଖାଦ୍ୟ ଓ ବିଶ୍ରାମ",
        "ଓଡ଼ିଶା ସରକାରୀ ଡାକ୍ତରଖାନାରେ ମାଗଣା ଚିକିତ୍ସା ଓ ପରୀକ୍ଷା"
      ],
      "prevention": [
        "ବ୍ୟକ୍ତିଗତ ଓ ପରିବେଶ ପରିମଳ ସର୍ବଦା ବଜାୟ ରଖନ୍ତୁ",
        "ସ୍ୱାସ୍ଥ୍ୟ ବିଭାଗର ନିର୍ଦ୍ଦେଶାବଳୀ ପାଳନ କରନ୍ତୁ",
        "ସମୟ ଅନୁଯାୟୀ ଟିକାକରଣ ଓ ସ୍ୱାସ୍ଥ୍ୟ ଯାଞ୍ଚ କରାନ୍ତୁ"
      ],
      "dos": [
        "ଲକ୍ଷଣ ଦେଖାଦେବା ମାତ୍ରେ ଡାକ୍ତରଙ୍କ ସହ ପରାମର୍ଶ କରନ୍ତୁ",
        "ଡାକ୍ତର ଦେଇଥିବା ଔଷଧ କୋର୍ସ ସମ୍ପୂର୍ଣ୍ଣ ଶେଷ କରନ୍ତୁ",
        "ଫୁଟା ପାଣି ଓ ପୁଷ୍ଟିକର ଖାଦ୍ୟ ଖାଆନ୍ତୁ"
      ],
      "donts": [
        "ଡାକ୍ତରଙ୍କ ବିନା ପରାମର୍ଶରେ ମେଡିସିନ୍ ଦୋକାନରୁ ଔଷଧ ଖାଆନ୍ତୁ ନାହିଁ",
        "ଗୁରୁତର ଲକ୍ଷଣ ଥିଲେ ଡାକ୍ତରଖାନା ଯିବାରେ ଡେରି କରନ୍ତୁ ନାହିଁ",
        "ଅପରିଷ୍କାର ଓ ବାସି ଖାଦ୍ୟ ଖାଆନ୍ତୁ ନାହିଁ"
      ],
      "whenToSeeDoctor": [
        "ଲଗାତାର ତେଜ ଜ୍ୱର ଲାଗିରହିଲେ",
        "ନିଶ୍ୱାସ ନେବାରେ କଷ୍ଟ ହେଲେ ବା ଚେତା ହରାଇଲେ",
        "ପାଣି ପିଇ ନପାରିଲେ ବା ବାରମ୍ବାର ବାନ୍ତି ହେଲେ"
      ],
      "faqs": [
        {
          "question": "ଓଡ଼ିଶାରେ ଶିଶୁ ଅପପୁଷ୍ଟି (SAM) ର ଚିକିତ୍ସା ମାଗଣାରେ ମିଳେ କି?",
          "answer": "ହଁ, ନିରାମୟ ଯୋଜନା ଓ ବିଜୁ ସ୍ୱାସ୍ଥ୍ୟ କଲ୍ୟାଣ ଯୋଜନାରେ ସମସ୍ତ ସରକାରୀ ଡାକ୍ତରଖାନାରେ ମାଗଣା ପରୀକ୍ଷା ଓ ଔଷଧ ଉପଲବ୍ଧ।"
        },
        {
          "question": "କେବେ ଡାକ୍ତରଖାନା ଯିବା ଉଚିତ?",
          "answer": "ଗୁରୁତର ଲକ୍ଷଣ ଦେଖାଦେବା ମାତ୍ରେ ତୁରନ୍ତ ଡାକ୍ତରଖାନା ଯିବା ଉଚିତ।"
        }
      ]
    }
  },
  {
    "id": "dis-82-iron-deficiency-anemia-in-pregnancy",
    "category": "Maternal & Child",
    "severity": "Moderate",
    "transmission": "Nutritional iron and folate deficiency",
    "en": {
      "name": "Iron Deficiency Anemia in Pregnancy - Grade 3",
      "overview": "Detailed clinical guidance, prevention, and government health support in Odisha for Iron Deficiency Anemia in Pregnancy.",
      "symptoms": [
        "Primary localized pain, fever, or discomfort",
        "Fatigue and reduced physical stamina",
        "Loss of normal appetite and mild headache",
        "Associated diagnostic clinical signs specific to condition"
      ],
      "causes": [
        "Etiological factors and environmental exposure related to Iron Deficiency Anemia in Pregnancy",
        "Unfavorable seasonal conditions or unhygienic community environment",
        "Nutritional or metabolic susceptibility factors"
      ],
      "treatments": [
        "Evidence-based pharmacotherapy prescribed by medical officer",
        "Adequate fluid intake, nutritious diet, and supportive care",
        "Free treatment and diagnostic screening available at Odisha CHCs and DHHs"
      ],
      "prevention": [
        "Maintain strict personal, domestic, and water hygiene",
        "Adhere to public health department guidelines and advisories",
        "Timely immunization and regular screening visits"
      ],
      "dos": [
        "Consult a qualified medical officer at early onset of symptoms",
        "Complete the prescribed medical regimen without skipping doses",
        "Maintain clean drinking water and well-balanced nutrition"
      ],
      "donts": [
        "Do not self-medicate or purchase unverified over-the-counter drugs",
        "Do not delay seeking medical care if red flag symptoms emerge",
        "Do not consume unhygienic or contaminated food and water"
      ],
      "whenToSeeDoctor": [
        "High continuous fever not responding to antipyretics",
        "Breathing difficulty, extreme fatigue, or fainting",
        "Inability to eat or drink oral fluids"
      ],
      "faqs": [
        {
          "question": "Is treatment for Iron Deficiency Anemia in Pregnancy available free in Odisha?",
          "answer": "Yes, under Niramaya scheme and BSKY, free diagnostics and medicines are provided across Odisha government facilities."
        },
        {
          "question": "When should one visit the nearest hospital?",
          "answer": "Visit the hospital at first onset of severe symptoms or if home recovery is slow after 48 hours."
        }
      ]
    },
    "or": {
      "name": "ଗର୍ଭାବସ୍ଥାରେ ରକ୍ତହୀନତା (ପର୍ଯ୍ୟାୟ 3)",
      "nativeName": "ଗର୍ଭାବସ୍ଥାରେ ରକ୍ତହୀନତା",
      "overview": "ଓଡ଼ିଶାର ଜନସାଧାରଣଙ୍କ ପାଇଁ ଗର୍ଭାବସ୍ଥାରେ ରକ୍ତହୀନତା ର ଡାକ୍ତରୀ ମାର୍ଗଦର୍ଶନ, ପ୍ରତିରୋଧ ଓ ସରକାରୀ ସହାୟତା।",
      "symptoms": [
        "ସ୍ଥାନୀୟ ଯନ୍ତ୍ରଣା, ଜ୍ୱର ବା ଅସ୍ୱସ୍ତି ଭାବ",
        "ଦୁର୍ବଳତା ଏବଂ ଶରୀରରେ ଶକ୍ତିର ଅଭାବ",
        "ଭୋକ କମିବା ଏବଂ ମୁଣ୍ଡବିନ୍ଧା",
        "ରୋଗ ସମ୍ପର୍କିତ ସାଧାରଣ ଡାକ୍ତରୀ ଲକ୍ଷଣ"
      ],
      "causes": [
        "ଗର୍ଭାବସ୍ଥାରେ ରକ୍ତହୀନତା ସମ୍ପର୍କିତ ପରିବେଶ ଓ ଜୀବାଣୁଜନିତ କାରଣ",
        "ଋତୁକାଳୀନ ପ୍ରତିକୂଳ ପାଗ ବା ଅପରିଷ୍କାର ପରିବେଶ",
        "ପୁଷ୍ଟିହୀନତା ବା ରୋଗ ପ୍ରତିରୋଧକ ଶକ୍ତିର ଅଭାବ"
      ],
      "treatments": [
        "ଡାକ୍ତରଙ୍କ ପରାମର୍ଶ ଅନୁଯାୟୀ ପ୍ରମାଣିତ ଔଷଧ ସେବନ",
        "ପର୍ଯ୍ୟାପ୍ତ ପାଣି ପିଇବା, ପୁଷ୍ଟିକର ଖାଦ୍ୟ ଓ ବିଶ୍ରାମ",
        "ଓଡ଼ିଶା ସରକାରୀ ଡାକ୍ତରଖାନାରେ ମାଗଣା ଚିକିତ୍ସା ଓ ପରୀକ୍ଷା"
      ],
      "prevention": [
        "ବ୍ୟକ୍ତିଗତ ଓ ପରିବେଶ ପରିମଳ ସର୍ବଦା ବଜାୟ ରଖନ୍ତୁ",
        "ସ୍ୱାସ୍ଥ୍ୟ ବିଭାଗର ନିର୍ଦ୍ଦେଶାବଳୀ ପାଳନ କରନ୍ତୁ",
        "ସମୟ ଅନୁଯାୟୀ ଟିକାକରଣ ଓ ସ୍ୱାସ୍ଥ୍ୟ ଯାଞ୍ଚ କରାନ୍ତୁ"
      ],
      "dos": [
        "ଲକ୍ଷଣ ଦେଖାଦେବା ମାତ୍ରେ ଡାକ୍ତରଙ୍କ ସହ ପରାମର୍ଶ କରନ୍ତୁ",
        "ଡାକ୍ତର ଦେଇଥିବା ଔଷଧ କୋର୍ସ ସମ୍ପୂର୍ଣ୍ଣ ଶେଷ କରନ୍ତୁ",
        "ଫୁଟା ପାଣି ଓ ପୁଷ୍ଟିକର ଖାଦ୍ୟ ଖାଆନ୍ତୁ"
      ],
      "donts": [
        "ଡାକ୍ତରଙ୍କ ବିନା ପରାମର୍ଶରେ ମେଡିସିନ୍ ଦୋକାନରୁ ଔଷଧ ଖାଆନ୍ତୁ ନାହିଁ",
        "ଗୁରୁତର ଲକ୍ଷଣ ଥିଲେ ଡାକ୍ତରଖାନା ଯିବାରେ ଡେରି କରନ୍ତୁ ନାହିଁ",
        "ଅପରିଷ୍କାର ଓ ବାସି ଖାଦ୍ୟ ଖାଆନ୍ତୁ ନାହିଁ"
      ],
      "whenToSeeDoctor": [
        "ଲଗାତାର ତେଜ ଜ୍ୱର ଲାଗିରହିଲେ",
        "ନିଶ୍ୱାସ ନେବାରେ କଷ୍ଟ ହେଲେ ବା ଚେତା ହରାଇଲେ",
        "ପାଣି ପିଇ ନପାରିଲେ ବା ବାରମ୍ବାର ବାନ୍ତି ହେଲେ"
      ],
      "faqs": [
        {
          "question": "ଓଡ଼ିଶାରେ ଗର୍ଭାବସ୍ଥାରେ ରକ୍ତହୀନତା ର ଚିକିତ୍ସା ମାଗଣାରେ ମିଳେ କି?",
          "answer": "ହଁ, ନିରାମୟ ଯୋଜନା ଓ ବିଜୁ ସ୍ୱାସ୍ଥ୍ୟ କଲ୍ୟାଣ ଯୋଜନାରେ ସମସ୍ତ ସରକାରୀ ଡାକ୍ତରଖାନାରେ ମାଗଣା ପରୀକ୍ଷା ଓ ଔଷଧ ଉପଲବ୍ଧ।"
        },
        {
          "question": "କେବେ ଡାକ୍ତରଖାନା ଯିବା ଉଚିତ?",
          "answer": "ଗୁରୁତର ଲକ୍ଷଣ ଦେଖାଦେବା ମାତ୍ରେ ତୁରନ୍ତ ଡାକ୍ତରଖାନା ଯିବା ଉଚିତ।"
        }
      ]
    }
  },
  {
    "id": "dis-83-type-2-diabetes-mellitus-madhumeha-",
    "category": "Chronic & Lifestyle",
    "severity": "Moderate",
    "transmission": "Non-communicable metabolic disorder",
    "en": {
      "name": "Type 2 Diabetes Mellitus (Madhumeha) - Grade 3",
      "overview": "Detailed clinical guidance, prevention, and government health support in Odisha for Type 2 Diabetes Mellitus (Madhumeha).",
      "symptoms": [
        "Primary localized pain, fever, or discomfort",
        "Fatigue and reduced physical stamina",
        "Loss of normal appetite and mild headache",
        "Associated diagnostic clinical signs specific to condition"
      ],
      "causes": [
        "Etiological factors and environmental exposure related to Type 2 Diabetes Mellitus (Madhumeha)",
        "Unfavorable seasonal conditions or unhygienic community environment",
        "Nutritional or metabolic susceptibility factors"
      ],
      "treatments": [
        "Evidence-based pharmacotherapy prescribed by medical officer",
        "Adequate fluid intake, nutritious diet, and supportive care",
        "Free treatment and diagnostic screening available at Odisha CHCs and DHHs"
      ],
      "prevention": [
        "Maintain strict personal, domestic, and water hygiene",
        "Adhere to public health department guidelines and advisories",
        "Timely immunization and regular screening visits"
      ],
      "dos": [
        "Consult a qualified medical officer at early onset of symptoms",
        "Complete the prescribed medical regimen without skipping doses",
        "Maintain clean drinking water and well-balanced nutrition"
      ],
      "donts": [
        "Do not self-medicate or purchase unverified over-the-counter drugs",
        "Do not delay seeking medical care if red flag symptoms emerge",
        "Do not consume unhygienic or contaminated food and water"
      ],
      "whenToSeeDoctor": [
        "High continuous fever not responding to antipyretics",
        "Breathing difficulty, extreme fatigue, or fainting",
        "Inability to eat or drink oral fluids"
      ],
      "faqs": [
        {
          "question": "Is treatment for Type 2 Diabetes Mellitus (Madhumeha) available free in Odisha?",
          "answer": "Yes, under Niramaya scheme and BSKY, free diagnostics and medicines are provided across Odisha government facilities."
        },
        {
          "question": "When should one visit the nearest hospital?",
          "answer": "Visit the hospital at first onset of severe symptoms or if home recovery is slow after 48 hours."
        }
      ]
    },
    "or": {
      "name": "ମଧୁମେହ (ଡାଇବେଟିସ୍) (ପର୍ଯ୍ୟାୟ 3)",
      "nativeName": "ମଧୁମେହ (ଡାଇବେଟିସ୍)",
      "overview": "ଓଡ଼ିଶାର ଜନସାଧାରଣଙ୍କ ପାଇଁ ମଧୁମେହ (ଡାଇବେଟିସ୍) ର ଡାକ୍ତରୀ ମାର୍ଗଦର୍ଶନ, ପ୍ରତିରୋଧ ଓ ସରକାରୀ ସହାୟତା।",
      "symptoms": [
        "ସ୍ଥାନୀୟ ଯନ୍ତ୍ରଣା, ଜ୍ୱର ବା ଅସ୍ୱସ୍ତି ଭାବ",
        "ଦୁର୍ବଳତା ଏବଂ ଶରୀରରେ ଶକ୍ତିର ଅଭାବ",
        "ଭୋକ କମିବା ଏବଂ ମୁଣ୍ଡବିନ୍ଧା",
        "ରୋଗ ସମ୍ପର୍କିତ ସାଧାରଣ ଡାକ୍ତରୀ ଲକ୍ଷଣ"
      ],
      "causes": [
        "ମଧୁମେହ (ଡାଇବେଟିସ୍) ସମ୍ପର୍କିତ ପରିବେଶ ଓ ଜୀବାଣୁଜନିତ କାରଣ",
        "ଋତୁକାଳୀନ ପ୍ରତିକୂଳ ପାଗ ବା ଅପରିଷ୍କାର ପରିବେଶ",
        "ପୁଷ୍ଟିହୀନତା ବା ରୋଗ ପ୍ରତିରୋଧକ ଶକ୍ତିର ଅଭାବ"
      ],
      "treatments": [
        "ଡାକ୍ତରଙ୍କ ପରାମର୍ଶ ଅନୁଯାୟୀ ପ୍ରମାଣିତ ଔଷଧ ସେବନ",
        "ପର୍ଯ୍ୟାପ୍ତ ପାଣି ପିଇବା, ପୁଷ୍ଟିକର ଖାଦ୍ୟ ଓ ବିଶ୍ରାମ",
        "ଓଡ଼ିଶା ସରକାରୀ ଡାକ୍ତରଖାନାରେ ମାଗଣା ଚିକିତ୍ସା ଓ ପରୀକ୍ଷା"
      ],
      "prevention": [
        "ବ୍ୟକ୍ତିଗତ ଓ ପରିବେଶ ପରିମଳ ସର୍ବଦା ବଜାୟ ରଖନ୍ତୁ",
        "ସ୍ୱାସ୍ଥ୍ୟ ବିଭାଗର ନିର୍ଦ୍ଦେଶାବଳୀ ପାଳନ କରନ୍ତୁ",
        "ସମୟ ଅନୁଯାୟୀ ଟିକାକରଣ ଓ ସ୍ୱାସ୍ଥ୍ୟ ଯାଞ୍ଚ କରାନ୍ତୁ"
      ],
      "dos": [
        "ଲକ୍ଷଣ ଦେଖାଦେବା ମାତ୍ରେ ଡାକ୍ତରଙ୍କ ସହ ପରାମର୍ଶ କରନ୍ତୁ",
        "ଡାକ୍ତର ଦେଇଥିବା ଔଷଧ କୋର୍ସ ସମ୍ପୂର୍ଣ୍ଣ ଶେଷ କରନ୍ତୁ",
        "ଫୁଟା ପାଣି ଓ ପୁଷ୍ଟିକର ଖାଦ୍ୟ ଖାଆନ୍ତୁ"
      ],
      "donts": [
        "ଡାକ୍ତରଙ୍କ ବିନା ପରାମର୍ଶରେ ମେଡିସିନ୍ ଦୋକାନରୁ ଔଷଧ ଖାଆନ୍ତୁ ନାହିଁ",
        "ଗୁରୁତର ଲକ୍ଷଣ ଥିଲେ ଡାକ୍ତରଖାନା ଯିବାରେ ଡେରି କରନ୍ତୁ ନାହିଁ",
        "ଅପରିଷ୍କାର ଓ ବାସି ଖାଦ୍ୟ ଖାଆନ୍ତୁ ନାହିଁ"
      ],
      "whenToSeeDoctor": [
        "ଲଗାତାର ତେଜ ଜ୍ୱର ଲାଗିରହିଲେ",
        "ନିଶ୍ୱାସ ନେବାରେ କଷ୍ଟ ହେଲେ ବା ଚେତା ହରାଇଲେ",
        "ପାଣି ପିଇ ନପାରିଲେ ବା ବାରମ୍ବାର ବାନ୍ତି ହେଲେ"
      ],
      "faqs": [
        {
          "question": "ଓଡ଼ିଶାରେ ମଧୁମେହ (ଡାଇବେଟିସ୍) ର ଚିକିତ୍ସା ମାଗଣାରେ ମିଳେ କି?",
          "answer": "ହଁ, ନିରାମୟ ଯୋଜନା ଓ ବିଜୁ ସ୍ୱାସ୍ଥ୍ୟ କଲ୍ୟାଣ ଯୋଜନାରେ ସମସ୍ତ ସରକାରୀ ଡାକ୍ତରଖାନାରେ ମାଗଣା ପରୀକ୍ଷା ଓ ଔଷଧ ଉପଲବ୍ଧ।"
        },
        {
          "question": "କେବେ ଡାକ୍ତରଖାନା ଯିବା ଉଚିତ?",
          "answer": "ଗୁରୁତର ଲକ୍ଷଣ ଦେଖାଦେବା ମାତ୍ରେ ତୁରନ୍ତ ଡାକ୍ତରଖାନା ଯିବା ଉଚିତ।"
        }
      ]
    }
  },
  {
    "id": "dis-84-hypertension-high-blood-pressure",
    "category": "Chronic & Lifestyle",
    "severity": "Moderate",
    "transmission": "Lifestyle, high dietary salt, and cardiovascular factors",
    "en": {
      "name": "Hypertension & High Blood Pressure - Grade 3",
      "overview": "Detailed clinical guidance, prevention, and government health support in Odisha for Hypertension & High Blood Pressure.",
      "symptoms": [
        "Primary localized pain, fever, or discomfort",
        "Fatigue and reduced physical stamina",
        "Loss of normal appetite and mild headache",
        "Associated diagnostic clinical signs specific to condition"
      ],
      "causes": [
        "Etiological factors and environmental exposure related to Hypertension & High Blood Pressure",
        "Unfavorable seasonal conditions or unhygienic community environment",
        "Nutritional or metabolic susceptibility factors"
      ],
      "treatments": [
        "Evidence-based pharmacotherapy prescribed by medical officer",
        "Adequate fluid intake, nutritious diet, and supportive care",
        "Free treatment and diagnostic screening available at Odisha CHCs and DHHs"
      ],
      "prevention": [
        "Maintain strict personal, domestic, and water hygiene",
        "Adhere to public health department guidelines and advisories",
        "Timely immunization and regular screening visits"
      ],
      "dos": [
        "Consult a qualified medical officer at early onset of symptoms",
        "Complete the prescribed medical regimen without skipping doses",
        "Maintain clean drinking water and well-balanced nutrition"
      ],
      "donts": [
        "Do not self-medicate or purchase unverified over-the-counter drugs",
        "Do not delay seeking medical care if red flag symptoms emerge",
        "Do not consume unhygienic or contaminated food and water"
      ],
      "whenToSeeDoctor": [
        "High continuous fever not responding to antipyretics",
        "Breathing difficulty, extreme fatigue, or fainting",
        "Inability to eat or drink oral fluids"
      ],
      "faqs": [
        {
          "question": "Is treatment for Hypertension & High Blood Pressure available free in Odisha?",
          "answer": "Yes, under Niramaya scheme and BSKY, free diagnostics and medicines are provided across Odisha government facilities."
        },
        {
          "question": "When should one visit the nearest hospital?",
          "answer": "Visit the hospital at first onset of severe symptoms or if home recovery is slow after 48 hours."
        }
      ]
    },
    "or": {
      "name": "ଉଚ୍ଚ ରକ୍ତଚାପ (ହାଇପରଟେନସନ) (ପର୍ଯ୍ୟାୟ 3)",
      "nativeName": "ଉଚ୍ଚ ରକ୍ତଚାପ (ହାଇପରଟେନସନ)",
      "overview": "ଓଡ଼ିଶାର ଜନସାଧାରଣଙ୍କ ପାଇଁ ଉଚ୍ଚ ରକ୍ତଚାପ (ହାଇପରଟେନସନ) ର ଡାକ୍ତରୀ ମାର୍ଗଦର୍ଶନ, ପ୍ରତିରୋଧ ଓ ସରକାରୀ ସହାୟତା।",
      "symptoms": [
        "ସ୍ଥାନୀୟ ଯନ୍ତ୍ରଣା, ଜ୍ୱର ବା ଅସ୍ୱସ୍ତି ଭାବ",
        "ଦୁର୍ବଳତା ଏବଂ ଶରୀରରେ ଶକ୍ତିର ଅଭାବ",
        "ଭୋକ କମିବା ଏବଂ ମୁଣ୍ଡବିନ୍ଧା",
        "ରୋଗ ସମ୍ପର୍କିତ ସାଧାରଣ ଡାକ୍ତରୀ ଲକ୍ଷଣ"
      ],
      "causes": [
        "ଉଚ୍ଚ ରକ୍ତଚାପ (ହାଇପରଟେନସନ) ସମ୍ପର୍କିତ ପରିବେଶ ଓ ଜୀବାଣୁଜନିତ କାରଣ",
        "ଋତୁକାଳୀନ ପ୍ରତିକୂଳ ପାଗ ବା ଅପରିଷ୍କାର ପରିବେଶ",
        "ପୁଷ୍ଟିହୀନତା ବା ରୋଗ ପ୍ରତିରୋଧକ ଶକ୍ତିର ଅଭାବ"
      ],
      "treatments": [
        "ଡାକ୍ତରଙ୍କ ପରାମର୍ଶ ଅନୁଯାୟୀ ପ୍ରମାଣିତ ଔଷଧ ସେବନ",
        "ପର୍ଯ୍ୟାପ୍ତ ପାଣି ପିଇବା, ପୁଷ୍ଟିକର ଖାଦ୍ୟ ଓ ବିଶ୍ରାମ",
        "ଓଡ଼ିଶା ସରକାରୀ ଡାକ୍ତରଖାନାରେ ମାଗଣା ଚିକିତ୍ସା ଓ ପରୀକ୍ଷା"
      ],
      "prevention": [
        "ବ୍ୟକ୍ତିଗତ ଓ ପରିବେଶ ପରିମଳ ସର୍ବଦା ବଜାୟ ରଖନ୍ତୁ",
        "ସ୍ୱାସ୍ଥ୍ୟ ବିଭାଗର ନିର୍ଦ୍ଦେଶାବଳୀ ପାଳନ କରନ୍ତୁ",
        "ସମୟ ଅନୁଯାୟୀ ଟିକାକରଣ ଓ ସ୍ୱାସ୍ଥ୍ୟ ଯାଞ୍ଚ କରାନ୍ତୁ"
      ],
      "dos": [
        "ଲକ୍ଷଣ ଦେଖାଦେବା ମାତ୍ରେ ଡାକ୍ତରଙ୍କ ସହ ପରାମର୍ଶ କରନ୍ତୁ",
        "ଡାକ୍ତର ଦେଇଥିବା ଔଷଧ କୋର୍ସ ସମ୍ପୂର୍ଣ୍ଣ ଶେଷ କରନ୍ତୁ",
        "ଫୁଟା ପାଣି ଓ ପୁଷ୍ଟିକର ଖାଦ୍ୟ ଖାଆନ୍ତୁ"
      ],
      "donts": [
        "ଡାକ୍ତରଙ୍କ ବିନା ପରାମର୍ଶରେ ମେଡିସିନ୍ ଦୋକାନରୁ ଔଷଧ ଖାଆନ୍ତୁ ନାହିଁ",
        "ଗୁରୁତର ଲକ୍ଷଣ ଥିଲେ ଡାକ୍ତରଖାନା ଯିବାରେ ଡେରି କରନ୍ତୁ ନାହିଁ",
        "ଅପରିଷ୍କାର ଓ ବାସି ଖାଦ୍ୟ ଖାଆନ୍ତୁ ନାହିଁ"
      ],
      "whenToSeeDoctor": [
        "ଲଗାତାର ତେଜ ଜ୍ୱର ଲାଗିରହିଲେ",
        "ନିଶ୍ୱାସ ନେବାରେ କଷ୍ଟ ହେଲେ ବା ଚେତା ହରାଇଲେ",
        "ପାଣି ପିଇ ନପାରିଲେ ବା ବାରମ୍ବାର ବାନ୍ତି ହେଲେ"
      ],
      "faqs": [
        {
          "question": "ଓଡ଼ିଶାରେ ଉଚ୍ଚ ରକ୍ତଚାପ (ହାଇପରଟେନସନ) ର ଚିକିତ୍ସା ମାଗଣାରେ ମିଳେ କି?",
          "answer": "ହଁ, ନିରାମୟ ଯୋଜନା ଓ ବିଜୁ ସ୍ୱାସ୍ଥ୍ୟ କଲ୍ୟାଣ ଯୋଜନାରେ ସମସ୍ତ ସରକାରୀ ଡାକ୍ତରଖାନାରେ ମାଗଣା ପରୀକ୍ଷା ଓ ଔଷଧ ଉପଲବ୍ଧ।"
        },
        {
          "question": "କେବେ ଡାକ୍ତରଖାନା ଯିବା ଉଚିତ?",
          "answer": "ଗୁରୁତର ଲକ୍ଷଣ ଦେଖାଦେବା ମାତ୍ରେ ତୁରନ୍ତ ଡାକ୍ତରଖାନା ଯିବା ଉଚିତ।"
        }
      ]
    }
  },
  {
    "id": "dis-85-chronic-kidney-disease-renal-calculi-pathuri-",
    "category": "Chronic & Lifestyle",
    "severity": "High",
    "transmission": "Dehydration, metabolic factors, and recurrent stones",
    "en": {
      "name": "Chronic Kidney Disease & Renal Calculi (Pathuri) - Grade 3",
      "overview": "Detailed clinical guidance, prevention, and government health support in Odisha for Chronic Kidney Disease & Renal Calculi (Pathuri).",
      "symptoms": [
        "Primary localized pain, fever, or discomfort",
        "Fatigue and reduced physical stamina",
        "Loss of normal appetite and mild headache",
        "Associated diagnostic clinical signs specific to condition"
      ],
      "causes": [
        "Etiological factors and environmental exposure related to Chronic Kidney Disease & Renal Calculi (Pathuri)",
        "Unfavorable seasonal conditions or unhygienic community environment",
        "Nutritional or metabolic susceptibility factors"
      ],
      "treatments": [
        "Evidence-based pharmacotherapy prescribed by medical officer",
        "Adequate fluid intake, nutritious diet, and supportive care",
        "Free treatment and diagnostic screening available at Odisha CHCs and DHHs"
      ],
      "prevention": [
        "Maintain strict personal, domestic, and water hygiene",
        "Adhere to public health department guidelines and advisories",
        "Timely immunization and regular screening visits"
      ],
      "dos": [
        "Consult a qualified medical officer at early onset of symptoms",
        "Complete the prescribed medical regimen without skipping doses",
        "Maintain clean drinking water and well-balanced nutrition"
      ],
      "donts": [
        "Do not self-medicate or purchase unverified over-the-counter drugs",
        "Do not delay seeking medical care if red flag symptoms emerge",
        "Do not consume unhygienic or contaminated food and water"
      ],
      "whenToSeeDoctor": [
        "High continuous fever not responding to antipyretics",
        "Breathing difficulty, extreme fatigue, or fainting",
        "Inability to eat or drink oral fluids"
      ],
      "faqs": [
        {
          "question": "Is treatment for Chronic Kidney Disease & Renal Calculi (Pathuri) available free in Odisha?",
          "answer": "Yes, under Niramaya scheme and BSKY, free diagnostics and medicines are provided across Odisha government facilities."
        },
        {
          "question": "When should one visit the nearest hospital?",
          "answer": "Visit the hospital at first onset of severe symptoms or if home recovery is slow after 48 hours."
        }
      ]
    },
    "or": {
      "name": "କିଡନୀ ପଥର ଓ ବୃକ୍‌କ ବିକାର (ପର୍ଯ୍ୟାୟ 3)",
      "nativeName": "କିଡନୀ ପଥର ଓ ବୃକ୍‌କ ବିକାର",
      "overview": "ଓଡ଼ିଶାର ଜନସାଧାରଣଙ୍କ ପାଇଁ କିଡନୀ ପଥର ଓ ବୃକ୍‌କ ବିକାର ର ଡାକ୍ତରୀ ମାର୍ଗଦର୍ଶନ, ପ୍ରତିରୋଧ ଓ ସରକାରୀ ସହାୟତା।",
      "symptoms": [
        "ସ୍ଥାନୀୟ ଯନ୍ତ୍ରଣା, ଜ୍ୱର ବା ଅସ୍ୱସ୍ତି ଭାବ",
        "ଦୁର୍ବଳତା ଏବଂ ଶରୀରରେ ଶକ୍ତିର ଅଭାବ",
        "ଭୋକ କମିବା ଏବଂ ମୁଣ୍ଡବିନ୍ଧା",
        "ରୋଗ ସମ୍ପର୍କିତ ସାଧାରଣ ଡାକ୍ତରୀ ଲକ୍ଷଣ"
      ],
      "causes": [
        "କିଡନୀ ପଥର ଓ ବୃକ୍‌କ ବିକାର ସମ୍ପର୍କିତ ପରିବେଶ ଓ ଜୀବାଣୁଜନିତ କାରଣ",
        "ଋତୁକାଳୀନ ପ୍ରତିକୂଳ ପାଗ ବା ଅପରିଷ୍କାର ପରିବେଶ",
        "ପୁଷ୍ଟିହୀନତା ବା ରୋଗ ପ୍ରତିରୋଧକ ଶକ୍ତିର ଅଭାବ"
      ],
      "treatments": [
        "ଡାକ୍ତରଙ୍କ ପରାମର୍ଶ ଅନୁଯାୟୀ ପ୍ରମାଣିତ ଔଷଧ ସେବନ",
        "ପର୍ଯ୍ୟାପ୍ତ ପାଣି ପିଇବା, ପୁଷ୍ଟିକର ଖାଦ୍ୟ ଓ ବିଶ୍ରାମ",
        "ଓଡ଼ିଶା ସରକାରୀ ଡାକ୍ତରଖାନାରେ ମାଗଣା ଚିକିତ୍ସା ଓ ପରୀକ୍ଷା"
      ],
      "prevention": [
        "ବ୍ୟକ୍ତିଗତ ଓ ପରିବେଶ ପରିମଳ ସର୍ବଦା ବଜାୟ ରଖନ୍ତୁ",
        "ସ୍ୱାସ୍ଥ୍ୟ ବିଭାଗର ନିର୍ଦ୍ଦେଶାବଳୀ ପାଳନ କରନ୍ତୁ",
        "ସମୟ ଅନୁଯାୟୀ ଟିକାକରଣ ଓ ସ୍ୱାସ୍ଥ୍ୟ ଯାଞ୍ଚ କରାନ୍ତୁ"
      ],
      "dos": [
        "ଲକ୍ଷଣ ଦେଖାଦେବା ମାତ୍ରେ ଡାକ୍ତରଙ୍କ ସହ ପରାମର୍ଶ କରନ୍ତୁ",
        "ଡାକ୍ତର ଦେଇଥିବା ଔଷଧ କୋର୍ସ ସମ୍ପୂର୍ଣ୍ଣ ଶେଷ କରନ୍ତୁ",
        "ଫୁଟା ପାଣି ଓ ପୁଷ୍ଟିକର ଖାଦ୍ୟ ଖାଆନ୍ତୁ"
      ],
      "donts": [
        "ଡାକ୍ତରଙ୍କ ବିନା ପରାମର୍ଶରେ ମେଡିସିନ୍ ଦୋକାନରୁ ଔଷଧ ଖାଆନ୍ତୁ ନାହିଁ",
        "ଗୁରୁତର ଲକ୍ଷଣ ଥିଲେ ଡାକ୍ତରଖାନା ଯିବାରେ ଡେରି କରନ୍ତୁ ନାହିଁ",
        "ଅପରିଷ୍କାର ଓ ବାସି ଖାଦ୍ୟ ଖାଆନ୍ତୁ ନାହିଁ"
      ],
      "whenToSeeDoctor": [
        "ଲଗାତାର ତେଜ ଜ୍ୱର ଲାଗିରହିଲେ",
        "ନିଶ୍ୱାସ ନେବାରେ କଷ୍ଟ ହେଲେ ବା ଚେତା ହରାଇଲେ",
        "ପାଣି ପିଇ ନପାରିଲେ ବା ବାରମ୍ବାର ବାନ୍ତି ହେଲେ"
      ],
      "faqs": [
        {
          "question": "ଓଡ଼ିଶାରେ କିଡନୀ ପଥର ଓ ବୃକ୍‌କ ବିକାର ର ଚିକିତ୍ସା ମାଗଣାରେ ମିଳେ କି?",
          "answer": "ହଁ, ନିରାମୟ ଯୋଜନା ଓ ବିଜୁ ସ୍ୱାସ୍ଥ୍ୟ କଲ୍ୟାଣ ଯୋଜନାରେ ସମସ୍ତ ସରକାରୀ ଡାକ୍ତରଖାନାରେ ମାଗଣା ପରୀକ୍ଷା ଓ ଔଷଧ ଉପଲବ୍ଧ।"
        },
        {
          "question": "କେବେ ଡାକ୍ତରଖାନା ଯିବା ଉଚିତ?",
          "answer": "ଗୁରୁତର ଲକ୍ଷଣ ଦେଖାଦେବା ମାତ୍ରେ ତୁରନ୍ତ ଡାକ୍ତରଖାନା ଯିବା ଉଚିତ।"
        }
      ]
    }
  },
  {
    "id": "dis-86-asthma-chronic-bronchitis-hapani-",
    "category": "Chronic & Lifestyle",
    "severity": "Moderate",
    "transmission": "Airway hyper-reactivity, dust, smoke, and pollen",
    "en": {
      "name": "Asthma & Chronic Bronchitis (Hapani) - Grade 3",
      "overview": "Detailed clinical guidance, prevention, and government health support in Odisha for Asthma & Chronic Bronchitis (Hapani).",
      "symptoms": [
        "Primary localized pain, fever, or discomfort",
        "Fatigue and reduced physical stamina",
        "Loss of normal appetite and mild headache",
        "Associated diagnostic clinical signs specific to condition"
      ],
      "causes": [
        "Etiological factors and environmental exposure related to Asthma & Chronic Bronchitis (Hapani)",
        "Unfavorable seasonal conditions or unhygienic community environment",
        "Nutritional or metabolic susceptibility factors"
      ],
      "treatments": [
        "Evidence-based pharmacotherapy prescribed by medical officer",
        "Adequate fluid intake, nutritious diet, and supportive care",
        "Free treatment and diagnostic screening available at Odisha CHCs and DHHs"
      ],
      "prevention": [
        "Maintain strict personal, domestic, and water hygiene",
        "Adhere to public health department guidelines and advisories",
        "Timely immunization and regular screening visits"
      ],
      "dos": [
        "Consult a qualified medical officer at early onset of symptoms",
        "Complete the prescribed medical regimen without skipping doses",
        "Maintain clean drinking water and well-balanced nutrition"
      ],
      "donts": [
        "Do not self-medicate or purchase unverified over-the-counter drugs",
        "Do not delay seeking medical care if red flag symptoms emerge",
        "Do not consume unhygienic or contaminated food and water"
      ],
      "whenToSeeDoctor": [
        "High continuous fever not responding to antipyretics",
        "Breathing difficulty, extreme fatigue, or fainting",
        "Inability to eat or drink oral fluids"
      ],
      "faqs": [
        {
          "question": "Is treatment for Asthma & Chronic Bronchitis (Hapani) available free in Odisha?",
          "answer": "Yes, under Niramaya scheme and BSKY, free diagnostics and medicines are provided across Odisha government facilities."
        },
        {
          "question": "When should one visit the nearest hospital?",
          "answer": "Visit the hospital at first onset of severe symptoms or if home recovery is slow after 48 hours."
        }
      ]
    },
    "or": {
      "name": "ହାପାନି ଓ ଶ୍ୱାସରୋଗ (ଆଜ୍‌ମା) (ପର୍ଯ୍ୟାୟ 3)",
      "nativeName": "ହାପାନି ଓ ଶ୍ୱାସରୋଗ (ଆଜ୍‌ମା)",
      "overview": "ଓଡ଼ିଶାର ଜନସାଧାରଣଙ୍କ ପାଇଁ ହାପାନି ଓ ଶ୍ୱାସରୋଗ (ଆଜ୍‌ମା) ର ଡାକ୍ତରୀ ମାର୍ଗଦର୍ଶନ, ପ୍ରତିରୋଧ ଓ ସରକାରୀ ସହାୟତା।",
      "symptoms": [
        "ସ୍ଥାନୀୟ ଯନ୍ତ୍ରଣା, ଜ୍ୱର ବା ଅସ୍ୱସ୍ତି ଭାବ",
        "ଦୁର୍ବଳତା ଏବଂ ଶରୀରରେ ଶକ୍ତିର ଅଭାବ",
        "ଭୋକ କମିବା ଏବଂ ମୁଣ୍ଡବିନ୍ଧା",
        "ରୋଗ ସମ୍ପର୍କିତ ସାଧାରଣ ଡାକ୍ତରୀ ଲକ୍ଷଣ"
      ],
      "causes": [
        "ହାପାନି ଓ ଶ୍ୱାସରୋଗ (ଆଜ୍‌ମା) ସମ୍ପର୍କିତ ପରିବେଶ ଓ ଜୀବାଣୁଜନିତ କାରଣ",
        "ଋତୁକାଳୀନ ପ୍ରତିକୂଳ ପାଗ ବା ଅପରିଷ୍କାର ପରିବେଶ",
        "ପୁଷ୍ଟିହୀନତା ବା ରୋଗ ପ୍ରତିରୋଧକ ଶକ୍ତିର ଅଭାବ"
      ],
      "treatments": [
        "ଡାକ୍ତରଙ୍କ ପରାମର୍ଶ ଅନୁଯାୟୀ ପ୍ରମାଣିତ ଔଷଧ ସେବନ",
        "ପର୍ଯ୍ୟାପ୍ତ ପାଣି ପିଇବା, ପୁଷ୍ଟିକର ଖାଦ୍ୟ ଓ ବିଶ୍ରାମ",
        "ଓଡ଼ିଶା ସରକାରୀ ଡାକ୍ତରଖାନାରେ ମାଗଣା ଚିକିତ୍ସା ଓ ପରୀକ୍ଷା"
      ],
      "prevention": [
        "ବ୍ୟକ୍ତିଗତ ଓ ପରିବେଶ ପରିମଳ ସର୍ବଦା ବଜାୟ ରଖନ୍ତୁ",
        "ସ୍ୱାସ୍ଥ୍ୟ ବିଭାଗର ନିର୍ଦ୍ଦେଶାବଳୀ ପାଳନ କରନ୍ତୁ",
        "ସମୟ ଅନୁଯାୟୀ ଟିକାକରଣ ଓ ସ୍ୱାସ୍ଥ୍ୟ ଯାଞ୍ଚ କରାନ୍ତୁ"
      ],
      "dos": [
        "ଲକ୍ଷଣ ଦେଖାଦେବା ମାତ୍ରେ ଡାକ୍ତରଙ୍କ ସହ ପରାମର୍ଶ କରନ୍ତୁ",
        "ଡାକ୍ତର ଦେଇଥିବା ଔଷଧ କୋର୍ସ ସମ୍ପୂର୍ଣ୍ଣ ଶେଷ କରନ୍ତୁ",
        "ଫୁଟା ପାଣି ଓ ପୁଷ୍ଟିକର ଖାଦ୍ୟ ଖାଆନ୍ତୁ"
      ],
      "donts": [
        "ଡାକ୍ତରଙ୍କ ବିନା ପରାମର୍ଶରେ ମେଡିସିନ୍ ଦୋକାନରୁ ଔଷଧ ଖାଆନ୍ତୁ ନାହିଁ",
        "ଗୁରୁତର ଲକ୍ଷଣ ଥିଲେ ଡାକ୍ତରଖାନା ଯିବାରେ ଡେରି କରନ୍ତୁ ନାହିଁ",
        "ଅପରିଷ୍କାର ଓ ବାସି ଖାଦ୍ୟ ଖାଆନ୍ତୁ ନାହିଁ"
      ],
      "whenToSeeDoctor": [
        "ଲଗାତାର ତେଜ ଜ୍ୱର ଲାଗିରହିଲେ",
        "ନିଶ୍ୱାସ ନେବାରେ କଷ୍ଟ ହେଲେ ବା ଚେତା ହରାଇଲେ",
        "ପାଣି ପିଇ ନପାରିଲେ ବା ବାରମ୍ବାର ବାନ୍ତି ହେଲେ"
      ],
      "faqs": [
        {
          "question": "ଓଡ଼ିଶାରେ ହାପାନି ଓ ଶ୍ୱାସରୋଗ (ଆଜ୍‌ମା) ର ଚିକିତ୍ସା ମାଗଣାରେ ମିଳେ କି?",
          "answer": "ହଁ, ନିରାମୟ ଯୋଜନା ଓ ବିଜୁ ସ୍ୱାସ୍ଥ୍ୟ କଲ୍ୟାଣ ଯୋଜନାରେ ସମସ୍ତ ସରକାରୀ ଡାକ୍ତରଖାନାରେ ମାଗଣା ପରୀକ୍ଷା ଓ ଔଷଧ ଉପଲବ୍ଧ।"
        },
        {
          "question": "କେବେ ଡାକ୍ତରଖାନା ଯିବା ଉଚିତ?",
          "answer": "ଗୁରୁତର ଲକ୍ଷଣ ଦେଖାଦେବା ମାତ୍ରେ ତୁରନ୍ତ ଡାକ୍ତରଖାନା ଯିବା ଉଚିତ।"
        }
      ]
    }
  },
  {
    "id": "dis-87-conjunctivitis-eye-flu-chakhyuroga-",
    "category": "ENT & Eye Care",
    "severity": "Mild",
    "transmission": "Viral/bacterial contact through fingers, towels, water",
    "en": {
      "name": "Conjunctivitis / Eye Flu (Chakhyuroga) - Grade 3",
      "overview": "Detailed clinical guidance, prevention, and government health support in Odisha for Conjunctivitis / Eye Flu (Chakhyuroga).",
      "symptoms": [
        "Primary localized pain, fever, or discomfort",
        "Fatigue and reduced physical stamina",
        "Loss of normal appetite and mild headache",
        "Associated diagnostic clinical signs specific to condition"
      ],
      "causes": [
        "Etiological factors and environmental exposure related to Conjunctivitis / Eye Flu (Chakhyuroga)",
        "Unfavorable seasonal conditions or unhygienic community environment",
        "Nutritional or metabolic susceptibility factors"
      ],
      "treatments": [
        "Evidence-based pharmacotherapy prescribed by medical officer",
        "Adequate fluid intake, nutritious diet, and supportive care",
        "Free treatment and diagnostic screening available at Odisha CHCs and DHHs"
      ],
      "prevention": [
        "Maintain strict personal, domestic, and water hygiene",
        "Adhere to public health department guidelines and advisories",
        "Timely immunization and regular screening visits"
      ],
      "dos": [
        "Consult a qualified medical officer at early onset of symptoms",
        "Complete the prescribed medical regimen without skipping doses",
        "Maintain clean drinking water and well-balanced nutrition"
      ],
      "donts": [
        "Do not self-medicate or purchase unverified over-the-counter drugs",
        "Do not delay seeking medical care if red flag symptoms emerge",
        "Do not consume unhygienic or contaminated food and water"
      ],
      "whenToSeeDoctor": [
        "High continuous fever not responding to antipyretics",
        "Breathing difficulty, extreme fatigue, or fainting",
        "Inability to eat or drink oral fluids"
      ],
      "faqs": [
        {
          "question": "Is treatment for Conjunctivitis / Eye Flu (Chakhyuroga) available free in Odisha?",
          "answer": "Yes, under Niramaya scheme and BSKY, free diagnostics and medicines are provided across Odisha government facilities."
        },
        {
          "question": "When should one visit the nearest hospital?",
          "answer": "Visit the hospital at first onset of severe symptoms or if home recovery is slow after 48 hours."
        }
      ]
    },
    "or": {
      "name": "ଆଖି ଧରିବା (ଚକ୍ଷୁରୋଗ / ଆଇ ଫ୍ଲୁ) (ପର୍ଯ୍ୟାୟ 3)",
      "nativeName": "ଆଖି ଧରିବା (ଚକ୍ଷୁରୋଗ / ଆଇ ଫ୍ଲୁ)",
      "overview": "ଓଡ଼ିଶାର ଜନସାଧାରଣଙ୍କ ପାଇଁ ଆଖି ଧରିବା (ଚକ୍ଷୁରୋଗ / ଆଇ ଫ୍ଲୁ) ର ଡାକ୍ତରୀ ମାର୍ଗଦର୍ଶନ, ପ୍ରତିରୋଧ ଓ ସରକାରୀ ସହାୟତା।",
      "symptoms": [
        "ସ୍ଥାନୀୟ ଯନ୍ତ୍ରଣା, ଜ୍ୱର ବା ଅସ୍ୱସ୍ତି ଭାବ",
        "ଦୁର୍ବଳତା ଏବଂ ଶରୀରରେ ଶକ୍ତିର ଅଭାବ",
        "ଭୋକ କମିବା ଏବଂ ମୁଣ୍ଡବିନ୍ଧା",
        "ରୋଗ ସମ୍ପର୍କିତ ସାଧାରଣ ଡାକ୍ତରୀ ଲକ୍ଷଣ"
      ],
      "causes": [
        "ଆଖି ଧରିବା (ଚକ୍ଷୁରୋଗ / ଆଇ ଫ୍ଲୁ) ସମ୍ପର୍କିତ ପରିବେଶ ଓ ଜୀବାଣୁଜନିତ କାରଣ",
        "ଋତୁକାଳୀନ ପ୍ରତିକୂଳ ପାଗ ବା ଅପରିଷ୍କାର ପରିବେଶ",
        "ପୁଷ୍ଟିହୀନତା ବା ରୋଗ ପ୍ରତିରୋଧକ ଶକ୍ତିର ଅଭାବ"
      ],
      "treatments": [
        "ଡାକ୍ତରଙ୍କ ପରାମର୍ଶ ଅନୁଯାୟୀ ପ୍ରମାଣିତ ଔଷଧ ସେବନ",
        "ପର୍ଯ୍ୟାପ୍ତ ପାଣି ପିଇବା, ପୁଷ୍ଟିକର ଖାଦ୍ୟ ଓ ବିଶ୍ରାମ",
        "ଓଡ଼ିଶା ସରକାରୀ ଡାକ୍ତରଖାନାରେ ମାଗଣା ଚିକିତ୍ସା ଓ ପରୀକ୍ଷା"
      ],
      "prevention": [
        "ବ୍ୟକ୍ତିଗତ ଓ ପରିବେଶ ପରିମଳ ସର୍ବଦା ବଜାୟ ରଖନ୍ତୁ",
        "ସ୍ୱାସ୍ଥ୍ୟ ବିଭାଗର ନିର୍ଦ୍ଦେଶାବଳୀ ପାଳନ କରନ୍ତୁ",
        "ସମୟ ଅନୁଯାୟୀ ଟିକାକରଣ ଓ ସ୍ୱାସ୍ଥ୍ୟ ଯାଞ୍ଚ କରାନ୍ତୁ"
      ],
      "dos": [
        "ଲକ୍ଷଣ ଦେଖାଦେବା ମାତ୍ରେ ଡାକ୍ତରଙ୍କ ସହ ପରାମର୍ଶ କରନ୍ତୁ",
        "ଡାକ୍ତର ଦେଇଥିବା ଔଷଧ କୋର୍ସ ସମ୍ପୂର୍ଣ୍ଣ ଶେଷ କରନ୍ତୁ",
        "ଫୁଟା ପାଣି ଓ ପୁଷ୍ଟିକର ଖାଦ୍ୟ ଖାଆନ୍ତୁ"
      ],
      "donts": [
        "ଡାକ୍ତରଙ୍କ ବିନା ପରାମର୍ଶରେ ମେଡିସିନ୍ ଦୋକାନରୁ ଔଷଧ ଖାଆନ୍ତୁ ନାହିଁ",
        "ଗୁରୁତର ଲକ୍ଷଣ ଥିଲେ ଡାକ୍ତରଖାନା ଯିବାରେ ଡେରି କରନ୍ତୁ ନାହିଁ",
        "ଅପରିଷ୍କାର ଓ ବାସି ଖାଦ୍ୟ ଖାଆନ୍ତୁ ନାହିଁ"
      ],
      "whenToSeeDoctor": [
        "ଲଗାତାର ତେଜ ଜ୍ୱର ଲାଗିରହିଲେ",
        "ନିଶ୍ୱାସ ନେବାରେ କଷ୍ଟ ହେଲେ ବା ଚେତା ହରାଇଲେ",
        "ପାଣି ପିଇ ନପାରିଲେ ବା ବାରମ୍ବାର ବାନ୍ତି ହେଲେ"
      ],
      "faqs": [
        {
          "question": "ଓଡ଼ିଶାରେ ଆଖି ଧରିବା (ଚକ୍ଷୁରୋଗ / ଆଇ ଫ୍ଲୁ) ର ଚିକିତ୍ସା ମାଗଣାରେ ମିଳେ କି?",
          "answer": "ହଁ, ନିରାମୟ ଯୋଜନା ଓ ବିଜୁ ସ୍ୱାସ୍ଥ୍ୟ କଲ୍ୟାଣ ଯୋଜନାରେ ସମସ୍ତ ସରକାରୀ ଡାକ୍ତରଖାନାରେ ମାଗଣା ପରୀକ୍ଷା ଓ ଔଷଧ ଉପଲବ୍ଧ।"
        },
        {
          "question": "କେବେ ଡାକ୍ତରଖାନା ଯିବା ଉଚିତ?",
          "answer": "ଗୁରୁତର ଲକ୍ଷଣ ଦେଖାଦେବା ମାତ୍ରେ ତୁରନ୍ତ ଡାକ୍ତରଖାନା ଯିବା ଉଚିତ।"
        }
      ]
    }
  },
  {
    "id": "dis-88-chickenpox-pani-photaka-milamila-",
    "category": "Viral Infection",
    "severity": "Moderate",
    "transmission": "Varicella zoster airborne respiratory droplets and blisters",
    "en": {
      "name": "Chickenpox (Pani Photaka / Milamila) - Grade 3",
      "overview": "Detailed clinical guidance, prevention, and government health support in Odisha for Chickenpox (Pani Photaka / Milamila).",
      "symptoms": [
        "Primary localized pain, fever, or discomfort",
        "Fatigue and reduced physical stamina",
        "Loss of normal appetite and mild headache",
        "Associated diagnostic clinical signs specific to condition"
      ],
      "causes": [
        "Etiological factors and environmental exposure related to Chickenpox (Pani Photaka / Milamila)",
        "Unfavorable seasonal conditions or unhygienic community environment",
        "Nutritional or metabolic susceptibility factors"
      ],
      "treatments": [
        "Evidence-based pharmacotherapy prescribed by medical officer",
        "Adequate fluid intake, nutritious diet, and supportive care",
        "Free treatment and diagnostic screening available at Odisha CHCs and DHHs"
      ],
      "prevention": [
        "Maintain strict personal, domestic, and water hygiene",
        "Adhere to public health department guidelines and advisories",
        "Timely immunization and regular screening visits"
      ],
      "dos": [
        "Consult a qualified medical officer at early onset of symptoms",
        "Complete the prescribed medical regimen without skipping doses",
        "Maintain clean drinking water and well-balanced nutrition"
      ],
      "donts": [
        "Do not self-medicate or purchase unverified over-the-counter drugs",
        "Do not delay seeking medical care if red flag symptoms emerge",
        "Do not consume unhygienic or contaminated food and water"
      ],
      "whenToSeeDoctor": [
        "High continuous fever not responding to antipyretics",
        "Breathing difficulty, extreme fatigue, or fainting",
        "Inability to eat or drink oral fluids"
      ],
      "faqs": [
        {
          "question": "Is treatment for Chickenpox (Pani Photaka / Milamila) available free in Odisha?",
          "answer": "Yes, under Niramaya scheme and BSKY, free diagnostics and medicines are provided across Odisha government facilities."
        },
        {
          "question": "When should one visit the nearest hospital?",
          "answer": "Visit the hospital at first onset of severe symptoms or if home recovery is slow after 48 hours."
        }
      ]
    },
    "or": {
      "name": "ପାଣି ଫୋଟକା (ଚିକେନପକ୍ସ) (ପର୍ଯ୍ୟାୟ 3)",
      "nativeName": "ପାଣି ଫୋଟକା (ଚିକେନପକ୍ସ)",
      "overview": "ଓଡ଼ିଶାର ଜନସାଧାରଣଙ୍କ ପାଇଁ ପାଣି ଫୋଟକା (ଚିକେନପକ୍ସ) ର ଡାକ୍ତରୀ ମାର୍ଗଦର୍ଶନ, ପ୍ରତିରୋଧ ଓ ସରକାରୀ ସହାୟତା।",
      "symptoms": [
        "ସ୍ଥାନୀୟ ଯନ୍ତ୍ରଣା, ଜ୍ୱର ବା ଅସ୍ୱସ୍ତି ଭାବ",
        "ଦୁର୍ବଳତା ଏବଂ ଶରୀରରେ ଶକ୍ତିର ଅଭାବ",
        "ଭୋକ କମିବା ଏବଂ ମୁଣ୍ଡବିନ୍ଧା",
        "ରୋଗ ସମ୍ପର୍କିତ ସାଧାରଣ ଡାକ୍ତରୀ ଲକ୍ଷଣ"
      ],
      "causes": [
        "ପାଣି ଫୋଟକା (ଚିକେନପକ୍ସ) ସମ୍ପର୍କିତ ପରିବେଶ ଓ ଜୀବାଣୁଜନିତ କାରଣ",
        "ଋତୁକାଳୀନ ପ୍ରତିକୂଳ ପାଗ ବା ଅପରିଷ୍କାର ପରିବେଶ",
        "ପୁଷ୍ଟିହୀନତା ବା ରୋଗ ପ୍ରତିରୋଧକ ଶକ୍ତିର ଅଭାବ"
      ],
      "treatments": [
        "ଡାକ୍ତରଙ୍କ ପରାମର୍ଶ ଅନୁଯାୟୀ ପ୍ରମାଣିତ ଔଷଧ ସେବନ",
        "ପର୍ଯ୍ୟାପ୍ତ ପାଣି ପିଇବା, ପୁଷ୍ଟିକର ଖାଦ୍ୟ ଓ ବିଶ୍ରାମ",
        "ଓଡ଼ିଶା ସରକାରୀ ଡାକ୍ତରଖାନାରେ ମାଗଣା ଚିକିତ୍ସା ଓ ପରୀକ୍ଷା"
      ],
      "prevention": [
        "ବ୍ୟକ୍ତିଗତ ଓ ପରିବେଶ ପରିମଳ ସର୍ବଦା ବଜାୟ ରଖନ୍ତୁ",
        "ସ୍ୱାସ୍ଥ୍ୟ ବିଭାଗର ନିର୍ଦ୍ଦେଶାବଳୀ ପାଳନ କରନ୍ତୁ",
        "ସମୟ ଅନୁଯାୟୀ ଟିକାକରଣ ଓ ସ୍ୱାସ୍ଥ୍ୟ ଯାଞ୍ଚ କରାନ୍ତୁ"
      ],
      "dos": [
        "ଲକ୍ଷଣ ଦେଖାଦେବା ମାତ୍ରେ ଡାକ୍ତରଙ୍କ ସହ ପରାମର୍ଶ କରନ୍ତୁ",
        "ଡାକ୍ତର ଦେଇଥିବା ଔଷଧ କୋର୍ସ ସମ୍ପୂର୍ଣ୍ଣ ଶେଷ କରନ୍ତୁ",
        "ଫୁଟା ପାଣି ଓ ପୁଷ୍ଟିକର ଖାଦ୍ୟ ଖାଆନ୍ତୁ"
      ],
      "donts": [
        "ଡାକ୍ତରଙ୍କ ବିନା ପରାମର୍ଶରେ ମେଡିସିନ୍ ଦୋକାନରୁ ଔଷଧ ଖାଆନ୍ତୁ ନାହିଁ",
        "ଗୁରୁତର ଲକ୍ଷଣ ଥିଲେ ଡାକ୍ତରଖାନା ଯିବାରେ ଡେରି କରନ୍ତୁ ନାହିଁ",
        "ଅପରିଷ୍କାର ଓ ବାସି ଖାଦ୍ୟ ଖାଆନ୍ତୁ ନାହିଁ"
      ],
      "whenToSeeDoctor": [
        "ଲଗାତାର ତେଜ ଜ୍ୱର ଲାଗିରହିଲେ",
        "ନିଶ୍ୱାସ ନେବାରେ କଷ୍ଟ ହେଲେ ବା ଚେତା ହରାଇଲେ",
        "ପାଣି ପିଇ ନପାରିଲେ ବା ବାରମ୍ବାର ବାନ୍ତି ହେଲେ"
      ],
      "faqs": [
        {
          "question": "ଓଡ଼ିଶାରେ ପାଣି ଫୋଟକା (ଚିକେନପକ୍ସ) ର ଚିକିତ୍ସା ମାଗଣାରେ ମିଳେ କି?",
          "answer": "ହଁ, ନିରାମୟ ଯୋଜନା ଓ ବିଜୁ ସ୍ୱାସ୍ଥ୍ୟ କଲ୍ୟାଣ ଯୋଜନାରେ ସମସ୍ତ ସରକାରୀ ଡାକ୍ତରଖାନାରେ ମାଗଣା ପରୀକ୍ଷା ଓ ଔଷଧ ଉପଲବ୍ଧ।"
        },
        {
          "question": "କେବେ ଡାକ୍ତରଖାନା ଯିବା ଉଚିତ?",
          "answer": "ଗୁରୁତର ଲକ୍ଷଣ ଦେଖାଦେବା ମାତ୍ରେ ତୁରନ୍ତ ଡାକ୍ତରଖାନା ଯିବା ଉଚିତ।"
        }
      ]
    }
  },
  {
    "id": "dis-89-measles-milamila-rubeola-",
    "category": "Maternal & Child",
    "severity": "High",
    "transmission": "Airborne virus droplets in unvaccinated children",
    "en": {
      "name": "Measles (Milamila / Rubeola) - Grade 3",
      "overview": "Detailed clinical guidance, prevention, and government health support in Odisha for Measles (Milamila / Rubeola).",
      "symptoms": [
        "Primary localized pain, fever, or discomfort",
        "Fatigue and reduced physical stamina",
        "Loss of normal appetite and mild headache",
        "Associated diagnostic clinical signs specific to condition"
      ],
      "causes": [
        "Etiological factors and environmental exposure related to Measles (Milamila / Rubeola)",
        "Unfavorable seasonal conditions or unhygienic community environment",
        "Nutritional or metabolic susceptibility factors"
      ],
      "treatments": [
        "Evidence-based pharmacotherapy prescribed by medical officer",
        "Adequate fluid intake, nutritious diet, and supportive care",
        "Free treatment and diagnostic screening available at Odisha CHCs and DHHs"
      ],
      "prevention": [
        "Maintain strict personal, domestic, and water hygiene",
        "Adhere to public health department guidelines and advisories",
        "Timely immunization and regular screening visits"
      ],
      "dos": [
        "Consult a qualified medical officer at early onset of symptoms",
        "Complete the prescribed medical regimen without skipping doses",
        "Maintain clean drinking water and well-balanced nutrition"
      ],
      "donts": [
        "Do not self-medicate or purchase unverified over-the-counter drugs",
        "Do not delay seeking medical care if red flag symptoms emerge",
        "Do not consume unhygienic or contaminated food and water"
      ],
      "whenToSeeDoctor": [
        "High continuous fever not responding to antipyretics",
        "Breathing difficulty, extreme fatigue, or fainting",
        "Inability to eat or drink oral fluids"
      ],
      "faqs": [
        {
          "question": "Is treatment for Measles (Milamila / Rubeola) available free in Odisha?",
          "answer": "Yes, under Niramaya scheme and BSKY, free diagnostics and medicines are provided across Odisha government facilities."
        },
        {
          "question": "When should one visit the nearest hospital?",
          "answer": "Visit the hospital at first onset of severe symptoms or if home recovery is slow after 48 hours."
        }
      ]
    },
    "or": {
      "name": "ମିଳିମିଳା (ମିଜିଲ୍ସ) (ପର୍ଯ୍ୟାୟ 3)",
      "nativeName": "ମିଳିମିଳା (ମିଜିଲ୍ସ)",
      "overview": "ଓଡ଼ିଶାର ଜନସାଧାରଣଙ୍କ ପାଇଁ ମିଳିମିଳା (ମିଜିଲ୍ସ) ର ଡାକ୍ତରୀ ମାର୍ଗଦର୍ଶନ, ପ୍ରତିରୋଧ ଓ ସରକାରୀ ସହାୟତା।",
      "symptoms": [
        "ସ୍ଥାନୀୟ ଯନ୍ତ୍ରଣା, ଜ୍ୱର ବା ଅସ୍ୱସ୍ତି ଭାବ",
        "ଦୁର୍ବଳତା ଏବଂ ଶରୀରରେ ଶକ୍ତିର ଅଭାବ",
        "ଭୋକ କମିବା ଏବଂ ମୁଣ୍ଡବିନ୍ଧା",
        "ରୋଗ ସମ୍ପର୍କିତ ସାଧାରଣ ଡାକ୍ତରୀ ଲକ୍ଷଣ"
      ],
      "causes": [
        "ମିଳିମିଳା (ମିଜିଲ୍ସ) ସମ୍ପର୍କିତ ପରିବେଶ ଓ ଜୀବାଣୁଜନିତ କାରଣ",
        "ଋତୁକାଳୀନ ପ୍ରତିକୂଳ ପାଗ ବା ଅପରିଷ୍କାର ପରିବେଶ",
        "ପୁଷ୍ଟିହୀନତା ବା ରୋଗ ପ୍ରତିରୋଧକ ଶକ୍ତିର ଅଭାବ"
      ],
      "treatments": [
        "ଡାକ୍ତରଙ୍କ ପରାମର୍ଶ ଅନୁଯାୟୀ ପ୍ରମାଣିତ ଔଷଧ ସେବନ",
        "ପର୍ଯ୍ୟାପ୍ତ ପାଣି ପିଇବା, ପୁଷ୍ଟିକର ଖାଦ୍ୟ ଓ ବିଶ୍ରାମ",
        "ଓଡ଼ିଶା ସରକାରୀ ଡାକ୍ତରଖାନାରେ ମାଗଣା ଚିକିତ୍ସା ଓ ପରୀକ୍ଷା"
      ],
      "prevention": [
        "ବ୍ୟକ୍ତିଗତ ଓ ପରିବେଶ ପରିମଳ ସର୍ବଦା ବଜାୟ ରଖନ୍ତୁ",
        "ସ୍ୱାସ୍ଥ୍ୟ ବିଭାଗର ନିର୍ଦ୍ଦେଶାବଳୀ ପାଳନ କରନ୍ତୁ",
        "ସମୟ ଅନୁଯାୟୀ ଟିକାକରଣ ଓ ସ୍ୱାସ୍ଥ୍ୟ ଯାଞ୍ଚ କରାନ୍ତୁ"
      ],
      "dos": [
        "ଲକ୍ଷଣ ଦେଖାଦେବା ମାତ୍ରେ ଡାକ୍ତରଙ୍କ ସହ ପରାମର୍ଶ କରନ୍ତୁ",
        "ଡାକ୍ତର ଦେଇଥିବା ଔଷଧ କୋର୍ସ ସମ୍ପୂର୍ଣ୍ଣ ଶେଷ କରନ୍ତୁ",
        "ଫୁଟା ପାଣି ଓ ପୁଷ୍ଟିକର ଖାଦ୍ୟ ଖାଆନ୍ତୁ"
      ],
      "donts": [
        "ଡାକ୍ତରଙ୍କ ବିନା ପରାମର୍ଶରେ ମେଡିସିନ୍ ଦୋକାନରୁ ଔଷଧ ଖାଆନ୍ତୁ ନାହିଁ",
        "ଗୁରୁତର ଲକ୍ଷଣ ଥିଲେ ଡାକ୍ତରଖାନା ଯିବାରେ ଡେରି କରନ୍ତୁ ନାହିଁ",
        "ଅପରିଷ୍କାର ଓ ବାସି ଖାଦ୍ୟ ଖାଆନ୍ତୁ ନାହିଁ"
      ],
      "whenToSeeDoctor": [
        "ଲଗାତାର ତେଜ ଜ୍ୱର ଲାଗିରହିଲେ",
        "ନିଶ୍ୱାସ ନେବାରେ କଷ୍ଟ ହେଲେ ବା ଚେତା ହରାଇଲେ",
        "ପାଣି ପିଇ ନପାରିଲେ ବା ବାରମ୍ବାର ବାନ୍ତି ହେଲେ"
      ],
      "faqs": [
        {
          "question": "ଓଡ଼ିଶାରେ ମିଳିମିଳା (ମିଜିଲ୍ସ) ର ଚିକିତ୍ସା ମାଗଣାରେ ମିଳେ କି?",
          "answer": "ହଁ, ନିରାମୟ ଯୋଜନା ଓ ବିଜୁ ସ୍ୱାସ୍ଥ୍ୟ କଲ୍ୟାଣ ଯୋଜନାରେ ସମସ୍ତ ସରକାରୀ ଡାକ୍ତରଖାନାରେ ମାଗଣା ପରୀକ୍ଷା ଓ ଔଷଧ ଉପଲବ୍ଧ।"
        },
        {
          "question": "କେବେ ଡାକ୍ତରଖାନା ଯିବା ଉଚିତ?",
          "answer": "ଗୁରୁତର ଲକ୍ଷଣ ଦେଖାଦେବା ମାତ୍ରେ ତୁରନ୍ତ ଡାକ୍ତରଖାନା ଯିବା ଉଚିତ।"
        }
      ]
    }
  },
  {
    "id": "dis-90-mumps-galagandi-parotitis-",
    "category": "Viral Infection",
    "severity": "Mild",
    "transmission": "Airborne saliva droplets",
    "en": {
      "name": "Mumps (Galagandi / Parotitis) - Grade 3",
      "overview": "Detailed clinical guidance, prevention, and government health support in Odisha for Mumps (Galagandi / Parotitis).",
      "symptoms": [
        "Primary localized pain, fever, or discomfort",
        "Fatigue and reduced physical stamina",
        "Loss of normal appetite and mild headache",
        "Associated diagnostic clinical signs specific to condition"
      ],
      "causes": [
        "Etiological factors and environmental exposure related to Mumps (Galagandi / Parotitis)",
        "Unfavorable seasonal conditions or unhygienic community environment",
        "Nutritional or metabolic susceptibility factors"
      ],
      "treatments": [
        "Evidence-based pharmacotherapy prescribed by medical officer",
        "Adequate fluid intake, nutritious diet, and supportive care",
        "Free treatment and diagnostic screening available at Odisha CHCs and DHHs"
      ],
      "prevention": [
        "Maintain strict personal, domestic, and water hygiene",
        "Adhere to public health department guidelines and advisories",
        "Timely immunization and regular screening visits"
      ],
      "dos": [
        "Consult a qualified medical officer at early onset of symptoms",
        "Complete the prescribed medical regimen without skipping doses",
        "Maintain clean drinking water and well-balanced nutrition"
      ],
      "donts": [
        "Do not self-medicate or purchase unverified over-the-counter drugs",
        "Do not delay seeking medical care if red flag symptoms emerge",
        "Do not consume unhygienic or contaminated food and water"
      ],
      "whenToSeeDoctor": [
        "High continuous fever not responding to antipyretics",
        "Breathing difficulty, extreme fatigue, or fainting",
        "Inability to eat or drink oral fluids"
      ],
      "faqs": [
        {
          "question": "Is treatment for Mumps (Galagandi / Parotitis) available free in Odisha?",
          "answer": "Yes, under Niramaya scheme and BSKY, free diagnostics and medicines are provided across Odisha government facilities."
        },
        {
          "question": "When should one visit the nearest hospital?",
          "answer": "Visit the hospital at first onset of severe symptoms or if home recovery is slow after 48 hours."
        }
      ]
    },
    "or": {
      "name": "ଗାଲଫୁଲା (ଗଳଗଣ୍ଡ / ମମ୍ପସ୍) (ପର୍ଯ୍ୟାୟ 3)",
      "nativeName": "ଗାଲଫୁଲା (ଗଳଗଣ୍ଡ / ମମ୍ପସ୍)",
      "overview": "ଓଡ଼ିଶାର ଜନସାଧାରଣଙ୍କ ପାଇଁ ଗାଲଫୁଲା (ଗଳଗଣ୍ଡ / ମମ୍ପସ୍) ର ଡାକ୍ତରୀ ମାର୍ଗଦର୍ଶନ, ପ୍ରତିରୋଧ ଓ ସରକାରୀ ସହାୟତା।",
      "symptoms": [
        "ସ୍ଥାନୀୟ ଯନ୍ତ୍ରଣା, ଜ୍ୱର ବା ଅସ୍ୱସ୍ତି ଭାବ",
        "ଦୁର୍ବଳତା ଏବଂ ଶରୀରରେ ଶକ୍ତିର ଅଭାବ",
        "ଭୋକ କମିବା ଏବଂ ମୁଣ୍ଡବିନ୍ଧା",
        "ରୋଗ ସମ୍ପର୍କିତ ସାଧାରଣ ଡାକ୍ତରୀ ଲକ୍ଷଣ"
      ],
      "causes": [
        "ଗାଲଫୁଲା (ଗଳଗଣ୍ଡ / ମମ୍ପସ୍) ସମ୍ପର୍କିତ ପରିବେଶ ଓ ଜୀବାଣୁଜନିତ କାରଣ",
        "ଋତୁକାଳୀନ ପ୍ରତିକୂଳ ପାଗ ବା ଅପରିଷ୍କାର ପରିବେଶ",
        "ପୁଷ୍ଟିହୀନତା ବା ରୋଗ ପ୍ରତିରୋଧକ ଶକ୍ତିର ଅଭାବ"
      ],
      "treatments": [
        "ଡାକ୍ତରଙ୍କ ପରାମର୍ଶ ଅନୁଯାୟୀ ପ୍ରମାଣିତ ଔଷଧ ସେବନ",
        "ପର୍ଯ୍ୟାପ୍ତ ପାଣି ପିଇବା, ପୁଷ୍ଟିକର ଖାଦ୍ୟ ଓ ବିଶ୍ରାମ",
        "ଓଡ଼ିଶା ସରକାରୀ ଡାକ୍ତରଖାନାରେ ମାଗଣା ଚିକିତ୍ସା ଓ ପରୀକ୍ଷା"
      ],
      "prevention": [
        "ବ୍ୟକ୍ତିଗତ ଓ ପରିବେଶ ପରିମଳ ସର୍ବଦା ବଜାୟ ରଖନ୍ତୁ",
        "ସ୍ୱାସ୍ଥ୍ୟ ବିଭାଗର ନିର୍ଦ୍ଦେଶାବଳୀ ପାଳନ କରନ୍ତୁ",
        "ସମୟ ଅନୁଯାୟୀ ଟିକାକରଣ ଓ ସ୍ୱାସ୍ଥ୍ୟ ଯାଞ୍ଚ କରାନ୍ତୁ"
      ],
      "dos": [
        "ଲକ୍ଷଣ ଦେଖାଦେବା ମାତ୍ରେ ଡାକ୍ତରଙ୍କ ସହ ପରାମର୍ଶ କରନ୍ତୁ",
        "ଡାକ୍ତର ଦେଇଥିବା ଔଷଧ କୋର୍ସ ସମ୍ପୂର୍ଣ୍ଣ ଶେଷ କରନ୍ତୁ",
        "ଫୁଟା ପାଣି ଓ ପୁଷ୍ଟିକର ଖାଦ୍ୟ ଖାଆନ୍ତୁ"
      ],
      "donts": [
        "ଡାକ୍ତରଙ୍କ ବିନା ପରାମର୍ଶରେ ମେଡିସିନ୍ ଦୋକାନରୁ ଔଷଧ ଖାଆନ୍ତୁ ନାହିଁ",
        "ଗୁରୁତର ଲକ୍ଷଣ ଥିଲେ ଡାକ୍ତରଖାନା ଯିବାରେ ଡେରି କରନ୍ତୁ ନାହିଁ",
        "ଅପରିଷ୍କାର ଓ ବାସି ଖାଦ୍ୟ ଖାଆନ୍ତୁ ନାହିଁ"
      ],
      "whenToSeeDoctor": [
        "ଲଗାତାର ତେଜ ଜ୍ୱର ଲାଗିରହିଲେ",
        "ନିଶ୍ୱାସ ନେବାରେ କଷ୍ଟ ହେଲେ ବା ଚେତା ହରାଇଲେ",
        "ପାଣି ପିଇ ନପାରିଲେ ବା ବାରମ୍ବାର ବାନ୍ତି ହେଲେ"
      ],
      "faqs": [
        {
          "question": "ଓଡ଼ିଶାରେ ଗାଲଫୁଲା (ଗଳଗଣ୍ଡ / ମମ୍ପସ୍) ର ଚିକିତ୍ସା ମାଗଣାରେ ମିଳେ କି?",
          "answer": "ହଁ, ନିରାମୟ ଯୋଜନା ଓ ବିଜୁ ସ୍ୱାସ୍ଥ୍ୟ କଲ୍ୟାଣ ଯୋଜନାରେ ସମସ୍ତ ସରକାରୀ ଡାକ୍ତରଖାନାରେ ମାଗଣା ପରୀକ୍ଷା ଓ ଔଷଧ ଉପଲବ୍ଧ।"
        },
        {
          "question": "କେବେ ଡାକ୍ତରଖାନା ଯିବା ଉଚିତ?",
          "answer": "ଗୁରୁତର ଲକ୍ଷଣ ଦେଖାଦେବା ମାତ୍ରେ ତୁରନ୍ତ ଡାକ୍ତରଖାନା ଯିବା ଉଚିତ।"
        }
      ]
    }
  },
  {
    "id": "dis-91-tonsillitis-strep-pharyngitis",
    "category": "ENT & Eye Care",
    "severity": "Mild",
    "transmission": "Bacterial/viral throat droplet transmission",
    "en": {
      "name": "Tonsillitis & Strep Pharyngitis - Grade 3",
      "overview": "Detailed clinical guidance, prevention, and government health support in Odisha for Tonsillitis & Strep Pharyngitis.",
      "symptoms": [
        "Primary localized pain, fever, or discomfort",
        "Fatigue and reduced physical stamina",
        "Loss of normal appetite and mild headache",
        "Associated diagnostic clinical signs specific to condition"
      ],
      "causes": [
        "Etiological factors and environmental exposure related to Tonsillitis & Strep Pharyngitis",
        "Unfavorable seasonal conditions or unhygienic community environment",
        "Nutritional or metabolic susceptibility factors"
      ],
      "treatments": [
        "Evidence-based pharmacotherapy prescribed by medical officer",
        "Adequate fluid intake, nutritious diet, and supportive care",
        "Free treatment and diagnostic screening available at Odisha CHCs and DHHs"
      ],
      "prevention": [
        "Maintain strict personal, domestic, and water hygiene",
        "Adhere to public health department guidelines and advisories",
        "Timely immunization and regular screening visits"
      ],
      "dos": [
        "Consult a qualified medical officer at early onset of symptoms",
        "Complete the prescribed medical regimen without skipping doses",
        "Maintain clean drinking water and well-balanced nutrition"
      ],
      "donts": [
        "Do not self-medicate or purchase unverified over-the-counter drugs",
        "Do not delay seeking medical care if red flag symptoms emerge",
        "Do not consume unhygienic or contaminated food and water"
      ],
      "whenToSeeDoctor": [
        "High continuous fever not responding to antipyretics",
        "Breathing difficulty, extreme fatigue, or fainting",
        "Inability to eat or drink oral fluids"
      ],
      "faqs": [
        {
          "question": "Is treatment for Tonsillitis & Strep Pharyngitis available free in Odisha?",
          "answer": "Yes, under Niramaya scheme and BSKY, free diagnostics and medicines are provided across Odisha government facilities."
        },
        {
          "question": "When should one visit the nearest hospital?",
          "answer": "Visit the hospital at first onset of severe symptoms or if home recovery is slow after 48 hours."
        }
      ]
    },
    "or": {
      "name": "ଟନସିଲ୍ ପ୍ରଦାହ (ଗଳା ଯନ୍ତ୍ରଣା) (ପର୍ଯ୍ୟାୟ 3)",
      "nativeName": "ଟନସିଲ୍ ପ୍ରଦାହ (ଗଳା ଯନ୍ତ୍ରଣା)",
      "overview": "ଓଡ଼ିଶାର ଜନସାଧାରଣଙ୍କ ପାଇଁ ଟନସିଲ୍ ପ୍ରଦାହ (ଗଳା ଯନ୍ତ୍ରଣା) ର ଡାକ୍ତରୀ ମାର୍ଗଦର୍ଶନ, ପ୍ରତିରୋଧ ଓ ସରକାରୀ ସହାୟତା।",
      "symptoms": [
        "ସ୍ଥାନୀୟ ଯନ୍ତ୍ରଣା, ଜ୍ୱର ବା ଅସ୍ୱସ୍ତି ଭାବ",
        "ଦୁର୍ବଳତା ଏବଂ ଶରୀରରେ ଶକ୍ତିର ଅଭାବ",
        "ଭୋକ କମିବା ଏବଂ ମୁଣ୍ଡବିନ୍ଧା",
        "ରୋଗ ସମ୍ପର୍କିତ ସାଧାରଣ ଡାକ୍ତରୀ ଲକ୍ଷଣ"
      ],
      "causes": [
        "ଟନସିଲ୍ ପ୍ରଦାହ (ଗଳା ଯନ୍ତ୍ରଣା) ସମ୍ପର୍କିତ ପରିବେଶ ଓ ଜୀବାଣୁଜନିତ କାରଣ",
        "ଋତୁକାଳୀନ ପ୍ରତିକୂଳ ପାଗ ବା ଅପରିଷ୍କାର ପରିବେଶ",
        "ପୁଷ୍ଟିହୀନତା ବା ରୋଗ ପ୍ରତିରୋଧକ ଶକ୍ତିର ଅଭାବ"
      ],
      "treatments": [
        "ଡାକ୍ତରଙ୍କ ପରାମର୍ଶ ଅନୁଯାୟୀ ପ୍ରମାଣିତ ଔଷଧ ସେବନ",
        "ପର୍ଯ୍ୟାପ୍ତ ପାଣି ପିଇବା, ପୁଷ୍ଟିକର ଖାଦ୍ୟ ଓ ବିଶ୍ରାମ",
        "ଓଡ଼ିଶା ସରକାରୀ ଡାକ୍ତରଖାନାରେ ମାଗଣା ଚିକିତ୍ସା ଓ ପରୀକ୍ଷା"
      ],
      "prevention": [
        "ବ୍ୟକ୍ତିଗତ ଓ ପରିବେଶ ପରିମଳ ସର୍ବଦା ବଜାୟ ରଖନ୍ତୁ",
        "ସ୍ୱାସ୍ଥ୍ୟ ବିଭାଗର ନିର୍ଦ୍ଦେଶାବଳୀ ପାଳନ କରନ୍ତୁ",
        "ସମୟ ଅନୁଯାୟୀ ଟିକାକରଣ ଓ ସ୍ୱାସ୍ଥ୍ୟ ଯାଞ୍ଚ କରାନ୍ତୁ"
      ],
      "dos": [
        "ଲକ୍ଷଣ ଦେଖାଦେବା ମାତ୍ରେ ଡାକ୍ତରଙ୍କ ସହ ପରାମର୍ଶ କରନ୍ତୁ",
        "ଡାକ୍ତର ଦେଇଥିବା ଔଷଧ କୋର୍ସ ସମ୍ପୂର୍ଣ୍ଣ ଶେଷ କରନ୍ତୁ",
        "ଫୁଟା ପାଣି ଓ ପୁଷ୍ଟିକର ଖାଦ୍ୟ ଖାଆନ୍ତୁ"
      ],
      "donts": [
        "ଡାକ୍ତରଙ୍କ ବିନା ପରାମର୍ଶରେ ମେଡିସିନ୍ ଦୋକାନରୁ ଔଷଧ ଖାଆନ୍ତୁ ନାହିଁ",
        "ଗୁରୁତର ଲକ୍ଷଣ ଥିଲେ ଡାକ୍ତରଖାନା ଯିବାରେ ଡେରି କରନ୍ତୁ ନାହିଁ",
        "ଅପରିଷ୍କାର ଓ ବାସି ଖାଦ୍ୟ ଖାଆନ୍ତୁ ନାହିଁ"
      ],
      "whenToSeeDoctor": [
        "ଲଗାତାର ତେଜ ଜ୍ୱର ଲାଗିରହିଲେ",
        "ନିଶ୍ୱାସ ନେବାରେ କଷ୍ଟ ହେଲେ ବା ଚେତା ହରାଇଲେ",
        "ପାଣି ପିଇ ନପାରିଲେ ବା ବାରମ୍ବାର ବାନ୍ତି ହେଲେ"
      ],
      "faqs": [
        {
          "question": "ଓଡ଼ିଶାରେ ଟନସିଲ୍ ପ୍ରଦାହ (ଗଳା ଯନ୍ତ୍ରଣା) ର ଚିକିତ୍ସା ମାଗଣାରେ ମିଳେ କି?",
          "answer": "ହଁ, ନିରାମୟ ଯୋଜନା ଓ ବିଜୁ ସ୍ୱାସ୍ଥ୍ୟ କଲ୍ୟାଣ ଯୋଜନାରେ ସମସ୍ତ ସରକାରୀ ଡାକ୍ତରଖାନାରେ ମାଗଣା ପରୀକ୍ଷା ଓ ଔଷଧ ଉପଲବ୍ଧ।"
        },
        {
          "question": "କେବେ ଡାକ୍ତରଖାନା ଯିବା ଉଚିତ?",
          "answer": "ଗୁରୁତର ଲକ୍ଷଣ ଦେଖାଦେବା ମାତ୍ରେ ତୁରନ୍ତ ଡାକ୍ତରଖାନା ଯିବା ଉଚିତ।"
        }
      ]
    }
  },
  {
    "id": "dis-92-oral-submucous-fibrosis-pan-gutkha-osmf-",
    "category": "Chronic & Lifestyle",
    "severity": "High",
    "transmission": "Chewing areca nut, tobacco, and gutkha",
    "en": {
      "name": "Oral Submucous Fibrosis (Pan / Gutkha OSMF) - Grade 3",
      "overview": "Detailed clinical guidance, prevention, and government health support in Odisha for Oral Submucous Fibrosis (Pan / Gutkha OSMF).",
      "symptoms": [
        "Primary localized pain, fever, or discomfort",
        "Fatigue and reduced physical stamina",
        "Loss of normal appetite and mild headache",
        "Associated diagnostic clinical signs specific to condition"
      ],
      "causes": [
        "Etiological factors and environmental exposure related to Oral Submucous Fibrosis (Pan / Gutkha OSMF)",
        "Unfavorable seasonal conditions or unhygienic community environment",
        "Nutritional or metabolic susceptibility factors"
      ],
      "treatments": [
        "Evidence-based pharmacotherapy prescribed by medical officer",
        "Adequate fluid intake, nutritious diet, and supportive care",
        "Free treatment and diagnostic screening available at Odisha CHCs and DHHs"
      ],
      "prevention": [
        "Maintain strict personal, domestic, and water hygiene",
        "Adhere to public health department guidelines and advisories",
        "Timely immunization and regular screening visits"
      ],
      "dos": [
        "Consult a qualified medical officer at early onset of symptoms",
        "Complete the prescribed medical regimen without skipping doses",
        "Maintain clean drinking water and well-balanced nutrition"
      ],
      "donts": [
        "Do not self-medicate or purchase unverified over-the-counter drugs",
        "Do not delay seeking medical care if red flag symptoms emerge",
        "Do not consume unhygienic or contaminated food and water"
      ],
      "whenToSeeDoctor": [
        "High continuous fever not responding to antipyretics",
        "Breathing difficulty, extreme fatigue, or fainting",
        "Inability to eat or drink oral fluids"
      ],
      "faqs": [
        {
          "question": "Is treatment for Oral Submucous Fibrosis (Pan / Gutkha OSMF) available free in Odisha?",
          "answer": "Yes, under Niramaya scheme and BSKY, free diagnostics and medicines are provided across Odisha government facilities."
        },
        {
          "question": "When should one visit the nearest hospital?",
          "answer": "Visit the hospital at first onset of severe symptoms or if home recovery is slow after 48 hours."
        }
      ]
    },
    "or": {
      "name": "ପାନ/ଗୁଟଖା ଜନିତ ମୁଖ ରୋଗ (OSMF) (ପର୍ଯ୍ୟାୟ 3)",
      "nativeName": "ପାନ/ଗୁଟଖା ଜନିତ ମୁଖ ରୋଗ (OSMF)",
      "overview": "ଓଡ଼ିଶାର ଜନସାଧାରଣଙ୍କ ପାଇଁ ପାନ/ଗୁଟଖା ଜନିତ ମୁଖ ରୋଗ (OSMF) ର ଡାକ୍ତରୀ ମାର୍ଗଦର୍ଶନ, ପ୍ରତିରୋଧ ଓ ସରକାରୀ ସହାୟତା।",
      "symptoms": [
        "ସ୍ଥାନୀୟ ଯନ୍ତ୍ରଣା, ଜ୍ୱର ବା ଅସ୍ୱସ୍ତି ଭାବ",
        "ଦୁର୍ବଳତା ଏବଂ ଶରୀରରେ ଶକ୍ତିର ଅଭାବ",
        "ଭୋକ କମିବା ଏବଂ ମୁଣ୍ଡବିନ୍ଧା",
        "ରୋଗ ସମ୍ପର୍କିତ ସାଧାରଣ ଡାକ୍ତରୀ ଲକ୍ଷଣ"
      ],
      "causes": [
        "ପାନ/ଗୁଟଖା ଜନିତ ମୁଖ ରୋଗ (OSMF) ସମ୍ପର୍କିତ ପରିବେଶ ଓ ଜୀବାଣୁଜନିତ କାରଣ",
        "ଋତୁକାଳୀନ ପ୍ରତିକୂଳ ପାଗ ବା ଅପରିଷ୍କାର ପରିବେଶ",
        "ପୁଷ୍ଟିହୀନତା ବା ରୋଗ ପ୍ରତିରୋଧକ ଶକ୍ତିର ଅଭାବ"
      ],
      "treatments": [
        "ଡାକ୍ତରଙ୍କ ପରାମର୍ଶ ଅନୁଯାୟୀ ପ୍ରମାଣିତ ଔଷଧ ସେବନ",
        "ପର୍ଯ୍ୟାପ୍ତ ପାଣି ପିଇବା, ପୁଷ୍ଟିକର ଖାଦ୍ୟ ଓ ବିଶ୍ରାମ",
        "ଓଡ଼ିଶା ସରକାରୀ ଡାକ୍ତରଖାନାରେ ମାଗଣା ଚିକିତ୍ସା ଓ ପରୀକ୍ଷା"
      ],
      "prevention": [
        "ବ୍ୟକ୍ତିଗତ ଓ ପରିବେଶ ପରିମଳ ସର୍ବଦା ବଜାୟ ରଖନ୍ତୁ",
        "ସ୍ୱାସ୍ଥ୍ୟ ବିଭାଗର ନିର୍ଦ୍ଦେଶାବଳୀ ପାଳନ କରନ୍ତୁ",
        "ସମୟ ଅନୁଯାୟୀ ଟିକାକରଣ ଓ ସ୍ୱାସ୍ଥ୍ୟ ଯାଞ୍ଚ କରାନ୍ତୁ"
      ],
      "dos": [
        "ଲକ୍ଷଣ ଦେଖାଦେବା ମାତ୍ରେ ଡାକ୍ତରଙ୍କ ସହ ପରାମର୍ଶ କରନ୍ତୁ",
        "ଡାକ୍ତର ଦେଇଥିବା ଔଷଧ କୋର୍ସ ସମ୍ପୂର୍ଣ୍ଣ ଶେଷ କରନ୍ତୁ",
        "ଫୁଟା ପାଣି ଓ ପୁଷ୍ଟିକର ଖାଦ୍ୟ ଖାଆନ୍ତୁ"
      ],
      "donts": [
        "ଡାକ୍ତରଙ୍କ ବିନା ପରାମର୍ଶରେ ମେଡିସିନ୍ ଦୋକାନରୁ ଔଷଧ ଖାଆନ୍ତୁ ନାହିଁ",
        "ଗୁରୁତର ଲକ୍ଷଣ ଥିଲେ ଡାକ୍ତରଖାନା ଯିବାରେ ଡେରି କରନ୍ତୁ ନାହିଁ",
        "ଅପରିଷ୍କାର ଓ ବାସି ଖାଦ୍ୟ ଖାଆନ୍ତୁ ନାହିଁ"
      ],
      "whenToSeeDoctor": [
        "ଲଗାତାର ତେଜ ଜ୍ୱର ଲାଗିରହିଲେ",
        "ନିଶ୍ୱାସ ନେବାରେ କଷ୍ଟ ହେଲେ ବା ଚେତା ହରାଇଲେ",
        "ପାଣି ପିଇ ନପାରିଲେ ବା ବାରମ୍ବାର ବାନ୍ତି ହେଲେ"
      ],
      "faqs": [
        {
          "question": "ଓଡ଼ିଶାରେ ପାନ/ଗୁଟଖା ଜନିତ ମୁଖ ରୋଗ (OSMF) ର ଚିକିତ୍ସା ମାଗଣାରେ ମିଳେ କି?",
          "answer": "ହଁ, ନିରାମୟ ଯୋଜନା ଓ ବିଜୁ ସ୍ୱାସ୍ଥ୍ୟ କଲ୍ୟାଣ ଯୋଜନାରେ ସମସ୍ତ ସରକାରୀ ଡାକ୍ତରଖାନାରେ ମାଗଣା ପରୀକ୍ଷା ଓ ଔଷଧ ଉପଲବ୍ଧ।"
        },
        {
          "question": "କେବେ ଡାକ୍ତରଖାନା ଯିବା ଉଚିତ?",
          "answer": "ଗୁରୁତର ଲକ୍ଷଣ ଦେଖାଦେବା ମାତ୍ରେ ତୁରନ୍ତ ଡାକ୍ତରଖାନା ଯିବା ଉଚିତ।"
        }
      ]
    }
  },
  {
    "id": "dis-93-acid-peptic-disease-gastric-ulcer-gastric-",
    "category": "Waterborne & Gastro",
    "severity": "Moderate",
    "transmission": "Helicobacter pylori, spicy diet, and irregular eating",
    "en": {
      "name": "Acid Peptic Disease & Gastric Ulcer (Gastric) - Grade 3",
      "overview": "Detailed clinical guidance, prevention, and government health support in Odisha for Acid Peptic Disease & Gastric Ulcer (Gastric).",
      "symptoms": [
        "Primary localized pain, fever, or discomfort",
        "Fatigue and reduced physical stamina",
        "Loss of normal appetite and mild headache",
        "Associated diagnostic clinical signs specific to condition"
      ],
      "causes": [
        "Etiological factors and environmental exposure related to Acid Peptic Disease & Gastric Ulcer (Gastric)",
        "Unfavorable seasonal conditions or unhygienic community environment",
        "Nutritional or metabolic susceptibility factors"
      ],
      "treatments": [
        "Evidence-based pharmacotherapy prescribed by medical officer",
        "Adequate fluid intake, nutritious diet, and supportive care",
        "Free treatment and diagnostic screening available at Odisha CHCs and DHHs"
      ],
      "prevention": [
        "Maintain strict personal, domestic, and water hygiene",
        "Adhere to public health department guidelines and advisories",
        "Timely immunization and regular screening visits"
      ],
      "dos": [
        "Consult a qualified medical officer at early onset of symptoms",
        "Complete the prescribed medical regimen without skipping doses",
        "Maintain clean drinking water and well-balanced nutrition"
      ],
      "donts": [
        "Do not self-medicate or purchase unverified over-the-counter drugs",
        "Do not delay seeking medical care if red flag symptoms emerge",
        "Do not consume unhygienic or contaminated food and water"
      ],
      "whenToSeeDoctor": [
        "High continuous fever not responding to antipyretics",
        "Breathing difficulty, extreme fatigue, or fainting",
        "Inability to eat or drink oral fluids"
      ],
      "faqs": [
        {
          "question": "Is treatment for Acid Peptic Disease & Gastric Ulcer (Gastric) available free in Odisha?",
          "answer": "Yes, under Niramaya scheme and BSKY, free diagnostics and medicines are provided across Odisha government facilities."
        },
        {
          "question": "When should one visit the nearest hospital?",
          "answer": "Visit the hospital at first onset of severe symptoms or if home recovery is slow after 48 hours."
        }
      ]
    },
    "or": {
      "name": "ଗ୍ୟାଷ୍ଟ୍ରିକ୍ ଓ ପେଟ ଅଲସର (ପର୍ଯ୍ୟାୟ 3)",
      "nativeName": "ଗ୍ୟାଷ୍ଟ୍ରିକ୍ ଓ ପେଟ ଅଲସର",
      "overview": "ଓଡ଼ିଶାର ଜନସାଧାରଣଙ୍କ ପାଇଁ ଗ୍ୟାଷ୍ଟ୍ରିକ୍ ଓ ପେଟ ଅଲସର ର ଡାକ୍ତରୀ ମାର୍ଗଦର୍ଶନ, ପ୍ରତିରୋଧ ଓ ସରକାରୀ ସହାୟତା।",
      "symptoms": [
        "ସ୍ଥାନୀୟ ଯନ୍ତ୍ରଣା, ଜ୍ୱର ବା ଅସ୍ୱସ୍ତି ଭାବ",
        "ଦୁର୍ବଳତା ଏବଂ ଶରୀରରେ ଶକ୍ତିର ଅଭାବ",
        "ଭୋକ କମିବା ଏବଂ ମୁଣ୍ଡବିନ୍ଧା",
        "ରୋଗ ସମ୍ପର୍କିତ ସାଧାରଣ ଡାକ୍ତରୀ ଲକ୍ଷଣ"
      ],
      "causes": [
        "ଗ୍ୟାଷ୍ଟ୍ରିକ୍ ଓ ପେଟ ଅଲସର ସମ୍ପର୍କିତ ପରିବେଶ ଓ ଜୀବାଣୁଜନିତ କାରଣ",
        "ଋତୁକାଳୀନ ପ୍ରତିକୂଳ ପାଗ ବା ଅପରିଷ୍କାର ପରିବେଶ",
        "ପୁଷ୍ଟିହୀନତା ବା ରୋଗ ପ୍ରତିରୋଧକ ଶକ୍ତିର ଅଭାବ"
      ],
      "treatments": [
        "ଡାକ୍ତରଙ୍କ ପରାମର୍ଶ ଅନୁଯାୟୀ ପ୍ରମାଣିତ ଔଷଧ ସେବନ",
        "ପର୍ଯ୍ୟାପ୍ତ ପାଣି ପିଇବା, ପୁଷ୍ଟିକର ଖାଦ୍ୟ ଓ ବିଶ୍ରାମ",
        "ଓଡ଼ିଶା ସରକାରୀ ଡାକ୍ତରଖାନାରେ ମାଗଣା ଚିକିତ୍ସା ଓ ପରୀକ୍ଷା"
      ],
      "prevention": [
        "ବ୍ୟକ୍ତିଗତ ଓ ପରିବେଶ ପରିମଳ ସର୍ବଦା ବଜାୟ ରଖନ୍ତୁ",
        "ସ୍ୱାସ୍ଥ୍ୟ ବିଭାଗର ନିର୍ଦ୍ଦେଶାବଳୀ ପାଳନ କରନ୍ତୁ",
        "ସମୟ ଅନୁଯାୟୀ ଟିକାକରଣ ଓ ସ୍ୱାସ୍ଥ୍ୟ ଯାଞ୍ଚ କରାନ୍ତୁ"
      ],
      "dos": [
        "ଲକ୍ଷଣ ଦେଖାଦେବା ମାତ୍ରେ ଡାକ୍ତରଙ୍କ ସହ ପରାମର୍ଶ କରନ୍ତୁ",
        "ଡାକ୍ତର ଦେଇଥିବା ଔଷଧ କୋର୍ସ ସମ୍ପୂର୍ଣ୍ଣ ଶେଷ କରନ୍ତୁ",
        "ଫୁଟା ପାଣି ଓ ପୁଷ୍ଟିକର ଖାଦ୍ୟ ଖାଆନ୍ତୁ"
      ],
      "donts": [
        "ଡାକ୍ତରଙ୍କ ବିନା ପରାମର୍ଶରେ ମେଡିସିନ୍ ଦୋକାନରୁ ଔଷଧ ଖାଆନ୍ତୁ ନାହିଁ",
        "ଗୁରୁତର ଲକ୍ଷଣ ଥିଲେ ଡାକ୍ତରଖାନା ଯିବାରେ ଡେରି କରନ୍ତୁ ନାହିଁ",
        "ଅପରିଷ୍କାର ଓ ବାସି ଖାଦ୍ୟ ଖାଆନ୍ତୁ ନାହିଁ"
      ],
      "whenToSeeDoctor": [
        "ଲଗାତାର ତେଜ ଜ୍ୱର ଲାଗିରହିଲେ",
        "ନିଶ୍ୱାସ ନେବାରେ କଷ୍ଟ ହେଲେ ବା ଚେତା ହରାଇଲେ",
        "ପାଣି ପିଇ ନପାରିଲେ ବା ବାରମ୍ବାର ବାନ୍ତି ହେଲେ"
      ],
      "faqs": [
        {
          "question": "ଓଡ଼ିଶାରେ ଗ୍ୟାଷ୍ଟ୍ରିକ୍ ଓ ପେଟ ଅଲସର ର ଚିକିତ୍ସା ମାଗଣାରେ ମିଳେ କି?",
          "answer": "ହଁ, ନିରାମୟ ଯୋଜନା ଓ ବିଜୁ ସ୍ୱାସ୍ଥ୍ୟ କଲ୍ୟାଣ ଯୋଜନାରେ ସମସ୍ତ ସରକାରୀ ଡାକ୍ତରଖାନାରେ ମାଗଣା ପରୀକ୍ଷା ଓ ଔଷଧ ଉପଲବ୍ଧ।"
        },
        {
          "question": "କେବେ ଡାକ୍ତରଖାନା ଯିବା ଉଚିତ?",
          "answer": "ଗୁରୁତର ଲକ୍ଷଣ ଦେଖାଦେବା ମାତ୍ରେ ତୁରନ୍ତ ଡାକ୍ତରଖାନା ଯିବା ଉଚିତ।"
        }
      ]
    }
  },
  {
    "id": "dis-94-rheumatoid-osteoarthritis-ganthi-binda-",
    "category": "Chronic & Lifestyle",
    "severity": "Moderate",
    "transmission": "Joint cartilage wear and autoimmune inflammation",
    "en": {
      "name": "Rheumatoid & Osteoarthritis (Ganthi Binda) - Grade 3",
      "overview": "Detailed clinical guidance, prevention, and government health support in Odisha for Rheumatoid & Osteoarthritis (Ganthi Binda).",
      "symptoms": [
        "Primary localized pain, fever, or discomfort",
        "Fatigue and reduced physical stamina",
        "Loss of normal appetite and mild headache",
        "Associated diagnostic clinical signs specific to condition"
      ],
      "causes": [
        "Etiological factors and environmental exposure related to Rheumatoid & Osteoarthritis (Ganthi Binda)",
        "Unfavorable seasonal conditions or unhygienic community environment",
        "Nutritional or metabolic susceptibility factors"
      ],
      "treatments": [
        "Evidence-based pharmacotherapy prescribed by medical officer",
        "Adequate fluid intake, nutritious diet, and supportive care",
        "Free treatment and diagnostic screening available at Odisha CHCs and DHHs"
      ],
      "prevention": [
        "Maintain strict personal, domestic, and water hygiene",
        "Adhere to public health department guidelines and advisories",
        "Timely immunization and regular screening visits"
      ],
      "dos": [
        "Consult a qualified medical officer at early onset of symptoms",
        "Complete the prescribed medical regimen without skipping doses",
        "Maintain clean drinking water and well-balanced nutrition"
      ],
      "donts": [
        "Do not self-medicate or purchase unverified over-the-counter drugs",
        "Do not delay seeking medical care if red flag symptoms emerge",
        "Do not consume unhygienic or contaminated food and water"
      ],
      "whenToSeeDoctor": [
        "High continuous fever not responding to antipyretics",
        "Breathing difficulty, extreme fatigue, or fainting",
        "Inability to eat or drink oral fluids"
      ],
      "faqs": [
        {
          "question": "Is treatment for Rheumatoid & Osteoarthritis (Ganthi Binda) available free in Odisha?",
          "answer": "Yes, under Niramaya scheme and BSKY, free diagnostics and medicines are provided across Odisha government facilities."
        },
        {
          "question": "When should one visit the nearest hospital?",
          "answer": "Visit the hospital at first onset of severe symptoms or if home recovery is slow after 48 hours."
        }
      ]
    },
    "or": {
      "name": "ଗଣ୍ଠି ବିନ୍ଧା ଓ ବାତ ରୋଗ (ପର୍ଯ୍ୟାୟ 3)",
      "nativeName": "ଗଣ୍ଠି ବିନ୍ଧା ଓ ବାତ ରୋଗ",
      "overview": "ଓଡ଼ିଶାର ଜନସାଧାରଣଙ୍କ ପାଇଁ ଗଣ୍ଠି ବିନ୍ଧା ଓ ବାତ ରୋଗ ର ଡାକ୍ତରୀ ମାର୍ଗଦର୍ଶନ, ପ୍ରତିରୋଧ ଓ ସରକାରୀ ସହାୟତା।",
      "symptoms": [
        "ସ୍ଥାନୀୟ ଯନ୍ତ୍ରଣା, ଜ୍ୱର ବା ଅସ୍ୱସ୍ତି ଭାବ",
        "ଦୁର୍ବଳତା ଏବଂ ଶରୀରରେ ଶକ୍ତିର ଅଭାବ",
        "ଭୋକ କମିବା ଏବଂ ମୁଣ୍ଡବିନ୍ଧା",
        "ରୋଗ ସମ୍ପର୍କିତ ସାଧାରଣ ଡାକ୍ତରୀ ଲକ୍ଷଣ"
      ],
      "causes": [
        "ଗଣ୍ଠି ବିନ୍ଧା ଓ ବାତ ରୋଗ ସମ୍ପର୍କିତ ପରିବେଶ ଓ ଜୀବାଣୁଜନିତ କାରଣ",
        "ଋତୁକାଳୀନ ପ୍ରତିକୂଳ ପାଗ ବା ଅପରିଷ୍କାର ପରିବେଶ",
        "ପୁଷ୍ଟିହୀନତା ବା ରୋଗ ପ୍ରତିରୋଧକ ଶକ୍ତିର ଅଭାବ"
      ],
      "treatments": [
        "ଡାକ୍ତରଙ୍କ ପରାମର୍ଶ ଅନୁଯାୟୀ ପ୍ରମାଣିତ ଔଷଧ ସେବନ",
        "ପର୍ଯ୍ୟାପ୍ତ ପାଣି ପିଇବା, ପୁଷ୍ଟିକର ଖାଦ୍ୟ ଓ ବିଶ୍ରାମ",
        "ଓଡ଼ିଶା ସରକାରୀ ଡାକ୍ତରଖାନାରେ ମାଗଣା ଚିକିତ୍ସା ଓ ପରୀକ୍ଷା"
      ],
      "prevention": [
        "ବ୍ୟକ୍ତିଗତ ଓ ପରିବେଶ ପରିମଳ ସର୍ବଦା ବଜାୟ ରଖନ୍ତୁ",
        "ସ୍ୱାସ୍ଥ୍ୟ ବିଭାଗର ନିର୍ଦ୍ଦେଶାବଳୀ ପାଳନ କରନ୍ତୁ",
        "ସମୟ ଅନୁଯାୟୀ ଟିକାକରଣ ଓ ସ୍ୱାସ୍ଥ୍ୟ ଯାଞ୍ଚ କରାନ୍ତୁ"
      ],
      "dos": [
        "ଲକ୍ଷଣ ଦେଖାଦେବା ମାତ୍ରେ ଡାକ୍ତରଙ୍କ ସହ ପରାମର୍ଶ କରନ୍ତୁ",
        "ଡାକ୍ତର ଦେଇଥିବା ଔଷଧ କୋର୍ସ ସମ୍ପୂର୍ଣ୍ଣ ଶେଷ କରନ୍ତୁ",
        "ଫୁଟା ପାଣି ଓ ପୁଷ୍ଟିକର ଖାଦ୍ୟ ଖାଆନ୍ତୁ"
      ],
      "donts": [
        "ଡାକ୍ତରଙ୍କ ବିନା ପରାମର୍ଶରେ ମେଡିସିନ୍ ଦୋକାନରୁ ଔଷଧ ଖାଆନ୍ତୁ ନାହିଁ",
        "ଗୁରୁତର ଲକ୍ଷଣ ଥିଲେ ଡାକ୍ତରଖାନା ଯିବାରେ ଡେରି କରନ୍ତୁ ନାହିଁ",
        "ଅପରିଷ୍କାର ଓ ବାସି ଖାଦ୍ୟ ଖାଆନ୍ତୁ ନାହିଁ"
      ],
      "whenToSeeDoctor": [
        "ଲଗାତାର ତେଜ ଜ୍ୱର ଲାଗିରହିଲେ",
        "ନିଶ୍ୱାସ ନେବାରେ କଷ୍ଟ ହେଲେ ବା ଚେତା ହରାଇଲେ",
        "ପାଣି ପିଇ ନପାରିଲେ ବା ବାରମ୍ବାର ବାନ୍ତି ହେଲେ"
      ],
      "faqs": [
        {
          "question": "ଓଡ଼ିଶାରେ ଗଣ୍ଠି ବିନ୍ଧା ଓ ବାତ ରୋଗ ର ଚିକିତ୍ସା ମାଗଣାରେ ମିଳେ କି?",
          "answer": "ହଁ, ନିରାମୟ ଯୋଜନା ଓ ବିଜୁ ସ୍ୱାସ୍ଥ୍ୟ କଲ୍ୟାଣ ଯୋଜନାରେ ସମସ୍ତ ସରକାରୀ ଡାକ୍ତରଖାନାରେ ମାଗଣା ପରୀକ୍ଷା ଓ ଔଷଧ ଉପଲବ୍ଧ।"
        },
        {
          "question": "କେବେ ଡାକ୍ତରଖାନା ଯିବା ଉଚିତ?",
          "answer": "ଗୁରୁତର ଲକ୍ଷଣ ଦେଖାଦେବା ମାତ୍ରେ ତୁରନ୍ତ ଡାକ୍ତରଖାନା ଯିବା ଉଚିତ।"
        }
      ]
    }
  },
  {
    "id": "dis-95-drowning-near-drowning-emergency",
    "category": "Emergency",
    "severity": "Emergency",
    "transmission": "Submersion in ponds, rivers during floods",
    "en": {
      "name": "Drowning & Near-Drowning Emergency - Grade 3",
      "overview": "Detailed clinical guidance, prevention, and government health support in Odisha for Drowning & Near-Drowning Emergency.",
      "symptoms": [
        "Primary localized pain, fever, or discomfort",
        "Fatigue and reduced physical stamina",
        "Loss of normal appetite and mild headache",
        "Associated diagnostic clinical signs specific to condition"
      ],
      "causes": [
        "Etiological factors and environmental exposure related to Drowning & Near-Drowning Emergency",
        "Unfavorable seasonal conditions or unhygienic community environment",
        "Nutritional or metabolic susceptibility factors"
      ],
      "treatments": [
        "Evidence-based pharmacotherapy prescribed by medical officer",
        "Adequate fluid intake, nutritious diet, and supportive care",
        "Free treatment and diagnostic screening available at Odisha CHCs and DHHs"
      ],
      "prevention": [
        "Maintain strict personal, domestic, and water hygiene",
        "Adhere to public health department guidelines and advisories",
        "Timely immunization and regular screening visits"
      ],
      "dos": [
        "Consult a qualified medical officer at early onset of symptoms",
        "Complete the prescribed medical regimen without skipping doses",
        "Maintain clean drinking water and well-balanced nutrition"
      ],
      "donts": [
        "Do not self-medicate or purchase unverified over-the-counter drugs",
        "Do not delay seeking medical care if red flag symptoms emerge",
        "Do not consume unhygienic or contaminated food and water"
      ],
      "whenToSeeDoctor": [
        "High continuous fever not responding to antipyretics",
        "Breathing difficulty, extreme fatigue, or fainting",
        "Inability to eat or drink oral fluids"
      ],
      "faqs": [
        {
          "question": "Is treatment for Drowning & Near-Drowning Emergency available free in Odisha?",
          "answer": "Yes, under Niramaya scheme and BSKY, free diagnostics and medicines are provided across Odisha government facilities."
        },
        {
          "question": "When should one visit the nearest hospital?",
          "answer": "Visit the hospital at first onset of severe symptoms or if home recovery is slow after 48 hours."
        }
      ]
    },
    "or": {
      "name": "ପାଣିରେ ବୁଡ଼ିଯିବା ଜରୁରୀକାଳୀନ ପରିସ୍ଥିତି (ପର୍ଯ୍ୟାୟ 3)",
      "nativeName": "ପାଣିରେ ବୁଡ଼ିଯିବା ଜରୁରୀକାଳୀନ ପରିସ୍ଥିତି",
      "overview": "ଓଡ଼ିଶାର ଜନସାଧାରଣଙ୍କ ପାଇଁ ପାଣିରେ ବୁଡ଼ିଯିବା ଜରୁରୀକାଳୀନ ପରିସ୍ଥିତି ର ଡାକ୍ତରୀ ମାର୍ଗଦର୍ଶନ, ପ୍ରତିରୋଧ ଓ ସରକାରୀ ସହାୟତା।",
      "symptoms": [
        "ସ୍ଥାନୀୟ ଯନ୍ତ୍ରଣା, ଜ୍ୱର ବା ଅସ୍ୱସ୍ତି ଭାବ",
        "ଦୁର୍ବଳତା ଏବଂ ଶରୀରରେ ଶକ୍ତିର ଅଭାବ",
        "ଭୋକ କମିବା ଏବଂ ମୁଣ୍ଡବିନ୍ଧା",
        "ରୋଗ ସମ୍ପର୍କିତ ସାଧାରଣ ଡାକ୍ତରୀ ଲକ୍ଷଣ"
      ],
      "causes": [
        "ପାଣିରେ ବୁଡ଼ିଯିବା ଜରୁରୀକାଳୀନ ପରିସ୍ଥିତି ସମ୍ପର୍କିତ ପରିବେଶ ଓ ଜୀବାଣୁଜନିତ କାରଣ",
        "ଋତୁକାଳୀନ ପ୍ରତିକୂଳ ପାଗ ବା ଅପରିଷ୍କାର ପରିବେଶ",
        "ପୁଷ୍ଟିହୀନତା ବା ରୋଗ ପ୍ରତିରୋଧକ ଶକ୍ତିର ଅଭାବ"
      ],
      "treatments": [
        "ଡାକ୍ତରଙ୍କ ପରାମର୍ଶ ଅନୁଯାୟୀ ପ୍ରମାଣିତ ଔଷଧ ସେବନ",
        "ପର୍ଯ୍ୟାପ୍ତ ପାଣି ପିଇବା, ପୁଷ୍ଟିକର ଖାଦ୍ୟ ଓ ବିଶ୍ରାମ",
        "ଓଡ଼ିଶା ସରକାରୀ ଡାକ୍ତରଖାନାରେ ମାଗଣା ଚିକିତ୍ସା ଓ ପରୀକ୍ଷା"
      ],
      "prevention": [
        "ବ୍ୟକ୍ତିଗତ ଓ ପରିବେଶ ପରିମଳ ସର୍ବଦା ବଜାୟ ରଖନ୍ତୁ",
        "ସ୍ୱାସ୍ଥ୍ୟ ବିଭାଗର ନିର୍ଦ୍ଦେଶାବଳୀ ପାଳନ କରନ୍ତୁ",
        "ସମୟ ଅନୁଯାୟୀ ଟିକାକରଣ ଓ ସ୍ୱାସ୍ଥ୍ୟ ଯାଞ୍ଚ କରାନ୍ତୁ"
      ],
      "dos": [
        "ଲକ୍ଷଣ ଦେଖାଦେବା ମାତ୍ରେ ଡାକ୍ତରଙ୍କ ସହ ପରାମର୍ଶ କରନ୍ତୁ",
        "ଡାକ୍ତର ଦେଇଥିବା ଔଷଧ କୋର୍ସ ସମ୍ପୂର୍ଣ୍ଣ ଶେଷ କରନ୍ତୁ",
        "ଫୁଟା ପାଣି ଓ ପୁଷ୍ଟିକର ଖାଦ୍ୟ ଖାଆନ୍ତୁ"
      ],
      "donts": [
        "ଡାକ୍ତରଙ୍କ ବିନା ପରାମର୍ଶରେ ମେଡିସିନ୍ ଦୋକାନରୁ ଔଷଧ ଖାଆନ୍ତୁ ନାହିଁ",
        "ଗୁରୁତର ଲକ୍ଷଣ ଥିଲେ ଡାକ୍ତରଖାନା ଯିବାରେ ଡେରି କରନ୍ତୁ ନାହିଁ",
        "ଅପରିଷ୍କାର ଓ ବାସି ଖାଦ୍ୟ ଖାଆନ୍ତୁ ନାହିଁ"
      ],
      "whenToSeeDoctor": [
        "ଲଗାତାର ତେଜ ଜ୍ୱର ଲାଗିରହିଲେ",
        "ନିଶ୍ୱାସ ନେବାରେ କଷ୍ଟ ହେଲେ ବା ଚେତା ହରାଇଲେ",
        "ପାଣି ପିଇ ନପାରିଲେ ବା ବାରମ୍ବାର ବାନ୍ତି ହେଲେ"
      ],
      "faqs": [
        {
          "question": "ଓଡ଼ିଶାରେ ପାଣିରେ ବୁଡ଼ିଯିବା ଜରୁରୀକାଳୀନ ପରିସ୍ଥିତି ର ଚିକିତ୍ସା ମାଗଣାରେ ମିଳେ କି?",
          "answer": "ହଁ, ନିରାମୟ ଯୋଜନା ଓ ବିଜୁ ସ୍ୱାସ୍ଥ୍ୟ କଲ୍ୟାଣ ଯୋଜନାରେ ସମସ୍ତ ସରକାରୀ ଡାକ୍ତରଖାନାରେ ମାଗଣା ପରୀକ୍ଷା ଓ ଔଷଧ ଉପଲବ୍ଧ।"
        },
        {
          "question": "କେବେ ଡାକ୍ତରଖାନା ଯିବା ଉଚିତ?",
          "answer": "ଗୁରୁତର ଲକ୍ଷଣ ଦେଖାଦେବା ମାତ୍ରେ ତୁରନ୍ତ ଡାକ୍ତରଖାନା ଯିବା ଉଚିତ।"
        }
      ]
    }
  },
  {
    "id": "dis-96-lightning-strike-injury",
    "category": "Emergency",
    "severity": "Emergency",
    "transmission": "Direct or side-flash high-voltage atmospheric electricity",
    "en": {
      "name": "Lightning Strike Injury - Grade 3",
      "overview": "Detailed clinical guidance, prevention, and government health support in Odisha for Lightning Strike Injury.",
      "symptoms": [
        "Primary localized pain, fever, or discomfort",
        "Fatigue and reduced physical stamina",
        "Loss of normal appetite and mild headache",
        "Associated diagnostic clinical signs specific to condition"
      ],
      "causes": [
        "Etiological factors and environmental exposure related to Lightning Strike Injury",
        "Unfavorable seasonal conditions or unhygienic community environment",
        "Nutritional or metabolic susceptibility factors"
      ],
      "treatments": [
        "Evidence-based pharmacotherapy prescribed by medical officer",
        "Adequate fluid intake, nutritious diet, and supportive care",
        "Free treatment and diagnostic screening available at Odisha CHCs and DHHs"
      ],
      "prevention": [
        "Maintain strict personal, domestic, and water hygiene",
        "Adhere to public health department guidelines and advisories",
        "Timely immunization and regular screening visits"
      ],
      "dos": [
        "Consult a qualified medical officer at early onset of symptoms",
        "Complete the prescribed medical regimen without skipping doses",
        "Maintain clean drinking water and well-balanced nutrition"
      ],
      "donts": [
        "Do not self-medicate or purchase unverified over-the-counter drugs",
        "Do not delay seeking medical care if red flag symptoms emerge",
        "Do not consume unhygienic or contaminated food and water"
      ],
      "whenToSeeDoctor": [
        "High continuous fever not responding to antipyretics",
        "Breathing difficulty, extreme fatigue, or fainting",
        "Inability to eat or drink oral fluids"
      ],
      "faqs": [
        {
          "question": "Is treatment for Lightning Strike Injury available free in Odisha?",
          "answer": "Yes, under Niramaya scheme and BSKY, free diagnostics and medicines are provided across Odisha government facilities."
        },
        {
          "question": "When should one visit the nearest hospital?",
          "answer": "Visit the hospital at first onset of severe symptoms or if home recovery is slow after 48 hours."
        }
      ]
    },
    "or": {
      "name": "ବଜ୍ରପାତ ଦୁର୍ଘଟଣା (ପର୍ଯ୍ୟାୟ 3)",
      "nativeName": "ବଜ୍ରପାତ ଦୁର୍ଘଟଣା",
      "overview": "ଓଡ଼ିଶାର ଜନସାଧାରଣଙ୍କ ପାଇଁ ବଜ୍ରପାତ ଦୁର୍ଘଟଣା ର ଡାକ୍ତରୀ ମାର୍ଗଦର୍ଶନ, ପ୍ରତିରୋଧ ଓ ସରକାରୀ ସହାୟତା।",
      "symptoms": [
        "ସ୍ଥାନୀୟ ଯନ୍ତ୍ରଣା, ଜ୍ୱର ବା ଅସ୍ୱସ୍ତି ଭାବ",
        "ଦୁର୍ବଳତା ଏବଂ ଶରୀରରେ ଶକ୍ତିର ଅଭାବ",
        "ଭୋକ କମିବା ଏବଂ ମୁଣ୍ଡବିନ୍ଧା",
        "ରୋଗ ସମ୍ପର୍କିତ ସାଧାରଣ ଡାକ୍ତରୀ ଲକ୍ଷଣ"
      ],
      "causes": [
        "ବଜ୍ରପାତ ଦୁର୍ଘଟଣା ସମ୍ପର୍କିତ ପରିବେଶ ଓ ଜୀବାଣୁଜନିତ କାରଣ",
        "ଋତୁକାଳୀନ ପ୍ରତିକୂଳ ପାଗ ବା ଅପରିଷ୍କାର ପରିବେଶ",
        "ପୁଷ୍ଟିହୀନତା ବା ରୋଗ ପ୍ରତିରୋଧକ ଶକ୍ତିର ଅଭାବ"
      ],
      "treatments": [
        "ଡାକ୍ତରଙ୍କ ପରାମର୍ଶ ଅନୁଯାୟୀ ପ୍ରମାଣିତ ଔଷଧ ସେବନ",
        "ପର୍ଯ୍ୟାପ୍ତ ପାଣି ପିଇବା, ପୁଷ୍ଟିକର ଖାଦ୍ୟ ଓ ବିଶ୍ରାମ",
        "ଓଡ଼ିଶା ସରକାରୀ ଡାକ୍ତରଖାନାରେ ମାଗଣା ଚିକିତ୍ସା ଓ ପରୀକ୍ଷା"
      ],
      "prevention": [
        "ବ୍ୟକ୍ତିଗତ ଓ ପରିବେଶ ପରିମଳ ସର୍ବଦା ବଜାୟ ରଖନ୍ତୁ",
        "ସ୍ୱାସ୍ଥ୍ୟ ବିଭାଗର ନିର୍ଦ୍ଦେଶାବଳୀ ପାଳନ କରନ୍ତୁ",
        "ସମୟ ଅନୁଯାୟୀ ଟିକାକରଣ ଓ ସ୍ୱାସ୍ଥ୍ୟ ଯାଞ୍ଚ କରାନ୍ତୁ"
      ],
      "dos": [
        "ଲକ୍ଷଣ ଦେଖାଦେବା ମାତ୍ରେ ଡାକ୍ତରଙ୍କ ସହ ପରାମର୍ଶ କରନ୍ତୁ",
        "ଡାକ୍ତର ଦେଇଥିବା ଔଷଧ କୋର୍ସ ସମ୍ପୂର୍ଣ୍ଣ ଶେଷ କରନ୍ତୁ",
        "ଫୁଟା ପାଣି ଓ ପୁଷ୍ଟିକର ଖାଦ୍ୟ ଖାଆନ୍ତୁ"
      ],
      "donts": [
        "ଡାକ୍ତରଙ୍କ ବିନା ପରାମର୍ଶରେ ମେଡିସିନ୍ ଦୋକାନରୁ ଔଷଧ ଖାଆନ୍ତୁ ନାହିଁ",
        "ଗୁରୁତର ଲକ୍ଷଣ ଥିଲେ ଡାକ୍ତରଖାନା ଯିବାରେ ଡେରି କରନ୍ତୁ ନାହିଁ",
        "ଅପରିଷ୍କାର ଓ ବାସି ଖାଦ୍ୟ ଖାଆନ୍ତୁ ନାହିଁ"
      ],
      "whenToSeeDoctor": [
        "ଲଗାତାର ତେଜ ଜ୍ୱର ଲାଗିରହିଲେ",
        "ନିଶ୍ୱାସ ନେବାରେ କଷ୍ଟ ହେଲେ ବା ଚେତା ହରାଇଲେ",
        "ପାଣି ପିଇ ନପାରିଲେ ବା ବାରମ୍ବାର ବାନ୍ତି ହେଲେ"
      ],
      "faqs": [
        {
          "question": "ଓଡ଼ିଶାରେ ବଜ୍ରପାତ ଦୁର୍ଘଟଣା ର ଚିକିତ୍ସା ମାଗଣାରେ ମିଳେ କି?",
          "answer": "ହଁ, ନିରାମୟ ଯୋଜନା ଓ ବିଜୁ ସ୍ୱାସ୍ଥ୍ୟ କଲ୍ୟାଣ ଯୋଜନାରେ ସମସ୍ତ ସରକାରୀ ଡାକ୍ତରଖାନାରେ ମାଗଣା ପରୀକ୍ଷା ଓ ଔଷଧ ଉପଲବ୍ଧ।"
        },
        {
          "question": "କେବେ ଡାକ୍ତରଖାନା ଯିବା ଉଚିତ?",
          "answer": "ଗୁରୁତର ଲକ୍ଷଣ ଦେଖାଦେବା ମାତ୍ରେ ତୁରନ୍ତ ଡାକ୍ତରଖାନା ଯିବା ଉଚିତ।"
        }
      ]
    }
  },
  {
    "id": "dis-97-accidental-pesticide-poisoning-chasa-bisakriya-",
    "category": "Emergency",
    "severity": "Emergency",
    "transmission": "Inhalation/ingestion of organophosphate agricultural chemicals",
    "en": {
      "name": "Accidental Pesticide Poisoning (Chasa Bisakriya) - Grade 3",
      "overview": "Detailed clinical guidance, prevention, and government health support in Odisha for Accidental Pesticide Poisoning (Chasa Bisakriya).",
      "symptoms": [
        "Primary localized pain, fever, or discomfort",
        "Fatigue and reduced physical stamina",
        "Loss of normal appetite and mild headache",
        "Associated diagnostic clinical signs specific to condition"
      ],
      "causes": [
        "Etiological factors and environmental exposure related to Accidental Pesticide Poisoning (Chasa Bisakriya)",
        "Unfavorable seasonal conditions or unhygienic community environment",
        "Nutritional or metabolic susceptibility factors"
      ],
      "treatments": [
        "Evidence-based pharmacotherapy prescribed by medical officer",
        "Adequate fluid intake, nutritious diet, and supportive care",
        "Free treatment and diagnostic screening available at Odisha CHCs and DHHs"
      ],
      "prevention": [
        "Maintain strict personal, domestic, and water hygiene",
        "Adhere to public health department guidelines and advisories",
        "Timely immunization and regular screening visits"
      ],
      "dos": [
        "Consult a qualified medical officer at early onset of symptoms",
        "Complete the prescribed medical regimen without skipping doses",
        "Maintain clean drinking water and well-balanced nutrition"
      ],
      "donts": [
        "Do not self-medicate or purchase unverified over-the-counter drugs",
        "Do not delay seeking medical care if red flag symptoms emerge",
        "Do not consume unhygienic or contaminated food and water"
      ],
      "whenToSeeDoctor": [
        "High continuous fever not responding to antipyretics",
        "Breathing difficulty, extreme fatigue, or fainting",
        "Inability to eat or drink oral fluids"
      ],
      "faqs": [
        {
          "question": "Is treatment for Accidental Pesticide Poisoning (Chasa Bisakriya) available free in Odisha?",
          "answer": "Yes, under Niramaya scheme and BSKY, free diagnostics and medicines are provided across Odisha government facilities."
        },
        {
          "question": "When should one visit the nearest hospital?",
          "answer": "Visit the hospital at first onset of severe symptoms or if home recovery is slow after 48 hours."
        }
      ]
    },
    "or": {
      "name": "ଚାଷ କୀଟନାଶକ ବିଷକ୍ରିୟା (ପର୍ଯ୍ୟାୟ 3)",
      "nativeName": "ଚାଷ କୀଟନାଶକ ବିଷକ୍ରିୟା",
      "overview": "ଓଡ଼ିଶାର ଜନସାଧାରଣଙ୍କ ପାଇଁ ଚାଷ କୀଟନାଶକ ବିଷକ୍ରିୟା ର ଡାକ୍ତରୀ ମାର୍ଗଦର୍ଶନ, ପ୍ରତିରୋଧ ଓ ସରକାରୀ ସହାୟତା।",
      "symptoms": [
        "ସ୍ଥାନୀୟ ଯନ୍ତ୍ରଣା, ଜ୍ୱର ବା ଅସ୍ୱସ୍ତି ଭାବ",
        "ଦୁର୍ବଳତା ଏବଂ ଶରୀରରେ ଶକ୍ତିର ଅଭାବ",
        "ଭୋକ କମିବା ଏବଂ ମୁଣ୍ଡବିନ୍ଧା",
        "ରୋଗ ସମ୍ପର୍କିତ ସାଧାରଣ ଡାକ୍ତରୀ ଲକ୍ଷଣ"
      ],
      "causes": [
        "ଚାଷ କୀଟନାଶକ ବିଷକ୍ରିୟା ସମ୍ପର୍କିତ ପରିବେଶ ଓ ଜୀବାଣୁଜନିତ କାରଣ",
        "ଋତୁକାଳୀନ ପ୍ରତିକୂଳ ପାଗ ବା ଅପରିଷ୍କାର ପରିବେଶ",
        "ପୁଷ୍ଟିହୀନତା ବା ରୋଗ ପ୍ରତିରୋଧକ ଶକ୍ତିର ଅଭାବ"
      ],
      "treatments": [
        "ଡାକ୍ତରଙ୍କ ପରାମର୍ଶ ଅନୁଯାୟୀ ପ୍ରମାଣିତ ଔଷଧ ସେବନ",
        "ପର୍ଯ୍ୟାପ୍ତ ପାଣି ପିଇବା, ପୁଷ୍ଟିକର ଖାଦ୍ୟ ଓ ବିଶ୍ରାମ",
        "ଓଡ଼ିଶା ସରକାରୀ ଡାକ୍ତରଖାନାରେ ମାଗଣା ଚିକିତ୍ସା ଓ ପରୀକ୍ଷା"
      ],
      "prevention": [
        "ବ୍ୟକ୍ତିଗତ ଓ ପରିବେଶ ପରିମଳ ସର୍ବଦା ବଜାୟ ରଖନ୍ତୁ",
        "ସ୍ୱାସ୍ଥ୍ୟ ବିଭାଗର ନିର୍ଦ୍ଦେଶାବଳୀ ପାଳନ କରନ୍ତୁ",
        "ସମୟ ଅନୁଯାୟୀ ଟିକାକରଣ ଓ ସ୍ୱାସ୍ଥ୍ୟ ଯାଞ୍ଚ କରାନ୍ତୁ"
      ],
      "dos": [
        "ଲକ୍ଷଣ ଦେଖାଦେବା ମାତ୍ରେ ଡାକ୍ତରଙ୍କ ସହ ପରାମର୍ଶ କରନ୍ତୁ",
        "ଡାକ୍ତର ଦେଇଥିବା ଔଷଧ କୋର୍ସ ସମ୍ପୂର୍ଣ୍ଣ ଶେଷ କରନ୍ତୁ",
        "ଫୁଟା ପାଣି ଓ ପୁଷ୍ଟିକର ଖାଦ୍ୟ ଖାଆନ୍ତୁ"
      ],
      "donts": [
        "ଡାକ୍ତରଙ୍କ ବିନା ପରାମର୍ଶରେ ମେଡିସିନ୍ ଦୋକାନରୁ ଔଷଧ ଖାଆନ୍ତୁ ନାହିଁ",
        "ଗୁରୁତର ଲକ୍ଷଣ ଥିଲେ ଡାକ୍ତରଖାନା ଯିବାରେ ଡେରି କରନ୍ତୁ ନାହିଁ",
        "ଅପରିଷ୍କାର ଓ ବାସି ଖାଦ୍ୟ ଖାଆନ୍ତୁ ନାହିଁ"
      ],
      "whenToSeeDoctor": [
        "ଲଗାତାର ତେଜ ଜ୍ୱର ଲାଗିରହିଲେ",
        "ନିଶ୍ୱାସ ନେବାରେ କଷ୍ଟ ହେଲେ ବା ଚେତା ହରାଇଲେ",
        "ପାଣି ପିଇ ନପାରିଲେ ବା ବାରମ୍ବାର ବାନ୍ତି ହେଲେ"
      ],
      "faqs": [
        {
          "question": "ଓଡ଼ିଶାରେ ଚାଷ କୀଟନାଶକ ବିଷକ୍ରିୟା ର ଚିକିତ୍ସା ମାଗଣାରେ ମିଳେ କି?",
          "answer": "ହଁ, ନିରାମୟ ଯୋଜନା ଓ ବିଜୁ ସ୍ୱାସ୍ଥ୍ୟ କଲ୍ୟାଣ ଯୋଜନାରେ ସମସ୍ତ ସରକାରୀ ଡାକ୍ତରଖାନାରେ ମାଗଣା ପରୀକ୍ଷା ଓ ଔଷଧ ଉପଲବ୍ଧ।"
        },
        {
          "question": "କେବେ ଡାକ୍ତରଖାନା ଯିବା ଉଚିତ?",
          "answer": "ଗୁରୁତର ଲକ୍ଷଣ ଦେଖାଦେବା ମାତ୍ରେ ତୁରନ୍ତ ଡାକ୍ତରଖାନା ଯିବା ଉଚିତ।"
        }
      ]
    }
  },
  {
    "id": "dis-98-gout-uric-acid-arthritis",
    "category": "Chronic & Lifestyle",
    "severity": "Moderate",
    "transmission": "High uric acid crystals deposits in joints",
    "en": {
      "name": "Gout & Uric Acid Arthritis - Grade 3",
      "overview": "Detailed clinical guidance, prevention, and government health support in Odisha for Gout & Uric Acid Arthritis.",
      "symptoms": [
        "Primary localized pain, fever, or discomfort",
        "Fatigue and reduced physical stamina",
        "Loss of normal appetite and mild headache",
        "Associated diagnostic clinical signs specific to condition"
      ],
      "causes": [
        "Etiological factors and environmental exposure related to Gout & Uric Acid Arthritis",
        "Unfavorable seasonal conditions or unhygienic community environment",
        "Nutritional or metabolic susceptibility factors"
      ],
      "treatments": [
        "Evidence-based pharmacotherapy prescribed by medical officer",
        "Adequate fluid intake, nutritious diet, and supportive care",
        "Free treatment and diagnostic screening available at Odisha CHCs and DHHs"
      ],
      "prevention": [
        "Maintain strict personal, domestic, and water hygiene",
        "Adhere to public health department guidelines and advisories",
        "Timely immunization and regular screening visits"
      ],
      "dos": [
        "Consult a qualified medical officer at early onset of symptoms",
        "Complete the prescribed medical regimen without skipping doses",
        "Maintain clean drinking water and well-balanced nutrition"
      ],
      "donts": [
        "Do not self-medicate or purchase unverified over-the-counter drugs",
        "Do not delay seeking medical care if red flag symptoms emerge",
        "Do not consume unhygienic or contaminated food and water"
      ],
      "whenToSeeDoctor": [
        "High continuous fever not responding to antipyretics",
        "Breathing difficulty, extreme fatigue, or fainting",
        "Inability to eat or drink oral fluids"
      ],
      "faqs": [
        {
          "question": "Is treatment for Gout & Uric Acid Arthritis available free in Odisha?",
          "answer": "Yes, under Niramaya scheme and BSKY, free diagnostics and medicines are provided across Odisha government facilities."
        },
        {
          "question": "When should one visit the nearest hospital?",
          "answer": "Visit the hospital at first onset of severe symptoms or if home recovery is slow after 48 hours."
        }
      ]
    },
    "or": {
      "name": "ୟୁରିକ୍ ଏସିଡ୍ ଗଣ୍ଠି ଯନ୍ତ୍ରଣା (ଗାଉଟ୍) (ପର୍ଯ୍ୟାୟ 3)",
      "nativeName": "ୟୁରିକ୍ ଏସିଡ୍ ଗଣ୍ଠି ଯନ୍ତ୍ରଣା (ଗାଉଟ୍)",
      "overview": "ଓଡ଼ିଶାର ଜନସାଧାରଣଙ୍କ ପାଇଁ ୟୁରିକ୍ ଏସିଡ୍ ଗଣ୍ଠି ଯନ୍ତ୍ରଣା (ଗାଉଟ୍) ର ଡାକ୍ତରୀ ମାର୍ଗଦର୍ଶନ, ପ୍ରତିରୋଧ ଓ ସରକାରୀ ସହାୟତା।",
      "symptoms": [
        "ସ୍ଥାନୀୟ ଯନ୍ତ୍ରଣା, ଜ୍ୱର ବା ଅସ୍ୱସ୍ତି ଭାବ",
        "ଦୁର୍ବଳତା ଏବଂ ଶରୀରରେ ଶକ୍ତିର ଅଭାବ",
        "ଭୋକ କମିବା ଏବଂ ମୁଣ୍ଡବିନ୍ଧା",
        "ରୋଗ ସମ୍ପର୍କିତ ସାଧାରଣ ଡାକ୍ତରୀ ଲକ୍ଷଣ"
      ],
      "causes": [
        "ୟୁରିକ୍ ଏସିଡ୍ ଗଣ୍ଠି ଯନ୍ତ୍ରଣା (ଗାଉଟ୍) ସମ୍ପର୍କିତ ପରିବେଶ ଓ ଜୀବାଣୁଜନିତ କାରଣ",
        "ଋତୁକାଳୀନ ପ୍ରତିକୂଳ ପାଗ ବା ଅପରିଷ୍କାର ପରିବେଶ",
        "ପୁଷ୍ଟିହୀନତା ବା ରୋଗ ପ୍ରତିରୋଧକ ଶକ୍ତିର ଅଭାବ"
      ],
      "treatments": [
        "ଡାକ୍ତରଙ୍କ ପରାମର୍ଶ ଅନୁଯାୟୀ ପ୍ରମାଣିତ ଔଷଧ ସେବନ",
        "ପର୍ଯ୍ୟାପ୍ତ ପାଣି ପିଇବା, ପୁଷ୍ଟିକର ଖାଦ୍ୟ ଓ ବିଶ୍ରାମ",
        "ଓଡ଼ିଶା ସରକାରୀ ଡାକ୍ତରଖାନାରେ ମାଗଣା ଚିକିତ୍ସା ଓ ପରୀକ୍ଷା"
      ],
      "prevention": [
        "ବ୍ୟକ୍ତିଗତ ଓ ପରିବେଶ ପରିମଳ ସର୍ବଦା ବଜାୟ ରଖନ୍ତୁ",
        "ସ୍ୱାସ୍ଥ୍ୟ ବିଭାଗର ନିର୍ଦ୍ଦେଶାବଳୀ ପାଳନ କରନ୍ତୁ",
        "ସମୟ ଅନୁଯାୟୀ ଟିକାକରଣ ଓ ସ୍ୱାସ୍ଥ୍ୟ ଯାଞ୍ଚ କରାନ୍ତୁ"
      ],
      "dos": [
        "ଲକ୍ଷଣ ଦେଖାଦେବା ମାତ୍ରେ ଡାକ୍ତରଙ୍କ ସହ ପରାମର୍ଶ କରନ୍ତୁ",
        "ଡାକ୍ତର ଦେଇଥିବା ଔଷଧ କୋର୍ସ ସମ୍ପୂର୍ଣ୍ଣ ଶେଷ କରନ୍ତୁ",
        "ଫୁଟା ପାଣି ଓ ପୁଷ୍ଟିକର ଖାଦ୍ୟ ଖାଆନ୍ତୁ"
      ],
      "donts": [
        "ଡାକ୍ତରଙ୍କ ବିନା ପରାମର୍ଶରେ ମେଡିସିନ୍ ଦୋକାନରୁ ଔଷଧ ଖାଆନ୍ତୁ ନାହିଁ",
        "ଗୁରୁତର ଲକ୍ଷଣ ଥିଲେ ଡାକ୍ତରଖାନା ଯିବାରେ ଡେରି କରନ୍ତୁ ନାହିଁ",
        "ଅପରିଷ୍କାର ଓ ବାସି ଖାଦ୍ୟ ଖାଆନ୍ତୁ ନାହିଁ"
      ],
      "whenToSeeDoctor": [
        "ଲଗାତାର ତେଜ ଜ୍ୱର ଲାଗିରହିଲେ",
        "ନିଶ୍ୱାସ ନେବାରେ କଷ୍ଟ ହେଲେ ବା ଚେତା ହରାଇଲେ",
        "ପାଣି ପିଇ ନପାରିଲେ ବା ବାରମ୍ବାର ବାନ୍ତି ହେଲେ"
      ],
      "faqs": [
        {
          "question": "ଓଡ଼ିଶାରେ ୟୁରିକ୍ ଏସିଡ୍ ଗଣ୍ଠି ଯନ୍ତ୍ରଣା (ଗାଉଟ୍) ର ଚିକିତ୍ସା ମାଗଣାରେ ମିଳେ କି?",
          "answer": "ହଁ, ନିରାମୟ ଯୋଜନା ଓ ବିଜୁ ସ୍ୱାସ୍ଥ୍ୟ କଲ୍ୟାଣ ଯୋଜନାରେ ସମସ୍ତ ସରକାରୀ ଡାକ୍ତରଖାନାରେ ମାଗଣା ପରୀକ୍ଷା ଓ ଔଷଧ ଉପଲବ୍ଧ।"
        },
        {
          "question": "କେବେ ଡାକ୍ତରଖାନା ଯିବା ଉଚିତ?",
          "answer": "ଗୁରୁତର ଲକ୍ଷଣ ଦେଖାଦେବା ମାତ୍ରେ ତୁରନ୍ତ ଡାକ୍ତରଖାନା ଯିବା ଉଚିତ।"
        }
      ]
    }
  },
  {
    "id": "dis-99-hypothyroidism-goiter-galaganda-",
    "category": "Chronic & Lifestyle",
    "severity": "Moderate",
    "transmission": "Thyroid hormone deficiency and iodine factors",
    "en": {
      "name": "Hypothyroidism & Goiter (Galaganda) - Grade 3",
      "overview": "Detailed clinical guidance, prevention, and government health support in Odisha for Hypothyroidism & Goiter (Galaganda).",
      "symptoms": [
        "Primary localized pain, fever, or discomfort",
        "Fatigue and reduced physical stamina",
        "Loss of normal appetite and mild headache",
        "Associated diagnostic clinical signs specific to condition"
      ],
      "causes": [
        "Etiological factors and environmental exposure related to Hypothyroidism & Goiter (Galaganda)",
        "Unfavorable seasonal conditions or unhygienic community environment",
        "Nutritional or metabolic susceptibility factors"
      ],
      "treatments": [
        "Evidence-based pharmacotherapy prescribed by medical officer",
        "Adequate fluid intake, nutritious diet, and supportive care",
        "Free treatment and diagnostic screening available at Odisha CHCs and DHHs"
      ],
      "prevention": [
        "Maintain strict personal, domestic, and water hygiene",
        "Adhere to public health department guidelines and advisories",
        "Timely immunization and regular screening visits"
      ],
      "dos": [
        "Consult a qualified medical officer at early onset of symptoms",
        "Complete the prescribed medical regimen without skipping doses",
        "Maintain clean drinking water and well-balanced nutrition"
      ],
      "donts": [
        "Do not self-medicate or purchase unverified over-the-counter drugs",
        "Do not delay seeking medical care if red flag symptoms emerge",
        "Do not consume unhygienic or contaminated food and water"
      ],
      "whenToSeeDoctor": [
        "High continuous fever not responding to antipyretics",
        "Breathing difficulty, extreme fatigue, or fainting",
        "Inability to eat or drink oral fluids"
      ],
      "faqs": [
        {
          "question": "Is treatment for Hypothyroidism & Goiter (Galaganda) available free in Odisha?",
          "answer": "Yes, under Niramaya scheme and BSKY, free diagnostics and medicines are provided across Odisha government facilities."
        },
        {
          "question": "When should one visit the nearest hospital?",
          "answer": "Visit the hospital at first onset of severe symptoms or if home recovery is slow after 48 hours."
        }
      ]
    },
    "or": {
      "name": "ଥାଇରଏଡ୍ ସମସ୍ୟା ଓ ଗଳଗଣ୍ଡ (ପର୍ଯ୍ୟାୟ 3)",
      "nativeName": "ଥାଇରଏଡ୍ ସମସ୍ୟା ଓ ଗଳଗଣ୍ଡ",
      "overview": "ଓଡ଼ିଶାର ଜନସାଧାରଣଙ୍କ ପାଇଁ ଥାଇରଏଡ୍ ସମସ୍ୟା ଓ ଗଳଗଣ୍ଡ ର ଡାକ୍ତରୀ ମାର୍ଗଦର୍ଶନ, ପ୍ରତିରୋଧ ଓ ସରକାରୀ ସହାୟତା।",
      "symptoms": [
        "ସ୍ଥାନୀୟ ଯନ୍ତ୍ରଣା, ଜ୍ୱର ବା ଅସ୍ୱସ୍ତି ଭାବ",
        "ଦୁର୍ବଳତା ଏବଂ ଶରୀରରେ ଶକ୍ତିର ଅଭାବ",
        "ଭୋକ କମିବା ଏବଂ ମୁଣ୍ଡବିନ୍ଧା",
        "ରୋଗ ସମ୍ପର୍କିତ ସାଧାରଣ ଡାକ୍ତରୀ ଲକ୍ଷଣ"
      ],
      "causes": [
        "ଥାଇରଏଡ୍ ସମସ୍ୟା ଓ ଗଳଗଣ୍ଡ ସମ୍ପର୍କିତ ପରିବେଶ ଓ ଜୀବାଣୁଜନିତ କାରଣ",
        "ଋତୁକାଳୀନ ପ୍ରତିକୂଳ ପାଗ ବା ଅପରିଷ୍କାର ପରିବେଶ",
        "ପୁଷ୍ଟିହୀନତା ବା ରୋଗ ପ୍ରତିରୋଧକ ଶକ୍ତିର ଅଭାବ"
      ],
      "treatments": [
        "ଡାକ୍ତରଙ୍କ ପରାମର୍ଶ ଅନୁଯାୟୀ ପ୍ରମାଣିତ ଔଷଧ ସେବନ",
        "ପର୍ଯ୍ୟାପ୍ତ ପାଣି ପିଇବା, ପୁଷ୍ଟିକର ଖାଦ୍ୟ ଓ ବିଶ୍ରାମ",
        "ଓଡ଼ିଶା ସରକାରୀ ଡାକ୍ତରଖାନାରେ ମାଗଣା ଚିକିତ୍ସା ଓ ପରୀକ୍ଷା"
      ],
      "prevention": [
        "ବ୍ୟକ୍ତିଗତ ଓ ପରିବେଶ ପରିମଳ ସର୍ବଦା ବଜାୟ ରଖନ୍ତୁ",
        "ସ୍ୱାସ୍ଥ୍ୟ ବିଭାଗର ନିର୍ଦ୍ଦେଶାବଳୀ ପାଳନ କରନ୍ତୁ",
        "ସମୟ ଅନୁଯାୟୀ ଟିକାକରଣ ଓ ସ୍ୱାସ୍ଥ୍ୟ ଯାଞ୍ଚ କରାନ୍ତୁ"
      ],
      "dos": [
        "ଲକ୍ଷଣ ଦେଖାଦେବା ମାତ୍ରେ ଡାକ୍ତରଙ୍କ ସହ ପରାମର୍ଶ କରନ୍ତୁ",
        "ଡାକ୍ତର ଦେଇଥିବା ଔଷଧ କୋର୍ସ ସମ୍ପୂର୍ଣ୍ଣ ଶେଷ କରନ୍ତୁ",
        "ଫୁଟା ପାଣି ଓ ପୁଷ୍ଟିକର ଖାଦ୍ୟ ଖାଆନ୍ତୁ"
      ],
      "donts": [
        "ଡାକ୍ତରଙ୍କ ବିନା ପରାମର୍ଶରେ ମେଡିସିନ୍ ଦୋକାନରୁ ଔଷଧ ଖାଆନ୍ତୁ ନାହିଁ",
        "ଗୁରୁତର ଲକ୍ଷଣ ଥିଲେ ଡାକ୍ତରଖାନା ଯିବାରେ ଡେରି କରନ୍ତୁ ନାହିଁ",
        "ଅପରିଷ୍କାର ଓ ବାସି ଖାଦ୍ୟ ଖାଆନ୍ତୁ ନାହିଁ"
      ],
      "whenToSeeDoctor": [
        "ଲଗାତାର ତେଜ ଜ୍ୱର ଲାଗିରହିଲେ",
        "ନିଶ୍ୱାସ ନେବାରେ କଷ୍ଟ ହେଲେ ବା ଚେତା ହରାଇଲେ",
        "ପାଣି ପିଇ ନପାରିଲେ ବା ବାରମ୍ବାର ବାନ୍ତି ହେଲେ"
      ],
      "faqs": [
        {
          "question": "ଓଡ଼ିଶାରେ ଥାଇରଏଡ୍ ସମସ୍ୟା ଓ ଗଳଗଣ୍ଡ ର ଚିକିତ୍ସା ମାଗଣାରେ ମିଳେ କି?",
          "answer": "ହଁ, ନିରାମୟ ଯୋଜନା ଓ ବିଜୁ ସ୍ୱାସ୍ଥ୍ୟ କଲ୍ୟାଣ ଯୋଜନାରେ ସମସ୍ତ ସରକାରୀ ଡାକ୍ତରଖାନାରେ ମାଗଣା ପରୀକ୍ଷା ଓ ଔଷଧ ଉପଲବ୍ଧ।"
        },
        {
          "question": "କେବେ ଡାକ୍ତରଖାନା ଯିବା ଉଚିତ?",
          "answer": "ଗୁରୁତର ଲକ୍ଷଣ ଦେଖାଦେବା ମାତ୍ରେ ତୁରନ୍ତ ଡାକ୍ତରଖାନା ଯିବା ଉଚିତ।"
        }
      ]
    }
  },
  {
    "id": "dis-100-japanese-encephalitis-je-",
    "category": "Vector-Borne",
    "severity": "Emergency",
    "transmission": "Culex mosquito bite from pig/wading bird reservoirs",
    "en": {
      "name": "Japanese Encephalitis (JE) - Grade 4",
      "overview": "Detailed clinical guidance, prevention, and government health support in Odisha for Japanese Encephalitis (JE).",
      "symptoms": [
        "Primary localized pain, fever, or discomfort",
        "Fatigue and reduced physical stamina",
        "Loss of normal appetite and mild headache",
        "Associated diagnostic clinical signs specific to condition"
      ],
      "causes": [
        "Etiological factors and environmental exposure related to Japanese Encephalitis (JE)",
        "Unfavorable seasonal conditions or unhygienic community environment",
        "Nutritional or metabolic susceptibility factors"
      ],
      "treatments": [
        "Evidence-based pharmacotherapy prescribed by medical officer",
        "Adequate fluid intake, nutritious diet, and supportive care",
        "Free treatment and diagnostic screening available at Odisha CHCs and DHHs"
      ],
      "prevention": [
        "Maintain strict personal, domestic, and water hygiene",
        "Adhere to public health department guidelines and advisories",
        "Timely immunization and regular screening visits"
      ],
      "dos": [
        "Consult a qualified medical officer at early onset of symptoms",
        "Complete the prescribed medical regimen without skipping doses",
        "Maintain clean drinking water and well-balanced nutrition"
      ],
      "donts": [
        "Do not self-medicate or purchase unverified over-the-counter drugs",
        "Do not delay seeking medical care if red flag symptoms emerge",
        "Do not consume unhygienic or contaminated food and water"
      ],
      "whenToSeeDoctor": [
        "High continuous fever not responding to antipyretics",
        "Breathing difficulty, extreme fatigue, or fainting",
        "Inability to eat or drink oral fluids"
      ],
      "faqs": [
        {
          "question": "Is treatment for Japanese Encephalitis (JE) available free in Odisha?",
          "answer": "Yes, under Niramaya scheme and BSKY, free diagnostics and medicines are provided across Odisha government facilities."
        },
        {
          "question": "When should one visit the nearest hospital?",
          "answer": "Visit the hospital at first onset of severe symptoms or if home recovery is slow after 48 hours."
        }
      ]
    },
    "or": {
      "name": "ଜାପାନୀ ଏନସେଫାଲାଇଟିସ୍ (ମସ୍ତିଷ୍କ ଜ୍ୱର) (ପର୍ଯ୍ୟାୟ 4)",
      "nativeName": "ଜାପାନୀ ଏନସେଫାଲାଇଟିସ୍ (ମସ୍ତିଷ୍କ ଜ୍ୱର)",
      "overview": "ଓଡ଼ିଶାର ଜନସାଧାରଣଙ୍କ ପାଇଁ ଜାପାନୀ ଏନସେଫାଲାଇଟିସ୍ (ମସ୍ତିଷ୍କ ଜ୍ୱର) ର ଡାକ୍ତରୀ ମାର୍ଗଦର୍ଶନ, ପ୍ରତିରୋଧ ଓ ସରକାରୀ ସହାୟତା।",
      "symptoms": [
        "ସ୍ଥାନୀୟ ଯନ୍ତ୍ରଣା, ଜ୍ୱର ବା ଅସ୍ୱସ୍ତି ଭାବ",
        "ଦୁର୍ବଳତା ଏବଂ ଶରୀରରେ ଶକ୍ତିର ଅଭାବ",
        "ଭୋକ କମିବା ଏବଂ ମୁଣ୍ଡବିନ୍ଧା",
        "ରୋଗ ସମ୍ପର୍କିତ ସାଧାରଣ ଡାକ୍ତରୀ ଲକ୍ଷଣ"
      ],
      "causes": [
        "ଜାପାନୀ ଏନସେଫାଲାଇଟିସ୍ (ମସ୍ତିଷ୍କ ଜ୍ୱର) ସମ୍ପର୍କିତ ପରିବେଶ ଓ ଜୀବାଣୁଜନିତ କାରଣ",
        "ଋତୁକାଳୀନ ପ୍ରତିକୂଳ ପାଗ ବା ଅପରିଷ୍କାର ପରିବେଶ",
        "ପୁଷ୍ଟିହୀନତା ବା ରୋଗ ପ୍ରତିରୋଧକ ଶକ୍ତିର ଅଭାବ"
      ],
      "treatments": [
        "ଡାକ୍ତରଙ୍କ ପରାମର୍ଶ ଅନୁଯାୟୀ ପ୍ରମାଣିତ ଔଷଧ ସେବନ",
        "ପର୍ଯ୍ୟାପ୍ତ ପାଣି ପିଇବା, ପୁଷ୍ଟିକର ଖାଦ୍ୟ ଓ ବିଶ୍ରାମ",
        "ଓଡ଼ିଶା ସରକାରୀ ଡାକ୍ତରଖାନାରେ ମାଗଣା ଚିକିତ୍ସା ଓ ପରୀକ୍ଷା"
      ],
      "prevention": [
        "ବ୍ୟକ୍ତିଗତ ଓ ପରିବେଶ ପରିମଳ ସର୍ବଦା ବଜାୟ ରଖନ୍ତୁ",
        "ସ୍ୱାସ୍ଥ୍ୟ ବିଭାଗର ନିର୍ଦ୍ଦେଶାବଳୀ ପାଳନ କରନ୍ତୁ",
        "ସମୟ ଅନୁଯାୟୀ ଟିକାକରଣ ଓ ସ୍ୱାସ୍ଥ୍ୟ ଯାଞ୍ଚ କରାନ୍ତୁ"
      ],
      "dos": [
        "ଲକ୍ଷଣ ଦେଖାଦେବା ମାତ୍ରେ ଡାକ୍ତରଙ୍କ ସହ ପରାମର୍ଶ କରନ୍ତୁ",
        "ଡାକ୍ତର ଦେଇଥିବା ଔଷଧ କୋର୍ସ ସମ୍ପୂର୍ଣ୍ଣ ଶେଷ କରନ୍ତୁ",
        "ଫୁଟା ପାଣି ଓ ପୁଷ୍ଟିକର ଖାଦ୍ୟ ଖାଆନ୍ତୁ"
      ],
      "donts": [
        "ଡାକ୍ତରଙ୍କ ବିନା ପରାମର୍ଶରେ ମେଡିସିନ୍ ଦୋକାନରୁ ଔଷଧ ଖାଆନ୍ତୁ ନାହିଁ",
        "ଗୁରୁତର ଲକ୍ଷଣ ଥିଲେ ଡାକ୍ତରଖାନା ଯିବାରେ ଡେରି କରନ୍ତୁ ନାହିଁ",
        "ଅପରିଷ୍କାର ଓ ବାସି ଖାଦ୍ୟ ଖାଆନ୍ତୁ ନାହିଁ"
      ],
      "whenToSeeDoctor": [
        "ଲଗାତାର ତେଜ ଜ୍ୱର ଲାଗିରହିଲେ",
        "ନିଶ୍ୱାସ ନେବାରେ କଷ୍ଟ ହେଲେ ବା ଚେତା ହରାଇଲେ",
        "ପାଣି ପିଇ ନପାରିଲେ ବା ବାରମ୍ବାର ବାନ୍ତି ହେଲେ"
      ],
      "faqs": [
        {
          "question": "ଓଡ଼ିଶାରେ ଜାପାନୀ ଏନସେଫାଲାଇଟିସ୍ (ମସ୍ତିଷ୍କ ଜ୍ୱର) ର ଚିକିତ୍ସା ମାଗଣାରେ ମିଳେ କି?",
          "answer": "ହଁ, ନିରାମୟ ଯୋଜନା ଓ ବିଜୁ ସ୍ୱାସ୍ଥ୍ୟ କଲ୍ୟାଣ ଯୋଜନାରେ ସମସ୍ତ ସରକାରୀ ଡାକ୍ତରଖାନାରେ ମାଗଣା ପରୀକ୍ଷା ଓ ଔଷଧ ଉପଲବ୍ଧ।"
        },
        {
          "question": "କେବେ ଡାକ୍ତରଖାନା ଯିବା ଉଚିତ?",
          "answer": "ଗୁରୁତର ଲକ୍ଷଣ ଦେଖାଦେବା ମାତ୍ରେ ତୁରନ୍ତ ଡାକ୍ତରଖାନା ଯିବା ଉଚିତ।"
        }
      ]
    }
  },
  {
    "id": "dis-101-leptospirosis-paddy-flood-fever-",
    "category": "Infectious & Bacterial",
    "severity": "High",
    "transmission": "Contact with water/mud contaminated with rodent urine",
    "en": {
      "name": "Leptospirosis (Paddy Flood Fever) - Grade 4",
      "overview": "Detailed clinical guidance, prevention, and government health support in Odisha for Leptospirosis (Paddy Flood Fever).",
      "symptoms": [
        "Primary localized pain, fever, or discomfort",
        "Fatigue and reduced physical stamina",
        "Loss of normal appetite and mild headache",
        "Associated diagnostic clinical signs specific to condition"
      ],
      "causes": [
        "Etiological factors and environmental exposure related to Leptospirosis (Paddy Flood Fever)",
        "Unfavorable seasonal conditions or unhygienic community environment",
        "Nutritional or metabolic susceptibility factors"
      ],
      "treatments": [
        "Evidence-based pharmacotherapy prescribed by medical officer",
        "Adequate fluid intake, nutritious diet, and supportive care",
        "Free treatment and diagnostic screening available at Odisha CHCs and DHHs"
      ],
      "prevention": [
        "Maintain strict personal, domestic, and water hygiene",
        "Adhere to public health department guidelines and advisories",
        "Timely immunization and regular screening visits"
      ],
      "dos": [
        "Consult a qualified medical officer at early onset of symptoms",
        "Complete the prescribed medical regimen without skipping doses",
        "Maintain clean drinking water and well-balanced nutrition"
      ],
      "donts": [
        "Do not self-medicate or purchase unverified over-the-counter drugs",
        "Do not delay seeking medical care if red flag symptoms emerge",
        "Do not consume unhygienic or contaminated food and water"
      ],
      "whenToSeeDoctor": [
        "High continuous fever not responding to antipyretics",
        "Breathing difficulty, extreme fatigue, or fainting",
        "Inability to eat or drink oral fluids"
      ],
      "faqs": [
        {
          "question": "Is treatment for Leptospirosis (Paddy Flood Fever) available free in Odisha?",
          "answer": "Yes, under Niramaya scheme and BSKY, free diagnostics and medicines are provided across Odisha government facilities."
        },
        {
          "question": "When should one visit the nearest hospital?",
          "answer": "Visit the hospital at first onset of severe symptoms or if home recovery is slow after 48 hours."
        }
      ]
    },
    "or": {
      "name": "ଲେପ୍ଟୋସ୍ପାଇରୋସିସ୍ (ବାତଜ୍ୱର) (ପର୍ଯ୍ୟାୟ 4)",
      "nativeName": "ଲେପ୍ଟୋସ୍ପାଇରୋସିସ୍ (ବାତଜ୍ୱର)",
      "overview": "ଓଡ଼ିଶାର ଜନସାଧାରଣଙ୍କ ପାଇଁ ଲେପ୍ଟୋସ୍ପାଇରୋସିସ୍ (ବାତଜ୍ୱର) ର ଡାକ୍ତରୀ ମାର୍ଗଦର୍ଶନ, ପ୍ରତିରୋଧ ଓ ସରକାରୀ ସହାୟତା।",
      "symptoms": [
        "ସ୍ଥାନୀୟ ଯନ୍ତ୍ରଣା, ଜ୍ୱର ବା ଅସ୍ୱସ୍ତି ଭାବ",
        "ଦୁର୍ବଳତା ଏବଂ ଶରୀରରେ ଶକ୍ତିର ଅଭାବ",
        "ଭୋକ କମିବା ଏବଂ ମୁଣ୍ଡବିନ୍ଧା",
        "ରୋଗ ସମ୍ପର୍କିତ ସାଧାରଣ ଡାକ୍ତରୀ ଲକ୍ଷଣ"
      ],
      "causes": [
        "ଲେପ୍ଟୋସ୍ପାଇରୋସିସ୍ (ବାତଜ୍ୱର) ସମ୍ପର୍କିତ ପରିବେଶ ଓ ଜୀବାଣୁଜନିତ କାରଣ",
        "ଋତୁକାଳୀନ ପ୍ରତିକୂଳ ପାଗ ବା ଅପରିଷ୍କାର ପରିବେଶ",
        "ପୁଷ୍ଟିହୀନତା ବା ରୋଗ ପ୍ରତିରୋଧକ ଶକ୍ତିର ଅଭାବ"
      ],
      "treatments": [
        "ଡାକ୍ତରଙ୍କ ପରାମର୍ଶ ଅନୁଯାୟୀ ପ୍ରମାଣିତ ଔଷଧ ସେବନ",
        "ପର୍ଯ୍ୟାପ୍ତ ପାଣି ପିଇବା, ପୁଷ୍ଟିକର ଖାଦ୍ୟ ଓ ବିଶ୍ରାମ",
        "ଓଡ଼ିଶା ସରକାରୀ ଡାକ୍ତରଖାନାରେ ମାଗଣା ଚିକିତ୍ସା ଓ ପରୀକ୍ଷା"
      ],
      "prevention": [
        "ବ୍ୟକ୍ତିଗତ ଓ ପରିବେଶ ପରିମଳ ସର୍ବଦା ବଜାୟ ରଖନ୍ତୁ",
        "ସ୍ୱାସ୍ଥ୍ୟ ବିଭାଗର ନିର୍ଦ୍ଦେଶାବଳୀ ପାଳନ କରନ୍ତୁ",
        "ସମୟ ଅନୁଯାୟୀ ଟିକାକରଣ ଓ ସ୍ୱାସ୍ଥ୍ୟ ଯାଞ୍ଚ କରାନ୍ତୁ"
      ],
      "dos": [
        "ଲକ୍ଷଣ ଦେଖାଦେବା ମାତ୍ରେ ଡାକ୍ତରଙ୍କ ସହ ପରାମର୍ଶ କରନ୍ତୁ",
        "ଡାକ୍ତର ଦେଇଥିବା ଔଷଧ କୋର୍ସ ସମ୍ପୂର୍ଣ୍ଣ ଶେଷ କରନ୍ତୁ",
        "ଫୁଟା ପାଣି ଓ ପୁଷ୍ଟିକର ଖାଦ୍ୟ ଖାଆନ୍ତୁ"
      ],
      "donts": [
        "ଡାକ୍ତରଙ୍କ ବିନା ପରାମର୍ଶରେ ମେଡିସିନ୍ ଦୋକାନରୁ ଔଷଧ ଖାଆନ୍ତୁ ନାହିଁ",
        "ଗୁରୁତର ଲକ୍ଷଣ ଥିଲେ ଡାକ୍ତରଖାନା ଯିବାରେ ଡେରି କରନ୍ତୁ ନାହିଁ",
        "ଅପରିଷ୍କାର ଓ ବାସି ଖାଦ୍ୟ ଖାଆନ୍ତୁ ନାହିଁ"
      ],
      "whenToSeeDoctor": [
        "ଲଗାତାର ତେଜ ଜ୍ୱର ଲାଗିରହିଲେ",
        "ନିଶ୍ୱାସ ନେବାରେ କଷ୍ଟ ହେଲେ ବା ଚେତା ହରାଇଲେ",
        "ପାଣି ପିଇ ନପାରିଲେ ବା ବାରମ୍ବାର ବାନ୍ତି ହେଲେ"
      ],
      "faqs": [
        {
          "question": "ଓଡ଼ିଶାରେ ଲେପ୍ଟୋସ୍ପାଇରୋସିସ୍ (ବାତଜ୍ୱର) ର ଚିକିତ୍ସା ମାଗଣାରେ ମିଳେ କି?",
          "answer": "ହଁ, ନିରାମୟ ଯୋଜନା ଓ ବିଜୁ ସ୍ୱାସ୍ଥ୍ୟ କଲ୍ୟାଣ ଯୋଜନାରେ ସମସ୍ତ ସରକାରୀ ଡାକ୍ତରଖାନାରେ ମାଗଣା ପରୀକ୍ଷା ଓ ଔଷଧ ଉପଲବ୍ଧ।"
        },
        {
          "question": "କେବେ ଡାକ୍ତରଖାନା ଯିବା ଉଚିତ?",
          "answer": "ଗୁରୁତର ଲକ୍ଷଣ ଦେଖାଦେବା ମାତ୍ରେ ତୁରନ୍ତ ଡାକ୍ତରଖାନା ଯିବା ଉଚିତ।"
        }
      ]
    }
  },
  {
    "id": "dis-102-leprosy-hansen-s-disease-kustha-roga-",
    "category": "Infectious & Bacterial",
    "severity": "Moderate",
    "transmission": "Prolonged close droplet contact",
    "en": {
      "name": "Leprosy (Hansen's Disease / Kustha Roga) - Grade 4",
      "overview": "Detailed clinical guidance, prevention, and government health support in Odisha for Leprosy (Hansen's Disease / Kustha Roga).",
      "symptoms": [
        "Primary localized pain, fever, or discomfort",
        "Fatigue and reduced physical stamina",
        "Loss of normal appetite and mild headache",
        "Associated diagnostic clinical signs specific to condition"
      ],
      "causes": [
        "Etiological factors and environmental exposure related to Leprosy (Hansen's Disease / Kustha Roga)",
        "Unfavorable seasonal conditions or unhygienic community environment",
        "Nutritional or metabolic susceptibility factors"
      ],
      "treatments": [
        "Evidence-based pharmacotherapy prescribed by medical officer",
        "Adequate fluid intake, nutritious diet, and supportive care",
        "Free treatment and diagnostic screening available at Odisha CHCs and DHHs"
      ],
      "prevention": [
        "Maintain strict personal, domestic, and water hygiene",
        "Adhere to public health department guidelines and advisories",
        "Timely immunization and regular screening visits"
      ],
      "dos": [
        "Consult a qualified medical officer at early onset of symptoms",
        "Complete the prescribed medical regimen without skipping doses",
        "Maintain clean drinking water and well-balanced nutrition"
      ],
      "donts": [
        "Do not self-medicate or purchase unverified over-the-counter drugs",
        "Do not delay seeking medical care if red flag symptoms emerge",
        "Do not consume unhygienic or contaminated food and water"
      ],
      "whenToSeeDoctor": [
        "High continuous fever not responding to antipyretics",
        "Breathing difficulty, extreme fatigue, or fainting",
        "Inability to eat or drink oral fluids"
      ],
      "faqs": [
        {
          "question": "Is treatment for Leprosy (Hansen's Disease / Kustha Roga) available free in Odisha?",
          "answer": "Yes, under Niramaya scheme and BSKY, free diagnostics and medicines are provided across Odisha government facilities."
        },
        {
          "question": "When should one visit the nearest hospital?",
          "answer": "Visit the hospital at first onset of severe symptoms or if home recovery is slow after 48 hours."
        }
      ]
    },
    "or": {
      "name": "କୁଷ୍ଠ ରୋଗ (ହାନ୍ସେନସ୍ ଡିଜିଜ୍) (ପର୍ଯ୍ୟାୟ 4)",
      "nativeName": "କୁଷ୍ଠ ରୋଗ (ହାନ୍ସେନସ୍ ଡିଜିଜ୍)",
      "overview": "ଓଡ଼ିଶାର ଜନସାଧାରଣଙ୍କ ପାଇଁ କୁଷ୍ଠ ରୋଗ (ହାନ୍ସେନସ୍ ଡିଜିଜ୍) ର ଡାକ୍ତରୀ ମାର୍ଗଦର୍ଶନ, ପ୍ରତିରୋଧ ଓ ସରକାରୀ ସହାୟତା।",
      "symptoms": [
        "ସ୍ଥାନୀୟ ଯନ୍ତ୍ରଣା, ଜ୍ୱର ବା ଅସ୍ୱସ୍ତି ଭାବ",
        "ଦୁର୍ବଳତା ଏବଂ ଶରୀରରେ ଶକ୍ତିର ଅଭାବ",
        "ଭୋକ କମିବା ଏବଂ ମୁଣ୍ଡବିନ୍ଧା",
        "ରୋଗ ସମ୍ପର୍କିତ ସାଧାରଣ ଡାକ୍ତରୀ ଲକ୍ଷଣ"
      ],
      "causes": [
        "କୁଷ୍ଠ ରୋଗ (ହାନ୍ସେନସ୍ ଡିଜିଜ୍) ସମ୍ପର୍କିତ ପରିବେଶ ଓ ଜୀବାଣୁଜନିତ କାରଣ",
        "ଋତୁକାଳୀନ ପ୍ରତିକୂଳ ପାଗ ବା ଅପରିଷ୍କାର ପରିବେଶ",
        "ପୁଷ୍ଟିହୀନତା ବା ରୋଗ ପ୍ରତିରୋଧକ ଶକ୍ତିର ଅଭାବ"
      ],
      "treatments": [
        "ଡାକ୍ତରଙ୍କ ପରାମର୍ଶ ଅନୁଯାୟୀ ପ୍ରମାଣିତ ଔଷଧ ସେବନ",
        "ପର୍ଯ୍ୟାପ୍ତ ପାଣି ପିଇବା, ପୁଷ୍ଟିକର ଖାଦ୍ୟ ଓ ବିଶ୍ରାମ",
        "ଓଡ଼ିଶା ସରକାରୀ ଡାକ୍ତରଖାନାରେ ମାଗଣା ଚିକିତ୍ସା ଓ ପରୀକ୍ଷା"
      ],
      "prevention": [
        "ବ୍ୟକ୍ତିଗତ ଓ ପରିବେଶ ପରିମଳ ସର୍ବଦା ବଜାୟ ରଖନ୍ତୁ",
        "ସ୍ୱାସ୍ଥ୍ୟ ବିଭାଗର ନିର୍ଦ୍ଦେଶାବଳୀ ପାଳନ କରନ୍ତୁ",
        "ସମୟ ଅନୁଯାୟୀ ଟିକାକରଣ ଓ ସ୍ୱାସ୍ଥ୍ୟ ଯାଞ୍ଚ କରାନ୍ତୁ"
      ],
      "dos": [
        "ଲକ୍ଷଣ ଦେଖାଦେବା ମାତ୍ରେ ଡାକ୍ତରଙ୍କ ସହ ପରାମର୍ଶ କରନ୍ତୁ",
        "ଡାକ୍ତର ଦେଇଥିବା ଔଷଧ କୋର୍ସ ସମ୍ପୂର୍ଣ୍ଣ ଶେଷ କରନ୍ତୁ",
        "ଫୁଟା ପାଣି ଓ ପୁଷ୍ଟିକର ଖାଦ୍ୟ ଖାଆନ୍ତୁ"
      ],
      "donts": [
        "ଡାକ୍ତରଙ୍କ ବିନା ପରାମର୍ଶରେ ମେଡିସିନ୍ ଦୋକାନରୁ ଔଷଧ ଖାଆନ୍ତୁ ନାହିଁ",
        "ଗୁରୁତର ଲକ୍ଷଣ ଥିଲେ ଡାକ୍ତରଖାନା ଯିବାରେ ଡେରି କରନ୍ତୁ ନାହିଁ",
        "ଅପରିଷ୍କାର ଓ ବାସି ଖାଦ୍ୟ ଖାଆନ୍ତୁ ନାହିଁ"
      ],
      "whenToSeeDoctor": [
        "ଲଗାତାର ତେଜ ଜ୍ୱର ଲାଗିରହିଲେ",
        "ନିଶ୍ୱାସ ନେବାରେ କଷ୍ଟ ହେଲେ ବା ଚେତା ହରାଇଲେ",
        "ପାଣି ପିଇ ନପାରିଲେ ବା ବାରମ୍ବାର ବାନ୍ତି ହେଲେ"
      ],
      "faqs": [
        {
          "question": "ଓଡ଼ିଶାରେ କୁଷ୍ଠ ରୋଗ (ହାନ୍ସେନସ୍ ଡିଜିଜ୍) ର ଚିକିତ୍ସା ମାଗଣାରେ ମିଳେ କି?",
          "answer": "ହଁ, ନିରାମୟ ଯୋଜନା ଓ ବିଜୁ ସ୍ୱାସ୍ଥ୍ୟ କଲ୍ୟାଣ ଯୋଜନାରେ ସମସ୍ତ ସରକାରୀ ଡାକ୍ତରଖାନାରେ ମାଗଣା ପରୀକ୍ଷା ଓ ଔଷଧ ଉପଲବ୍ଧ।"
        },
        {
          "question": "କେବେ ଡାକ୍ତରଖାନା ଯିବା ଉଚିତ?",
          "answer": "ଗୁରୁତର ଲକ୍ଷଣ ଦେଖାଦେବା ମାତ୍ରେ ତୁରନ୍ତ ଡାକ୍ତରଖାନା ଯିବା ଉଚିତ।"
        }
      ]
    }
  },
  {
    "id": "dis-103-rabies-dog-bite-prophylaxis",
    "category": "Emergency",
    "severity": "Emergency",
    "transmission": "Saliva of rabid dog, monkey, or jackal via bite/scratch",
    "en": {
      "name": "Rabies & Dog Bite Prophylaxis - Grade 4",
      "overview": "Detailed clinical guidance, prevention, and government health support in Odisha for Rabies & Dog Bite Prophylaxis.",
      "symptoms": [
        "Primary localized pain, fever, or discomfort",
        "Fatigue and reduced physical stamina",
        "Loss of normal appetite and mild headache",
        "Associated diagnostic clinical signs specific to condition"
      ],
      "causes": [
        "Etiological factors and environmental exposure related to Rabies & Dog Bite Prophylaxis",
        "Unfavorable seasonal conditions or unhygienic community environment",
        "Nutritional or metabolic susceptibility factors"
      ],
      "treatments": [
        "Evidence-based pharmacotherapy prescribed by medical officer",
        "Adequate fluid intake, nutritious diet, and supportive care",
        "Free treatment and diagnostic screening available at Odisha CHCs and DHHs"
      ],
      "prevention": [
        "Maintain strict personal, domestic, and water hygiene",
        "Adhere to public health department guidelines and advisories",
        "Timely immunization and regular screening visits"
      ],
      "dos": [
        "Consult a qualified medical officer at early onset of symptoms",
        "Complete the prescribed medical regimen without skipping doses",
        "Maintain clean drinking water and well-balanced nutrition"
      ],
      "donts": [
        "Do not self-medicate or purchase unverified over-the-counter drugs",
        "Do not delay seeking medical care if red flag symptoms emerge",
        "Do not consume unhygienic or contaminated food and water"
      ],
      "whenToSeeDoctor": [
        "High continuous fever not responding to antipyretics",
        "Breathing difficulty, extreme fatigue, or fainting",
        "Inability to eat or drink oral fluids"
      ],
      "faqs": [
        {
          "question": "Is treatment for Rabies & Dog Bite Prophylaxis available free in Odisha?",
          "answer": "Yes, under Niramaya scheme and BSKY, free diagnostics and medicines are provided across Odisha government facilities."
        },
        {
          "question": "When should one visit the nearest hospital?",
          "answer": "Visit the hospital at first onset of severe symptoms or if home recovery is slow after 48 hours."
        }
      ]
    },
    "or": {
      "name": "ଜଳାତଙ୍କ (କୁକୁର କାମୁଡ଼ା / ରାବିସ୍) (ପର୍ଯ୍ୟାୟ 4)",
      "nativeName": "ଜଳାତଙ୍କ (କୁକୁର କାମୁଡ଼ା / ରାବିସ୍)",
      "overview": "ଓଡ଼ିଶାର ଜନସାଧାରଣଙ୍କ ପାଇଁ ଜଳାତଙ୍କ (କୁକୁର କାମୁଡ଼ା / ରାବିସ୍) ର ଡାକ୍ତରୀ ମାର୍ଗଦର୍ଶନ, ପ୍ରତିରୋଧ ଓ ସରକାରୀ ସହାୟତା।",
      "symptoms": [
        "ସ୍ଥାନୀୟ ଯନ୍ତ୍ରଣା, ଜ୍ୱର ବା ଅସ୍ୱସ୍ତି ଭାବ",
        "ଦୁର୍ବଳତା ଏବଂ ଶରୀରରେ ଶକ୍ତିର ଅଭାବ",
        "ଭୋକ କମିବା ଏବଂ ମୁଣ୍ଡବିନ୍ଧା",
        "ରୋଗ ସମ୍ପର୍କିତ ସାଧାରଣ ଡାକ୍ତରୀ ଲକ୍ଷଣ"
      ],
      "causes": [
        "ଜଳାତଙ୍କ (କୁକୁର କାମୁଡ଼ା / ରାବିସ୍) ସମ୍ପର୍କିତ ପରିବେଶ ଓ ଜୀବାଣୁଜନିତ କାରଣ",
        "ଋତୁକାଳୀନ ପ୍ରତିକୂଳ ପାଗ ବା ଅପରିଷ୍କାର ପରିବେଶ",
        "ପୁଷ୍ଟିହୀନତା ବା ରୋଗ ପ୍ରତିରୋଧକ ଶକ୍ତିର ଅଭାବ"
      ],
      "treatments": [
        "ଡାକ୍ତରଙ୍କ ପରାମର୍ଶ ଅନୁଯାୟୀ ପ୍ରମାଣିତ ଔଷଧ ସେବନ",
        "ପର୍ଯ୍ୟାପ୍ତ ପାଣି ପିଇବା, ପୁଷ୍ଟିକର ଖାଦ୍ୟ ଓ ବିଶ୍ରାମ",
        "ଓଡ଼ିଶା ସରକାରୀ ଡାକ୍ତରଖାନାରେ ମାଗଣା ଚିକିତ୍ସା ଓ ପରୀକ୍ଷା"
      ],
      "prevention": [
        "ବ୍ୟକ୍ତିଗତ ଓ ପରିବେଶ ପରିମଳ ସର୍ବଦା ବଜାୟ ରଖନ୍ତୁ",
        "ସ୍ୱାସ୍ଥ୍ୟ ବିଭାଗର ନିର୍ଦ୍ଦେଶାବଳୀ ପାଳନ କରନ୍ତୁ",
        "ସମୟ ଅନୁଯାୟୀ ଟିକାକରଣ ଓ ସ୍ୱାସ୍ଥ୍ୟ ଯାଞ୍ଚ କରାନ୍ତୁ"
      ],
      "dos": [
        "ଲକ୍ଷଣ ଦେଖାଦେବା ମାତ୍ରେ ଡାକ୍ତରଙ୍କ ସହ ପରାମର୍ଶ କରନ୍ତୁ",
        "ଡାକ୍ତର ଦେଇଥିବା ଔଷଧ କୋର୍ସ ସମ୍ପୂର୍ଣ୍ଣ ଶେଷ କରନ୍ତୁ",
        "ଫୁଟା ପାଣି ଓ ପୁଷ୍ଟିକର ଖାଦ୍ୟ ଖାଆନ୍ତୁ"
      ],
      "donts": [
        "ଡାକ୍ତରଙ୍କ ବିନା ପରାମର୍ଶରେ ମେଡିସିନ୍ ଦୋକାନରୁ ଔଷଧ ଖାଆନ୍ତୁ ନାହିଁ",
        "ଗୁରୁତର ଲକ୍ଷଣ ଥିଲେ ଡାକ୍ତରଖାନା ଯିବାରେ ଡେରି କରନ୍ତୁ ନାହିଁ",
        "ଅପରିଷ୍କାର ଓ ବାସି ଖାଦ୍ୟ ଖାଆନ୍ତୁ ନାହିଁ"
      ],
      "whenToSeeDoctor": [
        "ଲଗାତାର ତେଜ ଜ୍ୱର ଲାଗିରହିଲେ",
        "ନିଶ୍ୱାସ ନେବାରେ କଷ୍ଟ ହେଲେ ବା ଚେତା ହରାଇଲେ",
        "ପାଣି ପିଇ ନପାରିଲେ ବା ବାରମ୍ବାର ବାନ୍ତି ହେଲେ"
      ],
      "faqs": [
        {
          "question": "ଓଡ଼ିଶାରେ ଜଳାତଙ୍କ (କୁକୁର କାମୁଡ଼ା / ରାବିସ୍) ର ଚିକିତ୍ସା ମାଗଣାରେ ମିଳେ କି?",
          "answer": "ହଁ, ନିରାମୟ ଯୋଜନା ଓ ବିଜୁ ସ୍ୱାସ୍ଥ୍ୟ କଲ୍ୟାଣ ଯୋଜନାରେ ସମସ୍ତ ସରକାରୀ ଡାକ୍ତରଖାନାରେ ମାଗଣା ପରୀକ୍ଷା ଓ ଔଷଧ ଉପଲବ୍ଧ।"
        },
        {
          "question": "କେବେ ଡାକ୍ତରଖାନା ଯିବା ଉଚିତ?",
          "answer": "ଗୁରୁତର ଲକ୍ଷଣ ଦେଖାଦେବା ମାତ୍ରେ ତୁରନ୍ତ ଡାକ୍ତରଖାନା ଯିବା ଉଚିତ।"
        }
      ]
    }
  },
  {
    "id": "dis-104-tetanus-dhanustankara-lockjaw-",
    "category": "Emergency",
    "severity": "Emergency",
    "transmission": "Clostridium tetani spores entering rusty wounds or soil contamination",
    "en": {
      "name": "Tetanus (Dhanustankara / Lockjaw) - Grade 4",
      "overview": "Detailed clinical guidance, prevention, and government health support in Odisha for Tetanus (Dhanustankara / Lockjaw).",
      "symptoms": [
        "Primary localized pain, fever, or discomfort",
        "Fatigue and reduced physical stamina",
        "Loss of normal appetite and mild headache",
        "Associated diagnostic clinical signs specific to condition"
      ],
      "causes": [
        "Etiological factors and environmental exposure related to Tetanus (Dhanustankara / Lockjaw)",
        "Unfavorable seasonal conditions or unhygienic community environment",
        "Nutritional or metabolic susceptibility factors"
      ],
      "treatments": [
        "Evidence-based pharmacotherapy prescribed by medical officer",
        "Adequate fluid intake, nutritious diet, and supportive care",
        "Free treatment and diagnostic screening available at Odisha CHCs and DHHs"
      ],
      "prevention": [
        "Maintain strict personal, domestic, and water hygiene",
        "Adhere to public health department guidelines and advisories",
        "Timely immunization and regular screening visits"
      ],
      "dos": [
        "Consult a qualified medical officer at early onset of symptoms",
        "Complete the prescribed medical regimen without skipping doses",
        "Maintain clean drinking water and well-balanced nutrition"
      ],
      "donts": [
        "Do not self-medicate or purchase unverified over-the-counter drugs",
        "Do not delay seeking medical care if red flag symptoms emerge",
        "Do not consume unhygienic or contaminated food and water"
      ],
      "whenToSeeDoctor": [
        "High continuous fever not responding to antipyretics",
        "Breathing difficulty, extreme fatigue, or fainting",
        "Inability to eat or drink oral fluids"
      ],
      "faqs": [
        {
          "question": "Is treatment for Tetanus (Dhanustankara / Lockjaw) available free in Odisha?",
          "answer": "Yes, under Niramaya scheme and BSKY, free diagnostics and medicines are provided across Odisha government facilities."
        },
        {
          "question": "When should one visit the nearest hospital?",
          "answer": "Visit the hospital at first onset of severe symptoms or if home recovery is slow after 48 hours."
        }
      ]
    },
    "or": {
      "name": "ଧନୁଷ୍ଟଙ୍କାର (ଟିଟାନସ୍) (ପର୍ଯ୍ୟାୟ 4)",
      "nativeName": "ଧନୁଷ୍ଟଙ୍କାର (ଟିଟାନସ୍)",
      "overview": "ଓଡ଼ିଶାର ଜନସାଧାରଣଙ୍କ ପାଇଁ ଧନୁଷ୍ଟଙ୍କାର (ଟିଟାନସ୍) ର ଡାକ୍ତରୀ ମାର୍ଗଦର୍ଶନ, ପ୍ରତିରୋଧ ଓ ସରକାରୀ ସହାୟତା।",
      "symptoms": [
        "ସ୍ଥାନୀୟ ଯନ୍ତ୍ରଣା, ଜ୍ୱର ବା ଅସ୍ୱସ୍ତି ଭାବ",
        "ଦୁର୍ବଳତା ଏବଂ ଶରୀରରେ ଶକ୍ତିର ଅଭାବ",
        "ଭୋକ କମିବା ଏବଂ ମୁଣ୍ଡବିନ୍ଧା",
        "ରୋଗ ସମ୍ପର୍କିତ ସାଧାରଣ ଡାକ୍ତରୀ ଲକ୍ଷଣ"
      ],
      "causes": [
        "ଧନୁଷ୍ଟଙ୍କାର (ଟିଟାନସ୍) ସମ୍ପର୍କିତ ପରିବେଶ ଓ ଜୀବାଣୁଜନିତ କାରଣ",
        "ଋତୁକାଳୀନ ପ୍ରତିକୂଳ ପାଗ ବା ଅପରିଷ୍କାର ପରିବେଶ",
        "ପୁଷ୍ଟିହୀନତା ବା ରୋଗ ପ୍ରତିରୋଧକ ଶକ୍ତିର ଅଭାବ"
      ],
      "treatments": [
        "ଡାକ୍ତରଙ୍କ ପରାମର୍ଶ ଅନୁଯାୟୀ ପ୍ରମାଣିତ ଔଷଧ ସେବନ",
        "ପର୍ଯ୍ୟାପ୍ତ ପାଣି ପିଇବା, ପୁଷ୍ଟିକର ଖାଦ୍ୟ ଓ ବିଶ୍ରାମ",
        "ଓଡ଼ିଶା ସରକାରୀ ଡାକ୍ତରଖାନାରେ ମାଗଣା ଚିକିତ୍ସା ଓ ପରୀକ୍ଷା"
      ],
      "prevention": [
        "ବ୍ୟକ୍ତିଗତ ଓ ପରିବେଶ ପରିମଳ ସର୍ବଦା ବଜାୟ ରଖନ୍ତୁ",
        "ସ୍ୱାସ୍ଥ୍ୟ ବିଭାଗର ନିର୍ଦ୍ଦେଶାବଳୀ ପାଳନ କରନ୍ତୁ",
        "ସମୟ ଅନୁଯାୟୀ ଟିକାକରଣ ଓ ସ୍ୱାସ୍ଥ୍ୟ ଯାଞ୍ଚ କରାନ୍ତୁ"
      ],
      "dos": [
        "ଲକ୍ଷଣ ଦେଖାଦେବା ମାତ୍ରେ ଡାକ୍ତରଙ୍କ ସହ ପରାମର୍ଶ କରନ୍ତୁ",
        "ଡାକ୍ତର ଦେଇଥିବା ଔଷଧ କୋର୍ସ ସମ୍ପୂର୍ଣ୍ଣ ଶେଷ କରନ୍ତୁ",
        "ଫୁଟା ପାଣି ଓ ପୁଷ୍ଟିକର ଖାଦ୍ୟ ଖାଆନ୍ତୁ"
      ],
      "donts": [
        "ଡାକ୍ତରଙ୍କ ବିନା ପରାମର୍ଶରେ ମେଡିସିନ୍ ଦୋକାନରୁ ଔଷଧ ଖାଆନ୍ତୁ ନାହିଁ",
        "ଗୁରୁତର ଲକ୍ଷଣ ଥିଲେ ଡାକ୍ତରଖାନା ଯିବାରେ ଡେରି କରନ୍ତୁ ନାହିଁ",
        "ଅପରିଷ୍କାର ଓ ବାସି ଖାଦ୍ୟ ଖାଆନ୍ତୁ ନାହିଁ"
      ],
      "whenToSeeDoctor": [
        "ଲଗାତାର ତେଜ ଜ୍ୱର ଲାଗିରହିଲେ",
        "ନିଶ୍ୱାସ ନେବାରେ କଷ୍ଟ ହେଲେ ବା ଚେତା ହରାଇଲେ",
        "ପାଣି ପିଇ ନପାରିଲେ ବା ବାରମ୍ବାର ବାନ୍ତି ହେଲେ"
      ],
      "faqs": [
        {
          "question": "ଓଡ଼ିଶାରେ ଧନୁଷ୍ଟଙ୍କାର (ଟିଟାନସ୍) ର ଚିକିତ୍ସା ମାଗଣାରେ ମିଳେ କି?",
          "answer": "ହଁ, ନିରାମୟ ଯୋଜନା ଓ ବିଜୁ ସ୍ୱାସ୍ଥ୍ୟ କଲ୍ୟାଣ ଯୋଜନାରେ ସମସ୍ତ ସରକାରୀ ଡାକ୍ତରଖାନାରେ ମାଗଣା ପରୀକ୍ଷା ଓ ଔଷଧ ଉପଲବ୍ଧ।"
        },
        {
          "question": "କେବେ ଡାକ୍ତରଖାନା ଯିବା ଉଚିତ?",
          "answer": "ଗୁରୁତର ଲକ୍ଷଣ ଦେଖାଦେବା ମାତ୍ରେ ତୁରନ୍ତ ଡାକ୍ତରଖାନା ଯିବା ଉଚିତ।"
        }
      ]
    }
  },
  {
    "id": "dis-105-typhoid-fever-madiakhiya-jwara-",
    "category": "Waterborne & Gastro",
    "severity": "High",
    "transmission": "Contaminated food and drinking water",
    "en": {
      "name": "Typhoid Fever (Madiakhiya Jwara) - Grade 4",
      "overview": "Detailed clinical guidance, prevention, and government health support in Odisha for Typhoid Fever (Madiakhiya Jwara).",
      "symptoms": [
        "Primary localized pain, fever, or discomfort",
        "Fatigue and reduced physical stamina",
        "Loss of normal appetite and mild headache",
        "Associated diagnostic clinical signs specific to condition"
      ],
      "causes": [
        "Etiological factors and environmental exposure related to Typhoid Fever (Madiakhiya Jwara)",
        "Unfavorable seasonal conditions or unhygienic community environment",
        "Nutritional or metabolic susceptibility factors"
      ],
      "treatments": [
        "Evidence-based pharmacotherapy prescribed by medical officer",
        "Adequate fluid intake, nutritious diet, and supportive care",
        "Free treatment and diagnostic screening available at Odisha CHCs and DHHs"
      ],
      "prevention": [
        "Maintain strict personal, domestic, and water hygiene",
        "Adhere to public health department guidelines and advisories",
        "Timely immunization and regular screening visits"
      ],
      "dos": [
        "Consult a qualified medical officer at early onset of symptoms",
        "Complete the prescribed medical regimen without skipping doses",
        "Maintain clean drinking water and well-balanced nutrition"
      ],
      "donts": [
        "Do not self-medicate or purchase unverified over-the-counter drugs",
        "Do not delay seeking medical care if red flag symptoms emerge",
        "Do not consume unhygienic or contaminated food and water"
      ],
      "whenToSeeDoctor": [
        "High continuous fever not responding to antipyretics",
        "Breathing difficulty, extreme fatigue, or fainting",
        "Inability to eat or drink oral fluids"
      ],
      "faqs": [
        {
          "question": "Is treatment for Typhoid Fever (Madiakhiya Jwara) available free in Odisha?",
          "answer": "Yes, under Niramaya scheme and BSKY, free diagnostics and medicines are provided across Odisha government facilities."
        },
        {
          "question": "When should one visit the nearest hospital?",
          "answer": "Visit the hospital at first onset of severe symptoms or if home recovery is slow after 48 hours."
        }
      ]
    },
    "or": {
      "name": "ଟାଇଫଏଡ୍ ଜ୍ୱର (ମାଦିଆଖିଆ ଜ୍ୱର) (ପର୍ଯ୍ୟାୟ 4)",
      "nativeName": "ଟାଇଫଏଡ୍ ଜ୍ୱର (ମାଦିଆଖିଆ ଜ୍ୱର)",
      "overview": "ଓଡ଼ିଶାର ଜନସାଧାରଣଙ୍କ ପାଇଁ ଟାଇଫଏଡ୍ ଜ୍ୱର (ମାଦିଆଖିଆ ଜ୍ୱର) ର ଡାକ୍ତରୀ ମାର୍ଗଦର୍ଶନ, ପ୍ରତିରୋଧ ଓ ସରକାରୀ ସହାୟତା।",
      "symptoms": [
        "ସ୍ଥାନୀୟ ଯନ୍ତ୍ରଣା, ଜ୍ୱର ବା ଅସ୍ୱସ୍ତି ଭାବ",
        "ଦୁର୍ବଳତା ଏବଂ ଶରୀରରେ ଶକ୍ତିର ଅଭାବ",
        "ଭୋକ କମିବା ଏବଂ ମୁଣ୍ଡବିନ୍ଧା",
        "ରୋଗ ସମ୍ପର୍କିତ ସାଧାରଣ ଡାକ୍ତରୀ ଲକ୍ଷଣ"
      ],
      "causes": [
        "ଟାଇଫଏଡ୍ ଜ୍ୱର (ମାଦିଆଖିଆ ଜ୍ୱର) ସମ୍ପର୍କିତ ପରିବେଶ ଓ ଜୀବାଣୁଜନିତ କାରଣ",
        "ଋତୁକାଳୀନ ପ୍ରତିକୂଳ ପାଗ ବା ଅପରିଷ୍କାର ପରିବେଶ",
        "ପୁଷ୍ଟିହୀନତା ବା ରୋଗ ପ୍ରତିରୋଧକ ଶକ୍ତିର ଅଭାବ"
      ],
      "treatments": [
        "ଡାକ୍ତରଙ୍କ ପରାମର୍ଶ ଅନୁଯାୟୀ ପ୍ରମାଣିତ ଔଷଧ ସେବନ",
        "ପର୍ଯ୍ୟାପ୍ତ ପାଣି ପିଇବା, ପୁଷ୍ଟିକର ଖାଦ୍ୟ ଓ ବିଶ୍ରାମ",
        "ଓଡ଼ିଶା ସରକାରୀ ଡାକ୍ତରଖାନାରେ ମାଗଣା ଚିକିତ୍ସା ଓ ପରୀକ୍ଷା"
      ],
      "prevention": [
        "ବ୍ୟକ୍ତିଗତ ଓ ପରିବେଶ ପରିମଳ ସର୍ବଦା ବଜାୟ ରଖନ୍ତୁ",
        "ସ୍ୱାସ୍ଥ୍ୟ ବିଭାଗର ନିର୍ଦ୍ଦେଶାବଳୀ ପାଳନ କରନ୍ତୁ",
        "ସମୟ ଅନୁଯାୟୀ ଟିକାକରଣ ଓ ସ୍ୱାସ୍ଥ୍ୟ ଯାଞ୍ଚ କରାନ୍ତୁ"
      ],
      "dos": [
        "ଲକ୍ଷଣ ଦେଖାଦେବା ମାତ୍ରେ ଡାକ୍ତରଙ୍କ ସହ ପରାମର୍ଶ କରନ୍ତୁ",
        "ଡାକ୍ତର ଦେଇଥିବା ଔଷଧ କୋର୍ସ ସମ୍ପୂର୍ଣ୍ଣ ଶେଷ କରନ୍ତୁ",
        "ଫୁଟା ପାଣି ଓ ପୁଷ୍ଟିକର ଖାଦ୍ୟ ଖାଆନ୍ତୁ"
      ],
      "donts": [
        "ଡାକ୍ତରଙ୍କ ବିନା ପରାମର୍ଶରେ ମେଡିସିନ୍ ଦୋକାନରୁ ଔଷଧ ଖାଆନ୍ତୁ ନାହିଁ",
        "ଗୁରୁତର ଲକ୍ଷଣ ଥିଲେ ଡାକ୍ତରଖାନା ଯିବାରେ ଡେରି କରନ୍ତୁ ନାହିଁ",
        "ଅପରିଷ୍କାର ଓ ବାସି ଖାଦ୍ୟ ଖାଆନ୍ତୁ ନାହିଁ"
      ],
      "whenToSeeDoctor": [
        "ଲଗାତାର ତେଜ ଜ୍ୱର ଲାଗିରହିଲେ",
        "ନିଶ୍ୱାସ ନେବାରେ କଷ୍ଟ ହେଲେ ବା ଚେତା ହରାଇଲେ",
        "ପାଣି ପିଇ ନପାରିଲେ ବା ବାରମ୍ବାର ବାନ୍ତି ହେଲେ"
      ],
      "faqs": [
        {
          "question": "ଓଡ଼ିଶାରେ ଟାଇଫଏଡ୍ ଜ୍ୱର (ମାଦିଆଖିଆ ଜ୍ୱର) ର ଚିକିତ୍ସା ମାଗଣାରେ ମିଳେ କି?",
          "answer": "ହଁ, ନିରାମୟ ଯୋଜନା ଓ ବିଜୁ ସ୍ୱାସ୍ଥ୍ୟ କଲ୍ୟାଣ ଯୋଜନାରେ ସମସ୍ତ ସରକାରୀ ଡାକ୍ତରଖାନାରେ ମାଗଣା ପରୀକ୍ଷା ଓ ଔଷଧ ଉପଲବ୍ଧ।"
        },
        {
          "question": "କେବେ ଡାକ୍ତରଖାନା ଯିବା ଉଚିତ?",
          "answer": "ଗୁରୁତର ଲକ୍ଷଣ ଦେଖାଦେବା ମାତ୍ରେ ତୁରନ୍ତ ଡାକ୍ତରଖାନା ଯିବା ଉଚିତ।"
        }
      ]
    }
  },
  {
    "id": "dis-106-viral-hepatitis-a-e-jaundice-haladia-roga-",
    "category": "Waterborne & Gastro",
    "severity": "Moderate",
    "transmission": "Ingestion of fecal-contaminated drinking water",
    "en": {
      "name": "Viral Hepatitis A & E (Jaundice / Haladia Roga) - Grade 4",
      "overview": "Detailed clinical guidance, prevention, and government health support in Odisha for Viral Hepatitis A & E (Jaundice / Haladia Roga).",
      "symptoms": [
        "Primary localized pain, fever, or discomfort",
        "Fatigue and reduced physical stamina",
        "Loss of normal appetite and mild headache",
        "Associated diagnostic clinical signs specific to condition"
      ],
      "causes": [
        "Etiological factors and environmental exposure related to Viral Hepatitis A & E (Jaundice / Haladia Roga)",
        "Unfavorable seasonal conditions or unhygienic community environment",
        "Nutritional or metabolic susceptibility factors"
      ],
      "treatments": [
        "Evidence-based pharmacotherapy prescribed by medical officer",
        "Adequate fluid intake, nutritious diet, and supportive care",
        "Free treatment and diagnostic screening available at Odisha CHCs and DHHs"
      ],
      "prevention": [
        "Maintain strict personal, domestic, and water hygiene",
        "Adhere to public health department guidelines and advisories",
        "Timely immunization and regular screening visits"
      ],
      "dos": [
        "Consult a qualified medical officer at early onset of symptoms",
        "Complete the prescribed medical regimen without skipping doses",
        "Maintain clean drinking water and well-balanced nutrition"
      ],
      "donts": [
        "Do not self-medicate or purchase unverified over-the-counter drugs",
        "Do not delay seeking medical care if red flag symptoms emerge",
        "Do not consume unhygienic or contaminated food and water"
      ],
      "whenToSeeDoctor": [
        "High continuous fever not responding to antipyretics",
        "Breathing difficulty, extreme fatigue, or fainting",
        "Inability to eat or drink oral fluids"
      ],
      "faqs": [
        {
          "question": "Is treatment for Viral Hepatitis A & E (Jaundice / Haladia Roga) available free in Odisha?",
          "answer": "Yes, under Niramaya scheme and BSKY, free diagnostics and medicines are provided across Odisha government facilities."
        },
        {
          "question": "When should one visit the nearest hospital?",
          "answer": "Visit the hospital at first onset of severe symptoms or if home recovery is slow after 48 hours."
        }
      ]
    },
    "or": {
      "name": "ହେପାଟାଇଟିସ୍ ଜଣ୍ଡିସ୍ (ହଳଦିଆ ରୋଗ) (ପର୍ଯ୍ୟାୟ 4)",
      "nativeName": "ହେପାଟାଇଟିସ୍ ଜଣ୍ଡିସ୍ (ହଳଦିଆ ରୋଗ)",
      "overview": "ଓଡ଼ିଶାର ଜନସାଧାରଣଙ୍କ ପାଇଁ ହେପାଟାଇଟିସ୍ ଜଣ୍ଡିସ୍ (ହଳଦିଆ ରୋଗ) ର ଡାକ୍ତରୀ ମାର୍ଗଦର୍ଶନ, ପ୍ରତିରୋଧ ଓ ସରକାରୀ ସହାୟତା।",
      "symptoms": [
        "ସ୍ଥାନୀୟ ଯନ୍ତ୍ରଣା, ଜ୍ୱର ବା ଅସ୍ୱସ୍ତି ଭାବ",
        "ଦୁର୍ବଳତା ଏବଂ ଶରୀରରେ ଶକ୍ତିର ଅଭାବ",
        "ଭୋକ କମିବା ଏବଂ ମୁଣ୍ଡବିନ୍ଧା",
        "ରୋଗ ସମ୍ପର୍କିତ ସାଧାରଣ ଡାକ୍ତରୀ ଲକ୍ଷଣ"
      ],
      "causes": [
        "ହେପାଟାଇଟିସ୍ ଜଣ୍ଡିସ୍ (ହଳଦିଆ ରୋଗ) ସମ୍ପର୍କିତ ପରିବେଶ ଓ ଜୀବାଣୁଜନିତ କାରଣ",
        "ଋତୁକାଳୀନ ପ୍ରତିକୂଳ ପାଗ ବା ଅପରିଷ୍କାର ପରିବେଶ",
        "ପୁଷ୍ଟିହୀନତା ବା ରୋଗ ପ୍ରତିରୋଧକ ଶକ୍ତିର ଅଭାବ"
      ],
      "treatments": [
        "ଡାକ୍ତରଙ୍କ ପରାମର୍ଶ ଅନୁଯାୟୀ ପ୍ରମାଣିତ ଔଷଧ ସେବନ",
        "ପର୍ଯ୍ୟାପ୍ତ ପାଣି ପିଇବା, ପୁଷ୍ଟିକର ଖାଦ୍ୟ ଓ ବିଶ୍ରାମ",
        "ଓଡ଼ିଶା ସରକାରୀ ଡାକ୍ତରଖାନାରେ ମାଗଣା ଚିକିତ୍ସା ଓ ପରୀକ୍ଷା"
      ],
      "prevention": [
        "ବ୍ୟକ୍ତିଗତ ଓ ପରିବେଶ ପରିମଳ ସର୍ବଦା ବଜାୟ ରଖନ୍ତୁ",
        "ସ୍ୱାସ୍ଥ୍ୟ ବିଭାଗର ନିର୍ଦ୍ଦେଶାବଳୀ ପାଳନ କରନ୍ତୁ",
        "ସମୟ ଅନୁଯାୟୀ ଟିକାକରଣ ଓ ସ୍ୱାସ୍ଥ୍ୟ ଯାଞ୍ଚ କରାନ୍ତୁ"
      ],
      "dos": [
        "ଲକ୍ଷଣ ଦେଖାଦେବା ମାତ୍ରେ ଡାକ୍ତରଙ୍କ ସହ ପରାମର୍ଶ କରନ୍ତୁ",
        "ଡାକ୍ତର ଦେଇଥିବା ଔଷଧ କୋର୍ସ ସମ୍ପୂର୍ଣ୍ଣ ଶେଷ କରନ୍ତୁ",
        "ଫୁଟା ପାଣି ଓ ପୁଷ୍ଟିକର ଖାଦ୍ୟ ଖାଆନ୍ତୁ"
      ],
      "donts": [
        "ଡାକ୍ତରଙ୍କ ବିନା ପରାମର୍ଶରେ ମେଡିସିନ୍ ଦୋକାନରୁ ଔଷଧ ଖାଆନ୍ତୁ ନାହିଁ",
        "ଗୁରୁତର ଲକ୍ଷଣ ଥିଲେ ଡାକ୍ତରଖାନା ଯିବାରେ ଡେରି କରନ୍ତୁ ନାହିଁ",
        "ଅପରିଷ୍କାର ଓ ବାସି ଖାଦ୍ୟ ଖାଆନ୍ତୁ ନାହିଁ"
      ],
      "whenToSeeDoctor": [
        "ଲଗାତାର ତେଜ ଜ୍ୱର ଲାଗିରହିଲେ",
        "ନିଶ୍ୱାସ ନେବାରେ କଷ୍ଟ ହେଲେ ବା ଚେତା ହରାଇଲେ",
        "ପାଣି ପିଇ ନପାରିଲେ ବା ବାରମ୍ବାର ବାନ୍ତି ହେଲେ"
      ],
      "faqs": [
        {
          "question": "ଓଡ଼ିଶାରେ ହେପାଟାଇଟିସ୍ ଜଣ୍ଡିସ୍ (ହଳଦିଆ ରୋଗ) ର ଚିକିତ୍ସା ମାଗଣାରେ ମିଳେ କି?",
          "answer": "ହଁ, ନିରାମୟ ଯୋଜନା ଓ ବିଜୁ ସ୍ୱାସ୍ଥ୍ୟ କଲ୍ୟାଣ ଯୋଜନାରେ ସମସ୍ତ ସରକାରୀ ଡାକ୍ତରଖାନାରେ ମାଗଣା ପରୀକ୍ଷା ଓ ଔଷଧ ଉପଲବ୍ଧ।"
        },
        {
          "question": "କେବେ ଡାକ୍ତରଖାନା ଯିବା ଉଚିତ?",
          "answer": "ଗୁରୁତର ଲକ୍ଷଣ ଦେଖାଦେବା ମାତ୍ରେ ତୁରନ୍ତ ଡାକ୍ତରଖାନା ଯିବା ଉଚିତ।"
        }
      ]
    }
  },
  {
    "id": "dis-107-amoebic-dysentery-colitis",
    "category": "Waterborne & Gastro",
    "severity": "Moderate",
    "transmission": "Contaminated drinking water and food",
    "en": {
      "name": "Amoebic Dysentery & Colitis - Grade 4",
      "overview": "Detailed clinical guidance, prevention, and government health support in Odisha for Amoebic Dysentery & Colitis.",
      "symptoms": [
        "Primary localized pain, fever, or discomfort",
        "Fatigue and reduced physical stamina",
        "Loss of normal appetite and mild headache",
        "Associated diagnostic clinical signs specific to condition"
      ],
      "causes": [
        "Etiological factors and environmental exposure related to Amoebic Dysentery & Colitis",
        "Unfavorable seasonal conditions or unhygienic community environment",
        "Nutritional or metabolic susceptibility factors"
      ],
      "treatments": [
        "Evidence-based pharmacotherapy prescribed by medical officer",
        "Adequate fluid intake, nutritious diet, and supportive care",
        "Free treatment and diagnostic screening available at Odisha CHCs and DHHs"
      ],
      "prevention": [
        "Maintain strict personal, domestic, and water hygiene",
        "Adhere to public health department guidelines and advisories",
        "Timely immunization and regular screening visits"
      ],
      "dos": [
        "Consult a qualified medical officer at early onset of symptoms",
        "Complete the prescribed medical regimen without skipping doses",
        "Maintain clean drinking water and well-balanced nutrition"
      ],
      "donts": [
        "Do not self-medicate or purchase unverified over-the-counter drugs",
        "Do not delay seeking medical care if red flag symptoms emerge",
        "Do not consume unhygienic or contaminated food and water"
      ],
      "whenToSeeDoctor": [
        "High continuous fever not responding to antipyretics",
        "Breathing difficulty, extreme fatigue, or fainting",
        "Inability to eat or drink oral fluids"
      ],
      "faqs": [
        {
          "question": "Is treatment for Amoebic Dysentery & Colitis available free in Odisha?",
          "answer": "Yes, under Niramaya scheme and BSKY, free diagnostics and medicines are provided across Odisha government facilities."
        },
        {
          "question": "When should one visit the nearest hospital?",
          "answer": "Visit the hospital at first onset of severe symptoms or if home recovery is slow after 48 hours."
        }
      ]
    },
    "or": {
      "name": "ଆମିବିଆସିସ୍ (ଆମାଶୟ ଝାଡ଼ା) (ପର୍ଯ୍ୟାୟ 4)",
      "nativeName": "ଆମିବିଆସିସ୍ (ଆମାଶୟ ଝାଡ଼ା)",
      "overview": "ଓଡ଼ିଶାର ଜନସାଧାରଣଙ୍କ ପାଇଁ ଆମିବିଆସିସ୍ (ଆମାଶୟ ଝାଡ଼ା) ର ଡାକ୍ତରୀ ମାର୍ଗଦର୍ଶନ, ପ୍ରତିରୋଧ ଓ ସରକାରୀ ସହାୟତା।",
      "symptoms": [
        "ସ୍ଥାନୀୟ ଯନ୍ତ୍ରଣା, ଜ୍ୱର ବା ଅସ୍ୱସ୍ତି ଭାବ",
        "ଦୁର୍ବଳତା ଏବଂ ଶରୀରରେ ଶକ୍ତିର ଅଭାବ",
        "ଭୋକ କମିବା ଏବଂ ମୁଣ୍ଡବିନ୍ଧା",
        "ରୋଗ ସମ୍ପର୍କିତ ସାଧାରଣ ଡାକ୍ତରୀ ଲକ୍ଷଣ"
      ],
      "causes": [
        "ଆମିବିଆସିସ୍ (ଆମାଶୟ ଝାଡ଼ା) ସମ୍ପର୍କିତ ପରିବେଶ ଓ ଜୀବାଣୁଜନିତ କାରଣ",
        "ଋତୁକାଳୀନ ପ୍ରତିକୂଳ ପାଗ ବା ଅପରିଷ୍କାର ପରିବେଶ",
        "ପୁଷ୍ଟିହୀନତା ବା ରୋଗ ପ୍ରତିରୋଧକ ଶକ୍ତିର ଅଭାବ"
      ],
      "treatments": [
        "ଡାକ୍ତରଙ୍କ ପରାମର୍ଶ ଅନୁଯାୟୀ ପ୍ରମାଣିତ ଔଷଧ ସେବନ",
        "ପର୍ଯ୍ୟାପ୍ତ ପାଣି ପିଇବା, ପୁଷ୍ଟିକର ଖାଦ୍ୟ ଓ ବିଶ୍ରାମ",
        "ଓଡ଼ିଶା ସରକାରୀ ଡାକ୍ତରଖାନାରେ ମାଗଣା ଚିକିତ୍ସା ଓ ପରୀକ୍ଷା"
      ],
      "prevention": [
        "ବ୍ୟକ୍ତିଗତ ଓ ପରିବେଶ ପରିମଳ ସର୍ବଦା ବଜାୟ ରଖନ୍ତୁ",
        "ସ୍ୱାସ୍ଥ୍ୟ ବିଭାଗର ନିର୍ଦ୍ଦେଶାବଳୀ ପାଳନ କରନ୍ତୁ",
        "ସମୟ ଅନୁଯାୟୀ ଟିକାକରଣ ଓ ସ୍ୱାସ୍ଥ୍ୟ ଯାଞ୍ଚ କରାନ୍ତୁ"
      ],
      "dos": [
        "ଲକ୍ଷଣ ଦେଖାଦେବା ମାତ୍ରେ ଡାକ୍ତରଙ୍କ ସହ ପରାମର୍ଶ କରନ୍ତୁ",
        "ଡାକ୍ତର ଦେଇଥିବା ଔଷଧ କୋର୍ସ ସମ୍ପୂର୍ଣ୍ଣ ଶେଷ କରନ୍ତୁ",
        "ଫୁଟା ପାଣି ଓ ପୁଷ୍ଟିକର ଖାଦ୍ୟ ଖାଆନ୍ତୁ"
      ],
      "donts": [
        "ଡାକ୍ତରଙ୍କ ବିନା ପରାମର୍ଶରେ ମେଡିସିନ୍ ଦୋକାନରୁ ଔଷଧ ଖାଆନ୍ତୁ ନାହିଁ",
        "ଗୁରୁତର ଲକ୍ଷଣ ଥିଲେ ଡାକ୍ତରଖାନା ଯିବାରେ ଡେରି କରନ୍ତୁ ନାହିଁ",
        "ଅପରିଷ୍କାର ଓ ବାସି ଖାଦ୍ୟ ଖାଆନ୍ତୁ ନାହିଁ"
      ],
      "whenToSeeDoctor": [
        "ଲଗାତାର ତେଜ ଜ୍ୱର ଲାଗିରହିଲେ",
        "ନିଶ୍ୱାସ ନେବାରେ କଷ୍ଟ ହେଲେ ବା ଚେତା ହରାଇଲେ",
        "ପାଣି ପିଇ ନପାରିଲେ ବା ବାରମ୍ବାର ବାନ୍ତି ହେଲେ"
      ],
      "faqs": [
        {
          "question": "ଓଡ଼ିଶାରେ ଆମିବିଆସିସ୍ (ଆମାଶୟ ଝାଡ଼ା) ର ଚିକିତ୍ସା ମାଗଣାରେ ମିଳେ କି?",
          "answer": "ହଁ, ନିରାମୟ ଯୋଜନା ଓ ବିଜୁ ସ୍ୱାସ୍ଥ୍ୟ କଲ୍ୟାଣ ଯୋଜନାରେ ସମସ୍ତ ସରକାରୀ ଡାକ୍ତରଖାନାରେ ମାଗଣା ପରୀକ୍ଷା ଓ ଔଷଧ ଉପଲବ୍ଧ।"
        },
        {
          "question": "କେବେ ଡାକ୍ତରଖାନା ଯିବା ଉଚିତ?",
          "answer": "ଗୁରୁତର ଲକ୍ଷଣ ଦେଖାଦେବା ମାତ୍ରେ ତୁରନ୍ତ ଡାକ୍ତରଖାନା ଯିବା ଉଚିତ।"
        }
      ]
    }
  },
  {
    "id": "dis-108-hookworm-roundworm-infection-krumi-",
    "category": "Maternal & Child",
    "severity": "Mild",
    "transmission": "Walking barefoot on infected soil or unwashed hands",
    "en": {
      "name": "Hookworm & Roundworm Infection (Krumi) - Grade 4",
      "overview": "Detailed clinical guidance, prevention, and government health support in Odisha for Hookworm & Roundworm Infection (Krumi).",
      "symptoms": [
        "Primary localized pain, fever, or discomfort",
        "Fatigue and reduced physical stamina",
        "Loss of normal appetite and mild headache",
        "Associated diagnostic clinical signs specific to condition"
      ],
      "causes": [
        "Etiological factors and environmental exposure related to Hookworm & Roundworm Infection (Krumi)",
        "Unfavorable seasonal conditions or unhygienic community environment",
        "Nutritional or metabolic susceptibility factors"
      ],
      "treatments": [
        "Evidence-based pharmacotherapy prescribed by medical officer",
        "Adequate fluid intake, nutritious diet, and supportive care",
        "Free treatment and diagnostic screening available at Odisha CHCs and DHHs"
      ],
      "prevention": [
        "Maintain strict personal, domestic, and water hygiene",
        "Adhere to public health department guidelines and advisories",
        "Timely immunization and regular screening visits"
      ],
      "dos": [
        "Consult a qualified medical officer at early onset of symptoms",
        "Complete the prescribed medical regimen without skipping doses",
        "Maintain clean drinking water and well-balanced nutrition"
      ],
      "donts": [
        "Do not self-medicate or purchase unverified over-the-counter drugs",
        "Do not delay seeking medical care if red flag symptoms emerge",
        "Do not consume unhygienic or contaminated food and water"
      ],
      "whenToSeeDoctor": [
        "High continuous fever not responding to antipyretics",
        "Breathing difficulty, extreme fatigue, or fainting",
        "Inability to eat or drink oral fluids"
      ],
      "faqs": [
        {
          "question": "Is treatment for Hookworm & Roundworm Infection (Krumi) available free in Odisha?",
          "answer": "Yes, under Niramaya scheme and BSKY, free diagnostics and medicines are provided across Odisha government facilities."
        },
        {
          "question": "When should one visit the nearest hospital?",
          "answer": "Visit the hospital at first onset of severe symptoms or if home recovery is slow after 48 hours."
        }
      ]
    },
    "or": {
      "name": "କୃମି ସଂକ୍ରମଣ (ହୁକ୍‌ୱାର୍ମ) (ପର୍ଯ୍ୟାୟ 4)",
      "nativeName": "କୃମି ସଂକ୍ରମଣ (ହୁକ୍‌ୱାର୍ମ)",
      "overview": "ଓଡ଼ିଶାର ଜନସାଧାରଣଙ୍କ ପାଇଁ କୃମି ସଂକ୍ରମଣ (ହୁକ୍‌ୱାର୍ମ) ର ଡାକ୍ତରୀ ମାର୍ଗଦର୍ଶନ, ପ୍ରତିରୋଧ ଓ ସରକାରୀ ସହାୟତା।",
      "symptoms": [
        "ସ୍ଥାନୀୟ ଯନ୍ତ୍ରଣା, ଜ୍ୱର ବା ଅସ୍ୱସ୍ତି ଭାବ",
        "ଦୁର୍ବଳତା ଏବଂ ଶରୀରରେ ଶକ୍ତିର ଅଭାବ",
        "ଭୋକ କମିବା ଏବଂ ମୁଣ୍ଡବିନ୍ଧା",
        "ରୋଗ ସମ୍ପର୍କିତ ସାଧାରଣ ଡାକ୍ତରୀ ଲକ୍ଷଣ"
      ],
      "causes": [
        "କୃମି ସଂକ୍ରମଣ (ହୁକ୍‌ୱାର୍ମ) ସମ୍ପର୍କିତ ପରିବେଶ ଓ ଜୀବାଣୁଜନିତ କାରଣ",
        "ଋତୁକାଳୀନ ପ୍ରତିକୂଳ ପାଗ ବା ଅପରିଷ୍କାର ପରିବେଶ",
        "ପୁଷ୍ଟିହୀନତା ବା ରୋଗ ପ୍ରତିରୋଧକ ଶକ୍ତିର ଅଭାବ"
      ],
      "treatments": [
        "ଡାକ୍ତରଙ୍କ ପରାମର୍ଶ ଅନୁଯାୟୀ ପ୍ରମାଣିତ ଔଷଧ ସେବନ",
        "ପର୍ଯ୍ୟାପ୍ତ ପାଣି ପିଇବା, ପୁଷ୍ଟିକର ଖାଦ୍ୟ ଓ ବିଶ୍ରାମ",
        "ଓଡ଼ିଶା ସରକାରୀ ଡାକ୍ତରଖାନାରେ ମାଗଣା ଚିକିତ୍ସା ଓ ପରୀକ୍ଷା"
      ],
      "prevention": [
        "ବ୍ୟକ୍ତିଗତ ଓ ପରିବେଶ ପରିମଳ ସର୍ବଦା ବଜାୟ ରଖନ୍ତୁ",
        "ସ୍ୱାସ୍ଥ୍ୟ ବିଭାଗର ନିର୍ଦ୍ଦେଶାବଳୀ ପାଳନ କରନ୍ତୁ",
        "ସମୟ ଅନୁଯାୟୀ ଟିକାକରଣ ଓ ସ୍ୱାସ୍ଥ୍ୟ ଯାଞ୍ଚ କରାନ୍ତୁ"
      ],
      "dos": [
        "ଲକ୍ଷଣ ଦେଖାଦେବା ମାତ୍ରେ ଡାକ୍ତରଙ୍କ ସହ ପରାମର୍ଶ କରନ୍ତୁ",
        "ଡାକ୍ତର ଦେଇଥିବା ଔଷଧ କୋର୍ସ ସମ୍ପୂର୍ଣ୍ଣ ଶେଷ କରନ୍ତୁ",
        "ଫୁଟା ପାଣି ଓ ପୁଷ୍ଟିକର ଖାଦ୍ୟ ଖାଆନ୍ତୁ"
      ],
      "donts": [
        "ଡାକ୍ତରଙ୍କ ବିନା ପରାମର୍ଶରେ ମେଡିସିନ୍ ଦୋକାନରୁ ଔଷଧ ଖାଆନ୍ତୁ ନାହିଁ",
        "ଗୁରୁତର ଲକ୍ଷଣ ଥିଲେ ଡାକ୍ତରଖାନା ଯିବାରେ ଡେରି କରନ୍ତୁ ନାହିଁ",
        "ଅପରିଷ୍କାର ଓ ବାସି ଖାଦ୍ୟ ଖାଆନ୍ତୁ ନାହିଁ"
      ],
      "whenToSeeDoctor": [
        "ଲଗାତାର ତେଜ ଜ୍ୱର ଲାଗିରହିଲେ",
        "ନିଶ୍ୱାସ ନେବାରେ କଷ୍ଟ ହେଲେ ବା ଚେତା ହରାଇଲେ",
        "ପାଣି ପିଇ ନପାରିଲେ ବା ବାରମ୍ବାର ବାନ୍ତି ହେଲେ"
      ],
      "faqs": [
        {
          "question": "ଓଡ଼ିଶାରେ କୃମି ସଂକ୍ରମଣ (ହୁକ୍‌ୱାର୍ମ) ର ଚିକିତ୍ସା ମାଗଣାରେ ମିଳେ କି?",
          "answer": "ହଁ, ନିରାମୟ ଯୋଜନା ଓ ବିଜୁ ସ୍ୱାସ୍ଥ୍ୟ କଲ୍ୟାଣ ଯୋଜନାରେ ସମସ୍ତ ସରକାରୀ ଡାକ୍ତରଖାନାରେ ମାଗଣା ପରୀକ୍ଷା ଓ ଔଷଧ ଉପଲବ୍ଧ।"
        },
        {
          "question": "କେବେ ଡାକ୍ତରଖାନା ଯିବା ଉଚିତ?",
          "answer": "ଗୁରୁତର ଲକ୍ଷଣ ଦେଖାଦେବା ମାତ୍ରେ ତୁରନ୍ତ ଡାକ୍ତରଖାନା ଯିବା ଉଚିତ।"
        }
      ]
    }
  },
  {
    "id": "dis-109-scabies-chilkan-khujali-",
    "category": "Dermatology & Skin",
    "severity": "Mild",
    "transmission": "Direct skin-to-skin contact and shared bedding",
    "en": {
      "name": "Scabies (Chilkan / Khujali) - Grade 4",
      "overview": "Detailed clinical guidance, prevention, and government health support in Odisha for Scabies (Chilkan / Khujali).",
      "symptoms": [
        "Primary localized pain, fever, or discomfort",
        "Fatigue and reduced physical stamina",
        "Loss of normal appetite and mild headache",
        "Associated diagnostic clinical signs specific to condition"
      ],
      "causes": [
        "Etiological factors and environmental exposure related to Scabies (Chilkan / Khujali)",
        "Unfavorable seasonal conditions or unhygienic community environment",
        "Nutritional or metabolic susceptibility factors"
      ],
      "treatments": [
        "Evidence-based pharmacotherapy prescribed by medical officer",
        "Adequate fluid intake, nutritious diet, and supportive care",
        "Free treatment and diagnostic screening available at Odisha CHCs and DHHs"
      ],
      "prevention": [
        "Maintain strict personal, domestic, and water hygiene",
        "Adhere to public health department guidelines and advisories",
        "Timely immunization and regular screening visits"
      ],
      "dos": [
        "Consult a qualified medical officer at early onset of symptoms",
        "Complete the prescribed medical regimen without skipping doses",
        "Maintain clean drinking water and well-balanced nutrition"
      ],
      "donts": [
        "Do not self-medicate or purchase unverified over-the-counter drugs",
        "Do not delay seeking medical care if red flag symptoms emerge",
        "Do not consume unhygienic or contaminated food and water"
      ],
      "whenToSeeDoctor": [
        "High continuous fever not responding to antipyretics",
        "Breathing difficulty, extreme fatigue, or fainting",
        "Inability to eat or drink oral fluids"
      ],
      "faqs": [
        {
          "question": "Is treatment for Scabies (Chilkan / Khujali) available free in Odisha?",
          "answer": "Yes, under Niramaya scheme and BSKY, free diagnostics and medicines are provided across Odisha government facilities."
        },
        {
          "question": "When should one visit the nearest hospital?",
          "answer": "Visit the hospital at first onset of severe symptoms or if home recovery is slow after 48 hours."
        }
      ]
    },
    "or": {
      "name": "ଚିଲକାନ୍ ଓ କାଛୁକୁଣ୍ଡିଆ (ସ୍କାବିସ୍) (ପର୍ଯ୍ୟାୟ 4)",
      "nativeName": "ଚିଲକାନ୍ ଓ କାଛୁକୁଣ୍ଡିଆ (ସ୍କାବିସ୍)",
      "overview": "ଓଡ଼ିଶାର ଜନସାଧାରଣଙ୍କ ପାଇଁ ଚିଲକାନ୍ ଓ କାଛୁକୁଣ୍ଡିଆ (ସ୍କାବିସ୍) ର ଡାକ୍ତରୀ ମାର୍ଗଦର୍ଶନ, ପ୍ରତିରୋଧ ଓ ସରକାରୀ ସହାୟତା।",
      "symptoms": [
        "ସ୍ଥାନୀୟ ଯନ୍ତ୍ରଣା, ଜ୍ୱର ବା ଅସ୍ୱସ୍ତି ଭାବ",
        "ଦୁର୍ବଳତା ଏବଂ ଶରୀରରେ ଶକ୍ତିର ଅଭାବ",
        "ଭୋକ କମିବା ଏବଂ ମୁଣ୍ଡବିନ୍ଧା",
        "ରୋଗ ସମ୍ପର୍କିତ ସାଧାରଣ ଡାକ୍ତରୀ ଲକ୍ଷଣ"
      ],
      "causes": [
        "ଚିଲକାନ୍ ଓ କାଛୁକୁଣ୍ଡିଆ (ସ୍କାବିସ୍) ସମ୍ପର୍କିତ ପରିବେଶ ଓ ଜୀବାଣୁଜନିତ କାରଣ",
        "ଋତୁକାଳୀନ ପ୍ରତିକୂଳ ପାଗ ବା ଅପରିଷ୍କାର ପରିବେଶ",
        "ପୁଷ୍ଟିହୀନତା ବା ରୋଗ ପ୍ରତିରୋଧକ ଶକ୍ତିର ଅଭାବ"
      ],
      "treatments": [
        "ଡାକ୍ତରଙ୍କ ପରାମର୍ଶ ଅନୁଯାୟୀ ପ୍ରମାଣିତ ଔଷଧ ସେବନ",
        "ପର୍ଯ୍ୟାପ୍ତ ପାଣି ପିଇବା, ପୁଷ୍ଟିକର ଖାଦ୍ୟ ଓ ବିଶ୍ରାମ",
        "ଓଡ଼ିଶା ସରକାରୀ ଡାକ୍ତରଖାନାରେ ମାଗଣା ଚିକିତ୍ସା ଓ ପରୀକ୍ଷା"
      ],
      "prevention": [
        "ବ୍ୟକ୍ତିଗତ ଓ ପରିବେଶ ପରିମଳ ସର୍ବଦା ବଜାୟ ରଖନ୍ତୁ",
        "ସ୍ୱାସ୍ଥ୍ୟ ବିଭାଗର ନିର୍ଦ୍ଦେଶାବଳୀ ପାଳନ କରନ୍ତୁ",
        "ସମୟ ଅନୁଯାୟୀ ଟିକାକରଣ ଓ ସ୍ୱାସ୍ଥ୍ୟ ଯାଞ୍ଚ କରାନ୍ତୁ"
      ],
      "dos": [
        "ଲକ୍ଷଣ ଦେଖାଦେବା ମାତ୍ରେ ଡାକ୍ତରଙ୍କ ସହ ପରାମର୍ଶ କରନ୍ତୁ",
        "ଡାକ୍ତର ଦେଇଥିବା ଔଷଧ କୋର୍ସ ସମ୍ପୂର୍ଣ୍ଣ ଶେଷ କରନ୍ତୁ",
        "ଫୁଟା ପାଣି ଓ ପୁଷ୍ଟିକର ଖାଦ୍ୟ ଖାଆନ୍ତୁ"
      ],
      "donts": [
        "ଡାକ୍ତରଙ୍କ ବିନା ପରାମର୍ଶରେ ମେଡିସିନ୍ ଦୋକାନରୁ ଔଷଧ ଖାଆନ୍ତୁ ନାହିଁ",
        "ଗୁରୁତର ଲକ୍ଷଣ ଥିଲେ ଡାକ୍ତରଖାନା ଯିବାରେ ଡେରି କରନ୍ତୁ ନାହିଁ",
        "ଅପରିଷ୍କାର ଓ ବାସି ଖାଦ୍ୟ ଖାଆନ୍ତୁ ନାହିଁ"
      ],
      "whenToSeeDoctor": [
        "ଲଗାତାର ତେଜ ଜ୍ୱର ଲାଗିରହିଲେ",
        "ନିଶ୍ୱାସ ନେବାରେ କଷ୍ଟ ହେଲେ ବା ଚେତା ହରାଇଲେ",
        "ପାଣି ପିଇ ନପାରିଲେ ବା ବାରମ୍ବାର ବାନ୍ତି ହେଲେ"
      ],
      "faqs": [
        {
          "question": "ଓଡ଼ିଶାରେ ଚିଲକାନ୍ ଓ କାଛୁକୁଣ୍ଡିଆ (ସ୍କାବିସ୍) ର ଚିକିତ୍ସା ମାଗଣାରେ ମିଳେ କି?",
          "answer": "ହଁ, ନିରାମୟ ଯୋଜନା ଓ ବିଜୁ ସ୍ୱାସ୍ଥ୍ୟ କଲ୍ୟାଣ ଯୋଜନାରେ ସମସ୍ତ ସରକାରୀ ଡାକ୍ତରଖାନାରେ ମାଗଣା ପରୀକ୍ଷା ଓ ଔଷଧ ଉପଲବ୍ଧ।"
        },
        {
          "question": "କେବେ ଡାକ୍ତରଖାନା ଯିବା ଉଚିତ?",
          "answer": "ଗୁରୁତର ଲକ୍ଷଣ ଦେଖାଦେବା ମାତ୍ରେ ତୁରନ୍ତ ଡାକ୍ତରଖାନା ଯିବା ଉଚିତ।"
        }
      ]
    }
  },
  {
    "id": "dis-110-ringworm-fungal-itch-dadru-dad-",
    "category": "Dermatology & Skin",
    "severity": "Mild",
    "transmission": "Fungal spore contact in humid tropical weather",
    "en": {
      "name": "Ringworm & Fungal Itch (Dadru / Dad) - Grade 4",
      "overview": "Detailed clinical guidance, prevention, and government health support in Odisha for Ringworm & Fungal Itch (Dadru / Dad).",
      "symptoms": [
        "Primary localized pain, fever, or discomfort",
        "Fatigue and reduced physical stamina",
        "Loss of normal appetite and mild headache",
        "Associated diagnostic clinical signs specific to condition"
      ],
      "causes": [
        "Etiological factors and environmental exposure related to Ringworm & Fungal Itch (Dadru / Dad)",
        "Unfavorable seasonal conditions or unhygienic community environment",
        "Nutritional or metabolic susceptibility factors"
      ],
      "treatments": [
        "Evidence-based pharmacotherapy prescribed by medical officer",
        "Adequate fluid intake, nutritious diet, and supportive care",
        "Free treatment and diagnostic screening available at Odisha CHCs and DHHs"
      ],
      "prevention": [
        "Maintain strict personal, domestic, and water hygiene",
        "Adhere to public health department guidelines and advisories",
        "Timely immunization and regular screening visits"
      ],
      "dos": [
        "Consult a qualified medical officer at early onset of symptoms",
        "Complete the prescribed medical regimen without skipping doses",
        "Maintain clean drinking water and well-balanced nutrition"
      ],
      "donts": [
        "Do not self-medicate or purchase unverified over-the-counter drugs",
        "Do not delay seeking medical care if red flag symptoms emerge",
        "Do not consume unhygienic or contaminated food and water"
      ],
      "whenToSeeDoctor": [
        "High continuous fever not responding to antipyretics",
        "Breathing difficulty, extreme fatigue, or fainting",
        "Inability to eat or drink oral fluids"
      ],
      "faqs": [
        {
          "question": "Is treatment for Ringworm & Fungal Itch (Dadru / Dad) available free in Odisha?",
          "answer": "Yes, under Niramaya scheme and BSKY, free diagnostics and medicines are provided across Odisha government facilities."
        },
        {
          "question": "When should one visit the nearest hospital?",
          "answer": "Visit the hospital at first onset of severe symptoms or if home recovery is slow after 48 hours."
        }
      ]
    },
    "or": {
      "name": "ଦାଦ୍ରୁ ଓ କାଛୁ (ରିଙ୍ଗୱାର୍ମ) (ପର୍ଯ୍ୟାୟ 4)",
      "nativeName": "ଦାଦ୍ରୁ ଓ କାଛୁ (ରିଙ୍ଗୱାର୍ମ)",
      "overview": "ଓଡ଼ିଶାର ଜନସାଧାରଣଙ୍କ ପାଇଁ ଦାଦ୍ରୁ ଓ କାଛୁ (ରିଙ୍ଗୱାର୍ମ) ର ଡାକ୍ତରୀ ମାର୍ଗଦର୍ଶନ, ପ୍ରତିରୋଧ ଓ ସରକାରୀ ସହାୟତା।",
      "symptoms": [
        "ସ୍ଥାନୀୟ ଯନ୍ତ୍ରଣା, ଜ୍ୱର ବା ଅସ୍ୱସ୍ତି ଭାବ",
        "ଦୁର୍ବଳତା ଏବଂ ଶରୀରରେ ଶକ୍ତିର ଅଭାବ",
        "ଭୋକ କମିବା ଏବଂ ମୁଣ୍ଡବିନ୍ଧା",
        "ରୋଗ ସମ୍ପର୍କିତ ସାଧାରଣ ଡାକ୍ତରୀ ଲକ୍ଷଣ"
      ],
      "causes": [
        "ଦାଦ୍ରୁ ଓ କାଛୁ (ରିଙ୍ଗୱାର୍ମ) ସମ୍ପର୍କିତ ପରିବେଶ ଓ ଜୀବାଣୁଜନିତ କାରଣ",
        "ଋତୁକାଳୀନ ପ୍ରତିକୂଳ ପାଗ ବା ଅପରିଷ୍କାର ପରିବେଶ",
        "ପୁଷ୍ଟିହୀନତା ବା ରୋଗ ପ୍ରତିରୋଧକ ଶକ୍ତିର ଅଭାବ"
      ],
      "treatments": [
        "ଡାକ୍ତରଙ୍କ ପରାମର୍ଶ ଅନୁଯାୟୀ ପ୍ରମାଣିତ ଔଷଧ ସେବନ",
        "ପର୍ଯ୍ୟାପ୍ତ ପାଣି ପିଇବା, ପୁଷ୍ଟିକର ଖାଦ୍ୟ ଓ ବିଶ୍ରାମ",
        "ଓଡ଼ିଶା ସରକାରୀ ଡାକ୍ତରଖାନାରେ ମାଗଣା ଚିକିତ୍ସା ଓ ପରୀକ୍ଷା"
      ],
      "prevention": [
        "ବ୍ୟକ୍ତିଗତ ଓ ପରିବେଶ ପରିମଳ ସର୍ବଦା ବଜାୟ ରଖନ୍ତୁ",
        "ସ୍ୱାସ୍ଥ୍ୟ ବିଭାଗର ନିର୍ଦ୍ଦେଶାବଳୀ ପାଳନ କରନ୍ତୁ",
        "ସମୟ ଅନୁଯାୟୀ ଟିକାକରଣ ଓ ସ୍ୱାସ୍ଥ୍ୟ ଯାଞ୍ଚ କରାନ୍ତୁ"
      ],
      "dos": [
        "ଲକ୍ଷଣ ଦେଖାଦେବା ମାତ୍ରେ ଡାକ୍ତରଙ୍କ ସହ ପରାମର୍ଶ କରନ୍ତୁ",
        "ଡାକ୍ତର ଦେଇଥିବା ଔଷଧ କୋର୍ସ ସମ୍ପୂର୍ଣ୍ଣ ଶେଷ କରନ୍ତୁ",
        "ଫୁଟା ପାଣି ଓ ପୁଷ୍ଟିକର ଖାଦ୍ୟ ଖାଆନ୍ତୁ"
      ],
      "donts": [
        "ଡାକ୍ତରଙ୍କ ବିନା ପରାମର୍ଶରେ ମେଡିସିନ୍ ଦୋକାନରୁ ଔଷଧ ଖାଆନ୍ତୁ ନାହିଁ",
        "ଗୁରୁତର ଲକ୍ଷଣ ଥିଲେ ଡାକ୍ତରଖାନା ଯିବାରେ ଡେରି କରନ୍ତୁ ନାହିଁ",
        "ଅପରିଷ୍କାର ଓ ବାସି ଖାଦ୍ୟ ଖାଆନ୍ତୁ ନାହିଁ"
      ],
      "whenToSeeDoctor": [
        "ଲଗାତାର ତେଜ ଜ୍ୱର ଲାଗିରହିଲେ",
        "ନିଶ୍ୱାସ ନେବାରେ କଷ୍ଟ ହେଲେ ବା ଚେତା ହରାଇଲେ",
        "ପାଣି ପିଇ ନପାରିଲେ ବା ବାରମ୍ବାର ବାନ୍ତି ହେଲେ"
      ],
      "faqs": [
        {
          "question": "ଓଡ଼ିଶାରେ ଦାଦ୍ରୁ ଓ କାଛୁ (ରିଙ୍ଗୱାର୍ମ) ର ଚିକିତ୍ସା ମାଗଣାରେ ମିଳେ କି?",
          "answer": "ହଁ, ନିରାମୟ ଯୋଜନା ଓ ବିଜୁ ସ୍ୱାସ୍ଥ୍ୟ କଲ୍ୟାଣ ଯୋଜନାରେ ସମସ୍ତ ସରକାରୀ ଡାକ୍ତରଖାନାରେ ମାଗଣା ପରୀକ୍ଷା ଓ ଔଷଧ ଉପଲବ୍ଧ।"
        },
        {
          "question": "କେବେ ଡାକ୍ତରଖାନା ଯିବା ଉଚିତ?",
          "answer": "ଗୁରୁତର ଲକ୍ଷଣ ଦେଖାଦେବା ମାତ୍ରେ ତୁରନ୍ତ ଡାକ୍ତରଖାନା ଯିବା ଉଚିତ।"
        }
      ]
    }
  },
  {
    "id": "dis-111-severe-acute-malnutrition-in-children-sam-",
    "category": "Maternal & Child",
    "severity": "High",
    "transmission": "Nutritional deficiency and chronic diarrheal illness",
    "en": {
      "name": "Severe Acute Malnutrition in Children (SAM) - Grade 4",
      "overview": "Detailed clinical guidance, prevention, and government health support in Odisha for Severe Acute Malnutrition in Children (SAM).",
      "symptoms": [
        "Primary localized pain, fever, or discomfort",
        "Fatigue and reduced physical stamina",
        "Loss of normal appetite and mild headache",
        "Associated diagnostic clinical signs specific to condition"
      ],
      "causes": [
        "Etiological factors and environmental exposure related to Severe Acute Malnutrition in Children (SAM)",
        "Unfavorable seasonal conditions or unhygienic community environment",
        "Nutritional or metabolic susceptibility factors"
      ],
      "treatments": [
        "Evidence-based pharmacotherapy prescribed by medical officer",
        "Adequate fluid intake, nutritious diet, and supportive care",
        "Free treatment and diagnostic screening available at Odisha CHCs and DHHs"
      ],
      "prevention": [
        "Maintain strict personal, domestic, and water hygiene",
        "Adhere to public health department guidelines and advisories",
        "Timely immunization and regular screening visits"
      ],
      "dos": [
        "Consult a qualified medical officer at early onset of symptoms",
        "Complete the prescribed medical regimen without skipping doses",
        "Maintain clean drinking water and well-balanced nutrition"
      ],
      "donts": [
        "Do not self-medicate or purchase unverified over-the-counter drugs",
        "Do not delay seeking medical care if red flag symptoms emerge",
        "Do not consume unhygienic or contaminated food and water"
      ],
      "whenToSeeDoctor": [
        "High continuous fever not responding to antipyretics",
        "Breathing difficulty, extreme fatigue, or fainting",
        "Inability to eat or drink oral fluids"
      ],
      "faqs": [
        {
          "question": "Is treatment for Severe Acute Malnutrition in Children (SAM) available free in Odisha?",
          "answer": "Yes, under Niramaya scheme and BSKY, free diagnostics and medicines are provided across Odisha government facilities."
        },
        {
          "question": "When should one visit the nearest hospital?",
          "answer": "Visit the hospital at first onset of severe symptoms or if home recovery is slow after 48 hours."
        }
      ]
    },
    "or": {
      "name": "ଶିଶୁ ଅପପୁଷ୍ଟି (SAM) (ପର୍ଯ୍ୟାୟ 4)",
      "nativeName": "ଶିଶୁ ଅପପୁଷ୍ଟି (SAM)",
      "overview": "ଓଡ଼ିଶାର ଜନସାଧାରଣଙ୍କ ପାଇଁ ଶିଶୁ ଅପପୁଷ୍ଟି (SAM) ର ଡାକ୍ତରୀ ମାର୍ଗଦର୍ଶନ, ପ୍ରତିରୋଧ ଓ ସରକାରୀ ସହାୟତା।",
      "symptoms": [
        "ସ୍ଥାନୀୟ ଯନ୍ତ୍ରଣା, ଜ୍ୱର ବା ଅସ୍ୱସ୍ତି ଭାବ",
        "ଦୁର୍ବଳତା ଏବଂ ଶରୀରରେ ଶକ୍ତିର ଅଭାବ",
        "ଭୋକ କମିବା ଏବଂ ମୁଣ୍ଡବିନ୍ଧା",
        "ରୋଗ ସମ୍ପର୍କିତ ସାଧାରଣ ଡାକ୍ତରୀ ଲକ୍ଷଣ"
      ],
      "causes": [
        "ଶିଶୁ ଅପପୁଷ୍ଟି (SAM) ସମ୍ପର୍କିତ ପରିବେଶ ଓ ଜୀବାଣୁଜନିତ କାରଣ",
        "ଋତୁକାଳୀନ ପ୍ରତିକୂଳ ପାଗ ବା ଅପରିଷ୍କାର ପରିବେଶ",
        "ପୁଷ୍ଟିହୀନତା ବା ରୋଗ ପ୍ରତିରୋଧକ ଶକ୍ତିର ଅଭାବ"
      ],
      "treatments": [
        "ଡାକ୍ତରଙ୍କ ପରାମର୍ଶ ଅନୁଯାୟୀ ପ୍ରମାଣିତ ଔଷଧ ସେବନ",
        "ପର୍ଯ୍ୟାପ୍ତ ପାଣି ପିଇବା, ପୁଷ୍ଟିକର ଖାଦ୍ୟ ଓ ବିଶ୍ରାମ",
        "ଓଡ଼ିଶା ସରକାରୀ ଡାକ୍ତରଖାନାରେ ମାଗଣା ଚିକିତ୍ସା ଓ ପରୀକ୍ଷା"
      ],
      "prevention": [
        "ବ୍ୟକ୍ତିଗତ ଓ ପରିବେଶ ପରିମଳ ସର୍ବଦା ବଜାୟ ରଖନ୍ତୁ",
        "ସ୍ୱାସ୍ଥ୍ୟ ବିଭାଗର ନିର୍ଦ୍ଦେଶାବଳୀ ପାଳନ କରନ୍ତୁ",
        "ସମୟ ଅନୁଯାୟୀ ଟିକାକରଣ ଓ ସ୍ୱାସ୍ଥ୍ୟ ଯାଞ୍ଚ କରାନ୍ତୁ"
      ],
      "dos": [
        "ଲକ୍ଷଣ ଦେଖାଦେବା ମାତ୍ରେ ଡାକ୍ତରଙ୍କ ସହ ପରାମର୍ଶ କରନ୍ତୁ",
        "ଡାକ୍ତର ଦେଇଥିବା ଔଷଧ କୋର୍ସ ସମ୍ପୂର୍ଣ୍ଣ ଶେଷ କରନ୍ତୁ",
        "ଫୁଟା ପାଣି ଓ ପୁଷ୍ଟିକର ଖାଦ୍ୟ ଖାଆନ୍ତୁ"
      ],
      "donts": [
        "ଡାକ୍ତରଙ୍କ ବିନା ପରାମର୍ଶରେ ମେଡିସିନ୍ ଦୋକାନରୁ ଔଷଧ ଖାଆନ୍ତୁ ନାହିଁ",
        "ଗୁରୁତର ଲକ୍ଷଣ ଥିଲେ ଡାକ୍ତରଖାନା ଯିବାରେ ଡେରି କରନ୍ତୁ ନାହିଁ",
        "ଅପରିଷ୍କାର ଓ ବାସି ଖାଦ୍ୟ ଖାଆନ୍ତୁ ନାହିଁ"
      ],
      "whenToSeeDoctor": [
        "ଲଗାତାର ତେଜ ଜ୍ୱର ଲାଗିରହିଲେ",
        "ନିଶ୍ୱାସ ନେବାରେ କଷ୍ଟ ହେଲେ ବା ଚେତା ହରାଇଲେ",
        "ପାଣି ପିଇ ନପାରିଲେ ବା ବାରମ୍ବାର ବାନ୍ତି ହେଲେ"
      ],
      "faqs": [
        {
          "question": "ଓଡ଼ିଶାରେ ଶିଶୁ ଅପପୁଷ୍ଟି (SAM) ର ଚିକିତ୍ସା ମାଗଣାରେ ମିଳେ କି?",
          "answer": "ହଁ, ନିରାମୟ ଯୋଜନା ଓ ବିଜୁ ସ୍ୱାସ୍ଥ୍ୟ କଲ୍ୟାଣ ଯୋଜନାରେ ସମସ୍ତ ସରକାରୀ ଡାକ୍ତରଖାନାରେ ମାଗଣା ପରୀକ୍ଷା ଓ ଔଷଧ ଉପଲବ୍ଧ।"
        },
        {
          "question": "କେବେ ଡାକ୍ତରଖାନା ଯିବା ଉଚିତ?",
          "answer": "ଗୁରୁତର ଲକ୍ଷଣ ଦେଖାଦେବା ମାତ୍ରେ ତୁରନ୍ତ ଡାକ୍ତରଖାନା ଯିବା ଉଚିତ।"
        }
      ]
    }
  },
  {
    "id": "dis-112-iron-deficiency-anemia-in-pregnancy",
    "category": "Maternal & Child",
    "severity": "Moderate",
    "transmission": "Nutritional iron and folate deficiency",
    "en": {
      "name": "Iron Deficiency Anemia in Pregnancy - Grade 4",
      "overview": "Detailed clinical guidance, prevention, and government health support in Odisha for Iron Deficiency Anemia in Pregnancy.",
      "symptoms": [
        "Primary localized pain, fever, or discomfort",
        "Fatigue and reduced physical stamina",
        "Loss of normal appetite and mild headache",
        "Associated diagnostic clinical signs specific to condition"
      ],
      "causes": [
        "Etiological factors and environmental exposure related to Iron Deficiency Anemia in Pregnancy",
        "Unfavorable seasonal conditions or unhygienic community environment",
        "Nutritional or metabolic susceptibility factors"
      ],
      "treatments": [
        "Evidence-based pharmacotherapy prescribed by medical officer",
        "Adequate fluid intake, nutritious diet, and supportive care",
        "Free treatment and diagnostic screening available at Odisha CHCs and DHHs"
      ],
      "prevention": [
        "Maintain strict personal, domestic, and water hygiene",
        "Adhere to public health department guidelines and advisories",
        "Timely immunization and regular screening visits"
      ],
      "dos": [
        "Consult a qualified medical officer at early onset of symptoms",
        "Complete the prescribed medical regimen without skipping doses",
        "Maintain clean drinking water and well-balanced nutrition"
      ],
      "donts": [
        "Do not self-medicate or purchase unverified over-the-counter drugs",
        "Do not delay seeking medical care if red flag symptoms emerge",
        "Do not consume unhygienic or contaminated food and water"
      ],
      "whenToSeeDoctor": [
        "High continuous fever not responding to antipyretics",
        "Breathing difficulty, extreme fatigue, or fainting",
        "Inability to eat or drink oral fluids"
      ],
      "faqs": [
        {
          "question": "Is treatment for Iron Deficiency Anemia in Pregnancy available free in Odisha?",
          "answer": "Yes, under Niramaya scheme and BSKY, free diagnostics and medicines are provided across Odisha government facilities."
        },
        {
          "question": "When should one visit the nearest hospital?",
          "answer": "Visit the hospital at first onset of severe symptoms or if home recovery is slow after 48 hours."
        }
      ]
    },
    "or": {
      "name": "ଗର୍ଭାବସ୍ଥାରେ ରକ୍ତହୀନତା (ପର୍ଯ୍ୟାୟ 4)",
      "nativeName": "ଗର୍ଭାବସ୍ଥାରେ ରକ୍ତହୀନତା",
      "overview": "ଓଡ଼ିଶାର ଜନସାଧାରଣଙ୍କ ପାଇଁ ଗର୍ଭାବସ୍ଥାରେ ରକ୍ତହୀନତା ର ଡାକ୍ତରୀ ମାର୍ଗଦର୍ଶନ, ପ୍ରତିରୋଧ ଓ ସରକାରୀ ସହାୟତା।",
      "symptoms": [
        "ସ୍ଥାନୀୟ ଯନ୍ତ୍ରଣା, ଜ୍ୱର ବା ଅସ୍ୱସ୍ତି ଭାବ",
        "ଦୁର୍ବଳତା ଏବଂ ଶରୀରରେ ଶକ୍ତିର ଅଭାବ",
        "ଭୋକ କମିବା ଏବଂ ମୁଣ୍ଡବିନ୍ଧା",
        "ରୋଗ ସମ୍ପର୍କିତ ସାଧାରଣ ଡାକ୍ତରୀ ଲକ୍ଷଣ"
      ],
      "causes": [
        "ଗର୍ଭାବସ୍ଥାରେ ରକ୍ତହୀନତା ସମ୍ପର୍କିତ ପରିବେଶ ଓ ଜୀବାଣୁଜନିତ କାରଣ",
        "ଋତୁକାଳୀନ ପ୍ରତିକୂଳ ପାଗ ବା ଅପରିଷ୍କାର ପରିବେଶ",
        "ପୁଷ୍ଟିହୀନତା ବା ରୋଗ ପ୍ରତିରୋଧକ ଶକ୍ତିର ଅଭାବ"
      ],
      "treatments": [
        "ଡାକ୍ତରଙ୍କ ପରାମର୍ଶ ଅନୁଯାୟୀ ପ୍ରମାଣିତ ଔଷଧ ସେବନ",
        "ପର୍ଯ୍ୟାପ୍ତ ପାଣି ପିଇବା, ପୁଷ୍ଟିକର ଖାଦ୍ୟ ଓ ବିଶ୍ରାମ",
        "ଓଡ଼ିଶା ସରକାରୀ ଡାକ୍ତରଖାନାରେ ମାଗଣା ଚିକିତ୍ସା ଓ ପରୀକ୍ଷା"
      ],
      "prevention": [
        "ବ୍ୟକ୍ତିଗତ ଓ ପରିବେଶ ପରିମଳ ସର୍ବଦା ବଜାୟ ରଖନ୍ତୁ",
        "ସ୍ୱାସ୍ଥ୍ୟ ବିଭାଗର ନିର୍ଦ୍ଦେଶାବଳୀ ପାଳନ କରନ୍ତୁ",
        "ସମୟ ଅନୁଯାୟୀ ଟିକାକରଣ ଓ ସ୍ୱାସ୍ଥ୍ୟ ଯାଞ୍ଚ କରାନ୍ତୁ"
      ],
      "dos": [
        "ଲକ୍ଷଣ ଦେଖାଦେବା ମାତ୍ରେ ଡାକ୍ତରଙ୍କ ସହ ପରାମର୍ଶ କରନ୍ତୁ",
        "ଡାକ୍ତର ଦେଇଥିବା ଔଷଧ କୋର୍ସ ସମ୍ପୂର୍ଣ୍ଣ ଶେଷ କରନ୍ତୁ",
        "ଫୁଟା ପାଣି ଓ ପୁଷ୍ଟିକର ଖାଦ୍ୟ ଖାଆନ୍ତୁ"
      ],
      "donts": [
        "ଡାକ୍ତରଙ୍କ ବିନା ପରାମର୍ଶରେ ମେଡିସିନ୍ ଦୋକାନରୁ ଔଷଧ ଖାଆନ୍ତୁ ନାହିଁ",
        "ଗୁରୁତର ଲକ୍ଷଣ ଥିଲେ ଡାକ୍ତରଖାନା ଯିବାରେ ଡେରି କରନ୍ତୁ ନାହିଁ",
        "ଅପରିଷ୍କାର ଓ ବାସି ଖାଦ୍ୟ ଖାଆନ୍ତୁ ନାହିଁ"
      ],
      "whenToSeeDoctor": [
        "ଲଗାତାର ତେଜ ଜ୍ୱର ଲାଗିରହିଲେ",
        "ନିଶ୍ୱାସ ନେବାରେ କଷ୍ଟ ହେଲେ ବା ଚେତା ହରାଇଲେ",
        "ପାଣି ପିଇ ନପାରିଲେ ବା ବାରମ୍ବାର ବାନ୍ତି ହେଲେ"
      ],
      "faqs": [
        {
          "question": "ଓଡ଼ିଶାରେ ଗର୍ଭାବସ୍ଥାରେ ରକ୍ତହୀନତା ର ଚିକିତ୍ସା ମାଗଣାରେ ମିଳେ କି?",
          "answer": "ହଁ, ନିରାମୟ ଯୋଜନା ଓ ବିଜୁ ସ୍ୱାସ୍ଥ୍ୟ କଲ୍ୟାଣ ଯୋଜନାରେ ସମସ୍ତ ସରକାରୀ ଡାକ୍ତରଖାନାରେ ମାଗଣା ପରୀକ୍ଷା ଓ ଔଷଧ ଉପଲବ୍ଧ।"
        },
        {
          "question": "କେବେ ଡାକ୍ତରଖାନା ଯିବା ଉଚିତ?",
          "answer": "ଗୁରୁତର ଲକ୍ଷଣ ଦେଖାଦେବା ମାତ୍ରେ ତୁରନ୍ତ ଡାକ୍ତରଖାନା ଯିବା ଉଚିତ।"
        }
      ]
    }
  }
];
