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

    it("initially sets current page to 1", function() {
        pager = new Pager(list, 3);
        expect(pager.currentPageNumber).toEqual(1);
    });

    it("nextPage will increment currentPageNumber except on last page", function() {
        pager = new Pager(list, 3);
        pager.nextPage();
        expect(pager.currentPageNumber).toEqual(2);
        pager.nextPage();
        expect(pager.currentPageNumber).toEqual(3);
        pager.nextPage();
        expect(pager.currentPageNumber).toEqual(3);
    });

    it("goToPage will change currentPageNumber if that page exists", function() {
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

});