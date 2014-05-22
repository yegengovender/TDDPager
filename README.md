TDDPager
========

Simple javascript library for paging data. Splits data into 'pages' array.


Usage
	var pager = new Pager(_data_, _itemsPerPage_, _range_)
	
	
	**Params**
	
	data: An array to page through.
	itemsPerPage: The maximum number of items each page will contain.
	range: (optional) The number of visible page numbers that can be used to render the navigation. If ommitted all page numbers will be shown.
	
	
	**Output**
	
	
	pager.pages: _Array_. Each item contains a subset of the original data per page.
	this.currentPageNumber: _Int_. Current page of navigation. Defaults to 1.
	this.lastPageNumber: _Int_. Last page of navigation.
	this.pageNumbers: _Array[Int]_. Collection of page numbers
	this.visiblePageNumbers(): Returns _Array[Int]_. Collection of page numbers visible during navigation
  this.goToPage(pageNumber): Changes current page number to page specified.
  this.nextPage(): Changes current page number to next page.
  this.previousPage(): Changes current page number to previous page.


Example

            <a class="btn btn-info" href="#" ng-click="pager.goToPage(1)"><<</a>
            <a class="btn btn-info" href="#" ng-click="pager.previousPage()"><</a>
            <div class="fullsize-pager">
                <a class="btn" href="#"
                   ng-repeat="pageNumber in pager.visiblePageNumbers()"
                   ng-click="pager.goToPage(pageNumber)"
                   ng-class="{'btn-primary': (pager.currentPageNumber == pageNumber), 'btn-info': (pager.currentPageNumber != pageNumber)}">
                    {{pageNumber}}
                </a>                
            </div>
            <div class="mobile-pager">Page {{pager.currentPageNumber}} / {{pager.pages.length - 1}}</div>
            <a class="btn btn-info" href="#" ng-click="pager.nextPage()">></a>
            <a class="btn btn-info" href="#" ng-click="pager.goToPage(pager.lastPageNumber)">>></a>
  
  
  
