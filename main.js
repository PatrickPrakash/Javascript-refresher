import Hashmap from "./implementations/hashmap.js";

(function () {
  const hashMap = new Hashmap(); // pass a suitable key space size
  hashMap.put("Patrick", "Prakash");
  hashMap.put("aff1", "Prakash");
  hashMap.put("aff12", "Prakash");
  hashMap.put("aff13", "Prakash");
  hashMap.put("aff14", "Prakash");
  hashMap.put("aff15", "Prakash");
  hashMap.put("aff16", "Prakash");
  hashMap.put("aff17", "Prakash");
  hashMap.put("aff18", "Prakash");
  hashMap.put("aff19", "Prakash");
  hashMap.put("aff10", "koko");
  hashMap.put(1, "koko");
  hashMap.put(2, "kok2");

  console.log(hashMap.get(1));
  console.log(hashMap.get(2));

  // hashMap.remove(key);
})();
