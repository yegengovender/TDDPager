var list = [
    'object1',
    'object2',
    'object3',
    'object4',
    'object5',
    'object6',
    'object7',
    'object8'
];

var longlist = [
    'object1',
    'object2',
    'object3',
    'object4',
    'object5',
    'object6',
    'object7',
    'object8',
    'object9',
    'object10',
    'object11',
    'object12',
    'object13',
    'object14',
    'object15',
    'object16',
    'object17',
    'object18',
    'object19',
    'object20',
    'object21',
    'object22',
    'object23',
    'object24',
    'object25',
    'object26',
    'object27',
    'object28',
    'object29',
    'object30',
    'object31',
    'object32',
    'object33',
    'object34',
    'object35',
    'object36',
    'object37',
    'object38',
    'object39',
    'object40',
];

var pager;

describe("Pager", function () {
    it("accepts a list of objects to page, and number of items per page", function () {
        pager = new Pager(list, 4);
        expect(pager).toBeTruthy();
    });

    it("number of pages for list is length of list divided by number of items per page, and an extra page for remainder", function () {
        pager = new Pager(list, 3);
        expect(pager.pages.length).toEqual(4);
        pager = new Pager(list, 4);
        expect(pager.pages.length).toEqual(3); // array with indexes starting at 1 has length more than count of values
    });

    it("divides list into data for each page", function () {
        var page1 = list.slice(0, 3),
            page2 = list.slice(3, 6),
            page3 = list.slice(6, 8);
        pager = new Pager(list, 3);
        expect(pager.pages[1]).toEqual(page1);
        expect(pager.pages[2]).toEqual(page2);
        expect(pager.pages[3]).toEqual(page3);
    });

    it("initially sets current page to 1", function () {
        pager = new Pager(list, 3);
        expect(pager.currentPageNumber).toEqual(1);
    });

    it("nextPage will increment currentPageNumber except on last page", function () {
        pager = new Pager(list, 3);
        pager.nextPage();
        expect(pager.currentPageNumber).toEqual(2);
        pager.nextPage();
        expect(pager.currentPageNumber).toEqual(3);
        pager.nextPage();
        expect(pager.currentPageNumber).toEqual(3);
    });

    it("goToPage will change currentPageNumber if that page exists", function () {
        pager = new Pager(list, 3);
        pager.goToPage(3);
        expect(pager.currentPageNumber).toEqual(3);
        pager.goToPage(4);
        expect(pager.currentPageNumber).toEqual(3);
        pager.goToPage(-1);
        expect(pager.currentPageNumber).toEqual(3);
        pager.goToPage(2);
        expect(pager.currentPageNumber).toEqual(2);
    });

    it("previousPage will decrement currentPageNumber if previous page exists", function () {
        pager = new Pager(list, 3);
        pager.previousPage();
        expect(pager.currentPageNumber).toEqual(1);
        pager.goToPage(3);
        pager.previousPage();
        expect(pager.currentPageNumber).toEqual(2);
        pager.previousPage();
        expect(pager.currentPageNumber).toEqual(1);
        pager.previousPage();
        expect(pager.currentPageNumber).toEqual(1);
    });

    it("lastPage will return last page number available", function () {
        pager = new Pager(list, 3);
        expect(pager.lastPageNumber).toEqual(3);
        pager = new Pager(list, 4);
        expect(pager.lastPageNumber).toEqual(2);
    });

    it("has the list of page numbers", function () {
        pager = new Pager(list, 3);
        expect(pager.pageNumbers).toEqual([1, 2, 3]);
    });

    it("visible page numbers are all page numbers if range is not specified", function () {
        pager = new Pager(longlist, 6);
        expect(pager.visiblePageNumbers()).toEqual([1, 2, 3, 4, 5, 6, 7]);
    });

    it("visible page numbers count is specified by range parameter", function () {
        pager = new Pager(longlist, 6, 4);
        expect(pager.visiblePageNumbers()).toEqual([1, 2, 3, 4]);
    });

    it("visible page numbers count is first few pages when on first page", function () {
        pager = new Pager(longlist, 6, 4);
        expect(pager.visiblePageNumbers()).toEqual([1, 2, 3, 4]);
    });

    it("visible page numbers count is last few pages when on last page", function () {
        pager = new Pager(longlist, 6, 4);
        pager.goToPage(pager.lastPageNumber);
        expect(pager.visiblePageNumbers()).toEqual([4, 5, 6, 7]);
    });

    it("visible page numbers count is not more than page numbers", function () {
        pager = new Pager(longlist, 10, 5);
        pager.goToPage(pager.lastPageNumber);
        expect(pager.visiblePageNumbers()).toEqual([1, 2, 3, 4]);
    });

    it("visible page numbers is range amount with current page in the 'middle'", function () {
        pager = new Pager(longlist, 6, 4);
        pager.goToPage(4);
        expect(pager.visiblePageNumbers()).toEqual([2, 3, 4, 5]);
        pager.goToPage(5);
        expect(pager.visiblePageNumbers()).toEqual([3, 4, 5, 6]);
        pager = new Pager(longlist, 8, 3);
        pager.goToPage(3);
        expect(pager.visiblePageNumbers()).toEqual([2, 3, 4]);
    });
});
