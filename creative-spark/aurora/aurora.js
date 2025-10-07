/* ===========================================================
🌸 Aurora Language Refinement Core v6.1
Grammar Logic + Semantic Flow + Thesaurus Enhancement
For PLERA / Archaemenes Academy / Creative Spark
=========================================================== */

console.log("Aurora v6.1 — Language Refinement Engine Loaded");

/**
 * auroraRefine
 * @param {string} text - Input text string
 * @returns {string} refined text with grammar and flow corrections
 */
function auroraRefine(text) {
  if (!text) return "";

  // --- Emotion → Noun normalization ---
  const emotionMap = {
    happy:"happiness", sad:"sadness", angry:"anger", lonely:"solitude",
    brave:"courage", calm:"serenity", peaceful:"peace", hopeful:"hope",
    joyful:"joy", melancholy:"melancholy", loving:"love"
  };
  for (const [k,v] of Object.entries(emotionMap)) {
    text = text.replace(new RegExp("\\b"+k+"\\b","gi"), v);
  }

  // --- Article correction (a → an) ---
  text = text.replace(/\ba ([aeiou])/gi, "an $1");

  // --- Soft synonym upgrades (for variety) ---
  const swap = {
    nice:"graceful", pretty:"lovely", big:"vast", small:"delicate",
    fast:"swift", slow:"gentle", bright:"radiant", dark:"shadowed",
    cool:"serene", warm:"golden", deep:"profound"
  };
  for (const [k,v] of Object.entries(swap)) {
    text = text.replace(new RegExp("\\b"+k+"\\b","gi"), v);
  }

  // --- Flow & punctuation polish ---
  text = text.replace(/\s{2,}/g," ").trim();
  text = text.charAt(0).toUpperCase() + text.slice(1);
  if (!/[.!?]$/.test(text)) text += ".";

  return text;
}
