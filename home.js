// for username on navbar
const uname = localStorage.getItem('username');
document.getElementById("name").innerText = `${uname}`;

const quizData = [
{
   // 1 
   question: {
   en: "Have you noticed any changes in your vision lately, such as blurred vision or difficulty seeing clearly?",
   hi: "क्या आपने हाल ही में अपनी दृष्टि में कोई बदलाव देखा है, जैसे धुंधली दृष्टि या स्पष्ट रूप से देखने में कठिनाई?",
   ml: "ഈയിടെയായി നിങ്ങളുടെ കാഴ്ചയിൽ മങ്ങിയ കാഴ്ച അല്ലെങ്കിൽ വ്യക്തമായി കാണാനുള്ള ബുദ്ധിമുട്ട് പോലുള്ള എന്തെങ്കിലും മാറ്റങ്ങൾ നിങ്ങൾ ശ്രദ്ധിച്ചിട്ടുണ്ടോ?",
   ta: "மங்கலான பார்வை அல்லது தெளிவாகப் பார்ப்பதில் சிரமம் போன்ற உங்கள் பார்வையில் ஏதேனும் மாற்றங்களை சமீபத்தில் கவனித்தீர்களா?"
  },
  options: [
      { en: "Yes", hi: "हाँ", ml: "ഉണ്ട്", ta: "ஆம்" },
      { en: "No", hi: "नहीं", ml: "ഇല്ല", ta: "இல்லை" }
  ],
  correctAnswer: 1 // Index of the correct option
},
{
  // 2
  question: {
      en: "Do you experience any floaters or spots in your vision?",
      hi: "क्या आपको अपनी दृष्टि में कोई फ्लोटर्स या धब्बे का अनुभव होता है?",
      ml: "നിങ്ങളുടെ കാഴ്ചയിൽ എന്തെങ്കിലും ഫ്ലോട്ടറുകളും പാടുകളും അനുഭവപ്പെടുന്നുണ്ടോ?",
      ta: "உங்கள் பார்வையில் ஏதேனும் மிதவைகள் அல்லது புள்ளிகளை நீங்கள் அனுபவிக்கிறீர்களா?"
  },
  options: [
      { en: "Yes", hi: "हाँ", ml: "ഉണ്ട്", ta: "ஆம்" },
      { en: "No", hi: "नहीं", ml: "ഇല്ല", ta: "இல்லை" }
  ],
  correctAnswer: 1
},
{
  // 3
  question: {
      en: "Have you noticed any dark areas or blank spots in your vision?",
      hi: "क्या आपने अपनी दृष्टि में कोई अंधेरा क्षेत्र या रिक्त स्थान देखा है?",
      ml: "നിങ്ങളുടെ കാഴ്ചയിൽ ഏതെങ്കിലും ഇരുണ്ട പ്രദേശങ്ങളോ ശൂന്യമായ പാടുകളോ നിങ്ങൾ ശ്രദ്ധിച്ചിട്ടുണ്ടോ?",
      ta: "உங்கள் பார்வையில் ஏதேனும் இருண்ட பகுதிகள் அல்லது வெற்று புள்ளிகளை நீங்கள் கவனித்தீர்களா?"
  },
  options: [
      { en: "Yes", hi: "हाँ", ml: "ഉണ്ട്", ta: "ஆம்" },
      { en: "No", hi: "नहीं", ml: "ഇല്ല", ta: "இல்லை" }
  ],
  correctAnswer: 1
},
{
  // 4
  question: {
      en: "Do you have trouble seeing at night or in dim light?",
      hi: "क्या आपको रात में या कम रोशनी में देखने में परेशानी होती है?",
      ml: "നിങ്ങൾക്ക് രാത്രിയിലോ മങ്ങിയ വെളിച്ചത്തിലോ കാണാൻ ബുദ്ധിമുട്ടുണ്ടോ?",
      ta: "இரவில் அல்லது மங்கலான வெளிச்சத்தில் பார்ப்பதில் சிக்கல் உள்ளதா?"
  },
  options: [
      { en: "Yes", hi: "हाँ", ml: "ഉണ്ട്", ta: "ஆம்" },
      { en: "No", hi: "नहीं", ml: "ഇല്ല", ta: "இல்லை" }
  ],
  correctAnswer: 1
},
{
  // 5
  question: {
      en: "Has your vision become distorted, as if objects appear wavy or misshapen?",
      hi: "क्या आपकी दृष्टि विकृत हो गई है, जैसे वस्तुएँ लहरदार या विकृत दिखाई देती हैं?",
      ml: "വസ്‌തുക്കൾ അലയടിക്കുന്നതോ രൂപഭേദം സംഭവിക്കുന്നതോ പോലെ നിങ്ങളുടെ കാഴ്ച വികലമായോ?",
      ta: "பொருள்கள் அலை அலையாகவோ அல்லது தவறான வடிவிலோ தோன்றுவது போல் உங்கள் பார்வை சிதைந்துவிட்டதா?"
  },
  options: [
      { en: "Yes", hi: "हाँ", ml: "ഉണ്ട്", ta: "ஆம்" },
      { en: "No", hi: "नहीं", ml: "ഇല്ല", ta: "இல்லை" }
  ],
  correctAnswer: 1
},
{
  // 6
  question: {
      en: "Do you experience any fluctuations in your vision, where it seems to come and go?",
      hi: "क्या आप अपनी दृष्टि में किसी उतार-चढ़ाव का अनुभव करते हैं, जहां वह आती-जाती रहती है",
      ml: "നിങ്ങളുടെ കാഴ്ചയിൽ എന്തെങ്കിലും ഏറ്റക്കുറച്ചിലുകൾ അനുഭവപ്പെടുന്നുണ്ടോ, അത് വന്ന് പോകുന്നതായി തോന്നുന്നു",
      ta: "உங்கள் பார்வையில் ஏதேனும் ஏற்ற இறக்கங்களை நீங்கள் அனுபவிக்கிறீர்களா, அது வந்து போவது போல் தோன்றும்"
  },
  options: [
      { en: "Yes", hi: "हाँ", ml: "ഉണ്ട്", ta: "ஆம்" },
      { en: "No", hi: "नहीं", ml: "ഇല്ല", ta: "இல்லை" }
  ],
  correctAnswer: 1
},
{
  // 7
  question: {
      en: "Have you noticed any changes in your color vision?",
      hi: "क्या आपने अपनी रंग दृष्टि में कोई परिवर्तन देखा है?",
      ml: "നിങ്ങളുടെ വർണ്ണ കാഴ്ചയിൽ എന്തെങ്കിലും മാറ്റങ്ങൾ നിങ്ങൾ ശ്രദ്ധിച്ചിട്ടുണ്ടോ?",
      ta: "உங்கள் வண்ண பார்வையில் ஏதேனும் மாற்றங்களை நீங்கள் கவனித்தீர்களா?"
  },
  options: [
      { en: "Yes", hi: "हाँ", ml: "ഉണ്ട്", ta: "ஆம்" },
      { en: "No", hi: "नहीं", ml: "ഇല്ല", ta: "இல்லை" }
  ],
  correctAnswer: 1
},
{
  // 8
  question: {
      en: "Do you experience any eye pain or pressure?",
      hi: "क्या आपको आंखों में दर्द या दबाव का अनुभव होता है?",
      ml: "നിങ്ങൾക്ക് എന്തെങ്കിലും കണ്ണ് വേദനയോ സമ്മർദ്ദമോ അനുഭവപ്പെടുന്നുണ്ടോ?",
      ta: "நீங்கள் ஏதேனும் கண் வலி அல்லது அழுத்தத்தை அனுபவிக்கிறீர்களா?"
  },
  options: [
      { en: "Yes", hi: "हाँ", ml: "ഉണ്ട്", ta: "ஆம்" },
      { en: "No", hi: "नहीं", ml: "ഇല്ല", ta: "இல்லை" }
  ],
  correctAnswer: 1
},
{
  // 9
  question: {
      en: "Do your eyes feel tired or strained, especially after reading or using a computer?",
      hi: "क्या आपकी आंखें थकी हुई या तनावग्रस्त महसूस करती हैं, खासकर पढ़ने या कंप्यूटर का उपयोग करने के बाद?",
      ml: "ചുനിങ്ങളുടെ കണ്ണുകൾക്ക് ക്ഷീണമോ ആയാസമോ അനുഭവപ്പെടുന്നുണ്ടോ, പ്രത്യേകിച്ച് വായിക്കുമ്പോഴോ കമ്പ്യൂട്ടർ ഉപയോഗിക്കുമ്പോഴോ?",
      ta: "குறிப்பாகப் படித்த பிறகு அல்லது கணினியைப் பயன்படுத்திய பிறகு உங்கள் கண்கள் சோர்வாகவோ அல்லது சோர்வாகவோ உணர்கிறதா?"
  },
  options: [
      { en: "Yes", hi: "हाँ", ml: "ഉണ്ട്", ta: "ஆம்" },
      { en: "No", hi: "नहीं", ml: "ഇല്ല", ta: "இல்லை" }
  ],
  correctAnswer: 1
},
{
  // 10
  question: {
      en: "Are your eyes sensitive to light?",
      hi: "क्या आपकी आंखें प्रकाश के प्रति संवेदनशील हैं?",
      ml: "നിങ്ങളുടെ കണ്ണുകൾ പ്രകാശത്തോട് സംവേദനക്ഷമതയുള്ളതാണോ?",
      ta: "உங்கள் கண்கள் ஒளியை உணர்கின்றனவா?"
  },
  options: [
      { en: "Yes", hi: "हाँ", ml: "ഉണ്ട്", ta: "ஆம்" },
      { en: "No", hi: "नहीं", ml: "ഇല്ല", ta: "இல்லை" }
  ],
  correctAnswer: 1
},
{
  // 11
  question: {
      en: "Have you experienced any sudden vision loss or blackouts?",
      hi: "क्या आपको अचानक दृष्टि हानि या अंधकार का अनुभव हुआ है?",
      ml: "നിങ്ങൾക്ക് പെട്ടെന്ന് കാഴ്ച നഷ്ടപ്പെടുകയോ കറുപ്പ് വീഴുകയോ ചെയ്തിട്ടുണ്ടോ?",
      ta: "உங்களுக்கு ஏதேனும் திடீர் பார்வை இழப்பு அல்லது இருட்டடிப்பு ஏற்பட்டதா?"
  },
  options: [
      { en: "Yes", hi: "हाँ", ml: "ഉണ്ട്", ta: "ஆம்" },
      { en: "No", hi: "नहीं", ml: "ഇല്ല", ta: "இல்லை" }
  ],
  correctAnswer: 1
},
{
  // 12
  question: {
      en: "Do you have any headaches that you attribute to your eyes?",
      hi: "क्या आपको कोई सिरदर्द है जिसका कारण आप अपनी आँखों को मानते हैं?",
      ml: "നിങ്ങളുടെ കണ്ണുകൾക്ക് കാരണമാകുന്ന എന്തെങ്കിലും തലവേദനയുണ്ടോ?",
      ta: "உங்கள் கண்களுக்குக் காரணமான தலைவலி ஏதேனும் உள்ளதா?"
  },
  options: [
      { en: "Yes", hi: "हाँ", ml: "ഉണ്ട്", ta: "ஆம்" },
      { en: "No", hi: "नहीं", ml: "ഇല്ല", ta: "இல்லை" }
  ],
  correctAnswer: 1
},
{
  // 13
  question: {
      en: "Have you noticed any changes in your peripheral vision?",
      hi: "क्या आपने अपनी परिधीय दृष्टि में कोई परिवर्तन देखा है?",
      ml: "നിങ്ങളുടെ പെരിഫറൽ കാഴ്ചയിൽ എന്തെങ്കിലും മാറ്റങ്ങൾ നിങ്ങൾ ശ്രദ്ധിച്ചിട്ടുണ്ടോ?",
      ta: "உங்கள் புறப் பார்வையில் ஏதேனும் மாற்றங்களை நீங்கள் கவனித்தீர்களா?"
  },
  options: [
      { en: "Yes", hi: "हाँ", ml: "ഉണ്ട്", ta: "ஆம்" },
      { en: "No", hi: "नहीं", ml: "ഇല്ല", ta: "இல்லை" }
  ],
  correctAnswer: 1
},
{
  // 14
  question: {
      en: "Do you have any difficulty with reading or other close-up tasks?",
      hi: "क्या आपको पढ़ने या अन्य क्लोज-अप कार्यों में कोई कठिनाई होती है?",
      ml: "വായനയിലോ മറ്റ് ക്ലോസപ്പ് ജോലികളിലോ നിങ്ങൾക്ക് എന്തെങ്കിലും ബുദ്ധിമുട്ടുണ്ടോ?",
      ta: "வாசிப்பு அல்லது மற்ற நெருக்கமான பணிகளில் உங்களுக்கு ஏதேனும் சிரமம் உள்ளதா?"
  },
  options: [
      { en: "Yes", hi: "हाँ", ml: "ഉണ്ട്", ta: "ஆம்" },
      { en: "No", hi: "नहीं", ml: "ഇല്ല", ta: "இல்லை" }
  ],
  correctAnswer: 1
},
{
  // 15
  question: {
      en: "Have you had any previous eye exams or been diagnosed with any eye conditions?",
      hi: "क्या आपकी आंखों की कोई पिछली जांच हुई है या आपको किसी आंख की समस्या का पता चला है?",
      ml: "നിങ്ങൾ മുമ്പ് എന്തെങ്കിലും നേത്ര പരിശോധന നടത്തിയിട്ടുണ്ടോ അല്ലെങ്കിൽ ഏതെങ്കിലും നേത്രരോഗങ്ങൾ കണ്ടെത്തിയിട്ടുണ്ടോ?",
      ta: "நீங்கள் முன்பு ஏதேனும் கண் பரிசோதனை செய்திருக்கிறீர்களா அல்லது ஏதேனும் கண் நோய் கண்டறியப்பட்டதா?"
  },
  options: [
      { en: "Yes", hi: "हाँ", ml: "ഉണ്ട്", ta: "ஆம்" },
      { en: "No", hi: "नहीं", ml: "ഇല്ല", ta: "இல்லை" }
  ],
  correctAnswer: 1
}
];

