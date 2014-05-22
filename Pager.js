var Pager = function (data, itemsPerPage) {
    var _data = data;
    var _itemsPerPage = itemsPerPage;
    var numberOfPages = parseInt(_data.length / _itemsPerPage);

    if (_data.length % _itemsPerPage > 0) {
        numberOfPages++;
    }

    var _pages = [];

    for (var page = 1; page <= numberOfPages; page++) {
        var pageStart = (page-1) * _itemsPerPage;
        var pageEnd = pageStart + _itemsPerPage;
        _pages[page] = _data.slice(pageStart, pageEnd);
    }

    this.pages = _pages;
    this.currentPageNumber = 1;
    this.lastPageNumber = _pages.length - 1;

    this.goToPage = function (pageNumber) {
        if (_pages[pageNumber]) {
            this.currentPageNumber = pageNumber;
        }
    };

    this.nextPage = function () {
        this.goToPage(this.currentPageNumber + 1);
    };

    this.previousPage = function() {
        this.goToPage(this.currentPageNumber - 1);
    };
};
