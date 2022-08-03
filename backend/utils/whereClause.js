class WhereClause {
  constructor(base, bigQ) {
    this.base = base;
    this.bigQ = bigQ;
  }

  search() {
    const searchWord = this.bigQ.search
      ? {
          name: {
            $regex: this.bigQ.search,
            $options: 'i',
          },
        }
      : {};
    this.base = this.base.find({ ...searchWord });
    return this;
  }

  filter() {
    const copyQ = { ...this.bigQ };

    delete copyQ['search'];
    delete copyQ['limit'];
    delete copyQ['page'];

    //convert bigQ into a string

    let decodedQ = JSON.stringify(copyQ);

    decodedQ = decodedQ.replace(/\b(gte|lte|gt|lt)\b/g, (m) => '$${m}');

    const encodedQ = JSON.parse(decodedQ);

    this.base = this.base.find(encodedQ);

    return this;
  }

  pager(resultPerPage) {
    let currentPage = this.bigQ.page ?? 1;

    const skipVal = resultPerPage * (currentPage - 1);

    this.base = this.base.limit(resultPerPage).skip(skipVal);

    return this;
  }
}

module.exports = WhereClause;
