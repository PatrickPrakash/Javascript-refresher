import Bucket from "./utils/bucket.js";

class Hashmap {
  constructor() {
    this.hashCode = 2069;
    this.buckets = Array.from({ length: this.hashCode }, () => new Bucket());
  }

  put(key, value) {
    let hashedKey = this.hash(key);
    console.log(hashedKey);
    this.buckets[hashedKey].update(key, value);
  }

  get(key) {
    let hashedKey = this.hash(key);
    return this.buckets[hashedKey].get(key);
  }

  remove(key) {
    let hashedKey = this.hash(key);
    this.buckets[hashedKey].remove;
  }

  hash(key) {
    let hash = 0;
    if (typeof key == "string") {
      for (let i = 0; i < key.length; i++) {
        hash = (hash * this.hashCode + key.charCodeAt(i)) % this.hashCode;
      }
    } else {
      hash = key % this.hashCode;
    }
    return hash;
  }
}
export default Hashmap;
