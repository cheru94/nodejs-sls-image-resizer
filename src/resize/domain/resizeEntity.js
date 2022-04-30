const { v4: uuid } = require('uuid');

class RequestEntity {
  constructor() {
    this.build();
  }

  build() {
    this.requestId = uuid();
  }
}

module.exports = RequestEntity;
