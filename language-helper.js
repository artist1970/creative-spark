/* Simple language polish for Creative Spark */

const typoList = ["teh","recieve","definately","occured","seperated"];
const typoFixes = ["the","receive","definitely","occurred","separated"];

export function cleanSentence(text) {
  let fixed = text;

  // basic typo fixes
  typoList.forEach((word, i) => {
    const re = new RegExp("\\b" + word + "\\b", "gi");
    fixed = fixed.replace(re, typoFixes[i]);
  });

  // double spaces → one
  fixed = fixed.replace(/\s{2,}/g, " ");

  // capitalize first letter & ensure ending period
  fixed = fixed.charAt(0).toUpperCase() + fixed.slice(1);
  if (!/[.!?]$/.test(fixed)) fixed += ".";

  return fixed;
}
