var Pager = function (data, itemsPerPage, range) {
    var _data = data;
    var _itemsPerPage = itemsPerPage;
    var _range = range;

    var numberOfPages = parseInt(_data.length / _itemsPerPage);

    if (_data.length % _itemsPerPage > 0) {
        numberOfPages++;
    }

    var _pages = [];
    var _pageNumbers = [];

    for (var page = 1; page <= numberOfPages; page++) {
        var pageStart = (page - 1) * _itemsPerPage;
        var pageEnd = pageStart + _itemsPerPage;
        _pages[page] = _data.slice(pageStart, pageEnd);
        _pageNumbers.push(page);
    }


    this.pages = _pages;
    this.currentPageNumber = 1;
    this.lastPageNumber = _pages.length - 1;
    this.pageNumbers = _pageNumbers;
    this.visiblePageNumbers = function() {
        if (_range && _range < this.pageNumbers.length) {
            var _visiblePageNumbers = [];
            var minPage;
            var maxPage;

            minPage = this.currentPageNumber - parseInt(_range / 2);
            if (minPage < 1) {
                minPage = 1;
            }

            maxPage = minPage + _range - 1;
            if (maxPage > this.lastPageNumber) {
                maxPage = this.lastPageNumber;
                minPage = maxPage - _range + 1;
            } 

            for (var page = minPage; page <= maxPage; page++) {
                _visiblePageNumbers.push(page);
            }
        } else {
            _visiblePageNumbers = _pageNumbers;
        }
        return _visiblePageNumbers;
    }

    this.goToPage = function (pageNumber) {
        if (_pages[pageNumber]) {
            this.currentPageNumber = pageNumber;
        }
    };

    this.nextPage = function () {
        this.goToPage(this.currentPageNumber + 1);
    };

    this.previousPage = function () {
        this.goToPage(this.currentPageNumber - 1);
    };
};