let currentQuestionIndex = 0;
let score = 0;
let selectedLanguage = "en"; // Default language

// Start the quiz
function startQuiz() {
selectedLanguage = document.getElementById("languageSelect").value;
document.getElementById("quizContent").style.display = "block";
document.querySelector("select").style.display = "none";
document.querySelector("button").style.display = "none";
loadQuestion();
}

function loadQuestion() {
const currentQuestionData = quizData[currentQuestionIndex];
console.log("Loading question", currentQuestionIndex + 1);  // Debug line to track question loading

// Display the question in the selected language
document.getElementById("question").innerText = currentQuestionData.question[selectedLanguage];

// Display the options in the selected language
const options = document.querySelectorAll(".option");
currentQuestionData.options.forEach((option, index) => {
  options[index].innerText = option[selectedLanguage];
});
}

function selectAnswer(answerIndex) {
if (answerIndex === quizData[currentQuestionIndex].correctAnswer) {
  score++;
}
currentQuestionIndex++;
if (currentQuestionIndex < quizData.length) {
  loadQuestion();
} else {
  quizEnd();
}
}

function quizEnd() {
// Save the score to localStorage
localStorage.setItem("quizScore", score);

// Redirect to the results page
setTimeout(() => {
  window.location.href = "home2.html";
}, 1000); // Redirect after 1 seconds
}

// Function for logging out
function logout() {
  localStorage.removeItem('username');
  window.location.href = 'index.html';
}
