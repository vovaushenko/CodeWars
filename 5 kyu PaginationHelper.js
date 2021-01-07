// https://www.codewars.com/kata/587c2d08bb65b5e8040004fd

class PaginationHelper {
    constructor(collection, itemsPerPage) {
        this.collection = collection;
        this.itemsPerPage = itemsPerPage;
    }

    itemCount() {
        return this.collection.length;
    }

    pageCount() {
        return Math.ceil(this.itemCount() / this.itemsPerPage);
    }

    pageItemCount(pageIndex) {
        return pageIndex > this.pageCount() - 1 || pageIndex < 0
            ? -1
            : this.itemsPerPage -
                  Math.ceil(
                      (((pageIndex + 1) * this.itemsPerPage) % this.itemCount()) % this.itemsPerPage
                  );
    }

    pageIndex(itemIndex) {
        return itemIndex > this.itemCount() - 1 || itemIndex < 0
            ? -1
            : Math.ceil((itemIndex + 1) / this.itemsPerPage) - 1;
    }
}
