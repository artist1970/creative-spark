/* ===========================================================
🌸 Aurora Language Refinement Core v8.1 — Full Sovereign Pipeline
Grammar • Flow • Thesaurus • Metaphor • Rhythm • Mood • Cohesion
=========================================================== */

(function (global) {
  console.log("Aurora v8.1 — Full Language Refinement Pipeline Loaded");

  /* ===========================================================
    Module 1: Emotion Normalization
  ============================================================ */
  function normalizeEmotion(text) {
    const emotionMap = {
      happy: "happiness",
      sad: "sadness",
      angry: "anger",
      lonely: "solitude",
      brave: "courage",
      calm: "serenity",
      peaceful: "peace",
      hopeful: "hope",
      joyful: "joy",
      melancholy: "melancholy",
      loving: "love"
    };
    for (const [k, v] of Object.entries(emotionMap)) {
      text = text.replace(new RegExp("\\b" + k + "\\b", "gi"), v);
    }
    return text;
  }

  /* ===========================================================
    Module 2: Grammar & Article Correction
  ============================================================ */
  function correctGrammar(text) {
    text = text.replace(/\ba ([aeiou])/gi, "an $1");
    text = text.replace(/\s{2,}/g, " ").trim();
    text = text.charAt(0).toUpperCase() + text.slice(1);
    if (!/[.!?]$/.test(text)) text += ".";
    return text;
  }

  /* ===========================================================
    Module 3: Full Thesaurus Replacement (Tiered)
  ============================================================ */
  const thesaurus = {
    happy: ["joyful", "elated", "ecstatic", "ebullient"],
    sad: ["melancholy", "mournful", "heartbroken", "desolate"],
    big: ["vast", "immense", "colossal", "expansive"],
    small: ["delicate", "petite", "modest", "compact"],
    fast: ["swift", "fleet", "rapid", "brisk"],
    slow: ["gentle", "unhurried", "measured", "leisurely"],
    bright: ["radiant", "luminous", "vivid", "shimmering"],
    dark: ["shadowed", "gloomy", "dim", "murky"],
    calm: ["serene", "tranquil", "peaceful", "placid"]
  };

  function replaceWithThesaurus(text, tier = 0) {
    for (const [word, synonyms] of Object.entries(thesaurus)) {
      const replacement = synonyms[tier] || synonyms[0];
      text = text.replace(new RegExp("\\b" + word + "\\b", "gi"), replacement);
    }
    return text;
  }

  /* ===========================================================
    Module 4: Metaphors & Imagery
  ============================================================ */
  const extendedMetaphorBank = {
    sun: [
      "a molten gold coin spilling across the sky",
      "a fiery orb painting the horizon",
      "a blazing lantern lighting the world"
    ],
    moon: [
      "a silver sentinel watching over the night",
      "a pale pearl floating in darkness",
      "a quiet lantern in the sky"
    ],
    water: [
      "liquid crystal flowing like silk",
      "a mirrored veil reflecting the heavens",
      "a winding silver ribbon"
    ],
    girl: [
      "a blossom swaying in the wind",
      "a star dancing in sunlight",
      "a delicate spirit among the shadows"
    ],
    happy: [
      "radiating joy like sunlight through leaves",
      "bubbling with delight like a spring brook",
      "glowing with an inner warmth"
    ],
    calm: [
      "serene as a still lake at dawn",
      "peaceful as a quiet forest glade",
      "tranquil like mist over rolling hills"
    ],
    saw: [
      "gazed upon with wonder",
      "beheld as if enchanted",
      "watched with rapt attention"
    ],
    ran: [
      "darted like a lightning bolt",
      "flowed swiftly like a river",
      "bounded with unrestrained energy"
    ],
    felt: [
      "was enveloped in",
      "experienced the warmth of",
      "was touched by"
    ],
    smiled: [
      "bloomed like a flower in sunlight",
      "shone with an inner radiance",
      "spread joy as sunlight through leaves"
    ],
    "bright sun": [
      "the sun blazing like a golden forge",
      "a radiant orb spilling molten light",
      "a beacon of gold illuminating the horizon"
    ],
    "dark forest": [
      "a shadowed cathedral of ancient trees",
      "a mysterious realm cloaked in gloom",
      "a velvet expanse of whispering shadows"
    ],
    "calm lake": [
      "a mirror of tranquility reflecting the sky",
      "a still pool holding the world’s secrets",
      "a glassy expanse untouched by wind"
    ]
  };

  function applyExtendedMetaphors(text) {
    const phrases = Object.keys(extendedMetaphorBank).filter(k => k.includes(" "));
    phrases.forEach(phrase => {
      const replacement = extendedMetaphorBank[phrase][Math.floor(Math.random() * extendedMetaphorBank[phrase].length)];
      text = text.replace(new RegExp("\\b" + phrase + "\\b", "gi"), replacement);
    });
    const singles = Object.keys(extendedMetaphorBank).filter(k => !k.includes(" "));
    singles.forEach(word => {
      const replacement = extendedMetaphorBank[word][Math.floor(Math.random() * extendedMetaphorBank[word].length)];
      text = text.replace(new RegExp("\\b" + word + "\\b", "gi"), replacement);
    });
    return text;
  }

  /* ===========================================================
    Module 5: Rhythm & Alliteration
  ============================================================ */
  function countSyllables(word) {
    word = word.toLowerCase();
    if (word.length <= 3) return 1;
    const vowels = word.match(/[aeiouy]+/g);
    return vowels ? vowels.length : 1;
  }

  function adjustSentenceRhythm(text) {
    return text.replace(/(.{60,}?)(,|;| and | but )/g, "$1. ");
  }

  function enhanceAlliteration(sentence) {
    const words = sentence.split(/\s+/);
    if (words.length < 3) return sentence;
    const firstLetter = words[0][0].toLowerCase();
    const bank = {
      a: ["amazing", "aurora", "angelic", "azure"],
      b: ["blissful", "bright", "bountiful", "brilliant"],
      c: ["calm", "crystal", "celestial", "charming"],
      d: ["delicate", "dreamy", "dazzling", "deep"],
      e: ["elegant", "ethereal", "enchanting", "endless"],
      f: ["flowing", "faint", "fiery", "fleeting"],
      g: ["gentle", "glowing", "graceful", "golden"],
      h: ["heavenly", "harmonious", "hushed", "hallowed"],
      i: ["illuminated", "infinite", "iridescent", "inspiring"]
    };
    for (let i = 1; i < words.length; i++) {
      if (bank[firstLetter] && Math.random() < 0.3) {
        words[i] = bank[firstLetter][Math.floor(Math.random() * bank[firstLetter].length)];
      }
    }
    return words.join(" ");
  }

  function applyRhythmAndAlliteration(text) {
    text = adjustSentenceRhythm(text);
    const sentences = text.split(/([.!?])/g).filter(s => s.trim() !== "");
    for (let i = 0; i < sentences.length; i += 2) {
      sentences[i] = enhanceAlliteration(sentences[i]);
    }
    return sentences.join("");
  }

  /* ===========================================================
    Module 6: Mood & Stylistic Cohesion
  ============================================================ */
  const moodLexicon = {
    happiness: 1,
    joy: 1,
    elated: 1,
    blissful: 1,
    radiant: 1,
    serene: 0.9,
    calm: 0.8,
    hope: 0.8,
    love: 1,
    peaceful: 0.9,
    melancholy: -0.8,
    sad: -0.9,
    lonely: -0.7,
    desolate: -1,
    gloomy: -0.8,
    shadowed: -0.6,
    anger: -1
  };

  function analyzeParagraphMood(paragraph) {
    const words = paragraph.toLowerCase().match(/\b\w+\b/g) || [];
    if (words.length === 0) return 0;
    let total = 0;
    words.forEach(word => {
      if (moodLexicon[word]) total += moodLexicon[word];
    });
    return total / words.length;
  }

  function enforceParagraphMood(paragraph) {
    const moodScore = analyzeParagraphMood(paragraph);
    const positives = ["joyful", "elated", "radiant", "blissful", "serene", "peaceful"];
    const negatives = ["melancholy", "gloomy", "shadowed", "desolate", "sad"];
    const words = paragraph.split(/\s+/);
    return words
      .map(word => {
        const clean = word.replace(/[.,!?]/g, "");
        if (moodScore > 0 && negatives.includes(clean))
          return positives[Math.floor(Math.random() * positives.length)];
        if (moodScore < 0 && positives.includes(clean))
          return negatives[Math.floor(Math.random() * negatives.length)];
        return word;
      })
      .join(" ");
  }

  function harmonizeStylisticCohesion(paragraph) {
    const moodScore = analyzeParagraphMood(paragraph);
    if (moodScore > 0.5) paragraph = applyRhythmAndAlliteration(paragraph);
    if (moodScore < -0.5) paragraph = paragraph.replace(/(like|as)\s[\w\s]+/g, "");
    return paragraph;
  }

  function applyMoodConsistency(paragraph) {
    paragraph = enforceParagraphMood(paragraph);
    paragraph = harmonizeStylisticCohesion(paragraph);
    return paragraph;
  }

  /* ===========================================================
    Aurora v8.1 Main Entry Point
  ============================================================ */
  function auroraRefineV8Complete(text, options = { tier: 0, mood: "neutral" }) {
    text = normalizeEmotion(text);
    text = correctGrammar(text);
    text = replaceWithThesaurus(text, options.tier);
    text = applyExtendedMetaphors(text);
    text = applyRhythmAndAlliteration(text);
    text = applyMoodConsistency(text);
    return text;
  }

  /* ===========================================================
    Export Safe API
  ============================================================ */
  global.AURORA = {
    normalizeEmotion,
    correctGrammar,
    replaceWithThesaurus,
    applyExtendedMetaphors,
    applyRhythmAndAlliteration,
    applyMoodConsistency,
    auroraRefineV8Complete
  };

})(window);

/* ===========================================================
  Aurora v8.1 — Ready for Creative Spark Integration
=========================================================== */
