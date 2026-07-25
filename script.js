// ---------------------------------------------------------------------------
// EDIT THESE — your WhatsApp number (with country code, no + or spaces) and message
// ---------------------------------------------------------------------------
const WHATSAPP_NUMBER = "923001234567"; // e.g. 92 for Pakistan + number, no leading 0
const WHATSAPP_MESSAGE = {
  en: "Assalamualaikum! I'd love to confirm my attendance at your wedding. 🌸",
  ur: "السلام علیکم! میں آپ کی شادی میں شرکت کی تصدیق کرنا چاہتا/چاہتی ہوں۔ 🌸",
};

// ---------------------------------------------------------------------------
// Translations
// ---------------------------------------------------------------------------
const translations = {
  en: {
    "hero.eyebrow": "Together with their families",
    "hero.bride": "Sama Rafaqat",
    "hero.groom": "Asad Ali",
    "hero.date": "30 October — 1 November 2026",
    "hero.tagline": "request the honour of your presence",
    "mehndi.title": "Mehndi",
    "mehndi.date": "Friday, 30 October 2026",
    "mehndi.time": "6:00 PM Onwards",
    "mehndi.venue": "Narrowal",
    "barat.title": "Barat",
    "barat.date": "Saturday, 31 October 2026",
    "barat.time": "7:00 PM Onwards",
    "barat.venue": "Narrowal",
    "walima.title": "Walima",
    "walima.date": "Sunday, 1 November 2026",
    "walima.time": "8:00 PM Onwards",
    "walima.venue": "Narrowal",
    "rsvp.text": "We would be honoured to celebrate with you",
    "rsvp.button": "Send RSVP on WhatsApp",
    "footer.text": "With love, Sama & Asad",
  },
  ur: {
    "hero.eyebrow": "دونوں خاندانوں کی طرف سے",
    "hero.bride": "ثمہ رفاقت",
    "hero.groom": "اسد علی",
    "hero.date": "30 اکتوبر — 1 نومبر 2026",
    "hero.tagline": "آپ کی تشریف آوری کی دعوت دیتے ہیں",
    "mehndi.title": "مہندی",
    "mehndi.date": "جمعہ، 30 اکتوبر 2026",
    "mehndi.time": "شام 6 بجے سے",
    "mehndi.venue": "نارووال",
    "barat.title": "بارات",
    "barat.date": "ہفتہ، 31 اکتوبر 2026",
    "barat.time": "شام 7 بجے سے",
    "barat.venue": "نارووال",
    "walima.title": "ولیمہ",
    "walima.date": "اتوار، 1 نومبر 2026",
    "walima.time": "رات 8 بجے سے",
    "walima.venue": "نارووال",
    "rsvp.text": "آپ کی شرکت ہمارے لیے باعثِ اعزاز ہوگی",
    "rsvp.button": "واٹس ایپ پر آر ایس وی پی بھیجیں",
    "footer.text": "محبت کے ساتھ، ثمہ اور اسد",
  },
};

const STORAGE_KEY = "invitation-lang";

function applyLanguage(lang) {
  document.body.setAttribute("data-lang", lang);
  document.documentElement.setAttribute("lang", lang);
  document.documentElement.setAttribute("dir", lang === "ur" ? "rtl" : "ltr");

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    const value = translations[lang][key];
    if (value !== undefined) el.textContent = value;
  });

  document.getElementById("btn-en").classList.toggle("active", lang === "en");
  document.getElementById("btn-ur").classList.toggle("active", lang === "ur");

  updateWhatsappLink(lang);
  localStorage.setItem(STORAGE_KEY, lang);
}

function updateWhatsappLink(lang) {
  const link = document.getElementById("whatsapp-btn");
  const message = encodeURIComponent(WHATSAPP_MESSAGE[lang] || WHATSAPP_MESSAGE.en);
  link.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
}

document.getElementById("btn-en").addEventListener("click", () => applyLanguage("en"));
document.getElementById("btn-ur").addEventListener("click", () => applyLanguage("ur"));

const savedLang = localStorage.getItem(STORAGE_KEY);
applyLanguage(savedLang === "ur" ? "ur" : "en");
