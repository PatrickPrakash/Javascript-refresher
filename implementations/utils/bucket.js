class Bucket {
  constructor() {
    this.bucket = [];
  }

  get(key) {
    for (const [k, v] of this.bucket) {
      if (k == key) {
        return v;
      }
    }
    return -1;
  }

  update(key, value) {
    let isFound = false;
    for (let index = 0; index < this.bucket.length; index++) {
      const [k, v] = this.bucket[index];
      if (k == key) {
        this.bucket[index] = [key, value];
        isFound = true;
        break;
      }
    }
    if (!isFound) {
      this.bucket.push([key, value]);
    }
  }

  remove(key) {
    for (let index = 0; index < this.bucket.length; index++) {
      const [k, v] = this.bucket[index];

      if (k == key) {
        this.bucket.splice(index, 1);
        break
      }
    }
  }
}

export default Bucket;
